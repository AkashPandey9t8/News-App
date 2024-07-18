import React from "react";
import { NewsProvider } from "./components/context/NewsContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="bg-black ">
      <NewsProvider>
        <Header />
        <Hero />
        <Footer />
      </NewsProvider>
    </div>
  );
};

export default App;
