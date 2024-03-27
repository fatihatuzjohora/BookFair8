import { parse } from "postcss";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBookList } from "../LocalStorage";

const BookDitels = () => {
  const ditels= useLoaderData()


  
 
  const {id} = useParams()
  
  const idNumber = parseInt(id);
  
const singledata=ditels.find(item=> item.bookId
  ===idNumber)


const handleReadList = () => {
  saveReadBookList(idNumber)
  toast("Book Add To Read List,Book Add To Read List, you have Already Read This Book")
}

const handleWishList = () => {
  toast("you have Already Read This Book, Book Add To Wish List, you have Already Read This Book")
}



const {bookName,image,category,rating,tags,publisher,bookId,yearOfPublishing, totalPages,review}=singledata

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-10 shadow-xl md:p-10 border rounded-lg mt-10">
      <div className=" w-full mx-auto rounded-xl bg-[#1313130D]">
        <img className=" w-full shadow-lg rounded-xl bg-[#1313130D]"
          src={image}
          alt="Album"
        />
      </div>
      <div className="">
        <h2 className=" text-5xl font-extrabold fontPlay">
          {bookName}
        </h2>
        <h2 className="fontSans text-xl mt-5 mb-5 font-semibold">
          By : {publisher}
        </h2>
        <hr />
        <h2 className="fontSans font-semibold text-xl mt-5 mb-5">{category}</h2>
        <hr />
        <p className="fontSans font-semibold text-xl mt-5  text-[#131313B3]">
          <span className="text-black ">Review :</span> {review}
        </p>
        <div className="flex items-center gap-10 fontSans font-semibold text-xl mt-5 mb-5">
          <div>Tag:</div>
          <div className=" btn font-semibold text-xl px-4 py-2 rounded-3xl border border-none bg-[#23BE0A0D] text-[#23BE0A]">#{tags[0]}</div>
          <div className=" btn font-semibold text-xl px-4 py-2 rounded-3xl border border-none bg-[#23BE0A0D] text-[#23BE0A]">#{tags[1]}</div>
        </div>
        <hr />

        <div className="fontSans mt-5 max-w-2xl">
          <div className="mt-3 grid grid-cols-2 ">
            
            <div className="text-[#131313B3] text-xl font-semibold">Number of Pages:</div>
             <div className="text-black font-semibold text-xl">{totalPages}</div>
          </div>

          <div className="mt-3 grid grid-cols-2">           
            <div className="text-[#131313B3] text-xl font-semibold">Publisher:</div> 
            <div className="text-black font-semibold text-xl">{publisher}</div>
            </div>

            <div className="mt-3 grid grid-cols-2">
            <div className="text-[#131313B3] text-xl font-semibold">Year of Publishing:</div>
             <div className="text-black font-semibold text-xl">{yearOfPublishing}</div>
          </div>

          <div className="mt-3 grid grid-cols-2">
            <div className="text-[#131313B3] text-xl font-semibold">Rating:</div>
             <div className="text-black font-semibold text-xl">{rating}</div>
          </div>
        </div>

 



        <div  className=" card-actions fontSans justify-start mt-10 gap-5">
          <button onClick={() =>handleReadList()} className=" btn px-8 py-2 rounded-lg border border-[#23BE0A] text-xl font-semibold"> Read </button>
          <button onClick={() =>handleWishList()} className="btn text-white font-semibold text-xl bg-[#50B1C9]">Wishlist</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDitels;
