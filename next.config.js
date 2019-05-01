console.log('next config env', process.env);
module.exports = {    
  target: 'serverless',
  env: {
    TEST_ENV_WORKS: true 
  }
}