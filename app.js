const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));
app.get(/script/, (req, res) => {
  res.type(".js");
  res.send('console.log("Loaded!");');
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const scripts = [];
for (let i = 0; i < 500; i++) {
  scripts.push(`<script src="/script${i}.js"></script>`);
}

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    ${scripts.join("\n")}
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`
