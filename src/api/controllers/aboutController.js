const fs = require('fs');
const path = require('path');

const ABOUT_PATH = path.join(__dirname, '../../data/about.json');

exports.getAbout = (req, res) => {
  fs.readFile(ABOUT_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier JSON:', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    const jsonData = JSON.parse(data);

    res.json({
      content: jsonData.about.txt
    });
  });
};