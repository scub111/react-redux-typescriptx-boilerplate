import * as React from 'react';
import Button from 'antd/lib/button';
import Wow from './Wow';

interface AppProps {
   message: string;
}

export default function ({ message }: AppProps) {
   return (
      <div>
         <h1>Hello {message}</h1>
         <Button type="primary">Test</Button>
         <Wow />
      </div>
   );
}
