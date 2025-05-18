'use client';

import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, IconButton, Box} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useMemo, useState } from "react";
//import theme from '../theme';


export default function RootLayout({
  children,
}: Readonly<{
 children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = useMemo(
    () => createTheme({ palette: { mode } }),
    [mode]
  );

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider  options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
          <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1300 }}>
            <IconButton
              onClick={() => setMode(prev => (prev === 'light' ? 'dark' : 'light'))}
              color="inherit"
            >
              {mode === 'light' ? <div style={{height: "30px", width: "30px", backgroundColor: "black", color: "white", borderRadius:"100%", display: "flex", justifyContent: "center", alignItems: "center"}}><Brightness4Icon /></div> : <div style={{height: "30px", width: "30px", backgroundColor: "white", borderRadius:"100%", display: "flex", justifyContent: "center", alignItems: "center"}}><Brightness7Icon /></div>}
            </IconButton>
          </Box>
              {children}
          </ThemeProvider>  
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
