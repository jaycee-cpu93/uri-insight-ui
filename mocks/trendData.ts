export interface TrendPoint {
    date: string;
    sentiment: number;
  }
  export interface TrendData {
    hashtag: string;
    range: string;
    trend: TrendPoint[];
  }
  
  export const trendData: Record<string, TrendData> = {
    uri: {
      hashtag: '#uri',
      range: 'Apr 1 - Apr 7, 2025',
      trend: [
        { date: '2025-04-01', sentiment: -0.2 },
        { date: '2025-04-02', sentiment: 0.0 },
        { date: '2025-04-03', sentiment: 0.1 },
        { date: '2025-04-04', sentiment: 0.3 },
        { date: '2025-04-05', sentiment: 0.2 },
        { date: '2025-04-06', sentiment: 0.4 },
        { date: '2025-04-07', sentiment: 0.5 },
      ],
    },
    
  };