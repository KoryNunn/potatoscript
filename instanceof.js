module.exports = function instanceOf(object, constructor){

    if(!(object instanceof Object) || !object.__potato__){
        return false;
    }

    if(object.__potato__ === constructor.prototype){
        return true;
    }

    return instanceOf(object.__potato__, constructor);
};