import React from "react";
import { getAllBooks } from "../api/books"; // Corrected import
import { useQuery } from "@tanstack/react-query";
import { BookIteam } from "./BookIteam";
export const BookList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllBooks"],
    queryFn: getAllBooks,
  });

  const booklist = data?.map((book) => <BookIteam key={book.id} book={book} />);

  // const booklist = Array.isArray(data)
  //   ? data.map((book) => <BookIteam key={book.id} book={book} />)
  //   : [];
  return <div className="flex gap-5">{booklist}</div>;
};
