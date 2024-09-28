import React from "react";
import { getBook } from "../api/books";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BookIteam } from "./BookIteam";
export const DetailBook = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getBook", id],
    queryFn: () => getBook(id),
  });
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
      <h1>{data?.Title}</h1>
      <BookIteam key={data.id} book={data} />
    </div>
  );
};
