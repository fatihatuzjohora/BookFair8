
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

//wish List
  
  const getStoredWishList=()=>{
    const storedWishBook=localStorage.getItem('wishBook');
    if(storedWishBook){
return JSON.parse(storedWishBook)
    }
    return [];
  }

  const saveWishBookList=id=>{
    const storedWishBooks= getStoredWishList();
    const exists=storedWishBooks.find(wishId=> wishId===id);
    if(!exists){
        storedWishBooks.push(id);
        localStorage.setItem('wishBook', JSON.stringify(storedWishBooks))
    }
  }
  export{getStoredReadList,saveReadBookList,getStoredWishList,saveWishBookList}