var test = require('tape');

var ourPotatoNew = require('../potatotypicalNew');
var ourInstanceOf = require('../instanceof');
var ourObjectCreate = require('../objectCreate');

test('our instanceof works on Object', function(t){
    t.plan(1);

    var x = ourPotatoNew(Object);

    t.ok(ourInstanceOf(x, Object));
});

test('our instanceof works with potatotypical inheritance', function(t){
    t.plan(2);

    function Dog(){}
    Dog.prototype.speed = 30;
    Dog.prototype.good = true;

    function Grayhound(){}
    Grayhound.prototype = ourObjectCreate(Dog.prototype);
    Grayhound.prototype.speed = 60;

    var ellie = ourPotatoNew(Grayhound);

    t.ok(ourInstanceOf(ellie, Dog));
    t.ok(ourInstanceOf(ellie, Grayhound));
});