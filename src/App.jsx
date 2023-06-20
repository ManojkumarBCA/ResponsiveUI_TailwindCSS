import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Exports from "./components/Exports";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Exports />
      <NewsLetter/>
      <Cards />
      <Footer/>
    </>
  );
}

export default App;
