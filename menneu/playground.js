
const AppState = {};

const escapeHtml = (s) => s
.replace(/&/g, "&amp;")
.replace(/</g, "&lt;")
.replace(/>/g, "&gt;")
.replace(/"/g, "&quot;")
.replace(/'/g, "&#39;");

const start = (async (text, cf, data) => {
    const buf = await menneu.render(text, data || {}, Object.assign({
        inputFormat: 'md',
        dataFormat: 'object',
        outputFormat: 'html',

        title: 'Markdown example',
        markdownBodyStyle: 'font-family: "Yu Gothic Medium", YuGothic, meiryo, "Microsoft JhengHei", "Microsoft YaHei", "SimHei", helvetica, arial, sans-serif;',
        globals: {
            "$now": () => (new Date).toLocaleDateString('en-US'),
            "$to-locale-string": (...args) => args.slice(-1)[0].toLocaleString(...(args.slice(0, -1))),
            "$dir": (...args) => console.dir(...args),
            "qwerty": "asdfgh",
        },
        components: {
            Greeting: (props) => `Hello, ${props.to}! ${props.children}`,
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
                    (style (width "100%")
                           (height "calc(100vh - 64px - 220px - 4px)")
                           (minHeight "300px")
                           (fontSize "12pt") )))
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
        const editor = AppState.AceEditor['editor'];
        editor.setValue(document.getElementById('md').innerHTML);
        editor.clearSelection();

        fetch('./playground-md.md').then(response => {
            response.text().then(x => {
                editor.setValue(x);
            })
            .catch(e => console.error(e));
        })
        .catch(e => console.error(e));
    }

    handleStretchedClick(e) {
        this.setState({stretched: !this.state.stretched});
    }
    
    handleClick(e) {
        this.setState({stretched: false});
        const editor = AppState.AceEditor['editor'];

        start(editor.getValue())
        .then(html => {
            const doc = document.getElementById('root').contentWindow.document;
            doc.write(html);
            doc.close();
        })
        .catch(e => console.error(e));
    }

    render() {
        return (lsx`
        (Template
            (div (@ (style (padding "4px")))
                (button (@ (style (textTransform "none"))
                           (className "waves-effect waves-light brown lighten-1 btn")
                           (onClick ${(e) => this.handleStretchedClick(e)}) ) "⇔")
                " "
                (button (@ (style (textTransform "none"))
                           (className "waves-effect waves-light red lighten-1 btn")
                           (onClick ${(e) => this.handleClick(e)}) ) "Show") )
            (div (@ (style (display "flex")
                           (flexWrap "wrap") ))
                (AceEditor (@ (id "editor")
                              (stretched ${this.state.stretched ? true: false})
                              (loadExample ${(i) => this.loadExample(i)}) ))
                (iframe (@ (id "root")
                           (className ($concat "OutputIframe"
                                      ${this.state.stretched ? " collapsed" : ""}) )))
            )
        )`);
    }
}


window.lsx = liyad.LSX({
    jsx: React.createElement,
    jsxFlagment: React.Fragment,
    components: {
        AceEditor,
        App,
    },
});

ReactDOM.render(lsx`(App)`, document.getElementById('app'));
