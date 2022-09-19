import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import RoutineList from './components/RoutineList';

const Workout = () => {
  return (
    <div className="flex flex-col h-[100%]  justify-around w-full  bg-green-200 ">
      <h1 className="text-xl mx-auto font-bold p-4  ">Lets get ready!!</h1>
      <button className="mx-auto hover:animate-pulse transition ease-in-out hover:scale-105 duration:1000 cursor-pointer text-black p-2  uppercase text-[10rem]  font-bold rounded-full bg-green-400 ">
        <AiFillPlayCircle />
      </button>
      <h3 className="mx-auto  mt-10 mb-5 font-bold">
        Display last Statisstic from this routine
      </h3>
      <div className="flex flex-col justify-center">
        <div className="mx-auto p-1">
          EXERCISE 1:{'10 rep'}
          {'30 seg'}
        </div>
        <div className="mx-auto p-1">
          EXERCISE 2:{'10 rep'}
          {'30 seg'}
        </div>
        <div className="mx-auto p-1">
          EXERCISE 3:{'10 rep'}
          {'30 seg'}
        </div>
        <div className="mx-auto p-1">
          EXERCISE 4:{'10 rep'}
          {'30 seg'}
        </div>
      </div>
      <RoutineList />
    </div>
  );
};

export default Workout;
