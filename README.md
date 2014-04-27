# node-imsg

Send iMessages from terminal

## Example

```javascript
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
      console.log('message sent');
      process.exit();
    });
  });
});
```

## Licence

Copyright (c) 2014 Lisa Övermyr & David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
