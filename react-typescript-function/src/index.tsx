import React from 'react';
import ReactDOM from 'react-dom';
import { EventComponent } from './events/EventComponent';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

function App() {
  return (
    <div>
      {/* <UserSearch /> */}
      <EventComponent />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
