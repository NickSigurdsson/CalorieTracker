import React from "react";
import { Link } from 'react-router-dom';
import '../components/styles.css';


function Home() {
  return (
    <div class="home">
      <h1>Measure your daily calories</h1>
      <h2>Empower your health journey with myCalories</h2>
      <button style={{ textDecoration: 'none' }}>
        <Link to="/login"><span>Start here</span></Link>
      </button>
    </div>
  )
};

export default Home;