const express = require('express');
const app = express()
const PORT = 5000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/get1.html");
})

app.get('/process_get', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    const TEMP = `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
  <div class="container mt-5">
  <ul class="list-group">
  <li class="list-group-item" aria-current="true">${response.first_name}</li>
  <li class="list-group-item">${response.last_name}</li>
</ul>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>   
`
    res.header('Content-Type', 'text/html');
    console.log(response);
    res.end(TEMP);
})
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})