import React from 'react'
import './App.css';
import AppDate from './comps_date/appDate';
import ShopList from './comps_loop/shopList';
import AppColor from './colors/appColor';
// import AppLearn from './comps/appLearn';
// import ShopList from './comps_loop/shopList';

function App() {
  //  <React.Fragment> -> משמש בתור תגית
  // עוטפת אבל שלא מרונדרת בדפדפן
  return (
    <React.Fragment>
      <h1 className='text-danger'>React</h1>
      {/* <ShopList /> */}
      <hr/>
      <AppDate/>
      {/* <AppLearn /> */}
      <ShopList />
      <AppColor/>
    </React.Fragment> 
  );
}

export default App;