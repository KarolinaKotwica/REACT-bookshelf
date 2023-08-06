import { useState } from 'react';
import useBooksContext from './hooks/use-books-context';
import axios from 'axios';
import './promptPopup.css';

const PromptPopup = ({book, setIsOpen}) => {
    const [answer, setAnswer] = useState('')
    const { deleteBookById } = useBooksContext();

    console.log(book.id)

    const handleRemove =  async () => {
        const response = await axios.get('http://localhost:3001/test')

        if (answer == response.data[0]) {
            deleteBookById(book.id)
        } else {
            setIsOpen(false)
        }
        // {answer == response ? deleteBookById(book.id) }
    }

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    return (
        <>
            <div className="prompt-container">
                <div className="prompt-content">
                    <p>You can delete only if you know the password!</p>
                    <input type="password" onChange={handleChange} required/>
                    <button onClick={handleRemove}>Remove</button>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                </div>
            </div>
        </>
    )

}

export default PromptPopup;