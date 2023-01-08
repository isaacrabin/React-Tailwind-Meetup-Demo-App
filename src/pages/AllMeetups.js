import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() =>{
        setIsLoading(true);
        fetch('https://react-basics-904cc-default-rtdb.firebaseio.com/meetups.json').then((resp) =>{
            return resp.json();        
        }).then((data) =>{  
            const meetups = [];
            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup) 
            };                 
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });

    },[]); 
    let content;   
   
    if (isLoading) {      
            content = <p>Loading...</p>     
       
    }
    else{
        content = <MeetupList meetups ={loadedMeetups} />  
    }
    return(
        <div className="pt-20 w-full min-h-full flex flex-wrap no-scrollbar">
             {content}                
        </div>
    )
    
}
export default AllMeetupsPage;