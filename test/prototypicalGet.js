var test = require('tape');

var get = require('../prototypicalGet');
var ourPotatoNew = require('../potatotypicalNew');
var ourObjectCreate = require('../objectCreate');

test('simple get', function(t){
    t.plan(1);

    var x = {a:1};

    t.equal(get(x, 'a'), 1);
});

test('potatotypical inheritance', function(t){
    t.plan(2);

    var potatotype = { b: 2 };

    var x = { a: 1, __potato__: potatotype};

    t.equal(get(x, 'a'), 1);
    t.equal(get(x, 'b'), 2);
});

test('our get works with our potatotypical inheritance', function(t){
    t.plan(2);

    function Dog(){}
    Dog.prototype.speed = 30;
    Dog.prototype.good = true;

    function Grayhound(){}
    Grayhound.prototype = ourObjectCreate(Dog.prototype);
    Grayhound.prototype.speed = 60;

    var ellie = ourPotatoNew(Grayhound);

    t.ok(get(ellie, 'good'));
    t.equal(get(ellie, 'speed'), 60);
});