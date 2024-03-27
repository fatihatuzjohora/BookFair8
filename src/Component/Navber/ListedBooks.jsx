import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {
  return (
    <div>

        <div className="mt-10">
          <h1 className="text-5xl font-extrabold text-center rounded-lg p-6 bg-[#1313130D]">
            Books
          </h1>
        </div>

        <div className="mt-10 items-center text-center">
          <button className=" px-10 py-4 rounded-xl border border-[#23BE0A] bg-[#23BE0A] text-white text-2xl font-semibold">
            Sort By
          </button>
        </div>
     
      <div role="tablist" className="tabs tabs-lifted tabs-lg max-w-md mt-10">
        
        <Link to='' role="tab" className="tab text-[#131313CC] font-semibold">
        Read Books
        </Link>
        <Link to='wish' role="tab" className="tab tab-active text-[#131313CC] font-semibold">
        Wishlist Books
        </Link>
    
      </div>
      {/* <div>books: {readingBooks.length}</div>  */}

      <Outlet></Outlet>
     
    </div>
  );
};

export default ListedBooks;
