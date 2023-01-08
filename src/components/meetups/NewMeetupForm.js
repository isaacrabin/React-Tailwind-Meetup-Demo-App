import { useRef } from "react";

function NewMeetupForm(props) {

    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    function onSubmitHandler(event) {
        event.preventDefault();
        const payload = {
            title: titleRef.current.value,
            image: imageRef.current.value,
            address: addressRef.current.value,
            description: descriptionRef.current.value
        }     
    props.onAddNewMeetup(payload);    
        
    }

    return (
        <div className="flex flex-col justify-center mx-auto max-w-lg bg-white shadow-xl rounded-xl p-5 font-sans">
            <form onSubmit={onSubmitHandler}>
                <div className="grid p-2">
                    <label className="text-md pb-1 font-medium" htmlFor="title">Title</label>
                    <input className="border w-full rounded p-2" id="title" type='text' ref={titleRef} required />
                </div>
                <div className="grid p-2">
                    <label className="text-md pb-1 font-medium">Image</label>
                    <input className="border w-full rounded p-2" type='url' ref={imageRef} />
                </div>
                <div className="grid p-2">
                    <label className="text-md pb-1 font-medium">Address</label>
                    <input className="border w-full rounded p-2" type='text' ref={addressRef} />
                </div>
                <div className="grid p-2">
                    <label className="text-md pb-1 font-medium">Descritption</label>
                    <textarea className="border w-full rounded p-2" type='text' rows='2' ref={descriptionRef} />
                </div>
                <div className="grid p-2">
                    <button className="border rounded bg-gray-900 py-4 text-white hover:text-gray-300" type="submit">Confirm</button>
                </div>
            </form>
        </div>
    );
    
}
export default NewMeetupForm;