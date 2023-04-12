import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <>
      <div className='test'>
        <h1>XD</h1>
        <ul>
          <li>
            <a href='https://facebook.com'>facebook.com</a>
          </li>
        </ul>
      </div>
      <h2>Ahoy!</h2>
    </>
  );
}
// function Greeting() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// }

export default Greeting;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
