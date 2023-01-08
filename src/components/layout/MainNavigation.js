import { Link } from "react-router-dom";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
    const favouritesContext = useContext(FavouritesContext);
    return (
        <header className="w-full top-0 fixed bg-red-800 py-6 px-8 text-white font-sans flex items-center justify-between">
            <div className="font-bold text-lg">React Meetups</div>           
                <nav>                   
                    <ul className="flex flex-wrap gap-8">                        
                        <li className="hover:text-gray-300"><Link to='/'>All Meetups</Link></li>
                        <li className="hover:text-gray-300"><Link to='/new-meetup'>New Meetup</Link></li>
                        <li className="hover:text-gray-300"><Link to='/favourites'>My Favourites</Link>
                        <span className="bg-yellow-500 rounded-full px-1 ml-1 text-sm">{favouritesContext.totalFavourites}</span></li>
                    </ul>                 
                </nav>           
           
        </header>


    )
    
}
export default MainNavigation;