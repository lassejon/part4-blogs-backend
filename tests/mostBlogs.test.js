const listHelper = require('../utils/list_helper')
const blogs = require('./blogs')
const listWithOneBlog = require('./oneBlog')

// rewrite tests
describe('most blogs', () => {
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.mostBlogs(listWithOneBlog)
    expect(result).toEqual(listWithOneBlog[0])
  })

  test('many lists', () => {
    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual(blogs[2])
  })

  test('no lists', () => {
    const result = listHelper.mostBlogs([])
    expect(result).toEqual({})
  })
})