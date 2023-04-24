import axios from "axios";

export default async function getBooks(search){
    return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
}