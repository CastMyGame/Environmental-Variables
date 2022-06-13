// Using dotenv to manage your ENV variables to NodeJS

const http = require("http");

require(`dotenv`).config();
// path: path/filename if we know our path that we want to use

// process.env for specific environmental variables

console.log(process.env);

const host = process.env.HOST;
const port = process.env.PORT;
const user = process.env.API_USERNAME;

const greeting = `Welcome ${user} from ${host}:${port}! Show me what you got!`;

const server = http.createServer((req, res) => {
    console.log(`Thank you for the request!`);
    res.writeHead(200, {
        'Content-Type': `text/html`,
        'Content-Length' : Buffer.byteLength(greeting)});
    res.end(greeting);
})

server.listen(port, host, () => {
    console.log(`Welcome ${user} from ${host}:${port}! Show me what you got!`);
});