const dns = require('dns');
const url = require('url');

const getURL = url.parse('https://nodejs.org/api/url.html');

console.log(getURL);

const { host, hostname, protocol } = getURL;

dns.lookup(hostname, (err, address, family) => {
    console.log(`address: ${address}, family: IPv${family}`);
});