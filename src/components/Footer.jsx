export function Footer() {
    return(
        <footer className="bg-[rgba(249,246,240,1)] w-full grid grid-cols-1 md:pl-8 md:pr-20 py-8 px-4 md:grid-cols-3 lg:grid-cols-4 lg:px-5 lg:gap-5">
            <div className="space-y-2 mb-3 md:col-span-2 lg:col-span-1">
                <img src="./foot.jpg" alt="footer image" className="w-72 h-36.5 rounded md:rounded-lg " />
                <h1 className="text-2xl md:text-[32px]">Stay Connected!</h1>
            </div>
              <div className="text-[rgba(153,153,153,1)] hidden md:flex lg:hidden flex-col gap-2 my-4">
               <h3 className="text-black text-xs">About Us</h3>
                 <p className="text-[14px]">We are a cutting-edge e-scooter brand committed to revolutionizing
                    urban mobility with sustainable, stylish, and high-performance rides for modern commuters.</p>
             </div>
            <div>
              <h2 className="text-xs mb-2 md:my-4">Conctact us</h2>
              <h3 className="text-xs md:mb-2">contact@gmail.com</h3>
              <h3 className="text-xs md:mb-4">+8472627424</h3>
                  <div className="md:flex hidden lg:hidden gap-3">
                <a href="#"><img src="./fbk.png" alt="fb" className="h-4 w-4" /></a>
                <a href="#"><img src="./instagram.png" alt="insta" className="h-4 w-4" /></a>
                <a href="#"><img src="./twitter.png" alt="X" className="h-4 w-4" /></a>
                <a href="#"><img src="./Linkdin_n.png" alt="Linkdin" className="h-4 w-4" /></a>
            </div>
            </div>
            <div className="text-[rgba(153,153,153,1)] flex flex-col gap-1 text-xs mt-4">
                <a href="#" className="transition-all duration-300 ease-out hover:text-black">Support</a>
                <a href="#" className="transition-all duration-300 ease-out hover:text-black">FAQs</a>
                <a href="#" className="transition-all duration-300 ease-out hover:text-black">Delivery</a>
                <a href="#" className="transition-all duration-300 ease-out hover:text-black">Waranty</a>
                <a href="#" className="transition-all duration-300 ease-out hover:text-black">Conctact</a>
                <a href="#" className="transition-all duration-300 ease-out hover:text-black">Login</a>
                <a href="#" className="transition-all duration-300 ease-out hover:text-black">Creat Account</a>
                <a href="#" className="transition-all duration-300 ease-out hover:text-black">Be Pro Member</a>
            </div>
             <div className="text-[rgba(153,153,153,1)] flex-col gap-2 my-4 flex md:hidden lg:flex">
               <h3 className="text-black text-xs">About Us</h3>
                 <p className="text-[14px]">We are a cutting-edge e-scooter brand committed to revolutionizing
                    urban mobility with sustainable, stylish, and high-performance rides for modern commuters.</p>
             </div>
            <div className="flex md:hidden lg:flex gap-3">
                <a href="#"><img src="./fbk.png" alt="fb" className="h-4 w-4" /></a>
                <a href="#"><img src="./instagram.png" alt="insta" className="h-4 w-4" /></a>
                <a href="#"><img src="./twitter.png" alt="X" className="h-4 w-4" /></a>
                <a href="#"><img src="./Linkdin_n.png" alt="Linkdin" className="h-4 w-4" /></a>
            </div>
        </footer>
    )
}