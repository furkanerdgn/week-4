import { useQuery } from "react-query";
import axios from "axios";
import { useContext } from "react";
import { LibraryContext } from "../context/BooksContext";

export function useGetData(search){

    const { setBooks,setSearch } = useContext(LibraryContext);

    return useQuery(["books",search],async() =>{
            const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            return data;
    },{
        enabled: false,
        onSuccess: (data) => {
            setBooks(data?.items);
            setSearch("");
        },
        onError: () => {
            setBooks([]);
            setSearch("");

        }

    });
 }


 