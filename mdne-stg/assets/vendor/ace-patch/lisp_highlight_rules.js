

ace.define("ace/mode/lisp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

    var LispHighlightRules = function() {
        var keywordControl = "$let|$local|$global|$capture|$if|$if-null|$cond|$while|$do-while|$until|$do-until|$for|$repeat|$try|$raise|$=if|$=for";
        var keywordOperator = "$eq|$ne|$neq|$and|$or";
        var constantLanguage = "null|nil|$data";
        var supportFunctions = "$cons|$car|$cdr|$self|$setq|$setf|$set|$get|$quote|$eval|$list|$concat|$length|$range|$map|$last|$first";

        var keywordMapper = this.createKeywordMapper({
            "keyword.control": keywordControl,
            "keyword.operator": keywordOperator,
            "constant.language": constantLanguage,
            "support.function": supportFunctions
        }, "identifier", true);

        this.$rules = {
            start: [
                {
                    token: "comment",
                    regex: ";.*$"
                }, {
                    token: "comment.start",
                    regex: "#\\|",
                    next: "qqcomment"
                }, {
                    token: ["storage.type.function-type.lisp", "text", "entity.name.function.lisp"],
                    regex: "(?:(?:(\\$defun|\\$\\$defun|\\$lambda|\\$\\$lambda|\\$closure|\\$\\$closure|\\$defmethod|\\$defmacro))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)"
                }, {
                    token: ["punctuation.definition.constant.character.lisp", "constant.character.lisp"],
                    regex: "(#)((?:\\w|[\\\\+-=<>'\"&#\\$])+)"
                }, {
                    token: ["punctuation.definition.variable.lisp", "variable.other.global.lisp", "punctuation.definition.variable.lisp"],
                    regex: "(\\*)(\\S*)(\\*)"
                }, {
                    token: "constant.numeric",
                    regex: "0[xX][0-9a-fA-F]+(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
                }, {
                    token: "constant.numeric",
                    regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
                }, {
                    token: "keyword.operator",
                    regex: "===|==|!==|!=|<=|>=|[<>*/%@#+]|-"
                }, {
                    token: keywordMapper,
                    regex: "[a-zA-Z_\\$\\-\\=\\<\\>\\!][a-zA-Z0-9_\\$\\-\\=\\<\\>\\!]*\\b"
                }, {
                    token: "string",
                    regex: '"""(?=.)',
                    next: "qqheredoc"
                }, {
                    token: "string",
                    regex: '"(?=.)',
                    next: "qqstring"
                }
            ],
            qqstring: [
                {
                    token: "constant.character.escape.lisp",
                    regex: "\\\\."
                }, {
                    token: "string",
                    regex: '[^"\\\\]+'
                // }, {
                //     token: "string",
                //     regex: "\\\\$",
                //     next: "qqstring"
                }, {
                    token: "string",
                    regex: '"|$',
                    next: "start"
                }
            ],
            qqheredoc: [
                {
                    token: "constant.character.escape.lisp",
                    regex: "\\\\."
                }, {
                    token: "string",
                    regex: '[^"\\\\]+'
                // }, {
                //     token: "string",
                //     regex: "\\\\$",
                //     next: "qqheredoc"
                }, {
                    token: "string",
                    regex: '"""',
                    next: "start"
                }
            ],
            qqcomment: [
                {
                    token: "comment.end",
                    regex: '\\|#',
                    next: "start"
                }, {
                    defaultToken : "comment"
                }
            ]
        };
    };

    oop.inherits(LispHighlightRules, TextHighlightRules);

    exports.LispHighlightRules = LispHighlightRules;
});


ace.define("ace/mode/lisp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/lisp_highlight_rules"], function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var LispHighlightRules = require("./lisp_highlight_rules").LispHighlightRules;

    var Mode = function() {
        this.HighlightRules = LispHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);

    (function() {
        
        this.lineCommentStart = ";";
        
        this.$id = "ace/mode/lisp";
    }).call(Mode.prototype);

    exports.Mode = Mode;
});


(function() {
    ace.require(["ace/mode/lisp"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();