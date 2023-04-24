import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { LibraryContext } from '../context/BooksContext';
import { useEffect, useRef } from 'react';


function Results() {

    const { books} = useContext(LibraryContext);
    const scrollRef = useRef(null);
    useEffect(() => {
      if(scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [books]);


  return (
    <>
          <hr
          className="my-3 h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-main to-transparent opacity-25 dark:opacity-100" />
      
          <div id="results" ref={scrollRef} className="container justify-items-center mt-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            { 
             books?.map((book) => (  
                <div key={uuidv4()} className="card w-96 bg-base-100 duration-300 shadow-md p-5 hover:bg-secondary-content hover:shadow-2xl">
                    <Link to={`/books/${book.id}`}>
                      
                    {
                      book.volumeInfo.imageLinks ?
                      <figure>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />  
                  </figure>
                  :
                  <figure>    
                    <img src="https://via.placeholder.com/150x200" alt={book.volumeInfo.title} />
                    </figure>
                }
                <div className="card-body prose">
                  <h2 className="card-title line-clamp-2  text-main">{book.volumeInfo.title}</h2>
                  <p className="line-clamp-2">
                    {book.volumeInfo.authors}
                  </p>
                  <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
                </div>
                </Link>
              </div>   
            ))
            } 
        </div>
      </div>
      </>
  )
}

export default Results