'use client';

import Link from 'next/link';
import { Box, Typography, Button, Container } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
            minHeight: 'calc(50vh - 64px)',       // account for your AppBar
            bgcolor: 'background.default',         // switches with light/dark
            color: 'text.primary',                 // switches with light/dark
            py: 8,
          }}
      >
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Uri Creative Sentiment Insights
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Dive deep into the sentiment trends for your favorite topics with interactive charts and real-time data.
          </Typography>
        </Container>
      </Box>

      {/* Centered URI Box */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default', 
          color: 'text.primary',
        }}
      >
        <Box textAlign="center">
          <Typography variant="h3" component="h2" gutterBottom>
            #uri
          </Typography>
          <Button component={Link} href="/insights/uri" variant="contained" size="large">
            View Insights
          </Button>
        </Box>
      </Box>
    </Box>
    );
    }