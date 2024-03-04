module.exports = (server) => {
    const aboutController = require('../controllers/aboutController');

    server.get('/getAbout', aboutController.getAbout);
}