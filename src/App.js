import { useEffect, useContext } from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';
import BooksContext from './context/books';


function App() {
  const { fetchBooks } = useContext(BooksContext)

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='app'>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
