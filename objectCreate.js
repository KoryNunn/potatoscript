module.exports = function(potatotype){
    // Create a new object.
    var result = {};

    // Assign the constructors prototype to __potato__
    result.__potato__ = potatotype;

    return result;
};