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

Here's my proposal for this: protractor should export its configuration object as protractor.config. A 'params' section will be added, and made modifiable by command line. So the config file

exports.config = {
  params: {
    username: 'julie',
    password: '1234'
  },
  // ... whatever else you need
}
and then the command line
protractor --params username=fred --params additional=foo

Would result in your tests having access to:

protractor.config; // equals {username: 'fred', password: '1234', additional: 'foo'}
Does this meet everyone's needs?



