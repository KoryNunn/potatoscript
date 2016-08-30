var objectCreate = require('./objectCreate');

module.exports = function(constructor){
    // Create a new object with constructors
    // prototype assigned to __potato__.
    var result = objectCreate(constructor.prototype);

    // Apply the result and arguments to constructor
    var output = constructor.apply(result, Array.prototype.slice.call(arguments, 1));

    // potatotypical inheritance doesn't play well with real constructors
    // so we always return our result..

    // Return the result.
    return result;
};