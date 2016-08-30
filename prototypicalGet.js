/*
    to avoid how JS actually works we are going to use our own __proto__
    we will use __potato__ for ours :D
*/

module.exports = function get(object, key){
    if(!(object instanceof Object)){
        return;
    }

    if(key in object){
        return object[key];
    }

    return get(object['__potato__'], key);
};