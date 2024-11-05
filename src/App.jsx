import About from "./components/About";
import Carousel from "./components/Carousel/Carousel";
import Testimonials from "./components/Carousel/Testimonilas";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Carousel />
      <Form />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
