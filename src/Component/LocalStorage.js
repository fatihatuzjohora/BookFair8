
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