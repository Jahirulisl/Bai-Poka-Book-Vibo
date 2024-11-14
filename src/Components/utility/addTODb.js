const getStoredReadList = () => {
    //red-list 
    const storedListStr =localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return[];
    }
}

 const addToStoredReadList =(id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
          //already exists.do not add it
          console.log(id,'already exists in the read list')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);
    }
}

const getStoredWishList = () => {
    //WishList
    const storedWishListStr =localStorage.getItem('Wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishListStr;
    }
    else{  
        storedWishListStr.push(id);
        const storedWishListStr=
        [];
    }
}

export {addToStoredReadList, getStoredReadList}