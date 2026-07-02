import { Relaxed } from "./Products";

export function Related() {
    return(
        <section className="flex w-full justify-center gap-5 overflow-hidden md:gap-4 lg:gap-2">
            <Relaxed img="./blan.png" alt="scooter white" 
            titre="Arctic Drift Scooter" prix="$245" rated="4,5/5"/>
             <Relaxed img="./product.png" alt="scooter black" 
            titre="Froost Guard Scooter" prix="$245" rated="5/5"/>
        </section>
    )
}