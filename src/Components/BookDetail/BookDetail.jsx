import { useLoaderData, useParams } from "react-router-dom";

 const BookDetail = () => {

   const {bookId} = useParams();
   const data =useLoaderData();
   const id = parseInt(bookId);
    //    console.log(typeof bookId,typeof id,typeof data[0].bookId);

 const book = data.find(book => book.bookId === id);
    //  console.log(book);
   const {bookId:currentBookId,image,bookName,author,tags} =book;
  
    return (
        // <div className="my-12">
        //     <h2>Book Details: {bookId}</h2>
        //     <img className="w-36" src={image} alt="" />
        //     <br />
        //       <button className="btn btn-outline mr-4  btn-accent">Read</button>
        //       <button className="btn btn-accent">Wish List</button>
        // </div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img className="w-36"
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
       <div className="items-center">
             <button className="btn mr-4  btn-accent">Read</button>
             <button className="btn btn-accent">Wish List</button>
       </div>
       <div className="divider"></div>
       <br />
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default BookDetail;