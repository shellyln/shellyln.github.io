

# JS Notebook

* By downloading the zipped repository from
  [https://github.com/shellyln/menneu-md-notebook](https://github.com/shellyln/menneu-md-notebook) , you can try it locally.

> Note: Execution of the user JavaScript contents are cancelled for security reason on this site.

## TensorFlow.js Getting Started

[https://js.tensorflow.org/#getting-started](https://js.tensorflow.org/#getting-started)

### #1 Linear regression

%%%(Math """
y = ax + b
""")



%%%($last ($let visualizer-1 (-> (values)


"""Markdown
| x                 | y                 |
|------------------:|------------------:| %%%($=for values """
| %%%($get $data 0) | %%%($get $data 1) | """)


%%%($local (
        (xy ($map values (-> (r) (# (x ($get r 0)) (y ($get r 1)) ))))
        (get-color (-> (i op)
            ($let p ($to-string op))
            ($let c ($list ($concat "rgba(255,  99, 132, " p ")")
                           ($concat "rgba( 54, 162, 235, " p ")")
                           ($concat "rgba(255, 206,  86, " p ")")
                           ($concat "rgba( 75, 192, 192, " p ")")
                           ($concat "rgba(153, 102, 255, " p ")")
                           ($concat "rgba(255, 159,  64, " p ")") ))
            ($get c ($mod i ($length c))) )))
(Chart (@ (width 800)
             (height 400)
             (unit "px")
             (asImgTag)
             (settings (#
    (type "scatter")
    (data (#
        (label "values")
        (datasets ($list (#
            (label "points")
            (data xy)
            (backgroundColor (get-color 0 0.2))
            (borderColor     (get-color 0 1.0))
            (borderWidth 1)
        )))
    ))
))) )) """)) nil)



%%%(Notebook """Js@{(module "Tfjs01") (visualizer visualizer-1)}
```javascript

// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({
    units: 1,         // dimensionality of the output space.
    inputShape: [1],  // dimension of the input.
}));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

const trainX = [1, 2, 3, 4];
const trainY = [1, 3, 5, 7];

// Generate some synthetic data for training.
const xs = tf.tensor2d(trainX, [trainX.length, 1]);    // Create a r4xc1 [[1],[2],[3],[4]] 2d tensor.
const ys = tf.tensor2d(trainY, [trainY.length, 1]);    // Create a r4xc1 [[1],[3],[5],[7]] 2d tensor.

// Train the model using the data.
//   train 'epochs' times...
return model.fit(xs, ys, {epochs: 10}).then(() => {
    // End training !
    // Use the model to do inference on a data point the model hasn't seen before.
    const inputX = [5, 6, 7, 8];
    return (
        model.predict(                                 // Generates output predictions for the input samples.
            tf.tensor2d(inputX, [inputX.length, 1])    // Create a r4c1 [[5],[6],[7],[8]] 2d tensor.
        ).data().then(a => {
            // a is an object with string keys "0", "1", ....
            const t = trainX.map((v, i) => [v, trainY[i]]);
            const r = [];
            for (let i in a) {
                if (a.hasOwnProperty(i)) {
                    r[Number(i)] = [inputX[Number(i)], a[i]];
                }
            }
            return t.concat(r);
        })
    );
});

```
""")





### To view math formula in all browsers, load [MathJax](https://www.mathjax.org/) script file.

%%%(script (@ (src "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML") (crossorigin "anonymous") (async)))





### To execute the above code, you need to load the following js file.

https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.13.0
