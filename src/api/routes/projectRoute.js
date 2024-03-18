module.exports = (server) => {
    const projectController = require('../controllers/projectController');

    server.get('/getProjects', projectController.getProject);
}