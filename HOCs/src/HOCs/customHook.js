//very similar to useEffect, but it is a custom hook
import { useState, useEffect } from "react";

export default function useResource(resourceUrl) {
  // const [user, setUser] = useState(null);
  // instead of user we call resource
  const [resource, setResource] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const result = await fetch(resourceUrl);
      const data = await result.json();
      setResource(data);
    }
    fetchUser();
  }, [resourceUrl]);

  return resource;
}
//in parent component we call this custom hook
