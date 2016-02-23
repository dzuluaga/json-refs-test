var YAML = require("yamljs");
var swaggerObject = YAML.load('./swagger/yaml/swagger.yaml');
var jsonRefs = require('json-refs');

jsonRefs.resolveRefs(swaggerObject, {
  loaderOptions: {
    processContent: function (res, callback) {
      callback(undefined, YAML.safeLoad(res.text));
    }
  }
})
  .then(function ( results ) {
    console.log( JSON.stringify(results.resolved) )
  })
  .catch(function( reason ) {
    console.log( reason.stack )
  });