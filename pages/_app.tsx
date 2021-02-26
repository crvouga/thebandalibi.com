import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppLayout } from "../components/templates/layout.tsx/app-layout";
import { ThemeProvider } from "../components/theme";

const queryClient = new QueryClient();

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default App;
