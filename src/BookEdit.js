import { useState } from "react";
import useBooksContext from './hooks/use-books-context';

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title)
    const [genre, setGenre] = useState(book.genre)
    const [pages, setPages] = useState(book.pages)
    const { editBookById } = useBooksContext();

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handlePagesChange = (e) => {
        setPages(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit()
        editBookById(book.id, title, genre, pages)
    }

    return (
        <div>
            <div>{book.title}</div>
            <form className="book-edit" onSubmit={handleSubmit}>
                <input className="input" 
                    type="text" 
                    placeholder="New title" 
                    value={title} 
                    onChange={handleChange} />
                <input className="input"
                    type="text"
                    placeholder="New genre"
                    value={genre}
                    onChange={handleGenreChange} />
                <input className="input"
                    type="number"
                    placeholder="Number of pages.."
                    value={pages}
                    onChange={handlePagesChange} />
                <button className="button is-primary" type="submit">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;