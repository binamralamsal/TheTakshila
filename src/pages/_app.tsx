import "@/styles/styles.css";
import type { AppProps } from "next/app";
import { Lexend } from "@next/font/google";

import { MantineProvider, ColorScheme } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      networkMode: "always",
      refetchOnWindowFocus: false,
    },
  },
});

const lexend = Lexend({ subsets: ["latin"] });
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps & { colorScheme: ColorScheme }) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          theme={{
            colors: {
              accent: [
                "#FFEBE6",
                "#FFDBD1",
                "#FFB7A3",
                "#FF8B6B",
                "#FF6F47",
                "#FF5324",
                "#FF3F0A",
                "#F03400",
                "#DB3000",
                "#C22A00",
              ],
            },
            primaryColor: "accent",
            primaryShade: 6,
            fontFamily: lexend.style.fontFamily,
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ModalsProvider>
            <main className={lexend.className}>
              <Component {...pageProps} />
            </main>
            <RouterTransition />
            <Notifications />
          </ModalsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export function RouterTransition() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && nprogress.start();
    const handleComplete = () => nprogress.complete();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.asPath, router.events]);

  return <NavigationProgress autoReset={true} />;
}
