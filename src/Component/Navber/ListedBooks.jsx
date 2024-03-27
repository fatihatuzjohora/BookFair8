import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {
  return (
    <div>
     
      <div role="tablist" className="tabs tabs-lifted tabs-lg max-w-md mt-10">
        <Link to='' role="tab" className="tab text-[#131313CC] font-semibold">
        Read Books
        </Link>
        <Link to='wish' role="tab" className="tab tab-active text-[#131313CC] font-semibold">
        Wishlist Books
        </Link>
    
      </div>

      <Outlet/>
     
    </div>
  );
};

export default ListedBooks;
