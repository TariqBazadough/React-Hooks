import React from 'react';

// JSX: JavaScript + HTML
// any code inside the JSX (return for React component) it is an HTML
// any thing inside { } it is JS (Logic)

// functional components (react hooks)
const App = () => {
  // we can setup variables at the start of the function
  const name = 'John';
  const age = 25;
  console.log('AGE: ', age);
  // return must return one JSX element that can have multiple nested children
  // the empty tag called react fragment, we have used it here to wrap the nested children together, we can use other tags such as `div`
  return (
    <>
      <h1>Header 11111</h1>
      <Header />
      {/* 
          <div class="Header">
            <p>Mohammad</p>
            <p>23</p>
          </div>
        */}
      <p>Paragraph</p>
      <p>My Name is: {name}</p>
      <p>1 + 1</p>
      {/* to add javaScript in JSX use curly brackets `{}` */}
      <p>{1 + 1}</p>
      {/* My name is and i am years old */}
      <p>
        My name is: {name} and i am: {age} years old
      </p>
      <p>{`My name is: ${name} and i am: ${age} years old`}</p>
    </>
  );
};

export default App;
