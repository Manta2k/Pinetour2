import "@/styles/globals.css";
import { AllData } from "@/context/firstContext";
export default function App({ Component, pageProps }) {
  return (
    <AllData>
      <Component {...pageProps} />;
    </AllData>
  );
}
