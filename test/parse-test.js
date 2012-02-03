var jsmeter = require('../').jsmeter,
    fs = require('fs');

fs.readFile('./src/sample.js', 'utf8', function(err, data) {
   var res = jsmeter.run(data);

   res.forEach(function(item) {
      console.log(item);
   });
});
