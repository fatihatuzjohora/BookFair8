import { useNavigate } from "react-router-dom";

const Book = ({book}) => {
  const { bookName,image,category,rating,tags,publisher} = book;
  const navigate = useNavigate();
  const getDetails = (id) => {
    navigate(`/book${id}`);
  };
  return (
    <div onClick={() => getDetails()}>
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
              <div> {tags[0]}</div>
              <div className="badge badge-secondary">{tags[1]}</div>
            </div>
            <p>{bookName}</p>
            <p>By :{publisher} </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline">{rating}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
