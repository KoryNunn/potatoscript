# js-js

Implementing javascript features that often confuse people.

js-js will implement js features as well as possible, in JS

Because we can't use the identifiers used by javascript, we will use our own:

instead of __proto__ we will use __potato__

and we will call this potatotypical inheritance.

## new

`new Constructor()`:

1. creates a new, plain object. Assigns its `.__proto__` to `Constructor.prototype`
2. applies the new object, and the arguments to the `Constructor`
3. returns the result of the `apply` IF it results in an Object, otherwise returns the new object.

### Potatotypical version:
[implementation](./new.js)
[test](./test/new.js)

## prototypical get via key

`object.foo`:

1. if `object` has the key of `foo`, returns the value at `object.foo`
2. If not, and `object.__proto__.__proto__` exists, passes `object.__proto__` to step 1.
3. If there are no more `__proto__`s in the chain, returns undefined.

### Potatotypical version:
[implementation](./prototypicalGet.js)
[test](./test/prototypicalGet.js)

## instanceof

`object instanceof Constructor`:

1. Returns true if `object` has a `.__proto__` that is `Constructor.prototype`
2. If not, and `object.__proto__.__proto__` exists, passes `object.__proto__` to step 1.
3. If there are no more `__proto__`s in the chain, returns false.

### Potatotypical version:
[implementation](./instanceof.js)
[test](./test/instanceof.js)