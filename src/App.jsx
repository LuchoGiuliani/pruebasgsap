import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect} from "react";

gsap.registerPlugin(ScrollTrigger);






function App() {

  
  const main = useRef();


  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const sections = self.selector(".panel");
      let paneles = gsap.utils.toArray(".panel");
      let container = document.querySelector(".container");
      console.log(paneles);
      console.log(sections);
      console.log(container);

      gsap.to(paneles, {
        xPercent: -100 * (paneles.length - 1),
        ease: "none",
        
        scrollTrigger: {
          trigger: container,
          markers: true,
          pin: true,  
          scrub: 1,
          snap: 1 / (paneles.length - 1),
          end: "+=3500",
        },
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div className=" overflow-hidden">
    
      <div className="text-black text-9x1 h-screen">Comienzo de pag</div>
      <div className="container" ref={main}>
        <div className="description panel blue">
          <div>
            <h1>Horizontal snapping sections (simple)</h1>
            <p>
              Scroll vertically to scrub the horizontal animation. It also
              dynamically
            </p>
            <div className="scroll-down">
              Scroll down<div className="arrow"></div>
            </div>
          </div>
        </div>

        <section className="panel flex justify-center items-center bg-red-200">
          <img  className="w-[360px] h-[360px]" src="./public/complejo.jpg" alt="" />
        </section>
        <section className="panel bg-green-800">TWO</section>
        <section className="panel bg-purple-500">THREE</section>
        <section className="panel  bg-slate-500">FOUR</section>
        <section className="panel bg-gray-800">FIVE</section>
      </div>
      <div className="text-black text-9x1 h-screen">FINAL DE LA PAG</div>
    </div>
  );
}

export default App;
