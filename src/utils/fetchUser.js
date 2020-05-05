export const fetchUser = (username) => {
  fetch(`https://api.github.com/users/${username}`)
    .then((result) => result.json())
    .then((fetchedUser) => {
      console.log(fetchedUser);
      return fetchedUser;
    });
};
