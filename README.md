exports.config = {
    framework: 'jasmine',
    specs: [],
    multiCapabilities: [{
        'browserName': 'chrome',
        'specs': ['features/*.feature'],
        'shardTestFiles': true, //execute instances of browser simultaneously
    }],
    cucumberOpts: {
        require: ['step_definitions/**/*_steps.js'],
        format: 'pretty',
        tags: config.tags,
        keepAlive: false
    },
    params: {
        tags: "@complete"
    },
}

protractor --params.tags '@issues, @results, ~@todo'

