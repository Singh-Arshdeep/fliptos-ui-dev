import React from 'react';

function BookCard(props) {
  console.log(props);
  return (
    <div>
      <img src={props.book.imgUrl} />
      <h4>
        Title:
        {props.book.title}
      </h4>
      <p>
        Author:
        {props.book.author}
      </p>
      <p>
        Publisher:
        {props.book.publisher}
      </p>
      <button>Contact Info</button>
    </div>
  );
}

export default BookCard;
