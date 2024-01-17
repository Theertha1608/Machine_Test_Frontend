
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const styles = {
  container: {
    maxWidth: '900px', 
    height: '500px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '50px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px 15px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    width: '30%', 
    textDecoration: 'none', 
    textAlign: 'center',
    display: 'inline-block',
    margin: '10px',
    fontSize: '14px', 
  },
};


const Dashboard = () => {
const userId=localStorage.getItem("id")
const token=localStorage.getItem("token")

const [userName,setUserName]=useState()
 useEffect(()=>{
axios.get(`${process.env.REACT_APP_URL}/get-single-user/${userId}`,{
  headers:{

    Authorization:token
  }
  
 
}).then((res)=>{
  console.log("user",res)
  setUserName(res?.data?.user?.user_name)
})
// console.log(response)
// 
 },[])

 const handleDataRemove=()=>{
  localStorage.clear()
 }
  return (
    <div style={styles.container} >
      <h2 style={styles.title}>
        Welcome to Dashboard</h2>
      <p>Hi {userName}!</p>

      <div style={styles.buttonContainer}>
     
        <Link to="/view-users" style={styles.button}>
          View Users
        </Link>
        <Link to="/signin" style={styles.button} onClick={handleDataRemove}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

