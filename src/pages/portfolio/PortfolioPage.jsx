import Layout from "../../components/layout/Layout";
import About from "../../components/portfolio/About";
import Contact from "../../components/portfolio/Contact";
import Hero from "../../components/portfolio/Hero";
import Projects from "../../components/portfolio/Projects";
import Skills from "../../components/portfolio/Skills";

 
export default function PortfolioPage() {
  return (
     <Layout>
       <Hero/>
       <About />
       <Skills />
       <Projects/>
       <Contact/>
     </Layout>
  );
}