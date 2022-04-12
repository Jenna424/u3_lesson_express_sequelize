const { Comment, User } = require('../models')

const GetAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetCommentDetails = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.comment_id)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted comment with an id of ${commentId}` })
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.user_id)
    let twertId = parseInt(req.params.twert_id)
    let commentBody = {
      ownerId,
      twertId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllComments,
  GetCommentDetails,
  DeleteComment,
  UpdateComment,
  CreateComment
}
