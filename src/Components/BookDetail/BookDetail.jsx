import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../utility/addTODb";

 const BookDetail = () => {

   const {bookId} = useParams();
   const data =useLoaderData();
   const id = parseInt(bookId);
    //    console.log(typeof bookId,typeof id,typeof data[0].bookId);

 const book = data.find(book => book.bookId === id);
    //  console.log(book);
   const {bookId:currentBookId,image,bookName,author,tags} =book;

   const handleMarkAsRead = (id) => {
    /***
     * 1.understand what to store or save: => bookId.
     * 2. where to store: database
     * 3.array, list,collection:
     * 5.if not then add the book to the list
     * 6.if yes, do not add the book.
     * 
     */
     addToStoredReadList(id);
   }
  
    return (
        
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  lg:flex-row">
        <img className="w-96"
      src={image}/>
    <div>

      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p>By:{author}</p>
      <br/>
      <p>{tags}</p>

      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
       <div className="items-center ">
       <button className="mr-4 btn" disabled="disabled">Disabled using attribute</button>
      <button className="btn btn-disabled" tabIndex="-1" role="button" aria-disabled="true">
       Disabled using class name
    </button>
       </div>
       <div className="divider"></div>
       <br />
          
       <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline mr-4  btn-accent">Mark as Read</button>
       <button className="btn btn-accent">Mark as Wish List</button>
    </div>
  </div>
</div>
    );
};

export default BookDetail;