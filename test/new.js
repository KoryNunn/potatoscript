var test = require('tape');

var ourNew = require('../new');

test('our new works on Object', function(t){
    t.plan(2);

    var x = ourNew(Object);

    t.ok(typeof x === 'object');
    t.ok(x instanceof Object);
});

test('our new works on Array', function(t){
    t.plan(4);

    var x = ourNew(Array);

    t.ok(typeof x === 'object');
    t.ok(x instanceof Object);
    t.ok(x instanceof Array);

    var y = ourNew(Array, 5);

    t.ok(y.length === 5);
});

test('our new works with prototypical inheritance', function(t){
    t.plan(4);

    function Dog(){}
    Dog.prototype.speed = 30;
    Dog.prototype.good = true;

    function Grayhound(){}
    Grayhound.prototype = Object.create(Dog.prototype);
    Grayhound.prototype.speed = 60;

    var ellie = ourNew(Grayhound);

    t.ok(ellie instanceof Dog);
    t.ok(ellie instanceof Grayhound);
    t.ok(ellie.good);
    t.equal(ellie.speed, 60);
});

test('our new does crap things like real new', function(t){
    t.plan(2);

    var x = ourNew(Number, 5);

    t.ok(typeof x === 'object');
    t.ok(x instanceof Object);
});