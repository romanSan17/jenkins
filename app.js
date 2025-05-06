const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Minu lemmikmagustoit on šokolaadikook!');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server töötab pordil ${PORT}`);
});
