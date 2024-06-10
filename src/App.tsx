// src/App.tsx
import React from 'react';
import TaskComponent from './components/TaskComponent';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Task</h1>
      <TaskComponent />
    </div>
  );
};

export default App;
