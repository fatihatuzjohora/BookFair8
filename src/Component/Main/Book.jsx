import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const Book = ({book}) => {
  const { bookName,image,category,rating,tags,publisher,bookId} = book;


  const navigate = useNavigate();
  const getDetails = (id) => {
    navigate(`/book/${id}`);
  };
  return (
    <div onClick={() => getDetails(bookId)}>
      <section className="mt-5">
        <div className="card p-4 border shadow-lg">
          <figure className="bg-[#F3F3F3] rounded-lg">
            <img className=""
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className=" flex justify-between items-center">
              <div className=" btn font-semibold text-xl px-4 py-2 rounded-3xl border border-none bg-[#23BE0A0D] text-[#23BE0A]"> {tags[0]}</div>
              <div className=" btn font-semibold text-xl px-4 py-2 rounded-3xl border border-none bg-[#23BE0A0D] text-[#23BE0A]">{tags[1]}</div>
            </div>
            <p className=" text-3xl font-bold">{bookName}</p>
            <p className="text-xl text-[#131313CC] font-semibold">By : {publisher} </p>
            <div className="card-actions justify-between">
              <div className="text-xl text-[#131313CC] font-semibold">{category}</div>
              <div className="flex gap-2 items-center text-xl text-[#131313CC] font-semibold"><span>{rating}</span><span><CiStar /></span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
