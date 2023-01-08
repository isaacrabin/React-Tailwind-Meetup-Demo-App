import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage(props) {
    const favouritesCtx = useContext(FavouritesContext);

    let content;

    if(favouritesCtx.totalFavourites === 0){
        content = <p>No Favourites at the moment.</p>
    }
    else{
        content = <MeetupList meetups = {favouritesCtx.favourites} />
    }

    return(
        <div className="pt-20  mx-auto min-h-screen  p-8">            
            <h3 className="font-bold text-xl pb-4">My Favourites</h3>
            <div className="flex flex-wrap gap-8 justify-center p-4 mx-auto">
             {content}
            </div>                
        </div>
    )
    
}
export default FavouritesPage;