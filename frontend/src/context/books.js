import { createContext, useState, useEffect, useCallback } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([])

    const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:9000/')
    setBooks(response.data)
  }, [])

  const createBook = async (author, title, genre, pages, image) => {
    const response = await axios.post('http://localhost:9000/', {
      author,
      title,
      genre,
      pages,
      image
    })


    const updateBooks = [
      ...books,
      response.data
    ]

    setBooks(updateBooks)
  }



  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:9000/${id}`)

    const updatedBooks = books.filter((book)=>{
      return book.id != id;
    })

    setBooks(updatedBooks)
  }

  const editBookById = async (id, newAuthor, newTitle, newGenre, newPages, newImage) => {
    const response = await axios.put(`http://localhost:9000/${id}`, {
      id: id,
      author: newAuthor,
      title: newTitle,
      genre: newGenre,
      pages: newPages,
      image: newImage
    });

    const updatedBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  useEffect(() => {
    fetchBooks()
  }, [createBook])

  useEffect(() => {
    fetchBooks()
  }, [deleteBookById])

  useEffect(() => {
    fetchBooks()
  }, [editBookById])

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
