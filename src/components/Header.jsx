export function Header() {
  return (
    <header className="relative w-full h-70 md:h-141 bg-[url('/s1.png')] bg-cover bg-center text-white overflow-hidden">
         <div className="absolute top-0 w-full h-full z-10 bg-black/30"></div>
         <div className="absolute top-0 z-20  h-full w-full">
       <div className="flex justify-between items-center px-3 md:mt-7 md:px-6">
        <p className="font-medium hidden lg:block "> <span>Shop</span> <span>Reviews</span> <span> Features</span> <span>Specifications</span> </p>
        <span className="lg:hidden" ><img src="./burger-blanc.png" alt="menu burger" className="w-4 h-4 md:w-8 md:h-8" /></span>
        <span className="flex text-[16px] md:text-[30px] items-center">newb<img src="./icons8.png" alt="nwborn" className="w-4 h-4" />rn</span>
        </div>
         <div className="flex text-yellow-400 text-lg flex-row gap-1 items-center justify-left md:px-6 px-3">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="ml-2 text-white">4,9/5</span>
         </div>
         <h1 className="font-medium text-2xl md:text-4xl md:w-90 w-60 px-3 md:px-6">Smooth rides and urban commutes.</h1>
         <h2 className="font-medium text-xs md:text-lg px-3 my-3 md:px-6">X500 Electric Scooter</h2>
         <button className="bg-white text-black font-medium text-[14px] md:mx-6 md:text-lg px-3 py-2 rounded-full ml-3">Shop Now</button>
        </div>
    </header>
  );
}