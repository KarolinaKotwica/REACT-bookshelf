import { useState } from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';

function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const updateBooks = [
      ...books ,{
        id: Math.round(Math.random()* 9999), 
        title
      } 
    ]

    setBooks(updateBooks)
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book)=>{
      return book.id != id;
    })

    setBooks(updatedBooks)
  }

  const editBookById = (id, title) => {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return {...book, title}
      } 
      
      return book
      
    })

    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onSubmit={createBook} />
    </div>
  );
}

export default App;
