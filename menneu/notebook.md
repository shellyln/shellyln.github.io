# JS Notebook

> Note: Execution of the JavaScript contents are cancelled for security reason.

## Writing the JavaScript blocks.

### #1

%%%(NoteBook """Js@{(module "foo")}
const x = 12345;

module.exports = function() {
    return x;
}

return x;
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

%%%(NoteBook """Js@{(module "bar")}
var x = new Date();
return x;
""")



### #3

%%%(NoteBook """Js@{(module "baz")}
const foo = require('foo');
return foo();
""")

* You can import something exported in the other JavaScript/Lisp blocks.



## Writing the Lisp blocks.

### #4

%%%(NoteBook """Lisp@{(module "boo")}
($concat "abc" "def")

($defun fac (n)
    ($if (== n 0)
        1
        (* n ($self (- n 1))) ) )

($defun multipy (x y)
    (* x y) )

(multipy 4 (fac 3))
""")



### #5

%%%(NoteBook """Lisp@{(module "foobar")}
($let foo ($require "foo"))
(foo)
""")

* You can import something exported in the other JavaScript/Lisp blocks.



### #6

%%%(NoteBook """Lisp@{(module "fac")}
($set ($module exports) (-> (n)
    ($if (== n 0)
        1
        (* n ($self (- n 1))) )))
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

%%%(NoteBook """Js@{(module "foobaz")}
const foo = require('fac');
return foo(3);
""")



## Errors

### #8

%%%(NoteBook """Js@{(module "boobar")}
constttt x = 12345;

module.exports = function() {
    return x;
}

return x;
""")



### #9

%%%(NoteBook """Lisp@{(module "boobaz")}
($lett x 1)
""")

