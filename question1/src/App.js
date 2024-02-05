import UserList from "./components/UserList";

// use this users object to render the list of users
const users = [
  {
    firstName: "Ada",
    lastName: "lovelace",
  },
  { firstName: "Donld", lastName: "knuth" },
];
  
const sortedUser = users.slice().sort((a,b) => {
  a.lastName.localeCompare(b.lastName);
})

function App() {
  return (
    <div>
      <div className="user-count">
        Users : {sortedUser.length}
      </div>
      <ul className="user-list">
        {sortedUser.map((users) => (
          <li key={users.lastName}>
            {users.firstName} {users.lastName}
          </li>
        ))}
      </ul>
      {/* render the count of users here */}

      {/* render the user list compoenent here */}
      <UserList users={users}/> 
    </div>
  );
}

export default App;
