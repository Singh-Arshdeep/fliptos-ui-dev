import React, { useState } from 'react';
import BookCard from './bookCard';
import {initialData} from '../../landing/recommendation/recommendationDummyData';

function BookInfo() {
  const [bookInfo] = useState(initialData.books);
  const bookCards = bookInfo.map((book) => (
    <BookCard book={book} />
  ));

  return (
    <div>
      {bookCards}
    </div>
  );
}

export default BookInfo;
