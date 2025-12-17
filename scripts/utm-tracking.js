// UTM 追蹤管理工具
(function () {
    // UTM 參數列表
    const UTM_PARAMETERS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const UTM_STORAGE_KEY = 'seameet_utm_params';

    // 從 URL 中提取 UTM 參數
    function extractUTMFromURL(url = window.location.href) {
        const urlObj = new URL(url);
        const utmParams = {};

        UTM_PARAMETERS.forEach(param => {
            const value = urlObj.searchParams.get(param);
            if (value) {
                utmParams[param] = value;
            }
        });

        return utmParams;
    }

    // 保存 UTM 參數到 sessionStorage
    function saveUTMParams(utmParams) {
        if (Object.keys(utmParams).length > 0) {
            try {
                sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmParams));
                // console.log('UTM 參數已保存:', utmParams);

                // 觸發 GTM 事件
                if (window.dataLayer) {
                    window.dataLayer.push({
                        event: 'utm_params_captured',
                        utm_params: utmParams
                    });
                }
            } catch (error) {
                // console.warn('無法保存 UTM 參數:', error);
            }
        }
    }

    // 獲取已保存的 UTM 參數
    function getSavedUTMParams() {
        try {
            const saved = sessionStorage.getItem(UTM_STORAGE_KEY);
            return saved ? JSON.parse(saved) : {};
        } catch (error) {
            // console.warn('無法讀取已保存的 UTM 參數:', error);
            return {};
        }
    }

    // 將 UTM 參數添加到 URL
    function appendUTMToURL(url, utmParams) {
        if (Object.keys(utmParams).length === 0) return url;

        try {
            const urlObj = new URL(url);
            Object.entries(utmParams).forEach(([key, value]) => {
                if (value) {
                    urlObj.searchParams.set(key, value);
                }
            });
            return urlObj.toString();
        } catch (error) {
            // console.warn('無法處理 URL:', url, error);
            return url;
        }
    }

    // 判斷是否為外部連結
    function isExternalLink(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.hostname !== window.location.hostname;
        } catch (error) {
            return false;
        }
    }

    // 設置外部連結追蹤
    function setupExternalLinkTracking() {
        document.addEventListener('click', function (event) {
            const target = event.target;
            const link = target.closest('a');

            if (!link || !link.href) return;

            // 檢查是否為外部連結
            if (isExternalLink(link.href)) {
                const savedUTM = getSavedUTMParams();

                if (Object.keys(savedUTM).length > 0) {
                    // 在連結上添加 UTM 參數
                    const urlWithUTM = appendUTMToURL(link.href, savedUTM);

                    // 更新連結 href
                    link.href = urlWithUTM;

                    // console.log('已為外部連結添加 UTM 參數:', link.href);

                    // 觸發 GTM 事件
                    if (window.dataLayer) {
                        window.dataLayer.push({
                            event: 'external_link_click_with_utm',
                            link_url: urlWithUTM,
                            utm_params: savedUTM,
                            link_text: link.textContent || link.innerText || ''
                        });
                    }
                }
            }
        });
    }

    // 初始化 UTM 追蹤
    function initUTMTracking() {
        // 檢查當前頁面是否帶有 UTM 參數
        const currentUTM = extractUTMFromURL();
        if (Object.keys(currentUTM).length > 0) {
            saveUTMParams(currentUTM);
        }

        // 設置外部連結點擊監聽器
        setupExternalLinkTracking();

        // 觸發頁面瀏覽事件（用於追蹤帶 UTM 的頁面瀏覽）
        const savedUTM = getSavedUTMParams();
        if (Object.keys(savedUTM).length > 0) {
            if (window.dataLayer) {
                window.dataLayer.push({
                    event: 'page_view_with_utm',
                    page_location: window.location.href,
                    page_title: document.title,
                    utm_params: savedUTM
                });
            }
        }
    }

    // 當 DOM 載入完成時初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initUTMTracking);
    } else {
        initUTMTracking();
    }

    // 公開一些函數到全域，方便調試
    window.seameetUTM = {
        getUTMStatus: function () {
            return {
                currentUTM: extractUTMFromURL(),
                savedUTM: getSavedUTMParams(),
                hasUTM: Object.keys(getSavedUTMParams()).length > 0
            };
        },
        clearUTM: function () {
            try {
                sessionStorage.removeItem(UTM_STORAGE_KEY);
                // console.log('UTM 參數已清除');
            } catch (error) {
                // console.warn('無法清除 UTM 參數:', error);
            }
        }
    };
})();
