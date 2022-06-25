import Header from "../Components/Header";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
