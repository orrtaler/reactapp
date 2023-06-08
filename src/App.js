// import Message from './comps/message';
import './App.css';
import CounterHW from './comps/counterHW';
import FormColor from './comps/formColor';
import Galary from './comps/galary';
// import Counter from './comps/counter';
// import InputVal from './comps/inputVal';

function App() {
  return (
    <div className="container">
      <h1 className='text-danger'>React</h1>
      {/* חיבור בין קומפנינטה
      פשוט זימון שלה ממש כמו תגית יחידה */}
      {/* <Message txt="first 111111" /> */}
      {/* 
      let msg1 = new Message("first 1111")
      msg1.render()
      */}
      {/* <Message txt="last 22222"  /> */}
      {/* <Counter /> */}
      {/* <InputVal /> */}
      <CounterHW />
      <Galary />
      <FormColor />
    </div>
  );
}

export default App;
