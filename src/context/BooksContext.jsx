import React, { createContext, useState } from "react";

const LibraryContext = createContext();

function BooksContext({ children }) {
    const [books, setBooks] = useState(null);
    const [search, setSearch] = useState("");
    
    const store = {
        books,
        setBooks,
        search,
        setSearch,
    };
    
    return (
        <LibraryContext.Provider value={store}>
          {children}
        </LibraryContext.Provider>
      );
    }

export { BooksContext, LibraryContext };
