
import './App.css';

import Home from './components/Home';
import Card from './components/TrendingProduct'
import Categories from './components/Categories';
import Production from './components/Production';

import Cart from './components/Cart';
import Contact from './components/Contact';
import CustomizedDeals from './components/CustomizedDeals';

import Menu from './components/Menu';
import Featured from './components/Featured';
import Savouries from './components/Savouries';
import SavouriesMenu from './components/SavouriesMenu';
import Cookies from './components/Cookies';
import CookiesMenu from './components/CookiesMenu';
import Brownies from './components/Brownies';
import BrowniesMenu from './components/BrowniesMenu';
import Desert from './components/Desert';
import DesertsMenu from './components/DesertMenu';
import CorporateDeals from './components/CorporateDeals';
import CorporateDealsMenu from './components/CorporateDealMenu';
import ShopByOccasion from './components/ShopByOccasion';
import OcassionBday from './components/OcassionBday';
import OcassionWedding from './components/OcassionWedding';
import OcassionAchievement from './components/OcassionAchievement';
import Description from './components/Description';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './theme';
import ClassicBrownie from './components/ClassicBrownie';
import Description2 from './components/Description2';



function App() {
  return (
    <ThemeProvider theme={theme}>


      <Home />
      
      <Card />
      <Categories />
      <CustomizedDeals />
      <Menu />
      <Categories />
      <Featured />
      <Savouries />
      <SavouriesMenu />
      <Description />
      <Cookies />
      <CookiesMenu />
      <Brownies />
      <BrowniesMenu />
      <Description2/>
      <ClassicBrownie/>
      <Desert />
      <DesertsMenu />
      <CorporateDeals />
      <CorporateDealsMenu />
      <ShopByOccasion />
      <OcassionBday />
      <OcassionWedding />
      <OcassionAchievement />
      <Production />
      <Contact />
      <Cart />      
    </ThemeProvider>
  );
}

export default App;
