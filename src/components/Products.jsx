export function Products({ src, alt, Titre, Description }) {
    return(
          <div className="flex flex-col items-center">
            <img src={src} alt={alt} className="w-46 h-56 md:w-90 md:h-105 lg:w-[288px] lg:h-112.75 md:rounded-lg rounded-sm" />
            <h1 className="text-xl">{Titre}</h1>
            <h2 className="text-xs">{Description}</h2>
        </div>
         
    )
}

export function Relaxed ({img, alt, titre, prix, rated}) {
    return(
        <div className="flex flex-col items-start w-48 px-2 md:w-90 lg:w-155">
            <img src={img} alt={alt} className="w-45 h-43 md:w-85 md:h-80  lg:w-155 lg:h-146 rounded-sm md:rounded-lg mb-3"/>
            <div className="flex justify-between w-full items-center">
             <h2 className="text-xs md:text-xl">{titre}</h2>
             <span className="text-black font-normal md:text-[16px] text-[8px]">{rated}<span className="text-yellow-400 md:text-[16px]">★</span></span>
            </div>
            <h2 className="text-[rgba(74,93,105,1)] font-normal text-xs md:text-xl">{prix}</h2>
        </div>
    )
}