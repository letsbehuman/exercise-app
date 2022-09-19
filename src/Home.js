import React from 'react';
import RoutineList from './components/RoutineList';

const Home = () => {
  const exerciseList = new Array(12).fill('EXERCISE');

  return (
    <div className="flex flex-col bg-green-200">
      <div className="flex flex-col items-center gap-2 my-4">
        <h1>Wellcome back!</h1>
        <h2>CHOOSE 6 EXERCISES </h2>
        <div className="flex gap-3">
          <h4>ROUTINE NAME</h4>
          <input type="text" className="border"></input>
        </div>
        <div className="flex flex-wrap gap-3 p-3 justify-center">
          {exerciseList.map((exercise, index) => (
            <div key={index} className="bg-black border p-8">
              {exercise}
            </div>
          ))}
        </div>
      </div>
      <RoutineList />
    </div>
  );
};

export default Home;
