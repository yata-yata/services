var Hapi = require('hapi'),
    manifest = require('./config.json'),
    port = +process.env.PORT || 8000,
    composer;

// TODO: Figure something better than this
manifest.servers[0].port = ;

composer = new Hapi.Composer(manifest);

composer.compose(function() {
    composer.start(function() {
        console.log("Servers started");
    });
});
