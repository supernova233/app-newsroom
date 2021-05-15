function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
const port = 80;
const distPath = "dist/app-newsroom/";

app.use(requireHTTPS);

app.use(express.static('./dist/app-newsroom/'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: distPath}
  );
});

app.listen(process.env.PORT || port);
// app.listen(port, () =>{
//     console.log(`Example app listening at http://localhost:${port}`)
// });