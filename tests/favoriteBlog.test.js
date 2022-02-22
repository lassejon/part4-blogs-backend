const listHelper = require('../utils/list_helper')
const blogs = require('./blogs')
const listWithOneBlog = require('./oneBlog')

describe('most likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    expect(result).toEqual(listWithOneBlog[0])
  })

  test('many lists', () => {
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual(blogs[2])
  })

  test('no lists', () => {
    const result = listHelper.favoriteBlog([])
    expect(result).toEqual({})
  })
})