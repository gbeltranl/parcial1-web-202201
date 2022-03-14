const axios = require('axios');
const getUser = async (username) => {
  //TODO user logic
  var usr = new Object();
  usr.username = username;
  await axios.get(` https://mauvelous-leopard-5257.twil.io/plays-detail?username=${username}`)
  .then(function (response) {
    usr.plays =new Set(response.data.plays).size;
    usr.tracks = response.data.plays.filter((v, i, a) => a.indexOf(v) === i);
  });
  await axios.get(`https://mauvelous-leopard-5257.twil.io/friend-detail?username=${username}`)
  .then(function (response) {
    // handle success
    usr.friends = new Set(response.data.friends).size;
  });
  usr.uri = "users/" + username;
  return JSON.stringify(usr) ;
  
  

  //return { message: 'To be implemented' };
};

module.exports = { getUser };
