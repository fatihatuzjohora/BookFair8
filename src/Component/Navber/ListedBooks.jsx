import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import "./Navber.css";
import { useEffect, useState } from "react";
import ReadBook from "../Main/ReadBook";
import WishList from "../Main/WishList";
import { getStoredReadList, getStoredWishList } from "../LocalStorage";


const ListedBooks = () => {

  const [categories, setCatagoris]=useState('');
  const [allDataAdd, setAllDataAdd ]=useState([]);
  const [allwishAdd, setAllwishAdd]=useState([]);
  
  const [tabIndex, setTabIndex] = useState(0);
  const alldata=useLoaderData();

  
  const catagori=(e)=>{
    setCatagoris(e.target.value)
  }

  const filteredJobs = allDataAdd.filter((data) =>
  categories === "" || data.category ===categories
  
);

const filteredWish = allwishAdd.filter((data) =>
  categories === "" || data.category ===categories
  
);

  useEffect(()=>{
    const readlist =getStoredReadList();
  const filterData= alldata.filter(data=>readlist.includes(data.bookId))
  //console.log(filterData); 
  setAllDataAdd(filterData)
  },[])

  useEffect(()=>{
    const readlist =getStoredWishList();
  const filterData= alldata.filter(data=>readlist.includes(data.bookId))
  //console.log(filterData); 
  setAllwishAdd(filterData)
  },[])
console.log(categories);

  return (
    <div className="fontPlay">
      <div className="mt-10">
        <h1 className="text-5xl font-extrabold text-center rounded-lg p-6 bg-[#1313130D]">
          Books
        </h1>
      </div>

      <div className="mt-10 items-center text-center">
        <button>
        <select onChange={catagori} className="select rounded-xl border border-none bg-[#23BE0A] text-white text-3xl font-semibold">
          <option disabled hidden selected>
          Sort By
          </option>
          <option value={''}  className="text-xl text-center ">All</option>
          <option value={'Fiction'} className="text-xl text-center">Fiction</option>
          <option value={'Classic'} className="text-xl text-center">Classic</option>
          
        </select>
        </button>
      </div>


<Tabs className='mt-10 text-2xl font-semibold' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <div className="mt-8">
          <TabPanel>
            <div>
            {
              filteredJobs.map(book=> <ReadBook key={book.id} book={book}></ReadBook>)
            }
            </div>
          </TabPanel>
          <TabPanel>
           <div>
           {
              filteredWish.map(book=> <WishList key={book.id} book={book}></WishList>)
            }
           </div>
          </TabPanel>
        </div>
      </Tabs>

    </div>
  );
};

export default ListedBooks;
