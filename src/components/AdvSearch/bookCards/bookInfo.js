import React, { useState } from 'react';
import BookCard from './bookCard';
import {initialData} from '../../Landing/recommendation/recommendationDummyData';

function BookInfo() {
   
    const [bookInfo, setBooksInfo] = useState(initialData.books);
    const bookCards = bookInfo.map(book => {
        return(
            <BookCard book={book}/>
        );
    });

    return(
        <div>
            {bookCards}
        </div>
    );
}

export default BookInfo;