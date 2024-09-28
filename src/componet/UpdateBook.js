import React from "react";
import { Navigate } from "react-router-dom";
import { updateBook } from "../api/books";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { getBook } from "../api/books";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
export const UpdateBook = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getBook", id],
    queryFn: () => getBook(id),
  });

  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Price, setPrice] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.Title);
      setAuthor(data.Author);
      setPrice(data.Price);
    }
  }, [data]);
  const { mutate } = useMutation({
    mutationKey: ["updateBook"],
    mutationFn: () =>
      updateBook(id, {
        Title,
        Author,
        Price,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["getBook"]);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
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
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading book details.</div>;
  }

  if (!data) {
    return <div>No book data found.</div>;
  }
  return (
    <div>
      {" "}
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input
          type="Title"
          name="Title"
          id="Title"
          value={Title}
          onChange={handleTitleChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label>Author</label>
        <input
          type="Author"
          name="Author"
          id="Author"
          value={Author}
          onChange={handleAuthorTChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          Update
        </button>
      </form>
    </div>
  );
};
