import React, {useState, useEffect} from "react"
const Dummy = () => {

    const[ timer, setTimer] = useState( new Date())

    useEffect(()=>{
        const IntervalId = setInterval(()=>{
            setTimer(new Date())
        },1000)

    const TimerId = setTimeout(()=>{
        console.log("Component has been running for 5 seconds.")
    },5000)

    return ()=>{
        clearInterval(IntervalId)
        clearInterval(TimerId)
    }
    },[]);

    const formateData = (dataObj) =>{
        return dataObj.toLocaleTimeString();
    }

    return (
        <div>
            <h1 className={StyleSheet.container}>Live Timer</h1>
            <h3 className ={StyleSheet.times}>{formateData(timer)}</h3>
        </div>
    )
}
const styles ={
    container:{
        textAlign: 'center',
        marginTop: '50px',
        fontFamily: 'Arial, sans-serif',
    },
    times:{
        fontSize: '2rem',
    color: '#007bff',

    },
}

export default Dummy
