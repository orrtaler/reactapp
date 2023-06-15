import React from 'react'
import { useState } from 'react'

export default function Casino() {

  const color_ar = ["green", "red"];
  const ans_ar = ["you win ", "you lose"];
  const img_ar = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg"]

  const [counter, setCounter] = useState(5);
  const [winOrLose, setWinOrLose] = useState(0);
  const [rnd, setRnd] = useState(0);

  const rollDice = () => {
    if (counter > 0) {
      let rnd1 = Math.random() * 6;
      rnd1 = Math.ceil(rnd1);
      setRnd(rnd1);
      if (rnd == 5 || rnd == 6) {
        setCounter(counter + 1);
        setWinOrLose(1);
      }
      else {
        setCounter(counter - 1);
        setWinOrLose(2);
      }

    } else {
      alert("you need give money from the bank");
      setCounter(1);
    }
  }

  return (
    <div className="container">
      <h2>coins: {counter}</h2>
      <img src={"/images/" + img_ar[rnd]} width="200" height="200" />
      {/* <img id="id_img" src="dice_images/dice1.jpg" alt="dice" width="100"> */}
      {/* <br> */}
      <h2 style={{ color: color_ar[winOrLose] }}>{ans_ar[winOrLose]}</h2>
      <button className=" btn btn-info" onClick={rollDice}>roll</button>
    </div>
  )
}
