

const Bannar = () => {
    return (
        <div className="hero mt-5 flex-col flex md:flex-row rounded-2xl md:p-20 justify-center  bg-[#1313130D] ">
        
        <div className="">
         
            <p className="md:mb-14 mt-8 mb-5 text-2xl md:text-6xl  max-w-2xl font-bold">Books to freshen up your bookshelf</p>
            <button className="btn text-white  md:text-2xl font-semibold text-center items-center bg-[#23BE0A]">View The List</button>
          
        </div>
        <div className="rounded-lg">
            <img className="rounded-lg shadow-xl" src="https://i.ibb.co/9twqB6q/25856774.jpg" alt="" />
        </div>
      </div>
    );
};

export default Bannar;