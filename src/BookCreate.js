import { useState } from "react";

function BookCreate( {onSubmit} ) {
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(title)

        setTitle('')
    }

    return (
        <div className="book-create">
            <h1>Add a book</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" type="text" name="title" onChange={handleChange} value={title}/>
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;