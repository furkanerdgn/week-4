import React, { useEffect } from "react";

import { useContext } from "react";
import { LibraryContext } from "../../context/BooksContext";
import Results from "../../components/Results";
import Nav from "../../components/Nav";

function HomeLayout() {
  const { books, search,status, setSearch,fetchNextPage,setIsSubmit } = useContext(LibraryContext);


  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmit(true);
    fetchNextPage()
  };

  return (
    <>
      <Nav />

      <section className="min-h-[30rem] relative flex items-center justify-center bg-hero-pattern bg-cover bg-[50%] bg-no-repeat z-0">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-main overflow-hidden opacity-60 -z-10"></div>
        <div className="form-control prose text-center absolute -mt-28   z-10">
          <h1 className="text-base-100 w-full font-semibold ">
            Your personal library, always with you...{" "}
          </h1>
          <p className="text-base-100">
            "Kitaplar dünyayı keşfetmenin en iyi yoludur ve okuma, zihninizi
            keşfetmenin en iyi yoludur."{" "}
            <span className="italic">- Ann Morgan</span>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group flex justify-center mt-2">
              <input
                type="text"
                placeholder="Search…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="floating_filled"
                className="input text-main  input-bordered"
              />
              <button
                type="submit"
                className="btn btn-square bg-main active:bg-transparent "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <svg
          className="absolute -bottom-1 fill-base-100"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 0,400 C 0,400 0,200 0,200 C 143.7333333333333,221.06666666666666 287.4666666666666,242.13333333333333 431,252 C 574.5333333333334,261.8666666666667 717.8666666666668,260.5333333333333 886,250 C 1054.1333333333332,239.46666666666667 1247.0666666666666,219.73333333333335 1440,200 C 1440,200 1440,400 1440,400 Z"></path>
        </svg>
      </section>

      {status === "loading" ? (
        <div className="flex justify-center items-start h-[30rem]">
          <progress className="progress w-56"></progress>
        </div>
      ) : status === "error" ? (
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
              <span>Error: {error.message} !</span>
            </div>
          </div>
        </div>
      ) : (
        books && (
          <div className="text-center">
            <Results />
          </div>
        )
      )}
    </>
  );
}

export default HomeLayout;
