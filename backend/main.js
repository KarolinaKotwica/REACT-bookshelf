import express from 'express';
const app = express();
import cors from 'cors';
import con from './config/db.js'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    const query = "Select * from books.books";
    con.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.send(data);
    })
})

app.post('/', (req,res) => {
    const query = "INSERT INTO books.books (`id`, `author`, `title`, `genre`, `pages`, `image` ) VALUES (?)";
    const values = [
        req.body.id,
        req.body.author,
        req.body.title,
        req.body.genre,
        req.body.pages,
        req.body.image
    ];

    con.query(query, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Added successfully.")
    })
})

app.put('/:id', (req,res) => {
    const bookId = req.params.id;

    const query = "UPDATE books.books SET `id` = ?, `author` = ?, `title` = ?, `genre` = ?, `pages` = ?, `image` = ? WHERE id = ?"
    const values = [
        req.body.id,
        req.body.author,
        req.body.title,
        req.body.genre,
        req.body.pages,
        req.body.image
    ];

    con.query(query, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Updated successfully.")
    })
})

app.delete('/:id', (req,res) => {
    const bookId = req.params.id;

    const query = "DELETE FROM books.books WHERE id = ?";

    con.query(query, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Deleted successfully.")
    })
})

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});