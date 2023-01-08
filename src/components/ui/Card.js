import Photo from "../../assets/img01.png";

function Card(props) {
    return (
        <div>
             <div className="flex flex-col justify-center mx-auto max-w-lg bg-white shadow-xl rounded-xl p-5">
         <div>
            <img className="w-32  mx-auto rounded-full" src={Photo} alt="profile" />
         </div>

         <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                Isaac Mrongo
            </p>
            <p className="text-xs pt-2 pb-4 px-5 w-auto font-semibold text-gray-600">
               Frontend Developer
            </p>
            <div className="flex align-center justify-center mt-4 border-t-2">
                <a href="#" className="text-xl m-1 p-1 sm:p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-800 rounder-full hover:text-white"></a>
                <a href="#" className="text-xl m-1 p-1 sm:p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-800 rounder-full hover:text-white"></a>
                <a href="#" className="text-xl m-1 p-1 sm:p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-800 rounder-full hover:text-white"></a>
                <a href="#" className="text-xl m-1 p-1 sm:p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-800 rounder-full hover:text-white"></a>
            </div>
         </div>
        </div>  
        </div>
    );
    
}
export default Card;