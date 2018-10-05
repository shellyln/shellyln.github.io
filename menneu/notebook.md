# JS Notebook



%%%(NoteBook """Js@{(module "foo")}
const x = 12345;

module.exports = function() {
    return x;
}

return x;
""")



%%%(NoteBook """Js@{(module "bar")}
var x = new Date();
return x;
""")



%%%(NoteBook """Js@{(module "baz")}
const foo = require('foo');
return foo();
""")



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



%%%(NoteBook """Lisp@{(module "fac")}
($set ($module exports) (-> (n)
    ($if (== n 0)
        1
        (* n ($self (- n 1))) )))
""")



%%%(NoteBook """Js@{(module "foobaz")}
const foo = require('fac');
return foo(3);
""")



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

