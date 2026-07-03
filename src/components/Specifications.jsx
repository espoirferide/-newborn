import { Products } from "./Products";

export function Specifications(){
    return(
        <>
          <section id="specifications" className="bg-[rgba(249,246,240,1)] pt-3 pb-12 py-4 " >
              <h1 className="font-medium text-2xl text-center">Specifications</h1>
              <h3 className="font-medium text-xs text-center pb-4">More in-depth technical details</h3>
              <div className="flex w-full justify-center items-center gap-[2%] lg:gap-[3%]">
                <div><Products src="essai-1.png" alt="Charging" Titre="Charging Time" Description="Fast charging in 2h" /></div>
                <div className="hidden md:block"> <Products src="essai-2.png" alt="Motor" Titre="Motor Power" Description="350W (or X Watts)"  /></div>
                <div className="hidden lg:block"><Products src="pneu.png" alt="Tire" Titre={'Long Battery Life'} Description={'Up to 25 miles per charge'} /></div>
                <div className="hidden lg:block"><Products src={'sc-face.png'} alt={'batry'} Titre={'Dimensions'} Description={'[folded] 16 inches, [unfolded] 30 inches'} /></div>
              </div>
         </section>
         <section className="bg-[rgba(74,93,105,1)] p-5 w-full h-52.5 md:h-98 lg:h-93 flex flex-col items-center justify-center">
           <div className="flex text-yellow-400 text-xl md:text-4xl lg:text-5xl flex-row gap-1 items-center justify-center">
             <span>★</span>
             <span>★</span>
             <span>★</span>
             <span>★</span>
             <span>★</span>
          </div>
         <p className=" text-xl md:text-[30px] lg:text-[40px] text-center p-3 text-white">This is perfect for my daily commute. Super lightweight and fast.</p>
       </section>
        </>
    )
}