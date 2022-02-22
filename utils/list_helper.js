const _ = require('lodash')

// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
}

const totallikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }

  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.reduce((prev, current) => {
    console.log(current)
    return prev.likes > current.likes ? prev : current
  }, {})
}

// not tested or working
const mostBlogs = (blogs) => {
  const result = _.head(_(blogs)
    .countBy()
    .entries()
    .maxBy(_.last))

  return result
}

const mostLikes = (blogs) => {

}

module.exports = {
  dummy,
  totallikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}