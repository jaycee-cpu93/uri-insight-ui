'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {
  Container,
  CircularProgress,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { useHashtagTrend } from '@/hooks/useHashtagTrend';

const HashtagTrendCard = dynamic(
  () => import('@/components/HashtagTrendCard'),
  {
    ssr: false,
    loading: () => (
      <Box mt={4} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    ),
  }
);

const hashtagOptions = ['uri'];

export default function InsightPage() {
  const router = useRouter();
  const params = useParams();

  // Extract hashtag safely from params
  const hashtag =
    typeof params.hashtag === 'string'
      ? params.hashtag
      : Array.isArray(params.hashtag)
      ? params.hashtag[0]
      : 'uri';

  const [selected, setSelected] = useState<string>(hashtag);

  // Keep URL in sync with dropdown selection
  useEffect(() => {
    if (selected !== hashtag) {
      router.replace(`/insights/${selected}`);
    }
  }, [selected, hashtag, router]);

  const { data, loading, error, refresh } = useHashtagTrend(selected);

  const handleChange = useCallback(
    (e: SelectChangeEvent) => setSelected(e.target.value),
    []
  );

  return (
    <Container maxWidth="md" sx={{ backgroundColor: 'background.default' }}>
      {/* Dropdown */}
      <Box mt={4} display="flex" justifyContent="center">
        <Select value={selected} onChange={handleChange}>
          {hashtagOptions.map((h) => (
            <MenuItem key={h} value={h}>
              #{h}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Error message */}
      {error && (
        <Box mt={4} textAlign="center">
          <Typography color="error">Error loading data</Typography>
          <Button onClick={refresh}>Retry</Button>
        </Box>
      )}

      {/* Loading spinner or trend card */}
      {loading || !data ? (
        <Box mt={4} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Box mt={4}>
          <HashtagTrendCard trendData={data} />
        </Box>
      )}
    </Container>
  );
}
