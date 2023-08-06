import { useState } from "react";
import useBooksContext from './hooks/use-books-context';

function BookCreate() {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [pages, setPages] = useState(0)
    const { createBook } = useBooksContext();

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

        createBook(title, genre, pages)

        setGenre('')
        setTitle('')
        setPages('')
    }

    return (
        <div className="book-create bgColor1">
            <h1>Is there a book worth reading that you would like to share?</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input className="input bgColor1 color1" 
                    type="text" 
                    name="title" 
                    onChange={handleChange} 
                    value={title} 
                    placeholder="Title.."/>
                <input className="input bgColor1 color1"
                    type="text"
                    name="genre" 
                    value={genre}
                    onChange={handleGenreChange}
                    placeholder="Genre.."
                    />
                <input className="input bgColor1 color1"
                    type="number"
                    name="pages" 
                    // value={pages}
                    onChange={handlePagesChange}
                    placeholder="Number of pages.."
                    />
                <button className="button">Add your book</button>
            </form>
        </div>
    )
}

export default BookCreate;