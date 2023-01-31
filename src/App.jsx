import { useEffect, useState } from "react";
import "./App.css";
import Different from "./componenets/Different";
import Footer from "./componenets/Footer";
import Moreinfo from "./componenets/Moreinfo";
import Navbar from "./componenets/Navbar";
import Totop from "./componenets/Totop";
import Advantages from "./sections/Advantages";
import Cardlanding from "./sections/Cardlanding";
import Faq from "./sections/Faq";
import Landing from "./sections/Landing";
import Reviews from "./sections/Reviews";

function App() {
  const [scroll, setScroll] = useState(false);
  const [scrollValue, setScrollValue] = useState(false)

  function ifScroll(e) {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      if (scrolled > 850) {
        setScrollValue(true)
      } else {
        setScrollValue(false)
      }
    });
  }

  useEffect(() => {
    ifScroll();
  }, [scroll,scrollValue]);

  return (
    <div className="App">
      <Navbar scroll={scroll} />
      <Landing />
      <Cardlanding />
      <Different />
      <Advantages />
      <Moreinfo />
      <Reviews />
      <Faq />
      <Footer />
      <Totop scroll={scrollValue} />
    </div>
  );
}

export default App;
