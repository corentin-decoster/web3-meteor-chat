import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Message } from './Message.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    
    <Message/>
  </div>
);
