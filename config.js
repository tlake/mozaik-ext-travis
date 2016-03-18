/**
 * Mozaïk travis widgets sample config.
 *
 * A showcase of all available widgets from mozaik-ext-travis extension.
 * https://github.com/plouc/mozaik-ext-travis
 */
require('dotenv').load();


var travisOwner = 'plouc';
var travisRepo  = 'mozaik';


var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 5000,

    theme: 'night-blue',

    api: {},

    rotationDuration: 10000,

    dashboards: [
        {
            columns: 2,
            rows:    2,
            widgets: [
                {
                    type: 'travis.repository',
                    owner: travisOwner,
                    repository: travisRepo,
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'travis.build_history',
                    owner: travisOwner,
                    repository: travisRepo,
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'travis.build_histogram',
                    owner: travisOwner,
                    repository: travisRepo,
                    columns: 2, rows: 1,
                    x: 0, y: 1
                }
            ]
        }
    ]
};


module.exports = config;
