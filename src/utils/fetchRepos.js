export const fetchRepos = (username) => {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((result) => result.json())
    .then((fetchedRepos) => {
      console.log(fetchedRepos);
      return fetchedRepos;
    });
};
