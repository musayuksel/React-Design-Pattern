import printProps from "./HOCs/printProps";
import { UserInfo } from "./UserInfo";

function App() {
  const UserInfoWrapper = printProps(UserInfo);
  const user = {
    name: "DDDD",
    age: 12,
    hairColor: "ddd",
    hobbies: ["ddd", "dsdd"],
  };
  return <UserInfoWrapper user={user} />;
}

export default App;
