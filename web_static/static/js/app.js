import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import AuthForm from './AuthForm';
import './styles.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`/api/weather?city=${city}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('Could not fetch weather data');
    }
  };

  const handleAuth = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Navbar token={token} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<AuthForm mode="login" onAuth={handleAuth} />} />
        <Route path="/signup" element={<AuthForm mode="signup" onAuth={handleAuth} />} />
        <Route
          path="/"
          element={token ? <WeatherForm fetchWeather={fetchWeather} /> : <Navigate to="/login" />}
        />
        <Route
          path="/weather"
          element={weather && <WeatherDisplay weather={weather} />}
        />
      </Routes>
    </Router>
  );
}