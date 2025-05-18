import useSWR from 'swr';

const fetcher = (url: string) =>
    fetch(url).then(res => {
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    });

export const useHashtagTrend = (hashtag: string) => {
  const key = hashtag ? `/api/trends/${hashtag.replace('#', '')}` : null;
  const { data, error, mutate } = useSWR(key, fetcher);
  return {
    data,
    loading: !error && !data,
    error,
    refresh: mutate,
  };
};