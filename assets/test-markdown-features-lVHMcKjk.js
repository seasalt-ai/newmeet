const e=`---
title: "测试 Markdown 功能 - 表格、链接、图片和视频"
meta_description: "全面测试所有 markdown 功能，包括表格、内部/外部链接、图片和 YouTube 视频嵌入。"
author: "MiniMax Agent"
date: "2025-06-24"
category: "测试"
tags: ["Markdown", "功能", "测试"]
---

# 测试所有 Markdown 功能

这篇博文演示了 SeaMeet 博客系统所有增强的 Markdown 渲染功能。

## 表格

这是一个比较表示例：

| 功能 | SeaMeet | Otter.ai | Fireflies.ai | Read.ai |
|---------|---------|----------|--------------|---------|
| 实时转录 | ✅ 95%+ 准确率 | ✅ 95% 准确率 | ✅ 90% 准确率 | ✅ 92% 准确率 |
| 多语言支持 | ✅ 100+ 种语言 | ✅ 30+ 种语言 | ✅ 40+ 种语言 | ✅ 20+ 种语言 |
| 会议分析 | ✅ 高级 | ✅ 基本 | ✅ 高级 | ✅ 基本 |
| 24/7 全天候覆盖 | ✅ 是 | ❌ 否 | ❌ 否 | ❌ 否 |
| 发言人识别 | ✅ 是 | ✅ 是 | ✅ 是 | ✅ 是 |
| 行动项检测 | ✅ 高级 AI | ✅ 基本 | ✅ 高级 | ✅ 基本 |
| CRM 集成 | ✅ 原生 | ✅ 有限 | ✅ 是 | ✅ 是 |
| 移动应用 | ✅ 是 | ✅ 是 | ✅ 是 | ✅ 是 |
| 价格 (每月) | $9.99 | $20.00 | $18.00 | $15.00 |
| 免费套餐 | ✅ 6 hours/lifetime | ✅ 600 mins/month | ✅ 800 mins/month | ✅ 10 meetings/month |

### 价格比较表

| Plan | SeaMeet | Otter.ai | Fireflies.ai |
|------|---------|----------|--------------|
| **Free** | 6 hours lifetime | 600 mins/month | 800 mins/month |
| **Individual** | $9.99/month | $16.99/month | $10/month |
| **Team** | $14.99/user | $20/user | $19/user |
| **Enterprise** | Custom | Custom | Custom |

## 链接

### 内部链接
- [访问我们的主要功能页面](/features)
- [查看我们的定价](/pricing)
- [了解我们的 AI 助手](/features/ai-assistant)

### 外部链接
- [访问 OpenAI](https://openai.com)
- [访问 Google](https://google.com)
- [SeaMeet 官方网站](https://meet.seasalt.ai)

### Markdown 文件链接
- [阅读我们的综合指南](./how-to-run-more-effective-meetings.md)
- [AI 会议助手见解](./the-rise-of-the-ai-meeting-assistant.md)

## 图片

以下是一些展示 SeaMeet 功能的示例图片：

![团队会议](team-meeting.jpg)
*使用 AI 辅助的高效团队会议*

![分析仪表盘](analytics-dashboard.jpg)
*实时会议分析与见解*

![企业安全](enterprise-security.png)
*为商务会议提供的企业级安全功能*

![全球沟通](global-communication.png)
*全球团队使用多语言转录进行协作*

![销售团队](sales-team.jpg)
*销售团队使用 AI 跟踪客户对话*

![招聘面试](recruitment-interview.jpg)
*人力资源团队使用 AI 笔记简化面试流程*

## YouTube 视频

以下是如何使用我们的自定义 Markdown 语法嵌入 YouTube 视频：

![SeaMeet 演示视频](youtube:dQw4w9WgXcQ)
*SeaMeet AI 驱动的会议辅助功能介绍*

![AI 会议功能](youtube:ScMzIvxBSi4)
*AI 会议助手的高级功能*

![远程团队协作](youtube:oHg5SJYRHA0)
*远程团队如何使用 AI 实现更好的协作*

### 视频嵌入提示

视频会自动响应并包括：
- 延迟加载以提高性能
- 自定义缩略图支持
- 自动保持宽高比
- 移动优化的播放控件

## 代码示例

### 行内代码
使用 \`npm run dev\` 命令启动开发服务器。

### Code Blocks

\`\`\`javascript
// Example of SeaMeet API integration
const seameet = new SeaMeetClient({
  apiKey: 'your-api-key',
  language: 'en'
});

async function transcribeMeeting(audioFile) {
  const result = await seameet.transcribe({
    audio: audioFile,
    features: ['transcription', 'summary', 'action-items']
  });
  
  return result;
}
\`\`\`

\`\`\`python
# Python example - Advanced SeaMeet API integration
import seameet
import asyncio
from datetime import datetime

class MeetingManager:
    def __init__(self, api_key):
        self.client = seameet.Client(api_key=api_key)
    
    async def process_meeting(self, audio_file, meeting_metadata):
        try:
            # Transcribe the meeting
            result = await self.client.transcribe_meeting(
                audio_file=audio_file,
                language='auto-detect',
                features=['transcription', 'summary', 'action_items', 'sentiment']
            )
            
            # Extract key insights
            insights = await self.client.analyze_meeting(result.transcript_id)
            
            # Generate follow-up actions
            actions = self.extract_action_items(result.action_items)
            
            return {
                'transcript': result.transcript,
                'summary': result.summary,
                'actions': actions,
                'sentiment': insights.sentiment_analysis,
                'participants': insights.speaker_analysis
            }
        except Exception as e:
            print(f"Error processing meeting: {e}")
            return None
    
    def extract_action_items(self, raw_actions):
        return [
            {
                'task': action.description,
                'assignee': action.assigned_to,
                'due_date': action.due_date,
                'priority': action.priority
            }
            for action in raw_actions
        ]

# Usage example
async def main():
    manager = MeetingManager('your-api-key')
    result = await manager.process_meeting(
        'team_standup_2024.mp3',
        {'team': 'engineering', 'type': 'standup'}
    )
    print(f"Meeting processed: {result['summary']}")

if __name__ == "__main__":
    asyncio.run(main())
\`\`\`

\`\`\`typescript
// TypeScript/React example - SeaMeet Dashboard Component
import React, { useState, useEffect } from 'react';
import { SeaMeetClient, Meeting, TranscriptData } from '@seameet/sdk';

interface MeetingDashboardProps {
  apiKey: string;
  userId: string;
}

interface MeetingStats {
  totalMeetings: number;
  totalHours: number;
  averageParticipants: number;
  topTopics: string[];
}

const MeetingDashboard: React.FC<MeetingDashboardProps> = ({ apiKey, userId }) => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [stats, setStats] = useState<MeetingStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [client] = useState(() => new SeaMeetClient({ apiKey }));

  useEffect(() => {
    const fetchMeetingData = async () => {
      try {
        const recentMeetings = await client.meetings.list({
          userId,
          limit: 10,
          include: ['transcript', 'summary', 'participants']
        });

        const analyticsData = await client.analytics.getUserStats(userId, {
          timeRange: '30d'
        });

        setMeetings(recentMeetings);
        setStats(analyticsData);
      } catch (error) {
        console.error('Failed to fetch meeting data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetingData();
  }, [client, userId]);

  const handleMeetingSearch = async (query: string) => {
    const searchResults = await client.search.meetings({
      query,
      userId,
      filters: {
        dateRange: '7d',
        includeTranscripts: true
      }
    });
    
    return searchResults.map(result => ({
      meetingId: result.id,
      relevantSnippets: result.highlights,
      confidence: result.score
    }));
  };

  if (loading) {
    return <div className="loading-spinner">Loading meetings...</div>;
  }

  return (
    <div className="meeting-dashboard">
      <h1>Meeting Dashboard</h1>
      
      {stats && (
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Meetings</h3>
            <p>{stats.totalMeetings}</p>
          </div>
          <div className="stat-card">
            <h3>Hours Saved</h3>
            <p>{stats.totalHours}</p>
          </div>
          <div className="stat-card">
            <h3>Avg Participants</h3>
            <p>{stats.averageParticipants}</p>
          </div>
        </div>
      )}

      <div className="recent-meetings">
        <h2>Recent Meetings</h2>
        {meetings.map(meeting => (
          <div key={meeting.id} className="meeting-card">
            <h3>{meeting.title}</h3>
            <p>{meeting.summary}</p>
            <div className="meeting-meta">
              <span>Duration: {meeting.duration}</span>
              <span>Participants: {meeting.participants.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingDashboard;
\`\`\`

\`\`\`bash
# Shell script example - SeaMeet CLI automation
#!/bin/bash

# SeaMeet Meeting Automation Script
# Automates meeting transcription and reporting

set -e

SEAMEET_API_KEY="\${SEAMEET_API_KEY:-}"
MEETING_DIR="\${MEETING_DIR:-./meetings}"
OUTPUT_DIR="\${OUTPUT_DIR:-./reports}"

if [ -z "$SEAMEET_API_KEY" ]; then
    echo "Error: SEAMEET_API_KEY environment variable is required"
    exit 1
fi

# Function to process a single meeting file
process_meeting() {
    local file="$1"
    local filename=$(basename "$file" .mp3)
    
    echo "Processing meeting: $filename"
    
    # Upload and transcribe meeting
    curl -X POST "https://api.seameet.ai/v1/transcribe" \\
        -H "Authorization: Bearer $SEAMEET_API_KEY" \\
        -H "Content-Type: multipart/form-data" \\
        -F "audio=@$file" \\
        -F "language=auto" \\
        -F "features=transcription,summary,action_items" \\
        -o "\${OUTPUT_DIR}/\${filename}_result.json"
    
    # Extract summary
    jq -r '.summary' "\${OUTPUT_DIR}/\${filename}_result.json" > "\${OUTPUT_DIR}/\${filename}_summary.txt"
    
    # Extract action items
    jq -r '.action_items[] | "- \\(.description) (Assigned: \\(.assignee), Due: \\(.due_date))"' \\
        "\${OUTPUT_DIR}/\${filename}_result.json" > "\${OUTPUT_DIR}/\${filename}_actions.txt"
    
    echo "✅ Completed: $filename"
}

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Process all MP3 files in the meeting directory
for meeting_file in "$MEETING_DIR"/*.mp3; do
    if [ -f "$meeting_file" ]; then
        process_meeting "$meeting_file"
    fi
done

# Generate consolidated report
echo "Generating consolidated report..."
{
    echo "# Meeting Processing Report"
    echo "Generated on: $(date)"
    echo ""
    
    for summary in "$OUTPUT_DIR"/*_summary.txt; do
        if [ -f "$summary" ]; then
            filename=$(basename "$summary" _summary.txt)
            echo "## Meeting: $filename"
            echo "### Summary"
            cat "$summary"
            echo ""
            echo "### Action Items"
            cat "\${OUTPUT_DIR}/\${filename}_actions.txt"
            echo ""
            echo "---"
            echo ""
        fi
    done
} > "$OUTPUT_DIR/consolidated_report.md"

echo "🎉 All meetings processed! Report available at: $OUTPUT_DIR/consolidated_report.md"
\`\`\`

\`\`\`sql
-- SQL example - SeaMeet Analytics Queries
-- Database schema for meeting analytics

-- Create meetings table
CREATE TABLE meetings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    duration_minutes INTEGER GENERATED ALWAYS AS (
        EXTRACT(EPOCH FROM (end_time - start_time)) / 60
    ) STORED,
    transcript TEXT,
    summary TEXT,
    sentiment_score DECIMAL(3,2) CHECK (sentiment_score BETWEEN -1.0 AND 1.0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create participants table
CREATE TABLE meeting_participants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meeting_id UUID REFERENCES meetings(id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    speaking_time_minutes DECIMAL(5,2),
    participation_score DECIMAL(3,2) CHECK (participation_score BETWEEN 0.0 AND 1.0),
    joined_at TIMESTAMP WITH TIME ZONE,
    left_at TIMESTAMP WITH TIME ZONE
);

-- Create action items table
CREATE TABLE action_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meeting_id UUID REFERENCES meetings(id) ON DELETE CASCADE,
    description TEXT NOT NULL,
    assignee_id UUID,
    assignee_name VARCHAR(255),
    due_date DATE,
    priority VARCHAR(20) CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics queries

-- 1. Meeting productivity metrics
SELECT 
    DATE_TRUNC('week', start_time) as week,
    COUNT(*) as total_meetings,
    AVG(duration_minutes) as avg_duration,
    AVG(sentiment_score) as avg_sentiment,
    SUM(duration_minutes) as total_meeting_time
FROM meetings 
WHERE start_time >= NOW() - INTERVAL '12 weeks'
GROUP BY week 
ORDER BY week;

-- 2. Top participants by speaking time
SELECT 
    mp.name,
    mp.email,
    COUNT(DISTINCT mp.meeting_id) as meetings_attended,
    AVG(mp.speaking_time_minutes) as avg_speaking_time,
    AVG(mp.participation_score) as avg_participation
FROM meeting_participants mp
JOIN meetings m ON mp.meeting_id = m.id
WHERE m.start_time >= NOW() - INTERVAL '30 days'
GROUP BY mp.name, mp.email
ORDER BY avg_speaking_time DESC
LIMIT 10;

-- 3. Action item completion rates
SELECT 
    assignee_name,
    COUNT(*) as total_actions,
    COUNT(*) FILTER (WHERE status = 'completed') as completed_actions,
    ROUND(
        COUNT(*) FILTER (WHERE status = 'completed') * 100.0 / COUNT(*), 
        2
    ) as completion_rate
FROM action_items
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY assignee_name
HAVING COUNT(*) >= 3
ORDER BY completion_rate DESC;

-- 4. Meeting efficiency trends
WITH meeting_efficiency AS (
    SELECT 
        m.id,
        m.title,
        m.duration_minutes,
        COUNT(ai.id) as action_items_count,
        CASE 
            WHEN m.duration_minutes <= 30 AND COUNT(ai.id) >= 2 THEN 'efficient'
            WHEN m.duration_minutes <= 60 AND COUNT(ai.id) >= 3 THEN 'moderate'
            ELSE 'inefficient'
        END as efficiency_rating
    FROM meetings m
    LEFT JOIN action_items ai ON m.id = ai.meeting_id
    WHERE m.start_time >= NOW() - INTERVAL '90 days'
    GROUP BY m.id, m.title, m.duration_minutes
)
SELECT 
    efficiency_rating,
    COUNT(*) as meeting_count,
    ROUND(AVG(duration_minutes), 2) as avg_duration,
    ROUND(AVG(action_items_count), 2) as avg_action_items
FROM meeting_efficiency
GROUP BY efficiency_rating
ORDER BY 
    CASE efficiency_rating 
        WHEN 'efficient' THEN 1 
        WHEN 'moderate' THEN 2 
        WHEN 'inefficient' THEN 3 
    END;
\`\`\`

## Lists

### Unordered Lists
- Real-time transcription
- AI-powered summaries
- Action item extraction
- Multi-language support
  - English
  - Spanish
  - French
  - German
  - Japanese
  - Chinese (Simplified & Traditional)

### Ordered Lists
1. Join your meeting platform (Zoom, Teams, Google Meet)
2. Invite SeaMeet bot to the meeting
3. Let AI handle transcription and note-taking
4. Receive automated summary and action items
5. Share results with your team

## Quotes

> "SeaMeet has revolutionized how our global team handles meetings. The 24/7 coverage means no one misses important discussions, regardless of time zones."
> 
> — Sarah Chen, VP of Operations at TechCorp

## Advanced Formatting

### Text Formatting
This text demonstrates **bold formatting** and *italic formatting*.

You can also combine ***bold and italic*** formatting.

Here's ~~strikethrough text~~ and \`inline code formatting\`.

### Mathematical Expressions
Inline math: The meeting efficiency can be calculated as E = (A/T) × 100, where A is action items and T is time.

Block math:
\`\`\`
Productivity Score = (Action Items Completed / Total Meeting Time) × Engagement Rate
\`\`\`

### Keyboard Shortcuts
Use <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text, or <kbd>Cmd</kbd> + <kbd>V</kbd> on Mac to paste.

Press <kbd>Space</kbd> to pause/play video during meetings.

### Horizontal Rules
---

### Links with Titles
[SeaMeet Features](/features "Discover SeaMeet's powerful AI features")

[External Link](https://example.com "Visit our partner site")

### Footnotes
SeaMeet uses advanced AI algorithms[^1] to provide accurate transcriptions[^2].

[^1]: Our AI is trained on millions of hours of meeting data
[^2]: Accuracy rates exceed 95% in optimal conditions

## Special Features

### Callout Boxes

> 💡 **Pro Tip**: Use SeaMeet's meeting analytics to identify patterns in your team's communication and improve meeting effectiveness.

> ⚠️ **Important**: Make sure to configure your meeting platform's permissions to allow SeaMeet bot access.

> ✅ **Success Story**: "After implementing SeaMeet, our team reduced meeting time by 40% while increasing action item completion by 85%." - Tech Lead at StartupCorp

> 🚀 **New Feature**: Real-time sentiment analysis now available in beta for Enterprise customers.

> 📊 **Statistics**: Teams using SeaMeet report 65% faster decision-making and 73% better meeting follow-through.

### Task Lists

Planning your SeaMeet implementation:

- [x] Sign up for SeaMeet account
- [x] Connect calendar integration
- [x] Configure meeting platforms
- [ ] Train team on new workflow  
- [ ] Set up automated reporting
- [ ] Review analytics dashboard
- [ ] Optimize meeting schedules

### Definition Lists

AI Transcription
: The process of converting spoken words into written text using artificial intelligence

Meeting Analytics  
: Data-driven insights about meeting patterns, participation, and effectiveness

Action Items
: Specific tasks or decisions identified during meetings that require follow-up

Speaker Identification
: Technology that distinguishes between different voices in a meeting recording

### Emoji Support

SeaMeet supports meetings in multiple formats:
- 🎥 Video conferences (Zoom, Teams, Meet)
- 📞 Audio-only calls  
- 🏢 In-person meetings
- 🌍 Multi-language sessions
- 📱 Mobile recordings
- ☁️ Cloud-based storage

---

## Summary

This comprehensive test demonstrates the full range of markdown features supported by the SeaMeet blog system:

### Content Features
- ✅ **Complex Tables** - Multi-column comparison tables with advanced formatting
- ✅ **Rich Media** - Images with captions and responsive YouTube video embedding  
- ✅ **Code Highlighting** - Syntax highlighting for JavaScript, TypeScript, Python, SQL, Bash
- ✅ **Advanced Links** - Internal, external, and markdown file linking with titles

### Formatting Features  
- ✅ **Text Styling** - Bold, italic, strikethrough, inline code, keyboard shortcuts
- ✅ **Lists** - Ordered, unordered, nested, and task lists with checkboxes
- ✅ **Callouts** - Info boxes, warnings, success stories, and feature highlights
- ✅ **Mathematical** - Inline and block mathematical expressions
- ✅ **Quotes** - Blockquotes with attribution and styling

### Interactive Elements
- ✅ **Task Management** - Interactive checklists for implementation planning
- ✅ **Footnotes** - Reference system for detailed explanations  
- ✅ **Definition Lists** - Structured terminology definitions
- ✅ **Emoji Support** - Native emoji rendering for visual appeal

### Technical Capabilities
- ✅ **Responsive Design** - All elements adapt to mobile and desktop
- ✅ **SEO Optimization** - Proper heading structure and meta information
- ✅ **Performance** - Lazy loading for images and videos
- ✅ **Accessibility** - Screen reader friendly markup

---

🎉 **Ready to experience SeaMeet's powerful AI meeting assistance?** 

Transform your meetings from time-wasters into productivity boosters. Our advanced transcription, intelligent summaries, and automated action items will revolutionize how your team collaborates.

[**Start Your Free Trial Today**](/pricing) and join thousands of teams already using AI to make their meetings more effective! 

*No credit card required • Full access to all features • 24/7 meeting coverage*`;export{e as default};
