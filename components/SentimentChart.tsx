// components/SentimentChart.tsx
import React, { useMemo } from 'react';
import { useTheme } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import type { TrendPoint } from '@/mocks/trendData';

interface SentimentChartProps {
  data: TrendPoint[];
}

const SentimentChart: React.FC<SentimentChartProps> = ({ data}) => {
  const theme = useTheme();
  const dates = useMemo(
    () => data.map((d) => new Date(d.date)),
    [data]
  );

  const sentiments = useMemo(
    () => data.map((d) => d.sentiment),
    [data]
  );

  return (
    <LineChart
      xAxis={[{ data: dates }]}
      series={[{ data: sentiments }]}
      height={300}
      sx={{ bgcolor: theme.palette.background.paper }}
    />
  );
};

export default SentimentChart;
