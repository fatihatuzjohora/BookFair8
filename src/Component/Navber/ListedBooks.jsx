import { Link, Outlet } from "react-router-dom";



import './Navber.css';
// import { useState } from "react";

const ListedBooks = () => {
// const [togglestate, setToggleState]=useState(1);
// const toggleTab=(index)=>{
//   setToggleState(index);
// }

  return (
    <div className="fontPlay">
      <div className="mt-10">
        <h1 className="text-5xl font-extrabold text-center rounded-lg p-6 bg-[#1313130D]">
          Books
        </h1>
      </div>

      {/* <div className="mt-10 items-center text-center">
        <button>
        <select className="select rounded-xl border border-none bg-[#23BE0A] text-white text-3xl font-semibold">
          <option disabled hidden selected>
          Sort By
          </option>
          <option className="text-xl text-center">Marge</option>
          <option className="text-xl text-center">Bart</option>
          <option className="text-xl text-center">Lisa</option>
          <option className="text-xl text-center">Homer</option>
          <option className="text-xl text-center">Maggie</option>
        </select>
        </button>
      </div> */}


      {/* <div>
        <div role="tablist" className={togglestate===1? 'tabs active-tabs':'tabs'}>
        <div onClick={()=>toggleTab(1)} role="tab" className="tabs tab text-[#131313CC] font-semibold">
          Read Books
        </div>

        <div
        onClick={()=>toggleTab(2)}
          role="tab"
          className={togglestate===2? 'tabs active-tabs':'tabs'} >
          Wishlist Books
        </div>
      </div>
      </div> */}

      <div role="tablist" className="bloc-tabs tabs tabs-lifted tabs-lg max-w-md mt-10">
        <Link to="" role="tab" className="tabs tab text-[#131313CC] font-semibold">
          Read Books
        </Link>

        <Link
          to="wish"
          role="tab"
          className="tabs tab tab-active text-[#131313CC] font-semibold">
          Wishlist Books
        </Link>
      </div>
      
      {/* <div>books: {readingBooks.length}</div>  */}

      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
