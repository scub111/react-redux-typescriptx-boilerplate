import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import { sum } from './foo';


render(
   <App message="World 23+" />,
   document.getElementById('root'),
);

console.log(sum(2, 6).toString());
