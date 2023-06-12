// rfc
// react function componnent

// rafce
// react aroow function componnent
import React, { useState } from 'react'

export default function Counter() {
    // state = {counter:2};
    // useState -> הוק שיודע לייצר סטייטי
    // מחזיר מערך שאנחנו מפרקים אותו ל2 תאים
    // תא ראשון יחזיר משתנה שמכיל את הערך של הסטייט 
    // במקרה שלנו 4 , תא 2 מכיל פונקציה שיודעת
    // להשפיע על הערך של הסטייט בתא 1 ככה שהכל
    // יעבוד דרך הריאקט דום

    const [counter, setCounter] = useState(4);
    const [user, setUser] = useState("koko");

    const onAdd1 = () => {
        setCounter(counter + 1);
        if (counter + 1 > 10) {
            setUser("jack");
        }
    }


    return (
        <div className='container'>
            <h2>Counter {user}: {counter}</h2>
            <button onClick={onAdd1}>Add1</button>
            <button onClick={() => {
                setCounter(counter - 5)
            }}>reduce 5</button>
        </div>
    )

}
