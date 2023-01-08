import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="w-full bottom-0 bg-gray-300 py-4 mt-4 px-8 text-gray-800 font-sans flex items-center justify-between">
            <div className="font-md text-lg"></div>           
                <nav>                   
                    <ul className="flex flex-wrap gap-8">                        
                        <li className="hover:text-gray-300"><Link to='/'>Done With React & Tailwind</Link></li>                        
                    </ul>                 
                </nav>           
           
        </footer>


    )
    
}
export default Footer;