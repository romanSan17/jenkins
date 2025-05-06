const express = require('express');
const app = express();
const port = 3000;

function hello(name) {
    return 'Minu lemmikmagustoit on ' + name + "!";
}

app.get('/', (req, res) => {
    res.send(hello("šokolaadikook"));
});

app.listen(port, () => {
    console.log(`Rakendus töötab aadressil http://localhost:${port}`);
});
