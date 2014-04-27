var imsg = require('./imsg.js')
  , message;

if (!process.argv[2])
  return console.log('no message');

message = process.argv[2];

imsg.getBuddies(function (err, buddies) {
  buddies.forEach(function (buddy, i) {
    console.log(i + ' - ' + buddy);
  });

  console.log('Send message to: ');

  process.stdin.on('data', function (input) {
    imsg.sendMessage(message, buddies[input.toString().replace('\n', '')], function (err, res) {
      if (err) {
        console.log('err', err);
        process.exit();
      }
      console.log('message sent');
      process.exit();
    });
  });
});