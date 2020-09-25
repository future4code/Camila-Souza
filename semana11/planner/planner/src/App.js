import React from 'react';
import NewTaskForm from './Components/NewTaskInput/NewTaskInput';
import PlannerPage from './Screens/PlannerPage/plannerPage';

function App() {
  return (
    <div>
      <NewTaskForm />
      <PlannerPage />
    </div>
  );
}

export default App;
