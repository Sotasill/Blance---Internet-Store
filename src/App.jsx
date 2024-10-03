

import './App.css'
import MainMenu from './components/Mainmenu/MainMenu'
import SliderComponent from './components/SliderComponent/SliderComponent'
import SliderCatalog from './components/SliderCatalog/SliderCatalog';
import items from './catalog.json'


function App() {
  const CatalogItemsList = (items) => {
   
 }

  return (
    <>
      <MainMenu />

      <SliderComponent />
      
      <SliderCatalog/>
     
    </>
  );
}

export default App
