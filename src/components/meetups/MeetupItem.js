import Card from "../ui/Card";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
    const favouritesContext = useContext(FavouritesContext);
    const itemIsFavourite = favouritesContext.itemIsFavourite(props.id);
    
    function toggleFavouritesHandler() {
        if(itemIsFavourite){
            favouritesContext.removeFavourite(props.id);
        }
        else{
            favouritesContext.addFavourite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }
    return(
        <div className="flex flex-col justify-center mx-auto max-w-lg bg-white shadow-xl rounded-xl p-5">
            <li className="grid w-full  items-center justify-center leading-normal">
                <div className="grid-rows-max">
                    <img src={props.image} alt="" />
                </div>
                <div className="mx-auto">
                    <h3>{props.title}</h3>                
                </div>
                <div className="mx-auto">
                <address>{props.address}</address>               
                </div>
                <div className="mx-auto">
                    <p>{props.description}</p>
                </div>
                <div className="mx-auto">
                    <button className="border px-2 py-1 rounded" onClick={toggleFavouritesHandler}>{!itemIsFavourite ? 'To Favourites' : 'Remove from Favourites'}</button>
                </div>
            </li>
        </div>
    )
    
}
export default MeetupItem;