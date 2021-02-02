const tokenOK = () => {
  var token = window.localStorage.getItem("session-token");
  var parsedToken = JSON.parse(atob(token.split(".")[1])).exp;
  var tokenTime = new Date(parsedToken * 1000);
  if (token === null || tokenTime < Date.now) {
    return false;
  } else {
    return true;
  }
};

export default tokenOK;
