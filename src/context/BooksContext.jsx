import React, { createContext, useState } from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";


const LibraryContext = createContext();

function BooksContext({ children }) {
  const [search, setSearch] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    data :books,
    status,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["books", search],
    async ({ pageParam = 0 }) => {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${pageParam}`
      );
      return data;
    },
    {
      enabled: false,
      getNextPageParam: (lastPage,allPage) => {
        const morePagesExist = lastPage?.totalItems > allPage?.length;
        if (morePagesExist) {
          return allPage?.length+10;
        }
        return false;
      },
    }
  );

  const store = {
    isSubmit,
    setIsSubmit,
    books,
    search,
    setSearch,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
  };

  return (
    <LibraryContext.Provider value={store}>{children}</LibraryContext.Provider>
  );
}

export { BooksContext, LibraryContext };
