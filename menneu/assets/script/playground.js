// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const AppState = {
    AceEditor: null,
    currentIndex: 0,
    currentData: {},
    currentDataFormat: 'object',
};

const exampleCodes = [{
    name: 'Demo (Markdown)',
    mode: 'ace/mode/markdown',
    value: './examples/playground-md.md',
    inputFormat: 'md',
    dataFormat: 'object',
    data: [1, 2, 3, 4, 5, 6],
}, {
    name: 'Table and chart (Markdown)',
    mode: 'ace/mode/markdown',
    value: './examples/table-and-chart.md',
    inputFormat: 'md',
    dataFormat: 'object',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}, {
    name: 'JS Notebook (Markdown)',
    mode: 'ace/mode/markdown',
    value: './examples/notebook.md',
    inputFormat: 'md',
    dataFormat: 'object',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}, {
    name: 'Billing (LSX)',
    mode: 'ace/mode/lisp',
    value: './examples/billing.lsx',
    inputFormat: 'lsx',
    dataFormat: 'lisp',
    data:
`(#
    (me (#
        (name "Acme Inc.")
        (addr1 "999 Kiely Blvd,")
        (addr2 "")
        (city "Santa Clara,")
        (state "CA")
        (zip "99999")
    ))

    (billTo (#
        (name "Foobar Inc.")
        (addr1 "9999 N Fremont St,")
        (addr2 "")
        (city "Portland,")
        (state "OR")
        (zip "99999")
    ))

    (date "2020-01-01")
    (invoiceNo "X-1234-567890")
    (subtotal 0)
    (tax1 0)
    (tax1Name "Sales Tax")
    (tax1Rate 0.05)
    (tax2 0)
    (tax2Name "Excise Tax")
    (tax2Rate 0.03)
    (shipping 3.55)
    (total 0)
    (paid 15)
    (totalDue 0)
    (notes "note\\nnote")

    (detail ($map ($range 0 42) (-> (v index) (#
        (date "2019-12-01")
        (description ($concat "$0.10 per GB of SSD storage (" (+ v 1) ")"))
        (qty 4)
        (rate 15.33)
        (amount 0)
    ))))
)`,
}, {
    name: 'Demo (HTML)',
    mode: 'ace/mode/html',
    value: './examples/playground-html.html',
    inputFormat: 'html',
    dataFormat: 'object',
    data: [3, 5, 7, 11, 13],
}];


const escapeHtml = (s) => s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");


let lisp = null;

const start = (async (text, cf, data) => {

    const env = menneu.getAppEnv();
    const dom = env.RedAgate.createElement;

    // for Notebook
    const jsModuleDict = {};
    const jsRequire = (name) => jsModuleDict[name].exports;
    if (!lisp) {
        // TODO: bug?: When calling following code twice or more,
        //             cause the error "TypeError: Cannot read property 'map' of undefined" on liyad/s-expression.ts of
        //             "macroMap: new Map<string, SxMacroInfo>(config.macros.map(x => [x.name, x] as [string, SxMacroInfo]))".
        lisp = (() => {
            let config = null;
            env.Liyad.lisp.install((cf) => {
                config = Object.assign({}, cf);
            });
            return env.Liyad.SExpression(config);
        })();
    }

    class NotebookCodeComponent extends env.RedAgate.RedAgateComponent {
        earlyConstruct() {}
        transform() {
            return dom('p', null,
                dom('p', null,
                    this.props.module ? [
                        dom('span', { style: { display: 'inline-block', width: '4em' } }, 'Module: '),
                        dom('code', null, this.props.module), dom('br')
                    ] : null,
                    dom('span', { style: { display: 'inline-block', width: '4em' } }, 'Result: '),
                    dom('code', this.error ? { style: { backgroundColor: '#FF9999' } } : null,
                        typeof this.result === 'object' ?
                            (this.result instanceof Promise ? '(Promise)' : JSON.stringify(this.result)) :
                            String(this.result)),
                ),
                dom(env.components.Facet, { dangerouslySetInnerHTML: { __html: '\n\n```' + (this.language || '') + '\n' + this.code + '\n```\n\n' } }),
            );
        }
        defer() {
            if (this.result instanceof Promise) {
                return new Promise(resolve => {
                    this.result.then(v => {
                        this.asyncResult = v;
                        resolve();
                    }).catch(e => {
                        this.asyncResult = e;
                        this.asyncError = true;
                        resolve();
                    });
                });
            } else {
                return Promise.resolve();
            }
        }
        render(ctx, children) {
            if (this.result instanceof Promise) {
                return `${children
                    }<p>Async result: <code${
                    this.asyncError ? ' style="background-color:#FF9999;"' : ''}>${
                    env.RedAgateUtil.Escape.html(typeof this.asyncResult === 'object' ?
                        JSON.stringify(this.asyncResult) : String(this.asyncResult))}</code></p>`;
            } else {
                return children;
            }
        }
    }

    const buf = await menneu.render(text, data || {}, Object.assign({
        inputFormat: 'md',
        dataFormat: 'object',
        outputFormat: 'html',

        title: 'Markdown example',
        markdownBodyStyle: 'font-family: "Yu Gothic Medium", YuGothic, meiryo, "Microsoft JhengHei", "Microsoft YaHei", "SimHei", helvetica, arial, sans-serif;',

        globals: {
            // for Demo
            '$now': () => (new Date).toLocaleDateString('en-US'),

            // for Notebook
            '$require': jsRequire,

            // for Billing
            '$to-locale-string': (...args) => args.slice(-1)[0].toLocaleString(...(args.slice(0, -1))),

            // for debug
            '$dir': (...args) => console.dir(...args),
            'qwerty': 'asdfgh',
        },

        components: {
            Greeting: (props) => `Hello, ${props.to}! ${props.children}`,

            Notebook: env.components.Facet,

            Js: class NotebookJsComponent extends NotebookCodeComponent {
                constructor(props) {
                    super(props);

                    this.language = 'javascript';

                    let c = env.RedAgate.renderAsHtml_noDefer(
                        dom(env.components.RawHtml, {}, props.children)).trim();
                    let m = c.match(/^```(?:javascript|js)\s+([^]*)\s+```$/i);
                    if (m) {
                        c = m[1].trim();
                    }
                    const s = `(function(exports, require, module, __filename, __dirname) {${c}});`;
    
                    const jsModule = { exports: {} };
                    let f = null,
                        r = null;
    
                    try {
                        throw new Error('Execution of the content is cancelled for security reason.');
                        // f = eval(s);
                        // r = f(jsModule.exports, jsRequire, jsModule, '', '');
                    } catch (e) {
                        r = String(e);
                        this.error = true;
                    }
                    if (props.module && !jsModuleDict[props.module]) {
                        jsModuleDict[props.module] = jsModule;
                    }

                    this.code = c;
                    this.result = r;
                }
            },

            Lisp: class NotebookLispComponent extends NotebookCodeComponent {
                constructor(props) {
                    super(props);

                    this.language = 'lisp';

                    let c = env.RedAgate.renderAsHtml_noDefer(
                        dom(env.components.RawHtml, {}, props.children)).trim();
                    // TODO: Many markdown editors cannot hiliting 'lisp' syntax. You can type 'js' to hilight the lisp block.
                    let m = c.match(/^```(?:lisp|javascript|js)\s+([^]*)\s+```$/i);
                    if (m) {
                        c = m[1].trim();
                    }
    
                    const jsModule = { exports: {} };
                    let r = null;
    
                    try {
                        r = lisp.setGlobals({
                            '$require': jsRequire,
                            '$module': jsModule,
                            '$exports': jsModule.exports,
                        })(c);
                    } catch (e) {
                        r = String(e);
                        this.error = true;
                    }
                    if (props.module && !jsModuleDict[props.module]) {
                        jsModuleDict[props.module] = jsModule;
                    }

                    this.code = c;
                    this.result = r;
                }
            },
        },

        markdownCustomContainers: [{
            name: 'content',
        }, {
            name: 'spoiler',
            validate: (params) => {
                return params.trim().match(/^spoiler\s+(.*)$/);
            },
            render: (tokens, idx) => {
                const m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return '<details><summary>' + escapeHtml(m[1]) + '</summary>\n';
                } else {
                    // closing tag
                    return '</details>\n';
                }
            },
        }],
    }, cf || {}));

    return buf.toString();
});


class ExampleLoader extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    handleExampleSelected(i) {
        this.props.loadExample(i);
    }

    render() {
        return (lsx`
        (Template
            (select (@ (style (display "inline-block")
                              (width "200px") )
                       (onChange ${(e) => this.handleExampleSelected(e.target.value)}) )
                ($=for ${exampleCodes}
                    (option (@ (value $index)) ($get $data "name") )
                )
            )
        )`);
    }
}


class AceEditor extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
        this.editor = null;
    }

    componentDidMount() {
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/monokai');
        this.editor.session.setMode('ace/mode/markdown');

        AppState.AceEditor = AppState.AceEditor || {};
        AppState.AceEditor[this.props.id] = this.editor;

        this.props.loadExample(0);
    }

    render() {
        return (lsx`
        (div (@ (className
                    ($concat "AceEditorOuterWrap"
                             ${this.props.stretched ? " stretched" : ""}
                             ${this.props.collapsed ? " collapsed" : ""} )))
            (div (@ (id ${this.props.id})
                    (className "AceEditorDiv") ))
        )`);
    }
}


class DataDialog extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        dialogPolyfill.registerDialog(this.refs.dialog);
    }

    showModal(text) {
        this.refs.text.value = text;
        this.refs.dialog.showModal();
    }

    handleCancelClick(e) {
        this.refs.dialog.close();
    }

    handleOkClick(e) {
        const text = this.refs.text.value;
        let value = '';
        try {
            switch (AppState.currentDataFormat) {
            case 'lisp':
                liyad.lisp(text);
                value = text;
                break;
            case 'json':
                JSON.parse(text);
                value = text;
                break;
            case 'object':
                value = JSON.parse(text);
                break;
            }
            AppState.currentData = value;
            this.refs.dialog.close(value);
        } catch (e) {
            alert('Invalid data: ' + e)
        }
    }

    render() {
        return (lsx`
        (dialog (@ (ref "dialog") (style (backgroundColor "#333") (color "white") ) )
            (h5 "Edit data")
            (div (textarea (@ (ref "text")
                              (spellCheck "false")
                              (style (width "90vw")
                                     (height "70vh") ))))
            (div (@ (style (display "flex")
                           (justifyContent "center") ))
                (button (@ (style (textTransform "none")
                                  (margin "0 3px 0 3px"))
                           (className "waves-effect waves-light brown darken-3 btn")
                           (onClick ${(e) => this.handleCancelClick(e)}) ) "❌Cancel")
                (button (@ (style (textTransform "none")
                                  (margin "0 3px 0 3px"))
                           (className "waves-effect waves-light brown darken-3 btn")
                           (onClick ${(e) => this.handleOkClick(e)}) ) "✔️OK")
            )
        )`);
    }
}


class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
        this.state.stretched = false;
    }

    loadExample(i) {
        AppState.currentIndex = i;
        AppState.currentData = exampleCodes[i].data;
        AppState.currentDataFormat = exampleCodes[i].dataFormat;

        const editor = AppState.AceEditor['editor'];
        editor.clearSelection();
        editor.session.setMode(exampleCodes[i].mode);

        fetch(exampleCodes[i].value).then(response => {
            response.text().then(x => {
                editor.setValue(x);
                editor.clearSelection();
            })
            .catch(e => console.error(e));
        })
        .catch(e => console.error(e));
    }

    handleEditDataClick(e) {
        this.refs.dialog.showModal(
            typeof AppState.currentData === 'string' ?
                AppState.currentData :
                JSON.stringify(AppState.currentData)
        );
    }

    handleEditDataDialogClose(v) {
        console.log(v);
    }

    handleStretchedClick(e) {
        this.setState({stretched: !this.state.stretched});
    }
    
    handleShowClick(e) {
        this.setState({stretched: false});
        const editor = AppState.AceEditor['editor'];

        const d = exampleCodes[AppState.currentIndex];
        start(editor.getValue(), {
            inputFormat: d.inputFormat,
            dataFormat: AppState.currentDataFormat,
        }, AppState.currentData)
        .then(html => {
            const doc = this.refs.root.contentWindow.document;
            doc.write(html);
            doc.close();
        })
        .catch(e => console.error(e));
    }

    render() {
        return (lsx`
        (Template
            (div (@ (style (padding "4px")
                           (display "flex")
                           (alignItems "center") ))
                (ExampleLoader (@ (loadExample ${(i) => this.loadExample(i)}) ))
                (button (@ (style (textTransform "none")
                                  (margin "0 3px 0 6px"))
                           (className "waves-effect waves-light brown lighten-1 btn")
                           (onClick ${(e) => this.handleEditDataClick(e)}) ) "✏️Data")
                (button (@ (style (textTransform "none")
                                  (margin "0 3px"))
                           (className "waves-effect waves-light red lighten-1 btn")
                           (onClick ${(e) => this.handleShowClick(e)}) ) "👀View")
                (span (@ (style (flexGrow "2"))) " ")
                (button (@ (style (textTransform "none")
                                  (margin "0 3px"))
                           (className "waves-effect waves-light brown lighten-1 btn")
                           (onClick ${(e) => this.handleStretchedClick(e)}) ) "⇔")   )
            (div (@ (style (display "flex")
                           (flexWrap "wrap") ))
                (AceEditor (@ (id "editor")
                              (stretched ${this.state.stretched ? true: false})
                              (loadExample ${(i) => this.loadExample(i)}) ))
                (iframe (@ (ref "root") (sandbox "allow-same-origin")
                           (className ($concat "OutputIframe"
                                      ${this.state.stretched ? " collapsed" : ""}) )))
            )
            (DataDialog (@ (ref "dialog")))
        )`);
    }
}


window.lsx = liyad.LSX({
    jsx: React.createElement,
    jsxFlagment: React.Fragment,
    components: {
        ExampleLoader,
        AceEditor,
        DataDialog,
        App,
    },
});

ReactDOM.render(lsx`(App)`, document.getElementById('app'));
