import React from "react";
import { Navigate } from "react-router-dom";
import { createBook } from "../api/books";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
export const AddBook = () => {
  const queryClient = useQueryClient();
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Price, setPrice] = useState("");
  const [nav, setNAv] = useState(false);
  const { mutate } = useMutation({
    mutationKey: ["createBook"],
    mutationFn: () =>
      createBook({
        Title,
        Author,
        Price,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["getAllBooks"]);
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
    setNAv(true);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorTChange = (e) => {
    setAuthor(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  if (nav) {
    return <Navigate to="/BookList" />;
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input
          type="Title"
          name="Title"
          id="Title"
          value={Title}
          onChange={handleTitleChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label>Author</label>
        <input
          type="Author"
          name="Author"
          id="Author"
          value={Author}
          onChange={handleAuthorTChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label>Price</label>
        <input
          type="Price"
          name="Price"
          id="Price"
          value={Price}
          onChange={handlePriceChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Donate
        </button>
      </form>
    </div>
  );
};
