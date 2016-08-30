module.exports = function(constructor){
    // Create a new object.
    var result = {};

    // Assign the constructors prototype to __proto__
    result.__proto__ = constructor.prototype;

    // Apply the result and arguments to constructor
    var output = constructor.apply(result, Array.prototype.slice.call(arguments, 1));
    // If the output from apply is an object, return it.
    if(output !== null && typeof output === 'object'){
        return output;
    }

    // Otherwise, return the result.
    return result;
};