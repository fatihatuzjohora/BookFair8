import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import "./Navber.css";
import { useEffect, useState } from "react";
import ReadBook from "../Main/ReadBook";
import WishList from "../Main/WishList";
import { getStoredReadList } from "../LocalStorage";


const ListedBooks = () => {
  const [allDataAdd, setAllDataAdd ]=useState([])
  
  const [tabIndex, setTabIndex] = useState(0);
  const alldata=useLoaderData()

  useEffect(()=>{
    const readlist =getStoredReadList();
  const filterData= alldata.filter(data=>readlist.includes(data.bookId))
  //console.log(filterData); 
  setAllDataAdd(filterData)
  
  },[])
console.log(allDataAdd);
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
<Tabs className='mt-10 text-2xl font-semibold' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <div className="mt-8">
          <TabPanel>
            <div>
            {
              allDataAdd.map(book=> <ReadBook key={book.id} book={book}></ReadBook>)
            }
            </div>
          </TabPanel>
          <TabPanel>
           <div>
           <WishList></WishList>
           </div>
          </TabPanel>
        </div>
      </Tabs>

    </div>
  );
};

export default ListedBooks;
