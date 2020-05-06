// in order to sort repos by date, convert date to timestamp
const convertDateToTimestamp = (date) => {
  return Date.parse(date);
};

// choosing 6 recently updated repositories
export const createSortedReposArray = (repos) => {
  return repos.sort((a, b) => {
    return (
      convertDateToTimestamp(b.pushed_at) -
      convertDateToTimestamp(a.pushed_at)
    );
  }).splice(6, repos.length - 1);
};
