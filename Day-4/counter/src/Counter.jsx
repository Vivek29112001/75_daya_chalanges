import React from 'react'
import { useState } from 'react'
import './App.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    const min = 0;
    const max = 10;
    return (
        <div className='app-container'>
            <h1 className='title'>Counter</h1>
            <div className='counter'>
                <h2>Counter Lets Count Your skill</h2>
                <h2 className="h2_count">{count}</h2>
                <div className="buttons">
                    <button
                        onClick={() => {
                            if (count === max) {
                                alert("Max Limit Exceed")
                            } else {
                                setCount(count + 1)
                            }
                        }}
                    >Add+</button>
                    <button
                        onClick={() => {
                            if (count === min) {
                                alert("Add Count First")
                            } else {
                                setCount(count - 1)
                            }
                        }}
                    > Delete-</button>
                    <button
                        onClick={() => {
                            alert("Counter has be reset")
                            setCount(0)
                        }}>Reset</button>
                </div>

            </div>
        </div>

    )
}
export default Counter;