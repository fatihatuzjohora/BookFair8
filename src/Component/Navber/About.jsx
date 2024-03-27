const About = () => {
  const liStyle = {
    color: "green",
    fontSize: "40px",
    alignItems: "center",
  };
  return (
    <div>
      <div
        className="hero h-[500px]  mt-10  rounded-2xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/ZHC7nw6/download.jpg)",
        }}
      >
        <div className="hero-overlay  bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl fontPlay font-bold">About Us</h1>
          </div>
        </div>
      </div>

      <div className="text-2xl fontPlay mt-16 text-[#131313CC] font-semibold">
        <p>
          A book fair is an event where publishers, authors, and book lovers
          gather to showcase and celebrate literature. These fairs can vary in
          size, from local community events to large international gatherings.
          Here are some key aspects of book fairs:
        </p>
        <li style={liStyle} className="mt-5">
          <span className="text-2xl text-[#131313CC]">
            <span className="font-bold text-[black] ">Venue :</span> Book fairs
            are typically held in convention centers, exhibition halls, or
            outdoor spaces large enough to accommodate numerous exhibitors and
            visitors.
          </span>
        </li>
        <li style={liStyle} className="mt-5">
          <span className="text-2xl text-[#131313CC]">
            <span className="font-bold text-[black] ">Participants :</span>{" "}
            Publishers, authors, distributors, booksellers, literary agents,
            librarians, and book enthusiasts attend book fairs. Its a meeting
            point for professionals in the publishing industry as well as the
            general public.
          </span>
        </li>
        <li style={liStyle} className="mt-5">
          <span className="text-2xl text-[#131313CC]">
            {" "}
            <span className="font-bold text-[black] ">Purpose :</span> Book
            fairs serve several purposes. They provide a platform for publishers
            to promote and sell their books, authors to connect with readers and
            publishers, and readers to discover new books and authors. Book
            fairs also facilitate networking and business opportunities within
            the publishing industry.
          </span>
        </li>
        <li style={liStyle} className="mt-5">
          <span className="text-2xl text-[#131313CC]">
            {" "}
            <span className="font-bold text-[black] ">
              Events and Activities :
            </span>{" "}
            Book signings, author talks, panel discussions, workshops, and book
            launches are common events at book fairs. These activities enhance
            the overall experience for attendees and encourage interaction
            between authors and readers.
          </span>
        </li>
        <li style={liStyle} className="mt-5">
          <span className="text-2xl text-[#131313CC]">
            {" "}
            <span className="font-bold text-[black] ">
              Themes and Specializations :
            </span>{" "}
            Some book fairs focus on specific themes or genres such as childrens
            literature, academic publishing, or regional literature. This allows
            participants to target specific audiences and interests.
          </span>
        </li>
        <li style={liStyle} className="mt-5">
          <span className="text-2xl text-[#131313CC]">
            {" "}
            <span className="font-bold text-[black] ">
              International Book Fairs :
            </span>{" "}
            Major international book fairs include the Frankfurt Book Fair in
            Germany, the London Book Fair in the UK, and the BookExpo America in
            the United States. These events attract participants from around the
            world and showcase a wide range of books and publishing trends.
          </span>
        </li>
        <li style={liStyle} className="mt-5">
          <span className="text-2xl text-[#131313CC]">
            {" "}
            <span className="font-bold text-[black] ">
              Local and Community Book Fairs :
            </span>{" "}
            Smaller-scale book fairs are often organized by local communities,
            libraries, or educational institutions. These events promote
            literacy, support local authors, and encourage community engagement
            with literature.
          </span>
        </li>
        <li style={liStyle} className="mt-5">
          <span className="text-2xl text-[#131313CC]">
            {" "}
            <span className="font-bold text-[black] ">
              Digital Book Fairs :
            </span>{" "}
            With the rise of digital publishing and online book sales, some book
            fairs have incorporated digital components, allowing participants to
            explore and purchase books virtually.
          </span>
        </li>
        <p className="mt-5">
          Overall, book fairs play a crucial role in promoting literacy,
          fostering cultural exchange, and supporting the publishing industry
          worldwide. They provide valuable opportunities for authors,
          publishers, and readers to connect and celebrate the written word.
        </p>
      </div>
    </div>
  );
};

export default About;
