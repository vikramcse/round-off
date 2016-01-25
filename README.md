# round-off
A faster way to round off a number towards 0 compared with ``` Math.floor()``` and ``` Math.ceil()```
http://www.jstips.co/en/rounding-the-fast-way/

# Usage
```js
var round = require('round-off');

console.log(round(-1.0001));
// -> -1

console.log(round(2.11));
// -> 2

console.log(round(null));
// -> Error: The input argument must be a number
```
