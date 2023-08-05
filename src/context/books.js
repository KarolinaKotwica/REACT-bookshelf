import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }


  const createBook = async (title, genre) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
      genre
    })

    console.log(response)

    const updateBooks = [
      ...books,
      response.data
    ]

    setBooks(updateBooks)
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter((book)=>{
      return book.id != id;
    })

    setBooks(updatedBooks)
  }

  const editBookById = async (id, newTitle, newGenre) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
      genre: newGenre
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks
  }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;

// when we would like to import that: import BookContext, {Provider} from..