import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utility/addTODb';
import Book from '../Book/Book';
const ListedBooks = () => {
      const [readList,setReadList] = useState([]);
     const  allBooks = useLoaderData();
      useEffect(() =>{
        const storedReadList = getStoredReadList();
        const storedReadListInt =storedReadList.map(id => parseInt(id));

        console.log(storedReadList,storedReadListInt,allBooks)
      
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

      },[])
      //ideally we will directly get the read book list from the database 

    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books:
              {readList.length}
            </h3>
            {
              readList.map(book => <Book key={book.bookId}book={book} ></Book>)
            }

            <Tabs>
    <TabList>
      <Tab>Read LIst</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl font-semibold'>Books I read</h2>
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl font-semibold'>My wish list</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;
