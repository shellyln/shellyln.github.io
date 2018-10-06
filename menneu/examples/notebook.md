# JS Notebook

> Note: Execution of the JavaScript contents are cancelled for security reason on this site.





## Writing the JavaScript blocks.

### #1

%%%(Notebook """Js@{(module "foo")}
```javascript
const x = 12345;

module.exports = function() {
    return x;
}

return x;
```
""")

* You can export symbols to other blocks via `module.exports` or `exports`.
    ```javascript
    // export single item.
    module.exports = function() {}

    // export multiple items.
    exports.foo = function() {}
    exports.bar = function() {}
    ```





### #2

%%%(Notebook """Js@{(module "bar")}
```javascript
var x = new Date();
return x;
```
""")





### #3

%%%(Notebook """Js@{(module "baz")}
```javascript
const foo = require('foo');
return foo();
```
""")

* You can import something exported in the other JavaScript/Lisp blocks.





## Writing the Lisp blocks.

### #4

%%%(Notebook """Lisp@{(module "boo")}
```lisp
($concat "abc" "def")

($defun fac (n)
    ($if (== n 0)
        1
        (* n ($self (- n 1))) ) )

($defun multipy (x y)
    (* x y) )

(multipy 4 (fac 3))
```
""")





### #5

%%%(Notebook """Lisp@{(module "foobar")}
```lisp
($let foo ($require "foo"))
(foo)
```
""")

* You can import something exported in the other JavaScript/Lisp blocks.





### #6

%%%(Notebook """Lisp@{(module "fac")}
```lisp
($set ($module exports) (-> (n)
    ($if (== n 0)
        1
        (* n ($self (- n 1))) )))
```
""")

* You can export symbols to other blocks via `$module exports` or `$exports`.
    ```lisp
    ;; export single item.
    ($set ($module exports) (-> (x) x))

    ;; export multiple items.
    ($set ($exports foo) (-> (x) x))
    ($set ($exports bar) (-> (x) x))
    ```





### #7

%%%(Notebook """Js@{(module "foobaz")}
```javascript
const foo = require('fac');
return foo(3);
```
""")





## Errors

### #8

%%%(Notebook """Js@{(module "boobar")}
```javascript
constttt x = 12345;

module.exports = function() {
    return x;
}

return x;
```
""")





### #9

%%%(Notebook """Lisp@{(module "boobaz")}
```lisp
($lett x 1)
```
""")

