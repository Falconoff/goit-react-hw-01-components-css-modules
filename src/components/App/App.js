import user from '../../db/user.json';
import data from '../../db/data.json';
import friendsArr from '../../db/friends.json';
import transactions from '../../db/transactions.json';

import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import css from './App.module.scss';

function App() {
  return (
    <div className={css.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="upload stats" data={data} />

      <FriendList friends={friendsArr} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
