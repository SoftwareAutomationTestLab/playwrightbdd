module.exports = {
  default: {
    require: [
      'step-definitions/*.ts',
      'hooks/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    parallel: 2,
    timeout: 60000
  }
}