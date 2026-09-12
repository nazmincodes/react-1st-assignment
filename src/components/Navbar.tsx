import logo from "../assets/logo-text.png"
const Navbar = () => {
 return (
     <nav className="bg-white sticky top-0 z-50">
    <div className="flex justify-between gap-4 max-w-6xl mx-auto py-4 border-b border-gray-100">
    <img src={logo} className="w-[100px] h-[30px]"  alt=""/>
    <ul className="flex gap-4 items-center ">
        <li>
            <a href="/" className="text-pink-500">Home</a>
        </li>
         <li>
            <a href="/">Technologies</a>
        </li>
         <li>
            <a href="/">Projects</a>
        </li>
         <li>
            <a href="/">About</a>
        </li>
            <li>
            <a href="/">Contact</a>
        </li>
    </ul>
    <div className="flex gap-4">
    <button>Sign In</button>
    <button className="bg-pink-500 border-0 rounded-3xl hover:bg-pink-300 hover:text-orange-100
     hover:scale-110 transition-transform-duration-300 px-3 text-white">Sign Up</button>
    </div>
    </div>
 </nav> 
 )
};
export default Navbar;