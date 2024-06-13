import React from 'react';
import Thread from '../components/thread'; // Adjust the import path as necessary

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to FlatMate</h1>
      <Thread />
    </div>
  );
};

export default HomePage;