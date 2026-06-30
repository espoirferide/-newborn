export function Signature () {
    return(
        <>
        <section className="flex flex-col lg:flex-row-reverse items-center justify-between px-3 py-15 w-full lg:px-20">
              <article className="relative shrink-0 h-63 w-74 md:w-140 md:h-115">
      <img src="img-chargé.png" alt="produit" className="absolute w-74 md:w-140 md:h-106.25 h-57 md:rounded-lg rounded-sm" /> 
        <div className="flex flex-col absolute top-12 left-28 md:left-54 md:top-20">
        <h2 className="text-xs font-semibold text-right md:text-xl">Foldable</h2>
        <div className="flex items-center">
          <button className="border border-black bg-black rounded-full w-2 h-2"></button>
          <button className="border-b-2 border-black w-16 md:w-35"></button>
        </div> 
      </div> 
         <div className="flex flex-col absolute bottom-25 -left-6 md:bottom-42 md:left-3 lg:-left-10">
        <h2 className="text-xs md:text-xl font-semibold text-left w-18 md:w-30 lg:w-full">Anti-puncture tire</h2>
        <div className="flex items-start gap-0">
          <div className="border-b-2 border-black w-26 md:w-35 lg:w-50"></div>
          <div className="flex flex-col items-center justify-center" >
          <div className="border-r-2 border-black h-7.5 md:h-19"></div>
          <div className="border absolute border-black bg-black rounded-full w-2 h-2 -bottom-1.5 -right-1"></div>
          </div>
        </div>
      </div> 
          <div className="flex items-start flex-col absolute bottom-6 left-32 md:left-61 md:bottom-17">
             <div className="border-r-2 border-black h-10 md:h-12"></div>
             <div className="flex flex-col items-end gap-0">
            <div className="border-b-2 border-black w-33 md:w-60"></div>
        </div>
      </div>
      <button className="absolute md:left-60 md:bottom-29 bottom-16 left-31 border border-black bg-black rounded-full w-2 h-2"></button>
      <h2 className="text-xs md:text-xl font-semibold text-left absolute md:right-19 md:bottom-10 bottom-7 right-10">Light Weight</h2>
     </article>
     <article className="md:px-5 w-full lg:flex-1 space-y-5 pl-3 md:pl-5">
           <h1 className="text-2xl md:text-[40px]">Our signature</h1>
           <p className="w-70 text-xs md:text-xl md:w-110">We design and build exceptional products that deliver a superior riding experience, every time.</p>
           <button className="border border-black bg-black rounded-full px-4 py-1 md:py-2 text-[14px] text-white">See the Difference</button>
     </article>
        </section>
        <section>
            <img src="./bleu.png" alt="blue" className="w-full h-61 md:h-115 lg:h-205 overflow-hidden object-center object-cover" />
        </section>
        <h1 className="text-2xl text-left my-5 px-3 md:text-[40px] md:px-5 lg:px-15 md:my-10">Related Products</h1>
        </>
    )
}