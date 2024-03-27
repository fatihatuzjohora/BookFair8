
     {/* const handleClick = (item) => {
    const isExit = ditels.find((pd) => pd.bookId === item.bookId);
    if (isExit) {
      toast(" read");
    } else {
      const newArray = [...ditels, item];

      setwish(newArray);
    }
  };
  const handlePreparing = (item) => {
    const newArray = [...preparing, item];

    setPreparing(newArray);
    const newwish = cook.filter((pd) => pd.bookId !== item.bookId);
    setwith(newwish);


onClick={() => handleClick(item)}


  }; */}

  const getStoredReadList=()=>{
    const storedReadBook=localStorage.getItem('readBook');
    if(storedReadBook){
return JSON.parse(storedReadBook)
    }
    return [];
  }

  const saveReadBookList=id=>{
    const storedReadBooks= getStoredReadList();
    const exists=storedReadBooks.find(bookId=> bookId===id);
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('readBook', JSON.stringify(storedReadBooks))
    }
  }
  export{getStoredReadList,saveReadBookList}