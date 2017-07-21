import _ from 'lodash';
export default function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
          const div = document.createElement('div');
          const userAvatar = document.createElement('div');
          const span = document.createElement('span');
          div.className = 'user';
          userAvatar.className = 'user__avatar';
          span.innerHTML = `${user.name} ${user.age}`;
          div.appendChild(userAvatar);
          div.appendChild(span);
          container.appendChild(div);
        });
    }
}
//comment
