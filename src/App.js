import logo from './logo.svg';
import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import Navigation from './component/navigation/Navigation';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite/dist/flowbite.min.js';
import Home from './pages/home/Home';
import Carousel from './component/pictureanimation/Carousel';

function App() {
  return (
   <>
 <Home />
 {/* <Carousel/> */}

 {/* <div style={{}}>
  <MainPage/>
 </div> */}
   </>
  );
}

export default App;
