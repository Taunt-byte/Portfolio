import React from "react";
//Import for pages
import Jobs from "@/pages/jobs/page";
import Resumo from "@/pages/resumo/page";
import About from "@/pages/about/page";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Resumo></Resumo>
      <About></About>
      <Jobs></Jobs>
      <Footer></Footer>
    </div>
  );
}
