import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import TrustProcess from "@/components/Home/TrustProcess";
import Query from "@/components/Home/Query";
import Faq from "@/components/Home/Faq";
import BlogPage from "./blog/page";
import Importance from "@/components/Home/Importance";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Services/>
      <Importance />
      <TrustProcess />
      <BlogPage/>
      <Query />
      <Faq />
    </main>
  );
}