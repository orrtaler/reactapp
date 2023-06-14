import React from 'react'
import { useState } from 'react'

export default function Casino() {

  const color_ar = ["green", "red"];
  const ans_ar = ["you win ", "you lose"];

  const [counter, setCounter] = useState(5);
  const [winOrLose, setWinOrLose] = useState(1);

  // useEffect(() => {
  //   doApi("israel")
  // },[])

  rollDice = () => {
    if(counter > 0){
      let rnd=Math.random()*6;
      rnd=Math.ceil(rnd);
      if(rnd==5||rnd==6){
        setCounter(counter+1);
        // setCounter((counter) => counter + 1);
        setWinOrLose(winOrLose=0);
      }
      else{
        setCounter(counter-1);
        // setCounter((counter) => counter - 1);
        setWinOrLose(winOrLose=1);
      }
  
      // document.querySelector("#id_cons").innerHTML=coins;
      // document.querySelector("#id_img").src=`dice_images/dice${rnd}.jpg`;
  }else{
      alert("you need give money from the bank");
      setCounter(counter=0);
  }
}

  return (
   <div className="container">
    <h2>coins: {counter}</h2>
    {/* <img id="id_img" src="dice_images/dice1.jpg" alt="dice" width="100"> */}
    {/* <br> */}
   <h2 style={color_ar[winOrLose]}>{ans_ar[winOrLose]}</h2>
    <button className=" btn btn-info" onClick={rollDice()}>roll</button>
</div>
  )
}
