/* esm.sh - esbuild bundle(react-dom@17.0.2/cjs/react-dom-server.browser.production.min.js) es2022 production */
const __object_assign$ = Object.assign; import __react$ from "./react.js"; var ze = Object.create; var ue = Object.defineProperty; var Te = Object.getOwnPropertyDescriptor; var Re = Object.getOwnPropertyNames; var Ve = Object.getPrototypeOf, Le = Object.prototype.hasOwnProperty; var se = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (r, t) => (typeof require < "u" ? require : r)[t] }) : e)(function (e) { if (typeof require < "u") return require.apply(this, arguments); throw new Error('Dynamic require of "' + e + '" is not supported') }); var We = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports); var qe = (e, r, t, n) => { if (r && typeof r == "object" || typeof r == "function") for (let u of Re(r)) !Le.call(e, u) && u !== t && ue(e, u, { get: () => r[u], enumerable: !(n = Te(r, u)) || n.enumerable }); return e }; var Ue = (e, r, t) => (t = e != null ? ze(Ve(e)) : {}, qe(r || !e || !e.__esModule ? ue(t, "default", { value: e, enumerable: !0 }) : t, e)); var Oe = We(z => {
  "use strict"; var D = __object_assign$, C = __react$; function p(e) { for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)r += "&args[]=" + encodeURIComponent(arguments[t]); return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } var Q = 60106, U = 60107, G = 60108, K = 60114, j = 60109, J = 60110, ee = 60112, A = 60113, te = 60120, re = 60115, ne = 60116, xe = 60121, ge = 60117, Se = 60119, ke = 60129, Fe = 60131; typeof Symbol == "function" && Symbol.for && (d = Symbol.for, Q = d("react.portal"), U = d("react.fragment"), G = d("react.strict_mode"), K = d("react.profiler"), j = d("react.provider"), J = d("react.context"), ee = d("react.forward_ref"), A = d("react.suspense"), te = d("react.suspense_list"), re = d("react.memo"), ne = d("react.lazy"), xe = d("react.block"), ge = d("react.fundamental"), Se = d("react.scope"), ke = d("react.debug_trace_mode"), Fe = d("react.legacy_hidden")); var d; function V(e) { if (e == null) return null; if (typeof e == "function") return e.displayName || e.name || null; if (typeof e == "string") return e; switch (e) { case U: return "Fragment"; case Q: return "Portal"; case K: return "Profiler"; case G: return "StrictMode"; case A: return "Suspense"; case te: return "SuspenseList" }if (typeof e == "object") switch (e.$$typeof) { case J: return (e.displayName || "Context") + ".Consumer"; case j: return (e._context.displayName || "Context") + ".Provider"; case ee: var r = e.render; return r = r.displayName || r.name || "", e.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"); case re: return V(e.type); case xe: return V(e._render); case ne: r = e._payload, e = e._init; try { return V(e(r)) } catch { } }return null } var je = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ie = {}; function W(e, r) { for (var t = e._threadCount | 0; t <= r; t++)e[t] = e._currentValue2, e._threadCount = t + 1 } function Ae(e, r, t, n) { if (n && (n = e.contextType, typeof n == "object" && n !== null)) return W(n, t), n[t]; if (e = e.contextTypes) { t = {}; for (var u in e) t[u] = r[u]; r = t } else r = Ie; return r } for (m = new Uint16Array(16), T = 0; 15 > T; T++)m[T] = T + 1; var m, T; m[15] = 0; var $e = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ae = Object.prototype.hasOwnProperty, ce = {}, fe = {}; function De(e) { return ae.call(fe, e) ? !0 : ae.call(ce, e) ? !1 : $e.test(e) ? fe[e] = !0 : (ce[e] = !0, !1) } function He(e, r, t, n) { if (t !== null && t.type === 0) return !1; switch (typeof r) { case "function": case "symbol": return !0; case "boolean": return n ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-"); default: return !1 } } function Ze(e, r, t, n) { if (r === null || typeof r > "u" || He(e, r, t, n)) return !0; if (n) return !1; if (t !== null) switch (t.type) { case 3: return !r; case 4: return r === !1; case 5: return isNaN(r); case 6: return isNaN(r) || 1 > r }return !1 } function x(e, r, t, n, u, i, l) { this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = n, this.attributeNamespace = u, this.mustUseProperty = t, this.propertyName = e, this.type = r, this.sanitizeURL = i, this.removeEmptyString = l } var y = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { y[e] = new x(e, 0, !1, e, null, !1, !1) });[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var r = e[0]; y[r] = new x(r, 1, !1, e[1], null, !1, !1) });["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { y[e] = new x(e, 2, !1, e.toLowerCase(), null, !1, !1) });["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { y[e] = new x(e, 2, !1, e, null, !1, !1) }); "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { y[e] = new x(e, 3, !1, e.toLowerCase(), null, !1, !1) });["checked", "multiple", "muted", "selected"].forEach(function (e) { y[e] = new x(e, 3, !0, e, null, !1, !1) });["capture", "download"].forEach(function (e) { y[e] = new x(e, 4, !1, e, null, !1, !1) });["cols", "rows", "size", "span"].forEach(function (e) { y[e] = new x(e, 6, !1, e, null, !1, !1) });["rowSpan", "start"].forEach(function (e) { y[e] = new x(e, 5, !1, e.toLowerCase(), null, !1, !1) }); var oe = /[\-:]([a-z])/g; function ie(e) { return e[1].toUpperCase() } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var r = e.replace(oe, ie); y[r] = new x(r, 1, !1, e, null, !1, !1) }); "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var r = e.replace(oe, ie); y[r] = new x(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1) });["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var r = e.replace(oe, ie); y[r] = new x(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1) });["tabIndex", "crossOrigin"].forEach(function (e) { y[e] = new x(e, 1, !1, e.toLowerCase(), null, !1, !1) }); y.xlinkHref = new x("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);["src", "href", "action", "formAction"].forEach(function (e) { y[e] = new x(e, 1, !1, e.toLowerCase(), null, !0, !0) }); var Be = /["'&<>]/; function O(e) { if (typeof e == "boolean" || typeof e == "number") return "" + e; e = "" + e; var r = Be.exec(e); if (r) { var t = "", n, u = 0; for (n = r.index; n < e.length; n++) { switch (e.charCodeAt(n)) { case 34: r = "&quot;"; break; case 38: r = "&amp;"; break; case 39: r = "&#x27;"; break; case 60: r = "&lt;"; break; case 62: r = "&gt;"; break; default: continue }u !== n && (t += e.substring(u, n)), u = n + 1, t += r } e = u !== n ? t + e.substring(u, n) : t } return e } function Xe(e, r) { var t = y.hasOwnProperty(e) ? y[e] : null, n; return (n = e !== "style") && (n = t !== null ? t.type === 0 : !(!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")), n || Ze(e, r, t, !1) ? "" : t !== null ? (e = t.attributeName, n = t.type, n === 3 || n === 4 && r === !0 ? e + '=""' : (t.sanitizeURL && (r = "" + r), e + '="' + (O(r) + '"'))) : De(e) ? e + '="' + (O(r) + '"') : "" } function Ye(e, r) { return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r } var Qe = typeof Object.is == "function" ? Object.is : Ye, E = null, q = null, c = null, R = !1, $ = !1, M = null, H = 0; function P() { if (E === null) throw Error(p(321)); return E } function pe() { if (0 < H) throw Error(p(312)); return { memoizedState: null, queue: null, next: null } } function le() { return c === null ? q === null ? (R = !1, q = c = pe()) : (R = !0, c = q) : c.next === null ? (R = !1, c = c.next = pe()) : (R = !0, c = c.next), c } function Ee(e, r, t, n) { for (; $;)$ = !1, H += 1, c = null, t = e(r, n); return Ce(), t } function Ce() { E = null, $ = !1, q = null, H = 0, c = M = null } function _e(e, r) { return typeof r == "function" ? r(e) : r } function he(e, r, t) { if (E = P(), c = le(), R) { var n = c.queue; if (r = n.dispatch, M !== null && (t = M.get(n), t !== void 0)) { M.delete(n), n = c.memoizedState; do n = e(n, t.action), t = t.next; while (t !== null); return c.memoizedState = n, [n, r] } return [c.memoizedState, r] } return e = e === _e ? typeof r == "function" ? r() : r : t !== void 0 ? t(r) : r, c.memoizedState = e, e = c.queue = { last: null, dispatch: null }, e = e.dispatch = Ge.bind(null, E, e), [c.memoizedState, e] } function de(e, r) { if (E = P(), c = le(), r = r === void 0 ? null : r, c !== null) { var t = c.memoizedState; if (t !== null && r !== null) { var n = t[1]; e: if (n === null) n = !1; else { for (var u = 0; u < n.length && u < r.length; u++)if (!Qe(r[u], n[u])) { n = !1; break e } n = !0 } if (n) return t[0] } } return e = e(), c.memoizedState = [e, r], e } function Ge(e, r, t) { if (!(25 > H)) throw Error(p(301)); if (e === E) if ($ = !0, e = { action: t, next: null }, M === null && (M = new Map), t = M.get(r), t === void 0) M.set(r, e); else { for (r = t; r.next !== null;)r = r.next; r.next = e } } function B() { } var b = null, Ke = { readContext: function (e) { var r = b.threadID; return W(e, r), e[r] }, useContext: function (e) { P(); var r = b.threadID; return W(e, r), e[r] }, useMemo: de, useReducer: he, useRef: function (e) { E = P(), c = le(); var r = c.memoizedState; return r === null ? (e = { current: e }, c.memoizedState = e) : r }, useState: function (e) { return he(_e, e) }, useLayoutEffect: function () { }, useCallback: function (e, r) { return de(function () { return e }, r) }, useImperativeHandle: B, useEffect: B, useDebugValue: B, useDeferredValue: function (e) { return P(), e }, useTransition: function () { return P(), [function (e) { e() }, !1] }, useOpaqueIdentifier: function () { return (b.identifierPrefix || "") + "R:" + (b.uniqueID++).toString(36) }, useMutableSource: function (e, r) { return P(), r(e._source) } }, me = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" }; function ye(e) { switch (e) { case "svg": return "http://www.w3.org/2000/svg"; case "math": return "http://www.w3.org/1998/Math/MathML"; default: return "http://www.w3.org/1999/xhtml" } } var Ne = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, Je = D({ menuitem: !0 }, Ne), L = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, et = ["Webkit", "ms", "Moz", "O"]; Object.keys(L).forEach(function (e) { et.forEach(function (r) { r = r + e.charAt(0).toUpperCase() + e.substring(1), L[r] = L[e] }) }); var tt = /([A-Z])/g, rt = /^ms-/, N = C.Children.toArray, X = je.ReactCurrentDispatcher, nt = { listing: !0, pre: !0, textarea: !0 }, ot = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ve = {}, Y = {}; function it(e) { if (e == null) return e; var r = ""; return C.Children.forEach(e, function (t) { t != null && (r += t) }), r } var lt = Object.prototype.hasOwnProperty, ut = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null }; function we(e, r) { if (e === void 0) throw Error(p(152, V(r) || "Component")) } function st(e, r, t) { function n(l, s) { var o = s.prototype && s.prototype.isReactComponent, S = Ae(s, r, t, o), h = [], g = !1, f = { isMounted: function () { return !1 }, enqueueForceUpdate: function () { if (h === null) return null }, enqueueReplaceState: function (Z, v) { g = !0, h = [v] }, enqueueSetState: function (Z, v) { if (h === null) return null; h.push(v) } }; if (o) { if (o = new s(l.props, S, f), typeof s.getDerivedStateFromProps == "function") { var a = s.getDerivedStateFromProps.call(null, l.props, o.state); a != null && (o.state = D({}, o.state, a)) } } else if (E = {}, o = s(l.props, S, f), o = Ee(s, l.props, o, S), o == null || o.render == null) { e = o, we(e, s); return } if (o.props = l.props, o.context = S, o.updater = f, f = o.state, f === void 0 && (o.state = f = null), typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") if (typeof o.componentWillMount == "function" && typeof s.getDerivedStateFromProps != "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && typeof s.getDerivedStateFromProps != "function" && o.UNSAFE_componentWillMount(), h.length) { f = h; var w = g; if (h = null, g = !1, w && f.length === 1) o.state = f[0]; else { a = w ? f[0] : o.state; var _ = !0; for (w = w ? 1 : 0; w < f.length; w++) { var k = f[w]; k = typeof k == "function" ? k.call(o, a, l.props, S) : k, k != null && (_ ? (_ = !1, a = D({}, a, k)) : D(a, k)) } o.state = a } } else h = null; if (e = o.render(), we(e, s), typeof o.getChildContext == "function" && (l = s.childContextTypes, typeof l == "object")) { var F = o.getChildContext(); for (var I in F) if (!(I in l)) throw Error(p(108, V(s) || "Unknown", I)) } F && (r = D({}, r, F)) } for (; C.isValidElement(e);) { var u = e, i = u.type; if (typeof i != "function") break; n(u, i) } return { child: e, context: r } } var Me = function () {
    function e(t, n, u) { C.isValidElement(t) ? t.type !== U ? t = [t] : (t = t.props.children, t = C.isValidElement(t) ? [t] : N(t)) : t = N(t), t = { type: null, domNamespace: me.html, children: t, childIndex: 0, context: Ie, footer: "" }; var i = m[0]; if (i === 0) { var l = m; i = l.length; var s = 2 * i; if (!(65536 >= s)) throw Error(p(304)); var o = new Uint16Array(s); for (o.set(l), m = o, m[0] = i + 1, l = i; l < s - 1; l++)m[l] = l + 1; m[s - 1] = 0 } else m[0] = m[i]; this.threadID = i, this.stack = [t], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = n, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = u && u.identifierPrefix || "" } var r = e.prototype; return r.destroy = function () { if (!this.exhausted) { this.exhausted = !0, this.clearProviders(); var t = this.threadID; m[t] = m[0], m[0] = t } }, r.pushProvider = function (t) { var n = ++this.contextIndex, u = t.type._context, i = this.threadID; W(u, i); var l = u[i]; this.contextStack[n] = u, this.contextValueStack[n] = l, u[i] = t.props.value }, r.popProvider = function () { var t = this.contextIndex, n = this.contextStack[t], u = this.contextValueStack[t]; this.contextStack[t] = null, this.contextValueStack[t] = null, this.contextIndex--, n[this.threadID] = u }, r.clearProviders = function () { for (var t = this.contextIndex; 0 <= t; t--)this.contextStack[t][this.threadID] = this.contextValueStack[t] }, r.read = function (t) { if (this.exhausted) return null; var n = b; b = this; var u = X.current; X.current = Ke; try { for (var i = [""], l = !1; i[0].length < t;) { if (this.stack.length === 0) { this.exhausted = !0; var s = this.threadID; m[s] = m[0], m[0] = s; break } var o = this.stack[this.stack.length - 1]; if (l || o.childIndex >= o.children.length) { var S = o.footer; if (S !== "" && (this.previousWasTextNode = !1), this.stack.pop(), o.type === "select") this.currentSelectValue = null; else if (o.type != null && o.type.type != null && o.type.type.$$typeof === j) this.popProvider(o.type); else if (o.type === A) { this.suspenseDepth--; var h = i.pop(); if (l) { l = !1; var g = o.fallbackFrame; if (!g) throw Error(p(303)); this.stack.push(g), i[this.suspenseDepth] += "<!--$!-->"; continue } else i[this.suspenseDepth] += h } i[this.suspenseDepth] += S } else { var f = o.children[o.childIndex++], a = ""; try { a += this.render(f, o.context, o.domNamespace) } catch (w) { throw w != null && typeof w.then == "function" ? Error(p(294)) : w } finally { } i.length <= this.suspenseDepth && i.push(""), i[this.suspenseDepth] += a } } return i[0] } finally { X.current = u, b = n, Ce() } }, r.render = function (t, n, u) { if (typeof t == "string" || typeof t == "number") return u = "" + t, u === "" ? "" : this.makeStaticMarkup ? O(u) : this.previousWasTextNode ? "<!-- -->" + O(u) : (this.previousWasTextNode = !0, O(u)); if (n = st(t, n, this.threadID), t = n.child, n = n.context, t === null || t === !1) return ""; if (!C.isValidElement(t)) { if (t != null && t.$$typeof != null) throw u = t.$$typeof, Error(u === Q ? p(257) : p(258, u.toString())); return t = N(t), this.stack.push({ type: null, domNamespace: u, children: t, childIndex: 0, context: n, footer: "" }), "" } var i = t.type; if (typeof i == "string") return this.renderDOM(t, n, u); switch (i) { case Fe: case ke: case G: case K: case te: case U: return t = N(t.props.children), this.stack.push({ type: null, domNamespace: u, children: t, childIndex: 0, context: n, footer: "" }), ""; case A: throw Error(p(294)); case Se: throw Error(p(343)) }if (typeof i == "object" && i !== null) switch (i.$$typeof) { case ee: E = {}; var l = i.render(t.props, t.ref); return l = Ee(i.render, t.props, l, t.ref), l = N(l), this.stack.push({ type: null, domNamespace: u, children: l, childIndex: 0, context: n, footer: "" }), ""; case re: return t = [C.createElement(i.type, D({ ref: t.ref }, t.props))], this.stack.push({ type: null, domNamespace: u, children: t, childIndex: 0, context: n, footer: "" }), ""; case j: return i = N(t.props.children), u = { type: t, domNamespace: u, children: i, childIndex: 0, context: n, footer: "" }, this.pushProvider(t), this.stack.push(u), ""; case J: i = t.type, l = t.props; var s = this.threadID; return W(i, s), i = N(l.children(i[s])), this.stack.push({ type: t, domNamespace: u, children: i, childIndex: 0, context: n, footer: "" }), ""; case ge: throw Error(p(338)); case ne: return i = t.type, l = i._init, i = l(i._payload), t = [C.createElement(i, D({ ref: t.ref }, t.props))], this.stack.push({ type: null, domNamespace: u, children: t, childIndex: 0, context: n, footer: "" }), "" }throw Error(p(130, i == null ? i : typeof i, "")) }, r.renderDOM = function (t, n, u) {
      var i = t.type.toLowerCase(); if (u === me.html && ye(i), !ve.hasOwnProperty(i)) { if (!ot.test(i)) throw Error(p(65, i)); ve[i] = !0 } var l = t.props; if (i === "input") l = D({ type: void 0 }, l, { defaultChecked: void 0, defaultValue: void 0, value: l.value != null ? l.value : l.defaultValue, checked: l.checked != null ? l.checked : l.defaultChecked }); else if (i === "textarea") { var s = l.value; if (s == null) { s = l.defaultValue; var o = l.children; if (o != null) { if (s != null) throw Error(p(92)); if (Array.isArray(o)) { if (!(1 >= o.length)) throw Error(p(93)); o = o[0] } s = "" + o } s == null && (s = "") } l = D({}, l, { value: void 0, children: "" + s }) } else if (i === "select") this.currentSelectValue = l.value != null ? l.value : l.defaultValue, l = D({}, l, { value: void 0 }); else if (i === "option") { o = this.currentSelectValue; var S = it(l.children); if (o != null) { var h = l.value != null ? l.value + "" : S; if (s = !1, Array.isArray(o)) { for (var g = 0; g < o.length; g++)if ("" + o[g] === h) { s = !0; break } } else s = "" + o === h; l = D({ selected: void 0, children: void 0 }, l, { selected: s, children: S }) } } if (s = l) { if (Je[i] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(p(137, i)); if (s.dangerouslySetInnerHTML != null) { if (s.children != null) throw Error(p(60)); if (!(typeof s.dangerouslySetInnerHTML == "object" && "__html" in s.dangerouslySetInnerHTML)) throw Error(p(61)) } if (s.style != null && typeof s.style != "object") throw Error(p(62)) } s = l, o = this.makeStaticMarkup, S = this.stack.length === 1, h = "<" + t.type; e: if (i.indexOf("-") === -1) g = typeof s.is == "string"; else switch (i) { case "annotation-xml": case "color-profile": case "font-face": case "font-face-src": case "font-face-uri": case "font-face-format": case "font-face-name": case "missing-glyph": g = !1; break e; default: g = !0 }for (v in s) if (lt.call(s, v)) { var f = s[v]; if (f != null) { if (v === "style") { var a = void 0, w = "", _ = ""; for (a in f) if (f.hasOwnProperty(a)) { var k = a.indexOf("--") === 0, F = f[a]; if (F != null) { if (k) var I = a; else if (I = a, Y.hasOwnProperty(I)) I = Y[I]; else { var Z = I.replace(tt, "-$1").toLowerCase().replace(rt, "-ms-"); I = Y[I] = Z } w += _ + I + ":", _ = a, k = F == null || typeof F == "boolean" || F === "" ? "" : k || typeof F != "number" || F === 0 || L.hasOwnProperty(_) && L[_] ? ("" + F).trim() : F + "px", w += k, _ = ";" } } f = w || null } a = null, g ? ut.hasOwnProperty(v) || (a = v, a = De(a) && f != null ? a + '="' + (O(f) + '"') : "") : a = Xe(v, f), a && (h += " " + a) } } o || S && (h += ' data-reactroot=""'); var v = h; s = "", Ne.hasOwnProperty(i) ? v += "/>" : (v += ">", s = "</" + t.type + ">"); e: { if (o = l.dangerouslySetInnerHTML, o != null) { if (o.__html != null) { o = o.__html; break e } } else if (o = l.children, typeof o == "string" || typeof o == "number") { o = O(o); break e } o = null } return o != null ? (l = [], nt.hasOwnProperty(i) && o.charAt(0) === `
`&& (v += `
`), v += o) : l = N(l.children), t = t.type, u = u == null || u === "http://www.w3.org/1999/xhtml" ? ye(t) : u === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : u, this.stack.push({ domNamespace: u, type: i, children: l, childIndex: 0, context: n, footer: s }), this.previousWasTextNode = !1, v
    }, e
  }(); z.renderToNodeStream = function () { throw Error(p(207)) }; z.renderToStaticMarkup = function (e, r) { e = new Me(e, !0, r); try { return e.read(1 / 0) } finally { e.destroy() } }; z.renderToStaticNodeStream = function () { throw Error(p(208)) }; z.renderToString = function (e, r) { e = new Me(e, !1, r); try { return e.read(1 / 0) } finally { e.destroy() } }; z.version = "17.0.2"
}); var be = Ue(Oe()), { renderToNodeStream: pt, renderToStaticMarkup: ht, renderToStaticNodeStream: dt, renderToString: mt, version: yt } = be, { default: Pe, ...at } = be, vt = Pe !== void 0 ? Pe : at; export { vt as default, pt as renderToNodeStream, ht as renderToStaticMarkup, dt as renderToStaticNodeStream, mt as renderToString, yt as version };
/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
