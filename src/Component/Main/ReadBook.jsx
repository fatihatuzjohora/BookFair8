import { CiLocationOn } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlinePeople } from "react-icons/md";


const ReadBook = ({book}) => {
 // console.log(book);

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
      <div>

        <div className="  flex flex-col md:flex-row justify-center items-center  gap-10 shadow-lg md:p-5 border rounded-2xl mt-10">
          <div className="max-w-2xl mx-auto rounded-xl bg-[#1313130D]">
          <img src={image} alt="" />
          </div>
          <div className="max-w-3xl">
            <h2 className=" text-5xl font-extrabold fontPlay">
              The Catcher in the Rye
            </h2>
            <h2 className="fontSans text-xl mt-5 mb-5 font-semibold">
              By : Awlad Hossain
            </h2>

            <h2 className="fontSans font-semibold text-xl mt-5 mb-5">
              Fiction
            </h2>
            <div className="flex items-center gap-5 fontSans font-semibold text-xl mt-5 mb-5">
              <div>Tag</div>
              <div className=" btn font-semibold text-xl px-4 py-2 rounded-3xl border border-none bg-[#23BE0A0D] text-[#23BE0A]">
                #Young Adult
              </div>
              <div className=" btn font-semibold text-xl px-4 py-2 rounded-3xl border border-none bg-[#23BE0A0D] text-[#23BE0A]">
                #Identity
              </div>
              <div className="text-[#131313CC] flex gap-2 items-center">
                <span>
                  <CiLocationOn />
                </span>
                <span>Year of Publishing: 1924</span>
              </div>
            </div>

            <div className="fontSans flex gap-10 text-[#13131399] font-semibold mt-5 mb-5">
              <div className="flex gap-2 items-center">
                <span>
                  <MdOutlinePeople />
                </span>
                Publisher: Scribner
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <RiPagesLine />
                </span>
                Page 192
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
              <button className=" btn px-6 py-2 rounded-3xl border border-[#23BE0A] bg-[#23BE0A] text-white text-xl font-semibold">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
