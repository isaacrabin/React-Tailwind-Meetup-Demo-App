import MeetupItem from "./MeetupItem";

function MeetupList(props) {
    return(
        <ul className="flex flex-wrap gap-y-8">
            {props.meetups.map((meetup) => <MeetupItem key = {meetup.id} address= {meetup.address} title = {meetup.title} image = {meetup.image} id= {meetup.id} description = {meetup.descritpion} />)}            
        </ul>
    )
}
export default MeetupList;