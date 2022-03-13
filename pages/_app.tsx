import type { AppProps } from "next/app";
import { globalStyles } from "../shared/styles";
import { QueryClientProvider } from "react-query";
import { getClient } from "../shared/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import Gnb from "../src/component/gnb";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = getClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {globalStyles}
        <Gnb />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

/*
  # _app.tsx의 역할

  - 페이지 전환 시 레이아웃을 유지
  - 페이지 전환 시 상태값을 유지
  - componentDitCatch를 이용해 커스텀 에러 핸들링을 할 수 있음
  - 추가적인 데이터를 페이지로 주입
  - Global CSS를 이곳에 선언
*/
