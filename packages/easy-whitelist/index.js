const allowedPlayers = require("./account.json");

mp.events.add("playerReady", player => {
  if (allowedPlayers.indexOf(player.socialClub) === -1) {
    player.notify("Player " + player.socialClub + " is not on the Whitelist!")
    player.notify("Contact Server Administrator!")
    player.ban("Not on the Whitelist");
  }
});