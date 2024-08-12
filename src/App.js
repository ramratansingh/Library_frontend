import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import UserCatalog from './components/UserCatalog';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/catalog" element={<UserCatalog />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/" element={<h1>Welcome to the Library Management System</h1>} />
      </Routes>
    </div>
  );
}

export default App;

