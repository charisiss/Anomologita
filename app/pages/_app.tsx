import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CommentContextProvider } from "../store/Comments-Context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CommentContextProvider>
      <Component {...pageProps} />
    </CommentContextProvider>
  );
}
