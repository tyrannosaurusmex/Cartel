module.exports = (app) => {
    app.get('/by/:category/:type', (req, res) => {
        // Create server side React and pass through as variable
        res.status(200).render('pages/index');
    });

    // Index Route - This MUST come at the end of the controller require list
    app.get('/', (req, res) => {
        res.status(200).render('pages/index');
    });

    // Default 404
    app.use((req, res) => {
        res.status(404).send('Page Not Found');
    });
}
