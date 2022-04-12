const Router = require('express').Router()
const controller = require('../controllers/TwertController')

Router.get('/trending', controller.GetPopularTwerts)
Router.get('/recents', controller.GetRecentTwerts)
// Implement these routes
Router.get('/view/:twert_id', controller.GetTwertDetails)
Router.post('/:user_id', controller.CreateTwert)
Router.put('/:twert_id', controller.UpdateTwert)
Router.delete('/:twert_id', controller.DeleteTwert)
// Implement these routes
module.exports = Router
