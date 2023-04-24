import React from "react";
import Nav from "../../components/Nav";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

function Book() {
  const { id } = useParams();

  const {
    data: book,
    isLoading,
    isError,
  } = useQuery(
    ["book", id],
    async () => {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      return data;
    },
    {
      onSuccess: (data) => {},
      onError: () => {},
    }
  );

  return (
    <>
      <Nav />
      <div className="bg-base-200">
        {isError ? (
          <div className="flex justify-center items-start h-[30rem]">
            <div className="alert alert-error w-3/6 shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error!</span>
              </div>
            </div>
          </div>
        ) : isLoading ? (
          <div className="flex justify-center items-center h-[30rem]">
            <progress className="progress w-56"></progress>
          </div>
        ) : (
          book && (
            <div className="flex flex-col md:flex-row container p-12 prose max-w-none gap-12   bg-base-200">
              {book?.volumeInfo?.imageLinks ? (
                <figure>
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                </figure>
              ) : (
                <figure>
                  <img
                    src="https://via.placeholder.com/150x200"
                    alt={book.volumeInfo.title}
                  />
                </figure>
              )}
              <div className="w-full">
                <h1 className="">{book.volumeInfo?.title}</h1>
                <div className="flex flex-col justify-between">
                  {book?.volumeInfo?.authors?.map((author, index) => (
                    <h4 key={index}>{author}</h4>
                  ))}
                  <h5>Language: {book?.volumeInfo?.language.toUpperCase()}</h5>
                  <h5>Page Count: {book.volumeInfo?.printedPageCount}</h5>
                  <h5>Published Date: {book.volumeInfo?.publishedDate}</h5>
                </div>
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: book.volumeInfo?.description,
                  }}
                ></div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Book;
