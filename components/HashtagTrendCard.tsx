import React, { useMemo } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import SentimentChart from './SentimentChart';
import type { TrendData } from '@/mocks/trendData';

interface HashtagTrendCardProps {
  trendData: TrendData;
}

const HashtagTrendCard: React.FC<HashtagTrendCardProps> = ({ trendData }) => {
  const { hashtag, range, trend } = trendData;

  const direction = useMemo(() => {
    const first = trend[0].sentiment;
    const last = trend[trend.length - 1].sentiment;
    return last >= first ? '📈' : '📉';
  }, [trend]);

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{hashtag}</Typography>
          <Typography variant="h6">{direction}</Typography>
        </Box>
        <Typography variant="subtitle2" color="textSecondary">
          {range}
        </Typography>
        <Box mt={2}>
          <SentimentChart data={trend} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HashtagTrendCard;