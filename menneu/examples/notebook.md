# JS Notebook

* By downloading the zipped repository from
  [https://github.com/shellyln/menneu-md-notebook](https://github.com/shellyln/menneu-md-notebook) , you can try it locally.

> Note: Execution of the user JavaScript contents are cancelled for security reason on this site.

* Custom components `Js`, `Lisp` and `Notebook` are defined in
  [https://shellyln.github.io/menneu/assets/script/playground.js](https://shellyln.github.io/menneu/assets/script/playground.js) .
* Enclosing the code blocks by `\%\%\%(Notebook \"\"\"Js ... \"\"\")` or `\%\%\%(Notebook \"\"\"Lisp ... \"\"\")` to evaluate code and show result.





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





<p style="page-break-after: always;"></p>

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





<p style="page-break-after: always;"></p>

## Visualization

### #8

#### Factorial

%%%(Math """
n! = prod_(k=1)^n k = n xx (n - 1) xx ... xx 3 xx 2 xx 1
""")


%%%(Notebook """Lisp@{(module "data1")}
```lisp
($let fac ($require "fac"))

($let x  ($range 0 9))
($let xy ($map x  (-> (v) ($list v (fac v)))))
($let y  ($map xy (-> (v) ($get  v 1))))

($set ($exports x)  x)
($set ($exports xy) xy)
($set ($exports y)  y)
```
""")


| x                 | y                 |
|------------------:|------------------:| %%%($=for ($get ($require "data1") "xy") """
| %%%($get $data 0) | %%%($get $data 1) | """)


%%%($last ($defun get-color (i op)
    ($let p ($to-string op))
    ($let c ($list ($concat "rgba(255,  99, 132, " p ")")
                   ($concat "rgba( 54, 162, 235, " p ")")
                   ($concat "rgba(255, 206,  86, " p ")")
                   ($concat "rgba( 75, 192, 192, " p ")")
                   ($concat "rgba(153, 102, 255, " p ")")
                   ($concat "rgba(255, 159,  64, " p ")") ))
    ($get c ($mod i ($length c))) )
    nil)


%%%($local ((x ($get ($require "data1") "x"))
            (y ($get ($require "data1") "y")) )
(Chart (@ (width 800)
             (height 400)
             (unit "px")
             (asImgTag)
             (displayDataLabel)
             (settings (#
    (type "bar")
    (data (#
        (labels x)
        (datasets ($list (#
            (label "factorial")
            (data y)
            (backgroundColor ($map ($range 0 (- ($length y) 1)) (-> (i) (get-color i 0.2)) ))
            (borderColor     ($map ($range 0 (- ($length y) 1)) (-> (i) (get-color i 1.0)) ))
            (borderWidth 1)
        )))
    ))
    (options (#
        (scales (#
            (yAxes ($list (# (ticks (#
                (beginAtZero true)
            )))))
        ))
    ))
))) ) )





<p style="page-break-after: always;"></p>

## Asynchronous results

### #9

%%%(Notebook """Js@{(module "bar")}
```javascript
return new Promise(resolve => setTimeout(() => resolve('resolved'), 30));
```
""")





### #10

%%%(Notebook """Js@{(module "bar")}
```javascript
return new Promise((resolve, reject) => setTimeout(() => reject('rejected'), 30));
```
""")





<p style="page-break-after: always;"></p>

## Errors

### #11

%%%(Notebook """Js@{(module "boobar")}
```javascript
constttt x = 12345;

module.exports = function() {
    return x;
}

return x;
```
""")





### #12

%%%(Notebook """Lisp@{(module "boobaz")}
```lisp
($lett x 1)
```
""")





### To view math formula in all browsers, load [MathJax](https://www.mathjax.org/) script file.

> Note: Execution of the user JavaScript contents are cancelled for security reason on this site.

%%%(script (@ (src "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML") (crossorigin "anonymous") (async)))

