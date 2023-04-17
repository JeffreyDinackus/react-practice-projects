import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

function BookList() {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
      {/* <Review /> */}
    </article>
  );
};
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg'
    alt=''
  />
);

const Title = () => <h2>Atomic Habits</h2>;
const Author = () => {
  return <h2>James Clear</h2>;
};
// const Review = () => <h2>Review placeholder</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
