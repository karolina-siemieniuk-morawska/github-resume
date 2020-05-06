export const fetchRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((result) => result.json())
    .then((fetchedRepos) => {
      return fetchedRepos;
    });
};
