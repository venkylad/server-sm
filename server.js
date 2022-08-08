const express = require('express');

const app = express();

const encodeName = (req, res) => {
  let alphabets = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  let name = req.query.name;
  let age = Number(req.query.age);
  let encodedName = '';
  if (name && age) {
    for (let i = 0; i < name?.split('').length; i++) {
      if (alphabets.indexOf(name[i]) !== -1) {
        let index = alphabets.indexOf(name[i].toLowerCase());
        encodedName += alphabets[index + age];
      } else {
        encodedName += name[i];
      }
    }
  }

  res.json({
    encodedName,
    age,
  });
};

app.get('/', encodeName);

app.listen('5000', () => console.log('Port running in 5000'));
