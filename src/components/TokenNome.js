var token = window.localStorage.getItem("session-token");
var parsedToken = JSON.parse(atob(token.split(".")[1])).Nome;

export default parsedToken;
