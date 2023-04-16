
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      {/* <Banner  />
      <Movies /> */}

      {/* https://www.moreonfew.com/attempted-import-error-switch-is-not-exported-from-react-router-dom */}
      {/* use react router version V5.0 */}

      <Switch>
        <Route exact path='/moviego' render={(props) => (
          <>
            <Banner {...props} />
            <Movies {...props} />
          </>
        )} />

        <Route path='/moviego/favourites'>
          <>
            <Favourites />
          </>
        </Route>

        <Route path='/' render={(props) => (
          <>
            <Banner {...props} />
            <Movies {...props} />
          </>
        )} />

      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
