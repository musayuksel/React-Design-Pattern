import { useState, useEffect } from "react";

export default function fetchUserAndPrint(Components, userId) {
  return (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      async function fetchUser() {
        const result = await fetch(`/users/${userId}`);
        const currentUser = await result.json();
        setUser(currentUser);
      }
      fetchUser();
    }, [userId]);

    return <Components {...props} user={user} />;
  };
}
