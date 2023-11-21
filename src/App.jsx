import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Course } from "./components/Course";
import { Work } from "./components/Work";
import { About } from "./components/About";
import Mentors from "./components/Mentors";
import { Count } from "./components/Count";
import { Blogs } from "./components/Blogs";
import { Employs } from "./components/Employs";
import { Input } from "./components/Input";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <About />
      <Work />
      <Course />
      <Mentors />
      <Count />
      <Blogs />
      <Employs />
      <Input />
      <Footer />
    </>
  );
}

export default App;
