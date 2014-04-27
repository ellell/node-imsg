var applescript = require('applescript')

  , imsg = {};

imsg.getBuddies = function (callback) {
  applescript.execString('tell application "Messages" to get name of buddies', callback);
}

imsg.sendMessage = function (message, buddyName, callback) {
  applescript.execString('tell application "Messages" to send "'+message+'" to buddy "'+buddyName+'"', callback);
}

module.exports = imsg;