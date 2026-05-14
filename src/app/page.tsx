import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import TrustProcess from "@/components/Home/TrustProcess";
import Query from "@/components/Home/Query";
import Faq from "@/components/Home/Faq";
import ValuedClients from "@/components/Home/ValuedClients";
import BlogPage from "./blog/page";
import Importance from "@/components/Home/Importance";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Importance />
      <Services/>
      <TrustProcess />
      <BlogPage/>
      <ValuedClients />
      <Query />
      <Faq />
    </main>
  );
}