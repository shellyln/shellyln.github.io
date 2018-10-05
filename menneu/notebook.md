# JS Notebook



## Writing the JavaScript blocks.


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



%%%(NoteBook """Js@{(module "bar")}
var x = new Date();
return x;
""")



%%%(NoteBook """Js@{(module "baz")}
const foo = require('foo');
return foo();
""")

* You can import something exported in the other JavaScript/Lisp blocks.



## Writing the Lisp blocks.

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



%%%(NoteBook """Lisp@{(module "foobar")}
($let foo ($require "foo"))
(foo)
""")

* You can import something exported in the other JavaScript/Lisp blocks.


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



%%%(NoteBook """Js@{(module "foobaz")}
const foo = require('fac');
return foo(3);
""")



## Errors

%%%(NoteBook """Js@{(module "boobar")}
constttt x = 12345;

module.exports = function() {
    return x;
}

return x;
""")



%%%(NoteBook """Lisp@{(module "boobaz")}
($lett x 1)
""")

