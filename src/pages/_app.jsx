import "@/styles/app.scss";
import "../styles/transition.css";
import Transition from "./components/transition";
import Navbar from "./components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>
  );
}
