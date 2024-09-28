import React from "react";
import { useMutation } from "@tanstack/react-query";
import { deleteBook } from "../api/books";
import { useQueryClient } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { useState } from "react";
export const BookIteam = ({ book }) => {
  const queryClient = useQueryClient();
  const [nav, setNAv] = useState("");
  const { mutate } = useMutation({
    mutationKey: ["deleteBook"],
    mutationFn: (id) => deleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["getAllBooks"]);
    },
  });

  const HandleButtonBuy = () => {
    mutate(book._id);
  };
  const HandleButtonView = () => {
    setNAv("View");
  };

  const HandleButtonUpdate = () => {
    setNAv("Update");
  };
  if (nav === "View") {
    return <Navigate to={`/DetailBook/${book?._id}`} />;
  }
  if (nav === "Update") {
    return <Navigate to={`/UpdateBook/${book?._id}`} />;
  }
  return (
    <div className="flex border-solid border-black rounded-5 w-80 h-60 shadow-md gap-5 items-center justify-center">
      <div
        key={book.id}
        className="flex flex-col  items-center justify-between"
      >
        <h1>{book?.Title}</h1>
        <h1>{book?.Author}</h1>
        <h1>{book?.Price}</h1>
        <h1>{book?.Image}</h1>
        <div className="flex gap-10">
          <button
            className="bg-black text-white"
            onClick={() => {
              HandleButtonBuy();
            }}
          >
            BUY
          </button>

          <button
            className="bg-black text-white"
            onClick={() => {
              HandleButtonView();
            }}
          >
            View
          </button>
          <button
            className="bg-black text-white"
            onClick={() => {
              HandleButtonUpdate();
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
