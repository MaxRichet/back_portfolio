const ABOUT = '../../data/about.json';

exports.getAbout = async (req, res) => {
    res.json({
        about: ABOUT.txt
    })
}