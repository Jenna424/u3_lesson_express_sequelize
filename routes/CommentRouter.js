const Router = require('express').Router()
const controller = require('../controllers/CommentController')
// http://localhost:3001/api/comments/all
Router.get('/all', controller.GetAllComments)
// http://localhost:3001/api/comments/view/1
Router.get('/view/:comment_id', controller.GetCommentDetails)
// http://localhost:3001/api/comments/1
Router.delete('/:comment_id', controller.DeleteComment)
// http://localhost:3001/api/comments/2
Router.put('/:comment_id', controller.UpdateComment)
// http://localhost:3001/api/comments/1/3
Router.post('/:user_id/:twert_id', controller.CreateComment)
module.exports = Router
