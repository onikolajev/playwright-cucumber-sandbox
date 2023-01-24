const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_reports.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'App Version': '2.0.0',
        'Test Environment': 'STAGING',
        Browser:'Chrome 54.0',
        Platform: 'Windows 1000'
    },
}

reporter.generate(options)