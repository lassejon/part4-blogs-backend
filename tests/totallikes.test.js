const listHelper = require('../utils/list_helper')
const blogs = require('./blogs')
const listWithOneBlog = require('./oneBlog')

describe('total likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totallikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('many lists', () => {
    const result = listHelper.totallikes(blogs)
    expect(result).toBe(36)
  })

  test('no lists', () => {
    const result = listHelper.totallikes([])
    expect(result).toBe(0)
  })
})