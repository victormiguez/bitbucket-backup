var fs = require('fs');
var obj;
var repositories = [];

fs.readFile('repoinfo.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  obj.repositories.forEach(function (element) {
    repositories.push(element.resource_uri.split('/')[4]);
  });
  fs.writeFile('repositories', repositories, 'utf8');
  console.log(repositories);
});