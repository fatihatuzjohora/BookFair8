const BookDitels = () => {
  return (
    <div className="  flex flex-col md:flex-row justify-center items-center  gap-10 shadow-lg md:p-14 mt-10">
      <div className="max-w-2xl mx-auto rounded-xl bg-[#1313130D]">
        {/* <img className="rounded-xl bg-[#1313130D]"
          src={}
          alt="Album"
        /> */}
      </div>
      <div className="max-w-3xl">
        <h2 className=" text-5xl font-extrabold fontPlay">
          The Catcher in the Rye
        </h2>
        <h2 className="fontSans text-xl mt-5 mb-5 font-semibold">
          By : Awlad Hossain
        </h2>
        <hr />
        <h2 className="fontSans font-semibold text-xl mt-5 mb-5">Fiction</h2>
        <hr />
        <p className="fontSans font-semibold text-xl mt-5  text-[#131313B3]">
          <span className="text-black ">Review :</span> Sit amet consectetur.
          Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel
          non enim elementum penatibus pellentesque ac. Nec accumsan euismod
          nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus.
          Fermentum faucibus nulla enim ornare. Id neque neque pretium enim
          platea urna non dictum. Faucibus dignissim ridiculus nibh tristique
          massa non.
        </p>
        <div className="flex gap-10 fontSans font-semibold text-xl mt-5 mb-5">
          <div>Tag</div>
          <div>#Young Adult</div>
          <div>#Identity</div>
        </div>
        <hr />

        <div className="fontSans mt-5">
          <div className="mt-3 flex">
            
            <div className="text-[#131313B3] font-semibold">Number of Pages:</div>
             <div className="text-black font-semibold text-xl">281</div>
          </div>

          <div className="mt-3 flex">           
            <div className="text-[#131313B3] font-semibold">Publisher:</div> 
            <div className="text-black font-semibold text-xl">J.B Lippincott & Co.</div>
            </div>

            <div className="mt-3 flex">
            <div className="text-[#131313B3] font-semibold">Year of Publishing:</div>
             <div className="text-black font-semibold text-xl">1980</div>
          </div>

          <div className="mt-3 flex">
            <div className="text-[#131313B3] font-semibold">Rating:</div>
             <div className="text-black font-semibold text-xl">4.8</div>
          </div>
        </div>

        <div className="card-actions fontSans justify-start mt-10 gap-5">
          <button className=" btn px-8 py-2 rounded-lg border border-[#23BE0A] text-xl font-semibold"> Read </button>
          <button className="btn text-white font-semibold text-xl bg-[#50B1C9]">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDitels;
