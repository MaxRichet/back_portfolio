const fs = require('fs');
const path = require('path');

const PROJECT_PATH = path.join(__dirname, '../../data/projects.json');

exports.getProjects = (req, res) => {
  fs.readFile(PROJECT_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier JSON:', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    const jsonData = JSON.parse(data);

    res.json({
      content: jsonData.projects
    });
  });
};