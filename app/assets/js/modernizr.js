window.Modernizr = function(e, t, n) {
    function r(e) {
        m.cssText = e
    }
    function o(e, t) {
        return typeof e === t
    }
    var i,
        a,
        c,
        l = "2.6.2",
        s = {},
        u = !0,
        d = t.documentElement,
        f = "modernizr",
        p = t.createElement(f),
        m = p.style,
        h = {}.toString,
        v = " -webkit- -moz- -o- -ms- ".split(" "),
        y = {
            svg: "http://www.w3.org/2000/svg"
        },
        g = {},
        E = [],
        b = E.slice,
        S = function(e, n, r, o) {
            var i,
                a,
                c,
                l,
                s = t.createElement("div"),
                u = t.body,
                p = u || t.createElement("body");
            if (parseInt(r, 10))
                for (; r--;)
                    c = t.createElement("div"), c.id = o ? o[r] : f + (r + 1), s.appendChild(c);
            return i = ["&#173;", '<style id="s', f, '">', e, "</style>"].join(""), s.id = f, (u ? s : p).innerHTML += i, p.appendChild(s), u || (p.style.background = "", p.style.overflow = "hidden", l = d.style.overflow, d.style.overflow = "hidden", d.appendChild(p)), a = n(s, e), u ? s.parentNode.removeChild(s) : (p.parentNode.removeChild(p), d.style.overflow = l), !!a
        },
        C = function(t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n)
                return n(t).matches;
            var r;
            return S("@media " + t + " { #" + f + " { position: absolute; } }", function(t) {
                r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), r
        },
        w = {}.hasOwnProperty;
    c = o(w, "undefined") || o(w.call, "undefined") ? function(e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
        return w.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t)
            throw new TypeError;
        var n = b.call(arguments, 1),
            r = function() {
                if (this instanceof r) {
                    var o = function() {};
                    o.prototype = t.prototype;
                    var i = new o,
                        a = t.apply(i, n.concat(b.call(arguments)));
                    return Object(a) === a ? a : i
                }
                return t.apply(e, n.concat(b.call(arguments)))
            };
        return r
    }), g.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : S(["@media (", v.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = 9 === e.offsetTop
        }), n
    }, g.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(y.svg, "svg").createSVGRect
    }, g.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == y.svg
    }, g.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(h.call(t.createElementNS(y.svg, "clipPath")))
    };
    for (var j in g)
        c(g, j) && (a = j.toLowerCase(), s[a] = g[j](), E.push((s[a] ? "" : "no-") + a));
    return s.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var r in e)
                c(e, r) && s.addTest(r, e[r]);
        else {
            if (e = e.toLowerCase(), s[e] !== n)
                return s;
            t = "function" == typeof t ? t() : t, "undefined" != typeof u && u && (d.className += " " + (t ? "" : "no-") + e), s[e] = t
        }
        return s
    }, r(""), p = i = null, function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }
        function r() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function o(e) {
            var t = v[e[m]];
            return t || (t = {}, h++, e[m] = h, v[h] = t), t
        }
        function i(e, n, r) {
            if (n || (n = t), u)
                return n.createElement(e);
            r || (r = o(n));
            var i;
            return i = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), i.canHaveChildren && !f.test(e) ? r.frag.appendChild(i) : i
        }
        function a(e, n) {
            if (e || (e = t), u)
                return e.createDocumentFragment();
            n = n || o(e);
            for (var i = n.frag.cloneNode(), a = 0, c = r(), l = c.length; l > a; a++)
                i.createElement(c[a]);
            return i
        }
        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return y.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }
        function l(e) {
            e || (e = t);
            var r = o(e);
            return y.shivCSS && !s && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || c(e, r), e
        }
        var s,
            u,
            d = e.html5 || {},
            f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            m = "_html5shiv",
            h = 0,
            v = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", s = "hidden" in e, u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                s = !0, u = !0
            }
        }();
        var y = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: i,
            createDocumentFragment: a
        };
        e.html5 = y, l(t)
    }(this, t), s._version = l, s._prefixes = v, s.mq = C, s.testStyles = S, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (u ? " js " + E.join(" ") : ""), s
}(this, this.document), function(e, t, n) {
    function r(e) {
        return "[object Function]" == v.call(e)
    }
    function o(e) {
        return "string" == typeof e
    }
    function i() {}
    function a(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }
    function c() {
        var e = y.shift();
        g = 1, e ? e.t ? m(function() {
            ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), c()) : g = 0
    }
    function l(e, n, r, o, i, l, s) {
        function u(t) {
            if (!p && a(d.readyState) && (E.r = p = 1, !g && c(), d.onload = d.onreadystatechange = null, t)) {
                "img" != e && m(function() {
                    S.removeChild(d)
                }, 50);
                for (var r in M[n])
                    M[n].hasOwnProperty(r) && M[n][r].onload()
            }
        }
        var s = s || f.errorTimeout,
            d = t.createElement(e),
            p = 0,
            v = 0,
            E = {
                t: r,
                s: n,
                e: i,
                a: l,
                x: s
            };
        1 === M[n] && (v = 1, M[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
            u.call(this, v)
        }, y.splice(o, 0, E), "img" != e && (v || 2 === M[n] ? (S.insertBefore(d, b ? null : h), m(u, s)) : M[n].push(d))
    }
    function s(e, t, n, r, i) {
        return g = 0, t = t || "j", o(e) ? l("c" == t ? w : C, e, t, this.i++, n, r, i) : (y.splice(this.i++, 0, e), 1 == y.length && c()), this
    }
    function u() {
        var e = f;
        return e.loader = {
            load: s,
            i: 0
        }, e
    }
    var d,
        f,
        p = t.documentElement,
        m = e.setTimeout,
        h = t.getElementsByTagName("script")[0],
        v = {}.toString,
        y = [],
        g = 0,
        E = "MozAppearance" in p.style,
        b = E && !!t.createRange().compareNode,
        S = b ? p : h.parentNode,
        p = e.opera && "[object Opera]" == v.call(e.opera),
        p = !!t.attachEvent && !p,
        C = E ? "object" : p ? "script" : "img",
        w = p ? "script" : C,
        j = Array.isArray || function(e) {
            return "[object Array]" == v.call(e)
        },
        N = [],
        M = {},
        T = {
            timeout: function(e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        };
    f = function(e) {
        function t(e) {
            var t,
                n,
                r,
                e = e.split("!"),
                o = N.length,
                i = e.pop(),
                a = e.length,
                i = {
                    url: i,
                    origUrl: i,
                    prefixes: e
                };
            for (n = 0; a > n; n++)
                r = e[n].split("="), (t = T[r.shift()]) && (i = t(i, r));
            for (n = 0; o > n; n++)
                i = N[n](i);
            return i
        }
        function a(e, o, i, a, c) {
            var l = t(e),
                s = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = r(o) ? o : o[e] || o[a] || o[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, o, i, a, c) : (M[l.url] ? l.noexec = !0 : M[l.url] = 1, i.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (r(o) || r(s)) && i.load(function() {
                u(), o && o(l.origUrl, c, a), s && s(l.origUrl, c, a), M[l.url] = 2
            })))
        }
        function c(e, t) {
            function n(e, n) {
                if (e) {
                    if (o(e))
                        n || (d = function() {
                            var e = [].slice.call(arguments);
                            f.apply(this, e), p()
                        }), a(e, d, t, 0, s);
                    else if (Object(e) === e)
                        for (l in c = function() {
                            var t,
                                n = 0;
                            for (t in e)
                                e.hasOwnProperty(t) && n++;
                            return n
                        }(), e)
                            e.hasOwnProperty(l) && (!n && !--c && (r(d) ? d = function() {
                                var e = [].slice.call(arguments);
                                f.apply(this, e), p()
                            } : d[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(f[l])), a(e[l], d, t, l, s))
                } else
                    !n && p()
            }
            var c,
                l,
                s = !!e.test,
                u = e.load || e.both,
                d = e.callback || i,
                f = d,
                p = e.complete || i;
            n(s ? e.yep : e.nope, !!u), u && n(u)
        }
        var l,
            s,
            d = this.yepnope.loader;
        if (o(e))
            a(e, 0, d, 0);
        else if (j(e))
            for (l = 0; l < e.length; l++)
                s = e[l], o(s) ? a(s, 0, d, 0) : j(s) ? f(s) : Object(s) === s && c(s, d);
        else
            Object(e) === e && c(e, d)
    }, f.addPrefix = function(e, t) {
        T[e] = t
    }, f.addFilter = function(e) {
        N.push(e)
    }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
        t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
    }, 0)), e.yepnope = u(), e.yepnope.executeStack = c, e.yepnope.injectJs = function(e, n, r, o, l, s) {
        var u,
            d,
            p = t.createElement("script"),
            o = o || f.errorTimeout;
        p.src = e;
        for (d in r)
            p.setAttribute(d, r[d]);
        n = s ? c : n || i, p.onreadystatechange = p.onload = function() {
            !u && a(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
        }, m(function() {
            u || (u = 1, n(1))
        }, o), l ? p.onload() : h.parentNode.insertBefore(p, h)
    }, e.yepnope.injectCss = function(e, n, r, o, a, l) {
        var s,
            o = t.createElement("link"),
            n = l ? c : n || i;
        o.href = e, o.rel = "stylesheet", o.type = "text/css";
        for (s in r)
            o.setAttribute(s, r[s]);
        a || (h.parentNode.insertBefore(o, h), m(n, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("ie8compat", function() {
    return !window.addEventListener && document.documentMode && 7 === document.documentMode
});