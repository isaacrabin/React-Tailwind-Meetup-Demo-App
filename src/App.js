import { Route, Routes,BrowserRouter } from "react-router-dom";

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">  
        <MainNavigation />    
        <Routes>
          <Route path="/" element = {<AllMeetupsPage />}>            
          </Route>

          <Route path="/new-meetup" element = { <NewMeetupsPage />}>           
          </Route>

          <Route path="/favourites" element ={ <FavouritesPage />}>           
          </Route>
        </Routes> 
        <Footer /> 
      
    </div>
  );
}

export default App;
