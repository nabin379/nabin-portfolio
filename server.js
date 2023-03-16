const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
