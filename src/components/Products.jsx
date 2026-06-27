export function Products({ src, alt, Titre, Description }) {
    return(
          <div className="flex flex-col items-center">
            <img src={src} alt={alt} className="w-46 h-56 md:w-90 md:h-105 lg:w-[288px] lg:h-112.75 md:rounded-lg rounded-sm" />
            <h1 className="text-xl">{Titre}</h1>
            <h2 className="text-xs">{Description}</h2>
        </div>
         
    )
}