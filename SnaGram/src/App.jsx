
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SnaGram from "./components/SnaGram";
import About from './components/SnagramComponents/About';
import MarollContainer from './components/MarollComponents/MarollContainer'; 
import FoodAsli from './components/MarollComponents/foodasli';
import PizzaComponent from './components/MarollComponents/PizzaComponent';
import PishGhazaComponent from './components/MarollComponents/PishGhazaComponent';
import NoshidaniComponent from './components/MarollComponents/NoshidaniComponent';
import DeserBastaniComponent from './components/MarollComponents/DeserBastaniComponent';
import BarSardComponent from './components/MarollComponents/BarSardComponent';
import BarGarmComponent from './components/MarollComponents/BarGarmComponent';

const App = () => {
  return (
    <>
      <Router>
         <Routes>
            <Route path='/' element={<SnaGram />} />
            <Route path='/درباره سنه گرام' element={<About /> } />
            <Route path='/marollfood' element={<MarollContainer /> } />
            <Route path='/marollfood/غذااصلی' element={<FoodAsli /> } />
            <Route path='/marollfood/پیتزا' element={<PizzaComponent /> } />
            <Route path='/marollfood/پیش غذا' element={<PishGhazaComponent /> } />
            <Route path='/marollfood/نوشیدنی' element={<NoshidaniComponent /> } />
            <Route path='/marollfood/دسروبستنی' element={<DeserBastaniComponent /> } />
            <Route path='/marollfood/بارسرد' element={<BarSardComponent /> } />
            <Route path='/marollfood/بارگرم' element={<BarGarmComponent /> } />
         </Routes>
      </Router>
    </>
  );
};

export default App;
