export const fetchUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((result) => result.json())
    .then((fetchedUser) => {
      return fetchedUser;
    });
};
