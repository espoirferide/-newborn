export function Enthusiast() {
    return(
        <>
        <section className="bg-[rgba(240,241,241,1)] h-93.5 md:h-162.75 lg:h-214 flex flex-col justify-center overflow-hidden">
             <h1 className="text-2xl md:text-[40px] text-center">Enthusiast stories</h1>
            <h3 className="text-xs md:text-xl text-center">Follow us on social @nwborn_vn</h3> 
             <div className="flex gap-3 w-full justify-center py-5">
            <img src="./pro-femme.png" alt="woman in scooter" className="w-42 h-58.5 md:w-85 md:h-110 lg:w-98.5 lg:h-146.5 object-cover rounded md:rounded-lg" />
            <img src="./maron.png" alt="mr" className="w-42 h-58.5 md:w-85 md:h-110 lg:w-98.5 lg:h-146.5 object-cover rounded md:rounded-lg" />
            <img src="./back-femme.png" alt="back" className="w-98.5 h-146.5 object-cover  rounded-lg hidden lg:block" /> 
            </div> 
       </section>
       <section className="py-8 px-3 lg:gap-10 gap-6 w-full flex flex-col lg:flex-row h-full items-center justify-center">
        <div className="flex flex-col justify-center items-center">
            <img src="./Minimalist.png" alt="minimalist icon" className="w-16 h-16" />
            <h1 className="text-xl md:text-2xl lg:text-[32px] text-center w-50 md:w-full lg:w-80">Built with the highest standards of quality</h1>
        </div>
        <div className="hidden lg:block">
           <img src="./Gemini.png" alt="icon" className="h-14 w-20" />
        </div>
        <div className="flex flex-col justify-center items-center">
            <img src="./visage.png" alt="small face" className="w-16 h-16"/>
            <h1 className="text-xl md:text-2xl lg:text-[32px] text-center lg:w-100 ">We believe in transparent, clear communication</h1>
        </div>
       </section>
       </>
    )
}