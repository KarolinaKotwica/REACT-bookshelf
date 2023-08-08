import { useState } from "react";
import useBooksContext from './hooks/use-books-context';

function BookCreate() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [pages, setPages] = useState(0)
    const { createBook } = useBooksContext();

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handlePagesChange = (e) => {
        setPages(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (author != '' || genre != '' || title != '' || pages != 0) {
            createBook(author, title, genre, pages)

            setAuthor('')
            setGenre('')
            setTitle('')
            setPages('')
        } else {
            alert('Empty input'); 
        }

    }

    return (
        <div className="book-create-container">
        <div className="book-create">
            <h1>Is there a book worth reading that you would like to share?</h1>
            <form className="form" onSubmit={handleSubmit}>
            <input className="input bgColor1 color1" 
                    type="text" 
                    name="author" 
                    onChange={handleAuthorChange} 
                    value={author} 
                    placeholder="Author.."/>
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
                    value={pages}
                    onChange={handlePagesChange}
                    placeholder="Number of pages.."
                    />
                <button className="button">Add your book</button>
            </form>
        </div>
        <div className="new-book bgColor1">
                <div>{author} - {title}</div>
                <div>{genre}</div>
                <div>{pages} pages</div>
        </div>
        </div>
    )
}

export default BookCreate;