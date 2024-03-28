import { CiLocationOn } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlinePeople } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const WishList = ({book}) => {
  
  const navigate = useNavigate();
  const handelListedBook = () => {
    navigate("/book/"+book.bookId);
  };

  const {bookName,
    image,
    category,
    rating,
    tags,
    publisher,
    bookId,
    yearOfPublishing,
    totalPages,
    review,}=book;

  return (
    <div>
      <div className="  flex flex-col md:flex-row justify-center items-center  gap-10 shadow-lg md:p-5 border rounded-2xl mt-10">
        <div className="max-w-2xl mx-auto rounded-xl bg-[#1313130D]">
          <img className="rounded-xl bg-[#1313130D]"
          src={image}
          alt="Album"
        />
        </div>
        <div className="max-w-3xl">
          <h2 className=" text-5xl font-extrabold fontPlay link link-hover">
          {bookName}
          </h2>
          <h2 className="fontSans text-xl mt-5 mb-5 font-semibold">
            By : {publisher}
          </h2>

          <h2 className="fontSans font-semibold text-xl mt-5 mb-5">{category}</h2>
          <div className="flex items-center gap-5 fontSans font-semibold text-xl mt-5 mb-5">
            <div>Tag</div>
            <div className=" btn font-semibold text-xl px-4 py-2 rounded-3xl border border-none bg-[#23BE0A0D] text-[#23BE0A]">
              #{tags[0]}
            </div>
            <div className=" btn font-semibold text-xl px-4 py-2 rounded-3xl border border-none bg-[#23BE0A0D] text-[#23BE0A]">
              #{tags[1]}
            </div>
            <div className="text-[#131313CC] flex gap-2 items-center">
              <span>
                <CiLocationOn />
              </span>
              <span>Year of Publishing:  {yearOfPublishing}</span>
            </div>
          </div>

          <div className="fontSans flex gap-10 text-[#13131399] font-semibold mt-5 mb-5">
            <div className="flex gap-2 items-center">
              <span>
                <MdOutlinePeople />
              </span>
              Publisher:{publisher}
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <RiPagesLine />
              </span>{" "}
              Page {totalPages}
            </div>
          </div>
          <hr />

          <div className="card-actions fontSans justify-start mt-10 gap-5">
            <button className="btn px-6 py-2 rounded-3xl border bg-[#328EFF26] text-[#328EFF] text-xl font-semibold">
              
              Read
            </button>
            <button className="btn px-6 py-2 rounded-3xl border bg-[#FFAC3326] text-[#FFAC33] text-xl font-semibold">
              Wishlist
            </button>
            <button onClick={handelListedBook} className=" btn px-6 py-2 rounded-3xl border border-[#23BE0A] bg-[#23BE0A] text-white text-xl font-semibold">
            
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
