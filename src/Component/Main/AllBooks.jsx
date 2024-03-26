import { useEffect, useState } from "react";
import Book from "./Book";

const AllBooks = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <div className="mt-10">
      <h1 className=" text-5xl font-bold text-center ">Books</h1>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {book.map((singleBook) => (
          <Book key={book.id} book={singleBook}></Book>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
