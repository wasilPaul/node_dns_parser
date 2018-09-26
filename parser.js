const dns = require('dns');
const url = require('url');

const getURL = url.parse('https://nodejs.org/api/url.html');

console.log(getURL);

dns.lookup(getURL.hostname, (err, address, family) => {
     (`address: ${address}, family: IPv${family}`);
});