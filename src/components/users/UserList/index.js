import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import actions, { users } from 'modules/user';
import { Gravatar } from 'components/misc';
import { UserLink } from 'components/users';

export const UserTable = ({ users: userList }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th />
            <th>Username</th>
            <th>Full Name</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <tr key={user.id}>
              <td>
                <Gravatar email={user.email} size={30} />
              </td>
              <td>
                <UserLink user={user}>{user.username}</UserLink>
              </td>
              <td>{user.fullName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
};

export class UserList extends Component {
  static propTypes = {
    loadUsers: PropTypes.func.isRequired,
    users: PropTypes.array,
  };

  static defaultProps = {
    users: [],
  };

  componentWillMount() {
    this.props.loadUsers();
  }

  render() {
    const { users: usersProp } = this.props;
    return <UserTable users={usersProp} />;
  }
}

const mapStateToProps = state => ({
  users: users(state),
});

export default connect(mapStateToProps, { loadUsers: actions.fetchRequest })(
  UserList,
);
