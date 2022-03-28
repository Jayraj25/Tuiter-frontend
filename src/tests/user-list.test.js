import {UserList} from "../components/profile/user-list";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllUsers} from "../services/users-service";
import axios from "axios";

// jest.mock('axios');

const MOCKED_USERS = [
  {username: 'ellen_ripley', password: 'lv426', email: 'repley@weyland.com', _id: "123"},
  {username: 'sarah_conor', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"},
]

test('user list renders static user array', () => {
  render(
<<<<<<< HEAD
    <HashRouter>
      <UserList users={MOCKED_USERS}/>
    </HashRouter>);
=======
      <HashRouter>
        <UserList users={MOCKED_USERS}/>
      </HashRouter>);
>>>>>>> A4-dislikes-feature
  const linkElement = screen.getByText(/ellen_ripley/i);
  expect(linkElement).toBeInTheDocument();
});

test('user list renders async', async () => {
  const users = await findAllUsers();
  render(
<<<<<<< HEAD
    <HashRouter>
      <UserList users={users}/>
    </HashRouter>);
=======
      <HashRouter>
        <UserList users={users}/>
      </HashRouter>);
>>>>>>> A4-dislikes-feature
  const linkElement = screen.getByText(/NASA/i);
  expect(linkElement).toBeInTheDocument();
})


test('user list renders mocked', async () => {
  const mock = jest.spyOn(axios, 'get');
  mock.mockImplementation(() =>
<<<<<<< HEAD
    Promise.resolve({ data: {users: MOCKED_USERS} }));
=======
      Promise.resolve({ data: {users: MOCKED_USERS} }));
>>>>>>> A4-dislikes-feature

  const response = await findAllUsers();
  mock.mockRestore();  // restore original implementation
  const users = response.users;

  render(
<<<<<<< HEAD
    <HashRouter>
      <UserList users={users}/>
    </HashRouter>);
=======
      <HashRouter>
        <UserList users={users}/>
      </HashRouter>);
>>>>>>> A4-dislikes-feature

  const user = screen.getByText(/ellen_ripley/i);
  expect(user).toBeInTheDocument();
});
