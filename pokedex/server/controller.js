module.exports = {
    scrapeData: (req, res, next) => {
        const db = req.app.get('db')
        db.scrape_data(req.body.name)
        .then(data => {
            res.status(200).send(data)
        }).catch( () => res.status(500).send('It didnt work'))
    }
}