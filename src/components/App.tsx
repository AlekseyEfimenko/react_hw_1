import './App.css';
import Profile from './profile/Profile';
import FriendList from './friend-list/FriendList';
import TransactionHistory from './transaction-history/TransactionHistory';
import userData from './profile/userData.json';
import friends from './friend-list/friends.json';
import transactions from './transaction-history/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
