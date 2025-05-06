const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Minu lemmikmagustoit on šokolaadikook!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server töötab pordil ${PORT}`);
});
