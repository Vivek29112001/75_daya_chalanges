import React, { useState, useEffect } from 'react';

const LiveTimeApp = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second using setInterval
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Optional setTimeout to demonstrate a delayed effect
    const timeoutId = setTimeout(() => {
      console.log("Component has been running for 5 seconds.");
    }, 5000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  // Format the time to HH:MM:SS
  const formatTime = (dateObj) => {
    return dateObj.toLocaleTimeString();
  };

  return (
    <div style={styles.container}>
      <h1>🕒 Live Time Clock</h1>
      <p style={styles.time}>{formatTime(time)}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  time: {
    fontSize: '2rem',
    color: '#007bff',
  },
};

export default LiveTimeApp;
