// rfc
// react function componnent

// rafce
// react aroow function componnent
import React, { useState } from 'react'

export default function CounterLonley() {
    // state = {counter:2};
    // useState -> הוק שיודע לייצר סטייטי
    // מחזיר מערך שאנחנו מפרקים אותו ל2 תאים
    // תא ראשון יחזיר משתנה שמכיל את הערך של הסטייט 
    // במקרה שלנו 4 , תא 2 מכיל פונקציה שיודעת
    // להשפיע על הערך של הסטייט בתא 1 ככה שהכל
    // יעבוד דרך הריאקט דום
    const [counter, setCounter] = useState(0);

    const onAdd1 = () => {
        setCounter(counter + 1);

    }
    const onMinus = () => {
        setCounter(counter - 1);

    }
    return (
        <div className='container'>
            <h2>{counter}</h2>
            <button onClick={onAdd1}> +</button>
            <button onClick={onMinus}>-</button>
        </div>
    )
}