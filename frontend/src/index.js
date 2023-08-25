import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/style.css'
import BookContext, {Provider} from './context/books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BookContext.Provider>
        <App />
    </BookContext.Provider>);
