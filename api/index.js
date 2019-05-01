const { parse } = require('url')

module.exports = (req, res) => {
  console.log('ENV', process.env);
  const { query } = parse(req.url, true)
  const { name = 'World' } = query
  res.end(`Hello ${name}!`)
}