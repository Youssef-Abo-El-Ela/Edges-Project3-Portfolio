import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
});

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}