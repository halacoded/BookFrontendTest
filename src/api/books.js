import instance from ".";

const getAllBooks = async () => {
  const { data } = await instance.get("/Books");
  console.log(data);
  return data.Books;
};

const getBook = async (id) => {
  const { data } = await instance.get(`/Book/${id}`);
  console.log(data);
  return data.Book;
};

const deleteBook = async (id) => {
  const { data } = await instance.delete(`/DeleteBook/${id}`);
  return data;
};

const createBook = async (bookInfo) => {
  const { data } = await instance.post("/CreatBook", bookInfo);
  return data;
};
const updateBook = async (id, bookInfo) => {
  const { data } = await instance.put(`/UpdateBook/${id}`, bookInfo);
  return data;
};
export { getAllBooks, deleteBook, getBook, createBook, updateBook };
