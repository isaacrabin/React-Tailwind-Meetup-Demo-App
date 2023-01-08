import { unstable_HistoryRouter, useLinkClickHandler } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";



function NewMeetupsPage(props) {
    const history = useLinkClickHandler();
   
    function addMeetupHandler(payload) {
        fetch('https://react-basics-904cc-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'              
            }
        }
        ).then(() => {
           alert('Success')
        })       
    }
    return(
        <div className="pt-20 max-w-lg mx-auto">
            <h3 className="font-bold text-xl pb-4">Add New Meetup</h3>
            <NewMeetupForm onAddNewMeetup = {addMeetupHandler} />
        </div>
    )
    
}
export default NewMeetupsPage;