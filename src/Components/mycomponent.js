import React from 'react';

const MyComponent = (props) => {
  
  const { showContent, text } = props;

  return (
    <div>
      {showContent ? (
        <p>{text}</p>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default MyComponent;
