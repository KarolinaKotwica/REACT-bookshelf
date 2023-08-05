import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from './hooks/use-books-context';

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false)
    const { deleteBookById } = useBooksContext();


    const handleRemove = () => {
        deleteBookById(book.id)
    }

    const handleEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
    }

    let content = <span><h3>{book.title}</h3><h5>{book.genre}</h5></span>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }

    return (
        <>
            <div className="book-show bgColor1">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
                <div className="content">{content}</div>
                <div className="actions">
                    <button className="edit" onClick={handleEdit}>Edit</button>
                    <button className="delete" onClick={handleRemove}>x</button>
                </div>
            </div>
        </>
    )
}

export default BookShow;