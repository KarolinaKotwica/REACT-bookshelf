import { useState } from "react";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(book.id, title)
    }

    return (
        <div>
            <div>{book.title}</div>
            <form className="book-edit" onSubmit={handleSubmit}>
                <input className="input" type="text" placeholder="New title" value={title} onChange={handleChange} />
                <button className="button is-primary" type="submit">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;