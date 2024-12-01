import React from "react";

const CardUl = ({item}) => {
  return (
    <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-white bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
      <img src={item.image} alt="explorer" className="w-1/2" />
      <h3 className="text-3xl text-center text-slate-900 dark:text-white">
        {item.title}
      </h3>
      <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
        {item.price}
      </p>
      <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
        {item.description}
      </p>
    </li>
  );
};

export default CardUl;
