import React from 'react';

const MessageComponent = ({ msg }) => {
  return (
    <html>
      <head>
        <meta charset="ISO-8859-1" />
        <title></title>
      </head>
      <body>
        <h1>{msg}</h1>
      </body>
    </html>
  );
};

export default MessageComponent;
