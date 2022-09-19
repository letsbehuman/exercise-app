import React, { useState, useEffect } from 'react';
import database from '../database';
import { BiPlayCircle } from 'react-icons/bi';

export default function RoutineList() {
  const [routines, setRoutines] = useState([]);
  const getRoutines = () => {
    setRoutines(database);
  };
  useEffect(() => {
    getRoutines();
  }, [routines]);

  return (
    <div className="flex flex-col bg-green-400 pb-10 ">
      <h3 className="mx-auto mt-3 mb-2">Your Routines</h3>
      <div className="bg-green-200 w-[80%] text-center p-1 space-y-3  mx-auto rounded-lg">
        {routines.map((routine, index) => (
          <div
            className="flex felx-col gap-5 justify-center items-center"
            key={index}
          >
            {`Routine ${index + 1}`}
            <span>
              <BiPlayCircle />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
