import 'normalize.css';
import Profile from "./Profile/Profile";
import user from "./../data/user.json";
import Statistics from "./Statistics/Statistics";
import stats from "./../data/data.json";
import FriendList from "./FriendList/FriendList";
import friends from "./../data/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import items from "./../data/transactions.json";
import { StyledContainerApp } from "./styledApp";

export const App = () => {
  return (
    <StyledContainerApp
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   // justifyContent: 'center',
      //    maxWidth: 600,
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile user={user}/>
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </StyledContainerApp>
  );
};
