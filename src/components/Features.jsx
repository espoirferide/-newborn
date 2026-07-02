import { Futur } from "./Products";

export function Features() {
    return(
        <section className="flex flex-col items-center my-5">
            <h1 className="text-2xl md:text-[40px] mb-5">Features</h1>
            <article className="flex w-full justify-center gap-3 overflow-hidden mb-3 md:mb-5">
                <div>
                    <Futur img="./feat.png" alt="Shock tires"
                    type={'Shock-Absorbing Tires'} 
                    description={'Safe ride, even on bumpy roads.'}/>
                </div>
                <div>
                    <Futur img="./feature.png" alt="Foldable"
                    type={'Foldable Design'}
                    description={'Perfect for city dwellers and commuters'}/>
                </div>
                <div className="hidden lg:block">
                    <Futur img="./sneakers.png" alt="Lightweight"
                    type={'Long Battery Life'}
                    description={'Up to 25 miles per charge'}/>
                </div>
            </article>
             <button className="border border-black bg-black rounded-full px-4 py-1 md:py-2 text-[14px] text-white">Shop Now</button>
        </section>
    )
}