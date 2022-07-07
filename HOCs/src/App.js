import fetchUserAndPrint from "./HOCs/fetchUserAndPrint";
import printProps from "./HOCs/printProps";
import { UserInfo } from "./UserInfo";

function App() {
  //   const UserInfoWrapper = printProps(UserInfo);
  //   const user = {
  //     name: "DDDD",
  //     age: 12,
  //     hairColor: "ddd",
  //     hobbies: ["ddd", "dsdd"],
  //   };
  //   return <UserInfoWrapper user={user} />;
  //   const x = ["123", "234", "345"].map((userId) =>
  //     fetchUserAndPrint(UserInfo, userId)
  //   );
  //   const trys = x.map((Y) => (
  //     <div key={Math.floor(Math.random() * 2000)}>
  //       <Y />
  //     </div>
  //   ));
  const UserInfoWithFetch = fetchUserAndPrint(UserInfo, "123");
  const UserInfoWithFetch2 = fetchUserAndPrint(UserInfo, "234");

  return (
    <>
      <h2>TEST</h2>
      <UserInfoWithFetch />
      <UserInfoWithFetch2 />
      {/* {trys} */}
    </>
  );
}

export default App;
