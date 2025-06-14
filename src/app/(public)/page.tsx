import { Footer } from "@/components/footer";
import { Professionals } from "./_components/clinics";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";

export default function Home(){
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
        <div>

          <Hero/>
          <Professionals/>
          <Footer/>
        </div>
      </div>
  )
}