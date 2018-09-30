const start = (async () => {
    const buf = await menneu.render(Array.from(document.querySelectorAll('script[type="text/markdown"]'), x => x.innerHTML).join(''), {}, {
        rawInput: true,
        inputFormat: 'md',
        outputFormat: 'html',
        title: 'Markdown example',
        markdownBodyStyle: 'font-family: "Yu Gothic Medium", YuGothic, meiryo, "Microsoft JhengHei", "Microsoft YaHei", "SimHei", helvetica, arial, sans-serif;',
    });
    document.write(buf.toString());
    document.close();
});