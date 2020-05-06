const BASE_URL = "https://api.github.com";

export const fetchUser = (username) => {
  return fetchData(`${BASE_URL}/users/${username}`);
};

export const fetchRepos = (username) => {
  return fetchData(`${BASE_URL}/users/${username}/repos`);
};

const fetchData = (url) => {
  const headers = process.env.REACT_APP_TOKEN && {
    Authorization: `token ${process.env.REACT_APP_TOKEN}`,
  };
  return fetch(url, { headers }).then((response) => response.json());
};
