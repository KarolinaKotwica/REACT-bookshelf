import { useState } from "react";
import useBooksContext from './hooks/use-books-context';

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [genre, setGenre] = useState(book.genre)
    const [pages, setPages] = useState(book.pages)
    const [image, setImage] = useState('https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60')
    const { editBookById } = useBooksContext();

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

        onSubmit()
        editBookById(book.id, author, title, genre, pages, image)
    }

    return (
        <div>
            <div className="color1">{book.title}</div>
            <form className="book-edit" onSubmit={handleSubmit}>
                <input className="input bgColor1" 
                    type="text" 
                    placeholder="New title" 
                    value={title} 
                    onChange={handleChange} />
                <input className="input bgColor1" 
                    type="text" 
                    placeholder="New author" 
                    value={author} 
                    onChange={handleAuthorChange} />
                <input className="input bgColor1"
                    type="text"
                    placeholder="New genre"
                    value={genre}
                    onChange={handleGenreChange} />
                <input className="input bgColor1"
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