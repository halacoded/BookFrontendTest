import React from "react";
import { NavLink } from "react-router-dom";

export const NAvbar = () => {
  return (
    <div className="bg-green-700 flex items-center justify-between h-20">
      <div className="flex ml-10">
        <NavLink className="text-2xl" to="/">
          Hala Books
        </NavLink>
      </div>
      <div className=" flex gap-5 mr-10">
        <NavLink className="text-xl" to="/BookList">
          {" "}
          Store
        </NavLink>
        <NavLink className="text-xl" to="/AddBook">
          Donate{" "}
        </NavLink>
      </div>
    </div>
  );
};
