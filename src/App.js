import logo from './logo.svg';
import './App.css';
import React from 'react';
import AppRoutes from './comp_routs/appRoutes';
// import App_hw_learn from './comps_hw_learn/app_hw_learn';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        {/* <App_hw_learn /> */}
        <AppRoutes />
      </React.Fragment>
    </div>
  );
}

export default App;
