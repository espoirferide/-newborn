export function Shop(){
    return (
        <>
        <section className="flex gap-3 my-5 justify-center items-center md:gap-8">
         <h3 className="font-semibold text-[14px] md:text-lg">AS SEEN IN</h3>
              <img src="./vogue.png" alt="vogue" className="w-12 h-8 md:w-18 md:h-12" />
             <img src="./forbes.png" alt="forbes" className="w-11 h-5 md:w-23 md:h-11" />
             <img src="./ji.png" alt="ji" className="w-4 h-4 md:w-9 md:h-8" />
             <img src="./naspers.png" alt="naspers" className="w-9 h-5 md:w-16 md:h-10" />
             <img src="./cosmopolitan.png" alt="com" className="w-28 h-10 hidden md:block " />
        </section>
        <section className="lg:flex lg:items-center lg:justify-center lg:px-5">
            <div className="px-2 mb-5 flex flex-col lg:flex-row-reverse lg:gap-1 items-center md:gap-5 justify-center w-full gap-2">
                <img src="./sc-nir-complet.png" alt="pro" className="w-80 h-78 md:w-180 md:h-115 lg:w-125 lg:h-114  overflow-hidden object-cover lg:object-contain md:object-bottom rounded-xs md:rounded-lg" />
              <div className="flex gap-2 md:gap-5 lg:gap-1 lg:flex-col">
                <img src="./sc-noir-coupé.png" alt="noir coupé" className="w-30 h-23 md:w-88 md:h-44.5 lg:w-65 lg:h-66 object-cover rounded-xs md:rounded-lg" />
                <img src="./blanc.png" alt="blanc" className="w-46 h-23 md:w-84 md:h-44.5 lg:w-65 lg:h-44.5 object-center rounded-xs md:rounded-lg" />
              </div>
            </div>
            <div className="px-2 md:ml-5 md:w-130 lg:w-full ">
                 <div className="flex text-yellow-400 text-xl items-center gap-1">
                       <span>★</span>
                       <span>★</span>
                       <span>★</span>
                       <span>★</span>
                        <span>★</span>
                     <span className="text-black text-xs">4,9/5</span>
                </div>
         <h1 className="font-medium text-2xl md:text-4xl mb-3">X500 Electric Scooter</h1>
       <button className="border-2 border-[rgba(184,144,88,1)] bg-[rgba(184,144,88,1)]  font-semibold text-xs text-white py-1 px-2 rounded-full ">Best-sellers</button>
        <h3 className="font-medium text-[14px] md:text-[18px] text-[rgba(74,93,105,1)] my-3">$503.00</h3> 
        <p className="my-3 font-medium text-xs md:text-[14px] md:w-120">The X500 Electric Scooter offers a sleek design, ultra-durable build, and an impressive 25-mile range, making it your perfect companion for city travel.</p> 
        <p className="my-3 font-medium text-xs md:text-[14px] md:w-120">A high-performance, eco-friendly scooter designed for smooth rides and urban commutes.</p> 
        <div className="border-2 border-black bg-black text-white md:py-2 text-center my-6 rounded-full">Add to cart</div>
            </div>
        </section>
        </>
    )
} 