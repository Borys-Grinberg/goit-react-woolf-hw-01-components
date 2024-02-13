import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './components/Profile/user.css';
import './components/Statistics/data.css';
import './components/FriendsList/friends.css';
import './components/TransactionsHistory/transactions.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
