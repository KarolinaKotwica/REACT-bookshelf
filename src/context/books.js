import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
    

    return <BooksContext.Provider value={{}}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;

// when we would like to import that: import BookContext, {Provider} from..