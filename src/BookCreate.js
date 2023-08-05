import { useState } from "react";
import useBooksContext from './hooks/use-books-context';

function BookCreate() {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const { createBook } = useBooksContext();

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        createBook(title, genre)

        setGenre('')
        setTitle('')
        
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
                    onChange={handleGenreChange}
                    placeholder="Genre.."
                    />
                <button className="button">Add your book</button>
            </form>
        </div>
    )
}

export default BookCreate;