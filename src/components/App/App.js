import Header from "../Header";
import Intro from "../Intro";
import Slider from "../Slider";
import Products from "../Products";
import NewsLetter from "../NewsLetter";
import Footer from "../Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Intro />
        <Slider />
        <Products />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default App;
