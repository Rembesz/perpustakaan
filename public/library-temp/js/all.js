/******************************************
    Version: 1.0
/****************************************** */

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) { return new n.fn.init(a, b) },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) { return b.toUpperCase() };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() { return e.call(this) },
        get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this) },
        pushStack: function(a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b },
        each: function(a) { return n.each(this, a) },
        map: function(a) { return this.pushStack(n.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(e.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === n.type(a) },
        isArray: Array.isArray || function(a) { return "array" === n.type(a) },
        isWindow: function(a) { return null != a && a == a.window },
        isNumeric: function(a) { var b = a && a.toString(); return !n.isArray(a) && b - parseFloat(b) + 1 >= 0 },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try { if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a },
        globalEval: function(b) { b && n.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) },
        camelCase: function(a) { return a.replace(p, "ms-").replace(q, r) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(o, "") },
        makeArray: function(a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) { var c, d, f; return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() { return a.apply(b || this, c.concat(e.call(arguments))) }, d.guid = a.guid = a.guid || n.guid++, d) : void 0 },
        now: function() { return +new Date },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { i["[object " + b + "]"] = b.toLowerCase() });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            da = function() { m() };
        try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (ea) {
            H = {
                apply: E.length ? function(a, b) { G.apply(a, I.call(b)) } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) { if (9 === x) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try { return H.apply(d, w.querySelectorAll(s)), d } catch (y) {} finally { k === u && b.removeAttribute("id") }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b
        }

        function ha(a) { return a[u] = !0, a }

        function ia(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = fa.support = {}, f = fa.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ia(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) { return fa(a, null, null, b) }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(ba, ca).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                ATTR: function(a, b, c) { return function(d) { var e = fa.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) { return e(a, 0, c) }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() }
                }),
                has: ha(function(a) { return function(b) { return fa(a, b).length > 0 } }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === o },
                focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: function(a) { return a.disabled === !1 },
                disabled: function(a) { return a.disabled === !0 },
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !d.pseudos.empty(a) },
                header: function(a) { return Y.test(a.nodeName) },
                input: function(a) { return X.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: na(function() { return [0] }),
                last: na(function(a, b) { return [b - 1] }),
                eq: na(function(a, b, c) { return [0 > c ? c + b : c] }),
                even: na(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }),
                odd: na(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }),
                lt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) { c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2]; if (i[d] = k, k[2] = a(b, c, g)) return !0 }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) { for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c); return c }

        function ua(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = ua(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) { return a === b }, h, !0), l = ra(function(a) { return J(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e; break } }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ia(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ja("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ia(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ja("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ia(function(a) { return null == a.getAttribute("disabled") }) || ja(K, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
        if (b.nodeType) return n.grep(a, function(a) { return a === b !== c });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) { return n.inArray(a, b) > -1 !== c })
    }
    n.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) { return 1 === a.nodeType })) }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) { return this.pushStack(z(this, a || [], !1)) },
        not: function(a) { return this.pushStack(z(this, a || [], !0)) },
        is: function(a) { return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    });

    function F(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a }
    n.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return u(a, "parentNode") }, parentsUntil: function(a, b, c) { return u(a, "parentNode", c) }, next: function(a) { return F(a, "nextSibling") }, prev: function(a) { return F(a, "previousSibling") }, nextAll: function(a) { return u(a, "nextSibling") }, prevAll: function(a) { return u(a, "previousSibling") }, nextUntil: function(a, b, c) { return u(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return u(a, "previousSibling", c) }, siblings: function(a) { return v((a.parentNode || {}).firstChild, a) }, children: function(a) { return v(a.firstChild) }, contents: function(a) { return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes) } }, function(a, b) { n.fn[a] = function(c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e) } });
    var G = /\S+/g;

    function H(a) { var b = {}; return n.each(a.match(G) || [], function(a, c) { b[c] = !0 }), b }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { n.each(b, function(b, c) { n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return n.each(arguments, function(a, b) { var c; while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h-- }), this }, has: function(a) { return a ? n.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = !0, c || j.disable(), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() { return c },
                    always: function() { return e.done(arguments).fail(arguments), this },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) { return null != a ? n.extend(a, d) : d }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) { return function(d) { b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) { return n.ready.promise().done(a), this }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? n.readyWait++ : n.ready(!0) },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() { d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K)) }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try { c = null == a.frameElement && d.documentElement } catch (e) {}
            c && c.doScroll && ! function f() {
                if (!n.isReady) {
                    try { c.doScroll("left") } catch (b) { return a.setTimeout(f, 50) }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try { delete a.test } catch (b) { l.deleteExpando = !1 }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c } catch (e) {}
                n.data(a, b, c)
            } else c = void 0;
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !Q(d) : !n.isEmptyObject(d)) return }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0) }
        }
    }
    n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) { return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a) }, data: function(a, b, c) { return R(a, b, c) }, removeData: function(a, b) { return S(a, b) }, _data: function(a, b, c) { return R(a, b, c, !0) }, _removeData: function(a, b) { return S(a, b, !0) } }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() { n.data(this, a) }) : arguments.length > 1 ? this.each(function() { n.data(this, a, b) }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) { return this.each(function() { n.removeData(this, a) }) }
        }), n.extend({
            queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() { n.dequeue(a, b) };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) { var c = b + "queueHooks"; return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function() { n._removeData(a, b + "queue"), n._removeData(a, c) }) }) }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) { return this.each(function() { n.dequeue(this, a) }) },
            clearQueue: function(a) { return this.queue(a || "fx", []) },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {--d || e.resolveWith(f, [f]) };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return n.css(a, b, "") },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) { e = !0; for (h in c) Y(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(n(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) { for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval")) }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) { Z.test(a.type) && (a.defaultChecked = a.checked) }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) { g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length; while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k) }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) { f = 0; while (g = i[f++]) _.test(g.type || "") && c.push(g) }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() { return !0 }

    function qa() { return !1 }

    function ra() { try { return d.activeElement } catch (a) {} }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) sa(a, h, c, d, b[h], f); return a }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) { return n().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() { n.event.add(this, b, e, d, c) })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) { return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try { e[q]() } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d })
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== ra() && this.focus) try { return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === ra() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, { type: a, isSimulated: !0 });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) { a._submitBubble = !0 }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) { a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a)) },
        teardown: function() { return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit") }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._justChanged = !0) }), n.event.add(this, "click._change", function(a) { this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a) })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a) }), n._data(b, "change", !0))
            })
        },
        handle: function(a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 },
        teardown: function() { return n.event.remove(this, "._change"), !ka.test(this.nodeName) }
    }), l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { n.event.simulate(b, a.target, n.event.fix(a)) };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({ on: function(a, b, c, d) { return sa(this, a, b, c, d) }, one: function(a, b, c, d) { return sa(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() { n.event.remove(this, a, c, b) }) }, trigger: function(a, b) { return this.each(function() { n.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function Da(a) { return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a }

    function Ea(a) { var b = ya.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) { for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d)); return a }
    n.extend({
        htmlPrefilter: function(a) { return a.replace(va, "<$1></$2>") },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) { return Ia(this, a, !0) },
        remove: function(a) { return Ia(this, a) },
        text: function(a) { return Y(this, function(a) { return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a)) }, null, a, arguments.length) },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return Ha(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return Ha(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return n.clone(this, a, b) }) },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { n.fn[a] = function(a) { for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get()); return this.pushStack(e) } });
    var Ja, Ka = { HTML: "block", BODY: "block" };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, { reliableHiddenOffsets: function() { return null == b && k(), f }, boxSizingReliable: function() { return null == b && k(), e }, pixelMarginRight: function() { return null == b && k(), c }, pixelPosition: function() { return null == b && k(), b }, reliableMarginRight: function() { return null == b && k(), g }, reliableMarginLeft: function() { return null == b && k(), h } });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || { width: "4px" }).width, j.style.marginRight = "50%", c = "4px" === (l || { marginRight: "4px" }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }, Sa = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "" }) : Qa.currentStyle && (Ra = function(a) { return a.currentStyle }, Sa = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" });

    function Ua(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = { position: "absolute", visibility: "hidden", display: "block" },
        $a = { letterSpacing: "0", fontWeight: "400" },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

    function db(a, b, c) { var d = Ya.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function eb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e))); return g }

    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Sa(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {}
            }
        },
        css: function(a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f }
    }), n.each(["height", "width"], function(a, b) { n.cssHooks[b] = { get: function(a, c, d) { return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() { return fb(a, b, d) }) : fb(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && Ra(a); return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0) } } }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) { return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) { return b ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"]) : void 0 }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() { return a.getBoundingClientRect().left }) : 0)) + "px" : void 0
    }), n.each({ margin: "", padding: "", border: "Width" }, function(a, b) { n.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Na.test(a) || (n.cssHooks[a + b].set = db) }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) { for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d); return f }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() { return cb(this, !0) },
        hide: function() { return cb(this) },
        toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { W(this) ? n(this).show() : n(this).hide() }) }
    });

    function gb(a, b, c, d, e) { return new gb.prototype.init(a, b, c, d, e) }
    n.Tween = gb, gb.prototype = { constructor: gb, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function() { var a = gb.propHooks[this.prop]; return a && a.get ? a.get(this) : gb.propHooks._default.get(this) }, run: function(a) { var b, c = gb.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this } }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit) } } }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() { return a.setTimeout(function() { hb = void 0 }), hb = n.now() }

    function mb(a, b) {
        var c, d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, m.always(function() { m.always(function() { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() { n(a).hide() }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return X(c.elem, a, U.exec(b), c), c }] }, tweener: function(a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b) }, prefilters: [ob], prefilter: function(a, b) { b ? qb.prefilters.unshift(a) : qb.prefilters.push(a) } }), n.speed = function(a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(W).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e) }
        }), n.each({ slideDown: mb("show"), slideUp: mb("hide"), slideToggle: mb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { n.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function() { ib || (ib = a.setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function() { a.clearInterval(ib), ib = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: { get: function(a) { var b = n.find.attr(a, "value"); return null != b ? b : n.trim(n.text(a)).replace(sb, " ") } },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() { n.valHooks[this] = { set: function(a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0 } }, l.checkOn || (n.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({ attr: function(a, b) { return Y(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { n.removeAttr(this, a) }) } }), n.extend({
        attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) },
        attrHooks: { type: { set: function(a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = { set: function(a, b, c) { return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) { var e, f; return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e } : vb[b] = function(a, b, c) { return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null }
    }), yb && xb || (n.attrHooks.value = { set: function(a, b, c) { return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c) } }), xb || (tb = { set: function(a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, vb.id = vb.name = vb.coords = function(a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, n.valHooks.button = { get: function(a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: tb.set }, n.attrHooks.contenteditable = { set: function(a, b, c) { tb.set(a, "" === b ? !1 : b, c) } }, n.each(["width", "height"], function(a, b) { n.attrHooks[b] = { set: function(a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), l.style || (n.attrHooks.style = { get: function(a) { return a.style.cssText || void 0 }, set: function(a, b) { return a.style.cssText = b + "" } });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({ prop: function(a, b) { return Y(this, n.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return a = n.propFix[a] || a, this.each(function() { try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), n.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.hrefNormalized || n.each(["href", "src"], function(a, b) { n.propHooks[b] = { get: function(a) { return a.getAttribute(b, 4) } } }), l.optSelected || (n.propHooks.selected = {
        get: function(a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { n.propFix[this.toLowerCase()] = this }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) { return n.attr(a, "class") || "" }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) { n(this).addClass(a.call(this, b, Cb(this))) });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) { n(this).removeClass(a.call(this, b, Cb(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) { n(this).toggleClass(a.call(this, c, Cb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = n(this), f = a.match(G) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || "")) }) },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { n.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && n.extend(!0, a, c), a }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) { i.unshift(g); break }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Rb, type: "GET", isLocal: Kb.test(Sb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Qb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a) },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) { k = {}; while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2] }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() { return 2 === u ? g : null },
                    setRequestHeader: function(a, b) { var c = a.toLowerCase(); return u || (a = t[c] = t[c] || a, s[a] = b), this },
                    overrideMimeType: function(a) { return u || (l.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) { var b = a || v; return j && j.abort(b), y(0, b), this }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() { w.abort("timeout") }, l.timeout));
                try { u = 1, j.send(s, y) } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) { return n.get(a, b, c, "json") },
        getScript: function(a, b) { return n.get(a, void 0, b, "script") }
    }), n.each(["get", "post"], function(a, b) { n[b] = function(a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a)) } }), n._evalUrl = function(a) { return n.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) { n(this).wrapAll(a.call(this, b)) });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) { n(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = n.isFunction(a); return this.each(function(c) { n(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function() { return this.parent().each(function() { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() }
    });

    function Yb(a) { return a.style && a.style.display || n.css(a, "display") }

    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) { return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a) }, n.expr.filters.visible = function(a) { return !n.expr.filters.hidden(a) };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) { c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({ serialize: function() { return n.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a)) }).map(function(a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function(a) { return { name: b.name, value: a.replace(ac, "\r\n") } }) : { name: b.name, value: c.replace(ac, "\r\n") } }).get() } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() { return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic() } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() { for (var a in fc) fc[a](void 0, !0) }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try { i = g.statusText } catch (k) { i = "" }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() { c && c(void 0, !0) }
            }
        }
    });

    function hc() { try { return new a.XMLHttpRequest } catch (b) {} }

    function ic() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }
    n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() { b && b.onload(void 0, !0) }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = jc.pop() || n.expando + "_" + Eb++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { n.fn[b] = function(a) { return this.on(b, a) } }), n.expr.filters.animated = function(a) { return n.grep(n.timers, function(b) { return a === b.elem }).length };

    function mc(a) { return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) { n.offset.setOffset(this, a, b) });
            var b, c, d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = { top: 0, left: 0 },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent; return a || Qa }) }
    }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) { return Y(this, function(a, d, e) { var f = mc(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) }
    }), n.each(["top", "left"], function(a, b) { n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) { return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), n.fn.size = function() { return this.length }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return n });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) { return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n }, b || (a.jQuery = a.$ = n), n
});


/*!
 * Bootstrap v4.1.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper) }(this, function(t, e, c) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function o(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }

    function h(r) {
        for (var t = 1; t < arguments.length; t++) {
            var s = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(s);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function(t) { return Object.getOwnPropertyDescriptor(s, t).enumerable }))), e.forEach(function(t) {
                var e, n, i;
                e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i
            })
        }
        return r
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c;
    var r, n, s, a, l, u, f, d, _, g, m, p, v, E, y, T, C, I, A, D, b, S, w, N, O, k, P, L, j, R, H, W, M, x, U, K, F, V, Q, B, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, st, ot, at, lt, ht, ct, ut, ft, dt, _t, gt, mt, pt, vt, Et, yt, Tt, Ct, It, At, Dt, bt, St, wt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, Mt, xt, Ut, Kt, Ft, Vt, Qt, Bt, Yt, Gt, qt, zt, Xt, Jt, Zt, $t, te, ee, ne, ie, re, se, oe, ae, le, he, ce, ue, fe, de, _e, ge, me, pe, ve, Ee, ye, Te, Ce, Ie, Ae, De, be, Se, we, Ne, Oe, ke, Pe, Le, je, Re, He, We, Me, xe, Ue, Ke, Fe, Ve, Qe, Be, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, sn, on, an, ln, hn, cn, un, fn, dn, _n, gn, mn, pn, vn, En, yn, Tn, Cn = function(i) {
            var e = "transitionend";

            function t(t) {
                var e = this,
                    n = !1;
                return i(this).one(l.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || l.triggerTransitionEnd(e) }, t), this
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || "");
                    try { return 0 < i(document).find(e).length ? e : null } catch (t) { return null }
                },
                getTransitionDurationFromElement: function(t) { if (!t) return 0; var e = i(t).css("transition-duration"); return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0 },
                reflow: function(t) { return t.offsetHeight },
                triggerTransitionEnd: function(t) { i(t).trigger(e) },
                supportsTransitionEnd: function() { return Boolean(e) },
                isElement: function(t) { return (t[0] || t).nodeType },
                typeCheckConfig: function(t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                s = e[i],
                                o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
                        }
                    var a
                }
            };
            return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function(t) { if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }, l
        }(e),
        In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", _ = "show", g = function() {
            function i(t) { this._element = t }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() { r.removeData(this._element, s), this._element = null }, t._getRootElement = function(t) {
                var e = Cn.getSelectorFromElement(t),
                    n = !1;
                return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n
            }, t._triggerCloseEvent = function(t) { var e = r.Event(u.CLOSE); return r(t).trigger(e), e }, t._removeElement = function(e) {
                var n = this;
                if (r(e).removeClass(_), r(e).hasClass(d)) {
                    var t = Cn.getTransitionDurationFromElement(e);
                    r(e).one(Cn.TRANSITION_END, function(t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) { r(t).detach().trigger(u.CLOSED).remove() }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = r(this),
                        e = t.data(s);
                    e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function(e) { return function(t) { t && t.preventDefault(), e.close(this) } }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }]), i
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function() { return r.fn[n] = l, g._jQueryInterface }, g),
        An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + E + y, FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y }, k = function() {
            function n(t) { this._element = t }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = m(this._element).closest(b)[0];
                if (n) {
                    var i = m(this._element).find(S)[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && m(this._element).hasClass(C)) t = !1;
                            else {
                                var r = m(n).find(w)[0];
                                r && m(r).removeClass(C)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !m(this._element).hasClass(C), m(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C)
            }, t.dispose = function() { m.removeData(this._element, v), this._element = null }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = m(this).data(v);
                    t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]()
                })
            }, o(n, null, [{ key: "VERSION", get: function() { return "4.1.1" } }]), n
        }(), m(document).on(O.CLICK_DATA_API, D, function(t) {
            t.preventDefault();
            var e = t.target;
            m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, D, function(t) {
            var e = m(t.target).closest(N)[0];
            m(e).toggleClass(A, /^focus(in)?$/.test(t.type))
        }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function() { return m.fn[p] = T, k._jQueryInterface }, k),
        Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, x = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, U = "next", K = "prev", F = "left", V = "right", Q = { SLIDE: "slide" + R, SLID: "slid" + R, KEYDOWN: "keydown" + R, MOUSEENTER: "mouseenter" + R, MOUSELEAVE: "mouseleave" + R, TOUCHEND: "touchend" + R, LOAD_DATA_API: "load" + R + H, CLICK_DATA_API: "click" + R + H }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, $ = function() {
            function s(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners() }
            var t = s.prototype;
            return t.next = function() { this._isSliding || this._slide(U) }, t.nextWhenVisible = function() {!document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next() }, t.prev = function() { this._isSliding || this._slide(K) }, t.pause = function(t) { t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function(t) {
                var e = this;
                this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) P(this._element).one(Q.SLID, function() { return e.to(t) });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? U : K;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() { P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function(t) { return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t) { return e.pause(t) }).on(Q.MOUSELEAVE, function(t) { return e.cycle(t) }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function() { e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) { return e.cycle(t) }, 500 + e._config.interval) }))
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) { return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t) }, t._getItemByDirection = function(t, e) {
                var n = t === U,
                    i = t === K,
                    r = this._getItemIndex(e),
                    s = this._items.length - 1;
                if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
                var o = (r + (t === K ? -1 : 1)) % this._items.length;
                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
                    r = P.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
                return P(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
                    var e = this._indicatorsElement.children[this._getItemIndex(t)];
                    e && P(e).addClass(Y)
                }
            }, t._slide = function(t, e) {
                var n, i, r, s = this,
                    o = P(this._element).find(Z.ACTIVE_ITEM)[0],
                    a = this._getItemIndex(o),
                    l = e || o && this._getItemByDirection(t, o),
                    h = this._getItemIndex(l),
                    c = Boolean(this._interval);
                if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                    this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                    var u = P.Event(Q.SLID, { relatedTarget: l, direction: r, from: a, to: h });
                    if (P(this._element).hasClass(G)) {
                        P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
                        var f = Cn.getTransitionDurationFromElement(o);
                        P(o).one(Cn.TRANSITION_END, function() { P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function() { return P(s._element).trigger(u) }, 0) }).emulateTransitionEnd(f)
                    } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);
                    c && this.cycle()
                }
            }, s._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = P(this).data(j),
                        e = h({}, M, P(this).data());
                    "object" == typeof i && (e = h({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && (t.pause(), t.cycle())
                })
            }, s._dataApiClickHandler = function(t) {
                var e = Cn.getSelectorFromElement(this);
                if (e) {
                    var n = P(e)[0];
                    if (n && P(n).hasClass(B)) {
                        var i = h({}, P(n).data(), P(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault()
                    }
                }
            }, o(s, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return M } }]), s
        }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function() {
            P(Z.DATA_RIDE).each(function() {
                var t = P(this);
                $._jQueryInterface.call(t, t.data())
            })
        }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function() { return P.fn[L] = W, $._jQueryInterface }, $),
        bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = { toggle: !0, parent: "" }, ot = { toggle: "boolean", parent: "(string|element)" }, at = { SHOW: "show" + it, SHOWN: "shown" + it, HIDE: "hide" + it, HIDDEN: "hidden" + it, CLICK_DATA_API: "click" + it + ".data-api" }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }, gt = function() {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
                    var r = n[i],
                        s = Cn.getSelectorFromElement(r);
                    null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() { tt(this._element).hasClass(lt) ? this.hide() : this.show() }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
                    var i = tt.Event(at.SHOW);
                    if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));
                        var r = this._getDimension();
                        tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            o = Cn.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(Cn.TRANSITION_END, function() { tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN) }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
                    var e = tt.Event(at.HIDE);
                    if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length)
                            for (var i = 0; i < this._triggerArray.length; i++) {
                                var r = this._triggerArray[i],
                                    s = Cn.getSelectorFromElement(r);
                                if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var o = Cn.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(Cn.TRANSITION_END, function() { t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN) }).emulateTransitionEnd(o)
                    }
                }
            }, t.setTransitioning = function(t) { this._isTransitioning = t }, t.dispose = function() { tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function(t) { return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t }, t._getDimension = function() { return tt(this._element).hasClass(ft) ? ft : dt }, t._getParent = function() {
                var n = this,
                    t = null;
                Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return tt(t).find(e).each(function(t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var n = tt(t).hasClass(lt);
                    0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function(t) { var e = Cn.getSelectorFromElement(t); return e ? tt(e)[0] : null }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = tt(this),
                        e = t.data(nt),
                        n = h({}, st, t.data(), "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, o(a, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return st } }]), a
        }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = tt(this),
                e = Cn.getSelectorFromElement(this);
            tt(e).each(function() {
                var t = tt(this),
                    e = t.data(nt) ? "toggle" : n.data();
                gt._jQueryInterface.call(t, e)
            })
        }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function() { return tt.fn[et] = rt, gt._jQueryInterface }, gt),
        Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = { HIDE: "hide" + Et, HIDDEN: "hidden" + Et, SHOW: "show" + Et, SHOWN: "shown" + Et, CLICK: "click" + Et, CLICK_DATA_API: "click" + Et + yt, KEYDOWN_DATA_API: "keydown" + Et + yt, KEYUP_DATA_API: "keyup" + Et + yt }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Vt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Qt = function() {
            function l(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
            var t = l.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !mt(this._element).hasClass(At)) {
                    var t = l._getParentFromElement(this._element),
                        e = mt(this._menu).hasClass(Dt);
                    if (l._clearMenus(), !e) {
                        var n = { relatedTarget: this._element },
                            i = mt.Event(It.SHOW, n);
                        if (mt(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var r = this._element; "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n)) }
                    }
                }
            }, t.dispose = function() { mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function() {
                var e = this;
                mt(this._element).on(It.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() })
            }, t._getConfig = function(t) { return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = l._getParentFromElement(this._element);
                    this._menu = mt(t).find(Lt)[0]
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = mt(this._element).parent(),
                    e = Mt;
                return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e
            }, t._detectNavbar = function() { return 0 < mt(this._element).closest(".navbar").length }, t._getPopperConfig = function() {
                var e = this,
                    t = {};
                "function" == typeof this._config.offset ? t.fn = function(t) { return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t } : t.offset = this._config.offset;
                var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n
            }, l._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = mt(this).data(vt);
                    if (t || (t = new l(this, "object" == typeof e ? e : null), mt(this).data(vt, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, l._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
                        var i = l._getParentFromElement(e[n]),
                            r = mt(e[n]).data(vt),
                            s = { relatedTarget: e[n] };
                        if (r) {
                            var o = r._menu;
                            if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
                                var a = mt.Event(It.HIDE, s);
                                mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)))
                            }
                        }
                    }
            }, l._getParentFromElement = function(t) { var e, n = Cn.getSelectorFromElement(t); return n && (e = mt(n)[0]), e || t.parentNode }, l._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
                    var e = l._getParentFromElement(this),
                        n = mt(e).hasClass(Dt);
                    if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = mt(e).find(Rt).get();
                        if (0 !== i.length) {
                            var r = i.indexOf(t.target);
                            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var s = mt(e).find(kt)[0];
                            mt(s).trigger("focus")
                        }
                        mt(this).trigger("click")
                    }
                }
            }, o(l, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return Ft } }, { key: "DefaultType", get: function() { return Vt } }]), l
        }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function(t) { t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle") }).on(It.CLICK_DATA_API, Pt, function(t) { t.stopPropagation() }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function() { return mt.fn[pt] = Tt, Qt._jQueryInterface }, Qt),
        wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Jt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Zt = { HIDE: "hide" + qt, HIDDEN: "hidden" + qt, SHOW: "show" + qt, SHOWN: "shown" + qt, FOCUSIN: "focusin" + qt, RESIZE: "resize" + qt, CLICK_DISMISS: "click.dismiss" + qt, KEYDOWN_DISMISS: "keydown.dismiss" + qt, MOUSEUP_DISMISS: "mouseup.dismiss" + qt, MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt, CLICK_DATA_API: "click" + qt + ".data-api" }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" }, se = function() {
            function r(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0 }
            var t = r.prototype;
            return t.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function(t) {
                var e = this;
                if (!this._isTransitioning && !this._isShown) {
                    Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
                    var n = Bt.Event(Zt.SHOW, { relatedTarget: t });
                    Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function(t) { return e.hide(t) }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function() { Bt(e._element).one(Zt.MOUSEUP_DISMISS, function(t) { Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return e._showElement(t) }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = Bt.Event(Zt.HIDE);
                    if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = Bt(this._element).hasClass(ne);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
                            var r = Cn.getTransitionDurationFromElement(this._element);
                            Bt(this._element).one(Cn.TRANSITION_END, function(t) { return e._hideModal(t) }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() { Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, t.handleUpdate = function() { this._adjustDialog() }, t._getConfig = function(t) { return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t }, t._showElement = function(t) {
                var e = this,
                    n = Bt(this._element).hasClass(ne);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus();
                var i = Bt.Event(Zt.SHOWN, { relatedTarget: t }),
                    r = function() { e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i) };
                if (n) {
                    var s = Cn.getTransitionDurationFromElement(this._element);
                    Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                } else r()
            }, t._enforceFocus = function() {
                var e = this;
                Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function(t) { document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus() })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? Bt(window).on(Zt.RESIZE, function(t) { return e.handleUpdate(t) }) : Bt(window).off(Zt.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() { Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN) })
            }, t._removeBackdrop = function() { this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function(t) {
                var e = this,
                    n = Bt(this._element).hasClass(ne) ? ne : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;
                    if (!n) return void t();
                    var i = Cn.getTransitionDurationFromElement(this._backdrop);
                    Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    Bt(this._backdrop).removeClass(ie);
                    var r = function() { e._removeBackdrop(), t && t() };
                    if (Bt(this._element).hasClass(ne)) {
                        var s = Cn.getTransitionDurationFromElement(this._backdrop);
                        Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else t && t()
            }, t._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var r = this;
                if (this._isBodyOverflowing) {
                    Bt(re.FIXED_CONTENT).each(function(t, e) {
                        var n = Bt(e)[0].style.paddingRight,
                            i = Bt(e).css("padding-right");
                        Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), Bt(re.STICKY_CONTENT).each(function(t, e) {
                        var n = Bt(e)[0].style.marginRight,
                            i = Bt(e).css("margin-right");
                        Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    }), Bt(re.NAVBAR_TOGGLER).each(function(t, e) {
                        var n = Bt(e)[0].style.marginRight,
                            i = Bt(e).css("margin-right");
                        Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
                    });
                    var t = document.body.style.paddingRight,
                        e = Bt(document.body).css("padding-right");
                    Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function() { Bt(re.FIXED_CONTENT).each(function(t, e) { var n = Bt(e).data("padding-right"); "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right") }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function(t, e) { var n = Bt(e).data("margin-right"); "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right") }); var t = Bt(document.body).data("padding-right"); "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right") }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = $t, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, r._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = Bt(this).data(Gt),
                        e = h({}, Xt, Bt(this).data(), "object" == typeof n && n ? n : {});
                    if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, o(r, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return Xt } }]), r
        }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function(t) {
            var e, n = this,
                i = Cn.getSelectorFromElement(this);
            i && (e = Bt(i)[0]);
            var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var s = Bt(e).one(Zt.SHOW, function(t) { t.isDefaultPrevented() || s.one(Zt.HIDDEN, function() { Bt(n).is(":visible") && n.focus() }) });
            se._jQueryInterface.call(Bt(e), r, this)
        }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function() { return Bt.fn[Yt] = zt, se._jQueryInterface }, se),
        Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(_e = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(de = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, pe = "out", ve = { HIDE: "hide" + he, HIDDEN: "hidden" + he, SHOW: (me = "show") + he, SHOWN: "shown" + he, INSERTED: "inserted" + he, CLICK: "click" + he, FOCUSIN: "focusin" + he, FOCUSOUT: "focusout" + he, MOUSEENTER: "mouseenter" + he, MOUSELEAVE: "mouseleave" + he }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function() {
            function i(t, e) {
                if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() { this._isEnabled = !0 }, t.disable = function() { this._isEnabled = !1 }, t.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = oe(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() { clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function() {
                var e = this;
                if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = oe.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    oe(this.element).trigger(t);
                    var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(),
                        r = Cn.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        o = this._getAttachment(s);
                    this.addAttachmentClass(o);
                    var a = !1 === this.config.container ? document.body : oe(this.config.container);
                    oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, { placement: o, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Ce }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { e._handlePopperPlacementChange(t) } }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);
                    var l = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e)
                    };
                    if (oe(this.tip).hasClass(Ee)) {
                        var h = Cn.getTransitionDurationFromElement(this.tip);
                        oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h)
                    } else l()
                }
            }, t.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = oe.Event(this.constructor.Event.HIDE),
                    r = function() { e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() };
                if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) {
                        var s = Cn.getTransitionDurationFromElement(n);
                        oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function() { return Boolean(this.getTitle()) }, t.addAttachmentClass = function(t) { oe(this.getTipElement()).addClass(ue + "-" + t) }, t.getTipElement = function() { return this.tip = this.tip || oe(this.config.template)[0], this.tip }, t.setContent = function() {
                var t = oe(this.getTipElement());
                this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye)
            }, t.setElementContent = function(t, e) { var n = this.config.html; "object" == typeof e && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e) }, t.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getAttachment = function(t) { return _e[t.toUpperCase()] }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) { return i.toggle(t) });
                    else if (t !== be) {
                        var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        oe(i.element).on(e, i.config.selector, function(t) { return i._enter(t) }).on(n, i.config.selector, function(t) { return i._leave(t) })
                    }
                    oe(i.element).closest(".modal").on("hide.bs.modal", function() { return i.hide() })
                }), this.config.selector ? this.config = h({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() { e._hoverState === me && e.show() }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() { e._hoverState === pe && e.hide() }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) { return "number" == typeof(t = h({}, this.constructor.Default, oe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = oe(this.getTipElement()),
                    e = t.attr("class").match(fe);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) { this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = oe(this).data(le),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return ge } }, { key: "NAME", get: function() { return ae } }, { key: "DATA_KEY", get: function() { return le } }, { key: "Event", get: function() { return ve } }, { key: "EVENT_KEY", get: function() { return he } }, { key: "DefaultType", get: function() { return de } }]), i
        }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function() { return oe.fn[ae] = ce, Se._jQueryInterface }, Se),
        On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), He = h({}, Nn.DefaultType, { content: "(string|element|function)" }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = { HIDE: "hide" + ke, HIDDEN: "hidden" + ke, SHOW: (Me = "show") + ke, SHOWN: "shown" + ke, INSERTED: "inserted" + ke, CLICK: "click" + ke, FOCUSIN: "focusin" + ke, FOCUSOUT: "focusout" + ke, MOUSEENTER: "mouseenter" + ke, MOUSELEAVE: "mouseleave" + ke }, Fe = function(t) {
            var e, n;

            function i() { return t.apply(this, arguments) || this }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function(t) { we(this.getTipElement()).addClass(Le + "-" + t) }, r.getTipElement = function() { return this.tip = this.tip || we(this.config.template)[0], this.tip }, r.setContent = function() {
                var t = we(this.getTipElement());
                this.setElementContent(t.find(xe), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me)
            }, r._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function() {
                var t = we(this.getTipElement()),
                    e = t.attr("class").match(je);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = we(this).data(Oe),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return Re } }, { key: "NAME", get: function() { return Ne } }, { key: "DATA_KEY", get: function() { return Oe } }, { key: "Event", get: function() { return Ke } }, { key: "EVENT_KEY", get: function() { return ke } }, { key: "DefaultType", get: function() { return He } }]), i
        }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function() { return we.fn[Ne] = Pe, Fe._jQueryInterface }, Fe),
        kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = { offset: 10, method: "auto", target: "" }, ze = { offset: "number", method: "string", target: "(string|element)" }, Xe = { ACTIVATE: "activate" + Ye, SCROLL: "scroll" + Ye, LOAD_DATA_API: "load" + Ye + ".data-api" }, Je = "dropdown-item", Ze = "active", $e = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, tn = "offset", en = "position", nn = function() {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function(t) { return n._process(t) }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? tn : en,
                    r = "auto" === this._config.method ? t : this._config.method,
                    s = r === en ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function(t) { var e, n = Cn.getSelectorFromElement(t); if (n && (e = Ve(n)[0]), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [Ve(e)[r]().top + s, n] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) })
            }, t.dispose = function() { Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function(t) {
                if ("string" != typeof(t = h({}, qe, "object" == typeof t && t ? t : {})).target) {
                    var e = Ve(t.target).attr("id");
                    e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e
                }
                return Cn.typeCheckConfig(Qe, t, ze), t
            }, t._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) { this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]) } }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' });
                var n = Ve(t.join(","));
                n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, { relatedTarget: e })
            }, t._clear = function() { Ve(this._selector).filter($e.ACTIVE).removeClass(Ze) }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = Ve(this).data(Be);
                    if (t || (t = new n(this, "object" == typeof e && e), Ve(this).data(Be, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, o(n, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return qe } }]), n
        }(), Ve(window).on(Xe.LOAD_DATA_API, function() {
            for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) {
                var n = Ve(t[e]);
                nn._jQueryInterface.call(n, n.data())
            }
        }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function() { return Ve.fn[Qe] = Ge, nn._jQueryInterface }, nn),
        Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = { HIDE: "hide" + on, HIDDEN: "hidden" + on, SHOW: "show" + on, SHOWN: "shown" + on, CLICK_DATA_API: "click" + on + ".data-api" }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function() {
            function i(t) { this._element = t }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
                    var t, i, e = rn(this._element).closest(gn)[0],
                        r = Cn.getSelectorFromElement(this._element);
                    if (e) {
                        var s = "UL" === e.nodeName ? pn : mn;
                        i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1]
                    }
                    var o = rn.Event(ln.HIDE, { relatedTarget: this._element }),
                        a = rn.Event(ln.SHOW, { relatedTarget: i });
                    if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                        r && (t = rn(r)[0]), this._activate(this._element, e);
                        var l = function() {
                            var t = rn.Event(ln.HIDDEN, { relatedTarget: n._element }),
                                e = rn.Event(ln.SHOWN, { relatedTarget: i });
                            rn(i).trigger(t), rn(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() { rn.removeData(this._element, sn), this._element = null }, t._activate = function(t, e, n) {
                var i = this,
                    r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
                    s = n && r && rn(r).hasClass(fn),
                    o = function() { return i._transitionComplete(t, r, n) };
                if (r && s) {
                    var a = Cn.getTransitionDurationFromElement(r);
                    rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a)
                } else o()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    rn(e).removeClass(dn + " " + cn);
                    var i = rn(e.parentNode).find(yn)[0];
                    i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
                    var r = rn(t).closest(_n)[0];
                    r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = rn(this),
                        e = t.data(sn);
                    if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }]), i
        }(), rn(document).on(ln.CLICK_DATA_API, vn, function(t) { t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show") }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function() { return rn.fn.tab = an, Tn._jQueryInterface }, Tn);
    ! function(t) { if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", { value: !0 })
});
//# sourceMappingURL=bootstrap.min.js.map	


/*!
 * ANIMATE
 */
(function() {
    var a, b, c, d, e, f = function(a, b) { return function() { return a.apply(b, arguments) } },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.createEvent = function(a, b, c, d) { var e; return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e }, a.prototype.emitEvent = function(a, b) { return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0 }, a.prototype.addEvent = function(a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function(a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() { this.keys = [], this.values = [] }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a, b) { return this.getPropertyValue = function(b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass) }
        return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, e.prototype.init = function() { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function() { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) { return function(b) { var c, d, e, f, g; for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() { var a, b, c, d; for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e)); return d }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0
        }, e.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function(b) { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function(a) { var b, c, d, e, f; if (null == a && (a = this.element), 1 === a.nodeType) { for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function(a) { return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a }, e.prototype.applyStyle = function(a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) { return function() { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), e.prototype.resetStyle = function() { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible"); return e }, e.prototype.resetAnimation = function(a) { var b; return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0 }, e.prototype.customStyle = function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() { var b, d, g, h; for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e); return h }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) { var c, e, f, g, h, i; for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b); return g }, e.prototype.animationName = function(a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function(a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function(a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function() { return this.scrolled = !0 }, e.prototype.scrollCallback = function() { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function(a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, e.prototype.isVisible = function(a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function() { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e
    }()
}).call(this);

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();


/*!
 * SCROLL
 */
! function(e, t) { "function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e) }("undefined" != typeof global ? global : this.window || this.global, function(e) {
    "use strict";
    var t, n, o, r, a, i, u, c = {},
        l = "querySelector" in document && "addEventListener" in e,
        s = { selector: "[data-scroll]", selectorHeader: null, speed: 500, easing: "easeInOutCubic", offset: 0, callback: function() {} },
        f = function() {
            var e = {},
                t = !1,
                n = 0,
                o = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++);
            for (var r = function(n) { for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t && "[object Object]" === Object.prototype.toString.call(n[o]) ? e[o] = f(!0, e[o], n[o]) : e[o] = n[o]) }; o > n; n++) {
                var a = arguments[n];
                r(a)
            }
            return e
        },
        d = function(e) { return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight) },
        h = function(e, t) {
            var n, o, r = t.charAt(0),
                a = "classList" in document.documentElement;
            for ("[" === r && (t = t.substr(1, t.length - 2), n = t.split("="), n.length > 1 && (o = !0, n[1] = n[1].replace(/"/g, "").replace(/'/g, ""))); e && e !== document && 1 === e.nodeType; e = e.parentNode) {
                if ("." === r)
                    if (a) { if (e.classList.contains(t.substr(1))) return e } else if (new RegExp("(^|\\s)" + t.substr(1) + "(\\s|$)").test(e.className)) return e;
                if ("#" === r && e.id === t.substr(1)) return e;
                if ("[" === r && e.hasAttribute(n[0])) { if (!o) return e; if (e.getAttribute(n[0]) === n[1]) return e }
                if (e.tagName.toLowerCase() === t) return e
            }
            return null
        },
        m = function(e) {
            "#" === e.charAt(0) && (e = e.substr(1));
            for (var t, n = String(e), o = n.length, r = -1, a = "", i = n.charCodeAt(0); ++r < o;) {
                if (t = n.charCodeAt(r), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                a += t >= 1 && 31 >= t || 127 == t || 0 === r && t >= 48 && 57 >= t || 1 === r && t >= 48 && 57 >= t && 45 === i ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(r) : "\\" + n.charAt(r)
            }
            return "#" + a
        },
        g = function(e, t) { var n; return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t },
        p = function(e, t, n) {
            var o = 0;
            if (e.offsetParent)
                do o += e.offsetTop, e = e.offsetParent; while (e);
            return o = Math.max(o - t - n, 0), Math.min(o, v() - b())
        },
        b = function() { return Math.max(document.documentElement.clientHeight, e.innerHeight || 0) },
        v = function() { return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) },
        y = function(e) { return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {} },
        O = function(e) { return e ? d(e) + e.offsetTop : 0 },
        H = function(t, n, o) { o || (t.focus(), document.activeElement.id !== t.id && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n)) };
    c.animateScroll = function(n, o, i) {
        var c = y(o ? o.getAttribute("data-options") : null),
            l = f(t || s, i || {}, c),
            d = "[object Number]" === Object.prototype.toString.call(n) ? !0 : !1,
            h = d || !n.tagName ? null : n;
        if (d || h) {
            var m = e.pageYOffset;
            l.selectorHeader && !r && (r = document.querySelector(l.selectorHeader)), a || (a = O(r));
            var b, I, S = d ? n : p(h, a, parseInt(l.offset, 10)),
                E = S - m,
                A = v(),
                j = 0,
                L = function(t, r, a) {
                    var i = e.pageYOffset;
                    (t == r || i == r || e.innerHeight + i >= A) && (clearInterval(a), H(n, r, d), l.callback(n, o))
                },
                w = function() { j += 16, b = j / parseInt(l.speed, 10), b = b > 1 ? 1 : b, I = m + E * g(l.easing, b), e.scrollTo(0, Math.floor(I)), L(I, S, u) },
                C = function() { clearInterval(u), u = setInterval(w, 16) };
            0 === e.pageYOffset && e.scrollTo(0, 0), C()
        }
    };
    var I = function(t) {
            e.location.hash;
            n && (n.id = n.getAttribute("data-scroll-id"), c.animateScroll(n, o), n = null, o = null)
        },
        S = function(r) {
            if (0 === r.button && !r.metaKey && !r.ctrlKey && (o = h(r.target, t.selector), o && "a" === o.tagName.toLowerCase() && o.hostname === e.location.hostname && o.pathname === e.location.pathname && /#/.test(o.href))) {
                var a = m(o.hash);
                if ("#" === a) { r.preventDefault(), n = document.body; var i = n.id ? n.id : "smooth-scroll-top"; return n.setAttribute("data-scroll-id", i), n.id = "", void(e.location.hash.substring(1) === i ? I() : e.location.hash = i) }
                n = document.querySelector(a), n && (n.setAttribute("data-scroll-id", n.id), n.id = "", o.hash === e.location.hash && (r.preventDefault(), I()))
            }
        },
        E = function(e) { i || (i = setTimeout(function() { i = null, a = O(r) }, 66)) };
    return c.destroy = function() { t && (document.removeEventListener("click", S, !1), e.removeEventListener("resize", E, !1), t = null, n = null, o = null, r = null, a = null, i = null, u = null) }, c.init = function(n) { l && (c.destroy(), t = f(s, n || {}), r = t.selectorHeader ? document.querySelector(t.selectorHeader) : null, a = O(r), document.addEventListener("click", S, !1), e.addEventListener("hashchange", I, !1), r && e.addEventListener("resize", E, !1)) }, c
});


smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'Linear', // Easing pattern to use
    offset: 90, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: true, // Boolean. If true, update the URL hash on scroll
    callback: function(anchor, toggle) {} // Function to run after scrolling
});


/*!
 * LIGHTBOX
 */
! function(e) {
    function t() { var e = location.href; return hashtag = -1 !== e.indexOf("#prettyPhoto") ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : !1, hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag }

    function i() { "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/") }

    function p() {-1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto") }

    function o(e, t) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = "[\\?&]" + e + "=([^&#]*)",
            p = new RegExp(i),
            o = p.exec(t);
        return null == o ? "" : o[1]
    }
    e.prettyPhoto = { version: "3.1.6" }, e.fn.prettyPhoto = function(a) {
        function s() { e(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - f.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({ height: f.contentHeight, width: f.contentWidth }, settings.animation_speed), $pp_pic_holder.animate({ top: projectedTop, left: j / 2 - f.containerWidth / 2 < 0 ? 0 : j / 2 - f.containerWidth / 2, width: f.containerWidth }, settings.animation_speed, function() { $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (f.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || e.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0 }), m(), a.ajaxcallback() }

        function n(t) { $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() { e(".pp_loaderIcon").show(), t() }) }

        function r(t) { t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide() }

        function l(e, t) {
            if (resized = !1, d(e, t), imageWidth = e, imageHeight = t, (k > j || b > I) && doresize && settings.allow_resize && !$) {
                for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = t / e * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = e / t * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
                (k > j || b > I) && l(k, b), d(imageWidth, imageHeight)
            }
            return { width: Math.floor(imageWidth), height: Math.floor(imageHeight), containerHeight: Math.floor(b), containerWidth: Math.floor(k) + 2 * settings.horizontal_padding, contentHeight: Math.floor(y), contentWidth: Math.floor(w), resized: resized }
        }

        function d(t, i) { t = parseFloat(t), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({ position: "absolute", top: -1e4 }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(e("body")).css({ position: "absolute", top: -1e4 }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = t, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = t }

        function h(e) { return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image" }

        function c() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
                $pp_pic_holder.css({ top: projectedTop, left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2 })
            }
        }

        function _() { return self.pageYOffset ? { scrollTop: self.pageYOffset, scrollLeft: self.pageXOffset } : document.documentElement && document.documentElement.scrollTop ? { scrollTop: document.documentElement.scrollTop, scrollLeft: document.documentElement.scrollLeft } : document.body ? { scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft } : void 0 }

        function g() { I = e(window).height(), j = e(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(j) }

        function m() { isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((f.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave") }

        function u() {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), e("body").append(settings.markup), $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var t = 0; t < pp_images.length; t++) pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() { return e.prettyPhoto.changeGalleryPage("next"), e.prettyPhoto.stopSlideshow(), !1 }), $pp_gallery.find(".pp_arrow_previous").click(function() { return e.prettyPhoto.changeGalleryPage("previous"), e.prettyPhoto.stopSlideshow(), !1 }), $pp_pic_holder.find(".pp_content").hover(function() { $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn() }, function() { $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut() }), itemWidth = 57, $pp_gallery_li.each(function(t) { e(this).find("a").click(function() { return e.prettyPhoto.changePage(t), e.prettyPhoto.stopSlideshow(), !1 }) })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() { return e.prettyPhoto.startSlideshow(), !1 })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({ opacity: 0, height: e(document).height(), width: e(window).width() }).bind("click", function() { settings.modal || e.prettyPhoto.close() }), e("a.pp_close").bind("click", function() { return e.prettyPhoto.close(), !1 }), settings.allow_expand && e("a.pp_expand").bind("click", function() { return e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function() { e.prettyPhoto.open() }), !1 }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() { return e.prettyPhoto.changePage("previous"), e.prettyPhoto.stopSlideshow(), !1 }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() { return e.prettyPhoto.changePage("next"), e.prettyPhoto.stopSlideshow(), !1 }), c()
        }
        a = jQuery.extend({ hook: "rel", animation_speed: "fast", ajaxcallback: function() {}, slideshow: 5e3, autoplay_slideshow: !1, opacity: .8, show_title: !0, allow_resize: !0, allow_expand: !0, default_width: 500, default_height: 344, counter_separator_label: "/", theme: "pp_default", horizontal_padding: 20, hideflash: !1, wmode: "opaque", autoplay: !0, modal: !1, deeplinking: !0, overlay_gallery: !0, overlay_gallery_max: 30, keyboard_shortcuts: !0, changepicturecallback: function() {}, callback: function() {}, ie6_fallback: !0, markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>', gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>', image_markup: '<img id="fullResImage" src="{path}" />', flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>', quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>', iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>', inline_markup: '<div class="pp_inline">{content}</div>', custom_markup: "", social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' }, a);
        var f, v, y, w, b, k, P, x = this,
            $ = !1,
            I = e(window).height(),
            j = e(window).width();
        return doresize = !0, scroll_pos = _(), e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() { c(), g() }), a.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
                case 37:
                    e.prettyPhoto.changePage("previous"), t.preventDefault();
                    break;
                case 39:
                    e.prettyPhoto.changePage("next"), t.preventDefault();
                    break;
                case 27:
                    settings.modal || e.prettyPhoto.close(), t.preventDefault()
            }
        }), e.prettyPhoto.initialize = function() { return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = e(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(x, function(t) { return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("href") : void 0 }) : e.makeArray(e(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function(t) { return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : "" : void 0 }) : e.makeArray(e(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function(t) { return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("title") ? e(t).attr("title") : "" : void 0 }) : e.makeArray(e(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(e(this).attr("href"), pp_images), rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)), u(this), settings.allow_resize && e(window).bind("scroll.prettyphoto", function() { c() }), e.prettyPhoto.open(), !1 }, e.prettyPhoto.open = function(t) {
            return "undefined" == typeof settings && (settings = a, pp_images = e.makeArray(arguments[0]), pp_titles = e.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = e.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, u(t.target)), settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r(e(pp_images).size()), e(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function() {
                switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() { f = l(imgPreloader.width, imgPreloader.height), s() }, imgPreloader.onerror = function() { alert("Image cannot be loaded. Make sure the path is correct and image exist."), e.prettyPhoto.close() }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        f = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        f = l(movie_width, movie_height), movie_id = pp_images[set_position];
                        var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                            i = movie_id.match(t);
                        movie = "http://player.vimeo.com/video/" + i[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = f.width + "/embed/?moog_width=" + f.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, f.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        f = l(movie_width, movie_height), f.height += 15, f.contentHeight += 15, f.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        f = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        f = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, f = l(movie_width, movie_height), doresize = !0, skipInjection = !0, e.get(pp_images[set_position], function(e) { toInject = settings.inline_markup.replace(/{content}/g, e), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s() });
                        break;
                    case "custom":
                        f = l(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({ width: settings.default_width }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, f = l(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
            }), !1
        }, e.prettyPhoto.changePage = function(t) { currentGalleryPage = 0, "previous" == t ? (set_position--, set_position < 0 && (set_position = e(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > e(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function() { e.prettyPhoto.open() }) }, e.prettyPhoto.changeGalleryPage = function(e) { "next" == e ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == e ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = e, slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({ left: -slide_to }, slide_speed) }, e.prettyPhoto.startSlideshow = function() { "undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() { return e.prettyPhoto.stopSlideshow(), !1 }), P = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next") }, e.prettyPhoto.stopSlideshow = function() { $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() { return e.prettyPhoto.startSlideshow(), !1 }), clearInterval(P), P = void 0 }, e.prettyPhoto.close = function() { $pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() { e(this).remove() }), $pp_overlay.fadeOut(settings.animation_speed, function() { settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), e(this).remove(), e(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings })) }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() { e("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click") }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;

jQuery('a[data-gal]').each(function() {
    jQuery(this).attr('rel', jQuery(this).data('gal'));
});
jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({ animationSpeed: 'slow', theme: 'light_square', slideshow: true, overlay_gallery: true, social_tools: false, deeplinking: false });


/*!
 * DEVICE JS
 */
(function() {
    var e, i, n, o, d, t, c, r, a;
    window.device = {}, i = window.document.documentElement, a = window.navigator.userAgent.toLowerCase(), device.ios = function() { return device.iphone() || device.ipod() || device.ipad() }, device.iphone = function() { return n("iphone") }, device.ipod = function() { return n("ipod") }, device.ipad = function() { return n("ipad") }, device.android = function() { return n("android") }, device.androidPhone = function() { return device.android() && n("mobile") }, device.androidTablet = function() { return device.android() && !n("mobile") }, device.blackberry = function() { return n("blackberry") || n("bb10") || n("rim") }, device.blackberryPhone = function() { return device.blackberry() && !n("tablet") }, device.blackberryTablet = function() { return device.blackberry() && n("tablet") }, device.windows = function() { return n("windows") }, device.windowsPhone = function() { return device.windows() && n("phone") }, device.windowsTablet = function() { return device.windows() && n("touch") }, device.fxos = function() { return n("(mobile; rv:") || n("(tablet; rv:") }, device.fxosPhone = function() { return device.fxos() && n("mobile") }, device.fxosTablet = function() { return device.fxos() && n("tablet") }, device.mobile = function() { return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() }, device.tablet = function() { return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet() }, device.portrait = function() { return 90 !== Math.abs(window.orientation) }, device.landscape = function() { return 90 === Math.abs(window.orientation) }, n = function(e) { return -1 !== a.indexOf(e) }, d = function(e) { var n; return n = new RegExp(e, "i"), i.className.match(n) }, e = function(e) { return d(e) ? void 0 : i.className += " " + e }, c = function(e) { return d(e) ? i.className = i.className.replace(e, "") : void 0 }, device.ios() ? device.ipad() ? e("ios ipad tablet") : device.iphone() ? e("ios iphone mobile") : device.ipod() && e("ios ipod mobile") : e(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : "desktop"), o = function() { return device.landscape() ? (c("portrait"), e("landscape")) : (c("landscape"), e("portrait")) }, r = "onorientationchange" in window, t = r ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(t, o, !1) : window.attachEvent ? window.attachEvent(t, o) : window[t] = o, o()
}).call(this);


/*!
 * PARALLAX JS
 */
! function(t, e, i, s) {
    function o(e, i) { this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = n, this.init() }
    var n = "stellar",
        r = { scrollProperty: "scroll", positionProperty: "position", horizontalScrolling: !0, verticalScrolling: !0, horizontalOffset: 0, verticalOffset: 0, responsive: !1, parallaxBackgrounds: !0, parallaxElements: !0, hideDistantElements: !0, hideElement: function(t) { t.hide() }, showElement: function(t) { t.show() } },
        a = { scroll: { getLeft: function(t) { return t.scrollLeft() }, setLeft: function(t, e) { t.scrollLeft(e) }, getTop: function(t) { return t.scrollTop() }, setTop: function(t, e) { t.scrollTop(e) } }, position: { getLeft: function(t) { return -1 * parseInt(t.css("left"), 10) }, getTop: function(t) { return -1 * parseInt(t.css("top"), 10) } }, margin: { getLeft: function(t) { return -1 * parseInt(t.css("margin-left"), 10) }, getTop: function(t) { return -1 * parseInt(t.css("margin-top"), 10) } }, transform: { getLeft: function(t) { var e = getComputedStyle(t[0])[c]; return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0 }, getTop: function(t) { var e = getComputedStyle(t[0])[c]; return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0 } } },
        l = { position: { setLeft: function(t, e) { t.css("left", e) }, setTop: function(t, e) { t.css("top", e) } }, transform: { setPosition: function(t, e, i, s, o) { t[0].style[c] = "translate3d(" + (e - i) + "px, " + (s - o) + "px, 0)" } } },
        f = function() {
            var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                s = t("script")[0].style,
                o = "";
            for (e in s)
                if (i.test(e)) { o = e.match(i)[0]; break }
            return "WebkitOpacity" in s && (o = "Webkit"), "KhtmlOpacity" in s && (o = "Khtml"),
                function(t) { return o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t) }
        }(),
        c = f("transform"),
        p = t("<div />", { style: "background:#fff" }).css("background-position-x") !== s,
        h = p ? function(t, e, i) { t.css({ "background-position-x": e, "background-position-y": i }) } : function(t, e, i) { t.css("background-position", e + " " + i) },
        d = p ? function(t) { return [t.css("background-position-x"), t.css("background-position-y")] } : function(t) { return t.css("background-position").split(" ") },
        u = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) { setTimeout(t, 1e3 / 60) };
    o.prototype = {
        init: function() { this.options.name = n + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({ firstLoad: !0 }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop() },
        _defineElements: function() { this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== s ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent() },
        _defineGetters: function() {
            var t = this,
                e = a[t.options.scrollProperty];
            this._getScrollLeft = function() { return e.getLeft(t.$scrollElement) }, this._getScrollTop = function() { return e.getTop(t.$scrollElement) }
        },
        _defineSetters: function() {
            var e = this,
                i = a[e.options.scrollProperty],
                s = l[e.options.positionProperty],
                o = i.setLeft,
                n = i.setTop;
            this._setScrollLeft = "function" == typeof o ? function(t) { o(e.$scrollElement, t) } : t.noop, this._setScrollTop = "function" == typeof n ? function(t) { n(e.$scrollElement, t) } : t.noop, this._setPosition = s.setPosition || function(t, i, o, n, r) { e.options.horizontalScrolling && s.setLeft(t, i, o), e.options.verticalScrolling && s.setTop(t, n, r) }
        },
        _handleWindowLoadAndResize: function() {
            var i = this,
                s = t(e);
            i.options.responsive && s.bind("load." + this.name, function() { i.refresh() }), s.bind("resize." + this.name, function() { i._detectViewport(), i.options.responsive && i.refresh() })
        },
        refresh: function(i) {
            var s = this,
                o = s._getScrollLeft(),
                n = s._getScrollTop();
            i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
                var t = s._getScrollLeft(),
                    e = s._getScrollTop();
                s._setScrollLeft(t + 1), s._setScrollTop(e + 1), s._setScrollLeft(t), s._setScrollTop(e)
            }), this._setScrollLeft(o), this._setScrollTop(n)
        },
        _detectViewport: function() {
            var t = this.$viewportElement.offset(),
                e = null !== t && t !== s;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
        },
        _findParticles: function() {
            var e = this;
            if (this._getScrollLeft(), this._getScrollTop(), this.particles !== s)
                for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", s);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var i, o, n, r, a, l, f, c, p, h = t(this),
                    d = 0,
                    u = 0,
                    g = 0,
                    m = 0;
                if (h.data("stellar-elementIsActive")) { if (h.data("stellar-elementIsActive") !== this) return } else h.data("stellar-elementIsActive", this);
                e.options.showElement(h), h.data("stellar-startingLeft") ? (h.css("left", h.data("stellar-startingLeft")), h.css("top", h.data("stellar-startingTop"))) : (h.data("stellar-startingLeft", h.css("left")), h.data("stellar-startingTop", h.css("top"))), n = h.position().left, r = h.position().top, a = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10), l = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10), c = h.offset().left - a, p = h.offset().top - l, h.parents().each(function() { var e = t(this); return e.data("stellar-offset-parent") === !0 ? (d = g, u = m, f = e, !1) : (g += e.position().left, void(m += e.position().top)) }), i = h.data("stellar-horizontal-offset") !== s ? h.data("stellar-horizontal-offset") : f !== s && f.data("stellar-horizontal-offset") !== s ? f.data("stellar-horizontal-offset") : e.horizontalOffset, o = h.data("stellar-vertical-offset") !== s ? h.data("stellar-vertical-offset") : f !== s && f.data("stellar-vertical-offset") !== s ? f.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({ $element: h, $offsetParent: f, isFixed: "fixed" === h.css("position"), horizontalOffset: i, verticalOffset: o, startingPositionLeft: n, startingPositionTop: r, startingOffsetLeft: c, startingOffsetTop: p, parentOffsetLeft: d, parentOffsetTop: u, stellarRatio: h.data("stellar-ratio") !== s ? h.data("stellar-ratio") : 1, width: h.outerWidth(!0), height: h.outerHeight(!0), isHidden: !1 })
            })
        },
        _findBackgrounds: function() {
            var e, i = this,
                o = this._getScrollLeft(),
                n = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
                var e, r, a, l, f, c, p, u = t(this),
                    g = d(u),
                    m = 0,
                    v = 0,
                    L = 0,
                    _ = 0;
                if (u.data("stellar-backgroundIsActive")) { if (u.data("stellar-backgroundIsActive") !== this) return } else u.data("stellar-backgroundIsActive", this);
                u.data("stellar-backgroundStartingLeft") ? h(u, u.data("stellar-backgroundStartingLeft"), u.data("stellar-backgroundStartingTop")) : (u.data("stellar-backgroundStartingLeft", g[0]), u.data("stellar-backgroundStartingTop", g[1])), a = "auto" === u.css("margin-left") ? 0 : parseInt(u.css("margin-left"), 10), l = "auto" === u.css("margin-top") ? 0 : parseInt(u.css("margin-top"), 10), f = u.offset().left - a - o, c = u.offset().top - l - n, u.parents().each(function() { var e = t(this); return e.data("stellar-offset-parent") === !0 ? (m = L, v = _, p = e, !1) : (L += e.position().left, void(_ += e.position().top)) }), e = u.data("stellar-horizontal-offset") !== s ? u.data("stellar-horizontal-offset") : p !== s && p.data("stellar-horizontal-offset") !== s ? p.data("stellar-horizontal-offset") : i.horizontalOffset, r = u.data("stellar-vertical-offset") !== s ? u.data("stellar-vertical-offset") : p !== s && p.data("stellar-vertical-offset") !== s ? p.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({ $element: u, $offsetParent: p, isFixed: "fixed" === u.css("background-attachment"), horizontalOffset: e, verticalOffset: r, startingValueLeft: g[0], startingValueTop: g[1], startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10), startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10), startingPositionLeft: u.position().left, startingPositionTop: u.position().top, startingOffsetLeft: f, startingOffsetTop: c, parentOffsetLeft: m, parentOffsetTop: v, stellarRatio: u.data("stellar-background-ratio") === s ? 1 : u.data("stellar-background-ratio") })
            }))
        },
        _reset: function() { var t, e, i, s, o; for (o = this.particles.length - 1; o >= 0; o--) t = this.particles[o], e = t.$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null); for (o = this.backgrounds.length - 1; o >= 0; o--) s = this.backgrounds[o], s.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), h(s.$element, s.startingValueLeft, s.startingValueTop) },
        destroy: function() { this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name) },
        _setOffsets: function() {
            var i = this,
                s = t(e);
            s.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), s.bind("resize.horizontal-" + this.name, function() { i.horizontalOffset = i.options.horizontalOffset() })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), s.bind("resize.vertical-" + this.name, function() { i.verticalOffset = i.options.verticalOffset() })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var t, e, i, s, o, n, r, a, l, f, c = this._getScrollLeft(),
                p = this._getScrollTop(),
                d = !0,
                u = !0;
            if (this.currentScrollLeft !== c || this.currentScrollTop !== p || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) { for (this.currentScrollLeft = c, this.currentScrollTop = p, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, f = this.particles.length - 1; f >= 0; f--) t = this.particles[f], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (n = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = n - t.startingPositionLeft + t.startingOffsetLeft) : (n = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (r = (p + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = r - t.startingPositionTop + t.startingOffsetTop) : (r = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (u = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, d = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : p) && l < (t.isFixed ? 0 : p) + this.viewportHeight + this.viewportOffsetTop), u && d ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, n, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0); for (f = this.backgrounds.length - 1; f >= 0; f--) i = this.backgrounds[f], e = i.isFixed ? 0 : 1, s = this.options.horizontalScrolling ? (c + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (p + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, h(i.$element, s, o) }
        },
        _handleScrollEvent: function() {
            var t = this,
                e = !1,
                i = function() { t._repositionElements(), e = !1 },
                s = function() { e || (u(i), e = !0) };
            this.$scrollElement.bind("scroll." + this.name, s), s()
        },
        _startAnimationLoop: function() {
            var t = this;
            this._animationLoop = function() { u(t._animationLoop), t._repositionElements() }, this._animationLoop()
        }
    }, t.fn[n] = function(e) {
        var i = arguments;
        return e === s || "object" == typeof e ? this.each(function() { t.data(this, "plugin_" + n) || t.data(this, "plugin_" + n, new o(this, e)) }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
            var s = t.data(this, "plugin_" + n);
            s instanceof o && "function" == typeof s[e] && s[e].apply(s, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + n, null)
        }) : void 0
    }, t[n] = function() { var i = t(e); return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0)) }, t[n].scrollProperty = a, t[n].positionProperty = l, e.Stellar = o
}(jQuery, this, document),
function() {
    "use strict";

    function t() { $.stellar({ positionProperty: "transform" }) }
    device.tablet() || device.mobile() ? $(".parallax, .parallax-layer").addClass("no-parallax") : $(window).bind("load", function() { t() })
}();


/*!
 * CAROUSEL
 */
! function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() }
    e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = { merge: !1, width: b }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { b >= a && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), null !== this.settings && this._breakpoint === d || (this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }))
    }, e.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1 }, e.prototype.registerEventHandlers = function() { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function(b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) { return "left" === c && b > h - e && h + e > b ? d = a : "right" === c && b > h - f - e && h - f + e > b ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), -1 === d }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" })
    }, e.prototype.is = function(a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
        }
        return this._current
    }, e.prototype.invalidate = function(b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) { return b }) }, e.prototype.reset = function(a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || 1 > c ? a = d : (0 > a || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function(a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) {
        var b, c = this.settings,
            d = this._coordinates.length,
            e = Math.abs(this._coordinates[d - 1]) - this._width,
            f = -1;
        if (c.loop) d = this._clones.length / 2 + this._items.length - 1;
        else if (c.autoWidth || c.merge)
            for (; d - f > 1;) Math.abs(this._coordinates[b = d + f >> 1]) < e ? f = b : d = b;
        else d = c.center ? this._items.length - 1 : this._items.length - c.items;
        return a && (d -= this._clones.length / 2), Math.max(d, 0)
    }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 };
        return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null })
    }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function(a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (0 > e),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && i >= d - e && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function(a) { return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated")) }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c })
    }, e.prototype.remove = function(a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function(b) { b.each(a.proxy(function(b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) { return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this)))
    }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function(a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function(a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function(a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function() { this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function() { this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) { this.load(b) }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = { lazyLoad: !1 }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) { e.push(a(c).height()) }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this),
            "resize.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this),
            "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this),
            "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this))
    };
    e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function(a, b) {
        var c = function() { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a.framegrab_url, l(f) } }))
    }, e.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function(a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function(a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function(a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function(a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) };
    e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function(a, b) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, e.prototype._getNextTimeout = function(d, e) { return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() { this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed) }, this), d || this._core.settings.autoplayTimeout) }, e.prototype._setAutoPlayInterval = function() { this._timeout = this._getNextTimeout() }, e.prototype.stop = function() { this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating")) }, e.prototype.pause = function() { this._core.is("rotating") && (this._paused = !0) }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
    e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function() { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) }
    }, e.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function(a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function(b, c, d) { var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) { return a === d ? b : null }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) { return g[b] !== d ? (e = c ? b : !0, !1) : void 0 }), e
    }

    function f(a) { return e(a, !0) }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function() { return !!e("transform") }, csstransforms3d: function() { return !!e("perspective") }, csstransitions: function() { return !!e("transition") }, cssanimations: function() { return !!e("animation") } };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

$('.owl-watch').owlCarousel({
    loop: false,
    margin: 0,
    dots: false,
    nav: true,
    responsiveClass: true,
    navText: [
        "<i class='fa fa-angle-left effect-1'></i>",
        "<i class='fa fa-angle-right effect-1'></i>"
    ],
    responsive: {
        0: {
            nav: false,
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('.owl-services').owlCarousel({
    loop: false,
    margin: 30,
    dots: false,
    nav: true,
    responsiveClass: true,
    navText: [
        "<i class='fa fa-angle-left effect-1'></i>",
        "<i class='fa fa-angle-right effect-1'></i>"
    ],
    responsive: {
        0: {
            nav: false,
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('.testi-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    center: true,
    responsiveClass: true,
    navText: [
        "<i class='fa fa-angle-left effect-1'></i>",
        "<i class='fa fa-angle-right effect-1'></i>"
    ],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            loop: false
        },
        1200: {
            items: 1,
            loop: false
        }
    }
})

$('.owl-screenshots').owlCarousel({
    loop: false,
    margin: 30,
    dots: false,
    nav: true,
    responsiveClass: true,
    navText: [
        "<i class='fa fa-angle-left effect-1'></i>",
        "<i class='fa fa-angle-right effect-1'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


$('.owl-app').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    nav: false,
    responsiveClass: true,
    navText: [
        "<i class='fa fa-angle-left effect-1'></i>",
        "<i class='fa fa-angle-right effect-1'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})

/*!
 * PORTFOLIO
 */
! function(t, i, s) {
    "use strict";
    var e, n = t.document,
        o = t.Modernizr,
        r = function(t) { return t.charAt(0).toUpperCase() + t.slice(1) },
        a = "Moz Webkit O Ms".split(" "),
        h = function(t) {
            var i, s = n.documentElement.style;
            if ("string" == typeof s[t]) return t;
            t = r(t);
            for (var e = 0, o = a.length; o > e; e++)
                if (i = a[e] + t, "string" == typeof s[i]) return i
        },
        l = h("transform"),
        u = h("transitionProperty"),
        c = {
            csstransforms: function() { return !!l },
            csstransforms3d: function() {
                var t = !!h("perspective");
                if (t) {
                    var s = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        e = "@media (" + s.join("transform-3d),(") + "modernizr)",
                        n = i("<style>" + e + "{#modernizr{height:3px}}</style>").appendTo("head"),
                        o = i('<div id="modernizr" />').appendTo("html");
                    t = 3 === o.height(), o.remove(), n.remove()
                }
                return t
            },
            csstransitions: function() { return !!u }
        };
    if (o)
        for (e in c) o.hasOwnProperty(e) || o.addTest(e, c[e]);
    else {
        o = t.Modernizr = { _version: "1.6ish: miniModernizr for Isotope" };
        var d, f = " ";
        for (e in c) d = c[e](), o[e] = d, f += " " + (d ? "" : "no-") + e;
        i("html").addClass(f)
    }
    if (o.csstransforms) {
        var m = o.csstransforms3d ? { translate: function(t) { return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) " }, scale: function(t) { return "scale3d(" + t + ", " + t + ", 1) " } } : { translate: function(t) { return "translate(" + t[0] + "px, " + t[1] + "px) " }, scale: function(t) { return "scale(" + t + ") " } },
            p = function(t, s, e) {
                var n, o, r = i.data(t, "isoTransform") || {},
                    a = {},
                    h = {};
                a[s] = e, i.extend(r, a);
                for (n in r) o = r[n], h[n] = m[n](o);
                var u = h.translate || "",
                    c = h.scale || "",
                    d = u + c;
                i.data(t, "isoTransform", r), t.style[l] = d
            };
        i.cssNumber.scale = !0, i.cssHooks.scale = { set: function(t, i) { p(t, "scale", i) }, get: function(t, s) { var e = i.data(t, "isoTransform"); return e && e.scale ? e.scale : 1 } }, i.fx.step.scale = function(t) { i.cssHooks.scale.set(t.elem, t.now + t.unit) }, i.cssNumber.translate = !0, i.cssHooks.translate = { set: function(t, i) { p(t, "translate", i) }, get: function(t, s) { var e = i.data(t, "isoTransform"); return e && e.translate ? e.translate : [0, 0] } }
    }
    var y, g;
    o.csstransitions && (y = { WebkitTransitionProperty: "webkitTransitionEnd", MozTransitionProperty: "transitionend", OTransitionProperty: "oTransitionEnd otransitionend", transitionProperty: "transitionend" }[u], g = h("transitionDuration"));
    var v, _ = i.event,
        A = i.event.handle ? "handle" : "dispatch";
    _.special.smartresize = {
        setup: function() { i(this).bind("resize", _.special.smartresize.handler) },
        teardown: function() { i(this).unbind("resize", _.special.smartresize.handler) },
        handler: function(t, i) {
            var s = this,
                e = arguments;
            t.type = "smartresize", v && clearTimeout(v), v = setTimeout(function() { _[A].apply(s, e) }, "execAsap" === i ? 0 : 100)
        }
    }, i.fn.smartresize = function(t) { return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"]) }, i.Isotope = function(t, s, e) { this.element = i(s), this._create(t), this._init(e) };
    var w = ["width", "height"],
        C = i(t);
    i.Isotope.settings = { resizable: !0, layoutMode: "masonry", containerClass: "isotope", itemClass: "isotope-item", hiddenClass: "isotope-hidden", hiddenStyle: { opacity: 0, scale: .001 }, visibleStyle: { opacity: 1, scale: 1 }, containerStyle: { position: "relative", overflow: "hidden" }, animationEngine: "best-available", animationOptions: { queue: !1, duration: 800 }, sortBy: "original-order", sortAscending: !0, resizesContainer: !0, transformsEnabled: !0, itemPositionDataEnabled: !1 }, i.Isotope.prototype = {
        _create: function(t) {
            this.options = i.extend({}, i.Isotope.settings, t), this.styleQueue = [], this.elemCount = 0;
            var s = this.element[0].style;
            this.originalStyle = {};
            var e = w.slice(0);
            for (var n in this.options.containerStyle) e.push(n);
            for (var o = 0, r = e.length; r > o; o++) n = e[o], this.originalStyle[n] = s[n] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var a = { "original-order": function(t, i) { return i.elemCount++, i.elemCount }, random: function() { return Math.random() } };
            this.options.getSortData = i.extend(this.options.getSortData, a), this.reloadItems(), this.offset = { left: parseInt(this.element.css("padding-left") || 0, 10), top: parseInt(this.element.css("padding-top") || 0, 10) };
            var h = this;
            setTimeout(function() { h.element.addClass(h.options.containerClass) }, 0), this.options.resizable && C.bind("smartresize.isotope", function() { h.resize() }), this.element.delegate("." + this.options.hiddenClass, "click", function() { return !1 })
        },
        _getAtoms: function(t) {
            var i = this.options.itemSelector,
                s = i ? t.filter(i).add(t.find(i)) : t,
                e = { position: "absolute" };
            return s = s.filter(function(t, i) { return 1 === i.nodeType }), this.usingTransforms && (e.left = 0, e.top = 0), s.css(e).addClass(this.options.itemClass), this.updateSortData(s, !0), s
        },
        _init: function(t) { this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(t) },
        option: function(t) { if (i.isPlainObject(t)) { this.options = i.extend(!0, this.options, t); var s; for (var e in t) s = "_update" + r(e), this[s] && this[s]() } },
        _updateAnimationEngine: function() {
            var t, i = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
            switch (i) {
                case "css":
                case "none":
                    t = !1;
                    break;
                case "jquery":
                    t = !0;
                    break;
                default:
                    t = !o.csstransitions
            }
            this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() { this._updateUsingTransforms() },
        _updateUsingTransforms: function() {
            var t = this.usingTransforms = this.options.transformsEnabled && o.csstransforms && o.csstransitions && !this.isUsingJQueryAnimation;
            t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = t ? this._translate : this._positionAbs
        },
        _filter: function(t) {
            var i = "" === this.options.filter ? "*" : this.options.filter;
            if (!i) return t;
            var s = this.options.hiddenClass,
                e = "." + s,
                n = t.filter(e),
                o = n;
            if ("*" !== i) {
                o = n.filter(i);
                var r = t.not(e).not(i).addClass(s);
                this.styleQueue.push({ $el: r, style: this.options.hiddenStyle })
            }
            return this.styleQueue.push({ $el: o, style: this.options.visibleStyle }), o.removeClass(s), t.filter(i)
        },
        updateSortData: function(t, s) {
            var e, n, o = this,
                r = this.options.getSortData;
            t.each(function() {
                e = i(this), n = {};
                for (var t in r) s || "original-order" !== t ? n[t] = r[t](e, o) : n[t] = i.data(this, "isotope-sort-data")[t];
                i.data(this, "isotope-sort-data", n)
            })
        },
        _sort: function() {
            var t = this.options.sortBy,
                i = this._getSorter,
                s = this.options.sortAscending ? 1 : -1,
                e = function(e, n) {
                    var o = i(e, t),
                        r = i(n, t);
                    return o === r && "original-order" !== t && (o = i(e, "original-order"), r = i(n, "original-order")), (o > r ? 1 : r > o ? -1 : 0) * s
                };
            this.$filteredAtoms.sort(e)
        },
        _getSorter: function(t, s) { return i.data(t, "isotope-sort-data")[s] },
        _translate: function(t, i) { return { translate: [t, i] } },
        _positionAbs: function(t, i) { return { left: t, top: i } },
        _pushPosition: function(t, i, s) {
            i = Math.round(i + this.offset.left), s = Math.round(s + this.offset.top);
            var e = this.getPositionStyles(i, s);
            this.styleQueue.push({ $el: t, style: e }), this.options.itemPositionDataEnabled && t.data("isotope-item-position", { x: i, y: s })
        },
        layout: function(t, i) {
            var s = this.options.layoutMode;
            if (this["_" + s + "Layout"](t), this.options.resizesContainer) {
                var e = this["_" + s + "GetContainerSize"]();
                this.styleQueue.push({ $el: this.element, style: e })
            }
            this._processStyleQueue(t, i), this.isLaidOut = !0
        },
        _processStyleQueue: function(t, s) {
            var e, n, r, a, h = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css",
                l = this.options.animationOptions,
                u = this.options.onLayout;
            if (n = function(t, i) { i.$el[h](i.style, l) }, this._isInserting && this.isUsingJQueryAnimation) n = function(t, i) { e = i.$el.hasClass("no-transition") ? "css" : h, i.$el[e](i.style, l) };
            else if (s || u || l.complete) {
                var c = !1,
                    d = [s, u, l.complete],
                    f = this;
                if (r = !0, a = function() {
                        if (!c) {
                            for (var i, s = 0, e = d.length; e > s; s++) i = d[s], "function" == typeof i && i.call(f.element, t, f);
                            c = !0
                        }
                    }, this.isUsingJQueryAnimation && "animate" === h) l.complete = a, r = !1;
                else if (o.csstransitions) {
                    for (var m, p = 0, v = this.styleQueue[0], _ = v && v.$el; !_ || !_.length;) {
                        if (m = this.styleQueue[p++], !m) return;
                        _ = m.$el
                    }
                    var A = parseFloat(getComputedStyle(_[0])[g]);
                    A > 0 && (n = function(t, i) { i.$el[h](i.style, l).one(y, a) }, r = !1)
                }
            }
            i.each(this.styleQueue, n), r && a(), this.styleQueue = []
        },
        resize: function() { this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout() },
        reLayout: function(t) { this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, t) },
        addItems: function(t, i) {
            var s = this._getAtoms(t);
            this.$allAtoms = this.$allAtoms.add(s), i && i(s)
        },
        insert: function(t, i) {
            this.element.append(t);
            var s = this;
            this.addItems(t, function(t) {
                var e = s._filter(t);
                s._addHideAppended(e), s._sort(), s.reLayout(), s._revealAppended(e, i)
            })
        },
        appended: function(t, i) {
            var s = this;
            this.addItems(t, function(t) { s._addHideAppended(t), s.layout(t), s._revealAppended(t, i) })
        },
        _addHideAppended: function(t) { this.$filteredAtoms = this.$filteredAtoms.add(t), t.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({ $el: t, style: this.options.hiddenStyle }) },
        _revealAppended: function(t, i) {
            var s = this;
            setTimeout(function() { t.removeClass("no-transition"), s.styleQueue.push({ $el: t, style: s.options.visibleStyle }), s._isInserting = !1, s._processStyleQueue(t, i) }, 10)
        },
        reloadItems: function() { this.$allAtoms = this._getAtoms(this.element.children()) },
        remove: function(t, i) {
            this.$allAtoms = this.$allAtoms.not(t), this.$filteredAtoms = this.$filteredAtoms.not(t);
            var s = this,
                e = function() { t.remove(), i && i.call(s.element) };
            t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({ $el: t, style: this.options.hiddenStyle }), this._sort(), this.reLayout(e)) : e()
        },
        shuffle: function(t) { this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(t) },
        destroy: function() {
            var t = this.usingTransforms,
                i = this.options;
            this.$allAtoms.removeClass(i.hiddenClass + " " + i.itemClass).each(function() {
                var i = this.style;
                i.position = "", i.top = "", i.left = "", i.opacity = "", t && (i[l] = "")
            });
            var s = this.element[0].style;
            for (var e in this.originalStyle) s[e] = this.originalStyle[e];
            this.element.unbind(".isotope").undelegate("." + i.hiddenClass, "click").removeClass(i.containerClass).removeData("isotope"), C.unbind(".isotope")
        },
        _getSegments: function(t) {
            var i, s = this.options.layoutMode,
                e = t ? "rowHeight" : "columnWidth",
                n = t ? "height" : "width",
                o = t ? "rows" : "cols",
                a = this.element[n](),
                h = this.options[s] && this.options[s][e] || this.$filteredAtoms["outer" + r(n)](!0) || a;
            i = Math.floor(a / h), i = Math.max(i, 1), this[s][o] = i, this[s][e] = h
        },
        _checkIfSegmentsChanged: function(t) {
            var i = this.options.layoutMode,
                s = t ? "rows" : "cols",
                e = this[i][s];
            return this._getSegments(t), this[i][s] !== e
        },
        _masonryReset: function() { this.masonry = {}, this._getSegments(); var t = this.masonry.cols; for (this.masonry.colYs = []; t--;) this.masonry.colYs.push(0) },
        _masonryLayout: function(t) {
            var s = this,
                e = s.masonry;
            t.each(function() {
                var t = i(this),
                    n = Math.ceil(t.outerWidth(!0) / e.columnWidth);
                if (n = Math.min(n, e.cols), 1 === n) s._masonryPlaceBrick(t, e.colYs);
                else {
                    var o, r, a = e.cols + 1 - n,
                        h = [];
                    for (r = 0; a > r; r++) o = e.colYs.slice(r, r + n), h[r] = Math.max.apply(Math, o);
                    s._masonryPlaceBrick(t, h)
                }
            })
        },
        _masonryPlaceBrick: function(t, i) {
            for (var s = Math.min.apply(Math, i), e = 0, n = 0, o = i.length; o > n; n++)
                if (i[n] === s) { e = n; break }
            var r = this.masonry.columnWidth * e,
                a = s;
            this._pushPosition(t, r, a);
            var h = s + t.outerHeight(!0),
                l = this.masonry.cols + 1 - o;
            for (n = 0; l > n; n++) this.masonry.colYs[e + n] = h
        },
        _masonryGetContainerSize: function() { var t = Math.max.apply(Math, this.masonry.colYs); return { height: t } },
        _masonryResizeChanged: function() { return this._checkIfSegmentsChanged() },
        _fitRowsReset: function() { this.fitRows = { x: 0, y: 0, height: 0 } },
        _fitRowsLayout: function(t) {
            var s = this,
                e = this.element.width(),
                n = this.fitRows;
            t.each(function() {
                var t = i(this),
                    o = t.outerWidth(!0),
                    r = t.outerHeight(!0);
                0 !== n.x && o + n.x > e && (n.x = 0, n.y = n.height), s._pushPosition(t, n.x, n.y), n.height = Math.max(n.y + r, n.height), n.x += o
            })
        },
        _fitRowsGetContainerSize: function() { return { height: this.fitRows.height } },
        _fitRowsResizeChanged: function() { return !0 },
        _cellsByRowReset: function() { this.cellsByRow = { index: 0 }, this._getSegments(), this._getSegments(!0) },
        _cellsByRowLayout: function(t) {
            var s = this,
                e = this.cellsByRow;
            t.each(function() {
                var t = i(this),
                    n = e.index % e.cols,
                    o = Math.floor(e.index / e.cols),
                    r = (n + .5) * e.columnWidth - t.outerWidth(!0) / 2,
                    a = (o + .5) * e.rowHeight - t.outerHeight(!0) / 2;
                s._pushPosition(t, r, a), e.index++
            })
        },
        _cellsByRowGetContainerSize: function() { return { height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top } },
        _cellsByRowResizeChanged: function() { return this._checkIfSegmentsChanged() },
        _straightDownReset: function() { this.straightDown = { y: 0 } },
        _straightDownLayout: function(t) {
            var s = this;
            t.each(function(t) {
                var e = i(this);
                s._pushPosition(e, 0, s.straightDown.y), s.straightDown.y += e.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() { return { height: this.straightDown.y } },
        _straightDownResizeChanged: function() { return !0 },
        _masonryHorizontalReset: function() { this.masonryHorizontal = {}, this._getSegments(!0); var t = this.masonryHorizontal.rows; for (this.masonryHorizontal.rowXs = []; t--;) this.masonryHorizontal.rowXs.push(0) },
        _masonryHorizontalLayout: function(t) {
            var s = this,
                e = s.masonryHorizontal;
            t.each(function() {
                var t = i(this),
                    n = Math.ceil(t.outerHeight(!0) / e.rowHeight);
                if (n = Math.min(n, e.rows), 1 === n) s._masonryHorizontalPlaceBrick(t, e.rowXs);
                else {
                    var o, r, a = e.rows + 1 - n,
                        h = [];
                    for (r = 0; a > r; r++) o = e.rowXs.slice(r, r + n), h[r] = Math.max.apply(Math, o);
                    s._masonryHorizontalPlaceBrick(t, h)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(t, i) {
            for (var s = Math.min.apply(Math, i), e = 0, n = 0, o = i.length; o > n; n++)
                if (i[n] === s) { e = n; break }
            var r = s,
                a = this.masonryHorizontal.rowHeight * e;
            this._pushPosition(t, r, a);
            var h = s + t.outerWidth(!0),
                l = this.masonryHorizontal.rows + 1 - o;
            for (n = 0; l > n; n++) this.masonryHorizontal.rowXs[e + n] = h
        },
        _masonryHorizontalGetContainerSize: function() { var t = Math.max.apply(Math, this.masonryHorizontal.rowXs); return { width: t } },
        _masonryHorizontalResizeChanged: function() { return this._checkIfSegmentsChanged(!0) },
        _fitColumnsReset: function() { this.fitColumns = { x: 0, y: 0, width: 0 } },
        _fitColumnsLayout: function(t) {
            var s = this,
                e = this.element.height(),
                n = this.fitColumns;
            t.each(function() {
                var t = i(this),
                    o = t.outerWidth(!0),
                    r = t.outerHeight(!0);
                0 !== n.y && r + n.y > e && (n.x = n.width, n.y = 0), s._pushPosition(t, n.x, n.y), n.width = Math.max(n.x + o, n.width), n.y += r
            })
        },
        _fitColumnsGetContainerSize: function() { return { width: this.fitColumns.width } },
        _fitColumnsResizeChanged: function() { return !0 },
        _cellsByColumnReset: function() { this.cellsByColumn = { index: 0 }, this._getSegments(), this._getSegments(!0) },
        _cellsByColumnLayout: function(t) {
            var s = this,
                e = this.cellsByColumn;
            t.each(function() {
                var t = i(this),
                    n = Math.floor(e.index / e.rows),
                    o = e.index % e.rows,
                    r = (n + .5) * e.columnWidth - t.outerWidth(!0) / 2,
                    a = (o + .5) * e.rowHeight - t.outerHeight(!0) / 2;
                s._pushPosition(t, r, a), e.index++
            })
        },
        _cellsByColumnGetContainerSize: function() { return { width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth } },
        _cellsByColumnResizeChanged: function() { return this._checkIfSegmentsChanged(!0) },
        _straightAcrossReset: function() { this.straightAcross = { x: 0 } },
        _straightAcrossLayout: function(t) {
            var s = this;
            t.each(function(t) {
                var e = i(this);
                s._pushPosition(e, s.straightAcross.x, 0), s.straightAcross.x += e.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() { return { width: this.straightAcross.x } },
        _straightAcrossResizeChanged: function() { return !0 }
    }, i.fn.imagesLoaded = function(t) {
        function s() { t.call(n, o) }

        function e(t) {
            var n = t.target;
            n.src !== a && -1 === i.inArray(n, h) && (h.push(n), --r <= 0 && (setTimeout(s), o.unbind(".imagesLoaded", e)))
        }
        var n = this,
            o = n.find("img").add(n.filter("img")),
            r = o.length,
            a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            h = [];
        return r || s(), o.bind("load.imagesLoaded error.imagesLoaded", e).each(function() {
            var t = this.src;
            this.src = a, this.src = t
        }), n
    };
    var z = function(i) { t.console && t.console.error(i) };
    i.fn.isotope = function(t, s) {
        if ("string" == typeof t) {
            var e = Array.prototype.slice.call(arguments, 1);
            this.each(function() { var s = i.data(this, "isotope"); return s ? i.isFunction(s[t]) && "_" !== t.charAt(0) ? void s[t].apply(s, e) : void z("no such method '" + t + "' for isotope instance") : void z("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'") })
        } else this.each(function() {
            var e = i.data(this, "isotope");
            e ? (e.option(t), e._init(s)) : i.data(this, "isotope", new i.Isotope(t, this, s))
        });
        return this
    }
}(window, jQuery);

/*!
 * IMAGESLOAD PORTFOLIO
 */
(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) { return function() { return this[e].apply(this, arguments) } }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) { var t, n, i = this._getEvents(); if ("object" == typeof e) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, i.flattenListeners = function(e) { var t, n = []; for (t = 0; t < e.length; t += 1) n.push(e[t].listener); return n }, i.getListenersAsObject = function(e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) { return this.addListener(e, { listener: t, once: !0 }) }, i.once = n("addOnceListener"), i.defineEvent = function(e) { return this.getListeners(e), this }, i.defineEvents = function(e) { for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]); return this }, i.removeListener = function(e, n) { var i, r, o = this.getListenersAsObject(e); for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1)); return this }, i.off = n("removeListener"), i.addListeners = function(e, t) { return this.manipulateListeners(!1, e, t) }, i.removeListeners = function(e, t) { return this.manipulateListeners(!0, e, t) }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, i.setOnceReturnValue = function(e) { return this._onceReturnValue = e, this }, i._getOnceReturnValue = function() { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, i._getEvents = function() { return this._events || (this._events = {}) }, e.noConflict = function() { return r.EventEmitter = o, e }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return e }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) { var n = e.event; return n.target = n.target || n.srcElement || t, n }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) { e.addEventListener(t, n, !1) } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) { e.removeEventListener(t, n, !1) } : n.detachEvent && (r = function(e, t, n) { e.detachEvent("on" + t, e[t + n]); try { delete e[t + n] } catch (i) { e[t + n] = void 0 } });
        var o = { bind: i, unbind: r };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) { "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) { return t(e, n, i) }) : "object" == typeof exports || (e.imagesLoaded = t(e, e.EventEmitter, e.eventie)) }(window, function(e, t, n) {
        function i(e, t) { for (var n in t) e[n] = t[n]; return e }

        function r(e) { return "[object Array]" === d.call(e) }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() { r.check() })
        }

        function f(e) { this.img = e }

        function c(e) { this.src = e, v[e] = this }
        var a = e.jQuery,
            h = e.console,
            u = "undefined" != typeof h,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) { return t.options.debug && u && h.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0 }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return void this.complete();
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() { t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e) })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) { var n = new s(this, e, t); return n.jqDeferred.promise(a(this)) }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var t = this;
            e.on("confirm", function(e, n) { return t.confirm(e.isLoaded, n), !0 }), e.check()
        }, f.prototype.confirm = function(e, t) { this.isLoaded = e, this.emit("confirm", this, t) };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) { this.confirm(!0, "onload"), this.unbindProxyEvents(e) }, c.prototype.onerror = function(e) { this.confirm(!1, "onerror"), this.unbindProxyEvents(e) }, c.prototype.confirm = function(e, t) { this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t) }, c.prototype.unbindProxyEvents = function(e) { n.unbind(e.target, "load", this), n.unbind(e.target, "error", this) }, s
    });

/*!
 * SELECT
 */
! function(a) {
    "use strict";

    function b(b) { var c = [{ re: /[\xC0-\xC6]/g, ch: "A" }, { re: /[\xE0-\xE6]/g, ch: "a" }, { re: /[\xC8-\xCB]/g, ch: "E" }, { re: /[\xE8-\xEB]/g, ch: "e" }, { re: /[\xCC-\xCF]/g, ch: "I" }, { re: /[\xEC-\xEF]/g, ch: "i" }, { re: /[\xD2-\xD6]/g, ch: "O" }, { re: /[\xF2-\xF6]/g, ch: "o" }, { re: /[\xD9-\xDC]/g, ch: "U" }, { re: /[\xF9-\xFC]/g, ch: "u" }, { re: /[\xC7-\xE7]/g, ch: "c" }, { re: /[\xD1]/g, ch: "N" }, { re: /[\xF1]/g, ch: "n" }]; return a.each(c, function() { b = b.replace(this.re, this.ch) }), b }

    function c(a) {
        var b = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            c = "(?:" + Object.keys(b).join("|") + ")",
            d = new RegExp(c),
            e = new RegExp(c, "g"),
            f = null == a ? "" : "" + a;
        return d.test(f) ? f.replace(e, function(a) { return b[a] }) : f
    }

    function e(b, c) {
        var e = arguments,
            f = b,
            g = c;
        [].shift.apply(e);
        var h, i = this.each(function() {
            var b = a(this);
            if (b.is("select")) {
                var c = b.data("selectpicker"),
                    i = "object" == typeof f && f;
                if (c) {
                    if (i)
                        for (var k in i) i.hasOwnProperty(k) && (c.options[k] = i[k])
                } else {
                    var j = a.extend({}, d.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
                    b.data("selectpicker", c = new d(this, j, g))
                }
                "string" == typeof f && (h = c[f] instanceof Function ? c[f].apply(c, e) : c.options[f])
            }
        });
        return "undefined" != typeof h ? h : i
    }
    String.prototype.includes || ! function() {
        var a = {}.toString,
            b = function() {
                try {
                    var a = {},
                        b = Object.defineProperty,
                        c = b(a, a, a) && b
                } catch (a) {}
                return c
            }(),
            c = "".indexOf,
            d = function(b) {
                if (null == this) throw TypeError();
                var d = String(this);
                if (b && "[object RegExp]" == a.call(b)) throw TypeError();
                var e = d.length,
                    f = String(b),
                    g = f.length,
                    h = arguments.length > 1 ? arguments[1] : void 0,
                    i = h ? Number(h) : 0;
                i != i && (i = 0);
                var j = Math.min(Math.max(i, 0), e);
                return !(g + j > e) && c.call(d, f, i) != -1
            };
        b ? b(String.prototype, "includes", { value: d, configurable: !0, writable: !0 }) : String.prototype.includes = d
    }(), String.prototype.startsWith || ! function() {
        var a = function() {
                try {
                    var a = {},
                        b = Object.defineProperty,
                        c = b(a, a, a) && b
                } catch (a) {}
                return c
            }(),
            b = {}.toString,
            c = function(a) {
                if (null == this) throw TypeError();
                var c = String(this);
                if (a && "[object RegExp]" == b.call(a)) throw TypeError();
                var d = c.length,
                    e = String(a),
                    f = e.length,
                    g = arguments.length > 1 ? arguments[1] : void 0,
                    h = g ? Number(g) : 0;
                h != h && (h = 0);
                var i = Math.min(Math.max(h, 0), d);
                if (f + i > d) return !1;
                for (var j = -1; ++j < f;)
                    if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
                return !0
            };
        a ? a(String.prototype, "startsWith", { value: c, configurable: !0, writable: !0 }) : String.prototype.startsWith = c
    }(), Object.keys || (Object.keys = function(a, b, c) { c = []; for (b in a) c.hasOwnProperty.call(a, b) && c.push(b); return c }), a.expr[":"].icontains = function(b, c, d) {
        var e = a(b),
            f = (e.data("tokens") || e.text()).toUpperCase();
        return f.includes(d[3].toUpperCase())
    }, a.expr[":"].ibegins = function(b, c, d) {
        var e = a(b),
            f = (e.data("tokens") || e.text()).toUpperCase();
        return f.startsWith(d[3].toUpperCase())
    }, a.expr[":"].aicontains = function(b, c, d) {
        var e = a(b),
            f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
        return f.includes(d[3].toUpperCase())
    }, a.expr[":"].aibegins = function(b, c, d) {
        var e = a(b),
            f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
        return f.startsWith(d[3].toUpperCase())
    };
    var d = function(b, c, e) { e && (e.stopPropagation(), e.preventDefault()), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = d.prototype.val, this.render = d.prototype.render, this.refresh = d.prototype.refresh, this.setStyle = d.prototype.setStyle, this.selectAll = d.prototype.selectAll, this.deselectAll = d.prototype.deselectAll, this.destroy = d.prototype.remove, this.remove = d.prototype.remove, this.show = d.prototype.show, this.hide = d.prototype.hide, this.init() };
    d.VERSION = "1.7.2", d.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results matched {0}", countSelectedText: function(a, b) { return 1 == a ? "{0} item selected" : "{0} items selected" }, maxOptionsText: function(a, b) { return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"] }, selectAllText: "Select All", deselectAllText: "Deselect All", doneButton: !1, doneButtonText: "Close", multipleSeparator: ", ", styleBase: "btn", style: "btn-default", size: "auto", title: null, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, liveSearchPlaceholder: null, liveSearchNormalize: !1, liveSearchStyle: "contains", actionsBox: !1, iconBase: "glyphicon", tickIcon: "glyphicon-ok", maxOptions: !1, mobile: !1, selectOnTab: !1, dropdownAlignRight: !1 }, d.prototype = {
        constructor: d,
        init: function() {
            var b = this,
                c = this.$element.attr("id");
            this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function(a) { a.preventDefault(), b.$button.focus() })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on("hide.bs.dropdown", function(a) { b.$element.trigger("hide.bs.select", a) }), this.$newElement.on("hidden.bs.dropdown", function(a) { b.$element.trigger("hidden.bs.select", a) }), this.$newElement.on("show.bs.dropdown", function(a) { b.$element.trigger("show.bs.select", a) }), this.$newElement.on("shown.bs.dropdown", function(a) { b.$element.trigger("shown.bs.select", a) }), setTimeout(function() { b.$element.trigger("loaded.bs.select") })
        },
        createDropdown: function() {
            var b = this.multiple ? " show-tick" : "",
                d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                e = this.autofocus ? " autofocus" : "",
                f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                i = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                j = '<div class="btn-group bootstrap-select' + b + d + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + '><span class="filter-option pull-left"></span>&nbsp;<span class="fa fa-angle-down"></span></button><div class="dropdown-menu open">' + f + g + h + '<ul class="dropdown-menu inner" role="menu"></ul>' + i + "</div></div>";
            return a(j)
        },
        createView: function() {
            var a = this.createDropdown(),
                b = this.createLi();
            return a.find("ul")[0].innerHTML = b, a
        },
        reloadLi: function() {
            this.destroyLi();
            var a = this.createLi();
            this.$menuInner[0].innerHTML = a
        },
        destroyLi: function() { this.$menu.find("li").remove() },
        createLi: function() {
            var d = this,
                e = [],
                f = 0,
                g = document.createElement("option"),
                h = -1,
                i = function(a, b, c, d) { return "<li" + ("undefined" != typeof c & "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b & null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d & null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>" },
                j = function(a, e, f, g) { return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + ("undefined" != typeof f ? ' style="' + f + '"' : "") + (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ">" + a + '<span class="' + d.options.iconBase + " " + d.options.tickIcon + ' check-mark"></span></a>' };
            if (this.options.title && !this.multiple && (h--, !this.$element.find(".bs-title-option").length)) {
                var k = this.$element[0];
                g.className = "bs-title-option", g.appendChild(document.createTextNode(this.options.title)), g.value = "", k.insertBefore(g, k.firstChild), null === k.options[k.selectedIndex].getAttribute("selected") && (g.selected = !0)
            }
            return this.$element.find("option").each(function(b) {
                var c = a(this);
                if (h++, !c.hasClass("bs-title-option")) {
                    var g = this.className || "",
                        k = this.style.cssText,
                        l = c.data("content") ? c.data("content") : c.html(),
                        m = c.data("tokens") ? c.data("tokens") : null,
                        n = "undefined" != typeof c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : "",
                        o = "undefined" != typeof c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : "",
                        p = this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled;
                    if ("" !== o && p && (o = "<span>" + o + "</span>"), d.options.hideDisabled && p) return void h--;
                    if (c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"), "OPTGROUP" === this.parentElement.tagName && c.data("divider") !== !0) {
                        if (0 === c.index()) {
                            f += 1;
                            var q = this.parentElement.label,
                                r = "undefined" != typeof c.parent().data("subtext") ? '<small class="text-muted">' + c.parent().data("subtext") + "</small>" : "",
                                s = c.parent().data("icon") ? '<span class="' + d.options.iconBase + " " + c.parent().data("icon") + '"></span> ' : "",
                                t = " " + this.parentElement.className || "";
                            q = s + '<span class="text">' + q + r + "</span>", 0 !== b && e.length > 0 && (h++, e.push(i("", null, "divider", f + "div"))), h++, e.push(i(q, null, "dropdown-header" + t, f))
                        }
                        e.push(i(j(l, "opt " + g + t, k, m), b, "", f))
                    } else c.data("divider") === !0 ? e.push(i("", b, "divider")) : c.data("hidden") === !0 ? e.push(i(j(l, g, k, m), b, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (h++, e.push(i("", null, "divider", f + "div"))), e.push(i(j(l, g, k, m), b)));
                    d.liObj[b] = h
                }
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), e.join("")
        },
        findLis: function() { return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis },
        render: function(b) {
            var d, c = this;
            b !== !1 && this.$element.find("option").each(function(a) {
                var b = c.findLis().eq(c.liObj[a]);
                c.setDisabled(a, this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled, b), c.setSelected(a, this.selected, b)
            }), this.tabIndex();
            var e = this.$element.find("option").map(function() {
                    if (this.selected) {
                        if (c.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled)) return !1;
                        var e, b = a(this),
                            d = b.data("icon") && c.options.showIcon ? '<i class="' + c.options.iconBase + " " + b.data("icon") + '"></i> ' : "";
                        return e = c.options.showSubtext && b.data("subtext") && !c.multiple ? ' <small class="text-muted">' + b.data("subtext") + "</small>" : "", "undefined" != typeof b.attr("title") ? b.attr("title") : b.data("content") && c.options.showContent ? b.data("content") : d + b.html() + e
                    }
                }).toArray(),
                f = this.multiple ? e.join(this.options.multipleSeparator) : e[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var g = this.options.selectedTextFormat.split(">");
                if (g.length > 1 && e.length > g[1] || 1 == g.length && e.length >= 2) {
                    d = this.options.hideDisabled ? ", [disabled]" : "";
                    var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + d).length,
                        i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText;
                    f = i.replace("{0}", e.length.toString()).replace("{1}", h.toString())
                }
            }
            void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (f = this.options.title), f || (f = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(f), this.$element.trigger("rendered.bs.select")
        },
        setStyle: function(a, b) { this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")); var c = a ? a : this.options.style; "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c)) },
        liHeight: function(b) {
            if (b || this.options.size !== !1 && !this.sizeInfo) {
                var c = document.createElement("div"),
                    d = document.createElement("div"),
                    e = document.createElement("ul"),
                    f = document.createElement("li"),
                    g = document.createElement("li"),
                    h = document.createElement("a"),
                    i = document.createElement("span"),
                    j = this.options.header ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                    k = this.options.liveSearch ? document.createElement("div") : null,
                    l = this.options.actionsBox && this.multiple ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                    m = this.options.doneButton && this.multiple ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
                    var n = document.createElement("span");
                    k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k)
                }
                l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);
                var o = h.offsetHeight,
                    p = j ? j.offsetHeight : 0,
                    q = k ? k.offsetHeight : 0,
                    r = l ? l.offsetHeight : 0,
                    s = m ? m.offsetHeight : 0,
                    t = a(f).outerHeight(!0),
                    u = !!getComputedStyle && getComputedStyle(d),
                    v = u ? a(d) : null,
                    w = parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
                    x = w + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2;
                document.body.removeChild(c), this.sizeInfo = { liHeight: o, headerHeight: p, searchHeight: q, actionsHeight: r, doneButtonHeight: s, dividerHeight: t, menuPadding: w, menuExtras: x }
            }
        },
        setSize: function() {
            this.findLis(), this.liHeight();
            var p, q, r, s, b = this,
                c = this.$menu,
                d = this.$menuInner,
                e = a(window),
                f = this.$newElement[0].offsetHeight,
                g = this.sizeInfo.liHeight,
                h = this.sizeInfo.headerHeight,
                i = this.sizeInfo.searchHeight,
                j = this.sizeInfo.actionsHeight,
                k = this.sizeInfo.doneButtonHeight,
                l = this.sizeInfo.dividerHeight,
                m = this.sizeInfo.menuPadding,
                n = this.sizeInfo.menuExtras,
                o = this.options.hideDisabled ? ".disabled" : "",
                t = function() { r = b.$newElement.offset().top - e.scrollTop(), s = e.height() - r - f };
            if (t(), this.options.header && c.css("padding-top", 0), "auto" === this.options.size) {
                var u = function() {
                    var e, f = function(b, c) { return function(d) { return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b)) } },
                        l = b.$menuInner[0].getElementsByTagName("li"),
                        o = Array.prototype.filter ? Array.prototype.filter.call(l, f("hidden", !1)) : b.$lis.not(".hidden"),
                        u = Array.prototype.filter ? Array.prototype.filter.call(o, f("dropdown-header", !0)) : o.filter(".dropdown-header");
                    t(), p = s - n, b.options.container ? (c.data("height") || c.data("height", c.height()), q = c.data("height")) : q = c.height(), b.options.dropupAuto && b.$newElement.toggleClass("dropup", r > s && p - n < q), b.$newElement.hasClass("dropup") && (p = r - n), e = o.length + u.length > 3 ? 3 * g + n - 2 : 0, c.css({ "max-height": p + "px", overflow: "hidden", "min-height": e + h + i + j + k + "px" }), d.css({ "max-height": p - h - i - j - k - m + "px", "overflow-y": "auto", "min-height": Math.max(e - m, 0) + "px" })
                };
                u(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", u), e.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", u)
            } else if (this.options.size && "auto" != this.options.size && this.$lis.not(o).length > this.options.size) {
                var v = this.$lis.not(".divider").not(o).children().slice(0, this.options.size).last().parent().index(),
                    w = this.$lis.slice(0, v + 1).filter(".divider").length;
                p = g * this.options.size + w * l + m, b.options.container ? (c.data("height") || c.data("height", c.height()), q = c.data("height")) : q = c.height(), b.options.dropupAuto && this.$newElement.toggleClass("dropup", r > s && p - n < q), c.css({ "max-height": p + h + i + j + k + "px", overflow: "hidden", "min-height": "" }), d.css({ "max-height": p - m + "px", "overflow-y": "auto", "min-height": "" })
            }
        },
        setWidth: function() {
            if ("auto" === this.options.width) {
                this.$menu.css("min-width", "0");
                var a = this.$menu.parent().clone().appendTo("body"),
                    b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
                    c = a.children(".dropdown-menu").outerWidth(),
                    d = b.css("width", "auto").children("button").outerWidth();
                a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px")
            } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
        },
        selectPosition: function() {
            var e, f, b = this,
                c = "<div />",
                d = a(c),
                g = function(a) { d.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), e = a.offset(), f = a.hasClass("dropup") ? 0 : a[0].offsetHeight, d.css({ top: e.top + f, left: e.left, width: a[0].offsetWidth, position: "absolute" }) };
            this.$newElement.on("click", function() { b.isDisabled() || (g(a(this)), d.appendTo(b.options.container), d.toggleClass("open", !a(this).hasClass("open")), d.append(b.$menu)) }), a(window).on("resize scroll", function() { g(b.$newElement) }), this.$element.on("hide.bs.select", function() { b.$menu.data("height", b.$menu.height()), d.detach() })
        },
        setSelected: function(a, b, c) {
            if (!c) var c = this.findLis().eq(this.liObj[a]);
            c.toggleClass("selected", b)
        },
        setDisabled: function(a, b, c) {
            if (!c) var c = this.findLis().eq(this.liObj[a]);
            b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
        },
        isDisabled: function() { return this.$element[0].disabled },
        checkDisabled: function() {
            var a = this;
            this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() { return !a.isDisabled() })
        },
        tabIndex: function() { this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))) },
        clickListener: function() {
            var b = this,
                c = a(document);
            this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(a) { a.stopPropagation() }), c.data("spaceSelect", !1), this.$button.on("keyup", function(a) { /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1)) }), this.$newElement.on("click", function() {
                b.setSize(), b.$element.on("shown.bs.select", function() {
                    if (b.options.liveSearch || b.multiple) {
                        if (!b.multiple) {
                            var a = b.liObj[b.$element[0].selectedIndex];
                            if ("number" != typeof a) return;
                            var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
                            c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c
                        }
                    } else b.$menu.find(".selected a").focus()
                })
            }), this.$menu.on("click", "li a", function(c) {
                var d = a(this),
                    e = d.parent().data("originalIndex"),
                    f = b.$element.val(),
                    g = b.$element.prop("selectedIndex");
                if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
                    var h = b.$element.find("option"),
                        i = h.eq(e),
                        j = i.prop("selected"),
                        k = i.parent("optgroup"),
                        l = b.options.maxOptions,
                        m = k.data("maxOptions") || !1;
                    if (b.multiple) {
                        if (i.prop("selected", !j), b.setSelected(e, !j), d.blur(), l !== !1 || m !== !1) {
                            var n = l < h.filter(":selected").length,
                                o = m < k.find("option:selected").length;
                            if (l && n || m && o)
                                if (l && 1 == l) h.prop("selected", !1), i.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                                else if (m && 1 == m) {
                                k.find("option:selected").prop("selected", !1), i.prop("selected", !0);
                                var p = d.parent().data("optgroup");
                                b.$menu.find('[data-optgroup="' + p + '"]').removeClass("selected"), b.setSelected(e, !0)
                            } else {
                                var q = "function" == typeof b.options.maxOptionsText ? b.options.maxOptionsText(l, m) : b.options.maxOptionsText,
                                    r = q[0].replace("{n}", l),
                                    s = q[1].replace("{n}", m),
                                    t = a('<div class="notify"></div>');
                                q[2] && (r = r.replace("{var}", q[2][l > 1 ? 0 : 1]), s = s.replace("{var}", q[2][m > 1 ? 0 : 1])), i.prop("selected", !1), b.$menu.append(t), l && n && (t.append(a("<div>" + r + "</div>")), b.$element.trigger("maxReached.bs.select")), m && o && (t.append(a("<div>" + s + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() { b.setSelected(e, !1) }, 10), t.delay(750).fadeOut(300, function() { a(this).remove() })
                            }
                        }
                    } else h.prop("selected", !1), i.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                    b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (f != b.$element.val() && b.multiple || g != b.$element.prop("selectedIndex") && !b.multiple) && (b.$element.change(), b.$element.trigger("changed.bs.select", [e, i.prop("selected"), j]))
                }
            }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(c) { c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus()) }), this.$menu.on("click", "li.divider, li.dropdown-header", function(a) { a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus() }), this.$menu.on("click", ".popover-title .close", function() { b.$button.click() }), this.$searchbox.on("click", function(a) { a.stopPropagation() }), this.$menu.on("click", ".actions-btn", function(c) { b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll(), b.$element.change() }), this.$element.change(function() { b.render(!1) })
        },
        liveSearchListener: function() {
            var d = this,
                e = a('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function() { d.$menuInner.find(".active").removeClass("active"), d.$searchbox.val() && (d.$searchbox.val(""), d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove()), d.multiple || d.$menuInner.find(".selected").addClass("active"), setTimeout(function() { d.$searchbox.focus() }, 10) }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(a) { a.stopPropagation() }), this.$searchbox.on("input propertychange", function() {
                if (d.$searchbox.val()) {
                    var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
                    f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + "(" + b(d.$searchbox.val()) + ")") : f.not(":" + d._searchStyle() + "(" + d.$searchbox.val() + ")"), f.parent().addClass("hidden"), d.$lis.filter(".dropdown-header").each(function() {
                        var b = a(this),
                            c = b.data("optgroup");
                        0 === d.$lis.filter("[data-optgroup=" + c + "]").not(b).not(".hidden").length && (b.addClass("hidden"), d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden"))
                    });
                    var g = d.$lis.not(".hidden");
                    g.each(function(b) {
                        var c = a(this);
                        c.hasClass("divider") && (c.index() === g.eq(0).index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden")
                    }), d.$lis.not(".hidden, .no-results").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(), e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(), d.$menuInner.append(e))
                } else d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove();
                d.$lis.filter(".active").removeClass("active"), d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), a(this).focus()
            })
        },
        _searchStyle: function() {
            var a = "icontains";
            switch (this.options.liveSearchStyle) {
                case "begins":
                case "startsWith":
                    a = "ibegins";
                    break;
                case "contains":
            }
            return a
        },
        val: function(a) { return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val() },
        selectAll: function() { this.findLis(), this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected", !0), this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").addClass("selected"), this.render(!1) },
        deselectAll: function() { this.findLis(), this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected", !1), this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").removeClass("selected"), this.render(!1) },
        keydown: function(c) {
            var f, h, i, j, k, l, m, n, o, d = a(this),
                e = d.is("input") ? d.parent().parent() : d.parent(),
                g = e.data("this"),
                p = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                q = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" };
            if (g.options.liveSearch && (e = d.parent().parent()), g.options.container && (e = g.$menu), f = a("[role=menu] li a", e), o = g.$menu.parent().hasClass("open"), !o && (c.keyCode >= 48 && c.keyCode <= 57 || event.keyCode >= 65 && event.keyCode <= 90) && (g.options.container ? g.$newElement.trigger("click") : (g.setSize(), g.$menu.parent().addClass("open"), o = !0), g.$searchbox.focus()), g.options.liveSearch && (/(^9$|27)/.test(c.keyCode.toString(10)) && o && 0 === g.$menu.find(".active").length && (c.preventDefault(), g.$menu.parent().removeClass("open"), g.options.container && g.$newElement.removeClass("open"), g.$button.focus()), f = a("[role=menu] li:not(.disabled, .hidden, .dropdown-header, .divider)", e), d.val() || /(38|40)/.test(c.keyCode.toString(10)) || 0 === f.filter(".active").length && (f = g.$newElement.find("li"), f = g.options.liveSearchNormalize ? f.filter(":a" + g._searchStyle() + "(" + b(q[c.keyCode]) + ")") : f.filter(":" + g._searchStyle() + "(" + q[c.keyCode] + ")"))), f.length) {
                if (/(38|40)/.test(c.keyCode.toString(10))) h = f.index(f.filter(":focus")), j = f.parent(p).first().data("originalIndex"), k = f.parent(p).last().data("originalIndex"), i = f.eq(h).parent().nextAll(p).eq(0).data("originalIndex"), l = f.eq(h).parent().prevAll(p).eq(0).data("originalIndex"), m = f.eq(i).parent().prevAll(p).eq(0).data("originalIndex"), g.options.liveSearch && (f.each(function(b) { a(this).hasClass("disabled") || a(this).data("index", b) }), h = f.index(f.filter(".active")), j = f.first().data("index"), k = f.last().data("index"), i = f.eq(h).nextAll().eq(0).data("index"), l = f.eq(h).prevAll().eq(0).data("index"), m = f.eq(i).prevAll().eq(0).data("index")), n = d.data("prevIndex"), 38 == c.keyCode ? (g.options.liveSearch && (h -= 1), h != m && h > l && (h = l), h < j && (h = j), h == n && (h = k)) : 40 == c.keyCode && (g.options.liveSearch && (h += 1), h == -1 && (h = 0), h != m && h < i && (h = i), h > k && (h = k), h == n && (h = j)), d.data("prevIndex", h), g.options.liveSearch ? (c.preventDefault(), d.hasClass("dropdown-toggle") || (f.removeClass("active").eq(h).addClass("active").children("a").focus(), d.focus())) : f.eq(h).focus();
                else if (!d.is("input")) {
                    var s, t, r = [];
                    f.each(function() { a(this).parent().hasClass("disabled") || a.trim(a(this).text().toLowerCase()).substring(0, 1) == q[c.keyCode] && r.push(a(this).parent().index()) }), s = a(document).data("keycount"), s++, a(document).data("keycount", s), t = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), t != q[c.keyCode] ? (s = 1, a(document).data("keycount", s)) : s >= r.length && (a(document).data("keycount", 0), s > r.length && (s = 1)), f.eq(r[s - 1]).focus()
                }
                if ((/(13|32)/.test(c.keyCode.toString(10)) || /(^9$)/.test(c.keyCode.toString(10)) && g.options.selectOnTab) && o) {
                    if (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(), g.options.liveSearch) /(32)/.test(c.keyCode.toString(10)) || (g.$menu.find(".active a").click(), d.focus());
                    else {
                        var u = a(":focus");
                        u.click(), u.focus(), c.preventDefault(), a(document).data("spaceSelect", !0)
                    }
                    a(document).data("keycount", 0)
                }(/(^9$|27)/.test(c.keyCode.toString(10)) && o && (g.multiple || g.options.liveSearch) || /(27)/.test(c.keyCode.toString(10)) && !o) && (g.$menu.parent().removeClass("open"), g.options.container && g.$newElement.removeClass("open"), g.$button.focus())
            }
        },
        mobile: function() { this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide() },
        refresh: function() { this.$lis = null, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select") },
        hide: function() { this.$newElement.hide() },
        show: function() { this.$newElement.show() },
        remove: function() { this.$newElement.remove(), this.$element.remove() }
    };
    var f = a.fn.selectpicker;
    a.fn.selectpicker = e, a.fn.selectpicker.Constructor = d, a.fn.selectpicker.noConflict = function() { return a.fn.selectpicker = f, this }, a(document).data("keycount", 0).on("keydown", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', d.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(a) { a.stopPropagation() }), a(window).on("load.bs.select.data-api", function() {
        a(".selectpicker").each(function() {
            var b = a(this);
            e.call(b, b.data())
        })
    })
}(jQuery);

/*!
 * RETINA
 */
"use strict";

function arrayify(a) { return Array.prototype.slice.call(a) }

function chooseCap(a) { var b = parseInt(a, 10); return environment < b ? environment : b }

function forceOriginalDimensions(a) { return a.hasAttribute("data-no-resize") || (0 === a.offsetWidth && 0 === a.offsetHeight ? (a.setAttribute("width", a.naturalWidth), a.setAttribute("height", a.naturalHeight)) : (a.setAttribute("width", a.offsetWidth), a.setAttribute("height", a.offsetHeight))), a }

function setSourceIfAvailable(a, b) {
    var c = a.nodeName.toLowerCase(),
        d = document.createElement("img");
    d.addEventListener("load", function() { "img" === c ? forceOriginalDimensions(a).setAttribute("src", b) : a.style.backgroundImage = "url(" + b + ")" }), d.setAttribute("src", b), a.setAttribute(processedAttr, !0)
}

function dynamicSwapImage(a, b) {
    var c = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2],
        d = chooseCap(c);
    if (b && d > 1) {
        var e = b.replace(srcReplace, "@" + d + "x$1");
        setSourceIfAvailable(a, e)
    }
}

function manualSwapImage(a, b, c) { environment > 1 && setSourceIfAvailable(a, c) }

function getImages(a) { return a ? "function" == typeof a.forEach ? a : arrayify(a) : "undefined" != typeof document ? arrayify(document.querySelectorAll(selector)) : [] }

function cleanBgImg(a) { return a.style.backgroundImage.replace(inlineReplace, "$2") }

function retina(a) {
    getImages(a).forEach(function(a) {
        if (!a.getAttribute(processedAttr)) {
            var b = "img" === a.nodeName.toLowerCase(),
                c = b ? a.getAttribute("src") : cleanBgImg(a),
                d = a.getAttribute("data-rjs"),
                e = !isNaN(parseInt(d, 10));
            e ? dynamicSwapImage(a, c, d) : manualSwapImage(a, c, d)
        }
    })
}



/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
! function(factory) { "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], factory) : factory("undefined" != typeof module && module.exports ? require("jquery") : jQuery) }(function($) {
    "use strict";

    function init(options) {
        return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), this.each(function() {
            var $this = $(this),
                plugin = $this.data(PLUGIN_NS);
            plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin))
        })
    }

    function TouchSwipe(element, options) {
        function touchStart(jqEvent) {
            if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
                var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
                if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) {
                    var ret, touches = event.touches,
                        evt = touches ? touches[0] : event;
                    return phase = PHASE_START, touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), distance = 0, direction = null, currentDirection = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), createFingerData(0, evt), !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function() { $element.trigger("hold", [event.target]), options.hold && (ret = options.hold.call($element, event, event.target)) }, this), options.longTapThreshold)), setTouchInProgress(!0), null)
                }
            }
        }

        function touchMove(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
                var ret, touches = event.touches,
                    evt = touches ? touches[0] : event,
                    currentFinger = updateFingerData(evt);
                if (endTime = getTimeStamp(), touches && (fingerCount = touches.length), options.hold && clearTimeout(holdTimeout), phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]), endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) {
                    if (direction = calculateDirection(currentFinger.start, currentFinger.end), currentDirection = calculateDirection(currentFinger.last, currentFinger.end), validateDefaultEvent(jqEvent, currentDirection), distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), setMaxDistance(direction, distance), ret = triggerHandler(event, phase), !options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
                        var inBounds = !0;
                        if (options.triggerOnTouchLeave) {
                            var bounds = getbounds(this);
                            inBounds = isInBounds(currentFinger.end, bounds)
                        }!options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase)
                    }
                } else phase = PHASE_CANCEL, triggerHandler(event, phase);
                ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase))
            }
        }

        function touchEnd(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
                touches = event.touches;
            if (touches) { if (touches.length && !inMultiFingerRelease()) return startMultiFingerRelease(event), !0; if (touches.length && inMultiFingerRelease()) return !0 }
            return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease), endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL, triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), phase = PHASE_END, triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, triggerHandler(event, phase)), setTouchInProgress(!1), null
        }

        function touchCancel() { fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1) }

        function touchLeave(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase))
        }

        function removeListeners() { $element.unbind(START_EV, touchStart), $element.unbind(CANCEL_EV, touchCancel), $element.unbind(MOVE_EV, touchMove), $element.unbind(END_EV, touchEnd), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave), setTouchInProgress(!1) }

        function getNextPhase(currentPhase) {
            var nextPhase = currentPhase,
                validTime = validateSwipeTime(),
                validDistance = validateSwipeDistance(),
                didCancel = didSwipeBackToCancel();
            return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, nextPhase
        }

        function triggerHandler(event, phase) { var ret, touches = event.touches; return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)), (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)), ret }

        function triggerHandlerForGesture(event, phase, gesture) {
            var ret;
            if (gesture == SWIPE) {
                if ($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]), options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection), ret === !1)) return !1;
                if (phase == PHASE_END && validateSwipe()) {
                    if (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection), ret === !1)) return !1;
                    switch (direction) {
                        case LEFT:
                            $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case RIGHT:
                            $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case UP:
                            $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case DOWN:
                            $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection))
                    }
                }
            }
            if (gesture == PINCH) {
                if ($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData), ret === !1)) return !1;
                if (phase == PHASE_END && validatePinch()) switch (pinchDirection) {
                    case IN:
                        $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
                        break;
                    case OUT:
                        $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData))
                }
            }
            return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function() { doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)) }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), doubleTapStartTime = null, $element.trigger("doubletap", [event.target]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), doubleTapStartTime = null, $element.trigger("longtap", [event.target]), options.longTap && (ret = options.longTap.call($element, event, event.target)))), ret
        }

        function validateSwipeDistance() { var valid = !0; return null !== options.threshold && (valid = distance >= options.threshold), valid }

        function didSwipeBackToCancel() { var cancelled = !1; return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), cancelled }

        function validatePinchDistance() { return null !== options.pinchThreshold ? pinchDistance >= options.pinchThreshold : !0 }

        function validateSwipeTime() { var result; return result = options.maxTimeThreshold ? !(duration >= options.maxTimeThreshold) : !0 }

        function validateDefaultEvent(jqEvent, direction) {
            if (options.preventDefaultEvents !== !1)
                if (options.allowPageScroll === NONE) jqEvent.preventDefault();
                else {
                    var auto = options.allowPageScroll === AUTO;
                    switch (direction) {
                        case LEFT:
                            (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                            break;
                        case RIGHT:
                            (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                            break;
                        case UP:
                            (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                            break;
                        case DOWN:
                            (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                            break;
                        case NONE:
                    }
                }
        }

        function validatePinch() {
            var hasCorrectFingerCount = validateFingers(),
                hasEndPoint = validateEndPoint(),
                hasCorrectDistance = validatePinchDistance();
            return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance
        }

        function hasPinches() { return !!(options.pinchStatus || options.pinchIn || options.pinchOut) }

        function didPinch() { return !(!validatePinch() || !hasPinches()) }

        function validateSwipe() {
            var hasValidTime = validateSwipeTime(),
                hasValidDistance = validateSwipeDistance(),
                hasCorrectFingerCount = validateFingers(),
                hasEndPoint = validateEndPoint(),
                didCancel = didSwipeBackToCancel(),
                valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
            return valid
        }

        function hasSwipes() { return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown) }

        function didSwipe() { return !(!validateSwipe() || !hasSwipes()) }

        function validateFingers() { return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH }

        function validateEndPoint() { return 0 !== fingerData[0].end.x }

        function hasTap() { return !!options.tap }

        function hasDoubleTap() { return !!options.doubleTap }

        function hasLongTap() { return !!options.longTap }

        function validateDoubleTap() { if (null == doubleTapStartTime) return !1; var now = getTimeStamp(); return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold }

        function inDoubleTap() { return validateDoubleTap() }

        function validateTap() { return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold) }

        function validateLongTap() { return duration > options.longTapThreshold && DOUBLE_TAP_THRESHOLD > distance }

        function didTap() { return !(!validateTap() || !hasTap()) }

        function didDoubleTap() { return !(!validateDoubleTap() || !hasDoubleTap()) }

        function didLongTap() { return !(!validateLongTap() || !hasLongTap()) }

        function startMultiFingerRelease(event) { previousTouchEndTime = getTimeStamp(), fingerCountAtRelease = event.touches.length + 1 }

        function cancelMultiFingerRelease() { previousTouchEndTime = 0, fingerCountAtRelease = 0 }

        function inMultiFingerRelease() {
            var withinThreshold = !1;
            if (previousTouchEndTime) {
                var diff = getTimeStamp() - previousTouchEndTime;
                diff <= options.fingerReleaseThreshold && (withinThreshold = !0)
            }
            return withinThreshold
        }

        function getTouchInProgress() { return !($element.data(PLUGIN_NS + "_intouch") !== !0) }

        function setTouchInProgress(val) { $element && (val === !0 ? ($element.bind(MOVE_EV, touchMove), $element.bind(END_EV, touchEnd), LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) : ($element.unbind(MOVE_EV, touchMove, !1), $element.unbind(END_EV, touchEnd, !1), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)), $element.data(PLUGIN_NS + "_intouch", val === !0)) }

        function createFingerData(id, evt) { var f = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } }; return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX, f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY, fingerData[id] = f, f }

        function updateFingerData(evt) {
            var id = void 0 !== evt.identifier ? evt.identifier : 0,
                f = getFingerData(id);
            return null === f && (f = createFingerData(id, evt)), f.last.x = f.end.x, f.last.y = f.end.y, f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f
        }

        function getFingerData(id) { return fingerData[id] || null }

        function setMaxDistance(direction, distance) { direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance) }

        function getMaxDistance(direction) { return maximumsMap[direction] ? maximumsMap[direction].distance : void 0 }

        function createMaximumsData() { var maxData = {}; return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData }

        function createMaximumVO(dir) { return { direction: dir, distance: 0 } }

        function calculateDuration() { return endTime - startTime }

        function calculateTouchesDistance(startPoint, endPoint) {
            var diffX = Math.abs(startPoint.x - endPoint.x),
                diffY = Math.abs(startPoint.y - endPoint.y);
            return Math.round(Math.sqrt(diffX * diffX + diffY * diffY))
        }

        function calculatePinchZoom(startDistance, endDistance) { var percent = endDistance / startDistance * 1; return percent.toFixed(2) }

        function calculatePinchDirection() { return 1 > pinchZoom ? OUT : IN }

        function calculateDistance(startPoint, endPoint) { return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2))) }

        function calculateAngle(startPoint, endPoint) {
            var x = startPoint.x - endPoint.x,
                y = endPoint.y - startPoint.y,
                r = Math.atan2(y, x),
                angle = Math.round(180 * r / Math.PI);
            return 0 > angle && (angle = 360 - Math.abs(angle)), angle
        }

        function calculateDirection(startPoint, endPoint) { if (comparePoints(startPoint, endPoint)) return NONE; var angle = calculateAngle(startPoint, endPoint); return 45 >= angle && angle >= 0 ? LEFT : 360 >= angle && angle >= 315 ? LEFT : angle >= 135 && 225 >= angle ? RIGHT : angle > 45 && 135 > angle ? DOWN : UP }

        function getTimeStamp() { var now = new Date; return now.getTime() }

        function getbounds(el) {
            el = $(el);
            var offset = el.offset(),
                bounds = { left: offset.left, right: offset.left + el.outerWidth(), top: offset.top, bottom: offset.top + el.outerHeight() };
            return bounds
        }

        function isInBounds(point, bounds) { return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom }

        function comparePoints(pointA, pointB) { return pointA.x == pointB.x && pointA.y == pointB.y }
        var options = $.extend({}, options),
            useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents,
            START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
            END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
            LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave",
            CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel",
            distance = 0,
            direction = null,
            currentDirection = null,
            duration = 0,
            startTouchesDistance = 0,
            endTouchesDistance = 0,
            pinchZoom = 1,
            pinchDistance = 0,
            pinchDirection = 0,
            maximumsMap = null,
            $element = $(element),
            phase = "start",
            fingerCount = 0,
            fingerData = {},
            startTime = 0,
            endTime = 0,
            previousTouchEndTime = 0,
            fingerCountAtRelease = 0,
            doubleTapStartTime = 0,
            singleTapTimeout = null,
            holdTimeout = null;
        try { $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel) } catch (e) { $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe") }
        this.enable = function() { return this.disable(), $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel), $element }, this.disable = function() { return removeListeners(), $element }, this.destroy = function() { removeListeners(), $element.data(PLUGIN_NS, null), $element = null }, this.option = function(property, value) {
            if ("object" == typeof property) options = $.extend(options, property);
            else if (void 0 !== options[property]) {
                if (void 0 === value) return options[property];
                options[property] = value
            } else {
                if (!property) return options;
                $.error("Option " + property + " does not exist on jQuery.swipe.options")
            }
            return null
        }
    }
    var VERSION = "1.6.18",
        LEFT = "left",
        RIGHT = "right",
        UP = "up",
        DOWN = "down",
        IN = "in",
        OUT = "out",
        NONE = "none",
        AUTO = "auto",
        SWIPE = "swipe",
        PINCH = "pinch",
        TAP = "tap",
        DOUBLE_TAP = "doubletap",
        LONG_TAP = "longtap",
        HORIZONTAL = "horizontal",
        VERTICAL = "vertical",
        ALL_FINGERS = "all",
        DOUBLE_TAP_THRESHOLD = 10,
        PHASE_START = "start",
        PHASE_MOVE = "move",
        PHASE_END = "end",
        PHASE_CANCEL = "cancel",
        SUPPORTS_TOUCH = "ontouchstart" in window,
        SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,
        SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
        PLUGIN_NS = "TouchSwipe",
        defaults = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: !0, triggerOnTouchLeave: !1, allowPageScroll: "auto", fallbackToMouseEvents: !0, excludedElements: ".noSwipe", preventDefaultEvents: !0 };
    $.fn.swipe = function(method) {
        var $this = $(this),
            plugin = $this.data(PLUGIN_NS);
        if (plugin && "string" == typeof method) {
            if (plugin[method]) return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
            $.error("Method " + method + " does not exist on jQuery.swipe")
        } else if (plugin && "object" == typeof method) plugin.option.apply(plugin, arguments);
        else if (!(plugin || "object" != typeof method && method)) return init.apply(this, arguments);
        return $this
    }, $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = { PHASE_START: PHASE_START, PHASE_MOVE: PHASE_MOVE, PHASE_END: PHASE_END, PHASE_CANCEL: PHASE_CANCEL }, $.fn.swipe.directions = { LEFT: LEFT, RIGHT: RIGHT, UP: UP, DOWN: DOWN, IN: IN, OUT: OUT }, $.fn.swipe.pageScroll = { NONE: NONE, HORIZONTAL: HORIZONTAL, VERTICAL: VERTICAL, AUTO: AUTO }, $.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: ALL_FINGERS }
});

/*Bootstrap Carousel Touch Slider. 
 Credits: Bootstrap, jQuery, TouchSwipe, Animate.css, FontAwesome
 */

(function($) {
    "use strict";

    $.fn.bsTouchSlider = function(options) {
        var carousel = $(".carousel");
        return this.each(function() {

            function doAnimations(elems) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elems.each(function() {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function() {
                        $this.removeClass($animationType);
                    });
                });
            }

            //Variables on page load
            var $firstAnimatingElems = carousel.find('.item:first').find("[data-animation ^= 'animated']");
            //Initialize carousel
            carousel.carousel();
            //Animate captions in first slide on page load
            doAnimations($firstAnimatingElems);
            //Other slides to be animated on carousel slide event
            carousel.on('slide.bs.carousel', function(e) {
                var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });
            //swipe initial 
            $(".carousel .carousel-inner").swipe({
                swipeLeft: function(event, direction, distance, duration, fingerCount) {
                    this.parent().carousel('next');
                },
                swipeRight: function() {
                    this.parent().carousel('prev');
                },
                threshold: 0
            });

        });
    };


})(jQuery);