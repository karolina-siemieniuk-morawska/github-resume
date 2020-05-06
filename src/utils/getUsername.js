export const getUsername = () => {
  const username = sessionStorage.getItem("username");

  // Note: return invalid placeholder when a user is missing.
  if (username === null) {
    return ""; 
  } 
  
  return sessionStorage.getItem("username");
};
