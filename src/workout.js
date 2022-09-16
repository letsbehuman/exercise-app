import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

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
      <div className="flex flex-col bg-green-400 pb-10 ">
        <h3 className="mx-auto mt-3 mb-2">Your Routines</h3>
        <div className="bg-green-200 w-[80%] text-center p-1 space-y-3  mx-auto rounded-lg">
          <div className="mx-auto">routine1</div>
          <div className="mx-auto">routine2</div>
          <div className="mx-auto">routine3</div>
          <div className="mx-auto">routine4</div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
