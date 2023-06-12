import logo from './logo.svg';
import './App.css';
import AppWeather from './weather_comps/appWeather';
// import AppTv from './api_comps/appTv';
// import AppHooks from './hooks_comp/appHooks';
// import CarsList from './LearnComps/carsList';

function App() {
  return (
    <div className="App">
      {/* <CarsList /> */}
      {/* <AppHooks/> */}
      {/* <AppTv /> */}
      <AppWeather />
    </div>
  );
}

export default App;
