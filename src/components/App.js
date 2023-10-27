import { Component } from 'react';

import initialProfileData from '../components/user.json';
import initialStatisticData from '../components/data.json';
import initialFriendsData from '../components/friends.json';
import initialTransactionsData from '../components/transactions.json';
import { Profile } from './profile/profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export class App extends Component {
  state = {
    profileData: initialProfileData,
    statisticData: initialStatisticData,
    friendsData: initialFriendsData,
    transactionsData: initialTransactionsData,
  };

  render() {
    return (
      <div>
        <Profile items={this.state.profileData} />
        <Statistics stats={this.state.statisticData} />
        <FriendList friends={this.state.friendsData} />
        <TransactionHistory transactions={this.state.transactionsData} />
      </div>
    );
  }
}
