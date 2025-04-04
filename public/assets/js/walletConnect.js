! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("WalletConnectProvider", [], t) : "object" == typeof exports ? exports.WalletConnectProvider = t() : e.WalletConnectProvider = t()
}(this, (function() {
	return function(e) {
		var t = {};

		function r(n) {
			if (t[n]) return t[n].exports;
			var i = t[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
		}
		return r.m = e, r.c = t, r.d = function(e, t, n) {
			r.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: n
			})
		}, r.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, r.t = function(e, t) {
			if (1 & t && (e = r(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (r.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var i in e) r.d(n, i, function(t) {
					return e[t]
				}.bind(null, i));
			return n
		}, r.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return r.d(t, "a", t), t
		}, r.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, r.p = "", r(r.s = 165)
	}([function(e, t, r) {
		"use strict";
		(function(e) {
			var n = this && this.__importDefault || function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.removeHexLeadingZeros = t.sanitizeHex = t.addHexPrefix = t.removeHexPrefix = t.padRight = t.padLeft = t.sanitizeBytes = t.swapHex = t.swapBytes = t.splitBytes = t.calcByteLength = t.trimRight = t.trimLeft = t.concatArrays = t.concatBuffers = t.getEncoding = t.getType = t.isArrayBuffer = t.isTypedArray = t.isBuffer = t.isHexString = t.isBinaryString = t.binaryToNumber = t.binaryToUtf8 = t.binaryToHex = t.binaryToArray = t.binaryToBuffer = t.numberToBinary = t.numberToUtf8 = t.numberToHex = t.numberToArray = t.numberToBuffer = t.utf8ToBinary = t.utf8ToNumber = t.utf8ToHex = t.utf8ToArray = t.utf8ToBuffer = t.hexToBinary = t.hexToNumber = t.hexToUtf8 = t.hexToArray = t.hexToBuffer = t.arrayToBinary = t.arrayToNumber = t.arrayToUtf8 = t.arrayToHex = t.arrayToBuffer = t.bufferToBinary = t.bufferToNumber = t.bufferToUtf8 = t.bufferToHex = t.bufferToArray = void 0;
			const i = n(r(79)),
				o = n(r(170));

			function a(e) {
				return new Uint8Array(e)
			}

			function s(e, t = !1) {
				const r = e.toString("hex");
				return t ? L(r) : r
			}

			function u(e) {
				return e.toString("utf8")
			}

			function c(e) {
				return e.readUIntBE(0, e.length)
			}

			function f(e) {
				return o.default(e)
			}

			function h(e, t = !1) {
				return s(f(e), t)
			}

			function l(e) {
				return u(f(e))
			}

			function d(e) {
				return c(f(e))
			}

			function p(e) {
				return Array.from(e).map(_).join("")
			}

			function b(t) {
				return e.from(B(t), "hex")
			}

			function g(e) {
				return a(b(e))
			}

			function m(e) {
				return p(g(e))
			}

			function y(t) {
				return e.from(t, "utf8")
			}

			function v(e) {
				return a(y(e))
			}

			function _(e) {
				return P((e >>> 0).toString(2))
			}

			function w(e) {
				return f(M(e))
			}

			function M(e) {
				return new Uint8Array(C(e).map(e => parseInt(e, 2)))
			}

			function S(e, t) {
				return h(M(e), t)
			}

			function x(e) {
				return !("string" != typeof e || !new RegExp(/^[01]+$/).test(e)) && e.length % 8 == 0
			}

			function E(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}

			function k(t) {
				return e.isBuffer(t)
			}

			function A(e) {
				return i.default.strict(e) && !k(e)
			}

			function R(e) {
				return !A(e) && !k(e) && void 0 !== e.byteLength
			}

			function T(e, t = 8) {
				const r = e % t;
				return r ? (e - r) / t * t + t : e
			}

			function C(e, t = 8) {
				const r = P(e).match(new RegExp(`.{${t}}`, "gi"));
				return Array.from(r || [])
			}

			function O(e) {
				return C(e).map(j).join("")
			}

			function P(e, t = 8, r = "0") {
				return I(e, T(e.length, t), r)
			}

			function I(e, t, r = "0") {
				return N(e, t, !0, r)
			}

			function B(e) {
				return e.replace(/^0x/, "")
			}

			function L(e) {
				return e.startsWith("0x") ? e : "0x" + e
			}

			function j(e) {
				return e.split("").reverse().join("")
			}

			function N(e, t, r, n = "0") {
				const i = t - e.length;
				let o = e;
				if (i > 0) {
					const t = n.repeat(i);
					o = r ? t + e : e + t
				}
				return o
			}
			t.bufferToArray = a, t.bufferToHex = s, t.bufferToUtf8 = u, t.bufferToNumber = c, t.bufferToBinary = function(e) {
				return p(a(e))
			}, t.arrayToBuffer = f, t.arrayToHex = h, t.arrayToUtf8 = l, t.arrayToNumber = d, t.arrayToBinary = p, t.hexToBuffer = b, t.hexToArray = g, t.hexToUtf8 = function(e) {
				return u(b(e))
			}, t.hexToNumber = function(e) {
				return d(g(e))
			}, t.hexToBinary = m, t.utf8ToBuffer = y, t.utf8ToArray = v, t.utf8ToHex = function(e, t = !1) {
				return s(y(e), t)
			}, t.utf8ToNumber = function(e) {
				const t = parseInt(e, 10);
				return function(e, t) {
					if (!e) throw new Error(t)
				}(! function(e) {
					return void 0 === e
				}(t), "Number can only safely store up to 53 bits"), t
			}, t.utf8ToBinary = function(e) {
				return p(v(e))
			}, t.numberToBuffer = function(e) {
				return w(_(e))
			}, t.numberToArray = function(e) {
				return M(_(e))
			}, t.numberToHex = function(e, t) {
				return S(_(e), t)
			}, t.numberToUtf8 = function(e) {
				return "" + e
			}, t.numberToBinary = _, t.binaryToBuffer = w, t.binaryToArray = M, t.binaryToHex = S, t.binaryToUtf8 = function(e) {
				return l(M(e))
			}, t.binaryToNumber = function(e) {
				return d(M(e))
			}, t.isBinaryString = x, t.isHexString = E, t.isBuffer = k, t.isTypedArray = A, t.isArrayBuffer = R, t.getType = function(e) {
				return k(e) ? "buffer" : A(e) ? "typed-array" : R(e) ? "array-buffer" : Array.isArray(e) ? "array" : typeof e
			}, t.getEncoding = function(e) {
				return x(e) ? "binary" : E(e) ? "hex" : "utf8"
			}, t.concatBuffers = function(...t) {
				return e.concat(t)
			}, t.concatArrays = function(...e) {
				let t = [];
				return e.forEach(e => t = t.concat(Array.from(e))), new Uint8Array([...t])
			}, t.trimLeft = function(e, t) {
				const r = e.length - t;
				return r > 0 && (e = e.slice(r)), e
			}, t.trimRight = function(e, t) {
				return e.slice(0, t)
			}, t.calcByteLength = T, t.splitBytes = C, t.swapBytes = O, t.swapHex = function(e) {
				return S(O(m(e)))
			}, t.sanitizeBytes = P, t.padLeft = I, t.padRight = function(e, t, r = "0") {
				return N(e, t, !1, r)
			}, t.removeHexPrefix = B, t.addHexPrefix = L, t.sanitizeHex = function(e) {
				return (e = P(e = B(e), 2)) && (e = L(e)), e
			}, t.removeHexLeadingZeros = function(e) {
				const t = e.startsWith("0x");
				return e = (e = B(e)).startsWith("0") ? e.substring(1) : e, t ? L(e) : e
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		r.r(t);
		var n = r(76);
		const i = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"],
			o = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign"],
			a = ["eth_accounts", "eth_chainId", "net_version"],
			s = {
				1: "mainnet",
				3: "ropsten",
				4: "rinkeby",
				5: "goerli",
				10: "optimism-mainnet",
				42: "kovan",
        69: "optimism-kovan",
				137: "polygon-mainnet",
				250: "fantom-mainnet",
        42161: "arbitrum-mainnet",
				80001: "polygon-mainnet",
				421611: "arbitrum-rinkeby"
			};
		var u = r(9),
			c = r.n(u),
			f = r(0);

		function h(e) {
			return f.arrayToBuffer(new Uint8Array(e))
		}

		function l(e) {
			return f.arrayToUtf8(new Uint8Array(e))
		}

		function d(e, t) {
			return f.arrayToHex(new Uint8Array(e), !t)
		}

		function p(e) {
			return f.arrayToNumber(new Uint8Array(e))
		}

		function b(...e) {
			return f.hexToArray(e.map(e => f.arrayToHex(new Uint8Array(e))).join("")).buffer
		}

		function g(e) {
			return f.bufferToArray(e).buffer
		}

		function m(e) {
			return f.bufferToUtf8(e)
		}

		function y(e, t) {
			return f.bufferToHex(e, !t)
		}

		function v(e) {
			return f.bufferToNumber(e)
		}

		function _(...e) {
			return f.concatBuffers(...e)
		}

		function w(e) {
			return f.utf8ToArray(e).buffer
		}

		function M(e) {
			return f.utf8ToBuffer(e)
		}

		function S(e, t) {
			return f.utf8ToHex(e, !t)
		}

		function x(e) {
			return new c.a(e, 10).toNumber()
		}

		function E(e) {
			return f.hexToBuffer(e)
		}

		function k(e) {
			return f.hexToArray(e).buffer
		}

		function A(e) {
			return f.hexToUtf8(e)
		}

		function R(e) {
			return new c.a(f.removeHexPrefix(e), "hex").toNumber()
		}

		function T(e) {
			return f.numberToBuffer(e)
		}

		function C(e) {
			return f.numberToArray(e).buffer
		}

		function O(e) {
			return new c.a(e).toString()
		}

		function P(e, t) {
			const r = f.removeHexPrefix(f.sanitizeHex(new c.a(e).toString(16)));
			return t ? r : f.addHexPrefix(r)
		}
		var I = r(159);

		function B(e) {
			return f.sanitizeHex(e)
		}

		function L(e) {
			return f.addHexPrefix(e)
		}

		function j(e) {
			return f.removeHexPrefix(e)
		}

		function N(e) {
			return f.removeHexLeadingZeros(f.addHexPrefix(e))
		}
		const U = r(160).payloadId;

		function q() {
			return ((e, t) => {
				for (t = e = ""; e++ < 36; t += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-");
				return t
			})()
		}

		function D() {
			console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")
		}

		function H(e, t) {
      e = 10; // TODO: change chain ID
			let r;
			const n = s[e];
			return n && (r = `https://mainnet.optimism.io`), r // TODO
		}

		function z(e, t) {
			let r;
			const n = H(e, t.infuraId);
			return t.custom && t.custom[e] ? r = t.custom[e] : n && (r = n), r
		}

		function F(e) {
			return "" === e || "string" == typeof e && "" === e.trim()
		}

		function W(e) {
			return !(e && e.length)
		}

		function K(e) {
			return f.isBuffer(e)
		}

		function V(e) {
			return f.isTypedArray(e)
		}

		function J(e) {
			return f.isArrayBuffer(e)
		}

		function Y(e) {
			return f.getType(e)
		}

		function G(e) {
			return f.getEncoding(e)
		}

		function Z(e, t) {
			return f.isHexString(e, t)
		}

		function $(e) {
			return "object" == typeof e.params
		}

		function X(e) {
			return void 0 !== e.method
		}

		function Q(e) {
			return void 0 !== e.result
		}

		function ee(e) {
			return void 0 !== e.error
		}

		function te(e) {
			return void 0 !== e.event
		}

		function re(e) {
			return i.includes(e) || e.startsWith("wc_")
		}

		function ne(e) {
			return !!e.method.startsWith("wc_") || !o.includes(e.method)
		}

		function ie(e) {
			e = Object(f.removeHexPrefix)(e.toLowerCase());
			const t = Object(f.removeHexPrefix)(Object(I.keccak_256)(M(e)));
			let r = "";
			for (let n = 0; n < e.length; n++) parseInt(t[n], 16) > 7 ? r += e[n].toUpperCase() : r += e[n];
			return Object(f.addHexPrefix)(r)
		}
		const oe = e => !!e && ("0x" === e.toLowerCase().substring(0, 2) && (!!/^(0x)?[0-9a-f]{40}$/i.test(e) && (!(!/^(0x)?[0-9a-f]{40}$/.test(e) && !/^(0x)?[0-9A-F]{40}$/.test(e)) || e === ie(e))));

		function ae(e) {
			return W(e) || Z(e[0]) || (e[0] = S(e[0])), e
		}

		function se(e) {
			if (void 0 !== e.type && "0" !== e.type) return e;
			if (void 0 === e.from || !oe(e.from)) throw new Error("Transaction object must include a valid 'from' value.");

			function t(e) {
				let t = e;
				return ("number" == typeof e || "string" == typeof e && !F(e)) && (Z(e) ? "string" == typeof e && (t = B(e)) : t = P(e)), "string" == typeof t && (t = N(t)), t
			}
			const r = {
					from: B(e.from),
					to: void 0 === e.to ? "" : B(e.to),
					gasPrice: void 0 === e.gasPrice ? "" : t(e.gasPrice),
					gas: void 0 === e.gas ? void 0 === e.gasLimit ? "" : t(e.gasLimit) : t(e.gas),
					value: void 0 === e.value ? "" : t(e.value),
					nonce: void 0 === e.nonce ? "" : t(e.nonce),
					data: void 0 === e.data ? "" : B(e.data) || "0x"
				},
				n = ["gasPrice", "gas", "value", "nonce"];
			return Object.keys(r).forEach(e => {
				!r[e].trim().length && n.includes(e) && delete r[e]
			}), r
		}

		function ue(e, t) {
			return async (...r) => new Promise((n, i) => {
				e.apply(t, [...r, (e, t) => {
					null == e && i(e), n(t)
				}])
			})
		}

		function ce(e) {
			const t = e.message || "Failed or Rejected Request";
			let r = -32e3;
			if (e && !e.code) switch (t) {
				case "Parse error":
					r = -32700;
					break;
				case "Invalid request":
					r = -32600;
					break;
				case "Method not found":
					r = -32601;
					break;
				case "Invalid params":
					r = -32602;
					break;
				case "Internal error":
					r = -32603;
					break;
				default:
					r = -32e3
			}
			return {
				code: r,
				message: t
			}
		}
		var fe = r(77);

		function he(e) {
			const t = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0;
			return void 0 !== t ? e.substr(t) : ""
		}

		function le(e, t) {
			let r = de(e);
			return r = Object.assign(Object.assign({}, r), t), e = pe(r)
		}

		function de(e) {
			return fe.parse(e)
		}

		function pe(e) {
			return fe.stringify(e)
		}

		function be(e) {
			return void 0 !== e.bridge
		}

		function ge(e) {
			const t = e.indexOf(":"),
				r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
				n = e.substring(0, t);
			const i = function(e) {
				const t = e.split("@");
				return {
					handshakeTopic: t[0],
					version: parseInt(t[1], 10)
				}
			}(e.substring(t + 1, r));
			const o = function(e) {
				const t = de(e);
				return {
					key: t.key || "",
					bridge: t.bridge || ""
				}
			}(void 0 !== r ? e.substr(r) : "");
			return Object.assign(Object.assign({
				protocol: n
			}, i), o)
		}
		r.d(t, "detectEnv", (function() {
			return n.detectEnv
		})), r.d(t, "detectOS", (function() {
			return n.detectOS
		})), r.d(t, "isAndroid", (function() {
			return n.isAndroid
		})), r.d(t, "isIOS", (function() {
			return n.isIOS
		})), r.d(t, "isMobile", (function() {
			return n.isMobile
		})), r.d(t, "isNode", (function() {
			return n.isNode
		})), r.d(t, "isBrowser", (function() {
			return n.isBrowser
		})), r.d(t, "getFromWindow", (function() {
			return n.getFromWindow
		})), r.d(t, "getFromWindowOrThrow", (function() {
			return n.getFromWindowOrThrow
		})), r.d(t, "getDocumentOrThrow", (function() {
			return n.getDocumentOrThrow
		})), r.d(t, "getDocument", (function() {
			return n.getDocument
		})), r.d(t, "getNavigatorOrThrow", (function() {
			return n.getNavigatorOrThrow
		})), r.d(t, "getNavigator", (function() {
			return n.getNavigator
		})), r.d(t, "getLocationOrThrow", (function() {
			return n.getLocationOrThrow
		})), r.d(t, "getLocation", (function() {
			return n.getLocation
		})), r.d(t, "getCryptoOrThrow", (function() {
			return n.getCryptoOrThrow
		})), r.d(t, "getCrypto", (function() {
			return n.getCrypto
		})), r.d(t, "getLocalStorageOrThrow", (function() {
			return n.getLocalStorageOrThrow
		})), r.d(t, "getLocalStorage", (function() {
			return n.getLocalStorage
		})), r.d(t, "getClientMeta", (function() {
			return n.getClientMeta
		})), r.d(t, "safeJsonParse", (function() {
			return n.safeJsonParse
		})), r.d(t, "safeJsonStringify", (function() {
			return n.safeJsonStringify
		})), r.d(t, "setLocal", (function() {
			return n.setLocal
		})), r.d(t, "getLocal", (function() {
			return n.getLocal
		})), r.d(t, "removeLocal", (function() {
			return n.removeLocal
		})), r.d(t, "mobileLinkChoiceKey", (function() {
			return n.mobileLinkChoiceKey
		})), r.d(t, "formatIOSMobile", (function() {
			return n.formatIOSMobile
		})), r.d(t, "saveMobileLinkInfo", (function() {
			return n.saveMobileLinkInfo
		})), r.d(t, "getMobileRegistryEntry", (function() {
			return n.getMobileRegistryEntry
		})), r.d(t, "getMobileLinkRegistry", (function() {
			return n.getMobileLinkRegistry
		})), r.d(t, "getWalletRegistryUrl", (function() {
			return n.getWalletRegistryUrl
		})), r.d(t, "getDappRegistryUrl", (function() {
			return n.getDappRegistryUrl
		})), r.d(t, "getAppLogoUrl", (function() {
			return n.getAppLogoUrl
		})), r.d(t, "formatMobileRegistryEntry", (function() {
			return n.formatMobileRegistryEntry
		})), r.d(t, "formatMobileRegistry", (function() {
			return n.formatMobileRegistry
		})), r.d(t, "reservedEvents", (function() {
			return i
		})), r.d(t, "signingMethods", (function() {
			return o
		})), r.d(t, "stateMethods", (function() {
			return a
		})), r.d(t, "infuraNetworks", (function() {
			return s
		})), r.d(t, "convertArrayBufferToBuffer", (function() {
			return h
		})), r.d(t, "convertArrayBufferToUtf8", (function() {
			return l
		})), r.d(t, "convertArrayBufferToHex", (function() {
			return d
		})), r.d(t, "convertArrayBufferToNumber", (function() {
			return p
		})), r.d(t, "concatArrayBuffers", (function() {
			return b
		})), r.d(t, "convertBufferToArrayBuffer", (function() {
			return g
		})), r.d(t, "convertBufferToUtf8", (function() {
			return m
		})), r.d(t, "convertBufferToHex", (function() {
			return y
		})), r.d(t, "convertBufferToNumber", (function() {
			return v
		})), r.d(t, "concatBuffers", (function() {
			return _
		})), r.d(t, "convertUtf8ToArrayBuffer", (function() {
			return w
		})), r.d(t, "convertUtf8ToBuffer", (function() {
			return M
		})), r.d(t, "convertUtf8ToHex", (function() {
			return S
		})), r.d(t, "convertUtf8ToNumber", (function() {
			return x
		})), r.d(t, "convertHexToBuffer", (function() {
			return E
		})), r.d(t, "convertHexToArrayBuffer", (function() {
			return k
		})), r.d(t, "convertHexToUtf8", (function() {
			return A
		})), r.d(t, "convertHexToNumber", (function() {
			return R
		})), r.d(t, "convertNumberToBuffer", (function() {
			return T
		})), r.d(t, "convertNumberToArrayBuffer", (function() {
			return C
		})), r.d(t, "convertNumberToUtf8", (function() {
			return O
		})), r.d(t, "convertNumberToHex", (function() {
			return P
		})), r.d(t, "toChecksumAddress", (function() {
			return ie
		})), r.d(t, "isValidAddress", (function() {
			return oe
		})), r.d(t, "parsePersonalSign", (function() {
			return ae
		})), r.d(t, "parseTransactionData", (function() {
			return se
		})), r.d(t, "sanitizeHex", (function() {
			return B
		})), r.d(t, "addHexPrefix", (function() {
			return L
		})), r.d(t, "removeHexPrefix", (function() {
			return j
		})), r.d(t, "removeHexLeadingZeros", (function() {
			return N
		})), r.d(t, "payloadId", (function() {
			return U
		})), r.d(t, "uuid", (function() {
			return q
		})), r.d(t, "logDeprecationWarning", (function() {
			return D
		})), r.d(t, "getInfuraRpcUrl", (function() {
			return H
		})), r.d(t, "getRpcUrl", (function() {
			return z
		})), r.d(t, "promisify", (function() {
			return ue
		})), r.d(t, "formatRpcError", (function() {
			return ce
		})), r.d(t, "isWalletConnectSession", (function() {
			return be
		})), r.d(t, "parseWalletConnectUri", (function() {
			return ge
		})), r.d(t, "getQueryString", (function() {
			return he
		})), r.d(t, "appendToQueryString", (function() {
			return le
		})), r.d(t, "parseQueryString", (function() {
			return de
		})), r.d(t, "formatQueryString", (function() {
			return pe
		})), r.d(t, "isEmptyString", (function() {
			return F
		})), r.d(t, "isEmptyArray", (function() {
			return W
		})), r.d(t, "isBuffer", (function() {
			return K
		})), r.d(t, "isTypedArray", (function() {
			return V
		})), r.d(t, "isArrayBuffer", (function() {
			return J
		})), r.d(t, "getType", (function() {
			return Y
		})), r.d(t, "getEncoding", (function() {
			return G
		})), r.d(t, "isHexString", (function() {
			return Z
		})), r.d(t, "isJsonRpcSubscription", (function() {
			return $
		})), r.d(t, "isJsonRpcRequest", (function() {
			return X
		})), r.d(t, "isJsonRpcResponseSuccess", (function() {
			return Q
		})), r.d(t, "isJsonRpcResponseError", (function() {
			return ee
		})), r.d(t, "isInternalEvent", (function() {
			return te
		})), r.d(t, "isReservedEvent", (function() {
			return re
		})), r.d(t, "isSilentPayload", (function() {
			return ne
		}))
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			/*!
			 * The buffer module from node.js, for the browser.
			 *
			 * @author   Feross Aboukhadijeh <http://feross.org>
			 * @license  MIT
			 */
			var n = r(168),
				i = r(169),
				o = r(78);

			function a() {
				return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}

			function s(e, t) {
				if (a() < t) throw new RangeError("Invalid typed array length");
				return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
			}

			function u(e, t, r) {
				if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, r);
				if ("number" == typeof e) {
					if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
					return h(this, e)
				}
				return c(this, e, t, r)
			}

			function c(e, t, r, n) {
				if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, n) {
					if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
					if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
					t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
					u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = l(e, t);
					return e
				}(e, t, r, n) : "string" == typeof t ? function(e, t, r) {
					"string" == typeof r && "" !== r || (r = "utf8");
					if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
					var n = 0 | p(t, r),
						i = (e = s(e, n)).write(t, r);
					i !== n && (e = e.slice(0, i));
					return e
				}(e, t, r) : function(e, t) {
					if (u.isBuffer(t)) {
						var r = 0 | d(t.length);
						return 0 === (e = s(e, r)).length || t.copy(e, 0, 0, r), e
					}
					if (t) {
						if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : l(e, t);
						if ("Buffer" === t.type && o(t.data)) return l(e, t.data)
					}
					var n;
					throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
				}(e, t)
			}

			function f(e) {
				if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
				if (e < 0) throw new RangeError('"size" argument must not be negative')
			}

			function h(e, t) {
				if (f(t), e = s(e, t < 0 ? 0 : 0 | d(t)), !u.TYPED_ARRAY_SUPPORT)
					for (var r = 0; r < t; ++r) e[r] = 0;
				return e
			}

			function l(e, t) {
				var r = t.length < 0 ? 0 : 0 | d(t.length);
				e = s(e, r);
				for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
				return e
			}

			function d(e) {
				if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
				return 0 | e
			}

			function p(e, t) {
				if (u.isBuffer(e)) return e.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
				"string" != typeof e && (e = "" + e);
				var r = e.length;
				if (0 === r) return 0;
				for (var n = !1;;) switch (t) {
					case "ascii":
					case "latin1":
					case "binary":
						return r;
					case "utf8":
					case "utf-8":
					case void 0:
						return D(e).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * r;
					case "hex":
						return r >>> 1;
					case "base64":
						return H(e).length;
					default:
						if (n) return D(e).length;
						t = ("" + t).toLowerCase(), n = !0
				}
			}

			function b(e, t, r) {
				var n = !1;
				if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
				if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
				if ((r >>>= 0) <= (t >>>= 0)) return "";
				for (e || (e = "utf8");;) switch (e) {
					case "hex":
						return T(this, t, r);
					case "utf8":
					case "utf-8":
						return k(this, t, r);
					case "ascii":
						return A(this, t, r);
					case "latin1":
					case "binary":
						return R(this, t, r);
					case "base64":
						return E(this, t, r);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return C(this, t, r);
					default:
						if (n) throw new TypeError("Unknown encoding: " + e);
						e = (e + "").toLowerCase(), n = !0
				}
			}

			function g(e, t, r) {
				var n = e[t];
				e[t] = e[r], e[r] = n
			}

			function m(e, t, r, n, i) {
				if (0 === e.length) return -1;
				if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
					if (i) return -1;
					r = e.length - 1
				} else if (r < 0) {
					if (!i) return -1;
					r = 0
				}
				if ("string" == typeof t && (t = u.from(t, n)), u.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, n, i);
				if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, i);
				throw new TypeError("val must be string, number or Buffer")
			}

			function y(e, t, r, n, i) {
				var o, a = 1,
					s = e.length,
					u = t.length;
				if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
					if (e.length < 2 || t.length < 2) return -1;
					a = 2, s /= 2, u /= 2, r /= 2
				}

				function c(e, t) {
					return 1 === a ? e[t] : e.readUInt16BE(t * a)
				}
				if (i) {
					var f = -1;
					for (o = r; o < s; o++)
						if (c(e, o) === c(t, -1 === f ? 0 : o - f)) {
							if (-1 === f && (f = o), o - f + 1 === u) return f * a
						} else -1 !== f && (o -= o - f), f = -1
				} else
					for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
						for (var h = !0, l = 0; l < u; l++)
							if (c(e, o + l) !== c(t, l)) {
								h = !1;
								break
							} if (h) return o
					}
				return -1
			}

			function v(e, t, r, n) {
				r = Number(r) || 0;
				var i = e.length - r;
				n ? (n = Number(n)) > i && (n = i) : n = i;
				var o = t.length;
				if (o % 2 != 0) throw new TypeError("Invalid hex string");
				n > o / 2 && (n = o / 2);
				for (var a = 0; a < n; ++a) {
					var s = parseInt(t.substr(2 * a, 2), 16);
					if (isNaN(s)) return a;
					e[r + a] = s
				}
				return a
			}

			function _(e, t, r, n) {
				return z(D(t, e.length - r), e, r, n)
			}

			function w(e, t, r, n) {
				return z(function(e) {
					for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
					return t
				}(t), e, r, n)
			}

			function M(e, t, r, n) {
				return w(e, t, r, n)
			}

			function S(e, t, r, n) {
				return z(H(t), e, r, n)
			}

			function x(e, t, r, n) {
				return z(function(e, t) {
					for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = e.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
					return o
				}(t, e.length - r), e, r, n)
			}

			function E(e, t, r) {
				return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
			}

			function k(e, t, r) {
				r = Math.min(e.length, r);
				for (var n = [], i = t; i < r;) {
					var o, a, s, u, c = e[i],
						f = null,
						h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
					if (i + h <= r) switch (h) {
						case 1:
							c < 128 && (f = c);
							break;
						case 2:
							128 == (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (f = u);
							break;
						case 3:
							o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (f = u);
							break;
						case 4:
							o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (f = u)
					}
					null === f ? (f = 65533, h = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += h
				}
				return function(e) {
					var t = e.length;
					if (t <= 4096) return String.fromCharCode.apply(String, e);
					var r = "",
						n = 0;
					for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
					return r
				}(n)
			}
			t.Buffer = u, t.SlowBuffer = function(e) {
				+e != e && (e = 0);
				return u.alloc(+e)
			}, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
				try {
					var e = new Uint8Array(1);
					return e.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
				} catch (e) {
					return !1
				}
			}(), t.kMaxLength = a(), u.poolSize = 8192, u._augment = function(e) {
				return e.__proto__ = u.prototype, e
			}, u.from = function(e, t, r) {
				return c(null, e, t, r)
			}, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
				value: null,
				configurable: !0
			})), u.alloc = function(e, t, r) {
				return function(e, t, r, n) {
					return f(t), t <= 0 ? s(e, t) : void 0 !== r ? "string" == typeof n ? s(e, t).fill(r, n) : s(e, t).fill(r) : s(e, t)
				}(null, e, t, r)
			}, u.allocUnsafe = function(e) {
				return h(null, e)
			}, u.allocUnsafeSlow = function(e) {
				return h(null, e)
			}, u.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, u.compare = function(e, t) {
				if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
				if (e === t) return 0;
				for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
					if (e[i] !== t[i]) {
						r = e[i], n = t[i];
						break
					} return r < n ? -1 : n < r ? 1 : 0
			}, u.isEncoding = function(e) {
				switch (String(e).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
				}
			}, u.concat = function(e, t) {
				if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return u.alloc(0);
				var r;
				if (void 0 === t)
					for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
				var n = u.allocUnsafe(t),
					i = 0;
				for (r = 0; r < e.length; ++r) {
					var a = e[r];
					if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
					a.copy(n, i), i += a.length
				}
				return n
			}, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
				var e = this.length;
				if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var t = 0; t < e; t += 2) g(this, t, t + 1);
				return this
			}, u.prototype.swap32 = function() {
				var e = this.length;
				if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
				return this
			}, u.prototype.swap64 = function() {
				var e = this.length;
				if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
				return this
			}, u.prototype.toString = function() {
				var e = 0 | this.length;
				return 0 === e ? "" : 0 === arguments.length ? k(this, 0, e) : b.apply(this, arguments)
			}, u.prototype.equals = function(e) {
				if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				return this === e || 0 === u.compare(this, e)
			}, u.prototype.inspect = function() {
				var e = "",
					r = t.INSPECT_MAX_BYTES;
				return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
			}, u.prototype.compare = function(e, t, r, n, i) {
				if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
				if (n >= i && t >= r) return 0;
				if (n >= i) return -1;
				if (t >= r) return 1;
				if (this === e) return 0;
				for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), s = Math.min(o, a), c = this.slice(n, i), f = e.slice(t, r), h = 0; h < s; ++h)
					if (c[h] !== f[h]) {
						o = c[h], a = f[h];
						break
					} return o < a ? -1 : a < o ? 1 : 0
			}, u.prototype.includes = function(e, t, r) {
				return -1 !== this.indexOf(e, t, r)
			}, u.prototype.indexOf = function(e, t, r) {
				return m(this, e, t, r, !0)
			}, u.prototype.lastIndexOf = function(e, t, r) {
				return m(this, e, t, r, !1)
			}, u.prototype.write = function(e, t, r, n) {
				if (void 0 === t) n = "utf8", r = this.length, t = 0;
				else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
				else {
					if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
				}
				var i = this.length - t;
				if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				n || (n = "utf8");
				for (var o = !1;;) switch (n) {
					case "hex":
						return v(this, e, t, r);
					case "utf8":
					case "utf-8":
						return _(this, e, t, r);
					case "ascii":
						return w(this, e, t, r);
					case "latin1":
					case "binary":
						return M(this, e, t, r);
					case "base64":
						return S(this, e, t, r);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return x(this, e, t, r);
					default:
						if (o) throw new TypeError("Unknown encoding: " + n);
						n = ("" + n).toLowerCase(), o = !0
				}
			}, u.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};

			function A(e, t, r) {
				var n = "";
				r = Math.min(e.length, r);
				for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
				return n
			}

			function R(e, t, r) {
				var n = "";
				r = Math.min(e.length, r);
				for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
				return n
			}

			function T(e, t, r) {
				var n = e.length;
				(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
				for (var i = "", o = t; o < r; ++o) i += q(e[o]);
				return i
			}

			function C(e, t, r) {
				for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
				return i
			}

			function O(e, t, r) {
				if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
				if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
			}

			function P(e, t, r, n, i, o) {
				if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
				if (r + n > e.length) throw new RangeError("Index out of range")
			}

			function I(e, t, r, n) {
				t < 0 && (t = 65535 + t + 1);
				for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
			}

			function B(e, t, r, n) {
				t < 0 && (t = 4294967295 + t + 1);
				for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
			}

			function L(e, t, r, n, i, o) {
				if (r + n > e.length) throw new RangeError("Index out of range");
				if (r < 0) throw new RangeError("Index out of range")
			}

			function j(e, t, r, n, o) {
				return o || L(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4
			}

			function N(e, t, r, n, o) {
				return o || L(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8
			}
			u.prototype.slice = function(e, t) {
				var r, n = this.length;
				if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = u.prototype;
				else {
					var i = t - e;
					r = new u(i, void 0);
					for (var o = 0; o < i; ++o) r[o] = this[o + e]
				}
				return r
			}, u.prototype.readUIntLE = function(e, t, r) {
				e |= 0, t |= 0, r || O(e, t, this.length);
				for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
				return n
			}, u.prototype.readUIntBE = function(e, t, r) {
				e |= 0, t |= 0, r || O(e, t, this.length);
				for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
				return n
			}, u.prototype.readUInt8 = function(e, t) {
				return t || O(e, 1, this.length), this[e]
			}, u.prototype.readUInt16LE = function(e, t) {
				return t || O(e, 2, this.length), this[e] | this[e + 1] << 8
			}, u.prototype.readUInt16BE = function(e, t) {
				return t || O(e, 2, this.length), this[e] << 8 | this[e + 1]
			}, u.prototype.readUInt32LE = function(e, t) {
				return t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
			}, u.prototype.readUInt32BE = function(e, t) {
				return t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
			}, u.prototype.readIntLE = function(e, t, r) {
				e |= 0, t |= 0, r || O(e, t, this.length);
				for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
				return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
			}, u.prototype.readIntBE = function(e, t, r) {
				e |= 0, t |= 0, r || O(e, t, this.length);
				for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
				return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
			}, u.prototype.readInt8 = function(e, t) {
				return t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
			}, u.prototype.readInt16LE = function(e, t) {
				t || O(e, 2, this.length);
				var r = this[e] | this[e + 1] << 8;
				return 32768 & r ? 4294901760 | r : r
			}, u.prototype.readInt16BE = function(e, t) {
				t || O(e, 2, this.length);
				var r = this[e + 1] | this[e] << 8;
				return 32768 & r ? 4294901760 | r : r
			}, u.prototype.readInt32LE = function(e, t) {
				return t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
			}, u.prototype.readInt32BE = function(e, t) {
				return t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
			}, u.prototype.readFloatLE = function(e, t) {
				return t || O(e, 4, this.length), i.read(this, e, !0, 23, 4)
			}, u.prototype.readFloatBE = function(e, t) {
				return t || O(e, 4, this.length), i.read(this, e, !1, 23, 4)
			}, u.prototype.readDoubleLE = function(e, t) {
				return t || O(e, 8, this.length), i.read(this, e, !0, 52, 8)
			}, u.prototype.readDoubleBE = function(e, t) {
				return t || O(e, 8, this.length), i.read(this, e, !1, 52, 8)
			}, u.prototype.writeUIntLE = function(e, t, r, n) {
				(e = +e, t |= 0, r |= 0, n) || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
				var i = 1,
					o = 0;
				for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
				return t + r
			}, u.prototype.writeUIntBE = function(e, t, r, n) {
				(e = +e, t |= 0, r |= 0, n) || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
				var i = r - 1,
					o = 1;
				for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
				return t + r
			}, u.prototype.writeUInt8 = function(e, t, r) {
				return e = +e, t |= 0, r || P(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
			}, u.prototype.writeUInt16LE = function(e, t, r) {
				return e = +e, t |= 0, r || P(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : I(this, e, t, !0), t + 2
			}, u.prototype.writeUInt16BE = function(e, t, r) {
				return e = +e, t |= 0, r || P(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : I(this, e, t, !1), t + 2
			}, u.prototype.writeUInt32LE = function(e, t, r) {
				return e = +e, t |= 0, r || P(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : B(this, e, t, !0), t + 4
			}, u.prototype.writeUInt32BE = function(e, t, r) {
				return e = +e, t |= 0, r || P(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : B(this, e, t, !1), t + 4
			}, u.prototype.writeIntLE = function(e, t, r, n) {
				if (e = +e, t |= 0, !n) {
					var i = Math.pow(2, 8 * r - 1);
					P(this, e, t, r, i - 1, -i)
				}
				var o = 0,
					a = 1,
					s = 0;
				for (this[t] = 255 & e; ++o < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
				return t + r
			}, u.prototype.writeIntBE = function(e, t, r, n) {
				if (e = +e, t |= 0, !n) {
					var i = Math.pow(2, 8 * r - 1);
					P(this, e, t, r, i - 1, -i)
				}
				var o = r - 1,
					a = 1,
					s = 0;
				for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
				return t + r
			}, u.prototype.writeInt8 = function(e, t, r) {
				return e = +e, t |= 0, r || P(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
			}, u.prototype.writeInt16LE = function(e, t, r) {
				return e = +e, t |= 0, r || P(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : I(this, e, t, !0), t + 2
			}, u.prototype.writeInt16BE = function(e, t, r) {
				return e = +e, t |= 0, r || P(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : I(this, e, t, !1), t + 2
			}, u.prototype.writeInt32LE = function(e, t, r) {
				return e = +e, t |= 0, r || P(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : B(this, e, t, !0), t + 4
			}, u.prototype.writeInt32BE = function(e, t, r) {
				return e = +e, t |= 0, r || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : B(this, e, t, !1), t + 4
			}, u.prototype.writeFloatLE = function(e, t, r) {
				return j(this, e, t, !0, r)
			}, u.prototype.writeFloatBE = function(e, t, r) {
				return j(this, e, t, !1, r)
			}, u.prototype.writeDoubleLE = function(e, t, r) {
				return N(this, e, t, !0, r)
			}, u.prototype.writeDoubleBE = function(e, t, r) {
				return N(this, e, t, !1, r)
			}, u.prototype.copy = function(e, t, r, n) {
				if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
				var i, o = n - r;
				if (this === e && r < t && t < n)
					for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
				else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
					for (i = 0; i < o; ++i) e[i + t] = this[i + r];
				else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
				return o
			}, u.prototype.fill = function(e, t, r, n) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
						var i = e.charCodeAt(0);
						i < 256 && (e = i)
					}
					if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
					if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
				if (r <= t) return this;
				var o;
				if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
					for (o = t; o < r; ++o) this[o] = e;
				else {
					var a = u.isBuffer(e) ? e : D(new u(e, n).toString()),
						s = a.length;
					for (o = 0; o < r - t; ++o) this[o + t] = a[o % s]
				}
				return this
			};
			var U = /[^+\/0-9A-Za-z-_]/g;

			function q(e) {
				return e < 16 ? "0" + e.toString(16) : e.toString(16)
			}

			function D(e, t) {
				var r;
				t = t || 1 / 0;
				for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
					if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
						if (!i) {
							if (r > 56319) {
								(t -= 3) > -1 && o.push(239, 191, 189);
								continue
							}
							if (a + 1 === n) {
								(t -= 3) > -1 && o.push(239, 191, 189);
								continue
							}
							i = r;
							continue
						}
						if (r < 56320) {
							(t -= 3) > -1 && o.push(239, 191, 189), i = r;
							continue
						}
						r = 65536 + (i - 55296 << 10 | r - 56320)
					} else i && (t -= 3) > -1 && o.push(239, 191, 189);
					if (i = null, r < 128) {
						if ((t -= 1) < 0) break;
						o.push(r)
					} else if (r < 2048) {
						if ((t -= 2) < 0) break;
						o.push(r >> 6 | 192, 63 & r | 128)
					} else if (r < 65536) {
						if ((t -= 3) < 0) break;
						o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
					} else {
						if (!(r < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
					}
				}
				return o
			}

			function H(e) {
				return n.toByteArray(function(e) {
					if ((e = function(e) {
							return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
						}(e).replace(U, "")).length < 2) return "";
					for (; e.length % 4 != 0;) e += "=";
					return e
				}(e))
			}

			function z(e, t, r, n) {
				for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
				return i
			}
		}).call(this, r(6))
	}, function(e, t) {
		"function" == typeof Object.create ? e.exports = function(e, t) {
			t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}))
		} : e.exports = function(e, t) {
			if (t) {
				e.super_ = t;
				var r = function() {};
				r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
			}
		}
	}, function(e, t, r) {
		"use strict";
		r.d(t, "b", (function() {
			return 256
		})), r.d(t, "g", (function() {
			return 256
		})), r.d(t, "a", (function() {
			return "AES-CBC"
		})), r.d(t, "f", (function() {
			return "SHA-256"
		})), r.d(t, "e", (function() {
			return "HMAC"
		})), r.d(t, "i", (function() {
			return "SHA-256"
		})), r.d(t, "j", (function() {
			return "SHA-512"
		})), r.d(t, "h", (function() {
			return 512
		})), r.d(t, "d", (function() {
			return "encrypt"
		})), r.d(t, "c", (function() {
			return "decrypt"
		})), r.d(t, "k", (function() {
			return "sign"
		})), r.d(t, "l", (function() {
			return "verify"
		}))
	}, function(e, t) {
		var r, n, i = e.exports = {};

		function o() {
			throw new Error("setTimeout has not been defined")
		}

		function a() {
			throw new Error("clearTimeout has not been defined")
		}

		function s(e) {
			if (r === setTimeout) return setTimeout(e, 0);
			if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
			try {
				return r(e, 0)
			} catch (t) {
				try {
					return r.call(null, e, 0)
				} catch (t) {
					return r.call(this, e, 0)
				}
			}
		}! function() {
			try {
				r = "function" == typeof setTimeout ? setTimeout : o
			} catch (e) {
				r = o
			}
			try {
				n = "function" == typeof clearTimeout ? clearTimeout : a
			} catch (e) {
				n = a
			}
		}();
		var u, c = [],
			f = !1,
			h = -1;

		function l() {
			f && u && (f = !1, u.length ? c = u.concat(c) : h = -1, c.length && d())
		}

		function d() {
			if (!f) {
				var e = s(l);
				f = !0;
				for (var t = c.length; t;) {
					for (u = c, c = []; ++h < t;) u && u[h].run();
					h = -1, t = c.length
				}
				u = null, f = !1,
					function(e) {
						if (n === clearTimeout) return clearTimeout(e);
						if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
						try {
							n(e)
						} catch (t) {
							try {
								return n.call(null, e)
							} catch (t) {
								return n.call(this, e)
							}
						}
					}(e)
			}
		}

		function p(e, t) {
			this.fun = e, this.array = t
		}

		function b() {}
		i.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
			c.push(new p(e, t)), 1 !== c.length || f || s(d)
		}, p.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = b, i.addListener = b, i.once = b, i.off = b, i.removeListener = b, i.removeAllListeners = b, i.emit = b, i.prependListener = b, i.prependOnceListener = b, i.listeners = function(e) {
			return []
		}, i.binding = function(e) {
			throw new Error("process.binding is not supported")
		}, i.cwd = function() {
			return "/"
		}, i.chdir = function(e) {
			throw new Error("process.chdir is not supported")
		}, i.umask = function() {
			return 0
		}
	}, function(e, t) {
		var r;
		r = function() {
			return this
		}();
		try {
			r = r || new Function("return this")()
		} catch (e) {
			"object" == typeof window && (r = window)
		}
		e.exports = r
	}, function(e, t, r) {
		"use strict";
		r.d(t, "a", (function() {
			return n
		})), r.d(t, "c", (function() {
			return i
		})), r.d(t, "b", (function() {
			return o
		})), r.d(t, "d", (function() {
			return a
		})), r.d(t, "e", (function() {
			return s
		}));
		const n = "INTERNAL_ERROR",
			i = "SERVER_ERROR",
			o = [-32700, -32600, -32601, -32602, -32603],
			a = [-32e3, -32099],
			s = {
				PARSE_ERROR: {
					code: -32700,
					message: "Parse error"
				},
				INVALID_REQUEST: {
					code: -32600,
					message: "Invalid Request"
				},
				METHOD_NOT_FOUND: {
					code: -32601,
					message: "Method not found"
				},
				INVALID_PARAMS: {
					code: -32602,
					message: "Invalid params"
				},
				[n]: {
					code: -32603,
					message: "Internal error"
				},
				[i]: {
					code: -32e3,
					message: "Server error"
				}
			}
	}, function(e, t, r) {
		"use strict";
		var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
				void 0 === n && (n = r), Object.defineProperty(e, n, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, n) {
				void 0 === n && (n = r), e[n] = t[r]
			}),
			i = this && this.__exportStar || function(e, t) {
				for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), i(r(172), t), i(r(173), t)
	}, function(e, t, r) {
		(function(e) {
			! function(e, t) {
				"use strict";

				function n(e, t) {
					if (!e) throw new Error(t || "Assertion failed")
				}

				function i(e, t) {
					e.super_ = t;
					var r = function() {};
					r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
				}

				function o(e, t, r) {
					if (o.isBN(e)) return e;
					this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
				}
				var a;
				"object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
				try {
					a = r(167).Buffer
				} catch (e) {}

				function s(e, t, r) {
					for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
						var a = e.charCodeAt(o) - 48;
						n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a
					}
					return n
				}

				function u(e, t, r, n) {
					for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
						var s = e.charCodeAt(a) - 48;
						i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
					}
					return i
				}
				o.isBN = function(e) {
					return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
				}, o.max = function(e, t) {
					return e.cmp(t) > 0 ? e : t
				}, o.min = function(e, t) {
					return e.cmp(t) < 0 ? e : t
				}, o.prototype._init = function(e, t, r) {
					if ("number" == typeof e) return this._initNumber(e, t, r);
					if ("object" == typeof e) return this._initArray(e, t, r);
					"hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
					var i = 0;
					"-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), t, r)
				}, o.prototype._initNumber = function(e, t, r) {
					e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
				}, o.prototype._initArray = function(e, t, r) {
					if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
					this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
					for (var i = 0; i < this.length; i++) this.words[i] = 0;
					var o, a, s = 0;
					if ("be" === r)
						for (i = e.length - 1, o = 0; i >= 0; i -= 3) a = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
					else if ("le" === r)
						for (i = 0, o = 0; i < e.length; i += 3) a = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
					return this.strip()
				}, o.prototype._parseHex = function(e, t) {
					this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
					for (var r = 0; r < this.length; r++) this.words[r] = 0;
					var n, i, o = 0;
					for (r = e.length - 6, n = 0; r >= t; r -= 6) i = s(e, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);
					r + 6 !== t && (i = s(e, t, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip()
				}, o.prototype._parseBase = function(e, t, r) {
					this.words = [0], this.length = 1;
					for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
					n--, i = i / t | 0;
					for (var o = e.length - r, a = o % n, s = Math.min(o, o - a) + r, c = 0, f = r; f < s; f += n) c = u(e, f, f + n, t), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
					if (0 !== a) {
						var h = 1;
						for (c = u(e, f, e.length, t), f = 0; f < a; f++) h *= t;
						this.imuln(h), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
					}
				}, o.prototype.copy = function(e) {
					e.words = new Array(this.length);
					for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
					e.length = this.length, e.negative = this.negative, e.red = this.red
				}, o.prototype.clone = function() {
					var e = new o(null);
					return this.copy(e), e
				}, o.prototype._expand = function(e) {
					for (; this.length < e;) this.words[this.length++] = 0;
					return this
				}, o.prototype.strip = function() {
					for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
					return this._normSign()
				}, o.prototype._normSign = function() {
					return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
				}, o.prototype.inspect = function() {
					return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
				};
				var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
					f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
					h = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

				function l(e, t, r) {
					r.negative = t.negative ^ e.negative;
					var n = e.length + t.length | 0;
					r.length = n, n = n - 1 | 0;
					var i = 0 | e.words[0],
						o = 0 | t.words[0],
						a = i * o,
						s = 67108863 & a,
						u = a / 67108864 | 0;
					r.words[0] = s;
					for (var c = 1; c < n; c++) {
						for (var f = u >>> 26, h = 67108863 & u, l = Math.min(c, t.length - 1), d = Math.max(0, c - e.length + 1); d <= l; d++) {
							var p = c - d | 0;
							f += (a = (i = 0 | e.words[p]) * (o = 0 | t.words[d]) + h) / 67108864 | 0, h = 67108863 & a
						}
						r.words[c] = 0 | h, u = 0 | f
					}
					return 0 !== u ? r.words[c] = 0 | u : r.length--, r.strip()
				}
				o.prototype.toString = function(e, t) {
					var r;
					if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
						r = "";
						for (var i = 0, o = 0, a = 0; a < this.length; a++) {
							var s = this.words[a],
								u = (16777215 & (s << i | o)).toString(16);
							r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? c[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, a--)
						}
						for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;) r = "0" + r;
						return 0 !== this.negative && (r = "-" + r), r
					}
					if (e === (0 | e) && e >= 2 && e <= 36) {
						var l = f[e],
							d = h[e];
						r = "";
						var p = this.clone();
						for (p.negative = 0; !p.isZero();) {
							var b = p.modn(d).toString(e);
							r = (p = p.idivn(d)).isZero() ? b + r : c[l - b.length] + b + r
						}
						for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
						return 0 !== this.negative && (r = "-" + r), r
					}
					n(!1, "Base should be between 2 and 36")
				}, o.prototype.toNumber = function() {
					var e = this.words[0];
					return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
				}, o.prototype.toJSON = function() {
					return this.toString(16)
				}, o.prototype.toBuffer = function(e, t) {
					return n(void 0 !== a), this.toArrayLike(a, e, t)
				}, o.prototype.toArray = function(e, t) {
					return this.toArrayLike(Array, e, t)
				}, o.prototype.toArrayLike = function(e, t, r) {
					var i = this.byteLength(),
						o = r || Math.max(1, i);
					n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
					var a, s, u = "le" === t,
						c = new e(o),
						f = this.clone();
					if (u) {
						for (s = 0; !f.isZero(); s++) a = f.andln(255), f.iushrn(8), c[s] = a;
						for (; s < o; s++) c[s] = 0
					} else {
						for (s = 0; s < o - i; s++) c[s] = 0;
						for (s = 0; !f.isZero(); s++) a = f.andln(255), f.iushrn(8), c[o - s - 1] = a
					}
					return c
				}, Math.clz32 ? o.prototype._countBits = function(e) {
					return 32 - Math.clz32(e)
				} : o.prototype._countBits = function(e) {
					var t = e,
						r = 0;
					return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
				}, o.prototype._zeroBits = function(e) {
					if (0 === e) return 26;
					var t = e,
						r = 0;
					return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r
				}, o.prototype.bitLength = function() {
					var e = this.words[this.length - 1],
						t = this._countBits(e);
					return 26 * (this.length - 1) + t
				}, o.prototype.zeroBits = function() {
					if (this.isZero()) return 0;
					for (var e = 0, t = 0; t < this.length; t++) {
						var r = this._zeroBits(this.words[t]);
						if (e += r, 26 !== r) break
					}
					return e
				}, o.prototype.byteLength = function() {
					return Math.ceil(this.bitLength() / 8)
				}, o.prototype.toTwos = function(e) {
					return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
				}, o.prototype.fromTwos = function(e) {
					return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
				}, o.prototype.isNeg = function() {
					return 0 !== this.negative
				}, o.prototype.neg = function() {
					return this.clone().ineg()
				}, o.prototype.ineg = function() {
					return this.isZero() || (this.negative ^= 1), this
				}, o.prototype.iuor = function(e) {
					for (; this.length < e.length;) this.words[this.length++] = 0;
					for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
					return this.strip()
				}, o.prototype.ior = function(e) {
					return n(0 == (this.negative | e.negative)), this.iuor(e)
				}, o.prototype.or = function(e) {
					return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
				}, o.prototype.uor = function(e) {
					return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
				}, o.prototype.iuand = function(e) {
					var t;
					t = this.length > e.length ? e : this;
					for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
					return this.length = t.length, this.strip()
				}, o.prototype.iand = function(e) {
					return n(0 == (this.negative | e.negative)), this.iuand(e)
				}, o.prototype.and = function(e) {
					return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
				}, o.prototype.uand = function(e) {
					return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
				}, o.prototype.iuxor = function(e) {
					var t, r;
					this.length > e.length ? (t = this, r = e) : (t = e, r = this);
					for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
					if (this !== t)
						for (; n < t.length; n++) this.words[n] = t.words[n];
					return this.length = t.length, this.strip()
				}, o.prototype.ixor = function(e) {
					return n(0 == (this.negative | e.negative)), this.iuxor(e)
				}, o.prototype.xor = function(e) {
					return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
				}, o.prototype.uxor = function(e) {
					return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
				}, o.prototype.inotn = function(e) {
					n("number" == typeof e && e >= 0);
					var t = 0 | Math.ceil(e / 26),
						r = e % 26;
					this._expand(t), r > 0 && t--;
					for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
					return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
				}, o.prototype.notn = function(e) {
					return this.clone().inotn(e)
				}, o.prototype.setn = function(e, t) {
					n("number" == typeof e && e >= 0);
					var r = e / 26 | 0,
						i = e % 26;
					return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
				}, o.prototype.iadd = function(e) {
					var t, r, n;
					if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
					if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
					this.length > e.length ? (r = this, n = e) : (r = e, n = this);
					for (var i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
					for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
					if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
					else if (r !== this)
						for (; o < r.length; o++) this.words[o] = r.words[o];
					return this
				}, o.prototype.add = function(e) {
					var t;
					return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
				}, o.prototype.isub = function(e) {
					if (0 !== e.negative) {
						e.negative = 0;
						var t = this.iadd(e);
						return e.negative = 1, t._normSign()
					}
					if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
					var r, n, i = this.cmp(e);
					if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
					i > 0 ? (r = this, n = e) : (r = e, n = this);
					for (var o = 0, a = 0; a < n.length; a++) o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
					for (; 0 !== o && a < r.length; a++) o = (t = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
					if (0 === o && a < r.length && r !== this)
						for (; a < r.length; a++) this.words[a] = r.words[a];
					return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip()
				}, o.prototype.sub = function(e) {
					return this.clone().isub(e)
				};
				var d = function(e, t, r) {
					var n, i, o, a = e.words,
						s = t.words,
						u = r.words,
						c = 0,
						f = 0 | a[0],
						h = 8191 & f,
						l = f >>> 13,
						d = 0 | a[1],
						p = 8191 & d,
						b = d >>> 13,
						g = 0 | a[2],
						m = 8191 & g,
						y = g >>> 13,
						v = 0 | a[3],
						_ = 8191 & v,
						w = v >>> 13,
						M = 0 | a[4],
						S = 8191 & M,
						x = M >>> 13,
						E = 0 | a[5],
						k = 8191 & E,
						A = E >>> 13,
						R = 0 | a[6],
						T = 8191 & R,
						C = R >>> 13,
						O = 0 | a[7],
						P = 8191 & O,
						I = O >>> 13,
						B = 0 | a[8],
						L = 8191 & B,
						j = B >>> 13,
						N = 0 | a[9],
						U = 8191 & N,
						q = N >>> 13,
						D = 0 | s[0],
						H = 8191 & D,
						z = D >>> 13,
						F = 0 | s[1],
						W = 8191 & F,
						K = F >>> 13,
						V = 0 | s[2],
						J = 8191 & V,
						Y = V >>> 13,
						G = 0 | s[3],
						Z = 8191 & G,
						$ = G >>> 13,
						X = 0 | s[4],
						Q = 8191 & X,
						ee = X >>> 13,
						te = 0 | s[5],
						re = 8191 & te,
						ne = te >>> 13,
						ie = 0 | s[6],
						oe = 8191 & ie,
						ae = ie >>> 13,
						se = 0 | s[7],
						ue = 8191 & se,
						ce = se >>> 13,
						fe = 0 | s[8],
						he = 8191 & fe,
						le = fe >>> 13,
						de = 0 | s[9],
						pe = 8191 & de,
						be = de >>> 13;
					r.negative = e.negative ^ t.negative, r.length = 19;
					var ge = (c + (n = Math.imul(h, H)) | 0) + ((8191 & (i = (i = Math.imul(h, z)) + Math.imul(l, H) | 0)) << 13) | 0;
					c = ((o = Math.imul(l, z)) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(p, H), i = (i = Math.imul(p, z)) + Math.imul(b, H) | 0, o = Math.imul(b, z);
					var me = (c + (n = n + Math.imul(h, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, K) | 0) + Math.imul(l, W) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, K) | 0) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(m, H), i = (i = Math.imul(m, z)) + Math.imul(y, H) | 0, o = Math.imul(y, z), n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, K) | 0) + Math.imul(b, W) | 0, o = o + Math.imul(b, K) | 0;
					var ye = (c + (n = n + Math.imul(h, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Y) | 0) + Math.imul(l, J) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, Y) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(_, H), i = (i = Math.imul(_, z)) + Math.imul(w, H) | 0, o = Math.imul(w, z), n = n + Math.imul(m, W) | 0, i = (i = i + Math.imul(m, K) | 0) + Math.imul(y, W) | 0, o = o + Math.imul(y, K) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, Y) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, Y) | 0;
					var ve = (c + (n = n + Math.imul(h, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, $) | 0) + Math.imul(l, Z) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, $) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(S, H), i = (i = Math.imul(S, z)) + Math.imul(x, H) | 0, o = Math.imul(x, z), n = n + Math.imul(_, W) | 0, i = (i = i + Math.imul(_, K) | 0) + Math.imul(w, W) | 0, o = o + Math.imul(w, K) | 0, n = n + Math.imul(m, J) | 0, i = (i = i + Math.imul(m, Y) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, Y) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, $) | 0;
					var _e = (c + (n = n + Math.imul(h, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(l, Q) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, ee) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(k, H), i = (i = Math.imul(k, z)) + Math.imul(A, H) | 0, o = Math.imul(A, z), n = n + Math.imul(S, W) | 0, i = (i = i + Math.imul(S, K) | 0) + Math.imul(x, W) | 0, o = o + Math.imul(x, K) | 0, n = n + Math.imul(_, J) | 0, i = (i = i + Math.imul(_, Y) | 0) + Math.imul(w, J) | 0, o = o + Math.imul(w, Y) | 0, n = n + Math.imul(m, Z) | 0, i = (i = i + Math.imul(m, $) | 0) + Math.imul(y, Z) | 0, o = o + Math.imul(y, $) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, ee) | 0;
					var we = (c + (n = n + Math.imul(h, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ne) | 0) + Math.imul(l, re) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, ne) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(T, H), i = (i = Math.imul(T, z)) + Math.imul(C, H) | 0, o = Math.imul(C, z), n = n + Math.imul(k, W) | 0, i = (i = i + Math.imul(k, K) | 0) + Math.imul(A, W) | 0, o = o + Math.imul(A, K) | 0, n = n + Math.imul(S, J) | 0, i = (i = i + Math.imul(S, Y) | 0) + Math.imul(x, J) | 0, o = o + Math.imul(x, Y) | 0, n = n + Math.imul(_, Z) | 0, i = (i = i + Math.imul(_, $) | 0) + Math.imul(w, Z) | 0, o = o + Math.imul(w, $) | 0, n = n + Math.imul(m, Q) | 0, i = (i = i + Math.imul(m, ee) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(b, re) | 0, o = o + Math.imul(b, ne) | 0;
					var Me = (c + (n = n + Math.imul(h, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ae) | 0) + Math.imul(l, oe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, ae) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(P, H), i = (i = Math.imul(P, z)) + Math.imul(I, H) | 0, o = Math.imul(I, z), n = n + Math.imul(T, W) | 0, i = (i = i + Math.imul(T, K) | 0) + Math.imul(C, W) | 0, o = o + Math.imul(C, K) | 0, n = n + Math.imul(k, J) | 0, i = (i = i + Math.imul(k, Y) | 0) + Math.imul(A, J) | 0, o = o + Math.imul(A, Y) | 0, n = n + Math.imul(S, Z) | 0, i = (i = i + Math.imul(S, $) | 0) + Math.imul(x, Z) | 0, o = o + Math.imul(x, $) | 0, n = n + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, ee) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, ee) | 0, n = n + Math.imul(m, re) | 0, i = (i = i + Math.imul(m, ne) | 0) + Math.imul(y, re) | 0, o = o + Math.imul(y, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, ae) | 0) + Math.imul(b, oe) | 0, o = o + Math.imul(b, ae) | 0;
					var Se = (c + (n = n + Math.imul(h, ue) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ce) | 0) + Math.imul(l, ue) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, ce) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(L, H), i = (i = Math.imul(L, z)) + Math.imul(j, H) | 0, o = Math.imul(j, z), n = n + Math.imul(P, W) | 0, i = (i = i + Math.imul(P, K) | 0) + Math.imul(I, W) | 0, o = o + Math.imul(I, K) | 0, n = n + Math.imul(T, J) | 0, i = (i = i + Math.imul(T, Y) | 0) + Math.imul(C, J) | 0, o = o + Math.imul(C, Y) | 0, n = n + Math.imul(k, Z) | 0, i = (i = i + Math.imul(k, $) | 0) + Math.imul(A, Z) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(S, Q) | 0, i = (i = i + Math.imul(S, ee) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, ee) | 0, n = n + Math.imul(_, re) | 0, i = (i = i + Math.imul(_, ne) | 0) + Math.imul(w, re) | 0, o = o + Math.imul(w, ne) | 0, n = n + Math.imul(m, oe) | 0, i = (i = i + Math.imul(m, ae) | 0) + Math.imul(y, oe) | 0, o = o + Math.imul(y, ae) | 0, n = n + Math.imul(p, ue) | 0, i = (i = i + Math.imul(p, ce) | 0) + Math.imul(b, ue) | 0, o = o + Math.imul(b, ce) | 0;
					var xe = (c + (n = n + Math.imul(h, he) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, le) | 0) + Math.imul(l, he) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, le) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(U, H), i = (i = Math.imul(U, z)) + Math.imul(q, H) | 0, o = Math.imul(q, z), n = n + Math.imul(L, W) | 0, i = (i = i + Math.imul(L, K) | 0) + Math.imul(j, W) | 0, o = o + Math.imul(j, K) | 0, n = n + Math.imul(P, J) | 0, i = (i = i + Math.imul(P, Y) | 0) + Math.imul(I, J) | 0, o = o + Math.imul(I, Y) | 0, n = n + Math.imul(T, Z) | 0, i = (i = i + Math.imul(T, $) | 0) + Math.imul(C, Z) | 0, o = o + Math.imul(C, $) | 0, n = n + Math.imul(k, Q) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, ee) | 0, n = n + Math.imul(S, re) | 0, i = (i = i + Math.imul(S, ne) | 0) + Math.imul(x, re) | 0, o = o + Math.imul(x, ne) | 0, n = n + Math.imul(_, oe) | 0, i = (i = i + Math.imul(_, ae) | 0) + Math.imul(w, oe) | 0, o = o + Math.imul(w, ae) | 0, n = n + Math.imul(m, ue) | 0, i = (i = i + Math.imul(m, ce) | 0) + Math.imul(y, ue) | 0, o = o + Math.imul(y, ce) | 0, n = n + Math.imul(p, he) | 0, i = (i = i + Math.imul(p, le) | 0) + Math.imul(b, he) | 0, o = o + Math.imul(b, le) | 0;
					var Ee = (c + (n = n + Math.imul(h, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, be) | 0) + Math.imul(l, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, be) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(U, W), i = (i = Math.imul(U, K)) + Math.imul(q, W) | 0, o = Math.imul(q, K), n = n + Math.imul(L, J) | 0, i = (i = i + Math.imul(L, Y) | 0) + Math.imul(j, J) | 0, o = o + Math.imul(j, Y) | 0, n = n + Math.imul(P, Z) | 0, i = (i = i + Math.imul(P, $) | 0) + Math.imul(I, Z) | 0, o = o + Math.imul(I, $) | 0, n = n + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, ee) | 0) + Math.imul(C, Q) | 0, o = o + Math.imul(C, ee) | 0, n = n + Math.imul(k, re) | 0, i = (i = i + Math.imul(k, ne) | 0) + Math.imul(A, re) | 0, o = o + Math.imul(A, ne) | 0, n = n + Math.imul(S, oe) | 0, i = (i = i + Math.imul(S, ae) | 0) + Math.imul(x, oe) | 0, o = o + Math.imul(x, ae) | 0, n = n + Math.imul(_, ue) | 0, i = (i = i + Math.imul(_, ce) | 0) + Math.imul(w, ue) | 0, o = o + Math.imul(w, ce) | 0, n = n + Math.imul(m, he) | 0, i = (i = i + Math.imul(m, le) | 0) + Math.imul(y, he) | 0, o = o + Math.imul(y, le) | 0;
					var ke = (c + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(b, be) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(U, J), i = (i = Math.imul(U, Y)) + Math.imul(q, J) | 0, o = Math.imul(q, Y), n = n + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, $) | 0) + Math.imul(j, Z) | 0, o = o + Math.imul(j, $) | 0, n = n + Math.imul(P, Q) | 0, i = (i = i + Math.imul(P, ee) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, ee) | 0, n = n + Math.imul(T, re) | 0, i = (i = i + Math.imul(T, ne) | 0) + Math.imul(C, re) | 0, o = o + Math.imul(C, ne) | 0, n = n + Math.imul(k, oe) | 0, i = (i = i + Math.imul(k, ae) | 0) + Math.imul(A, oe) | 0, o = o + Math.imul(A, ae) | 0, n = n + Math.imul(S, ue) | 0, i = (i = i + Math.imul(S, ce) | 0) + Math.imul(x, ue) | 0, o = o + Math.imul(x, ce) | 0, n = n + Math.imul(_, he) | 0, i = (i = i + Math.imul(_, le) | 0) + Math.imul(w, he) | 0, o = o + Math.imul(w, le) | 0;
					var Ae = (c + (n = n + Math.imul(m, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(m, be) | 0) + Math.imul(y, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(y, be) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(U, Z), i = (i = Math.imul(U, $)) + Math.imul(q, Z) | 0, o = Math.imul(q, $), n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(j, Q) | 0, o = o + Math.imul(j, ee) | 0, n = n + Math.imul(P, re) | 0, i = (i = i + Math.imul(P, ne) | 0) + Math.imul(I, re) | 0, o = o + Math.imul(I, ne) | 0, n = n + Math.imul(T, oe) | 0, i = (i = i + Math.imul(T, ae) | 0) + Math.imul(C, oe) | 0, o = o + Math.imul(C, ae) | 0, n = n + Math.imul(k, ue) | 0, i = (i = i + Math.imul(k, ce) | 0) + Math.imul(A, ue) | 0, o = o + Math.imul(A, ce) | 0, n = n + Math.imul(S, he) | 0, i = (i = i + Math.imul(S, le) | 0) + Math.imul(x, he) | 0, o = o + Math.imul(x, le) | 0;
					var Re = (c + (n = n + Math.imul(_, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, be) | 0) + Math.imul(w, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(w, be) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(U, Q), i = (i = Math.imul(U, ee)) + Math.imul(q, Q) | 0, o = Math.imul(q, ee), n = n + Math.imul(L, re) | 0, i = (i = i + Math.imul(L, ne) | 0) + Math.imul(j, re) | 0, o = o + Math.imul(j, ne) | 0, n = n + Math.imul(P, oe) | 0, i = (i = i + Math.imul(P, ae) | 0) + Math.imul(I, oe) | 0, o = o + Math.imul(I, ae) | 0, n = n + Math.imul(T, ue) | 0, i = (i = i + Math.imul(T, ce) | 0) + Math.imul(C, ue) | 0, o = o + Math.imul(C, ce) | 0, n = n + Math.imul(k, he) | 0, i = (i = i + Math.imul(k, le) | 0) + Math.imul(A, he) | 0, o = o + Math.imul(A, le) | 0;
					var Te = (c + (n = n + Math.imul(S, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, be) | 0) + Math.imul(x, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(x, be) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(U, re), i = (i = Math.imul(U, ne)) + Math.imul(q, re) | 0, o = Math.imul(q, ne), n = n + Math.imul(L, oe) | 0, i = (i = i + Math.imul(L, ae) | 0) + Math.imul(j, oe) | 0, o = o + Math.imul(j, ae) | 0, n = n + Math.imul(P, ue) | 0, i = (i = i + Math.imul(P, ce) | 0) + Math.imul(I, ue) | 0, o = o + Math.imul(I, ce) | 0, n = n + Math.imul(T, he) | 0, i = (i = i + Math.imul(T, le) | 0) + Math.imul(C, he) | 0, o = o + Math.imul(C, le) | 0;
					var Ce = (c + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, be) | 0) + Math.imul(A, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(A, be) | 0) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(U, oe), i = (i = Math.imul(U, ae)) + Math.imul(q, oe) | 0, o = Math.imul(q, ae), n = n + Math.imul(L, ue) | 0, i = (i = i + Math.imul(L, ce) | 0) + Math.imul(j, ue) | 0, o = o + Math.imul(j, ce) | 0, n = n + Math.imul(P, he) | 0, i = (i = i + Math.imul(P, le) | 0) + Math.imul(I, he) | 0, o = o + Math.imul(I, le) | 0;
					var Oe = (c + (n = n + Math.imul(T, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, be) | 0) + Math.imul(C, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(C, be) | 0) + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, n = Math.imul(U, ue), i = (i = Math.imul(U, ce)) + Math.imul(q, ue) | 0, o = Math.imul(q, ce), n = n + Math.imul(L, he) | 0, i = (i = i + Math.imul(L, le) | 0) + Math.imul(j, he) | 0, o = o + Math.imul(j, le) | 0;
					var Pe = (c + (n = n + Math.imul(P, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, be) | 0) + Math.imul(I, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(I, be) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(U, he), i = (i = Math.imul(U, le)) + Math.imul(q, he) | 0, o = Math.imul(q, le);
					var Ie = (c + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, be) | 0) + Math.imul(j, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(j, be) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863;
					var Be = (c + (n = Math.imul(U, pe)) | 0) + ((8191 & (i = (i = Math.imul(U, be)) + Math.imul(q, pe) | 0)) << 13) | 0;
					return c = ((o = Math.imul(q, be)) + (i >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, u[0] = ge, u[1] = me, u[2] = ye, u[3] = ve, u[4] = _e, u[5] = we, u[6] = Me, u[7] = Se, u[8] = xe, u[9] = Ee, u[10] = ke, u[11] = Ae, u[12] = Re, u[13] = Te, u[14] = Ce, u[15] = Oe, u[16] = Pe, u[17] = Ie, u[18] = Be, 0 !== c && (u[19] = c, r.length++), r
				};

				function p(e, t, r) {
					return (new b).mulp(e, t, r)
				}

				function b(e, t) {
					this.x = e, this.y = t
				}
				Math.imul || (d = l), o.prototype.mulTo = function(e, t) {
					var r = this.length + e.length;
					return 10 === this.length && 10 === e.length ? d(this, e, t) : r < 63 ? l(this, e, t) : r < 1024 ? function(e, t, r) {
						r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
						for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
							var a = i;
							i = 0;
							for (var s = 67108863 & n, u = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= u; c++) {
								var f = o - c,
									h = (0 | e.words[f]) * (0 | t.words[c]),
									l = 67108863 & h;
								s = 67108863 & (l = l + s | 0), i += (a = (a = a + (h / 67108864 | 0) | 0) + (l >>> 26) | 0) >>> 26, a &= 67108863
							}
							r.words[o] = s, n = a, a = i
						}
						return 0 !== n ? r.words[o] = n : r.length--, r.strip()
					}(this, e, t) : p(this, e, t)
				}, b.prototype.makeRBT = function(e) {
					for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
					return t
				}, b.prototype.revBin = function(e, t, r) {
					if (0 === e || e === r - 1) return e;
					for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
					return n
				}, b.prototype.permute = function(e, t, r, n, i, o) {
					for (var a = 0; a < o; a++) n[a] = t[e[a]], i[a] = r[e[a]]
				}, b.prototype.transform = function(e, t, r, n, i, o) {
					this.permute(o, e, t, r, n, i);
					for (var a = 1; a < i; a <<= 1)
						for (var s = a << 1, u = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), f = 0; f < i; f += s)
							for (var h = u, l = c, d = 0; d < a; d++) {
								var p = r[f + d],
									b = n[f + d],
									g = r[f + d + a],
									m = n[f + d + a],
									y = h * g - l * m;
								m = h * m + l * g, g = y, r[f + d] = p + g, n[f + d] = b + m, r[f + d + a] = p - g, n[f + d + a] = b - m, d !== s && (y = u * h - c * l, l = u * l + c * h, h = y)
							}
				}, b.prototype.guessLen13b = function(e, t) {
					var r = 1 | Math.max(t, e),
						n = 1 & r,
						i = 0;
					for (r = r / 2 | 0; r; r >>>= 1) i++;
					return 1 << i + 1 + n
				}, b.prototype.conjugate = function(e, t, r) {
					if (!(r <= 1))
						for (var n = 0; n < r / 2; n++) {
							var i = e[n];
							e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
						}
				}, b.prototype.normalize13b = function(e, t) {
					for (var r = 0, n = 0; n < t / 2; n++) {
						var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
						e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
					}
					return e
				}, b.prototype.convert13b = function(e, t, r, i) {
					for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
					for (a = 2 * t; a < i; ++a) r[a] = 0;
					n(0 === o), n(0 == (-8192 & o))
				}, b.prototype.stub = function(e) {
					for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
					return t
				}, b.prototype.mulp = function(e, t, r) {
					var n = 2 * this.guessLen13b(e.length, t.length),
						i = this.makeRBT(n),
						o = this.stub(n),
						a = new Array(n),
						s = new Array(n),
						u = new Array(n),
						c = new Array(n),
						f = new Array(n),
						h = new Array(n),
						l = r.words;
					l.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, c, n), this.transform(a, o, s, u, n, i), this.transform(c, o, f, h, n, i);
					for (var d = 0; d < n; d++) {
						var p = s[d] * f[d] - u[d] * h[d];
						u[d] = s[d] * h[d] + u[d] * f[d], s[d] = p
					}
					return this.conjugate(s, u, n), this.transform(s, u, l, o, n, i), this.conjugate(l, o, n), this.normalize13b(l, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
				}, o.prototype.mul = function(e) {
					var t = new o(null);
					return t.words = new Array(this.length + e.length), this.mulTo(e, t)
				}, o.prototype.mulf = function(e) {
					var t = new o(null);
					return t.words = new Array(this.length + e.length), p(this, e, t)
				}, o.prototype.imul = function(e) {
					return this.clone().mulTo(e, this)
				}, o.prototype.imuln = function(e) {
					n("number" == typeof e), n(e < 67108864);
					for (var t = 0, r = 0; r < this.length; r++) {
						var i = (0 | this.words[r]) * e,
							o = (67108863 & i) + (67108863 & t);
						t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o
					}
					return 0 !== t && (this.words[r] = t, this.length++), this
				}, o.prototype.muln = function(e) {
					return this.clone().imuln(e)
				}, o.prototype.sqr = function() {
					return this.mul(this)
				}, o.prototype.isqr = function() {
					return this.imul(this.clone())
				}, o.prototype.pow = function(e) {
					var t = function(e) {
						for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
							var n = r / 26 | 0,
								i = r % 26;
							t[r] = (e.words[n] & 1 << i) >>> i
						}
						return t
					}(e);
					if (0 === t.length) return new o(1);
					for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
					if (++n < t.length)
						for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
					return r
				}, o.prototype.iushln = function(e) {
					n("number" == typeof e && e >= 0);
					var t, r = e % 26,
						i = (e - r) / 26,
						o = 67108863 >>> 26 - r << 26 - r;
					if (0 !== r) {
						var a = 0;
						for (t = 0; t < this.length; t++) {
							var s = this.words[t] & o,
								u = (0 | this.words[t]) - s << r;
							this.words[t] = u | a, a = s >>> 26 - r
						}
						a && (this.words[t] = a, this.length++)
					}
					if (0 !== i) {
						for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
						for (t = 0; t < i; t++) this.words[t] = 0;
						this.length += i
					}
					return this.strip()
				}, o.prototype.ishln = function(e) {
					return n(0 === this.negative), this.iushln(e)
				}, o.prototype.iushrn = function(e, t, r) {
					var i;
					n("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
					var o = e % 26,
						a = Math.min((e - o) / 26, this.length),
						s = 67108863 ^ 67108863 >>> o << o,
						u = r;
					if (i -= a, i = Math.max(0, i), u) {
						for (var c = 0; c < a; c++) u.words[c] = this.words[c];
						u.length = a
					}
					if (0 === a);
					else if (this.length > a)
						for (this.length -= a, c = 0; c < this.length; c++) this.words[c] = this.words[c + a];
					else this.words[0] = 0, this.length = 1;
					var f = 0;
					for (c = this.length - 1; c >= 0 && (0 !== f || c >= i); c--) {
						var h = 0 | this.words[c];
						this.words[c] = f << 26 - o | h >>> o, f = h & s
					}
					return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
				}, o.prototype.ishrn = function(e, t, r) {
					return n(0 === this.negative), this.iushrn(e, t, r)
				}, o.prototype.shln = function(e) {
					return this.clone().ishln(e)
				}, o.prototype.ushln = function(e) {
					return this.clone().iushln(e)
				}, o.prototype.shrn = function(e) {
					return this.clone().ishrn(e)
				}, o.prototype.ushrn = function(e) {
					return this.clone().iushrn(e)
				}, o.prototype.testn = function(e) {
					n("number" == typeof e && e >= 0);
					var t = e % 26,
						r = (e - t) / 26,
						i = 1 << t;
					return !(this.length <= r) && !!(this.words[r] & i)
				}, o.prototype.imaskn = function(e) {
					n("number" == typeof e && e >= 0);
					var t = e % 26,
						r = (e - t) / 26;
					if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
					if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
						var i = 67108863 ^ 67108863 >>> t << t;
						this.words[this.length - 1] &= i
					}
					return this.strip()
				}, o.prototype.maskn = function(e) {
					return this.clone().imaskn(e)
				}, o.prototype.iaddn = function(e) {
					return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
				}, o.prototype._iaddn = function(e) {
					this.words[0] += e;
					for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
					return this.length = Math.max(this.length, t + 1), this
				}, o.prototype.isubn = function(e) {
					if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
					if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
					if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
					else
						for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
					return this.strip()
				}, o.prototype.addn = function(e) {
					return this.clone().iaddn(e)
				}, o.prototype.subn = function(e) {
					return this.clone().isubn(e)
				}, o.prototype.iabs = function() {
					return this.negative = 0, this
				}, o.prototype.abs = function() {
					return this.clone().iabs()
				}, o.prototype._ishlnsubmul = function(e, t, r) {
					var i, o, a = e.length + r;
					this._expand(a);
					var s = 0;
					for (i = 0; i < e.length; i++) {
						o = (0 | this.words[i + r]) + s;
						var u = (0 | e.words[i]) * t;
						s = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
					}
					for (; i < this.length - r; i++) s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o;
					if (0 === s) return this.strip();
					for (n(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
					return this.negative = 1, this.strip()
				}, o.prototype._wordDiv = function(e, t) {
					var r = (this.length, e.length),
						n = this.clone(),
						i = e,
						a = 0 | i.words[i.length - 1];
					0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
					var s, u = n.length - i.length;
					if ("mod" !== t) {
						(s = new o(null)).length = u + 1, s.words = new Array(s.length);
						for (var c = 0; c < s.length; c++) s.words[c] = 0
					}
					var f = n.clone()._ishlnsubmul(i, 1, u);
					0 === f.negative && (n = f, s && (s.words[u] = 1));
					for (var h = u - 1; h >= 0; h--) {
						var l = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
						for (l = Math.min(l / a | 0, 67108863), n._ishlnsubmul(i, l, h); 0 !== n.negative;) l--, n.negative = 0, n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
						s && (s.words[h] = l)
					}
					return s && s.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), {
						div: s || null,
						mod: n
					}
				}, o.prototype.divmod = function(e, t, r) {
					return n(!e.isZero()), this.isZero() ? {
						div: new o(0),
						mod: new o(0)
					} : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(e)), {
						div: i,
						mod: a
					}) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), {
						div: i,
						mod: s.mod
					}) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(e)), {
						div: s.div,
						mod: a
					}) : e.length > this.length || this.cmp(e) < 0 ? {
						div: new o(0),
						mod: this
					} : 1 === e.length ? "div" === t ? {
						div: this.divn(e.words[0]),
						mod: null
					} : "mod" === t ? {
						div: null,
						mod: new o(this.modn(e.words[0]))
					} : {
						div: this.divn(e.words[0]),
						mod: new o(this.modn(e.words[0]))
					} : this._wordDiv(e, t);
					var i, a, s
				}, o.prototype.div = function(e) {
					return this.divmod(e, "div", !1).div
				}, o.prototype.mod = function(e) {
					return this.divmod(e, "mod", !1).mod
				}, o.prototype.umod = function(e) {
					return this.divmod(e, "mod", !0).mod
				}, o.prototype.divRound = function(e) {
					var t = this.divmod(e);
					if (t.mod.isZero()) return t.div;
					var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
						n = e.ushrn(1),
						i = e.andln(1),
						o = r.cmp(n);
					return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
				}, o.prototype.modn = function(e) {
					n(e <= 67108863);
					for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--) r = (t * r + (0 | this.words[i])) % e;
					return r
				}, o.prototype.idivn = function(e) {
					n(e <= 67108863);
					for (var t = 0, r = this.length - 1; r >= 0; r--) {
						var i = (0 | this.words[r]) + 67108864 * t;
						this.words[r] = i / e | 0, t = i % e
					}
					return this.strip()
				}, o.prototype.divn = function(e) {
					return this.clone().idivn(e)
				}, o.prototype.egcd = function(e) {
					n(0 === e.negative), n(!e.isZero());
					var t = this,
						r = e.clone();
					t = 0 !== t.negative ? t.umod(e) : t.clone();
					for (var i = new o(1), a = new o(0), s = new o(0), u = new o(1), c = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++c;
					for (var f = r.clone(), h = t.clone(); !t.isZero();) {
						for (var l = 0, d = 1; 0 == (t.words[0] & d) && l < 26; ++l, d <<= 1);
						if (l > 0)
							for (t.iushrn(l); l-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(f), a.isub(h)), i.iushrn(1), a.iushrn(1);
						for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1);
						if (p > 0)
							for (r.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(f), u.isub(h)), s.iushrn(1), u.iushrn(1);
						t.cmp(r) >= 0 ? (t.isub(r), i.isub(s), a.isub(u)) : (r.isub(t), s.isub(i), u.isub(a))
					}
					return {
						a: s,
						b: u,
						gcd: r.iushln(c)
					}
				}, o.prototype._invmp = function(e) {
					n(0 === e.negative), n(!e.isZero());
					var t = this,
						r = e.clone();
					t = 0 !== t.negative ? t.umod(e) : t.clone();
					for (var i, a = new o(1), s = new o(0), u = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
						for (var c = 0, f = 1; 0 == (t.words[0] & f) && c < 26; ++c, f <<= 1);
						if (c > 0)
							for (t.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
						for (var h = 0, l = 1; 0 == (r.words[0] & l) && h < 26; ++h, l <<= 1);
						if (h > 0)
							for (r.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
						t.cmp(r) >= 0 ? (t.isub(r), a.isub(s)) : (r.isub(t), s.isub(a))
					}
					return (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i
				}, o.prototype.gcd = function(e) {
					if (this.isZero()) return e.abs();
					if (e.isZero()) return this.abs();
					var t = this.clone(),
						r = e.clone();
					t.negative = 0, r.negative = 0;
					for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
					for (;;) {
						for (; t.isEven();) t.iushrn(1);
						for (; r.isEven();) r.iushrn(1);
						var i = t.cmp(r);
						if (i < 0) {
							var o = t;
							t = r, r = o
						} else if (0 === i || 0 === r.cmpn(1)) break;
						t.isub(r)
					}
					return r.iushln(n)
				}, o.prototype.invm = function(e) {
					return this.egcd(e).a.umod(e)
				}, o.prototype.isEven = function() {
					return 0 == (1 & this.words[0])
				}, o.prototype.isOdd = function() {
					return 1 == (1 & this.words[0])
				}, o.prototype.andln = function(e) {
					return this.words[0] & e
				}, o.prototype.bincn = function(e) {
					n("number" == typeof e);
					var t = e % 26,
						r = (e - t) / 26,
						i = 1 << t;
					if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
					for (var o = i, a = r; 0 !== o && a < this.length; a++) {
						var s = 0 | this.words[a];
						o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
					}
					return 0 !== o && (this.words[a] = o, this.length++), this
				}, o.prototype.isZero = function() {
					return 1 === this.length && 0 === this.words[0]
				}, o.prototype.cmpn = function(e) {
					var t, r = e < 0;
					if (0 !== this.negative && !r) return -1;
					if (0 === this.negative && r) return 1;
					if (this.strip(), this.length > 1) t = 1;
					else {
						r && (e = -e), n(e <= 67108863, "Number is too big");
						var i = 0 | this.words[0];
						t = i === e ? 0 : i < e ? -1 : 1
					}
					return 0 !== this.negative ? 0 | -t : t
				}, o.prototype.cmp = function(e) {
					if (0 !== this.negative && 0 === e.negative) return -1;
					if (0 === this.negative && 0 !== e.negative) return 1;
					var t = this.ucmp(e);
					return 0 !== this.negative ? 0 | -t : t
				}, o.prototype.ucmp = function(e) {
					if (this.length > e.length) return 1;
					if (this.length < e.length) return -1;
					for (var t = 0, r = this.length - 1; r >= 0; r--) {
						var n = 0 | this.words[r],
							i = 0 | e.words[r];
						if (n !== i) {
							n < i ? t = -1 : n > i && (t = 1);
							break
						}
					}
					return t
				}, o.prototype.gtn = function(e) {
					return 1 === this.cmpn(e)
				}, o.prototype.gt = function(e) {
					return 1 === this.cmp(e)
				}, o.prototype.gten = function(e) {
					return this.cmpn(e) >= 0
				}, o.prototype.gte = function(e) {
					return this.cmp(e) >= 0
				}, o.prototype.ltn = function(e) {
					return -1 === this.cmpn(e)
				}, o.prototype.lt = function(e) {
					return -1 === this.cmp(e)
				}, o.prototype.lten = function(e) {
					return this.cmpn(e) <= 0
				}, o.prototype.lte = function(e) {
					return this.cmp(e) <= 0
				}, o.prototype.eqn = function(e) {
					return 0 === this.cmpn(e)
				}, o.prototype.eq = function(e) {
					return 0 === this.cmp(e)
				}, o.red = function(e) {
					return new M(e)
				}, o.prototype.toRed = function(e) {
					return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
				}, o.prototype.fromRed = function() {
					return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
				}, o.prototype._forceRed = function(e) {
					return this.red = e, this
				}, o.prototype.forceRed = function(e) {
					return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
				}, o.prototype.redAdd = function(e) {
					return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
				}, o.prototype.redIAdd = function(e) {
					return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
				}, o.prototype.redSub = function(e) {
					return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
				}, o.prototype.redISub = function(e) {
					return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
				}, o.prototype.redShl = function(e) {
					return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
				}, o.prototype.redMul = function(e) {
					return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
				}, o.prototype.redIMul = function(e) {
					return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
				}, o.prototype.redSqr = function() {
					return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
				}, o.prototype.redISqr = function() {
					return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
				}, o.prototype.redSqrt = function() {
					return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
				}, o.prototype.redInvm = function() {
					return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
				}, o.prototype.redNeg = function() {
					return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
				}, o.prototype.redPow = function(e) {
					return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
				};
				var g = {
					k256: null,
					p224: null,
					p192: null,
					p25519: null
				};

				function m(e, t) {
					this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
				}

				function y() {
					m.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
				}

				function v() {
					m.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
				}

				function _() {
					m.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
				}

				function w() {
					m.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
				}

				function M(e) {
					if ("string" == typeof e) {
						var t = o._prime(e);
						this.m = t.p, this.prime = t
					} else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
				}

				function S(e) {
					M.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
				}
				m.prototype._tmp = function() {
					var e = new o(null);
					return e.words = new Array(Math.ceil(this.n / 13)), e
				}, m.prototype.ireduce = function(e) {
					var t, r = e;
					do {
						this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
					} while (t > this.n);
					var n = t < this.n ? -1 : r.ucmp(this.p);
					return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r
				}, m.prototype.split = function(e, t) {
					e.iushrn(this.n, 0, t)
				}, m.prototype.imulK = function(e) {
					return e.imul(this.k)
				}, i(y, m), y.prototype.split = function(e, t) {
					for (var r = Math.min(e.length, 9), n = 0; n < r; n++) t.words[n] = e.words[n];
					if (t.length = r, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
					var i = e.words[9];
					for (t.words[t.length++] = 4194303 & i, n = 10; n < e.length; n++) {
						var o = 0 | e.words[n];
						e.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
					}
					i >>>= 22, e.words[n - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
				}, y.prototype.imulK = function(e) {
					e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
					for (var t = 0, r = 0; r < e.length; r++) {
						var n = 0 | e.words[r];
						t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
					}
					return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
				}, i(v, m), i(_, m), i(w, m), w.prototype.imulK = function(e) {
					for (var t = 0, r = 0; r < e.length; r++) {
						var n = 19 * (0 | e.words[r]) + t,
							i = 67108863 & n;
						n >>>= 26, e.words[r] = i, t = n
					}
					return 0 !== t && (e.words[e.length++] = t), e
				}, o._prime = function(e) {
					if (g[e]) return g[e];
					var t;
					if ("k256" === e) t = new y;
					else if ("p224" === e) t = new v;
					else if ("p192" === e) t = new _;
					else {
						if ("p25519" !== e) throw new Error("Unknown prime " + e);
						t = new w
					}
					return g[e] = t, t
				}, M.prototype._verify1 = function(e) {
					n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
				}, M.prototype._verify2 = function(e, t) {
					n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
				}, M.prototype.imod = function(e) {
					return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
				}, M.prototype.neg = function(e) {
					return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
				}, M.prototype.add = function(e, t) {
					this._verify2(e, t);
					var r = e.add(t);
					return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
				}, M.prototype.iadd = function(e, t) {
					this._verify2(e, t);
					var r = e.iadd(t);
					return r.cmp(this.m) >= 0 && r.isub(this.m), r
				}, M.prototype.sub = function(e, t) {
					this._verify2(e, t);
					var r = e.sub(t);
					return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
				}, M.prototype.isub = function(e, t) {
					this._verify2(e, t);
					var r = e.isub(t);
					return r.cmpn(0) < 0 && r.iadd(this.m), r
				}, M.prototype.shl = function(e, t) {
					return this._verify1(e), this.imod(e.ushln(t))
				}, M.prototype.imul = function(e, t) {
					return this._verify2(e, t), this.imod(e.imul(t))
				}, M.prototype.mul = function(e, t) {
					return this._verify2(e, t), this.imod(e.mul(t))
				}, M.prototype.isqr = function(e) {
					return this.imul(e, e.clone())
				}, M.prototype.sqr = function(e) {
					return this.mul(e, e)
				}, M.prototype.sqrt = function(e) {
					if (e.isZero()) return e.clone();
					var t = this.m.andln(3);
					if (n(t % 2 == 1), 3 === t) {
						var r = this.m.add(new o(1)).iushrn(2);
						return this.pow(e, r)
					}
					for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
					n(!i.isZero());
					var s = new o(1).toRed(this),
						u = s.redNeg(),
						c = this.m.subn(1).iushrn(1),
						f = this.m.bitLength();
					for (f = new o(2 * f * f).toRed(this); 0 !== this.pow(f, c).cmp(u);) f.redIAdd(u);
					for (var h = this.pow(f, i), l = this.pow(e, i.addn(1).iushrn(1)), d = this.pow(e, i), p = a; 0 !== d.cmp(s);) {
						for (var b = d, g = 0; 0 !== b.cmp(s); g++) b = b.redSqr();
						n(g < p);
						var m = this.pow(h, new o(1).iushln(p - g - 1));
						l = l.redMul(m), h = m.redSqr(), d = d.redMul(h), p = g
					}
					return l
				}, M.prototype.invm = function(e) {
					var t = e._invmp(this.m);
					return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
				}, M.prototype.pow = function(e, t) {
					if (t.isZero()) return new o(1).toRed(this);
					if (0 === t.cmpn(1)) return e.clone();
					var r = new Array(16);
					r[0] = new o(1).toRed(this), r[1] = e;
					for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
					var i = r[0],
						a = 0,
						s = 0,
						u = t.bitLength() % 26;
					for (0 === u && (u = 26), n = t.length - 1; n >= 0; n--) {
						for (var c = t.words[n], f = u - 1; f >= 0; f--) {
							var h = c >> f & 1;
							i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== a ? (a <<= 1, a |= h, (4 === ++s || 0 === n && 0 === f) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0
						}
						u = 26
					}
					return i
				}, M.prototype.convertTo = function(e) {
					var t = e.umod(this.m);
					return t === e ? t.clone() : t
				}, M.prototype.convertFrom = function(e) {
					var t = e.clone();
					return t.red = null, t
				}, o.mont = function(e) {
					return new S(e)
				}, i(S, M), S.prototype.convertTo = function(e) {
					return this.imod(e.ushln(this.shift))
				}, S.prototype.convertFrom = function(e) {
					var t = this.imod(e.mul(this.rinv));
					return t.red = null, t
				}, S.prototype.imul = function(e, t) {
					if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
					var r = e.imul(t),
						n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
						i = r.isub(n).iushrn(this.shift),
						o = i;
					return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
				}, S.prototype.mul = function(e, t) {
					if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
					var r = e.mul(t),
						n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
						i = r.isub(n).iushrn(this.shift),
						a = i;
					return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
				}, S.prototype.invm = function(e) {
					return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
				}
			}(e, this)
		}).call(this, r(33)(e))
	}, function(e, t, r) {
		"use strict";

		function n(e) {
			let t = void 0;
			return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
		}

		function i(e) {
			const t = n(e);
			if (!t) throw new Error(e + " is not defined in Window");
			return t
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = n, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() {
			return i("document")
		}, t.getDocument = function() {
			return n("document")
		}, t.getNavigatorOrThrow = function() {
			return i("navigator")
		}, t.getNavigator = function() {
			return n("navigator")
		}, t.getLocationOrThrow = function() {
			return i("location")
		}, t.getLocation = function() {
			return n("location")
		}, t.getCryptoOrThrow = function() {
			return i("crypto")
		}, t.getCrypto = function() {
			return n("crypto")
		}, t.getLocalStorageOrThrow = function() {
			return i("localStorage")
		}, t.getLocalStorage = function() {
			return n("localStorage")
		}
	}, function(e, t, r) {
		"use strict";
		var n = t,
			i = r(16),
			o = r(22),
			a = r(120);
		n.assert = o, n.toArray = a.toArray, n.zero2 = a.zero2, n.toHex = a.toHex, n.encode = a.encode, n.getNAF = function(e, t, r) {
			var n = new Array(Math.max(e.bitLength(), r) + 1);
			n.fill(0);
			for (var i = 1 << t + 1, o = e.clone(), a = 0; a < n.length; a++) {
				var s, u = o.andln(i - 1);
				o.isOdd() ? (s = u > (i >> 1) - 1 ? (i >> 1) - u : u, o.isubn(s)) : s = 0, n[a] = s, o.iushrn(1)
			}
			return n
		}, n.getJSF = function(e, t) {
			var r = [
				[],
				[]
			];
			e = e.clone(), t = t.clone();
			for (var n, i = 0, o = 0; e.cmpn(-i) > 0 || t.cmpn(-o) > 0;) {
				var a, s, u = e.andln(3) + i & 3,
					c = t.andln(3) + o & 3;
				3 === u && (u = -1), 3 === c && (c = -1), a = 0 == (1 & u) ? 0 : 3 !== (n = e.andln(7) + i & 7) && 5 !== n || 2 !== c ? u : -u, r[0].push(a), s = 0 == (1 & c) ? 0 : 3 !== (n = t.andln(7) + o & 7) && 5 !== n || 2 !== u ? c : -c, r[1].push(s), 2 * i === a + 1 && (i = 1 - i), 2 * o === s + 1 && (o = 1 - o), e.iushrn(1), t.iushrn(1)
			}
			return r
		}, n.cachedProperty = function(e, t, r) {
			var n = "_" + t;
			e.prototype[t] = function() {
				return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
			}
		}, n.parseBytes = function(e) {
			return "string" == typeof e ? n.toArray(e, "hex") : e
		}, n.intFromLE = function(e) {
			return new i(e, "hex", "le")
		}
	}, function(e, t, r) {
		"use strict";
		var n, i = "object" == typeof Reflect ? Reflect : null,
			o = i && "function" == typeof i.apply ? i.apply : function(e, t, r) {
				return Function.prototype.apply.call(e, t, r)
			};
		n = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
			return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
		} : function(e) {
			return Object.getOwnPropertyNames(e)
		};
		var a = Number.isNaN || function(e) {
			return e != e
		};

		function s() {
			s.init.call(this)
		}
		e.exports = s, e.exports.once = function(e, t) {
			return new Promise((function(r, n) {
				function i(r) {
					e.removeListener(t, o), n(r)
				}

				function o() {
					"function" == typeof e.removeListener && e.removeListener("error", i), r([].slice.call(arguments))
				}
				m(e, t, o, {
					once: !0
				}), "error" !== t && function(e, t, r) {
					"function" == typeof e.on && m(e, "error", t, r)
				}(e, i, {
					once: !0
				})
			}))
		}, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
		var u = 10;

		function c(e) {
			if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
		}

		function f(e) {
			return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
		}

		function h(e, t, r, n) {
			var i, o, a, s;
			if (c(r), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), a = o[t]), void 0 === a) a = o[t] = r, ++e._eventsCount;
			else if ("function" == typeof a ? a = o[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), (i = f(e)) > 0 && a.length > i && !a.warned) {
				a.warned = !0;
				var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
				u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = a.length, s = u, console && console.warn && console.warn(s)
			}
			return e
		}

		function l() {
			if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
		}

		function d(e, t, r) {
			var n = {
					fired: !1,
					wrapFn: void 0,
					target: e,
					type: t,
					listener: r
				},
				i = l.bind(n);
			return i.listener = r, n.wrapFn = i, i
		}

		function p(e, t, r) {
			var n = e._events;
			if (void 0 === n) return [];
			var i = n[t];
			return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(e) {
				for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
				return t
			}(i) : g(i, i.length)
		}

		function b(e) {
			var t = this._events;
			if (void 0 !== t) {
				var r = t[e];
				if ("function" == typeof r) return 1;
				if (void 0 !== r) return r.length
			}
			return 0
		}

		function g(e, t) {
			for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
			return r
		}

		function m(e, t, r, n) {
			if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
			else {
				if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
				e.addEventListener(t, (function i(o) {
					n.once && e.removeEventListener(t, i), r(o)
				}))
			}
		}
		Object.defineProperty(s, "defaultMaxListeners", {
			enumerable: !0,
			get: function() {
				return u
			},
			set: function(e) {
				if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
				u = e
			}
		}), s.init = function() {
			void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
		}, s.prototype.setMaxListeners = function(e) {
			if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
			return this._maxListeners = e, this
		}, s.prototype.getMaxListeners = function() {
			return f(this)
		}, s.prototype.emit = function(e) {
			for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
			var n = "error" === e,
				i = this._events;
			if (void 0 !== i) n = n && void 0 === i.error;
			else if (!n) return !1;
			if (n) {
				var a;
				if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
				var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
				throw s.context = a, s
			}
			var u = i[e];
			if (void 0 === u) return !1;
			if ("function" == typeof u) o(u, this, t);
			else {
				var c = u.length,
					f = g(u, c);
				for (r = 0; r < c; ++r) o(f[r], this, t)
			}
			return !0
		}, s.prototype.addListener = function(e, t) {
			return h(this, e, t, !1)
		}, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
			return h(this, e, t, !0)
		}, s.prototype.once = function(e, t) {
			return c(t), this.on(e, d(this, e, t)), this
		}, s.prototype.prependOnceListener = function(e, t) {
			return c(t), this.prependListener(e, d(this, e, t)), this
		}, s.prototype.removeListener = function(e, t) {
			var r, n, i, o, a;
			if (c(t), void 0 === (n = this._events)) return this;
			if (void 0 === (r = n[e])) return this;
			if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
			else if ("function" != typeof r) {
				for (i = -1, o = r.length - 1; o >= 0; o--)
					if (r[o] === t || r[o].listener === t) {
						a = r[o].listener, i = o;
						break
					} if (i < 0) return this;
				0 === i ? r.shift() : function(e, t) {
					for (; t + 1 < e.length; t++) e[t] = e[t + 1];
					e.pop()
				}(r, i), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, a || t)
			}
			return this
		}, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
			var t, r, n;
			if (void 0 === (r = this._events)) return this;
			if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
			if (0 === arguments.length) {
				var i, o = Object.keys(r);
				for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
				return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
			}
			if ("function" == typeof(t = r[e])) this.removeListener(e, t);
			else if (void 0 !== t)
				for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
			return this
		}, s.prototype.listeners = function(e) {
			return p(this, e, !0)
		}, s.prototype.rawListeners = function(e) {
			return p(this, e, !1)
		}, s.listenerCount = function(e, t) {
			return "function" == typeof e.listenerCount ? e.listenerCount(t) : b.call(e, t)
		}, s.prototype.listenerCount = b, s.prototype.eventNames = function() {
			return this._eventsCount > 0 ? n(this._events) : []
		}
	}, function(e, t, r) {
		var n = r(2),
			i = n.Buffer;

		function o(e, t) {
			for (var r in e) t[r] = e[r]
		}

		function a(e, t, r) {
			return i(e, t, r)
		}
		i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), a.prototype = Object.create(i.prototype), o(i, a), a.from = function(e, t, r) {
			if ("number" == typeof e) throw new TypeError("Argument must not be a number");
			return i(e, t, r)
		}, a.alloc = function(e, t, r) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			var n = i(e);
			return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
		}, a.allocUnsafe = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return i(e)
		}, a.allocUnsafeSlow = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return n.SlowBuffer(e)
		}
	}, function(e, t, r) {
		"use strict";
		r.d(t, "b", (function() {
			return a
		})), r.d(t, "a", (function() {
			return s
		})), r.d(t, "c", (function() {
			return u
		})), r.d(t, "d", (function() {
			return c
		})), r.d(t, "e", (function() {
			return f
		})), r.d(t, "f", (function() {
			return h
		}));
		var n = r(8),
			i = r(4);
		async function o(e, t = i.a) {
			return n.getSubtleCrypto().importKey("raw", e, function(e) {
				return e === i.a ? {
					length: i.b,
					name: i.a
				} : {
					hash: {
						name: i.f
					},
					name: i.e
				}
			}(t), !0, function(e) {
				return e === i.a ? [i.d, i.c] : [i.k, i.l]
			}(t))
		}
		async function a(e, t, r) {
			const a = n.getSubtleCrypto(),
				s = await o(t, i.a),
				u = await a.encrypt({
					iv: e,
					name: i.a
				}, s, r);
			return new Uint8Array(u)
		}
		async function s(e, t, r) {
			const a = n.getSubtleCrypto(),
				s = await o(t, i.a),
				u = await a.decrypt({
					iv: e,
					name: i.a
				}, s, r);
			return new Uint8Array(u)
		}
		async function u(e, t) {
			const r = n.getSubtleCrypto(),
				a = await o(e, i.e),
				s = await r.sign({
					length: i.g,
					name: i.e
				}, a, t);
			return new Uint8Array(s)
		}
		async function c(e, t) {
			const r = n.getSubtleCrypto(),
				a = await o(e, i.e),
				s = await r.sign({
					length: i.h,
					name: i.e
				}, a, t);
			return new Uint8Array(s)
		}
		async function f(e) {
			const t = n.getSubtleCrypto(),
				r = await t.digest({
					name: i.i
				}, e);
			return new Uint8Array(r)
		}
		async function h(e) {
			const t = n.getSubtleCrypto(),
				r = await t.digest({
					name: i.j
				}, e);
			return new Uint8Array(r)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(22),
			i = r(3);

		function o(e, t) {
			return 55296 == (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1)))
		}

		function a(e) {
			return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
		}

		function s(e) {
			return 1 === e.length ? "0" + e : e
		}

		function u(e) {
			return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
		}
		t.inherits = i, t.toArray = function(e, t) {
			if (Array.isArray(e)) return e.slice();
			if (!e) return [];
			var r = [];
			if ("string" == typeof e)
				if (t) {
					if ("hex" === t)
						for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16))
				} else
					for (var n = 0, i = 0; i < e.length; i++) {
						var a = e.charCodeAt(i);
						a < 128 ? r[n++] = a : a < 2048 ? (r[n++] = a >> 6 | 192, r[n++] = 63 & a | 128) : o(e, i) ? (a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = a >> 18 | 240, r[n++] = a >> 12 & 63 | 128, r[n++] = a >> 6 & 63 | 128, r[n++] = 63 & a | 128) : (r[n++] = a >> 12 | 224, r[n++] = a >> 6 & 63 | 128, r[n++] = 63 & a | 128)
					} else
						for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
			return r
		}, t.toHex = function(e) {
			for (var t = "", r = 0; r < e.length; r++) t += s(e[r].toString(16));
			return t
		}, t.htonl = a, t.toHex32 = function(e, t) {
			for (var r = "", n = 0; n < e.length; n++) {
				var i = e[n];
				"little" === t && (i = a(i)), r += u(i.toString(16))
			}
			return r
		}, t.zero2 = s, t.zero8 = u, t.join32 = function(e, t, r, i) {
			var o = r - t;
			n(o % 4 == 0);
			for (var a = new Array(o / 4), s = 0, u = t; s < a.length; s++, u += 4) {
				var c;
				c = "big" === i ? e[u] << 24 | e[u + 1] << 16 | e[u + 2] << 8 | e[u + 3] : e[u + 3] << 24 | e[u + 2] << 16 | e[u + 1] << 8 | e[u], a[s] = c >>> 0
			}
			return a
		}, t.split32 = function(e, t) {
			for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
				var o = e[n];
				"big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
			}
			return r
		}, t.rotr32 = function(e, t) {
			return e >>> t | e << 32 - t
		}, t.rotl32 = function(e, t) {
			return e << t | e >>> 32 - t
		}, t.sum32 = function(e, t) {
			return e + t >>> 0
		}, t.sum32_3 = function(e, t, r) {
			return e + t + r >>> 0
		}, t.sum32_4 = function(e, t, r, n) {
			return e + t + r + n >>> 0
		}, t.sum32_5 = function(e, t, r, n, i) {
			return e + t + r + n + i >>> 0
		}, t.sum64 = function(e, t, r, n) {
			var i = e[t],
				o = n + e[t + 1] >>> 0,
				a = (o < n ? 1 : 0) + r + i;
			e[t] = a >>> 0, e[t + 1] = o
		}, t.sum64_hi = function(e, t, r, n) {
			return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
		}, t.sum64_lo = function(e, t, r, n) {
			return t + n >>> 0
		}, t.sum64_4_hi = function(e, t, r, n, i, o, a, s) {
			var u = 0,
				c = t;
			return u += (c = c + n >>> 0) < t ? 1 : 0, u += (c = c + o >>> 0) < o ? 1 : 0, e + r + i + a + (u += (c = c + s >>> 0) < s ? 1 : 0) >>> 0
		}, t.sum64_4_lo = function(e, t, r, n, i, o, a, s) {
			return t + n + o + s >>> 0
		}, t.sum64_5_hi = function(e, t, r, n, i, o, a, s, u, c) {
			var f = 0,
				h = t;
			return f += (h = h + n >>> 0) < t ? 1 : 0, f += (h = h + o >>> 0) < o ? 1 : 0, f += (h = h + s >>> 0) < s ? 1 : 0, e + r + i + a + u + (f += (h = h + c >>> 0) < c ? 1 : 0) >>> 0
		}, t.sum64_5_lo = function(e, t, r, n, i, o, a, s, u, c) {
			return t + n + o + s + c >>> 0
		}, t.rotr64_hi = function(e, t, r) {
			return (t << 32 - r | e >>> r) >>> 0
		}, t.rotr64_lo = function(e, t, r) {
			return (e << 32 - r | t >>> r) >>> 0
		}, t.shr64_hi = function(e, t, r) {
			return e >>> r
		}, t.shr64_lo = function(e, t, r) {
			return (e << 32 - r | t >>> r) >>> 0
		}
	}, function(e, t, r) {
		(function(e) {
			! function(e, t) {
				"use strict";

				function n(e, t) {
					if (!e) throw new Error(t || "Assertion failed")
				}

				function i(e, t) {
					e.super_ = t;
					var r = function() {};
					r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
				}

				function o(e, t, r) {
					if (o.isBN(e)) return e;
					this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
				}
				var a;
				"object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
				try {
					a = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(245).Buffer
				} catch (e) {}

				function s(e, t) {
					var r = e.charCodeAt(t);
					return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
				}

				function u(e, t, r) {
					var n = s(e, r);
					return r - 1 >= t && (n |= s(e, r - 1) << 4), n
				}

				function c(e, t, r, n) {
					for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
						var s = e.charCodeAt(a) - 48;
						i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
					}
					return i
				}
				o.isBN = function(e) {
					return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
				}, o.max = function(e, t) {
					return e.cmp(t) > 0 ? e : t
				}, o.min = function(e, t) {
					return e.cmp(t) < 0 ? e : t
				}, o.prototype._init = function(e, t, r) {
					if ("number" == typeof e) return this._initNumber(e, t, r);
					if ("object" == typeof e) return this._initArray(e, t, r);
					"hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
					var i = 0;
					"-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < e.length && (16 === t ? this._parseHex(e, i, r) : (this._parseBase(e, t, i), "le" === r && this._initArray(this.toArray(), t, r)))
				}, o.prototype._initNumber = function(e, t, r) {
					e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
				}, o.prototype._initArray = function(e, t, r) {
					if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
					this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
					for (var i = 0; i < this.length; i++) this.words[i] = 0;
					var o, a, s = 0;
					if ("be" === r)
						for (i = e.length - 1, o = 0; i >= 0; i -= 3) a = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
					else if ("le" === r)
						for (i = 0, o = 0; i < e.length; i += 3) a = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
					return this.strip()
				}, o.prototype._parseHex = function(e, t, r) {
					this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
					for (var n = 0; n < this.length; n++) this.words[n] = 0;
					var i, o = 0,
						a = 0;
					if ("be" === r)
						for (n = e.length - 1; n >= t; n -= 2) i = u(e, t, n) << o, this.words[a] |= 67108863 & i, o >= 18 ? (o -= 18, a += 1, this.words[a] |= i >>> 26) : o += 8;
					else
						for (n = (e.length - t) % 2 == 0 ? t + 1 : t; n < e.length; n += 2) i = u(e, t, n) << o, this.words[a] |= 67108863 & i, o >= 18 ? (o -= 18, a += 1, this.words[a] |= i >>> 26) : o += 8;
					this.strip()
				}, o.prototype._parseBase = function(e, t, r) {
					this.words = [0], this.length = 1;
					for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
					n--, i = i / t | 0;
					for (var o = e.length - r, a = o % n, s = Math.min(o, o - a) + r, u = 0, f = r; f < s; f += n) u = c(e, f, f + n, t), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
					if (0 !== a) {
						var h = 1;
						for (u = c(e, f, e.length, t), f = 0; f < a; f++) h *= t;
						this.imuln(h), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
					}
					this.strip()
				}, o.prototype.copy = function(e) {
					e.words = new Array(this.length);
					for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
					e.length = this.length, e.negative = this.negative, e.red = this.red
				}, o.prototype.clone = function() {
					var e = new o(null);
					return this.copy(e), e
				}, o.prototype._expand = function(e) {
					for (; this.length < e;) this.words[this.length++] = 0;
					return this
				}, o.prototype.strip = function() {
					for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
					return this._normSign()
				}, o.prototype._normSign = function() {
					return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
				}, o.prototype.inspect = function() {
					return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
				};
				var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
					h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
					l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

				function d(e, t, r) {
					r.negative = t.negative ^ e.negative;
					var n = e.length + t.length | 0;
					r.length = n, n = n - 1 | 0;
					var i = 0 | e.words[0],
						o = 0 | t.words[0],
						a = i * o,
						s = 67108863 & a,
						u = a / 67108864 | 0;
					r.words[0] = s;
					for (var c = 1; c < n; c++) {
						for (var f = u >>> 26, h = 67108863 & u, l = Math.min(c, t.length - 1), d = Math.max(0, c - e.length + 1); d <= l; d++) {
							var p = c - d | 0;
							f += (a = (i = 0 | e.words[p]) * (o = 0 | t.words[d]) + h) / 67108864 | 0, h = 67108863 & a
						}
						r.words[c] = 0 | h, u = 0 | f
					}
					return 0 !== u ? r.words[c] = 0 | u : r.length--, r.strip()
				}
				o.prototype.toString = function(e, t) {
					var r;
					if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
						r = "";
						for (var i = 0, o = 0, a = 0; a < this.length; a++) {
							var s = this.words[a],
								u = (16777215 & (s << i | o)).toString(16);
							r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? f[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, a--)
						}
						for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;) r = "0" + r;
						return 0 !== this.negative && (r = "-" + r), r
					}
					if (e === (0 | e) && e >= 2 && e <= 36) {
						var c = h[e],
							d = l[e];
						r = "";
						var p = this.clone();
						for (p.negative = 0; !p.isZero();) {
							var b = p.modn(d).toString(e);
							r = (p = p.idivn(d)).isZero() ? b + r : f[c - b.length] + b + r
						}
						for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
						return 0 !== this.negative && (r = "-" + r), r
					}
					n(!1, "Base should be between 2 and 36")
				}, o.prototype.toNumber = function() {
					var e = this.words[0];
					return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
				}, o.prototype.toJSON = function() {
					return this.toString(16)
				}, o.prototype.toBuffer = function(e, t) {
					return n(void 0 !== a), this.toArrayLike(a, e, t)
				}, o.prototype.toArray = function(e, t) {
					return this.toArrayLike(Array, e, t)
				}, o.prototype.toArrayLike = function(e, t, r) {
					var i = this.byteLength(),
						o = r || Math.max(1, i);
					n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
					var a, s, u = "le" === t,
						c = new e(o),
						f = this.clone();
					if (u) {
						for (s = 0; !f.isZero(); s++) a = f.andln(255), f.iushrn(8), c[s] = a;
						for (; s < o; s++) c[s] = 0
					} else {
						for (s = 0; s < o - i; s++) c[s] = 0;
						for (s = 0; !f.isZero(); s++) a = f.andln(255), f.iushrn(8), c[o - s - 1] = a
					}
					return c
				}, Math.clz32 ? o.prototype._countBits = function(e) {
					return 32 - Math.clz32(e)
				} : o.prototype._countBits = function(e) {
					var t = e,
						r = 0;
					return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
				}, o.prototype._zeroBits = function(e) {
					if (0 === e) return 26;
					var t = e,
						r = 0;
					return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r
				}, o.prototype.bitLength = function() {
					var e = this.words[this.length - 1],
						t = this._countBits(e);
					return 26 * (this.length - 1) + t
				}, o.prototype.zeroBits = function() {
					if (this.isZero()) return 0;
					for (var e = 0, t = 0; t < this.length; t++) {
						var r = this._zeroBits(this.words[t]);
						if (e += r, 26 !== r) break
					}
					return e
				}, o.prototype.byteLength = function() {
					return Math.ceil(this.bitLength() / 8)
				}, o.prototype.toTwos = function(e) {
					return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
				}, o.prototype.fromTwos = function(e) {
					return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
				}, o.prototype.isNeg = function() {
					return 0 !== this.negative
				}, o.prototype.neg = function() {
					return this.clone().ineg()
				}, o.prototype.ineg = function() {
					return this.isZero() || (this.negative ^= 1), this
				}, o.prototype.iuor = function(e) {
					for (; this.length < e.length;) this.words[this.length++] = 0;
					for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
					return this.strip()
				}, o.prototype.ior = function(e) {
					return n(0 == (this.negative | e.negative)), this.iuor(e)
				}, o.prototype.or = function(e) {
					return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
				}, o.prototype.uor = function(e) {
					return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
				}, o.prototype.iuand = function(e) {
					var t;
					t = this.length > e.length ? e : this;
					for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
					return this.length = t.length, this.strip()
				}, o.prototype.iand = function(e) {
					return n(0 == (this.negative | e.negative)), this.iuand(e)
				}, o.prototype.and = function(e) {
					return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
				}, o.prototype.uand = function(e) {
					return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
				}, o.prototype.iuxor = function(e) {
					var t, r;
					this.length > e.length ? (t = this, r = e) : (t = e, r = this);
					for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
					if (this !== t)
						for (; n < t.length; n++) this.words[n] = t.words[n];
					return this.length = t.length, this.strip()
				}, o.prototype.ixor = function(e) {
					return n(0 == (this.negative | e.negative)), this.iuxor(e)
				}, o.prototype.xor = function(e) {
					return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
				}, o.prototype.uxor = function(e) {
					return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
				}, o.prototype.inotn = function(e) {
					n("number" == typeof e && e >= 0);
					var t = 0 | Math.ceil(e / 26),
						r = e % 26;
					this._expand(t), r > 0 && t--;
					for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
					return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
				}, o.prototype.notn = function(e) {
					return this.clone().inotn(e)
				}, o.prototype.setn = function(e, t) {
					n("number" == typeof e && e >= 0);
					var r = e / 26 | 0,
						i = e % 26;
					return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
				}, o.prototype.iadd = function(e) {
					var t, r, n;
					if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
					if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
					this.length > e.length ? (r = this, n = e) : (r = e, n = this);
					for (var i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
					for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
					if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
					else if (r !== this)
						for (; o < r.length; o++) this.words[o] = r.words[o];
					return this
				}, o.prototype.add = function(e) {
					var t;
					return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
				}, o.prototype.isub = function(e) {
					if (0 !== e.negative) {
						e.negative = 0;
						var t = this.iadd(e);
						return e.negative = 1, t._normSign()
					}
					if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
					var r, n, i = this.cmp(e);
					if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
					i > 0 ? (r = this, n = e) : (r = e, n = this);
					for (var o = 0, a = 0; a < n.length; a++) o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
					for (; 0 !== o && a < r.length; a++) o = (t = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
					if (0 === o && a < r.length && r !== this)
						for (; a < r.length; a++) this.words[a] = r.words[a];
					return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip()
				}, o.prototype.sub = function(e) {
					return this.clone().isub(e)
				};
				var p = function(e, t, r) {
					var n, i, o, a = e.words,
						s = t.words,
						u = r.words,
						c = 0,
						f = 0 | a[0],
						h = 8191 & f,
						l = f >>> 13,
						d = 0 | a[1],
						p = 8191 & d,
						b = d >>> 13,
						g = 0 | a[2],
						m = 8191 & g,
						y = g >>> 13,
						v = 0 | a[3],
						_ = 8191 & v,
						w = v >>> 13,
						M = 0 | a[4],
						S = 8191 & M,
						x = M >>> 13,
						E = 0 | a[5],
						k = 8191 & E,
						A = E >>> 13,
						R = 0 | a[6],
						T = 8191 & R,
						C = R >>> 13,
						O = 0 | a[7],
						P = 8191 & O,
						I = O >>> 13,
						B = 0 | a[8],
						L = 8191 & B,
						j = B >>> 13,
						N = 0 | a[9],
						U = 8191 & N,
						q = N >>> 13,
						D = 0 | s[0],
						H = 8191 & D,
						z = D >>> 13,
						F = 0 | s[1],
						W = 8191 & F,
						K = F >>> 13,
						V = 0 | s[2],
						J = 8191 & V,
						Y = V >>> 13,
						G = 0 | s[3],
						Z = 8191 & G,
						$ = G >>> 13,
						X = 0 | s[4],
						Q = 8191 & X,
						ee = X >>> 13,
						te = 0 | s[5],
						re = 8191 & te,
						ne = te >>> 13,
						ie = 0 | s[6],
						oe = 8191 & ie,
						ae = ie >>> 13,
						se = 0 | s[7],
						ue = 8191 & se,
						ce = se >>> 13,
						fe = 0 | s[8],
						he = 8191 & fe,
						le = fe >>> 13,
						de = 0 | s[9],
						pe = 8191 & de,
						be = de >>> 13;
					r.negative = e.negative ^ t.negative, r.length = 19;
					var ge = (c + (n = Math.imul(h, H)) | 0) + ((8191 & (i = (i = Math.imul(h, z)) + Math.imul(l, H) | 0)) << 13) | 0;
					c = ((o = Math.imul(l, z)) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(p, H), i = (i = Math.imul(p, z)) + Math.imul(b, H) | 0, o = Math.imul(b, z);
					var me = (c + (n = n + Math.imul(h, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, K) | 0) + Math.imul(l, W) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, K) | 0) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(m, H), i = (i = Math.imul(m, z)) + Math.imul(y, H) | 0, o = Math.imul(y, z), n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, K) | 0) + Math.imul(b, W) | 0, o = o + Math.imul(b, K) | 0;
					var ye = (c + (n = n + Math.imul(h, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Y) | 0) + Math.imul(l, J) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, Y) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(_, H), i = (i = Math.imul(_, z)) + Math.imul(w, H) | 0, o = Math.imul(w, z), n = n + Math.imul(m, W) | 0, i = (i = i + Math.imul(m, K) | 0) + Math.imul(y, W) | 0, o = o + Math.imul(y, K) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, Y) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, Y) | 0;
					var ve = (c + (n = n + Math.imul(h, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, $) | 0) + Math.imul(l, Z) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, $) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(S, H), i = (i = Math.imul(S, z)) + Math.imul(x, H) | 0, o = Math.imul(x, z), n = n + Math.imul(_, W) | 0, i = (i = i + Math.imul(_, K) | 0) + Math.imul(w, W) | 0, o = o + Math.imul(w, K) | 0, n = n + Math.imul(m, J) | 0, i = (i = i + Math.imul(m, Y) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, Y) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, $) | 0;
					var _e = (c + (n = n + Math.imul(h, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(l, Q) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, ee) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(k, H), i = (i = Math.imul(k, z)) + Math.imul(A, H) | 0, o = Math.imul(A, z), n = n + Math.imul(S, W) | 0, i = (i = i + Math.imul(S, K) | 0) + Math.imul(x, W) | 0, o = o + Math.imul(x, K) | 0, n = n + Math.imul(_, J) | 0, i = (i = i + Math.imul(_, Y) | 0) + Math.imul(w, J) | 0, o = o + Math.imul(w, Y) | 0, n = n + Math.imul(m, Z) | 0, i = (i = i + Math.imul(m, $) | 0) + Math.imul(y, Z) | 0, o = o + Math.imul(y, $) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, ee) | 0;
					var we = (c + (n = n + Math.imul(h, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ne) | 0) + Math.imul(l, re) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, ne) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(T, H), i = (i = Math.imul(T, z)) + Math.imul(C, H) | 0, o = Math.imul(C, z), n = n + Math.imul(k, W) | 0, i = (i = i + Math.imul(k, K) | 0) + Math.imul(A, W) | 0, o = o + Math.imul(A, K) | 0, n = n + Math.imul(S, J) | 0, i = (i = i + Math.imul(S, Y) | 0) + Math.imul(x, J) | 0, o = o + Math.imul(x, Y) | 0, n = n + Math.imul(_, Z) | 0, i = (i = i + Math.imul(_, $) | 0) + Math.imul(w, Z) | 0, o = o + Math.imul(w, $) | 0, n = n + Math.imul(m, Q) | 0, i = (i = i + Math.imul(m, ee) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(b, re) | 0, o = o + Math.imul(b, ne) | 0;
					var Me = (c + (n = n + Math.imul(h, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ae) | 0) + Math.imul(l, oe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, ae) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(P, H), i = (i = Math.imul(P, z)) + Math.imul(I, H) | 0, o = Math.imul(I, z), n = n + Math.imul(T, W) | 0, i = (i = i + Math.imul(T, K) | 0) + Math.imul(C, W) | 0, o = o + Math.imul(C, K) | 0, n = n + Math.imul(k, J) | 0, i = (i = i + Math.imul(k, Y) | 0) + Math.imul(A, J) | 0, o = o + Math.imul(A, Y) | 0, n = n + Math.imul(S, Z) | 0, i = (i = i + Math.imul(S, $) | 0) + Math.imul(x, Z) | 0, o = o + Math.imul(x, $) | 0, n = n + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, ee) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, ee) | 0, n = n + Math.imul(m, re) | 0, i = (i = i + Math.imul(m, ne) | 0) + Math.imul(y, re) | 0, o = o + Math.imul(y, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, ae) | 0) + Math.imul(b, oe) | 0, o = o + Math.imul(b, ae) | 0;
					var Se = (c + (n = n + Math.imul(h, ue) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ce) | 0) + Math.imul(l, ue) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, ce) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(L, H), i = (i = Math.imul(L, z)) + Math.imul(j, H) | 0, o = Math.imul(j, z), n = n + Math.imul(P, W) | 0, i = (i = i + Math.imul(P, K) | 0) + Math.imul(I, W) | 0, o = o + Math.imul(I, K) | 0, n = n + Math.imul(T, J) | 0, i = (i = i + Math.imul(T, Y) | 0) + Math.imul(C, J) | 0, o = o + Math.imul(C, Y) | 0, n = n + Math.imul(k, Z) | 0, i = (i = i + Math.imul(k, $) | 0) + Math.imul(A, Z) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(S, Q) | 0, i = (i = i + Math.imul(S, ee) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, ee) | 0, n = n + Math.imul(_, re) | 0, i = (i = i + Math.imul(_, ne) | 0) + Math.imul(w, re) | 0, o = o + Math.imul(w, ne) | 0, n = n + Math.imul(m, oe) | 0, i = (i = i + Math.imul(m, ae) | 0) + Math.imul(y, oe) | 0, o = o + Math.imul(y, ae) | 0, n = n + Math.imul(p, ue) | 0, i = (i = i + Math.imul(p, ce) | 0) + Math.imul(b, ue) | 0, o = o + Math.imul(b, ce) | 0;
					var xe = (c + (n = n + Math.imul(h, he) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, le) | 0) + Math.imul(l, he) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, le) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(U, H), i = (i = Math.imul(U, z)) + Math.imul(q, H) | 0, o = Math.imul(q, z), n = n + Math.imul(L, W) | 0, i = (i = i + Math.imul(L, K) | 0) + Math.imul(j, W) | 0, o = o + Math.imul(j, K) | 0, n = n + Math.imul(P, J) | 0, i = (i = i + Math.imul(P, Y) | 0) + Math.imul(I, J) | 0, o = o + Math.imul(I, Y) | 0, n = n + Math.imul(T, Z) | 0, i = (i = i + Math.imul(T, $) | 0) + Math.imul(C, Z) | 0, o = o + Math.imul(C, $) | 0, n = n + Math.imul(k, Q) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, ee) | 0, n = n + Math.imul(S, re) | 0, i = (i = i + Math.imul(S, ne) | 0) + Math.imul(x, re) | 0, o = o + Math.imul(x, ne) | 0, n = n + Math.imul(_, oe) | 0, i = (i = i + Math.imul(_, ae) | 0) + Math.imul(w, oe) | 0, o = o + Math.imul(w, ae) | 0, n = n + Math.imul(m, ue) | 0, i = (i = i + Math.imul(m, ce) | 0) + Math.imul(y, ue) | 0, o = o + Math.imul(y, ce) | 0, n = n + Math.imul(p, he) | 0, i = (i = i + Math.imul(p, le) | 0) + Math.imul(b, he) | 0, o = o + Math.imul(b, le) | 0;
					var Ee = (c + (n = n + Math.imul(h, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, be) | 0) + Math.imul(l, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(l, be) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(U, W), i = (i = Math.imul(U, K)) + Math.imul(q, W) | 0, o = Math.imul(q, K), n = n + Math.imul(L, J) | 0, i = (i = i + Math.imul(L, Y) | 0) + Math.imul(j, J) | 0, o = o + Math.imul(j, Y) | 0, n = n + Math.imul(P, Z) | 0, i = (i = i + Math.imul(P, $) | 0) + Math.imul(I, Z) | 0, o = o + Math.imul(I, $) | 0, n = n + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, ee) | 0) + Math.imul(C, Q) | 0, o = o + Math.imul(C, ee) | 0, n = n + Math.imul(k, re) | 0, i = (i = i + Math.imul(k, ne) | 0) + Math.imul(A, re) | 0, o = o + Math.imul(A, ne) | 0, n = n + Math.imul(S, oe) | 0, i = (i = i + Math.imul(S, ae) | 0) + Math.imul(x, oe) | 0, o = o + Math.imul(x, ae) | 0, n = n + Math.imul(_, ue) | 0, i = (i = i + Math.imul(_, ce) | 0) + Math.imul(w, ue) | 0, o = o + Math.imul(w, ce) | 0, n = n + Math.imul(m, he) | 0, i = (i = i + Math.imul(m, le) | 0) + Math.imul(y, he) | 0, o = o + Math.imul(y, le) | 0;
					var ke = (c + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(b, be) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(U, J), i = (i = Math.imul(U, Y)) + Math.imul(q, J) | 0, o = Math.imul(q, Y), n = n + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, $) | 0) + Math.imul(j, Z) | 0, o = o + Math.imul(j, $) | 0, n = n + Math.imul(P, Q) | 0, i = (i = i + Math.imul(P, ee) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, ee) | 0, n = n + Math.imul(T, re) | 0, i = (i = i + Math.imul(T, ne) | 0) + Math.imul(C, re) | 0, o = o + Math.imul(C, ne) | 0, n = n + Math.imul(k, oe) | 0, i = (i = i + Math.imul(k, ae) | 0) + Math.imul(A, oe) | 0, o = o + Math.imul(A, ae) | 0, n = n + Math.imul(S, ue) | 0, i = (i = i + Math.imul(S, ce) | 0) + Math.imul(x, ue) | 0, o = o + Math.imul(x, ce) | 0, n = n + Math.imul(_, he) | 0, i = (i = i + Math.imul(_, le) | 0) + Math.imul(w, he) | 0, o = o + Math.imul(w, le) | 0;
					var Ae = (c + (n = n + Math.imul(m, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(m, be) | 0) + Math.imul(y, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(y, be) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(U, Z), i = (i = Math.imul(U, $)) + Math.imul(q, Z) | 0, o = Math.imul(q, $), n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(j, Q) | 0, o = o + Math.imul(j, ee) | 0, n = n + Math.imul(P, re) | 0, i = (i = i + Math.imul(P, ne) | 0) + Math.imul(I, re) | 0, o = o + Math.imul(I, ne) | 0, n = n + Math.imul(T, oe) | 0, i = (i = i + Math.imul(T, ae) | 0) + Math.imul(C, oe) | 0, o = o + Math.imul(C, ae) | 0, n = n + Math.imul(k, ue) | 0, i = (i = i + Math.imul(k, ce) | 0) + Math.imul(A, ue) | 0, o = o + Math.imul(A, ce) | 0, n = n + Math.imul(S, he) | 0, i = (i = i + Math.imul(S, le) | 0) + Math.imul(x, he) | 0, o = o + Math.imul(x, le) | 0;
					var Re = (c + (n = n + Math.imul(_, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, be) | 0) + Math.imul(w, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(w, be) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(U, Q), i = (i = Math.imul(U, ee)) + Math.imul(q, Q) | 0, o = Math.imul(q, ee), n = n + Math.imul(L, re) | 0, i = (i = i + Math.imul(L, ne) | 0) + Math.imul(j, re) | 0, o = o + Math.imul(j, ne) | 0, n = n + Math.imul(P, oe) | 0, i = (i = i + Math.imul(P, ae) | 0) + Math.imul(I, oe) | 0, o = o + Math.imul(I, ae) | 0, n = n + Math.imul(T, ue) | 0, i = (i = i + Math.imul(T, ce) | 0) + Math.imul(C, ue) | 0, o = o + Math.imul(C, ce) | 0, n = n + Math.imul(k, he) | 0, i = (i = i + Math.imul(k, le) | 0) + Math.imul(A, he) | 0, o = o + Math.imul(A, le) | 0;
					var Te = (c + (n = n + Math.imul(S, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, be) | 0) + Math.imul(x, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(x, be) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(U, re), i = (i = Math.imul(U, ne)) + Math.imul(q, re) | 0, o = Math.imul(q, ne), n = n + Math.imul(L, oe) | 0, i = (i = i + Math.imul(L, ae) | 0) + Math.imul(j, oe) | 0, o = o + Math.imul(j, ae) | 0, n = n + Math.imul(P, ue) | 0, i = (i = i + Math.imul(P, ce) | 0) + Math.imul(I, ue) | 0, o = o + Math.imul(I, ce) | 0, n = n + Math.imul(T, he) | 0, i = (i = i + Math.imul(T, le) | 0) + Math.imul(C, he) | 0, o = o + Math.imul(C, le) | 0;
					var Ce = (c + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, be) | 0) + Math.imul(A, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(A, be) | 0) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(U, oe), i = (i = Math.imul(U, ae)) + Math.imul(q, oe) | 0, o = Math.imul(q, ae), n = n + Math.imul(L, ue) | 0, i = (i = i + Math.imul(L, ce) | 0) + Math.imul(j, ue) | 0, o = o + Math.imul(j, ce) | 0, n = n + Math.imul(P, he) | 0, i = (i = i + Math.imul(P, le) | 0) + Math.imul(I, he) | 0, o = o + Math.imul(I, le) | 0;
					var Oe = (c + (n = n + Math.imul(T, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, be) | 0) + Math.imul(C, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(C, be) | 0) + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, n = Math.imul(U, ue), i = (i = Math.imul(U, ce)) + Math.imul(q, ue) | 0, o = Math.imul(q, ce), n = n + Math.imul(L, he) | 0, i = (i = i + Math.imul(L, le) | 0) + Math.imul(j, he) | 0, o = o + Math.imul(j, le) | 0;
					var Pe = (c + (n = n + Math.imul(P, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, be) | 0) + Math.imul(I, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(I, be) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(U, he), i = (i = Math.imul(U, le)) + Math.imul(q, he) | 0, o = Math.imul(q, le);
					var Ie = (c + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, be) | 0) + Math.imul(j, pe) | 0)) << 13) | 0;
					c = ((o = o + Math.imul(j, be) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863;
					var Be = (c + (n = Math.imul(U, pe)) | 0) + ((8191 & (i = (i = Math.imul(U, be)) + Math.imul(q, pe) | 0)) << 13) | 0;
					return c = ((o = Math.imul(q, be)) + (i >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, u[0] = ge, u[1] = me, u[2] = ye, u[3] = ve, u[4] = _e, u[5] = we, u[6] = Me, u[7] = Se, u[8] = xe, u[9] = Ee, u[10] = ke, u[11] = Ae, u[12] = Re, u[13] = Te, u[14] = Ce, u[15] = Oe, u[16] = Pe, u[17] = Ie, u[18] = Be, 0 !== c && (u[19] = c, r.length++), r
				};

				function b(e, t, r) {
					return (new g).mulp(e, t, r)
				}

				function g(e, t) {
					this.x = e, this.y = t
				}
				Math.imul || (p = d), o.prototype.mulTo = function(e, t) {
					var r = this.length + e.length;
					return 10 === this.length && 10 === e.length ? p(this, e, t) : r < 63 ? d(this, e, t) : r < 1024 ? function(e, t, r) {
						r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
						for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
							var a = i;
							i = 0;
							for (var s = 67108863 & n, u = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= u; c++) {
								var f = o - c,
									h = (0 | e.words[f]) * (0 | t.words[c]),
									l = 67108863 & h;
								s = 67108863 & (l = l + s | 0), i += (a = (a = a + (h / 67108864 | 0) | 0) + (l >>> 26) | 0) >>> 26, a &= 67108863
							}
							r.words[o] = s, n = a, a = i
						}
						return 0 !== n ? r.words[o] = n : r.length--, r.strip()
					}(this, e, t) : b(this, e, t)
				}, g.prototype.makeRBT = function(e) {
					for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
					return t
				}, g.prototype.revBin = function(e, t, r) {
					if (0 === e || e === r - 1) return e;
					for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
					return n
				}, g.prototype.permute = function(e, t, r, n, i, o) {
					for (var a = 0; a < o; a++) n[a] = t[e[a]], i[a] = r[e[a]]
				}, g.prototype.transform = function(e, t, r, n, i, o) {
					this.permute(o, e, t, r, n, i);
					for (var a = 1; a < i; a <<= 1)
						for (var s = a << 1, u = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), f = 0; f < i; f += s)
							for (var h = u, l = c, d = 0; d < a; d++) {
								var p = r[f + d],
									b = n[f + d],
									g = r[f + d + a],
									m = n[f + d + a],
									y = h * g - l * m;
								m = h * m + l * g, g = y, r[f + d] = p + g, n[f + d] = b + m, r[f + d + a] = p - g, n[f + d + a] = b - m, d !== s && (y = u * h - c * l, l = u * l + c * h, h = y)
							}
				}, g.prototype.guessLen13b = function(e, t) {
					var r = 1 | Math.max(t, e),
						n = 1 & r,
						i = 0;
					for (r = r / 2 | 0; r; r >>>= 1) i++;
					return 1 << i + 1 + n
				}, g.prototype.conjugate = function(e, t, r) {
					if (!(r <= 1))
						for (var n = 0; n < r / 2; n++) {
							var i = e[n];
							e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
						}
				}, g.prototype.normalize13b = function(e, t) {
					for (var r = 0, n = 0; n < t / 2; n++) {
						var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
						e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
					}
					return e
				}, g.prototype.convert13b = function(e, t, r, i) {
					for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
					for (a = 2 * t; a < i; ++a) r[a] = 0;
					n(0 === o), n(0 == (-8192 & o))
				}, g.prototype.stub = function(e) {
					for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
					return t
				}, g.prototype.mulp = function(e, t, r) {
					var n = 2 * this.guessLen13b(e.length, t.length),
						i = this.makeRBT(n),
						o = this.stub(n),
						a = new Array(n),
						s = new Array(n),
						u = new Array(n),
						c = new Array(n),
						f = new Array(n),
						h = new Array(n),
						l = r.words;
					l.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, c, n), this.transform(a, o, s, u, n, i), this.transform(c, o, f, h, n, i);
					for (var d = 0; d < n; d++) {
						var p = s[d] * f[d] - u[d] * h[d];
						u[d] = s[d] * h[d] + u[d] * f[d], s[d] = p
					}
					return this.conjugate(s, u, n), this.transform(s, u, l, o, n, i), this.conjugate(l, o, n), this.normalize13b(l, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
				}, o.prototype.mul = function(e) {
					var t = new o(null);
					return t.words = new Array(this.length + e.length), this.mulTo(e, t)
				}, o.prototype.mulf = function(e) {
					var t = new o(null);
					return t.words = new Array(this.length + e.length), b(this, e, t)
				}, o.prototype.imul = function(e) {
					return this.clone().mulTo(e, this)
				}, o.prototype.imuln = function(e) {
					n("number" == typeof e), n(e < 67108864);
					for (var t = 0, r = 0; r < this.length; r++) {
						var i = (0 | this.words[r]) * e,
							o = (67108863 & i) + (67108863 & t);
						t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o
					}
					return 0 !== t && (this.words[r] = t, this.length++), this
				}, o.prototype.muln = function(e) {
					return this.clone().imuln(e)
				}, o.prototype.sqr = function() {
					return this.mul(this)
				}, o.prototype.isqr = function() {
					return this.imul(this.clone())
				}, o.prototype.pow = function(e) {
					var t = function(e) {
						for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
							var n = r / 26 | 0,
								i = r % 26;
							t[r] = (e.words[n] & 1 << i) >>> i
						}
						return t
					}(e);
					if (0 === t.length) return new o(1);
					for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
					if (++n < t.length)
						for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
					return r
				}, o.prototype.iushln = function(e) {
					n("number" == typeof e && e >= 0);
					var t, r = e % 26,
						i = (e - r) / 26,
						o = 67108863 >>> 26 - r << 26 - r;
					if (0 !== r) {
						var a = 0;
						for (t = 0; t < this.length; t++) {
							var s = this.words[t] & o,
								u = (0 | this.words[t]) - s << r;
							this.words[t] = u | a, a = s >>> 26 - r
						}
						a && (this.words[t] = a, this.length++)
					}
					if (0 !== i) {
						for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
						for (t = 0; t < i; t++) this.words[t] = 0;
						this.length += i
					}
					return this.strip()
				}, o.prototype.ishln = function(e) {
					return n(0 === this.negative), this.iushln(e)
				}, o.prototype.iushrn = function(e, t, r) {
					var i;
					n("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
					var o = e % 26,
						a = Math.min((e - o) / 26, this.length),
						s = 67108863 ^ 67108863 >>> o << o,
						u = r;
					if (i -= a, i = Math.max(0, i), u) {
						for (var c = 0; c < a; c++) u.words[c] = this.words[c];
						u.length = a
					}
					if (0 === a);
					else if (this.length > a)
						for (this.length -= a, c = 0; c < this.length; c++) this.words[c] = this.words[c + a];
					else this.words[0] = 0, this.length = 1;
					var f = 0;
					for (c = this.length - 1; c >= 0 && (0 !== f || c >= i); c--) {
						var h = 0 | this.words[c];
						this.words[c] = f << 26 - o | h >>> o, f = h & s
					}
					return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
				}, o.prototype.ishrn = function(e, t, r) {
					return n(0 === this.negative), this.iushrn(e, t, r)
				}, o.prototype.shln = function(e) {
					return this.clone().ishln(e)
				}, o.prototype.ushln = function(e) {
					return this.clone().iushln(e)
				}, o.prototype.shrn = function(e) {
					return this.clone().ishrn(e)
				}, o.prototype.ushrn = function(e) {
					return this.clone().iushrn(e)
				}, o.prototype.testn = function(e) {
					n("number" == typeof e && e >= 0);
					var t = e % 26,
						r = (e - t) / 26,
						i = 1 << t;
					return !(this.length <= r) && !!(this.words[r] & i)
				}, o.prototype.imaskn = function(e) {
					n("number" == typeof e && e >= 0);
					var t = e % 26,
						r = (e - t) / 26;
					if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
					if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
						var i = 67108863 ^ 67108863 >>> t << t;
						this.words[this.length - 1] &= i
					}
					return this.strip()
				}, o.prototype.maskn = function(e) {
					return this.clone().imaskn(e)
				}, o.prototype.iaddn = function(e) {
					return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
				}, o.prototype._iaddn = function(e) {
					this.words[0] += e;
					for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
					return this.length = Math.max(this.length, t + 1), this
				}, o.prototype.isubn = function(e) {
					if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
					if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
					if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
					else
						for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
					return this.strip()
				}, o.prototype.addn = function(e) {
					return this.clone().iaddn(e)
				}, o.prototype.subn = function(e) {
					return this.clone().isubn(e)
				}, o.prototype.iabs = function() {
					return this.negative = 0, this
				}, o.prototype.abs = function() {
					return this.clone().iabs()
				}, o.prototype._ishlnsubmul = function(e, t, r) {
					var i, o, a = e.length + r;
					this._expand(a);
					var s = 0;
					for (i = 0; i < e.length; i++) {
						o = (0 | this.words[i + r]) + s;
						var u = (0 | e.words[i]) * t;
						s = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
					}
					for (; i < this.length - r; i++) s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o;
					if (0 === s) return this.strip();
					for (n(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
					return this.negative = 1, this.strip()
				}, o.prototype._wordDiv = function(e, t) {
					var r = (this.length, e.length),
						n = this.clone(),
						i = e,
						a = 0 | i.words[i.length - 1];
					0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
					var s, u = n.length - i.length;
					if ("mod" !== t) {
						(s = new o(null)).length = u + 1, s.words = new Array(s.length);
						for (var c = 0; c < s.length; c++) s.words[c] = 0
					}
					var f = n.clone()._ishlnsubmul(i, 1, u);
					0 === f.negative && (n = f, s && (s.words[u] = 1));
					for (var h = u - 1; h >= 0; h--) {
						var l = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
						for (l = Math.min(l / a | 0, 67108863), n._ishlnsubmul(i, l, h); 0 !== n.negative;) l--, n.negative = 0, n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
						s && (s.words[h] = l)
					}
					return s && s.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), {
						div: s || null,
						mod: n
					}
				}, o.prototype.divmod = function(e, t, r) {
					return n(!e.isZero()), this.isZero() ? {
						div: new o(0),
						mod: new o(0)
					} : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(e)), {
						div: i,
						mod: a
					}) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), {
						div: i,
						mod: s.mod
					}) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(e)), {
						div: s.div,
						mod: a
					}) : e.length > this.length || this.cmp(e) < 0 ? {
						div: new o(0),
						mod: this
					} : 1 === e.length ? "div" === t ? {
						div: this.divn(e.words[0]),
						mod: null
					} : "mod" === t ? {
						div: null,
						mod: new o(this.modn(e.words[0]))
					} : {
						div: this.divn(e.words[0]),
						mod: new o(this.modn(e.words[0]))
					} : this._wordDiv(e, t);
					var i, a, s
				}, o.prototype.div = function(e) {
					return this.divmod(e, "div", !1).div
				}, o.prototype.mod = function(e) {
					return this.divmod(e, "mod", !1).mod
				}, o.prototype.umod = function(e) {
					return this.divmod(e, "mod", !0).mod
				}, o.prototype.divRound = function(e) {
					var t = this.divmod(e);
					if (t.mod.isZero()) return t.div;
					var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
						n = e.ushrn(1),
						i = e.andln(1),
						o = r.cmp(n);
					return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
				}, o.prototype.modn = function(e) {
					n(e <= 67108863);
					for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--) r = (t * r + (0 | this.words[i])) % e;
					return r
				}, o.prototype.idivn = function(e) {
					n(e <= 67108863);
					for (var t = 0, r = this.length - 1; r >= 0; r--) {
						var i = (0 | this.words[r]) + 67108864 * t;
						this.words[r] = i / e | 0, t = i % e
					}
					return this.strip()
				}, o.prototype.divn = function(e) {
					return this.clone().idivn(e)
				}, o.prototype.egcd = function(e) {
					n(0 === e.negative), n(!e.isZero());
					var t = this,
						r = e.clone();
					t = 0 !== t.negative ? t.umod(e) : t.clone();
					for (var i = new o(1), a = new o(0), s = new o(0), u = new o(1), c = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++c;
					for (var f = r.clone(), h = t.clone(); !t.isZero();) {
						for (var l = 0, d = 1; 0 == (t.words[0] & d) && l < 26; ++l, d <<= 1);
						if (l > 0)
							for (t.iushrn(l); l-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(f), a.isub(h)), i.iushrn(1), a.iushrn(1);
						for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1);
						if (p > 0)
							for (r.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(f), u.isub(h)), s.iushrn(1), u.iushrn(1);
						t.cmp(r) >= 0 ? (t.isub(r), i.isub(s), a.isub(u)) : (r.isub(t), s.isub(i), u.isub(a))
					}
					return {
						a: s,
						b: u,
						gcd: r.iushln(c)
					}
				}, o.prototype._invmp = function(e) {
					n(0 === e.negative), n(!e.isZero());
					var t = this,
						r = e.clone();
					t = 0 !== t.negative ? t.umod(e) : t.clone();
					for (var i, a = new o(1), s = new o(0), u = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
						for (var c = 0, f = 1; 0 == (t.words[0] & f) && c < 26; ++c, f <<= 1);
						if (c > 0)
							for (t.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
						for (var h = 0, l = 1; 0 == (r.words[0] & l) && h < 26; ++h, l <<= 1);
						if (h > 0)
							for (r.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
						t.cmp(r) >= 0 ? (t.isub(r), a.isub(s)) : (r.isub(t), s.isub(a))
					}
					return (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i
				}, o.prototype.gcd = function(e) {
					if (this.isZero()) return e.abs();
					if (e.isZero()) return this.abs();
					var t = this.clone(),
						r = e.clone();
					t.negative = 0, r.negative = 0;
					for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
					for (;;) {
						for (; t.isEven();) t.iushrn(1);
						for (; r.isEven();) r.iushrn(1);
						var i = t.cmp(r);
						if (i < 0) {
							var o = t;
							t = r, r = o
						} else if (0 === i || 0 === r.cmpn(1)) break;
						t.isub(r)
					}
					return r.iushln(n)
				}, o.prototype.invm = function(e) {
					return this.egcd(e).a.umod(e)
				}, o.prototype.isEven = function() {
					return 0 == (1 & this.words[0])
				}, o.prototype.isOdd = function() {
					return 1 == (1 & this.words[0])
				}, o.prototype.andln = function(e) {
					return this.words[0] & e
				}, o.prototype.bincn = function(e) {
					n("number" == typeof e);
					var t = e % 26,
						r = (e - t) / 26,
						i = 1 << t;
					if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
					for (var o = i, a = r; 0 !== o && a < this.length; a++) {
						var s = 0 | this.words[a];
						o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
					}
					return 0 !== o && (this.words[a] = o, this.length++), this
				}, o.prototype.isZero = function() {
					return 1 === this.length && 0 === this.words[0]
				}, o.prototype.cmpn = function(e) {
					var t, r = e < 0;
					if (0 !== this.negative && !r) return -1;
					if (0 === this.negative && r) return 1;
					if (this.strip(), this.length > 1) t = 1;
					else {
						r && (e = -e), n(e <= 67108863, "Number is too big");
						var i = 0 | this.words[0];
						t = i === e ? 0 : i < e ? -1 : 1
					}
					return 0 !== this.negative ? 0 | -t : t
				}, o.prototype.cmp = function(e) {
					if (0 !== this.negative && 0 === e.negative) return -1;
					if (0 === this.negative && 0 !== e.negative) return 1;
					var t = this.ucmp(e);
					return 0 !== this.negative ? 0 | -t : t
				}, o.prototype.ucmp = function(e) {
					if (this.length > e.length) return 1;
					if (this.length < e.length) return -1;
					for (var t = 0, r = this.length - 1; r >= 0; r--) {
						var n = 0 | this.words[r],
							i = 0 | e.words[r];
						if (n !== i) {
							n < i ? t = -1 : n > i && (t = 1);
							break
						}
					}
					return t
				}, o.prototype.gtn = function(e) {
					return 1 === this.cmpn(e)
				}, o.prototype.gt = function(e) {
					return 1 === this.cmp(e)
				}, o.prototype.gten = function(e) {
					return this.cmpn(e) >= 0
				}, o.prototype.gte = function(e) {
					return this.cmp(e) >= 0
				}, o.prototype.ltn = function(e) {
					return -1 === this.cmpn(e)
				}, o.prototype.lt = function(e) {
					return -1 === this.cmp(e)
				}, o.prototype.lten = function(e) {
					return this.cmpn(e) <= 0
				}, o.prototype.lte = function(e) {
					return this.cmp(e) <= 0
				}, o.prototype.eqn = function(e) {
					return 0 === this.cmpn(e)
				}, o.prototype.eq = function(e) {
					return 0 === this.cmp(e)
				}, o.red = function(e) {
					return new S(e)
				}, o.prototype.toRed = function(e) {
					return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
				}, o.prototype.fromRed = function() {
					return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
				}, o.prototype._forceRed = function(e) {
					return this.red = e, this
				}, o.prototype.forceRed = function(e) {
					return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
				}, o.prototype.redAdd = function(e) {
					return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
				}, o.prototype.redIAdd = function(e) {
					return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
				}, o.prototype.redSub = function(e) {
					return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
				}, o.prototype.redISub = function(e) {
					return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
				}, o.prototype.redShl = function(e) {
					return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
				}, o.prototype.redMul = function(e) {
					return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
				}, o.prototype.redIMul = function(e) {
					return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
				}, o.prototype.redSqr = function() {
					return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
				}, o.prototype.redISqr = function() {
					return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
				}, o.prototype.redSqrt = function() {
					return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
				}, o.prototype.redInvm = function() {
					return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
				}, o.prototype.redNeg = function() {
					return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
				}, o.prototype.redPow = function(e) {
					return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
				};
				var m = {
					k256: null,
					p224: null,
					p192: null,
					p25519: null
				};

				function y(e, t) {
					this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
				}

				function v() {
					y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
				}

				function _() {
					y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
				}

				function w() {
					y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
				}

				function M() {
					y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
				}

				function S(e) {
					if ("string" == typeof e) {
						var t = o._prime(e);
						this.m = t.p, this.prime = t
					} else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
				}

				function x(e) {
					S.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
				}
				y.prototype._tmp = function() {
					var e = new o(null);
					return e.words = new Array(Math.ceil(this.n / 13)), e
				}, y.prototype.ireduce = function(e) {
					var t, r = e;
					do {
						this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
					} while (t > this.n);
					var n = t < this.n ? -1 : r.ucmp(this.p);
					return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
				}, y.prototype.split = function(e, t) {
					e.iushrn(this.n, 0, t)
				}, y.prototype.imulK = function(e) {
					return e.imul(this.k)
				}, i(v, y), v.prototype.split = function(e, t) {
					for (var r = Math.min(e.length, 9), n = 0; n < r; n++) t.words[n] = e.words[n];
					if (t.length = r, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
					var i = e.words[9];
					for (t.words[t.length++] = 4194303 & i, n = 10; n < e.length; n++) {
						var o = 0 | e.words[n];
						e.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
					}
					i >>>= 22, e.words[n - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
				}, v.prototype.imulK = function(e) {
					e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
					for (var t = 0, r = 0; r < e.length; r++) {
						var n = 0 | e.words[r];
						t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
					}
					return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
				}, i(_, y), i(w, y), i(M, y), M.prototype.imulK = function(e) {
					for (var t = 0, r = 0; r < e.length; r++) {
						var n = 19 * (0 | e.words[r]) + t,
							i = 67108863 & n;
						n >>>= 26, e.words[r] = i, t = n
					}
					return 0 !== t && (e.words[e.length++] = t), e
				}, o._prime = function(e) {
					if (m[e]) return m[e];
					var t;
					if ("k256" === e) t = new v;
					else if ("p224" === e) t = new _;
					else if ("p192" === e) t = new w;
					else {
						if ("p25519" !== e) throw new Error("Unknown prime " + e);
						t = new M
					}
					return m[e] = t, t
				}, S.prototype._verify1 = function(e) {
					n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
				}, S.prototype._verify2 = function(e, t) {
					n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
				}, S.prototype.imod = function(e) {
					return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
				}, S.prototype.neg = function(e) {
					return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
				}, S.prototype.add = function(e, t) {
					this._verify2(e, t);
					var r = e.add(t);
					return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
				}, S.prototype.iadd = function(e, t) {
					this._verify2(e, t);
					var r = e.iadd(t);
					return r.cmp(this.m) >= 0 && r.isub(this.m), r
				}, S.prototype.sub = function(e, t) {
					this._verify2(e, t);
					var r = e.sub(t);
					return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
				}, S.prototype.isub = function(e, t) {
					this._verify2(e, t);
					var r = e.isub(t);
					return r.cmpn(0) < 0 && r.iadd(this.m), r
				}, S.prototype.shl = function(e, t) {
					return this._verify1(e), this.imod(e.ushln(t))
				}, S.prototype.imul = function(e, t) {
					return this._verify2(e, t), this.imod(e.imul(t))
				}, S.prototype.mul = function(e, t) {
					return this._verify2(e, t), this.imod(e.mul(t))
				}, S.prototype.isqr = function(e) {
					return this.imul(e, e.clone())
				}, S.prototype.sqr = function(e) {
					return this.mul(e, e)
				}, S.prototype.sqrt = function(e) {
					if (e.isZero()) return e.clone();
					var t = this.m.andln(3);
					if (n(t % 2 == 1), 3 === t) {
						var r = this.m.add(new o(1)).iushrn(2);
						return this.pow(e, r)
					}
					for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
					n(!i.isZero());
					var s = new o(1).toRed(this),
						u = s.redNeg(),
						c = this.m.subn(1).iushrn(1),
						f = this.m.bitLength();
					for (f = new o(2 * f * f).toRed(this); 0 !== this.pow(f, c).cmp(u);) f.redIAdd(u);
					for (var h = this.pow(f, i), l = this.pow(e, i.addn(1).iushrn(1)), d = this.pow(e, i), p = a; 0 !== d.cmp(s);) {
						for (var b = d, g = 0; 0 !== b.cmp(s); g++) b = b.redSqr();
						n(g < p);
						var m = this.pow(h, new o(1).iushln(p - g - 1));
						l = l.redMul(m), h = m.redSqr(), d = d.redMul(h), p = g
					}
					return l
				}, S.prototype.invm = function(e) {
					var t = e._invmp(this.m);
					return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
				}, S.prototype.pow = function(e, t) {
					if (t.isZero()) return new o(1).toRed(this);
					if (0 === t.cmpn(1)) return e.clone();
					var r = new Array(16);
					r[0] = new o(1).toRed(this), r[1] = e;
					for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
					var i = r[0],
						a = 0,
						s = 0,
						u = t.bitLength() % 26;
					for (0 === u && (u = 26), n = t.length - 1; n >= 0; n--) {
						for (var c = t.words[n], f = u - 1; f >= 0; f--) {
							var h = c >> f & 1;
							i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== a ? (a <<= 1, a |= h, (4 === ++s || 0 === n && 0 === f) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0
						}
						u = 26
					}
					return i
				}, S.prototype.convertTo = function(e) {
					var t = e.umod(this.m);
					return t === e ? t.clone() : t
				}, S.prototype.convertFrom = function(e) {
					var t = e.clone();
					return t.red = null, t
				}, o.mont = function(e) {
					return new x(e)
				}, i(x, S), x.prototype.convertTo = function(e) {
					return this.imod(e.ushln(this.shift))
				}, x.prototype.convertFrom = function(e) {
					var t = this.imod(e.mul(this.rinv));
					return t.red = null, t
				}, x.prototype.imul = function(e, t) {
					if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
					var r = e.imul(t),
						n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
						i = r.isub(n).iushrn(this.shift),
						o = i;
					return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
				}, x.prototype.mul = function(e, t) {
					if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
					var r = e.mul(t),
						n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
						i = r.isub(n).iushrn(this.shift),
						a = i;
					return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
				}, x.prototype.invm = function(e) {
					return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
				}
			}(e, this)
		}).call(this, r(33)(e))
	}, function(e, t) {
		var r, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
		t.getSymbolSize = function(e) {
			if (!e) throw new Error('"version" cannot be null or undefined');
			if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
			return 4 * e + 17
		}, t.getSymbolTotalCodewords = function(e) {
			return n[e]
		}, t.getBCHDigit = function(e) {
			for (var t = 0; 0 !== e;) t++, e >>>= 1;
			return t
		}, t.setToSJISFunction = function(e) {
			if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
			r = e
		}, t.isKanjiModeEnabled = function() {
			return void 0 !== r
		}, t.toSJIS = function(e) {
			return r(e)
		}
	}, function(e, t, r) {
		var n = r(99),
			i = r(100);
		t.NUMERIC = {
			id: "Numeric",
			bit: 1,
			ccBits: [10, 12, 14]
		}, t.ALPHANUMERIC = {
			id: "Alphanumeric",
			bit: 2,
			ccBits: [9, 11, 13]
		}, t.BYTE = {
			id: "Byte",
			bit: 4,
			ccBits: [8, 16, 16]
		}, t.KANJI = {
			id: "Kanji",
			bit: 8,
			ccBits: [8, 10, 12]
		}, t.MIXED = {
			bit: -1
		}, t.getCharCountIndicator = function(e, t) {
			if (!e.ccBits) throw new Error("Invalid mode: " + e);
			if (!n.isValid(t)) throw new Error("Invalid version: " + t);
			return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
		}, t.getBestModeForData = function(e) {
			return i.testNumeric(e) ? t.NUMERIC : i.testAlphanumeric(e) ? t.ALPHANUMERIC : i.testKanji(e) ? t.KANJI : t.BYTE
		}, t.toString = function(e) {
			if (e && e.id) return e.id;
			throw new Error("Invalid mode")
		}, t.isValid = function(e) {
			return e && e.bit && e.ccBits
		}, t.from = function(e, r) {
			if (t.isValid(e)) return e;
			try {
				return function(e) {
					if ("string" != typeof e) throw new Error("Param is not a string");
					switch (e.toLowerCase()) {
						case "numeric":
							return t.NUMERIC;
						case "alphanumeric":
							return t.ALPHANUMERIC;
						case "kanji":
							return t.KANJI;
						case "byte":
							return t.BYTE;
						default:
							throw new Error("Unknown mode: " + e)
					}
				}(e)
			} catch (e) {
				return r
			}
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(43),
			i = Object.keys || function(e) {
				var t = [];
				for (var r in e) t.push(r);
				return t
			};
		e.exports = h;
		var o = Object.create(r(35));
		o.inherits = r(3);
		var a = r(105),
			s = r(53);
		o.inherits(h, a);
		for (var u = i(s.prototype), c = 0; c < u.length; c++) {
			var f = u[c];
			h.prototype[f] || (h.prototype[f] = s.prototype[f])
		}

		function h(e) {
			if (!(this instanceof h)) return new h(e);
			a.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", l)
		}

		function l() {
			this.allowHalfOpen || this._writableState.ended || n.nextTick(d, this)
		}

		function d(e) {
			e.end()
		}
		Object.defineProperty(h.prototype, "writableHighWaterMark", {
			enumerable: !1,
			get: function() {
				return this._writableState.highWaterMark
			}
		}), Object.defineProperty(h.prototype, "destroyed", {
			get: function() {
				return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
			},
			set: function(e) {
				void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
			}
		}), h.prototype._destroy = function(e, t) {
			this.push(null), this.end(), n.nextTick(t, e)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(209).Buffer,
			i = n.isEncoding || function(e) {
				switch ((e = "" + e) && e.toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
					case "raw":
						return !0;
					default:
						return !1
				}
			};

		function o(e) {
			var t;
			switch (this.encoding = function(e) {
					var t = function(e) {
						if (!e) return "utf8";
						for (var t;;) switch (e) {
							case "utf8":
							case "utf-8":
								return "utf8";
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return "utf16le";
							case "latin1":
							case "binary":
								return "latin1";
							case "base64":
							case "ascii":
							case "hex":
								return e;
							default:
								if (t) return;
								e = ("" + e).toLowerCase(), t = !0
						}
					}(e);
					if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
					return t || e
				}(e), this.encoding) {
				case "utf16le":
					this.text = u, this.end = c, t = 4;
					break;
				case "utf8":
					this.fillLast = s, t = 4;
					break;
				case "base64":
					this.text = f, this.end = h, t = 3;
					break;
				default:
					return this.write = l, void(this.end = d)
			}
			this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
		}

		function a(e) {
			return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
		}

		function s(e) {
			var t = this.lastTotal - this.lastNeed,
				r = function(e, t, r) {
					if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
					if (e.lastNeed > 1 && t.length > 1) {
						if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
						if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
					}
				}(this, e);
			return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
		}

		function u(e, t) {
			if ((e.length - t) % 2 == 0) {
				var r = e.toString("utf16le", t);
				if (r) {
					var n = r.charCodeAt(r.length - 1);
					if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
				}
				return r
			}
			return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
		}

		function c(e) {
			var t = e && e.length ? this.write(e) : "";
			if (this.lastNeed) {
				var r = this.lastTotal - this.lastNeed;
				return t + this.lastChar.toString("utf16le", 0, r)
			}
			return t
		}

		function f(e, t) {
			var r = (e.length - t) % 3;
			return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
		}

		function h(e) {
			var t = e && e.length ? this.write(e) : "";
			return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
		}

		function l(e) {
			return e.toString(this.encoding)
		}

		function d(e) {
			return e && e.length ? this.write(e) : ""
		}
		t.StringDecoder = o, o.prototype.write = function(e) {
			if (0 === e.length) return "";
			var t, r;
			if (this.lastNeed) {
				if (void 0 === (t = this.fillLast(e))) return "";
				r = this.lastNeed, this.lastNeed = 0
			} else r = 0;
			return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
		}, o.prototype.end = function(e) {
			var t = e && e.length ? this.write(e) : "";
			return this.lastNeed ? t + "�" : t
		}, o.prototype.text = function(e, t) {
			var r = function(e, t, r) {
				var n = t.length - 1;
				if (n < r) return 0;
				var i = a(t[n]);
				if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
				if (--n < r || -2 === i) return 0;
				if ((i = a(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
				if (--n < r || -2 === i) return 0;
				if ((i = a(t[n])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
				return 0
			}(this, e, t);
			if (!this.lastNeed) return e.toString("utf8", t);
			this.lastTotal = r;
			var n = e.length - (r - this.lastNeed);
			return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
		}, o.prototype.fillLast = function(e) {
			if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
			e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
		}
	}, function(e, t, r) {
		(function(e) {
			var n = Object.getOwnPropertyDescriptors || function(e) {
					for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
					return r
				},
				i = /%[sdj%]/g;
			t.format = function(e) {
				if (!m(e)) {
					for (var t = [], r = 0; r < arguments.length; r++) t.push(s(arguments[r]));
					return t.join(" ")
				}
				r = 1;
				for (var n = arguments, o = n.length, a = String(e).replace(i, (function(e) {
						if ("%%" === e) return "%";
						if (r >= o) return e;
						switch (e) {
							case "%s":
								return String(n[r++]);
							case "%d":
								return Number(n[r++]);
							case "%j":
								try {
									return JSON.stringify(n[r++])
								} catch (e) {
									return "[Circular]"
								}
								default:
									return e
						}
					})), u = n[r]; r < o; u = n[++r]) b(u) || !_(u) ? a += " " + u : a += " " + s(u);
				return a
			}, t.deprecate = function(r, n) {
				if (void 0 !== e && !0 === e.noDeprecation) return r;
				if (void 0 === e) return function() {
					return t.deprecate(r, n).apply(this, arguments)
				};
				var i = !1;
				return function() {
					if (!i) {
						if (e.throwDeprecation) throw new Error(n);
						e.traceDeprecation ? console.trace(n) : console.error(n), i = !0
					}
					return r.apply(this, arguments)
				}
			};
			var o, a = {};

			function s(e, r) {
				var n = {
					seen: [],
					stylize: c
				};
				return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), p(r) ? n.showHidden = r : r && t._extend(n, r), y(n.showHidden) && (n.showHidden = !1), y(n.depth) && (n.depth = 2), y(n.colors) && (n.colors = !1), y(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = u), f(n, e, n.depth)
			}

			function u(e, t) {
				var r = s.styles[t];
				return r ? "[" + s.colors[r][0] + "m" + e + "[" + s.colors[r][1] + "m" : e
			}

			function c(e, t) {
				return e
			}

			function f(e, r, n) {
				if (e.customInspect && r && S(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
					var i = r.inspect(n, e);
					return m(i) || (i = f(e, i, n)), i
				}
				var o = function(e, t) {
					if (y(t)) return e.stylize("undefined", "undefined");
					if (m(t)) {
						var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
						return e.stylize(r, "string")
					}
					if (g(t)) return e.stylize("" + t, "number");
					if (p(t)) return e.stylize("" + t, "boolean");
					if (b(t)) return e.stylize("null", "null")
				}(e, r);
				if (o) return o;
				var a = Object.keys(r),
					s = function(e) {
						var t = {};
						return e.forEach((function(e, r) {
							t[e] = !0
						})), t
					}(a);
				if (e.showHidden && (a = Object.getOwnPropertyNames(r)), M(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return h(r);
				if (0 === a.length) {
					if (S(r)) {
						var u = r.name ? ": " + r.name : "";
						return e.stylize("[Function" + u + "]", "special")
					}
					if (v(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
					if (w(r)) return e.stylize(Date.prototype.toString.call(r), "date");
					if (M(r)) return h(r)
				}
				var c, _ = "",
					x = !1,
					E = ["{", "}"];
				(d(r) && (x = !0, E = ["[", "]"]), S(r)) && (_ = " [Function" + (r.name ? ": " + r.name : "") + "]");
				return v(r) && (_ = " " + RegExp.prototype.toString.call(r)), w(r) && (_ = " " + Date.prototype.toUTCString.call(r)), M(r) && (_ = " " + h(r)), 0 !== a.length || x && 0 != r.length ? n < 0 ? v(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), c = x ? function(e, t, r, n, i) {
					for (var o = [], a = 0, s = t.length; a < s; ++a) R(t, String(a)) ? o.push(l(e, t, r, n, String(a), !0)) : o.push("");
					return i.forEach((function(i) {
						i.match(/^\d+$/) || o.push(l(e, t, r, n, i, !0))
					})), o
				}(e, r, n, s, a) : a.map((function(t) {
					return l(e, r, n, s, t, x)
				})), e.seen.pop(), function(e, t, r) {
					if (e.reduce((function(e, t) {
							return t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
						}), 0) > 60) return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
					return r[0] + t + " " + e.join(", ") + " " + r[1]
				}(c, _, E)) : E[0] + _ + E[1]
			}

			function h(e) {
				return "[" + Error.prototype.toString.call(e) + "]"
			}

			function l(e, t, r, n, i, o) {
				var a, s, u;
				if ((u = Object.getOwnPropertyDescriptor(t, i) || {
						value: t[i]
					}).get ? s = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (s = e.stylize("[Setter]", "special")), R(n, i) || (a = "[" + i + "]"), s || (e.seen.indexOf(u.value) < 0 ? (s = b(r) ? f(e, u.value, null) : f(e, u.value, r - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map((function(e) {
						return "  " + e
					})).join("\n").substr(2) : "\n" + s.split("\n").map((function(e) {
						return "   " + e
					})).join("\n")) : s = e.stylize("[Circular]", "special")), y(a)) {
					if (o && i.match(/^\d+$/)) return s;
					(a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
				}
				return a + ": " + s
			}

			function d(e) {
				return Array.isArray(e)
			}

			function p(e) {
				return "boolean" == typeof e
			}

			function b(e) {
				return null === e
			}

			function g(e) {
				return "number" == typeof e
			}

			function m(e) {
				return "string" == typeof e
			}

			function y(e) {
				return void 0 === e
			}

			function v(e) {
				return _(e) && "[object RegExp]" === x(e)
			}

			function _(e) {
				return "object" == typeof e && null !== e
			}

			function w(e) {
				return _(e) && "[object Date]" === x(e)
			}

			function M(e) {
				return _(e) && ("[object Error]" === x(e) || e instanceof Error)
			}

			function S(e) {
				return "function" == typeof e
			}

			function x(e) {
				return Object.prototype.toString.call(e)
			}

			function E(e) {
				return e < 10 ? "0" + e.toString(10) : e.toString(10)
			}
			t.debuglog = function(r) {
				if (y(o) && (o = e.env.NODE_DEBUG || ""), r = r.toUpperCase(), !a[r])
					if (new RegExp("\\b" + r + "\\b", "i").test(o)) {
						var n = e.pid;
						a[r] = function() {
							var e = t.format.apply(t, arguments);
							console.error("%s %d: %s", r, n, e)
						}
					} else a[r] = function() {};
				return a[r]
			}, t.inspect = s, s.colors = {
				bold: [1, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				white: [37, 39],
				grey: [90, 39],
				black: [30, 39],
				blue: [34, 39],
				cyan: [36, 39],
				green: [32, 39],
				magenta: [35, 39],
				red: [31, 39],
				yellow: [33, 39]
			}, s.styles = {
				special: "cyan",
				number: "yellow",
				boolean: "yellow",
				undefined: "grey",
				null: "bold",
				string: "green",
				date: "magenta",
				regexp: "red"
			}, t.isArray = d, t.isBoolean = p, t.isNull = b, t.isNullOrUndefined = function(e) {
				return null == e
			}, t.isNumber = g, t.isString = m, t.isSymbol = function(e) {
				return "symbol" == typeof e
			}, t.isUndefined = y, t.isRegExp = v, t.isObject = _, t.isDate = w, t.isError = M, t.isFunction = S, t.isPrimitive = function(e) {
				return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
			}, t.isBuffer = r(225);
			var k = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

			function A() {
				var e = new Date,
					t = [E(e.getHours()), E(e.getMinutes()), E(e.getSeconds())].join(":");
				return [e.getDate(), k[e.getMonth()], t].join(" ")
			}

			function R(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
			t.log = function() {
				console.log("%s - %s", A(), t.format.apply(t, arguments))
			}, t.inherits = r(226), t._extend = function(e, t) {
				if (!t || !_(t)) return e;
				for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
				return e
			};
			var T = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

			function C(e, t) {
				if (!e) {
					var r = new Error("Promise was rejected with a falsy value");
					r.reason = e, e = r
				}
				return t(e)
			}
			t.promisify = function(e) {
				if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
				if (T && e[T]) {
					var t;
					if ("function" != typeof(t = e[T])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
					return Object.defineProperty(t, T, {
						value: t,
						enumerable: !1,
						writable: !1,
						configurable: !0
					}), t
				}

				function t() {
					for (var t, r, n = new Promise((function(e, n) {
							t = e, r = n
						})), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
					i.push((function(e, n) {
						e ? r(e) : t(n)
					}));
					try {
						e.apply(this, i)
					} catch (e) {
						r(e)
					}
					return n
				}
				return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), T && Object.defineProperty(t, T, {
					value: t,
					enumerable: !1,
					writable: !1,
					configurable: !0
				}), Object.defineProperties(t, n(e))
			}, t.promisify.custom = T, t.callbackify = function(t) {
				if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

				function r() {
					for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
					var i = r.pop();
					if ("function" != typeof i) throw new TypeError("The last argument must be of type Function");
					var o = this,
						a = function() {
							return i.apply(o, arguments)
						};
					t.apply(this, r).then((function(t) {
						e.nextTick(a, null, t)
					}), (function(t) {
						e.nextTick(C, t, a)
					}))
				}
				return Object.setPrototypeOf(r, Object.getPrototypeOf(t)), Object.defineProperties(r, n(t)), r
			}
		}).call(this, r(5))
	}, function(e, t) {
		function r(e, t) {
			if (!e) throw new Error(t || "Assertion failed")
		}
		e.exports = r, r.equal = function(e, t, r) {
			if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t)
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.isAsync = void 0;
		var n, i = r(320),
			o = (n = i) && n.__esModule ? n : {
				default: n
			};
		var a = "function" == typeof Symbol;

		function s(e) {
			return a && "AsyncFunction" === e[Symbol.toStringTag]
		}
		t.default = function(e) {
			return s(e) ? (0, o.default)(e) : e
		}, t.isAsync = s
	}, function(e, t, r) {
		"use strict";
		r.d(t, "c", (function() {
			return i
		})), r.d(t, "a", (function() {
			return o
		})), r.d(t, "b", (function() {
			return a
		}));
		var n = r(7);

		function i(e) {
			return n.b.includes(e)
		}

		function o(e) {
			return Object.keys(n.e).includes(e) ? n.e[e] : n.e[n.a]
		}

		function a(e) {
			const t = Object.values(n.e).find(t => t.code === e);
			return t || n.e[n.a]
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(50);
		o.TYPED_ARRAY_SUPPORT = function() {
			try {
				var e = new Uint8Array(1);
				return e.__proto__ = {
					__proto__: Uint8Array.prototype,
					foo: function() {
						return 42
					}
				}, 42 === e.foo()
			} catch (e) {
				return !1
			}
		}();
		var i = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

		function o(e, t, r) {
			return o.TYPED_ARRAY_SUPPORT || this instanceof o ? "number" == typeof e ? u(this, e) : function(e, t, r, n) {
				if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
				if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, r, n) {
					if (r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
					if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
					var i;
					i = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
					o.TYPED_ARRAY_SUPPORT ? i.__proto__ = o.prototype : i = c(e, i);
					return i
				}(e, t, r, n);
				if ("string" == typeof t) return function(e, t) {
					var r = 0 | h(t),
						n = s(e, r),
						i = n.write(t);
					i !== r && (n = n.slice(0, i));
					return n
				}(e, t);
				return function(e, t) {
					if (o.isBuffer(t)) {
						var r = 0 | a(t.length),
							n = s(e, r);
						return 0 === n.length || t.copy(n, 0, 0, r), n
					}
					if (t) {
						if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (i = t.length) != i ? s(e, 0) : c(e, t);
						if ("Buffer" === t.type && Array.isArray(t.data)) return c(e, t.data)
					}
					var i;
					throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
				}(e, t)
			}(this, e, t, r) : new o(e, t, r)
		}

		function a(e) {
			if (e >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
			return 0 | e
		}

		function s(e, t) {
			var r;
			return o.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t)).__proto__ = o.prototype : (null === (r = e) && (r = new o(t)), r.length = t), r
		}

		function u(e, t) {
			var r = s(e, t < 0 ? 0 : 0 | a(t));
			if (!o.TYPED_ARRAY_SUPPORT)
				for (var n = 0; n < t; ++n) r[n] = 0;
			return r
		}

		function c(e, t) {
			for (var r = t.length < 0 ? 0 : 0 | a(t.length), n = s(e, r), i = 0; i < r; i += 1) n[i] = 255 & t[i];
			return n
		}

		function f(e, t) {
			var r;
			t = t || 1 / 0;
			for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
				if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
					if (!i) {
						if (r > 56319) {
							(t -= 3) > -1 && o.push(239, 191, 189);
							continue
						}
						if (a + 1 === n) {
							(t -= 3) > -1 && o.push(239, 191, 189);
							continue
						}
						i = r;
						continue
					}
					if (r < 56320) {
						(t -= 3) > -1 && o.push(239, 191, 189), i = r;
						continue
					}
					r = 65536 + (i - 55296 << 10 | r - 56320)
				} else i && (t -= 3) > -1 && o.push(239, 191, 189);
				if (i = null, r < 128) {
					if ((t -= 1) < 0) break;
					o.push(r)
				} else if (r < 2048) {
					if ((t -= 2) < 0) break;
					o.push(r >> 6 | 192, 63 & r | 128)
				} else if (r < 65536) {
					if ((t -= 3) < 0) break;
					o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
				} else {
					if (!(r < 1114112)) throw new Error("Invalid code point");
					if ((t -= 4) < 0) break;
					o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
				}
			}
			return o
		}

		function h(e) {
			return o.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : f(e).length)
		}
		o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
			value: null,
			configurable: !0,
			enumerable: !1,
			writable: !1
		})), o.prototype.write = function(e, t, r) {
			void 0 === t || void 0 === r && "string" == typeof t ? (r = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(r) ? r |= 0 : r = void 0);
			var n = this.length - t;
			if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
			return function(e, t, r, n) {
				return function(e, t, r, n) {
					for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
					return i
				}(f(t, e.length - r), e, r, n)
			}(this, e, t, r)
		}, o.prototype.slice = function(e, t) {
			var r, n = this.length;
			if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), o.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = o.prototype;
			else {
				var i = t - e;
				r = new o(i, void 0);
				for (var a = 0; a < i; ++a) r[a] = this[a + e]
			}
			return r
		}, o.prototype.copy = function(e, t, r, n) {
			if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
			if (0 === e.length || 0 === this.length) return 0;
			if (t < 0) throw new RangeError("targetStart out of bounds");
			if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
			if (n < 0) throw new RangeError("sourceEnd out of bounds");
			n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
			var i, a = n - r;
			if (this === e && r < t && t < n)
				for (i = a - 1; i >= 0; --i) e[i + t] = this[i + r];
			else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
				for (i = 0; i < a; ++i) e[i + t] = this[i + r];
			else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
			return a
		}, o.prototype.fill = function(e, t, r) {
			if ("string" == typeof e) {
				if ("string" == typeof t ? (t = 0, r = this.length) : "string" == typeof r && (r = this.length), 1 === e.length) {
					var n = e.charCodeAt(0);
					n < 256 && (e = n)
				}
			} else "number" == typeof e && (e &= 255);
			if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
			if (r <= t) return this;
			var i;
			if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
				for (i = t; i < r; ++i) this[i] = e;
			else {
				var a = o.isBuffer(e) ? e : new o(e),
					s = a.length;
				for (i = 0; i < r - t; ++i) this[i + t] = a[i % s]
			}
			return this
		}, o.concat = function(e, t) {
			if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
			if (0 === e.length) return s(null, 0);
			var r;
			if (void 0 === t)
				for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
			var i = u(null, t),
				a = 0;
			for (r = 0; r < e.length; ++r) {
				var c = e[r];
				if (!o.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
				c.copy(i, a), a += c.length
			}
			return i
		}, o.byteLength = h, o.prototype._isBuffer = !0, o.isBuffer = function(e) {
			return !(null == e || !e._isBuffer)
		}, e.exports.alloc = function(e) {
			var t = new o(e);
			return t.fill(0), t
		}, e.exports.from = function(e) {
			return new o(e)
		}
	}, function(e, t, r) {
		"use strict";
		var n = {};

		function i(e, t, r) {
			r || (r = Error);
			var i = function(e) {
				var r, n;

				function i(r, n, i) {
					return e.call(this, function(e, r, n) {
						return "string" == typeof t ? t : t(e, r, n)
					}(r, n, i)) || this
				}
				return n = e, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n, i
			}(r);
			i.prototype.name = r.name, i.prototype.code = e, n[e] = i
		}

		function o(e, t) {
			if (Array.isArray(e)) {
				var r = e.length;
				return e = e.map((function(e) {
					return String(e)
				})), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
			}
			return "of ".concat(t, " ").concat(String(e))
		}
		i("ERR_INVALID_OPT_VALUE", (function(e, t) {
			return 'The value "' + t + '" is invalid for option "' + e + '"'
		}), TypeError), i("ERR_INVALID_ARG_TYPE", (function(e, t, r) {
			var n, i, a, s;
			if ("string" == typeof t && (i = "not ", t.substr(!a || a < 0 ? 0 : +a, i.length) === i) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", function(e, t, r) {
					return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
				}(e, " argument")) s = "The ".concat(e, " ").concat(n, " ").concat(o(t, "type"));
			else {
				var u = function(e, t, r) {
					return "number" != typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
				}(e, ".") ? "property" : "argument";
				s = 'The "'.concat(e, '" ').concat(u, " ").concat(n, " ").concat(o(t, "type"))
			}
			return s += ". Received type ".concat(typeof r)
		}), TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
			return "The " + e + " method is not implemented"
		})), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", (function(e) {
			return "Cannot call " + e + " after a stream was destroyed"
		})), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", (function(e) {
			return "Unknown encoding: " + e
		}), TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.codes = n
	}, function(e, t, r) {
		"use strict";
		(function(t) {
			var n = Object.keys || function(e) {
				var t = [];
				for (var r in e) t.push(r);
				return t
			};
			e.exports = c;
			var i = r(112),
				o = r(116);
			r(3)(c, i);
			for (var a = n(o.prototype), s = 0; s < a.length; s++) {
				var u = a[s];
				c.prototype[u] || (c.prototype[u] = o.prototype[u])
			}

			function c(e) {
				if (!(this instanceof c)) return new c(e);
				i.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", f)))
			}

			function f() {
				this._writableState.ended || t.nextTick(h, this)
			}

			function h(e) {
				e.end()
			}
			Object.defineProperty(c.prototype, "writableHighWaterMark", {
				enumerable: !1,
				get: function() {
					return this._writableState.highWaterMark
				}
			}), Object.defineProperty(c.prototype, "writableBuffer", {
				enumerable: !1,
				get: function() {
					return this._writableState && this._writableState.getBuffer()
				}
			}), Object.defineProperty(c.prototype, "writableLength", {
				enumerable: !1,
				get: function() {
					return this._writableState.length
				}
			}), Object.defineProperty(c.prototype, "destroyed", {
				enumerable: !1,
				get: function() {
					return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
				},
				set: function(e) {
					void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
				}
			})
		}).call(this, r(5))
	}, function(e, t, r) {
		"use strict";
		var n = {};

		function i(e, t, r) {
			r || (r = Error);
			var i = function(e) {
				var r, n;

				function i(r, n, i) {
					return e.call(this, function(e, r, n) {
						return "string" == typeof t ? t : t(e, r, n)
					}(r, n, i)) || this
				}
				return n = e, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n, i
			}(r);
			i.prototype.name = r.name, i.prototype.code = e, n[e] = i
		}

		function o(e, t) {
			if (Array.isArray(e)) {
				var r = e.length;
				return e = e.map((function(e) {
					return String(e)
				})), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
			}
			return "of ".concat(t, " ").concat(String(e))
		}
		i("ERR_INVALID_OPT_VALUE", (function(e, t) {
			return 'The value "' + t + '" is invalid for option "' + e + '"'
		}), TypeError), i("ERR_INVALID_ARG_TYPE", (function(e, t, r) {
			var n, i, a, s;
			if ("string" == typeof t && (i = "not ", t.substr(!a || a < 0 ? 0 : +a, i.length) === i) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", function(e, t, r) {
					return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
				}(e, " argument")) s = "The ".concat(e, " ").concat(n, " ").concat(o(t, "type"));
			else {
				var u = function(e, t, r) {
					return "number" != typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
				}(e, ".") ? "property" : "argument";
				s = 'The "'.concat(e, '" ').concat(u, " ").concat(n, " ").concat(o(t, "type"))
			}
			return s += ". Received type ".concat(typeof r)
		}), TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
			return "The " + e + " method is not implemented"
		})), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", (function(e) {
			return "Cannot call " + e + " after a stream was destroyed"
		})), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", (function(e) {
			return "Unknown encoding: " + e
		}), TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.codes = n
	}, function(e, t, r) {
		"use strict";
		(function(t) {
			var n = Object.keys || function(e) {
				var t = [];
				for (var r in e) t.push(r);
				return t
			};
			e.exports = c;
			var i = r(128),
				o = r(132);
			r(3)(c, i);
			for (var a = n(o.prototype), s = 0; s < a.length; s++) {
				var u = a[s];
				c.prototype[u] || (c.prototype[u] = o.prototype[u])
			}

			function c(e) {
				if (!(this instanceof c)) return new c(e);
				i.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", f)))
			}

			function f() {
				this._writableState.ended || t.nextTick(h, this)
			}

			function h(e) {
				e.end()
			}
			Object.defineProperty(c.prototype, "writableHighWaterMark", {
				enumerable: !1,
				get: function() {
					return this._writableState.highWaterMark
				}
			}), Object.defineProperty(c.prototype, "writableBuffer", {
				enumerable: !1,
				get: function() {
					return this._writableState && this._writableState.getBuffer()
				}
			}), Object.defineProperty(c.prototype, "writableLength", {
				enumerable: !1,
				get: function() {
					return this._writableState.length
				}
			}), Object.defineProperty(c.prototype, "destroyed", {
				enumerable: !1,
				get: function() {
					return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
				},
				set: function(e) {
					void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
				}
			})
		}).call(this, r(5))
	}, function(e, t, r) {
		var n = r(13).Buffer;

		function i(e, t) {
			this._block = n.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
		}
		i.prototype.update = function(e, t) {
			"string" == typeof e && (t = t || "utf8", e = n.from(e, t));
			for (var r = this._block, i = this._blockSize, o = e.length, a = this._len, s = 0; s < o;) {
				for (var u = a % i, c = Math.min(o - s, i - u), f = 0; f < c; f++) r[u + f] = e[s + f];
				s += c, (a += c) % i == 0 && this._update(r)
			}
			return this._len += o, this
		}, i.prototype.digest = function(e) {
			var t = this._len % this._blockSize;
			this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
			var r = 8 * this._len;
			if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
			else {
				var n = (4294967295 & r) >>> 0,
					i = (r - n) / 4294967296;
				this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
			}
			this._update(this._block);
			var o = this._hash();
			return e ? o.toString(e) : o
		}, i.prototype._update = function() {
			throw new Error("_update must be implemented by subclass")
		}, e.exports = i
	}, function(e, t, r) {
		"use strict";
		(function(t) {
			var n = r(136),
				i = r(291);

			function o(e) {
				var t = e;
				if ("string" != typeof t) throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof t + ", while padToEven.");
				return t.length % 2 && (t = "0" + t), t
			}

			function a(e) {
				return "0x" + e.toString(16)
			}
			e.exports = {
				arrayContainsArray: function(e, t, r) {
					if (!0 !== Array.isArray(e)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof e + "'");
					if (!0 !== Array.isArray(t)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof t + "'");
					return t[Boolean(r) ? "some" : "every"]((function(t) {
						return e.indexOf(t) >= 0
					}))
				},
				intToBuffer: function(e) {
					var r = a(e);
					return new t(o(r.slice(2)), "hex")
				},
				getBinarySize: function(e) {
					if ("string" != typeof e) throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'.");
					return t.byteLength(e, "utf8")
				},
				isHexPrefixed: n,
				stripHexPrefix: i,
				padToEven: o,
				intToHex: a,
				fromAscii: function(e) {
					for (var t = "", r = 0; r < e.length; r++) {
						var n = e.charCodeAt(r).toString(16);
						t += n.length < 2 ? "0" + n : n
					}
					return "0x" + t
				},
				fromUtf8: function(e) {
					return "0x" + o(new t(e, "utf8").toString("hex")).replace(/^0+|0+$/g, "")
				},
				toAscii: function(e) {
					var t = "",
						r = 0,
						n = e.length;
					for ("0x" === e.substring(0, 2) && (r = 2); r < n; r += 2) {
						var i = parseInt(e.substr(r, 2), 16);
						t += String.fromCharCode(i)
					}
					return t
				},
				toUtf8: function(e) {
					return new t(o(i(e).replace(/^0+|0+$/g, "")), "hex").toString("utf8")
				},
				getKeys: function(e, t, r) {
					if (!Array.isArray(e)) throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof e + "'");
					if ("string" != typeof t) throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof t + "'.");
					for (var n = [], i = 0; i < e.length; i++) {
						var o = e[i][t];
						if (r && !o) o = "";
						else if ("string" != typeof o) throw new Error("invalid abi");
						n.push(o)
					}
					return n
				},
				isHexString: function(e, t) {
					return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
				}
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		var n = r(90);
		r.d(t, "randomBytes", (function() {
			return n.a
		}));
		var i = r(91);
		r.d(t, "aesCbcDecrypt", (function() {
			return i.a
		})), r.d(t, "aesCbcEncrypt", (function() {
			return i.b
		}));
		var o = r(92);
		r.d(t, "hmacSha256Sign", (function() {
			return o.a
		}));
		r(97), r(42), r(4)
	}, function(e, t) {
		e.exports = function(e) {
			return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
				enumerable: !0,
				get: function() {
					return e.l
				}
			}), Object.defineProperty(e, "id", {
				enumerable: !0,
				get: function() {
					return e.i
				}
			}), e.webpackPolyfill = 1), e
		}
	}, function(e, t, r) {
		(t = e.exports = r(105)).Stream = t, t.Readable = t, t.Writable = r(53), t.Duplex = r(19), t.Transform = r(109), t.PassThrough = r(210)
	}, function(e, t, r) {
		(function(e) {
			function r(e) {
				return Object.prototype.toString.call(e)
			}
			t.isArray = function(e) {
				return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e)
			}, t.isBoolean = function(e) {
				return "boolean" == typeof e
			}, t.isNull = function(e) {
				return null === e
			}, t.isNullOrUndefined = function(e) {
				return null == e
			}, t.isNumber = function(e) {
				return "number" == typeof e
			}, t.isString = function(e) {
				return "string" == typeof e
			}, t.isSymbol = function(e) {
				return "symbol" == typeof e
			}, t.isUndefined = function(e) {
				return void 0 === e
			}, t.isRegExp = function(e) {
				return "[object RegExp]" === r(e)
			}, t.isObject = function(e) {
				return "object" == typeof e && null !== e
			}, t.isDate = function(e) {
				return "[object Date]" === r(e)
			}, t.isError = function(e) {
				return "[object Error]" === r(e) || e instanceof Error
			}, t.isFunction = function(e) {
				return "function" == typeof e
			}, t.isPrimitive = function(e) {
				return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
			}, t.isBuffer = e.isBuffer
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			i = r(110),
			o = i.keccak224,
			a = i.keccak384,
			s = i.keccak256,
			u = i.keccak512,
			c = r(241),
			f = r(61),
			h = r(46),
			l = r(9),
			d = r(126),
			p = r(290).Buffer;
		Object.assign(t, r(31)), t.MAX_INTEGER = new l("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new l("10000000000000000000000000000000000000000000000000000000000000000", 16), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.SHA3_NULL_S = t.KECCAK256_NULL_S, t.KECCAK256_NULL = p.from(t.KECCAK256_NULL_S, "hex"), t.SHA3_NULL = t.KECCAK256_NULL, t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.SHA3_RLP_ARRAY_S = t.KECCAK256_RLP_ARRAY_S, t.KECCAK256_RLP_ARRAY = p.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.SHA3_RLP_ARRAY = t.KECCAK256_RLP_ARRAY, t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.SHA3_RLP_S = t.KECCAK256_RLP_S, t.KECCAK256_RLP = p.from(t.KECCAK256_RLP_S, "hex"), t.SHA3_RLP = t.KECCAK256_RLP, t.BN = l, t.rlp = h, t.secp256k1 = c, t.zeros = function(e) {
			return p.allocUnsafe(e).fill(0)
		}, t.zeroAddress = function() {
			var e = t.zeros(20);
			return t.bufferToHex(e)
		}, t.setLengthLeft = t.setLength = function(e, r, n) {
			var i = t.zeros(r);
			return e = t.toBuffer(e), n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r)
		}, t.setLengthRight = function(e, r) {
			return t.setLength(e, r, !0)
		}, t.unpad = t.stripZeros = function(e) {
			for (var r = (e = t.stripHexPrefix(e))[0]; e.length > 0 && "0" === r.toString();) r = (e = e.slice(1))[0];
			return e
		}, t.toBuffer = function(e) {
			if (!p.isBuffer(e))
				if (Array.isArray(e)) e = p.from(e);
				else if ("string" == typeof e) e = t.isHexString(e) ? p.from(t.padToEven(t.stripHexPrefix(e)), "hex") : p.from(e);
			else if ("number" == typeof e) e = t.intToBuffer(e);
			else if (null == e) e = p.allocUnsafe(0);
			else if (l.isBN(e)) e = e.toArrayLike(p);
			else {
				if (!e.toArray) throw new Error("invalid type");
				e = p.from(e.toArray())
			}
			return e
		}, t.bufferToInt = function(e) {
			return new l(t.toBuffer(e)).toNumber()
		}, t.bufferToHex = function(e) {
			return "0x" + (e = t.toBuffer(e)).toString("hex")
		}, t.fromSigned = function(e) {
			return new l(e).fromTwos(256)
		}, t.toUnsigned = function(e) {
			return p.from(e.toTwos(256).toArray())
		}, t.keccak = function(e, r) {
			switch (e = t.toBuffer(e), r || (r = 256), r) {
				case 224:
					return o(e);
				case 256:
					return s(e);
				case 384:
					return a(e);
				case 512:
					return u(e);
				default:
					throw new Error("Invald algorithm: keccak" + r)
			}
		}, t.keccak256 = function(e) {
			return t.keccak(e)
		}, t.sha3 = t.keccak, t.sha256 = function(e) {
			return e = t.toBuffer(e), d("sha256").update(e).digest()
		}, t.ripemd160 = function(e, r) {
			e = t.toBuffer(e);
			var n = d("rmd160").update(e).digest();
			return !0 === r ? t.setLength(n, 32) : n
		}, t.rlphash = function(e) {
			return t.keccak(h.encode(e))
		}, t.isValidPrivate = function(e) {
			return c.privateKeyVerify(e)
		}, t.isValidPublic = function(e, t) {
			return 64 === e.length ? c.publicKeyVerify(p.concat([p.from([4]), e])) : !!t && c.publicKeyVerify(e)
		}, t.pubToAddress = t.publicToAddress = function(e, r) {
			return e = t.toBuffer(e), r && 64 !== e.length && (e = c.publicKeyConvert(e, !1).slice(1)), f(64 === e.length), t.keccak(e).slice(-20)
		};
		var b = t.privateToPublic = function(e) {
			return e = t.toBuffer(e), c.publicKeyCreate(e, !1).slice(1)
		};
		t.importPublic = function(e) {
			return 64 !== (e = t.toBuffer(e)).length && (e = c.publicKeyConvert(e, !1).slice(1)), e
		}, t.ecsign = function(e, t) {
			var r = c.sign(e, t),
				n = {};
			return n.r = r.signature.slice(0, 32), n.s = r.signature.slice(32, 64), n.v = r.recovery + 27, n
		}, t.hashPersonalMessage = function(e) {
			var r = t.toBuffer("Ethereum Signed Message:\n" + e.length.toString());
			return t.keccak(p.concat([r, e]))
		}, t.ecrecover = function(e, r, n, i) {
			var o = p.concat([t.setLength(n, 32), t.setLength(i, 32)], 64),
				a = r - 27;
			if (0 !== a && 1 !== a) throw new Error("Invalid signature v value");
			var s = c.recover(e, o, a);
			return c.publicKeyConvert(s, !1).slice(1)
		}, t.toRpcSig = function(e, r, n) {
			if (27 !== e && 28 !== e) throw new Error("Invalid recovery id");
			return t.bufferToHex(p.concat([t.setLengthLeft(r, 32), t.setLengthLeft(n, 32), t.toBuffer(e - 27)]))
		}, t.fromRpcSig = function(e) {
			if (65 !== (e = t.toBuffer(e)).length) throw new Error("Invalid signature length");
			var r = e[64];
			return r < 27 && (r += 27), {
				v: r,
				r: e.slice(0, 32),
				s: e.slice(32, 64)
			}
		}, t.privateToAddress = function(e) {
			return t.publicToAddress(b(e))
		}, t.isValidAddress = function(e) {
			return /^0x[0-9a-fA-F]{40}$/.test(e)
		}, t.isZeroAddress = function(e) {
			return t.zeroAddress() === t.addHexPrefix(e)
		}, t.toChecksumAddress = function(e) {
			e = t.stripHexPrefix(e).toLowerCase();
			for (var r = t.keccak(e).toString("hex"), n = "0x", i = 0; i < e.length; i++) parseInt(r[i], 16) >= 8 ? n += e[i].toUpperCase() : n += e[i];
			return n
		}, t.isValidChecksumAddress = function(e) {
			return t.isValidAddress(e) && t.toChecksumAddress(e) === e
		}, t.generateAddress = function(e, r) {
			return e = t.toBuffer(e), r = (r = new l(r)).isZero() ? null : p.from(r.toArray()), t.rlphash([e, r]).slice(-20)
		}, t.isPrecompiled = function(e) {
			var r = t.unpad(e);
			return 1 === r.length && r[0] >= 1 && r[0] <= 8
		}, t.addHexPrefix = function(e) {
			return "string" != typeof e || t.isHexPrefixed(e) ? e : "0x" + e
		}, t.isValidSignature = function(e, t, r, n) {
			var i = new l("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
				o = new l("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
			return 32 === t.length && 32 === r.length && ((27 === e || 28 === e) && (t = new l(t), r = new l(r), !(t.isZero() || t.gt(o) || r.isZero() || r.gt(o)) && (!1 !== n || 1 !== new l(r).cmp(i))))
		}, t.baToJSON = function(e) {
			if (p.isBuffer(e)) return "0x" + e.toString("hex");
			if (e instanceof Array) {
				for (var r = [], n = 0; n < e.length; n++) r.push(t.baToJSON(e[n]));
				return r
			}
		}, t.defineProperties = function(e, r, i) {
			if (e.raw = [], e._fields = [], e.toJSON = function(r) {
					if (r) {
						var n = {};
						return e._fields.forEach((function(t) {
							n[t] = "0x" + e[t].toString("hex")
						})), n
					}
					return t.baToJSON(this.raw)
				}, e.serialize = function() {
					return h.encode(e.raw)
				}, r.forEach((function(r, n) {
					function i() {
						return e.raw[n]
					}

					function o(i) {
						"00" !== (i = t.toBuffer(i)).toString("hex") || r.allowZero || (i = p.allocUnsafe(0)), r.allowLess && r.length ? (i = t.stripZeros(i), f(r.length >= i.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === i.length || !r.length || f(r.length === i.length, "The field " + r.name + " must have byte length of " + r.length), e.raw[n] = i
					}
					e._fields.push(r.name), Object.defineProperty(e, r.name, {
						enumerable: !0,
						configurable: !0,
						get: i,
						set: o
					}), r.default && (e[r.name] = r.default), r.alias && Object.defineProperty(e, r.alias, {
						enumerable: !1,
						configurable: !0,
						set: o,
						get: i
					})
				})), i)
				if ("string" == typeof i && (i = p.from(t.stripHexPrefix(i), "hex")), p.isBuffer(i) && (i = h.decode(i)), Array.isArray(i)) {
					if (i.length > e._fields.length) throw new Error("wrong number of fields in data");
					i.forEach((function(r, n) {
						e[e._fields[n]] = t.toBuffer(r)
					}))
				} else {
					if ("object" !== (void 0 === i ? "undefined" : n(i))) throw new Error("invalid data");
					var o = Object.keys(i);
					r.forEach((function(t) {
						-1 !== o.indexOf(t.name) && (e[t.name] = i[t.name]), -1 !== o.indexOf(t.alias) && (e[t.alias] = i[t.alias])
					}))
				}
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(15),
			i = r(22);

		function o() {
			this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
		}
		t.BlockHash = o, o.prototype.update = function(e, t) {
			if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
				var r = (e = this.pending).length % this._delta8;
				this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);
				for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32)
			}
			return this
		}, o.prototype.digest = function(e) {
			return this.update(this._pad()), i(null === this.pending), this._digest(e)
		}, o.prototype._pad = function() {
			var e = this.pendingTotal,
				t = this._delta8,
				r = t - (e + this.padLength) % t,
				n = new Array(r + this.padLength);
			n[0] = 128;
			for (var i = 1; i < r; i++) n[i] = 0;
			if (e <<= 3, "big" === this.endian) {
				for (var o = 8; o < this.padLength; o++) n[i++] = 0;
				n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e
			} else
				for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
			return n
		}
	}, function(e, t) {
		e.exports = function() {}
	}, function(e, t) {
		function r(e) {
			return e.sort((e, t) => "latest" === e || "earliest" === t ? 1 : "latest" === t || "earliest" === e ? -1 : n(e) - n(t))
		}

		function n(e) {
			return null == e ? e : Number.parseInt(e, 16)
		}

		function i(e) {
			if (null == e) return e;
			let t = e.toString(16);
			return t.length % 2 && (t = "0" + t), "0x" + t
		}

		function o() {
			return Math.floor(16 * Math.random()).toString(16)
		}
		e.exports = {
			minBlockRef: function(...e) {
				return r(e)[0]
			},
			maxBlockRef: function(...e) {
				const t = r(e);
				return t[t.length - 1]
			},
			sortBlockRefs: r,
			bnToHex: function(e) {
				return "0x" + e.toString(16)
			},
			blockRefIsNumber: function(e) {
				return e && !["earliest", "latest", "pending"].includes(e)
			},
			hexToInt: n,
			incrementHexInt: function(e) {
				if (null == e) return e;
				return i(n(e) + 1)
			},
			intToHex: i,
			unsafeRandomBytes: function(e) {
				let t = "0x";
				for (let r = 0; r < e; r++) t += o(), t += o();
				return t
			}
		}
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.baToJSON = t.addHexPrefix = t.toUnsigned = t.fromSigned = t.bufferToHex = t.bufferToInt = t.toBuffer = t.stripZeros = t.unpad = t.setLengthRight = t.setLength = t.setLengthLeft = t.zeros = void 0;
			var n = r(31),
				i = r(9);
			t.zeros = function(t) {
				return e.allocUnsafe(t).fill(0)
			}, t.setLengthLeft = function(e, r, n) {
				void 0 === n && (n = !1);
				var i = t.zeros(r);
				return e = t.toBuffer(e), n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r)
			}, t.setLength = t.setLengthLeft, t.setLengthRight = function(e, r) {
				return t.setLength(e, r, !0)
			}, t.unpad = function(e) {
				for (var t = (e = n.stripHexPrefix(e))[0]; e.length > 0 && "0" === t.toString();) t = (e = e.slice(1))[0];
				return e
			}, t.stripZeros = t.unpad, t.toBuffer = function(t) {
				if (!e.isBuffer(t))
					if (Array.isArray(t)) t = e.from(t);
					else if ("string" == typeof t) {
					if (!n.isHexString(t)) throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + t);
					t = e.from(n.padToEven(n.stripHexPrefix(t)), "hex")
				} else if ("number" == typeof t) t = n.intToBuffer(t);
				else if (null == t) t = e.allocUnsafe(0);
				else if (i.isBN(t)) t = t.toArrayLike(e);
				else {
					if (!t.toArray) throw new Error("invalid type");
					t = e.from(t.toArray())
				}
				return t
			}, t.bufferToInt = function(e) {
				return new i(t.toBuffer(e)).toNumber()
			}, t.bufferToHex = function(e) {
				return "0x" + (e = t.toBuffer(e)).toString("hex")
			}, t.fromSigned = function(e) {
				return new i(e).fromTwos(256)
			}, t.toUnsigned = function(t) {
				return e.from(t.toTwos(256).toArray())
			}, t.addHexPrefix = function(e) {
				return "string" != typeof e || n.isHexPrefixed(e) ? e : "0x" + e
			}, t.baToJSON = function(r) {
				if (e.isBuffer(r)) return "0x" + r.toString("hex");
				if (r instanceof Array) {
					for (var n = [], i = 0; i < r.length; i++) n.push(t.baToJSON(r[i]));
					return n
				}
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		r.d(t, "a", (function() {
			return n
		}));
		class n {}
	}, function(e, t, r) {
		"use strict";
		var n = r(93);
		r.o(n, "isConstantTime") && r.d(t, "isConstantTime", (function() {
			return n.isConstantTime
		}));
		r(94);
		var i = r(95);
		r.o(i, "isConstantTime") && r.d(t, "isConstantTime", (function() {
			return i.isConstantTime
		}));
		var o = r(96);
		r.d(t, "isConstantTime", (function() {
			return o.a
		}))
	}, function(e, t, r) {
		"use strict";
		(function(t) {
			void 0 === t || !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
				nextTick: function(e, r, n, i) {
					if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
					var o, a, s = arguments.length;
					switch (s) {
						case 0:
						case 1:
							return t.nextTick(e);
						case 2:
							return t.nextTick((function() {
								e.call(null, r)
							}));
						case 3:
							return t.nextTick((function() {
								e.call(null, r, n)
							}));
						case 4:
							return t.nextTick((function() {
								e.call(null, r, n, i)
							}));
						default:
							for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a];
							return t.nextTick((function() {
								e.apply(null, o)
							}))
					}
				}
			} : e.exports = t
		}).call(this, r(5))
	}, function(e, t) {
		e.exports = function() {
			for (var e = {}, t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) r.call(n, i) && (e[i] = n[i])
			}
			return e
		};
		var r = Object.prototype.hasOwnProperty
	}, function(e, t, r) {
		"use strict";
		var n = r(16),
			i = r(11),
			o = i.getNAF,
			a = i.getJSF,
			s = i.assert;

		function u(e, t) {
			this.type = e, this.p = new n(t.p, 16), this.red = t.prime ? n.red(t.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = t.n && new n(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
			var r = this.n && this.p.div(this.n);
			!r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
		}

		function c(e, t) {
			this.curve = e, this.type = t, this.precomputed = null
		}
		e.exports = u, u.prototype.point = function() {
			throw new Error("Not implemented")
		}, u.prototype.validate = function() {
			throw new Error("Not implemented")
		}, u.prototype._fixedNafMul = function(e, t) {
			s(e.precomputed);
			var r = e._getDoubles(),
				n = o(t, 1, this._bitLength),
				i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
			i /= 3;
			var a, u, c = [];
			for (a = 0; a < n.length; a += r.step) {
				u = 0;
				for (var f = a + r.step - 1; f >= a; f--) u = (u << 1) + n[f];
				c.push(u)
			}
			for (var h = this.jpoint(null, null, null), l = this.jpoint(null, null, null), d = i; d > 0; d--) {
				for (a = 0; a < c.length; a++)(u = c[a]) === d ? l = l.mixedAdd(r.points[a]) : u === -d && (l = l.mixedAdd(r.points[a].neg()));
				h = h.add(l)
			}
			return h.toP()
		}, u.prototype._wnafMul = function(e, t) {
			var r = 4,
				n = e._getNAFPoints(r);
			r = n.wnd;
			for (var i = n.points, a = o(t, r, this._bitLength), u = this.jpoint(null, null, null), c = a.length - 1; c >= 0; c--) {
				for (var f = 0; c >= 0 && 0 === a[c]; c--) f++;
				if (c >= 0 && f++, u = u.dblp(f), c < 0) break;
				var h = a[c];
				s(0 !== h), u = "affine" === e.type ? h > 0 ? u.mixedAdd(i[h - 1 >> 1]) : u.mixedAdd(i[-h - 1 >> 1].neg()) : h > 0 ? u.add(i[h - 1 >> 1]) : u.add(i[-h - 1 >> 1].neg())
			}
			return "affine" === e.type ? u.toP() : u
		}, u.prototype._wnafMulAdd = function(e, t, r, n, i) {
			var s, u, c, f = this._wnafT1,
				h = this._wnafT2,
				l = this._wnafT3,
				d = 0;
			for (s = 0; s < n; s++) {
				var p = (c = t[s])._getNAFPoints(e);
				f[s] = p.wnd, h[s] = p.points
			}
			for (s = n - 1; s >= 1; s -= 2) {
				var b = s - 1,
					g = s;
				if (1 === f[b] && 1 === f[g]) {
					var m = [t[b], null, null, t[g]];
					0 === t[b].y.cmp(t[g].y) ? (m[1] = t[b].add(t[g]), m[2] = t[b].toJ().mixedAdd(t[g].neg())) : 0 === t[b].y.cmp(t[g].y.redNeg()) ? (m[1] = t[b].toJ().mixedAdd(t[g]), m[2] = t[b].add(t[g].neg())) : (m[1] = t[b].toJ().mixedAdd(t[g]), m[2] = t[b].toJ().mixedAdd(t[g].neg()));
					var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
						v = a(r[b], r[g]);
					for (d = Math.max(v[0].length, d), l[b] = new Array(d), l[g] = new Array(d), u = 0; u < d; u++) {
						var _ = 0 | v[0][u],
							w = 0 | v[1][u];
						l[b][u] = y[3 * (_ + 1) + (w + 1)], l[g][u] = 0, h[b] = m
					}
				} else l[b] = o(r[b], f[b], this._bitLength), l[g] = o(r[g], f[g], this._bitLength), d = Math.max(l[b].length, d), d = Math.max(l[g].length, d)
			}
			var M = this.jpoint(null, null, null),
				S = this._wnafT4;
			for (s = d; s >= 0; s--) {
				for (var x = 0; s >= 0;) {
					var E = !0;
					for (u = 0; u < n; u++) S[u] = 0 | l[u][s], 0 !== S[u] && (E = !1);
					if (!E) break;
					x++, s--
				}
				if (s >= 0 && x++, M = M.dblp(x), s < 0) break;
				for (u = 0; u < n; u++) {
					var k = S[u];
					0 !== k && (k > 0 ? c = h[u][k - 1 >> 1] : k < 0 && (c = h[u][-k - 1 >> 1].neg()), M = "affine" === c.type ? M.mixedAdd(c) : M.add(c))
				}
			}
			for (s = 0; s < n; s++) h[s] = null;
			return i ? M : M.toP()
		}, u.BasePoint = c, c.prototype.eq = function() {
			throw new Error("Not implemented")
		}, c.prototype.validate = function() {
			return this.curve.validate(this)
		}, u.prototype.decodePoint = function(e, t) {
			e = i.toArray(e, t);
			var r = this.p.byteLength();
			if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
			if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
			throw new Error("Unknown point format")
		}, c.prototype.encodeCompressed = function(e) {
			return this.encode(e, !0)
		}, c.prototype._encode = function(e) {
			var t = this.curve.p.byteLength(),
				r = this.getX().toArray("be", t);
			return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
		}, c.prototype.encode = function(e, t) {
			return i.encode(this._encode(t), e)
		}, c.prototype.precompute = function(e) {
			if (this.precomputed) return this;
			var t = {
				doubles: null,
				naf: null,
				beta: null
			};
			return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
		}, c.prototype._hasDoubles = function(e) {
			if (!this.precomputed) return !1;
			var t = this.precomputed.doubles;
			return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
		}, c.prototype._getDoubles = function(e, t) {
			if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
			for (var r = [this], n = this, i = 0; i < t; i += e) {
				for (var o = 0; o < e; o++) n = n.dbl();
				r.push(n)
			}
			return {
				step: e,
				points: r
			}
		}, c.prototype._getNAFPoints = function(e) {
			if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
			for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);
			return {
				wnd: e,
				points: t
			}
		}, c.prototype._getBeta = function() {
			return null
		}, c.prototype.dblp = function(e) {
			for (var t = this, r = 0; r < e; r++) t = t.dbl();
			return t
		}
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getLength = t.decode = t.encode = void 0;
			var n = r(9);

			function i(e, t) {
				if ("00" === e.slice(0, 2)) throw new Error("invalid RLP: extra zeros");
				return parseInt(e, t)
			}

			function o(t, r) {
				if (t < 56) return e.from([t + r]);
				var n = s(t),
					i = s(r + 55 + n.length / 2);
				return e.from(i + n, "hex")
			}

			function a(e) {
				return "0x" === e.slice(0, 2)
			}

			function s(e) {
				if (e < 0) throw new Error("Invalid integer as argument, must be unsigned!");
				var t = e.toString(16);
				return t.length % 2 ? "0" + t : t
			}

			function u(t) {
				if (!e.isBuffer(t)) {
					if ("string" == typeof t) return a(t) ? e.from((i = "string" != typeof(o = t) ? o : a(o) ? o.slice(2) : o).length % 2 ? "0" + i : i, "hex") : e.from(t);
					if ("number" == typeof t || "bigint" == typeof t) return t ? (r = s(t), e.from(r, "hex")) : e.from([]);
					if (null == t) return e.from([]);
					if (t instanceof Uint8Array) return e.from(t);
					if (n.isBN(t)) return e.from(t.toArray());
					throw new Error("invalid type")
				}
				var r, i, o;
				return t
			}
			t.encode = function t(r) {
				if (Array.isArray(r)) {
					for (var n = [], i = 0; i < r.length; i++) n.push(t(r[i]));
					var a = e.concat(n);
					return e.concat([o(a.length, 192), a])
				}
				var s = u(r);
				return 1 === s.length && s[0] < 128 ? s : e.concat([o(s.length, 128), s])
			}, t.decode = function(t, r) {
				if (void 0 === r && (r = !1), !t || 0 === t.length) return e.from([]);
				var n = function t(r) {
					var n, o, a, s, u, c = [],
						f = r[0];
					if (f <= 127) return {
						data: r.slice(0, 1),
						remainder: r.slice(1)
					};
					if (f <= 183) {
						if (n = f - 127, a = 128 === f ? e.from([]) : r.slice(1, n), 2 === n && a[0] < 128) throw new Error("invalid rlp encoding: byte must be less 0x80");
						return {
							data: a,
							remainder: r.slice(n)
						}
					}
					if (f <= 191) {
						if (o = f - 182, r.length - 1 < o) throw new Error("invalid RLP: not enough bytes for string length");
						if ((n = i(r.slice(1, o).toString("hex"), 16)) <= 55) throw new Error("invalid RLP: expected string length to be greater than 55");
						if ((a = r.slice(o, n + o)).length < n) throw new Error("invalid RLP: not enough bytes for string");
						return {
							data: a,
							remainder: r.slice(n + o)
						}
					}
					if (f <= 247) {
						for (n = f - 191, s = r.slice(1, n); s.length;) u = t(s), c.push(u.data), s = u.remainder;
						return {
							data: c,
							remainder: r.slice(n)
						}
					}
					o = f - 246, n = i(r.slice(1, o).toString("hex"), 16);
					var h = o + n;
					if (h > r.length) throw new Error("invalid rlp: total length is larger than the data");
					if (0 === (s = r.slice(o, h)).length) throw new Error("invalid rlp, List has a invalid length");
					for (; s.length;) u = t(s), c.push(u.data), s = u.remainder;
					return {
						data: c,
						remainder: r.slice(h)
					}
				}(u(t));
				if (r) return n;
				if (0 !== n.remainder.length) throw new Error("invalid remainder");
				return n.data
			}, t.getLength = function(t) {
				if (!t || 0 === t.length) return e.from([]);
				var r = u(t),
					n = r[0];
				if (n <= 127) return r.length;
				if (n <= 183) return n - 127;
				if (n <= 191) return n - 182;
				if (n <= 247) return n - 191;
				var o = n - 246;
				return o + i(r.slice(1, o).toString("hex"), 16)
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		var n = r(298),
			i = r(144);
		e.exports = function(e) {
			return null != e && i(e.length) && !n(e)
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t) {
			t |= 0;
			for (var r = Math.max(e.length - t, 0), n = Array(r), i = 0; i < r; i++) n[i] = e[t + i];
			return n
		}, e.exports = t.default
	}, function(e, t, r) {
		const n = r(67);

		function i() {}
		e.exports = i, i.prototype.setEngine = function(e) {
			const t = this;
			t.engine || (t.engine = e, e.on("block", (function(e) {
				t.currentBlock = e
			})), e.on("start", (function() {
				t.start()
			})), e.on("stop", (function() {
				t.stop()
			})))
		}, i.prototype.handleRequest = function(e, t, r) {
			throw new Error("Subproviders should override `handleRequest`.")
		}, i.prototype.emitPayload = function(e, t) {
			this.engine.sendAsync(n(e), t)
		}, i.prototype.stop = function() {}, i.prototype.start = function() {}
	}, function(e, t) {
		var r = {}.toString;
		e.exports = Array.isArray || function(e) {
			return "[object Array]" == r.call(e)
		}
	}, function(e, t) {
		t.L = {
			bit: 1
		}, t.M = {
			bit: 0
		}, t.Q = {
			bit: 3
		}, t.H = {
			bit: 2
		}, t.isValid = function(e) {
			return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
		}, t.from = function(e, r) {
			if (t.isValid(e)) return e;
			try {
				return function(e) {
					if ("string" != typeof e) throw new Error("Param is not a string");
					switch (e.toLowerCase()) {
						case "l":
						case "low":
							return t.L;
						case "m":
						case "medium":
							return t.M;
						case "q":
						case "quartile":
							return t.Q;
						case "h":
						case "high":
							return t.H;
						default:
							throw new Error("Unknown EC Level: " + e)
					}
				}(e)
			} catch (e) {
				return r
			}
		}
	}, function(e, t, r) {
		var n = r(2),
			i = n.Buffer;

		function o(e, t) {
			for (var r in e) t[r] = e[r]
		}

		function a(e, t, r) {
			return i(e, t, r)
		}
		i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), o(i, a), a.from = function(e, t, r) {
			if ("number" == typeof e) throw new TypeError("Argument must not be a number");
			return i(e, t, r)
		}, a.alloc = function(e, t, r) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			var n = i(e);
			return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
		}, a.allocUnsafe = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return i(e)
		}, a.allocUnsafeSlow = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return n.SlowBuffer(e)
		}
	}, function(e, t, r) {
		"use strict";
		(function(t, n, i) {
			var o = r(43);

			function a(e) {
				var t = this;
				this.next = null, this.entry = null, this.finish = function() {
					! function(e, t, r) {
						var n = e.entry;
						e.entry = null;
						for (; n;) {
							var i = n.callback;
							t.pendingcb--, i(r), n = n.next
						}
						t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
					}(t, e)
				}
			}
			e.exports = y;
			var s, u = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? n : o.nextTick;
			y.WritableState = m;
			var c = Object.create(r(35));
			c.inherits = r(3);
			var f = {
					deprecate: r(54)
				},
				h = r(106),
				l = r(52).Buffer,
				d = i.Uint8Array || function() {};
			var p, b = r(107);

			function g() {}

			function m(e, t) {
				s = s || r(19), e = e || {};
				var n = t instanceof s;
				this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
				var i = e.highWaterMark,
					c = e.writableHighWaterMark,
					f = this.objectMode ? 16 : 16384;
				this.highWaterMark = i || 0 === i ? i : n && (c || 0 === c) ? c : f, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
				var h = !1 === e.decodeStrings;
				this.decodeStrings = !h, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
					! function(e, t) {
						var r = e._writableState,
							n = r.sync,
							i = r.writecb;
						if (function(e) {
								e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
							}(r), t) ! function(e, t, r, n, i) {
							--t.pendingcb, r ? (o.nextTick(i, n), o.nextTick(x, e, t), e._writableState.errorEmitted = !0, e.emit("error", n)) : (i(n), e._writableState.errorEmitted = !0, e.emit("error", n), x(e, t))
						}(e, r, n, t, i);
						else {
							var a = M(r);
							a || r.corked || r.bufferProcessing || !r.bufferedRequest || w(e, r), n ? u(_, e, r, a, i) : _(e, r, a, i)
						}
					}(t, e)
				}, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this)
			}

			function y(e) {
				if (s = s || r(19), !(p.call(y, this) || this instanceof s)) return new y(e);
				this._writableState = new m(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), h.call(this)
			}

			function v(e, t, r, n, i, o, a) {
				t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
			}

			function _(e, t, r, n) {
				r || function(e, t) {
					0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
				}(e, t), t.pendingcb--, n(), x(e, t)
			}

			function w(e, t) {
				t.bufferProcessing = !0;
				var r = t.bufferedRequest;
				if (e._writev && r && r.next) {
					var n = t.bufferedRequestCount,
						i = new Array(n),
						o = t.corkedRequestsFree;
					o.entry = r;
					for (var s = 0, u = !0; r;) i[s] = r, r.isBuf || (u = !1), r = r.next, s += 1;
					i.allBuffers = u, v(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new a(t), t.bufferedRequestCount = 0
				} else {
					for (; r;) {
						var c = r.chunk,
							f = r.encoding,
							h = r.callback;
						if (v(e, t, !1, t.objectMode ? 1 : c.length, c, f, h), r = r.next, t.bufferedRequestCount--, t.writing) break
					}
					null === r && (t.lastBufferedRequest = null)
				}
				t.bufferedRequest = r, t.bufferProcessing = !1
			}

			function M(e) {
				return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
			}

			function S(e, t) {
				e._final((function(r) {
					t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), x(e, t)
				}))
			}

			function x(e, t) {
				var r = M(t);
				return r && (! function(e, t) {
					t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, o.nextTick(S, e, t)) : (t.prefinished = !0, e.emit("prefinish")))
				}(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), r
			}
			c.inherits(y, h), m.prototype.getBuffer = function() {
					for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
					return t
				},
				function() {
					try {
						Object.defineProperty(m.prototype, "buffer", {
							get: f.deprecate((function() {
								return this.getBuffer()
							}), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
						})
					} catch (e) {}
				}(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(y, Symbol.hasInstance, {
					value: function(e) {
						return !!p.call(this, e) || this === y && (e && e._writableState instanceof m)
					}
				})) : p = function(e) {
					return e instanceof this
				}, y.prototype.pipe = function() {
					this.emit("error", new Error("Cannot pipe, not readable"))
				}, y.prototype.write = function(e, t, r) {
					var n, i = this._writableState,
						a = !1,
						s = !i.objectMode && (n = e, l.isBuffer(n) || n instanceof d);
					return s && !l.isBuffer(e) && (e = function(e) {
						return l.from(e)
					}(e)), "function" == typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof r && (r = g), i.ended ? function(e, t) {
						var r = new Error("write after end");
						e.emit("error", r), o.nextTick(t, r)
					}(this, r) : (s || function(e, t, r, n) {
						var i = !0,
							a = !1;
						return null === r ? a = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), o.nextTick(n, a), i = !1), i
					}(this, i, e, r)) && (i.pendingcb++, a = function(e, t, r, n, i, o) {
						if (!r) {
							var a = function(e, t, r) {
								e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = l.from(t, r));
								return t
							}(t, n, i);
							n !== a && (r = !0, i = "buffer", n = a)
						}
						var s = t.objectMode ? 1 : n.length;
						t.length += s;
						var u = t.length < t.highWaterMark;
						u || (t.needDrain = !0);
						if (t.writing || t.corked) {
							var c = t.lastBufferedRequest;
							t.lastBufferedRequest = {
								chunk: n,
								encoding: i,
								isBuf: r,
								callback: o,
								next: null
							}, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
						} else v(e, t, !1, s, n, i, o);
						return u
					}(this, i, s, e, t, r)), a
				}, y.prototype.cork = function() {
					this._writableState.corked++
				}, y.prototype.uncork = function() {
					var e = this._writableState;
					e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e))
				}, y.prototype.setDefaultEncoding = function(e) {
					if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
					return this._writableState.defaultEncoding = e, this
				}, Object.defineProperty(y.prototype, "writableHighWaterMark", {
					enumerable: !1,
					get: function() {
						return this._writableState.highWaterMark
					}
				}), y.prototype._write = function(e, t, r) {
					r(new Error("_write() is not implemented"))
				}, y.prototype._writev = null, y.prototype.end = function(e, t, r) {
					var n = this._writableState;
					"function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function(e, t, r) {
						t.ending = !0, x(e, t), r && (t.finished ? o.nextTick(r) : e.once("finish", r));
						t.ended = !0, e.writable = !1
					}(this, n, r)
				}, Object.defineProperty(y.prototype, "destroyed", {
					get: function() {
						return void 0 !== this._writableState && this._writableState.destroyed
					},
					set: function(e) {
						this._writableState && (this._writableState.destroyed = e)
					}
				}), y.prototype.destroy = b.destroy, y.prototype._undestroy = b.undestroy, y.prototype._destroy = function(e, t) {
					this.end(), t(e)
				}
		}).call(this, r(5), r(108).setImmediate, r(6))
	}, function(e, t, r) {
		(function(t) {
			function r(e) {
				try {
					if (!t.localStorage) return !1
				} catch (e) {
					return !1
				}
				var r = t.localStorage[e];
				return null != r && "true" === String(r).toLowerCase()
			}
			e.exports = function(e, t) {
				if (r("noDeprecation")) return e;
				var n = !1;
				return function() {
					if (!n) {
						if (r("throwDeprecation")) throw new Error(t);
						r("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
					}
					return e.apply(this, arguments)
				}
			}
		}).call(this, r(6))
	}, function(e, t, r) {
		"use strict";
		var n = r(213),
			i = r(214);

		function o() {
			this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
		}
		t.parse = v, t.resolve = function(e, t) {
			return v(e, !1, !0).resolve(t)
		}, t.resolveObject = function(e, t) {
			return e ? v(e, !1, !0).resolveObject(t) : t
		}, t.format = function(e) {
			i.isString(e) && (e = v(e));
			return e instanceof o ? e.format() : o.prototype.format.call(e)
		}, t.Url = o;
		var a = /^([a-z0-9.+-]+:)/i,
			s = /:[0-9]*$/,
			u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
			c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
			f = ["'"].concat(c),
			h = ["%", "/", "?", ";", "#"].concat(f),
			l = ["/", "?", "#"],
			d = /^[+a-z0-9A-Z_-]{0,63}$/,
			p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
			b = {
				javascript: !0,
				"javascript:": !0
			},
			g = {
				javascript: !0,
				"javascript:": !0
			},
			m = {
				http: !0,
				https: !0,
				ftp: !0,
				gopher: !0,
				file: !0,
				"http:": !0,
				"https:": !0,
				"ftp:": !0,
				"gopher:": !0,
				"file:": !0
			},
			y = r(215);

		function v(e, t, r) {
			if (e && i.isObject(e) && e instanceof o) return e;
			var n = new o;
			return n.parse(e, t, r), n
		}
		o.prototype.parse = function(e, t, r) {
			if (!i.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
			var o = e.indexOf("?"),
				s = -1 !== o && o < e.indexOf("#") ? "?" : "#",
				c = e.split(s);
			c[0] = c[0].replace(/\\/g, "/");
			var v = e = c.join(s);
			if (v = v.trim(), !r && 1 === e.split("#").length) {
				var _ = u.exec(v);
				if (_) return this.path = v, this.href = v, this.pathname = _[1], _[2] ? (this.search = _[2], this.query = t ? y.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
			}
			var w = a.exec(v);
			if (w) {
				var M = (w = w[0]).toLowerCase();
				this.protocol = M, v = v.substr(w.length)
			}
			if (r || w || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
				var S = "//" === v.substr(0, 2);
				!S || w && g[w] || (v = v.substr(2), this.slashes = !0)
			}
			if (!g[w] && (S || w && !m[w])) {
				for (var x, E, k = -1, A = 0; A < l.length; A++) {
					-1 !== (R = v.indexOf(l[A])) && (-1 === k || R < k) && (k = R)
				} - 1 !== (E = -1 === k ? v.lastIndexOf("@") : v.lastIndexOf("@", k)) && (x = v.slice(0, E), v = v.slice(E + 1), this.auth = decodeURIComponent(x)), k = -1;
				for (A = 0; A < h.length; A++) {
					var R; - 1 !== (R = v.indexOf(h[A])) && (-1 === k || R < k) && (k = R)
				} - 1 === k && (k = v.length), this.host = v.slice(0, k), v = v.slice(k), this.parseHost(), this.hostname = this.hostname || "";
				var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
				if (!T)
					for (var C = this.hostname.split(/\./), O = (A = 0, C.length); A < O; A++) {
						var P = C[A];
						if (P && !P.match(d)) {
							for (var I = "", B = 0, L = P.length; B < L; B++) P.charCodeAt(B) > 127 ? I += "x" : I += P[B];
							if (!I.match(d)) {
								var j = C.slice(0, A),
									N = C.slice(A + 1),
									U = P.match(p);
								U && (j.push(U[1]), N.unshift(U[2])), N.length && (v = "/" + N.join(".") + v), this.hostname = j.join(".");
								break
							}
						}
					}
				this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = n.toASCII(this.hostname));
				var q = this.port ? ":" + this.port : "",
					D = this.hostname || "";
				this.host = D + q, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== v[0] && (v = "/" + v))
			}
			if (!b[M])
				for (A = 0, O = f.length; A < O; A++) {
					var H = f[A];
					if (-1 !== v.indexOf(H)) {
						var z = encodeURIComponent(H);
						z === H && (z = escape(H)), v = v.split(H).join(z)
					}
				}
			var F = v.indexOf("#"); - 1 !== F && (this.hash = v.substr(F), v = v.slice(0, F));
			var W = v.indexOf("?");
			if (-1 !== W ? (this.search = v.substr(W), this.query = v.substr(W + 1), t && (this.query = y.parse(this.query)), v = v.slice(0, W)) : t && (this.search = "", this.query = {}), v && (this.pathname = v), m[M] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
				q = this.pathname || "";
				var K = this.search || "";
				this.path = q + K
			}
			return this.href = this.format(), this
		}, o.prototype.format = function() {
			var e = this.auth || "";
			e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
			var t = this.protocol || "",
				r = this.pathname || "",
				n = this.hash || "",
				o = !1,
				a = "";
			this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (a = y.stringify(this.query));
			var s = this.search || a && "?" + a || "";
			return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || m[t]) && !1 !== o ? (o = "//" + (o || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""), n && "#" !== n.charAt(0) && (n = "#" + n), s && "?" !== s.charAt(0) && (s = "?" + s), t + o + (r = r.replace(/[?#]/g, (function(e) {
				return encodeURIComponent(e)
			}))) + (s = s.replace("#", "%23")) + n
		}, o.prototype.resolve = function(e) {
			return this.resolveObject(v(e, !1, !0)).format()
		}, o.prototype.resolveObject = function(e) {
			if (i.isString(e)) {
				var t = new o;
				t.parse(e, !1, !0), e = t
			}
			for (var r = new o, n = Object.keys(this), a = 0; a < n.length; a++) {
				var s = n[a];
				r[s] = this[s]
			}
			if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
			if (e.slashes && !e.protocol) {
				for (var u = Object.keys(e), c = 0; c < u.length; c++) {
					var f = u[c];
					"protocol" !== f && (r[f] = e[f])
				}
				return m[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
			}
			if (e.protocol && e.protocol !== r.protocol) {
				if (!m[e.protocol]) {
					for (var h = Object.keys(e), l = 0; l < h.length; l++) {
						var d = h[l];
						r[d] = e[d]
					}
					return r.href = r.format(), r
				}
				if (r.protocol = e.protocol, e.host || g[e.protocol]) r.pathname = e.pathname;
				else {
					for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
					e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), r.pathname = p.join("/")
				}
				if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
					var b = r.pathname || "",
						y = r.search || "";
					r.path = b + y
				}
				return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
			}
			var v = r.pathname && "/" === r.pathname.charAt(0),
				_ = e.host || e.pathname && "/" === e.pathname.charAt(0),
				w = _ || v || r.host && e.pathname,
				M = w,
				S = r.pathname && r.pathname.split("/") || [],
				x = (p = e.pathname && e.pathname.split("/") || [], r.protocol && !m[r.protocol]);
			if (x && (r.hostname = "", r.port = null, r.host && ("" === S[0] ? S[0] = r.host : S.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), w = w && ("" === p[0] || "" === S[0])), _) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, S = p;
			else if (p.length) S || (S = []), S.pop(), S = S.concat(p), r.search = e.search, r.query = e.query;
			else if (!i.isNullOrUndefined(e.search)) {
				if (x) r.hostname = r.host = S.shift(), (T = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = T.shift(), r.host = r.hostname = T.shift());
				return r.search = e.search, r.query = e.query, i.isNull(r.pathname) && i.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
			}
			if (!S.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
			for (var E = S.slice(-1)[0], k = (r.host || e.host || S.length > 1) && ("." === E || ".." === E) || "" === E, A = 0, R = S.length; R >= 0; R--) "." === (E = S[R]) ? S.splice(R, 1) : ".." === E ? (S.splice(R, 1), A++) : A && (S.splice(R, 1), A--);
			if (!w && !M)
				for (; A--; A) S.unshift("..");
			!w || "" === S[0] || S[0] && "/" === S[0].charAt(0) || S.unshift(""), k && "/" !== S.join("/").substr(-1) && S.push("");
			var T, C = "" === S[0] || S[0] && "/" === S[0].charAt(0);
			x && (r.hostname = r.host = C ? "" : S.length ? S.shift() : "", (T = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = T.shift(), r.host = r.hostname = T.shift()));
			return (w = w || r.host && S.length) && !C && S.unshift(""), S.length ? r.pathname = S.join("/") : (r.pathname = null, r.path = null), i.isNull(r.pathname) && i.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
		}, o.prototype.parseHost = function() {
			var e = this.host,
				t = s.exec(e);
			t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function() {
			function e() {
				this.listeners = {}
			}
			return e.prototype.addEventListener = function(e, t) {
				e = e.toLowerCase(), this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(t.handleEvent || t)
			}, e.prototype.removeEventListener = function(e, t) {
				if (e = e.toLowerCase(), this.listeners[e]) {
					var r = this.listeners[e].indexOf(t.handleEvent || t);
					r < 0 || this.listeners[e].splice(r, 1)
				}
			}, e.prototype.dispatchEvent = function(e) {
				var t = e.type.toLowerCase();
				if (e.target = this, this.listeners[t])
					for (var r = 0, n = this.listeners[t]; r < n.length; r++) {
						n[r].call(this, e)
					}
				var i = this["on" + t];
				return i && i.call(this, e), !0
			}, e
		}();
		t.XMLHttpRequestEventTarget = n
	}, function(e, t, r) {
		"use strict";
		var n = r(26).codes.ERR_STREAM_PREMATURE_CLOSE;

		function i() {}
		e.exports = function e(t, r, o) {
			if ("function" == typeof r) return e(t, null, r);
			r || (r = {}), o = function(e) {
				var t = !1;
				return function() {
					if (!t) {
						t = !0;
						for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
						e.apply(this, n)
					}
				}
			}(o || i);
			var a = r.readable || !1 !== r.readable && t.readable,
				s = r.writable || !1 !== r.writable && t.writable,
				u = function() {
					t.writable || f()
				},
				c = t._writableState && t._writableState.finished,
				f = function() {
					s = !1, c = !0, a || o.call(t)
				},
				h = t._readableState && t._readableState.endEmitted,
				l = function() {
					a = !1, h = !0, s || o.call(t)
				},
				d = function(e) {
					o.call(t, e)
				},
				p = function() {
					var e;
					return a && !h ? (t._readableState && t._readableState.ended || (e = new n), o.call(t, e)) : s && !c ? (t._writableState && t._writableState.ended || (e = new n), o.call(t, e)) : void 0
				},
				b = function() {
					t.req.on("finish", f)
				};
			return ! function(e) {
					return e.setHeader && "function" == typeof e.abort
				}(t) ? s && !t._writableState && (t.on("end", u), t.on("close", u)) : (t.on("complete", f), t.on("abort", p), t.req ? b() : t.on("request", b)), t.on("end", l), t.on("finish", f), !1 !== r.error && t.on("error", d), t.on("close", p),
				function() {
					t.removeListener("complete", f), t.removeListener("abort", p), t.removeListener("request", b), t.req && t.req.removeListener("finish", f), t.removeListener("end", u), t.removeListener("close", u), t.removeListener("finish", f), t.removeListener("end", l), t.removeListener("error", d), t.removeListener("close", p)
				}
		}
	}, function(e, t, r) {
		"use strict";
		var n = t;
		n.version = r(244).version, n.utils = r(11), n.rand = r(121), n.curve = r(122), n.curves = r(59), n.ec = r(257), n.eddsa = r(261)
	}, function(e, t, r) {
		"use strict";
		var n, i = t,
			o = r(60),
			a = r(122),
			s = r(11).assert;

		function u(e) {
			"short" === e.type ? this.curve = new a.short(e) : "edwards" === e.type ? this.curve = new a.edwards(e) : this.curve = new a.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
		}

		function c(e, t) {
			Object.defineProperty(i, e, {
				configurable: !0,
				enumerable: !0,
				get: function() {
					var r = new u(t);
					return Object.defineProperty(i, e, {
						configurable: !0,
						enumerable: !0,
						value: r
					}), r
				}
			})
		}
		i.PresetCurve = u, c("p192", {
			type: "short",
			prime: "p192",
			p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
			a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
			b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
			n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
			hash: o.sha256,
			gRed: !1,
			g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
		}), c("p224", {
			type: "short",
			prime: "p224",
			p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
			a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
			b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
			n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
			hash: o.sha256,
			gRed: !1,
			g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
		}), c("p256", {
			type: "short",
			prime: null,
			p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
			a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
			b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
			n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
			hash: o.sha256,
			gRed: !1,
			g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
		}), c("p384", {
			type: "short",
			prime: null,
			p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
			a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
			b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
			n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
			hash: o.sha384,
			gRed: !1,
			g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
		}), c("p521", {
			type: "short",
			prime: null,
			p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
			a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
			b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
			n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
			hash: o.sha512,
			gRed: !1,
			g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
		}), c("curve25519", {
			type: "mont",
			prime: "p25519",
			p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
			a: "76d06",
			b: "1",
			n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
			hash: o.sha256,
			gRed: !1,
			g: ["9"]
		}), c("ed25519", {
			type: "edwards",
			prime: "p25519",
			p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
			a: "-1",
			c: "1",
			d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
			n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
			hash: o.sha256,
			gRed: !1,
			g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
		});
		try {
			n = r(256)
		} catch (e) {
			n = void 0
		}
		c("secp256k1", {
			type: "short",
			prime: "k256",
			p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
			a: "0",
			b: "7",
			n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
			h: "1",
			hash: o.sha256,
			beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
			lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
			basis: [{
				a: "3086d221a7d46bcde86c90e49284eb15",
				b: "-e4437ed6010e88286f547fa90abfe4c3"
			}, {
				a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
				b: "3086d221a7d46bcde86c90e49284eb15"
			}],
			gRed: !1,
			g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
		})
	}, function(e, t, r) {
		var n = t;
		n.utils = r(15), n.common = r(37), n.sha = r(250), n.ripemd = r(254), n.hmac = r(255), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160
	}, function(e, t, r) {
		"use strict";
		(function(t) {
			var n = r(268);
			/*!
			 * The buffer module from node.js, for the browser.
			 *
			 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
			 * @license  MIT
			 */
			function i(e, t) {
				if (e === t) return 0;
				for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
					if (e[i] !== t[i]) {
						r = e[i], n = t[i];
						break
					} return r < n ? -1 : n < r ? 1 : 0
			}

			function o(e) {
				return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
			}
			var a = r(21),
				s = Object.prototype.hasOwnProperty,
				u = Array.prototype.slice,
				c = "foo" === function() {}.name;

			function f(e) {
				return Object.prototype.toString.call(e)
			}

			function h(e) {
				return !o(e) && ("function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer))))
			}
			var l = e.exports = y,
				d = /\s*function\s+([^\(\s]*)\s*/;

			function p(e) {
				if (a.isFunction(e)) {
					if (c) return e.name;
					var t = e.toString().match(d);
					return t && t[1]
				}
			}

			function b(e, t) {
				return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e
			}

			function g(e) {
				if (c || !a.isFunction(e)) return a.inspect(e);
				var t = p(e);
				return "[Function" + (t ? ": " + t : "") + "]"
			}

			function m(e, t, r, n, i) {
				throw new l.AssertionError({
					message: r,
					actual: e,
					expected: t,
					operator: n,
					stackStartFunction: i
				})
			}

			function y(e, t) {
				e || m(e, !0, t, "==", l.ok)
			}

			function v(e, t, r, n) {
				if (e === t) return !0;
				if (o(e) && o(t)) return 0 === i(e, t);
				if (a.isDate(e) && a.isDate(t)) return e.getTime() === t.getTime();
				if (a.isRegExp(e) && a.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
				if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
					if (h(e) && h(t) && f(e) === f(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
					if (o(e) !== o(t)) return !1;
					var s = (n = n || {
						actual: [],
						expected: []
					}).actual.indexOf(e);
					return -1 !== s && s === n.expected.indexOf(t) || (n.actual.push(e), n.expected.push(t), function(e, t, r, n) {
						if (null == e || null == t) return !1;
						if (a.isPrimitive(e) || a.isPrimitive(t)) return e === t;
						if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
						var i = _(e),
							o = _(t);
						if (i && !o || !i && o) return !1;
						if (i) return e = u.call(e), t = u.call(t), v(e, t, r);
						var s, c, f = S(e),
							h = S(t);
						if (f.length !== h.length) return !1;
						for (f.sort(), h.sort(), c = f.length - 1; c >= 0; c--)
							if (f[c] !== h[c]) return !1;
						for (c = f.length - 1; c >= 0; c--)
							if (s = f[c], !v(e[s], t[s], r, n)) return !1;
						return !0
					}(e, t, r, n))
				}
				return r ? e === t : e == t
			}

			function _(e) {
				return "[object Arguments]" == Object.prototype.toString.call(e)
			}

			function w(e, t) {
				if (!e || !t) return !1;
				if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
				try {
					if (e instanceof t) return !0
				} catch (e) {}
				return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
			}

			function M(e, t, r, n) {
				var i;
				if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
				"string" == typeof r && (n = r, r = null), i = function(e) {
					var t;
					try {
						e()
					} catch (e) {
						t = e
					}
					return t
				}(t), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), e && !i && m(i, r, "Missing expected exception" + n);
				var o = "string" == typeof n,
					s = !e && i && !r;
				if ((!e && a.isError(i) && o && w(i, r) || s) && m(i, r, "Got unwanted exception" + n), e && i && r && !w(i, r) || !e && i) throw i
			}
			l.AssertionError = function(e) {
				this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = function(e) {
					return b(g(e.actual), 128) + " " + e.operator + " " + b(g(e.expected), 128)
				}(this), this.generatedMessage = !0);
				var t = e.stackStartFunction || m;
				if (Error.captureStackTrace) Error.captureStackTrace(this, t);
				else {
					var r = new Error;
					if (r.stack) {
						var n = r.stack,
							i = p(t),
							o = n.indexOf("\n" + i);
						if (o >= 0) {
							var a = n.indexOf("\n", o + 1);
							n = n.substring(a + 1)
						}
						this.stack = n
					}
				}
			}, a.inherits(l.AssertionError, Error), l.fail = m, l.ok = y, l.equal = function(e, t, r) {
				e != t && m(e, t, r, "==", l.equal)
			}, l.notEqual = function(e, t, r) {
				e == t && m(e, t, r, "!=", l.notEqual)
			}, l.deepEqual = function(e, t, r) {
				v(e, t, !1) || m(e, t, r, "deepEqual", l.deepEqual)
			}, l.deepStrictEqual = function(e, t, r) {
				v(e, t, !0) || m(e, t, r, "deepStrictEqual", l.deepStrictEqual)
			}, l.notDeepEqual = function(e, t, r) {
				v(e, t, !1) && m(e, t, r, "notDeepEqual", l.notDeepEqual)
			}, l.notDeepStrictEqual = function e(t, r, n) {
				v(t, r, !0) && m(t, r, n, "notDeepStrictEqual", e)
			}, l.strictEqual = function(e, t, r) {
				e !== t && m(e, t, r, "===", l.strictEqual)
			}, l.notStrictEqual = function(e, t, r) {
				e === t && m(e, t, r, "!==", l.notStrictEqual)
			}, l.throws = function(e, t, r) {
				M(!0, e, t, r)
			}, l.doesNotThrow = function(e, t, r) {
				M(!1, e, t, r)
			}, l.ifError = function(e) {
				if (e) throw e
			}, l.strict = n((function e(t, r) {
				t || m(t, !0, r, "==", e)
			}), l, {
				equal: l.strictEqual,
				deepEqual: l.deepStrictEqual,
				notEqual: l.notStrictEqual,
				notDeepEqual: l.notDeepStrictEqual
			}), l.strict.strict = l.strict;
			var S = Object.keys || function(e) {
				var t = [];
				for (var r in e) s.call(e, r) && t.push(r);
				return t
			}
		}).call(this, r(6))
	}, function(e, t, r) {
		"use strict";
		var n = r(28).codes.ERR_STREAM_PREMATURE_CLOSE;

		function i() {}
		e.exports = function e(t, r, o) {
			if ("function" == typeof r) return e(t, null, r);
			r || (r = {}), o = function(e) {
				var t = !1;
				return function() {
					if (!t) {
						t = !0;
						for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
						e.apply(this, n)
					}
				}
			}(o || i);
			var a = r.readable || !1 !== r.readable && t.readable,
				s = r.writable || !1 !== r.writable && t.writable,
				u = function() {
					t.writable || f()
				},
				c = t._writableState && t._writableState.finished,
				f = function() {
					s = !1, c = !0, a || o.call(t)
				},
				h = t._readableState && t._readableState.endEmitted,
				l = function() {
					a = !1, h = !0, s || o.call(t)
				},
				d = function(e) {
					o.call(t, e)
				},
				p = function() {
					var e;
					return a && !h ? (t._readableState && t._readableState.ended || (e = new n), o.call(t, e)) : s && !c ? (t._writableState && t._writableState.ended || (e = new n), o.call(t, e)) : void 0
				},
				b = function() {
					t.req.on("finish", f)
				};
			return ! function(e) {
					return e.setHeader && "function" == typeof e.abort
				}(t) ? s && !t._writableState && (t.on("end", u), t.on("close", u)) : (t.on("complete", f), t.on("abort", p), t.req ? b() : t.on("request", b)), t.on("end", l), t.on("finish", f), !1 !== r.error && t.on("error", d), t.on("close", p),
				function() {
					t.removeListener("complete", f), t.removeListener("abort", p), t.removeListener("request", b), t.req && t.req.removeListener("finish", f), t.removeListener("end", u), t.removeListener("close", u), t.removeListener("finish", f), t.removeListener("end", l), t.removeListener("error", d), t.removeListener("close", p)
				}
		}
	}, function(e, t, r) {
		var n = r(140),
			i = r(299),
			o = r(300),
			a = n ? n.toStringTag : void 0;
		e.exports = function(e) {
			return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e)
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			return function() {
				if (null !== e) {
					var t = e;
					e = null, t.apply(this, arguments)
				}
			}
		}, e.exports = t.default
	}, function(e, t) {
		e.exports = function(e) {
			return null != e && "object" == typeof e
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			return function() {
				if (null === e) throw new Error("Callback was already called.");
				var t = e;
				e = null, t.apply(this, arguments)
			}
		}, e.exports = t.default
	}, function(e, t, r) {
		const n = r(331),
			i = r(44);
		e.exports = function(e) {
			return i({
				id: n(),
				jsonrpc: "2.0",
				params: []
			}, e)
		}
	}, function(e, t, r) {
		const n = r(49);
		e.exports = class extends n {
			constructor(e) {
				if (super(), !e) throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");
				this._constructorFn = e
			}
			setEngine(e) {
				if (this.middleware) throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");
				const t = e._blockTracker,
					r = this._constructorFn({
						engine: e,
						provider: e,
						blockTracker: t
					});
				if (!r) throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");
				if ("function" != typeof r) throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");
				this.middleware = r
			}
			handleRequest(e, t, r) {
				const n = {
					id: e.id
				};
				this.middleware(e, n, (function(e) {
					t((t, r, i) => {
						t ? (delete n.result, n.error = {
							message: t.message || t
						}) : n.result = r, e ? e(i) : i()
					})
				}), (function(e) {
					if (e) return r(e);
					r(null, n.result)
				}))
			}
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const n = r(12);

		function i(e, t, r) {
			try {
				Reflect.apply(e, t, r)
			} catch (e) {
				setTimeout(() => {
					throw e
				})
			}
		}
		class o extends n.EventEmitter {
			emit(e, ...t) {
				let r = "error" === e;
				const n = this._events;
				if (void 0 !== n) r = r && void 0 === n.error;
				else if (!r) return !1;
				if (r) {
					let e;
					if (t.length > 0 && ([e] = t), e instanceof Error) throw e;
					const r = new Error("Unhandled error." + (e ? ` (${e.message})` : ""));
					throw r.context = e, r
				}
				const o = n[e];
				if (void 0 === o) return !1;
				if ("function" == typeof o) i(o, this, t);
				else {
					const e = o.length,
						r = function(e) {
							const t = e.length,
								r = new Array(t);
							for (let n = 0; n < t; n += 1) r[n] = e[n];
							return r
						}(o);
					for (let n = 0; n < e; n += 1) i(r[n], this, t)
				}
				return !0
			}
		}
		t.default = o
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.EthereumProviderError = t.EthereumRpcError = void 0;
		const n = r(342);
		class i extends Error {
			constructor(e, t, r) {
				if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
				if (!t || "string" != typeof t) throw new Error('"message" must be a nonempty string.');
				super(t), this.code = e, void 0 !== r && (this.data = r)
			}
			serialize() {
				const e = {
					code: this.code,
					message: this.message
				};
				return void 0 !== this.data && (e.data = this.data), this.stack && (e.stack = this.stack), e
			}
			toString() {
				return n.default(this.serialize(), o, 2)
			}
		}
		t.EthereumRpcError = i;

		function o(e, t) {
			if ("[Circular]" !== t) return t
		}
		t.EthereumProviderError = class extends i {
			constructor(e, t, r) {
				if (! function(e) {
						return Number.isInteger(e) && e >= 1e3 && e <= 4999
					}(e)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
				super(e, t, r)
			}
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.errorValues = t.errorCodes = void 0, t.errorCodes = {
			rpc: {
				invalidInput: -32e3,
				resourceNotFound: -32001,
				resourceUnavailable: -32002,
				transactionRejected: -32003,
				methodNotSupported: -32004,
				limitExceeded: -32005,
				parse: -32700,
				invalidRequest: -32600,
				methodNotFound: -32601,
				invalidParams: -32602,
				internal: -32603
			},
			provider: {
				userRejectedRequest: 4001,
				unauthorized: 4100,
				unsupportedMethod: 4200,
				disconnected: 4900,
				chainDisconnected: 4901
			}
		}, t.errorValues = {
			"-32700": {
				standard: "JSON RPC 2.0",
				message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
			},
			"-32600": {
				standard: "JSON RPC 2.0",
				message: "The JSON sent is not a valid Request object."
			},
			"-32601": {
				standard: "JSON RPC 2.0",
				message: "The method does not exist / is not available."
			},
			"-32602": {
				standard: "JSON RPC 2.0",
				message: "Invalid method parameter(s)."
			},
			"-32603": {
				standard: "JSON RPC 2.0",
				message: "Internal JSON-RPC error."
			},
			"-32000": {
				standard: "EIP-1474",
				message: "Invalid input."
			},
			"-32001": {
				standard: "EIP-1474",
				message: "Resource not found."
			},
			"-32002": {
				standard: "EIP-1474",
				message: "Resource unavailable."
			},
			"-32003": {
				standard: "EIP-1474",
				message: "Transaction rejected."
			},
			"-32004": {
				standard: "EIP-1474",
				message: "Method not supported."
			},
			"-32005": {
				standard: "EIP-1474",
				message: "Request limit exceeded."
			},
			4001: {
				standard: "EIP-1193",
				message: "User rejected the request."
			},
			4100: {
				standard: "EIP-1193",
				message: "The requested account and/or method has not been authorized by the user."
			},
			4200: {
				standard: "EIP-1193",
				message: "The requested method is not supported by this Ethereum provider."
			},
			4900: {
				standard: "EIP-1193",
				message: "The provider is disconnected from all chains."
			},
			4901: {
				standard: "EIP-1193",
				message: "The provider is disconnected from the specified chain."
			}
		}
	}, function(e, t, r) {
		const n = r(69).default;
		e.exports = class extends n {
			constructor() {
				super(), this.updates = []
			}
			async initialize() {}
			async update() {
				throw new Error("BaseFilter - no update method specified")
			}
			addResults(e) {
				this.updates = this.updates.concat(e), e.forEach(e => this.emit("update", e))
			}
			addInitialResults(e) {}
			getChangesAndClear() {
				const e = this.updates;
				return this.updates = [], e
			}
		}
	}, function(e, t) {
		function r(e) {
			return null == e ? e : Number.parseInt(e, 16)
		}

		function n(e) {
			if (null == e) return e;
			return "0x" + e.toString(16)
		}
		e.exports = async function({
			provider: e,
			fromBlock: t,
			toBlock: i
		}) {
			t || (t = i);
			const o = r(t),
				a = r(i),
				s = Array(a - o + 1).fill().map((e, t) => o + t).map(n);
			return await Promise.all(s.map(t => function(e, t, r) {
				return new Promise((n, i) => {
					e.sendAsync({
						id: 1,
						jsonrpc: "2.0",
						method: t,
						params: r
					}, (e, t) => {
						if (e) return i(e);
						n(t.result)
					})
				})
			}(e, "eth_getBlockByNumber", [t, !1])))
		}
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.ecdhUnsafe = t.ecdh = t.recover = t.verify = t.sign = t.signatureImportLax = t.signatureImport = t.signatureExport = t.signatureNormalize = t.publicKeyCombine = t.publicKeyTweakMul = t.publicKeyTweakAdd = t.publicKeyVerify = t.publicKeyConvert = t.publicKeyCreate = t.privateKeyTweakMul = t.privateKeyTweakAdd = t.privateKeyModInverse = t.privateKeyNegate = t.privateKeyImport = t.privateKeyExport = t.privateKeyVerify = void 0;
			var n = r(118),
				i = r(359),
				o = r(360);
			t.privateKeyVerify = function(e) {
				return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e))
			}, t.privateKeyExport = function(e, t) {
				if (32 !== e.length) throw new RangeError("private key length is invalid");
				var r = i.privateKeyExport(e, t);
				return o.privateKeyExport(e, r, t)
			}, t.privateKeyImport = function(e) {
				if (null !== (e = o.privateKeyImport(e)) && 32 === e.length && t.privateKeyVerify(e)) return e;
				throw new Error("couldn't import from DER format")
			}, t.privateKeyNegate = function(t) {
				return e.from(n.privateKeyNegate(Uint8Array.from(t)))
			}, t.privateKeyModInverse = function(t) {
				if (32 !== t.length) throw new Error("private key length is invalid");
				return e.from(i.privateKeyModInverse(Uint8Array.from(t)))
			}, t.privateKeyTweakAdd = function(t, r) {
				return e.from(n.privateKeyTweakAdd(Uint8Array.from(t), r))
			}, t.privateKeyTweakMul = function(t, r) {
				return e.from(n.privateKeyTweakMul(Uint8Array.from(t), Uint8Array.from(r)))
			}, t.publicKeyCreate = function(t, r) {
				return e.from(n.publicKeyCreate(Uint8Array.from(t), r))
			}, t.publicKeyConvert = function(t, r) {
				return e.from(n.publicKeyConvert(Uint8Array.from(t), r))
			}, t.publicKeyVerify = function(e) {
				return (33 === e.length || 65 === e.length) && n.publicKeyVerify(Uint8Array.from(e))
			}, t.publicKeyTweakAdd = function(t, r, i) {
				return e.from(n.publicKeyTweakAdd(Uint8Array.from(t), Uint8Array.from(r), i))
			}, t.publicKeyTweakMul = function(t, r, i) {
				return e.from(n.publicKeyTweakMul(Uint8Array.from(t), Uint8Array.from(r), i))
			}, t.publicKeyCombine = function(t, r) {
				var i = [];
				return t.forEach((function(e) {
					i.push(Uint8Array.from(e))
				})), e.from(n.publicKeyCombine(i, r))
			}, t.signatureNormalize = function(t) {
				return e.from(n.signatureNormalize(Uint8Array.from(t)))
			}, t.signatureExport = function(t) {
				return e.from(n.signatureExport(Uint8Array.from(t)))
			}, t.signatureImport = function(t) {
				return e.from(n.signatureImport(Uint8Array.from(t)))
			}, t.signatureImportLax = function(e) {
				if (0 === e.length) throw new RangeError("signature length is invalid");
				var t = o.signatureImportLax(e);
				if (null === t) throw new Error("couldn't parse DER signature");
				return i.signatureImport(t)
			}, t.sign = function(t, r, i) {
				if (null === i) throw new TypeError("options should be an Object");
				var o = void 0;
				if (i) {
					if (o = {}, null === i.data) throw new TypeError("options.data should be a Buffer");
					if (i.data) {
						if (32 != i.data.length) throw new RangeError("options.data length is invalid");
						o.data = new Uint8Array(i.data)
					}
					if (null === i.noncefn) throw new TypeError("options.noncefn should be a Function");
					i.noncefn && (o.noncefn = function(t, r, n, o, a) {
						var s = null != n ? e.from(n) : null,
							u = null != o ? e.from(o) : null,
							c = e.from("");
						return i.noncefn && (c = i.noncefn(e.from(t), e.from(r), s, u, a)), new Uint8Array(c)
					})
				}
				var a = n.ecdsaSign(Uint8Array.from(t), Uint8Array.from(r), o);
				return {
					signature: e.from(a.signature),
					recovery: a.recid
				}
			}, t.verify = function(e, t, r) {
				return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r)
			}, t.recover = function(t, r, i, o) {
				return e.from(n.ecdsaRecover(Uint8Array.from(r), i, Uint8Array.from(t), o))
			}, t.ecdh = function(t, r) {
				return e.from(n.ecdh(Uint8Array.from(t), Uint8Array.from(r), {}))
			}, t.ecdhUnsafe = function(t, r, n) {
				if (33 !== t.length && 65 !== t.length) throw new RangeError("public key length is invalid");
				if (32 !== r.length) throw new RangeError("private key length is invalid");
				return e.from(i.ecdhUnsafe(Uint8Array.from(t), Uint8Array.from(r), n))
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.rlphash = t.ripemd160 = t.sha256 = t.keccak256 = t.keccak = void 0;
			var n = r(110),
				i = n.keccak224,
				o = n.keccak384,
				a = n.keccak256,
				s = n.keccak512,
				u = r(126),
				c = r(31),
				f = r(46),
				h = r(40);
			t.keccak = function(t, r) {
				switch (void 0 === r && (r = 256), t = "string" != typeof t || c.isHexString(t) ? h.toBuffer(t) : e.from(t, "utf8"), r || (r = 256), r) {
					case 224:
						return i(t);
					case 256:
						return a(t);
					case 384:
						return o(t);
					case 512:
						return s(t);
					default:
						throw new Error("Invald algorithm: keccak" + r)
				}
			}, t.keccak256 = function(e) {
				return t.keccak(e)
			}, t.sha256 = function(e) {
				return e = h.toBuffer(e), u("sha256").update(e).digest()
			}, t.ripemd160 = function(e, t) {
				e = h.toBuffer(e);
				var r = u("rmd160").update(e).digest();
				return !0 === t ? h.setLength(r, 32) : r
			}, t.rlphash = function(e) {
				return t.keccak(f.encode(e))
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		r.r(t);
		var n = r(157),
			i = r(10),
			o = r(158);

		function a(e) {
			return Object(o.a)(e)
		}

		function s() {
			const e = a();
			return e && e.os ? e.os : void 0
		}

		function u() {
			const e = s();
			return !!e && e.toLowerCase().includes("android")
		}

		function c() {
			const e = s();
			return !!e && (e.toLowerCase().includes("ios") || e.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
		}

		function f() {
			return !!s() && (u() || c())
		}

		function h() {
			const e = a();
			return !(!e || !e.name) && "node" === e.name.toLowerCase()
		}

		function l() {
			return !h() && !!y()
		}
		const d = i.getFromWindow,
			p = i.getFromWindowOrThrow,
			b = i.getDocumentOrThrow,
			g = i.getDocument,
			m = i.getNavigatorOrThrow,
			y = i.getNavigator,
			v = i.getLocationOrThrow,
			_ = i.getLocation,
			w = i.getCryptoOrThrow,
			M = i.getCrypto,
			S = i.getLocalStorageOrThrow,
			x = i.getLocalStorage;

		function E() {
			return n.getWindowMetadata()
		}
		const k = function(e) {
				if ("string" != typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
				try {
					return JSON.parse(e)
				} catch (t) {
					return e
				}
			},
			A = function(e) {
				return "string" == typeof e ? e : JSON.stringify(e)
			};

		function R(e, t) {
			const r = A(t),
				n = x();
			n && n.setItem(e, r)
		}

		function T(e) {
			let t = null,
				r = null;
			const n = x();
			return n && (r = n.getItem(e)), t = r ? k(r) : r, t
		}

		function C(e) {
			const t = x();
			t && t.removeItem(e)
		}

		function O(e, t) {
			const r = encodeURIComponent(e);
			return t.universalLink ? `${t.universalLink}/wc?uri=${r}` : t.deepLink ? `${t.deepLink}${t.deepLink.endsWith(":")?"//":"/"}wc?uri=${r}` : ""
		}

		function P(e) {
			const t = e.href.split("?")[0];
			R("WALLETCONNECT_DEEPLINK_CHOICE", Object.assign(Object.assign({}, e), {
				href: t
			}))
		}

		function I(e, t) {
			return e.filter(e => e.name.toLowerCase().includes(t.toLowerCase()))[0]
		}

		function B(e, t) {
			let r = e;
			return t && (r = t.map(t => I(e, t)).filter(Boolean)), r
		}
		const L = "https://registry.walletconnect.org";

		function j() {
			return L + "/data/wallets.json"
		}

		function N() {
			return L + "/data/dapps.json"
		}

		function U(e) {
			return L + "/logo/sm/" + e + ".jpeg"
		}

		function q(e, t = "mobile") {
			return {
				name: e.name || "",
				shortName: e.metadata.shortName || "",
				color: e.metadata.colors.primary || "",
				logo: e.id ? U(e.id) : "",
				universalLink: e[t].universal || "",
				deepLink: e[t].native || ""
			}
		}

		function D(e, t = "mobile") {
			return Object.values(e).filter(e => !!e[t].universal || !!e[t].native).map(e => q(e, t))
		}
		r.d(t, "detectEnv", (function() {
			return a
		})), r.d(t, "detectOS", (function() {
			return s
		})), r.d(t, "isAndroid", (function() {
			return u
		})), r.d(t, "isIOS", (function() {
			return c
		})), r.d(t, "isMobile", (function() {
			return f
		})), r.d(t, "isNode", (function() {
			return h
		})), r.d(t, "isBrowser", (function() {
			return l
		})), r.d(t, "getFromWindow", (function() {
			return d
		})), r.d(t, "getFromWindowOrThrow", (function() {
			return p
		})), r.d(t, "getDocumentOrThrow", (function() {
			return b
		})), r.d(t, "getDocument", (function() {
			return g
		})), r.d(t, "getNavigatorOrThrow", (function() {
			return m
		})), r.d(t, "getNavigator", (function() {
			return y
		})), r.d(t, "getLocationOrThrow", (function() {
			return v
		})), r.d(t, "getLocation", (function() {
			return _
		})), r.d(t, "getCryptoOrThrow", (function() {
			return w
		})), r.d(t, "getCrypto", (function() {
			return M
		})), r.d(t, "getLocalStorageOrThrow", (function() {
			return S
		})), r.d(t, "getLocalStorage", (function() {
			return x
		})), r.d(t, "getClientMeta", (function() {
			return E
		})), r.d(t, "safeJsonParse", (function() {
			return k
		})), r.d(t, "safeJsonStringify", (function() {
			return A
		})), r.d(t, "setLocal", (function() {
			return R
		})), r.d(t, "getLocal", (function() {
			return T
		})), r.d(t, "removeLocal", (function() {
			return C
		})), r.d(t, "mobileLinkChoiceKey", (function() {
			return "WALLETCONNECT_DEEPLINK_CHOICE"
		})), r.d(t, "formatIOSMobile", (function() {
			return O
		})), r.d(t, "saveMobileLinkInfo", (function() {
			return P
		})), r.d(t, "getMobileRegistryEntry", (function() {
			return I
		})), r.d(t, "getMobileLinkRegistry", (function() {
			return B
		})), r.d(t, "getWalletRegistryUrl", (function() {
			return j
		})), r.d(t, "getDappRegistryUrl", (function() {
			return N
		})), r.d(t, "getAppLogoUrl", (function() {
			return U
		})), r.d(t, "formatMobileRegistryEntry", (function() {
			return q
		})), r.d(t, "formatMobileRegistry", (function() {
			return D
		}))
	}, function(e, t, r) {
		"use strict";
		const n = r(174),
			i = r(175),
			o = r(176);

		function a(e) {
			if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
		}

		function s(e, t) {
			return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
		}

		function u(e, t) {
			return t.decode ? i(e) : e
		}

		function c(e) {
			const t = e.indexOf("#");
			return -1 !== t && (e = e.slice(0, t)), e
		}

		function f(e) {
			const t = (e = c(e)).indexOf("?");
			return -1 === t ? "" : e.slice(t + 1)
		}

		function h(e, t) {
			return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
		}

		function l(e, t) {
			a((t = Object.assign({
				decode: !0,
				sort: !0,
				arrayFormat: "none",
				arrayFormatSeparator: ",",
				parseNumbers: !1,
				parseBooleans: !1
			}, t)).arrayFormatSeparator);
			const r = function(e) {
					let t;
					switch (e.arrayFormat) {
						case "index":
							return (e, r, n) => {
								t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
							};
						case "bracket":
							return (e, r, n) => {
								t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
							};
						case "comma":
						case "separator":
							return (t, r, n) => {
								const i = "string" == typeof r && r.split("").indexOf(e.arrayFormatSeparator) > -1 ? r.split(e.arrayFormatSeparator).map(t => u(t, e)) : null === r ? r : u(r, e);
								n[t] = i
							};
						default:
							return (e, t, r) => {
								void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
							}
					}
				}(t),
				n = Object.create(null);
			if ("string" != typeof e) return n;
			if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
			for (const i of e.split("&")) {
				let [e, a] = o(t.decode ? i.replace(/\+/g, " ") : i, "=");
				a = void 0 === a ? null : ["comma", "separator"].includes(t.arrayFormat) ? a : u(a, t), r(u(e, t), a, n)
			}
			for (const e of Object.keys(n)) {
				const r = n[e];
				if ("object" == typeof r && null !== r)
					for (const e of Object.keys(r)) r[e] = h(r[e], t);
				else n[e] = h(r, t)
			}
			return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce((e, t) => {
				const r = n[t];
				return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
					return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
				}(r) : e[t] = r, e
			}, Object.create(null))
		}
		t.extract = f, t.parse = l, t.stringify = (e, t) => {
			if (!e) return "";
			a((t = Object.assign({
				encode: !0,
				strict: !0,
				arrayFormat: "none",
				arrayFormatSeparator: ","
			}, t)).arrayFormatSeparator);
			const r = r => t.skipNull && null == e[r] || t.skipEmptyString && "" === e[r],
				n = function(e) {
					switch (e.arrayFormat) {
						case "index":
							return t => (r, n) => {
								const i = r.length;
								return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [s(t, e), "[", i, "]"].join("")] : [...r, [s(t, e), "[", s(i, e), "]=", s(n, e)].join("")]
							};
						case "bracket":
							return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [s(t, e), "[]"].join("")] : [...r, [s(t, e), "[]=", s(n, e)].join("")];
						case "comma":
						case "separator":
							return t => (r, n) => null == n || 0 === n.length ? r : 0 === r.length ? [
								[s(t, e), "=", s(n, e)].join("")
							] : [
								[r, s(n, e)].join(e.arrayFormatSeparator)
							];
						default:
							return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, s(t, e)] : [...r, [s(t, e), "=", s(n, e)].join("")]
					}
				}(t),
				i = {};
			for (const t of Object.keys(e)) r(t) || (i[t] = e[t]);
			const o = Object.keys(i);
			return !1 !== t.sort && o.sort(t.sort), o.map(r => {
				const i = e[r];
				return void 0 === i ? "" : null === i ? s(r, t) : Array.isArray(i) ? i.reduce(n(r), []).join("&") : s(r, t) + "=" + s(i, t)
			}).filter(e => e.length > 0).join("&")
		}, t.parseUrl = (e, t) => {
			t = Object.assign({
				decode: !0
			}, t);
			const [r, n] = o(e, "#");
			return Object.assign({
				url: r.split("?")[0] || "",
				query: l(f(e), t)
			}, t && t.parseFragmentIdentifier && n ? {
				fragmentIdentifier: u(n, t)
			} : {})
		}, t.stringifyUrl = (e, r) => {
			r = Object.assign({
				encode: !0,
				strict: !0
			}, r);
			const n = c(e.url).split("?")[0] || "",
				i = t.extract(e.url),
				o = t.parse(i, {
					sort: !1
				}),
				a = Object.assign(o, e.query);
			let u = t.stringify(a, r);
			u && (u = "?" + u);
			let f = function(e) {
				let t = "";
				const r = e.indexOf("#");
				return -1 !== r && (t = e.slice(r)), t
			}(e.url);
			return e.fragmentIdentifier && (f = "#" + s(e.fragmentIdentifier, r)), `${n}${u}${f}`
		}
	}, function(e, t) {
		var r = {}.toString;
		e.exports = Array.isArray || function(e) {
			return "[object Array]" == r.call(e)
		}
	}, function(e, t) {
		e.exports = i, i.strict = o, i.loose = a;
		var r = Object.prototype.toString,
			n = {
				"[object Int8Array]": !0,
				"[object Int16Array]": !0,
				"[object Int32Array]": !0,
				"[object Uint8Array]": !0,
				"[object Uint8ClampedArray]": !0,
				"[object Uint16Array]": !0,
				"[object Uint32Array]": !0,
				"[object Float32Array]": !0,
				"[object Float64Array]": !0
			};

		function i(e) {
			return o(e) || a(e)
		}

		function o(e) {
			return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array
		}

		function a(e) {
			return n[r.call(e)]
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(8);
		r.o(n, "payloadId") && r.d(t, "payloadId", (function() {
			return n.payloadId
		}));
		n.isNode
	}, function(e, t, r) {
		"use strict";
		r.d(t, "a", (function() {
			return n
		}));
		r(24), r(7);

		function n() {
			return Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3))
		}
	}, function(e, t, r) {
		"use strict"
	}, function(e, t, r) {
		"use strict";
		r(84)
	}, function(e, t, r) {
		"use strict";
		r(85), r(41), r(86), r(87)
	}, function(e, t) {}, function(e, t, r) {
		"use strict";
		var n = r(41);
		n.a;
		n.a
	}, function(e, t) {}, function(e, t, r) {
		"use strict"
	}, function(e, t, r) {
		"use strict"
	}, function(e, t, r) {
		"use strict";
		r.d(t, "a", (function() {
			return i
		}));
		var n = r(8);

		function i(e) {
			return n.getBrowerCrypto().getRandomValues(new Uint8Array(e))
		}
	}, function(e, t, r) {
		"use strict";
		r.d(t, "b", (function() {
			return i
		})), r.d(t, "a", (function() {
			return o
		}));
		var n = r(14);

		function i(e, t, r) {
			return Object(n.b)(e, t, r)
		}

		function o(e, t, r) {
			return Object(n.a)(e, t, r)
		}
	}, function(e, t, r) {
		"use strict";
		r.d(t, "a", (function() {
			return i
		}));
		var n = r(14);
		r(42);
		async function i(e, t) {
			return await Object(n.c)(e, t)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(8);
		r.o(n, "isConstantTime") && r.d(t, "isConstantTime", (function() {
			return n.isConstantTime
		}))
	}, function(e, t, r) {
		"use strict"
	}, function(e, t) {}, function(e, t, r) {
		"use strict";

		function n(e, t) {
			if (e.length !== t.length) return !1;
			let r = 0;
			for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
			return 0 === r
		}
		r.d(t, "a", (function() {
			return n
		}))
	}, function(e, t, r) {
		"use strict";
		r(14)
	}, function(e, t, r) {
		var n = r(51),
			i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
			o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
		t.getBlocksCount = function(e, t) {
			switch (t) {
				case n.L:
					return i[4 * (e - 1) + 0];
				case n.M:
					return i[4 * (e - 1) + 1];
				case n.Q:
					return i[4 * (e - 1) + 2];
				case n.H:
					return i[4 * (e - 1) + 3];
				default:
					return
			}
		}, t.getTotalCodewordsCount = function(e, t) {
			switch (t) {
				case n.L:
					return o[4 * (e - 1) + 0];
				case n.M:
					return o[4 * (e - 1) + 1];
				case n.Q:
					return o[4 * (e - 1) + 2];
				case n.H:
					return o[4 * (e - 1) + 3];
				default:
					return
			}
		}
	}, function(e, t) {
		t.isValid = function(e) {
			return !isNaN(e) && e >= 1 && e <= 40
		}
	}, function(e, t) {
		var r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
			n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
		t.KANJI = new RegExp(r, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(n, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
		var i = new RegExp("^" + r + "$"),
			o = new RegExp("^[0-9]+$"),
			a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
		t.testKanji = function(e) {
			return i.test(e)
		}, t.testNumeric = function(e) {
			return o.test(e)
		}, t.testAlphanumeric = function(e) {
			return a.test(e)
		}
	}, function(e, t) {
		function r(e) {
			if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
			var t = e.slice().replace("#", "").split("");
			if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
			3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map((function(e) {
				return [e, e]
			})))), 6 === t.length && t.push("F", "F");
			var r = parseInt(t.join(""), 16);
			return {
				r: r >> 24 & 255,
				g: r >> 16 & 255,
				b: r >> 8 & 255,
				a: 255 & r,
				hex: "#" + t.slice(0, 6).join("")
			}
		}
		t.getOptions = function(e) {
			e || (e = {}), e.color || (e.color = {});
			var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
				n = e.width && e.width >= 21 ? e.width : void 0,
				i = e.scale || 4;
			return {
				width: n,
				scale: n ? 4 : i,
				margin: t,
				color: {
					dark: r(e.color.dark || "#000000ff"),
					light: r(e.color.light || "#ffffffff")
				},
				type: e.type,
				rendererOpts: e.rendererOpts || {}
			}
		}, t.getScale = function(e, t) {
			return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
		}, t.getImageWidth = function(e, r) {
			var n = t.getScale(e, r);
			return Math.floor((e + 2 * r.margin) * n)
		}, t.qrToImageData = function(e, r, n) {
			for (var i = r.modules.size, o = r.modules.data, a = t.getScale(i, n), s = Math.floor((i + 2 * n.margin) * a), u = n.margin * a, c = [n.color.light, n.color.dark], f = 0; f < s; f++)
				for (var h = 0; h < s; h++) {
					var l = 4 * (f * s + h),
						d = n.color.light;
					if (f >= u && h >= u && f < s - u && h < s - u) d = c[o[Math.floor((f - u) / a) * i + Math.floor((h - u) / a)] ? 1 : 0];
					e[l++] = d.r, e[l++] = d.g, e[l++] = d.b, e[l] = d.a
				}
		}
	}, function(e, t, r) {
		(function(e) {
			var n = r(204),
				i = r(104),
				o = r(44),
				a = r(212),
				s = r(55),
				u = t;
			u.request = function(t, r) {
				t = "string" == typeof t ? s.parse(t) : o(t);
				var i = -1 === e.location.protocol.search(/^https?:$/) ? "http:" : "",
					a = t.protocol || i,
					u = t.hostname || t.host,
					c = t.port,
					f = t.path || "/";
				u && -1 !== u.indexOf(":") && (u = "[" + u + "]"), t.url = (u ? a + "//" + u : "") + (c ? ":" + c : "") + f, t.method = (t.method || "GET").toUpperCase(), t.headers = t.headers || {};
				var h = new n(t);
				return r && h.on("response", r), h
			}, u.get = function(e, t) {
				var r = u.request(e, t);
				return r.end(), r
			}, u.ClientRequest = n, u.IncomingMessage = i.IncomingMessage, u.Agent = function() {}, u.Agent.defaultMaxSockets = 4, u.globalAgent = new u.Agent, u.STATUS_CODES = a, u.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
		}).call(this, r(6))
	}, function(e, t, r) {
		(function(e) {
			t.fetch = s(e.fetch) && s(e.ReadableStream), t.writableStream = s(e.WritableStream), t.abortController = s(e.AbortController), t.blobConstructor = !1;
			try {
				new Blob([new ArrayBuffer(1)]), t.blobConstructor = !0
			} catch (e) {}
			var r;

			function n() {
				if (void 0 !== r) return r;
				if (e.XMLHttpRequest) {
					r = new e.XMLHttpRequest;
					try {
						r.open("GET", e.XDomainRequest ? "/" : "https://example.com")
					} catch (e) {
						r = null
					}
				} else r = null;
				return r
			}

			function i(e) {
				var t = n();
				if (!t) return !1;
				try {
					return t.responseType = e, t.responseType === e
				} catch (e) {}
				return !1
			}
			var o = void 0 !== e.ArrayBuffer,
				a = o && s(e.ArrayBuffer.prototype.slice);

			function s(e) {
				return "function" == typeof e
			}
			t.arraybuffer = t.fetch || o && i("arraybuffer"), t.msstream = !t.fetch && a && i("ms-stream"), t.mozchunkedarraybuffer = !t.fetch && o && i("moz-chunked-arraybuffer"), t.overrideMimeType = t.fetch || !!n() && s(n().overrideMimeType), t.vbArray = s(e.VBArray), r = null
		}).call(this, r(6))
	}, function(e, t, r) {
		(function(e, n, i) {
			var o = r(103),
				a = r(3),
				s = r(34),
				u = t.readyStates = {
					UNSENT: 0,
					OPENED: 1,
					HEADERS_RECEIVED: 2,
					LOADING: 3,
					DONE: 4
				},
				c = t.IncomingMessage = function(t, r, a, u) {
					var c = this;
					if (s.Readable.call(c), c._mode = a, c.headers = {}, c.rawHeaders = [], c.trailers = {}, c.rawTrailers = [], c.on("end", (function() {
							e.nextTick((function() {
								c.emit("close")
							}))
						})), "fetch" === a) {
						if (c._fetchResponse = r, c.url = r.url, c.statusCode = r.status, c.statusMessage = r.statusText, r.headers.forEach((function(e, t) {
								c.headers[t.toLowerCase()] = e, c.rawHeaders.push(t, e)
							})), o.writableStream) {
							var f = new WritableStream({
								write: function(e) {
									return new Promise((function(t, r) {
										c._destroyed ? r() : c.push(new n(e)) ? t() : c._resumeFetch = t
									}))
								},
								close: function() {
									i.clearTimeout(u), c._destroyed || c.push(null)
								},
								abort: function(e) {
									c._destroyed || c.emit("error", e)
								}
							});
							try {
								return void r.body.pipeTo(f).catch((function(e) {
									i.clearTimeout(u), c._destroyed || c.emit("error", e)
								}))
							} catch (e) {}
						}
						var h = r.body.getReader();
						! function e() {
							h.read().then((function(t) {
								if (!c._destroyed) {
									if (t.done) return i.clearTimeout(u), void c.push(null);
									c.push(new n(t.value)), e()
								}
							})).catch((function(e) {
								i.clearTimeout(u), c._destroyed || c.emit("error", e)
							}))
						}()
					} else {
						if (c._xhr = t, c._pos = 0, c.url = t.responseURL, c.statusCode = t.status, c.statusMessage = t.statusText, t.getAllResponseHeaders().split(/\r?\n/).forEach((function(e) {
								var t = e.match(/^([^:]+):\s*(.*)/);
								if (t) {
									var r = t[1].toLowerCase();
									"set-cookie" === r ? (void 0 === c.headers[r] && (c.headers[r] = []), c.headers[r].push(t[2])) : void 0 !== c.headers[r] ? c.headers[r] += ", " + t[2] : c.headers[r] = t[2], c.rawHeaders.push(t[1], t[2])
								}
							})), c._charset = "x-user-defined", !o.overrideMimeType) {
							var l = c.rawHeaders["mime-type"];
							if (l) {
								var d = l.match(/;\s*charset=([^;])(;|$)/);
								d && (c._charset = d[1].toLowerCase())
							}
							c._charset || (c._charset = "utf-8")
						}
					}
				};
			a(c, s.Readable), c.prototype._read = function() {
				var e = this._resumeFetch;
				e && (this._resumeFetch = null, e())
			}, c.prototype._onXHRProgress = function() {
				var e = this,
					t = e._xhr,
					r = null;
				switch (e._mode) {
					case "text:vbarray":
						if (t.readyState !== u.DONE) break;
						try {
							r = new i.VBArray(t.responseBody).toArray()
						} catch (e) {}
						if (null !== r) {
							e.push(new n(r));
							break
						}
						case "text":
							try {
								r = t.responseText
							} catch (t) {
								e._mode = "text:vbarray";
								break
							}
							if (r.length > e._pos) {
								var o = r.substr(e._pos);
								if ("x-user-defined" === e._charset) {
									for (var a = new n(o.length), s = 0; s < o.length; s++) a[s] = 255 & o.charCodeAt(s);
									e.push(a)
								} else e.push(o, e._charset);
								e._pos = r.length
							}
							break;
						case "arraybuffer":
							if (t.readyState !== u.DONE || !t.response) break;
							r = t.response, e.push(new n(new Uint8Array(r)));
							break;
						case "moz-chunked-arraybuffer":
							if (r = t.response, t.readyState !== u.LOADING || !r) break;
							e.push(new n(new Uint8Array(r)));
							break;
						case "ms-stream":
							if (r = t.response, t.readyState !== u.LOADING) break;
							var c = new i.MSStreamReader;
							c.onprogress = function() {
								c.result.byteLength > e._pos && (e.push(new n(new Uint8Array(c.result.slice(e._pos)))), e._pos = c.result.byteLength)
							}, c.onload = function() {
								e.push(null)
							}, c.readAsArrayBuffer(r)
				}
				e._xhr.readyState === u.DONE && "ms-stream" !== e._mode && e.push(null)
			}
		}).call(this, r(5), r(2).Buffer, r(6))
	}, function(e, t, r) {
		"use strict";
		(function(t, n) {
			var i = r(43);
			e.exports = v;
			var o, a = r(78);
			v.ReadableState = y;
			r(12).EventEmitter;
			var s = function(e, t) {
					return e.listeners(t).length
				},
				u = r(106),
				c = r(52).Buffer,
				f = t.Uint8Array || function() {};
			var h = Object.create(r(35));
			h.inherits = r(3);
			var l = r(205),
				d = void 0;
			d = l && l.debuglog ? l.debuglog("stream") : function() {};
			var p, b = r(206),
				g = r(107);
			h.inherits(v, u);
			var m = ["error", "close", "destroy", "pause", "resume"];

			function y(e, t) {
				e = e || {};
				var n = t instanceof(o = o || r(19));
				this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
				var i = e.highWaterMark,
					a = e.readableHighWaterMark,
					s = this.objectMode ? 16 : 16384;
				this.highWaterMark = i || 0 === i ? i : n && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new b, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (p || (p = r(20).StringDecoder), this.decoder = new p(e.encoding), this.encoding = e.encoding)
			}

			function v(e) {
				if (o = o || r(19), !(this instanceof v)) return new v(e);
				this._readableState = new y(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), u.call(this)
			}

			function _(e, t, r, n, i) {
				var o, a = e._readableState;
				null === t ? (a.reading = !1, function(e, t) {
					if (t.ended) return;
					if (t.decoder) {
						var r = t.decoder.end();
						r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
					}
					t.ended = !0, S(e)
				}(e, a)) : (i || (o = function(e, t) {
					var r;
					n = t, c.isBuffer(n) || n instanceof f || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
					var n;
					return r
				}(a, t)), o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function(e) {
					return c.from(e)
				}(t)), n ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : w(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? w(e, a, t, !1) : E(e, a)) : w(e, a, t, !1))) : n || (a.reading = !1));
				return function(e) {
					return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
				}(a)
			}

			function w(e, t, r, n) {
				t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && S(e)), E(e, t)
			}
			Object.defineProperty(v.prototype, "destroyed", {
				get: function() {
					return void 0 !== this._readableState && this._readableState.destroyed
				},
				set: function(e) {
					this._readableState && (this._readableState.destroyed = e)
				}
			}), v.prototype.destroy = g.destroy, v.prototype._undestroy = g.undestroy, v.prototype._destroy = function(e, t) {
				this.push(null), t(e)
			}, v.prototype.push = function(e, t) {
				var r, n = this._readableState;
				return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = c.from(e, t), t = ""), r = !0), _(this, e, t, !1, r)
			}, v.prototype.unshift = function(e) {
				return _(this, e, null, !0, !1)
			}, v.prototype.isPaused = function() {
				return !1 === this._readableState.flowing
			}, v.prototype.setEncoding = function(e) {
				return p || (p = r(20).StringDecoder), this._readableState.decoder = new p(e), this._readableState.encoding = e, this
			};

			function M(e, t) {
				return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
					return e >= 8388608 ? e = 8388608 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
				}(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
			}

			function S(e) {
				var t = e._readableState;
				t.needReadable = !1, t.emittedReadable || (d("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(x, e) : x(e))
			}

			function x(e) {
				d("emit readable"), e.emit("readable"), T(e)
			}

			function E(e, t) {
				t.readingMore || (t.readingMore = !0, i.nextTick(k, e, t))
			}

			function k(e, t) {
				for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (d("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
				t.readingMore = !1
			}

			function A(e) {
				d("readable nexttick read 0"), e.read(0)
			}

			function R(e, t) {
				t.reading || (d("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), T(e), t.flowing && !t.reading && e.read(0)
			}

			function T(e) {
				var t = e._readableState;
				for (d("flow", t.flowing); t.flowing && null !== e.read(););
			}

			function C(e, t) {
				return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = function(e, t, r) {
					var n;
					e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function(e, t) {
						var r = t.head,
							n = 1,
							i = r.data;
						e -= i.length;
						for (; r = r.next;) {
							var o = r.data,
								a = e > o.length ? o.length : e;
							if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) {
								a === o.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a));
								break
							}++n
						}
						return t.length -= n, i
					}(e, t) : function(e, t) {
						var r = c.allocUnsafe(e),
							n = t.head,
							i = 1;
						n.data.copy(r), e -= n.data.length;
						for (; n = n.next;) {
							var o = n.data,
								a = e > o.length ? o.length : e;
							if (o.copy(r, r.length - e, 0, a), 0 === (e -= a)) {
								a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
								break
							}++i
						}
						return t.length -= i, r
					}(e, t);
					return n
				}(e, t.buffer, t.decoder), r);
				var r
			}

			function O(e) {
				var t = e._readableState;
				if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
				t.endEmitted || (t.ended = !0, i.nextTick(P, t, e))
			}

			function P(e, t) {
				e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
			}

			function I(e, t) {
				for (var r = 0, n = e.length; r < n; r++)
					if (e[r] === t) return r;
				return -1
			}
			v.prototype.read = function(e) {
				d("read", e), e = parseInt(e, 10);
				var t = this._readableState,
					r = e;
				if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return d("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? O(this) : S(this), null;
				if (0 === (e = M(e, t)) && t.ended) return 0 === t.length && O(this), null;
				var n, i = t.needReadable;
				return d("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && d("length less than watermark", i = !0), t.ended || t.reading ? d("reading or ended", i = !1) : i && (d("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = M(r, t))), null === (n = e > 0 ? C(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && O(this)), null !== n && this.emit("data", n), n
			}, v.prototype._read = function(e) {
				this.emit("error", new Error("_read() is not implemented"))
			}, v.prototype.pipe = function(e, t) {
				var r = this,
					o = this._readableState;
				switch (o.pipesCount) {
					case 0:
						o.pipes = e;
						break;
					case 1:
						o.pipes = [o.pipes, e];
						break;
					default:
						o.pipes.push(e)
				}
				o.pipesCount += 1, d("pipe count=%d opts=%j", o.pipesCount, t);
				var u = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? f : v;

				function c(t, n) {
					d("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, d("cleanup"), e.removeListener("close", m), e.removeListener("finish", y), e.removeListener("drain", h), e.removeListener("error", g), e.removeListener("unpipe", c), r.removeListener("end", f), r.removeListener("end", v), r.removeListener("data", b), l = !0, !o.awaitDrain || e._writableState && !e._writableState.needDrain || h())
				}

				function f() {
					d("onend"), e.end()
				}
				o.endEmitted ? i.nextTick(u) : r.once("end", u), e.on("unpipe", c);
				var h = function(e) {
					return function() {
						var t = e._readableState;
						d("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, T(e))
					}
				}(r);
				e.on("drain", h);
				var l = !1;
				var p = !1;

				function b(t) {
					d("ondata"), p = !1, !1 !== e.write(t) || p || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== I(o.pipes, e)) && !l && (d("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, p = !0), r.pause())
				}

				function g(t) {
					d("onerror", t), v(), e.removeListener("error", g), 0 === s(e, "error") && e.emit("error", t)
				}

				function m() {
					e.removeListener("finish", y), v()
				}

				function y() {
					d("onfinish"), e.removeListener("close", m), v()
				}

				function v() {
					d("unpipe"), r.unpipe(e)
				}
				return r.on("data", b),
					function(e, t, r) {
						if ("function" == typeof e.prependListener) return e.prependListener(t, r);
						e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
					}(e, "error", g), e.once("close", m), e.once("finish", y), e.emit("pipe", r), o.flowing || (d("pipe resume"), r.resume()), e
			}, v.prototype.unpipe = function(e) {
				var t = this._readableState,
					r = {
						hasUnpiped: !1
					};
				if (0 === t.pipesCount) return this;
				if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
				if (!e) {
					var n = t.pipes,
						i = t.pipesCount;
					t.pipes = null, t.pipesCount = 0, t.flowing = !1;
					for (var o = 0; o < i; o++) n[o].emit("unpipe", this, r);
					return this
				}
				var a = I(t.pipes, e);
				return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
			}, v.prototype.on = function(e, t) {
				var r = u.prototype.on.call(this, e, t);
				if ("data" === e) !1 !== this._readableState.flowing && this.resume();
				else if ("readable" === e) {
					var n = this._readableState;
					n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && S(this) : i.nextTick(A, this))
				}
				return r
			}, v.prototype.addListener = v.prototype.on, v.prototype.resume = function() {
				var e = this._readableState;
				return e.flowing || (d("resume"), e.flowing = !0, function(e, t) {
					t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(R, e, t))
				}(this, e)), this
			}, v.prototype.pause = function() {
				return d("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (d("pause"), this._readableState.flowing = !1, this.emit("pause")), this
			}, v.prototype.wrap = function(e) {
				var t = this,
					r = this._readableState,
					n = !1;
				for (var i in e.on("end", (function() {
						if (d("wrapped end"), r.decoder && !r.ended) {
							var e = r.decoder.end();
							e && e.length && t.push(e)
						}
						t.push(null)
					})), e.on("data", (function(i) {
						(d("wrapped data"), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()))
					})), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
					return function() {
						return e[t].apply(e, arguments)
					}
				}(i));
				for (var o = 0; o < m.length; o++) e.on(m[o], this.emit.bind(this, m[o]));
				return this._read = function(t) {
					d("wrapped _read", t), n && (n = !1, e.resume())
				}, this
			}, Object.defineProperty(v.prototype, "readableHighWaterMark", {
				enumerable: !1,
				get: function() {
					return this._readableState.highWaterMark
				}
			}), v._fromList = C
		}).call(this, r(6), r(5))
	}, function(e, t, r) {
		e.exports = r(12).EventEmitter
	}, function(e, t, r) {
		"use strict";
		var n = r(43);

		function i(e, t) {
			e.emit("error", t)
		}
		e.exports = {
			destroy: function(e, t) {
				var r = this,
					o = this._readableState && this._readableState.destroyed,
					a = this._writableState && this._writableState.destroyed;
				return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {
					!t && e ? (n.nextTick(i, r, e), r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
				})), this)
			},
			undestroy: function() {
				this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
			}
		}
	}, function(e, t, r) {
		(function(e) {
			var n = void 0 !== e && e || "undefined" != typeof self && self || window,
				i = Function.prototype.apply;

			function o(e, t) {
				this._id = e, this._clearFn = t
			}
			t.setTimeout = function() {
				return new o(i.call(setTimeout, n, arguments), clearTimeout)
			}, t.setInterval = function() {
				return new o(i.call(setInterval, n, arguments), clearInterval)
			}, t.clearTimeout = t.clearInterval = function(e) {
				e && e.close()
			}, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
				this._clearFn.call(n, this._id)
			}, t.enroll = function(e, t) {
				clearTimeout(e._idleTimeoutId), e._idleTimeout = t
			}, t.unenroll = function(e) {
				clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
			}, t._unrefActive = t.active = function(e) {
				clearTimeout(e._idleTimeoutId);
				var t = e._idleTimeout;
				t >= 0 && (e._idleTimeoutId = setTimeout((function() {
					e._onTimeout && e._onTimeout()
				}), t))
			}, r(208), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
		}).call(this, r(6))
	}, function(e, t, r) {
		"use strict";
		e.exports = a;
		var n = r(19),
			i = Object.create(r(35));

		function o(e, t) {
			var r = this._transformState;
			r.transforming = !1;
			var n = r.writecb;
			if (!n) return this.emit("error", new Error("write callback called multiple times"));
			r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
			var i = this._readableState;
			i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
		}

		function a(e) {
			if (!(this instanceof a)) return new a(e);
			n.call(this, e), this._transformState = {
				afterTransform: o.bind(this),
				needTransform: !1,
				transforming: !1,
				writecb: null,
				writechunk: null,
				writeencoding: null
			}, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", s)
		}

		function s() {
			var e = this;
			"function" == typeof this._flush ? this._flush((function(t, r) {
				u(e, t, r)
			})) : u(this, null, null)
		}

		function u(e, t, r) {
			if (t) return e.emit("error", t);
			if (null != r && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
			if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
			return e.push(null)
		}
		i.inherits = r(3), i.inherits(a, n), a.prototype.push = function(e, t) {
			return this._transformState.needTransform = !1, n.prototype.push.call(this, e, t)
		}, a.prototype._transform = function(e, t, r) {
			throw new Error("_transform() is not implemented")
		}, a.prototype._write = function(e, t, r) {
			var n = this._transformState;
			if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
				var i = this._readableState;
				(n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
			}
		}, a.prototype._read = function(e) {
			var t = this._transformState;
			null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
		}, a.prototype._destroy = function(e, t) {
			var r = this;
			n.prototype._destroy.call(this, e, (function(e) {
				t(e), r.emit("close")
			}))
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = r(227),
			i = r(228);
		t.keccak224 = n.createHashFunction((function() {
			return i("keccak224")
		})), t.keccak256 = n.createHashFunction((function() {
			return i("keccak256")
		})), t.keccak384 = n.createHashFunction((function() {
			return i("keccak384")
		})), t.keccak512 = n.createHashFunction((function() {
			return i("keccak512")
		}))
	}, function(e, t, r) {
		(t = e.exports = r(112)).Stream = t, t.Readable = t, t.Writable = r(116), t.Duplex = r(27), t.Transform = r(117), t.PassThrough = r(236), t.finished = r(57), t.pipeline = r(237)
	}, function(e, t, r) {
		"use strict";
		(function(t, n) {
			var i;
			e.exports = E, E.ReadableState = x;
			r(12).EventEmitter;
			var o = function(e, t) {
					return e.listeners(t).length
				},
				a = r(113),
				s = r(2).Buffer,
				u = t.Uint8Array || function() {};
			var c, f = r(231);
			c = f && f.debuglog ? f.debuglog("stream") : function() {};
			var h, l, d, p = r(232),
				b = r(114),
				g = r(115).getHighWaterMark,
				m = r(26).codes,
				y = m.ERR_INVALID_ARG_TYPE,
				v = m.ERR_STREAM_PUSH_AFTER_EOF,
				_ = m.ERR_METHOD_NOT_IMPLEMENTED,
				w = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
			r(3)(E, a);
			var M = b.errorOrDestroy,
				S = ["error", "close", "destroy", "pause", "resume"];

			function x(e, t, n) {
				i = i || r(27), e = e || {}, "boolean" != typeof n && (n = t instanceof i), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = g(this, e, "readableHighWaterMark", n), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (h || (h = r(20).StringDecoder), this.decoder = new h(e.encoding), this.encoding = e.encoding)
			}

			function E(e) {
				if (i = i || r(27), !(this instanceof E)) return new E(e);
				var t = this instanceof i;
				this._readableState = new x(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), a.call(this)
			}

			function k(e, t, r, n, i) {
				c("readableAddChunk", t);
				var o, a = e._readableState;
				if (null === t) a.reading = !1,
					function(e, t) {
						if (c("onEofChunk"), t.ended) return;
						if (t.decoder) {
							var r = t.decoder.end();
							r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
						}
						t.ended = !0, t.sync ? T(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, C(e)))
					}(e, a);
				else if (i || (o = function(e, t) {
						var r;
						n = t, s.isBuffer(n) || n instanceof u || "string" == typeof t || void 0 === t || e.objectMode || (r = new y("chunk", ["string", "Buffer", "Uint8Array"], t));
						var n;
						return r
					}(a, t)), o) M(e, o);
				else if (a.objectMode || t && t.length > 0)
					if ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === s.prototype || (t = function(e) {
							return s.from(e)
						}(t)), n) a.endEmitted ? M(e, new w) : A(e, a, t, !0);
					else if (a.ended) M(e, new v);
				else {
					if (a.destroyed) return !1;
					a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? A(e, a, t, !1) : O(e, a)) : A(e, a, t, !1)
				} else n || (a.reading = !1, O(e, a));
				return !a.ended && (a.length < a.highWaterMark || 0 === a.length)
			}

			function A(e, t, r, n) {
				t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && T(e)), O(e, t)
			}
			Object.defineProperty(E.prototype, "destroyed", {
				enumerable: !1,
				get: function() {
					return void 0 !== this._readableState && this._readableState.destroyed
				},
				set: function(e) {
					this._readableState && (this._readableState.destroyed = e)
				}
			}), E.prototype.destroy = b.destroy, E.prototype._undestroy = b.undestroy, E.prototype._destroy = function(e, t) {
				t(e)
			}, E.prototype.push = function(e, t) {
				var r, n = this._readableState;
				return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = s.from(e, t), t = ""), r = !0), k(this, e, t, !1, r)
			}, E.prototype.unshift = function(e) {
				return k(this, e, null, !0, !1)
			}, E.prototype.isPaused = function() {
				return !1 === this._readableState.flowing
			}, E.prototype.setEncoding = function(e) {
				h || (h = r(20).StringDecoder);
				var t = new h(e);
				this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
				for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += t.write(n.data), n = n.next;
				return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
			};

			function R(e, t) {
				return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
					return e >= 1073741824 ? e = 1073741824 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
				}(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
			}

			function T(e) {
				var t = e._readableState;
				c("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (c("emitReadable", t.flowing), t.emittedReadable = !0, n.nextTick(C, e))
			}

			function C(e) {
				var t = e._readableState;
				c("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, j(e)
			}

			function O(e, t) {
				t.readingMore || (t.readingMore = !0, n.nextTick(P, e, t))
			}

			function P(e, t) {
				for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
					var r = t.length;
					if (c("maybeReadMore read 0"), e.read(0), r === t.length) break
				}
				t.readingMore = !1
			}

			function I(e) {
				var t = e._readableState;
				t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
			}

			function B(e) {
				c("readable nexttick read 0"), e.read(0)
			}

			function L(e, t) {
				c("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), j(e), t.flowing && !t.reading && e.read(0)
			}

			function j(e) {
				var t = e._readableState;
				for (c("flow", t.flowing); t.flowing && null !== e.read(););
			}

			function N(e, t) {
				return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r);
				var r
			}

			function U(e) {
				var t = e._readableState;
				c("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, n.nextTick(q, t, e))
			}

			function q(e, t) {
				if (c("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
					var r = t._writableState;
					(!r || r.autoDestroy && r.finished) && t.destroy()
				}
			}

			function D(e, t) {
				for (var r = 0, n = e.length; r < n; r++)
					if (e[r] === t) return r;
				return -1
			}
			E.prototype.read = function(e) {
				c("read", e), e = parseInt(e, 10);
				var t = this._readableState,
					r = e;
				if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return c("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? U(this) : T(this), null;
				if (0 === (e = R(e, t)) && t.ended) return 0 === t.length && U(this), null;
				var n, i = t.needReadable;
				return c("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && c("length less than watermark", i = !0), t.ended || t.reading ? c("reading or ended", i = !1) : i && (c("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = R(r, t))), null === (n = e > 0 ? N(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && U(this)), null !== n && this.emit("data", n), n
			}, E.prototype._read = function(e) {
				M(this, new _("_read()"))
			}, E.prototype.pipe = function(e, t) {
				var r = this,
					i = this._readableState;
				switch (i.pipesCount) {
					case 0:
						i.pipes = e;
						break;
					case 1:
						i.pipes = [i.pipes, e];
						break;
					default:
						i.pipes.push(e)
				}
				i.pipesCount += 1, c("pipe count=%d opts=%j", i.pipesCount, t);
				var a = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? u : g;

				function s(t, n) {
					c("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, c("cleanup"), e.removeListener("close", p), e.removeListener("finish", b), e.removeListener("drain", f), e.removeListener("error", d), e.removeListener("unpipe", s), r.removeListener("end", u), r.removeListener("end", g), r.removeListener("data", l), h = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || f())
				}

				function u() {
					c("onend"), e.end()
				}
				i.endEmitted ? n.nextTick(a) : r.once("end", a), e.on("unpipe", s);
				var f = function(e) {
					return function() {
						var t = e._readableState;
						c("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && o(e, "data") && (t.flowing = !0, j(e))
					}
				}(r);
				e.on("drain", f);
				var h = !1;

				function l(t) {
					c("ondata");
					var n = e.write(t);
					c("dest.write", n), !1 === n && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== D(i.pipes, e)) && !h && (c("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause())
				}

				function d(t) {
					c("onerror", t), g(), e.removeListener("error", d), 0 === o(e, "error") && M(e, t)
				}

				function p() {
					e.removeListener("finish", b), g()
				}

				function b() {
					c("onfinish"), e.removeListener("close", p), g()
				}

				function g() {
					c("unpipe"), r.unpipe(e)
				}
				return r.on("data", l),
					function(e, t, r) {
						if ("function" == typeof e.prependListener) return e.prependListener(t, r);
						e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
					}(e, "error", d), e.once("close", p), e.once("finish", b), e.emit("pipe", r), i.flowing || (c("pipe resume"), r.resume()), e
			}, E.prototype.unpipe = function(e) {
				var t = this._readableState,
					r = {
						hasUnpiped: !1
					};
				if (0 === t.pipesCount) return this;
				if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
				if (!e) {
					var n = t.pipes,
						i = t.pipesCount;
					t.pipes = null, t.pipesCount = 0, t.flowing = !1;
					for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {
						hasUnpiped: !1
					});
					return this
				}
				var a = D(t.pipes, e);
				return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
			}, E.prototype.on = function(e, t) {
				var r = a.prototype.on.call(this, e, t),
					i = this._readableState;
				return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, c("on readable", i.length, i.reading), i.length ? T(this) : i.reading || n.nextTick(B, this))), r
			}, E.prototype.addListener = E.prototype.on, E.prototype.removeListener = function(e, t) {
				var r = a.prototype.removeListener.call(this, e, t);
				return "readable" === e && n.nextTick(I, this), r
			}, E.prototype.removeAllListeners = function(e) {
				var t = a.prototype.removeAllListeners.apply(this, arguments);
				return "readable" !== e && void 0 !== e || n.nextTick(I, this), t
			}, E.prototype.resume = function() {
				var e = this._readableState;
				return e.flowing || (c("resume"), e.flowing = !e.readableListening, function(e, t) {
					t.resumeScheduled || (t.resumeScheduled = !0, n.nextTick(L, e, t))
				}(this, e)), e.paused = !1, this
			}, E.prototype.pause = function() {
				return c("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (c("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
			}, E.prototype.wrap = function(e) {
				var t = this,
					r = this._readableState,
					n = !1;
				for (var i in e.on("end", (function() {
						if (c("wrapped end"), r.decoder && !r.ended) {
							var e = r.decoder.end();
							e && e.length && t.push(e)
						}
						t.push(null)
					})), e.on("data", (function(i) {
						(c("wrapped data"), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()))
					})), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
					return function() {
						return e[t].apply(e, arguments)
					}
				}(i));
				for (var o = 0; o < S.length; o++) e.on(S[o], this.emit.bind(this, S[o]));
				return this._read = function(t) {
					c("wrapped _read", t), n && (n = !1, e.resume())
				}, this
			}, "function" == typeof Symbol && (E.prototype[Symbol.asyncIterator] = function() {
				return void 0 === l && (l = r(234)), l(this)
			}), Object.defineProperty(E.prototype, "readableHighWaterMark", {
				enumerable: !1,
				get: function() {
					return this._readableState.highWaterMark
				}
			}), Object.defineProperty(E.prototype, "readableBuffer", {
				enumerable: !1,
				get: function() {
					return this._readableState && this._readableState.buffer
				}
			}), Object.defineProperty(E.prototype, "readableFlowing", {
				enumerable: !1,
				get: function() {
					return this._readableState.flowing
				},
				set: function(e) {
					this._readableState && (this._readableState.flowing = e)
				}
			}), E._fromList = N, Object.defineProperty(E.prototype, "readableLength", {
				enumerable: !1,
				get: function() {
					return this._readableState.length
				}
			}), "function" == typeof Symbol && (E.from = function(e, t) {
				return void 0 === d && (d = r(235)), d(E, e, t)
			})
		}).call(this, r(6), r(5))
	}, function(e, t, r) {
		e.exports = r(12).EventEmitter
	}, function(e, t, r) {
		"use strict";
		(function(t) {
			function r(e, t) {
				i(e, t), n(e)
			}

			function n(e) {
				e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
			}

			function i(e, t) {
				e.emit("error", t)
			}
			e.exports = {
				destroy: function(e, o) {
					var a = this,
						s = this._readableState && this._readableState.destroyed,
						u = this._writableState && this._writableState.destroyed;
					return s || u ? (o ? o(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, t.nextTick(i, this, e)) : t.nextTick(i, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {
						!o && e ? a._writableState ? a._writableState.errorEmitted ? t.nextTick(n, a) : (a._writableState.errorEmitted = !0, t.nextTick(r, a, e)) : t.nextTick(r, a, e) : o ? (t.nextTick(n, a), o(e)) : t.nextTick(n, a)
					})), this)
				},
				undestroy: function() {
					this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
				},
				errorOrDestroy: function(e, t) {
					var r = e._readableState,
						n = e._writableState;
					r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
				}
			}
		}).call(this, r(5))
	}, function(e, t, r) {
		"use strict";
		var n = r(26).codes.ERR_INVALID_OPT_VALUE;
		e.exports = {
			getHighWaterMark: function(e, t, r, i) {
				var o = function(e, t, r) {
					return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
				}(t, i, r);
				if (null != o) {
					if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r : "highWaterMark", o);
					return Math.floor(o)
				}
				return e.objectMode ? 16 : 16384
			}
		}
	}, function(e, t, r) {
		"use strict";
		(function(t, n) {
			function i(e) {
				var t = this;
				this.next = null, this.entry = null, this.finish = function() {
					! function(e, t, r) {
						var n = e.entry;
						e.entry = null;
						for (; n;) {
							var i = n.callback;
							t.pendingcb--, i(r), n = n.next
						}
						t.corkedRequestsFree.next = e
					}(t, e)
				}
			}
			var o;
			e.exports = E, E.WritableState = x;
			var a = {
					deprecate: r(54)
				},
				s = r(113),
				u = r(2).Buffer,
				c = t.Uint8Array || function() {};
			var f, h = r(114),
				l = r(115).getHighWaterMark,
				d = r(26).codes,
				p = d.ERR_INVALID_ARG_TYPE,
				b = d.ERR_METHOD_NOT_IMPLEMENTED,
				g = d.ERR_MULTIPLE_CALLBACK,
				m = d.ERR_STREAM_CANNOT_PIPE,
				y = d.ERR_STREAM_DESTROYED,
				v = d.ERR_STREAM_NULL_VALUES,
				_ = d.ERR_STREAM_WRITE_AFTER_END,
				w = d.ERR_UNKNOWN_ENCODING,
				M = h.errorOrDestroy;

			function S() {}

			function x(e, t, a) {
				o = o || r(27), e = e || {}, "boolean" != typeof a && (a = t instanceof o), this.objectMode = !!e.objectMode, a && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = l(this, e, "writableHighWaterMark", a), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
				var s = !1 === e.decodeStrings;
				this.decodeStrings = !s, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
					! function(e, t) {
						var r = e._writableState,
							i = r.sync,
							o = r.writecb;
						if ("function" != typeof o) throw new g;
						if (function(e) {
								e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
							}(r), t) ! function(e, t, r, i, o) {
							--t.pendingcb, r ? (n.nextTick(o, i), n.nextTick(O, e, t), e._writableState.errorEmitted = !0, M(e, i)) : (o(i), e._writableState.errorEmitted = !0, M(e, i), O(e, t))
						}(e, r, i, t, o);
						else {
							var a = T(r) || e.destroyed;
							a || r.corked || r.bufferProcessing || !r.bufferedRequest || R(e, r), i ? n.nextTick(A, e, r, a, o) : A(e, r, a, o)
						}
					}(t, e)
				}, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this)
			}

			function E(e) {
				var t = this instanceof(o = o || r(27));
				if (!t && !f.call(E, this)) return new E(e);
				this._writableState = new x(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), s.call(this)
			}

			function k(e, t, r, n, i, o, a) {
				t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new y("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
			}

			function A(e, t, r, n) {
				r || function(e, t) {
					0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
				}(e, t), t.pendingcb--, n(), O(e, t)
			}

			function R(e, t) {
				t.bufferProcessing = !0;
				var r = t.bufferedRequest;
				if (e._writev && r && r.next) {
					var n = t.bufferedRequestCount,
						o = new Array(n),
						a = t.corkedRequestsFree;
					a.entry = r;
					for (var s = 0, u = !0; r;) o[s] = r, r.isBuf || (u = !1), r = r.next, s += 1;
					o.allBuffers = u, k(e, t, !0, t.length, o, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0
				} else {
					for (; r;) {
						var c = r.chunk,
							f = r.encoding,
							h = r.callback;
						if (k(e, t, !1, t.objectMode ? 1 : c.length, c, f, h), r = r.next, t.bufferedRequestCount--, t.writing) break
					}
					null === r && (t.lastBufferedRequest = null)
				}
				t.bufferedRequest = r, t.bufferProcessing = !1
			}

			function T(e) {
				return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
			}

			function C(e, t) {
				e._final((function(r) {
					t.pendingcb--, r && M(e, r), t.prefinished = !0, e.emit("prefinish"), O(e, t)
				}))
			}

			function O(e, t) {
				var r = T(t);
				if (r && (function(e, t) {
						t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, n.nextTick(C, e, t)))
					}(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
					var i = e._readableState;
					(!i || i.autoDestroy && i.endEmitted) && e.destroy()
				}
				return r
			}
			r(3)(E, s), x.prototype.getBuffer = function() {
					for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
					return t
				},
				function() {
					try {
						Object.defineProperty(x.prototype, "buffer", {
							get: a.deprecate((function() {
								return this.getBuffer()
							}), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
						})
					} catch (e) {}
				}(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (f = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, {
					value: function(e) {
						return !!f.call(this, e) || this === E && (e && e._writableState instanceof x)
					}
				})) : f = function(e) {
					return e instanceof this
				}, E.prototype.pipe = function() {
					M(this, new m)
				}, E.prototype.write = function(e, t, r) {
					var i, o = this._writableState,
						a = !1,
						s = !o.objectMode && (i = e, u.isBuffer(i) || i instanceof c);
					return s && !u.isBuffer(e) && (e = function(e) {
						return u.from(e)
					}(e)), "function" == typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = o.defaultEncoding), "function" != typeof r && (r = S), o.ending ? function(e, t) {
						var r = new _;
						M(e, r), n.nextTick(t, r)
					}(this, r) : (s || function(e, t, r, i) {
						var o;
						return null === r ? o = new v : "string" == typeof r || t.objectMode || (o = new p("chunk", ["string", "Buffer"], r)), !o || (M(e, o), n.nextTick(i, o), !1)
					}(this, o, e, r)) && (o.pendingcb++, a = function(e, t, r, n, i, o) {
						if (!r) {
							var a = function(e, t, r) {
								e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = u.from(t, r));
								return t
							}(t, n, i);
							n !== a && (r = !0, i = "buffer", n = a)
						}
						var s = t.objectMode ? 1 : n.length;
						t.length += s;
						var c = t.length < t.highWaterMark;
						c || (t.needDrain = !0);
						if (t.writing || t.corked) {
							var f = t.lastBufferedRequest;
							t.lastBufferedRequest = {
								chunk: n,
								encoding: i,
								isBuf: r,
								callback: o,
								next: null
							}, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
						} else k(e, t, !1, s, n, i, o);
						return c
					}(this, o, s, e, t, r)), a
				}, E.prototype.cork = function() {
					this._writableState.corked++
				}, E.prototype.uncork = function() {
					var e = this._writableState;
					e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || R(this, e))
				}, E.prototype.setDefaultEncoding = function(e) {
					if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new w(e);
					return this._writableState.defaultEncoding = e, this
				}, Object.defineProperty(E.prototype, "writableBuffer", {
					enumerable: !1,
					get: function() {
						return this._writableState && this._writableState.getBuffer()
					}
				}), Object.defineProperty(E.prototype, "writableHighWaterMark", {
					enumerable: !1,
					get: function() {
						return this._writableState.highWaterMark
					}
				}), E.prototype._write = function(e, t, r) {
					r(new b("_write()"))
				}, E.prototype._writev = null, E.prototype.end = function(e, t, r) {
					var i = this._writableState;
					return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || function(e, t, r) {
						t.ending = !0, O(e, t), r && (t.finished ? n.nextTick(r) : e.once("finish", r));
						t.ended = !0, e.writable = !1
					}(this, i, r), this
				}, Object.defineProperty(E.prototype, "writableLength", {
					enumerable: !1,
					get: function() {
						return this._writableState.length
					}
				}), Object.defineProperty(E.prototype, "destroyed", {
					enumerable: !1,
					get: function() {
						return void 0 !== this._writableState && this._writableState.destroyed
					},
					set: function(e) {
						this._writableState && (this._writableState.destroyed = e)
					}
				}), E.prototype.destroy = h.destroy, E.prototype._undestroy = h.undestroy, E.prototype._destroy = function(e, t) {
					t(e)
				}
		}).call(this, r(6), r(5))
	}, function(e, t, r) {
		"use strict";
		e.exports = f;
		var n = r(26).codes,
			i = n.ERR_METHOD_NOT_IMPLEMENTED,
			o = n.ERR_MULTIPLE_CALLBACK,
			a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
			s = n.ERR_TRANSFORM_WITH_LENGTH_0,
			u = r(27);

		function c(e, t) {
			var r = this._transformState;
			r.transforming = !1;
			var n = r.writecb;
			if (null === n) return this.emit("error", new o);
			r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
			var i = this._readableState;
			i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
		}

		function f(e) {
			if (!(this instanceof f)) return new f(e);
			u.call(this, e), this._transformState = {
				afterTransform: c.bind(this),
				needTransform: !1,
				transforming: !1,
				writecb: null,
				writechunk: null,
				writeencoding: null
			}, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", h)
		}

		function h() {
			var e = this;
			"function" != typeof this._flush || this._readableState.destroyed ? l(this, null, null) : this._flush((function(t, r) {
				l(e, t, r)
			}))
		}

		function l(e, t, r) {
			if (t) return e.emit("error", t);
			if (null != r && e.push(r), e._writableState.length) throw new s;
			if (e._transformState.transforming) throw new a;
			return e.push(null)
		}
		r(3)(f, u), f.prototype.push = function(e, t) {
			return this._transformState.needTransform = !1, u.prototype.push.call(this, e, t)
		}, f.prototype._transform = function(e, t, r) {
			r(new i("_transform()"))
		}, f.prototype._write = function(e, t, r) {
			var n = this._transformState;
			if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
				var i = this._readableState;
				(n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
			}
		}, f.prototype._read = function(e) {
			var t = this._transformState;
			null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
		}, f.prototype._destroy = function(e, t) {
			u.prototype._destroy.call(this, e, (function(e) {
				t(e)
			}))
		}
	}, function(e, t, r) {
		"use strict";
		var n = this && this.__awaiter || function(e, t, r, n) {
				return new(r || (r = Promise))((function(i, o) {
					function a(e) {
						try {
							u(n.next(e))
						} catch (e) {
							o(e)
						}
					}

					function s(e) {
						try {
							u(n.throw(e))
						} catch (e) {
							o(e)
						}
					}

					function u(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					u((n = n.apply(e, t || [])).next())
				}))
			},
			i = this && this.__generator || function(e, t) {
				var r, n, i, o, a = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return o = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
					return this
				}), o;

				function s(o) {
					return function(s) {
						return function(o) {
							if (r) throw new TypeError("Generator is already executing.");
							for (; a;) try {
								if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
								switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
									case 0:
									case 1:
										i = o;
										break;
									case 4:
										return a.label++, {
											value: o[1],
											done: !1
										};
									case 5:
										a.label++, n = o[1], o = [0];
										continue;
									case 7:
										o = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
											a = 0;
											continue
										}
										if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
											a.label = o[1];
											break
										}
										if (6 === o[0] && a.label < i[1]) {
											a.label = i[1], i = o;
											break
										}
										if (i && a.label < i[2]) {
											a.label = i[2], a.ops.push(o);
											break
										}
										i[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								o = t.call(e, a)
							} catch (e) {
								o = [6, e], n = 0
							} finally {
								r = i = 0
							}
							if (5 & o[0]) throw o[1];
							return {
								value: o[0] ? o[1] : void 0,
								done: !0
							}
						}([o, s])
					}
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(119),
			a = r(264);
		t.createPrivateKey = function() {
				return n(this, void 0, void 0, (function() {
					var e;
					return i(this, (function(t) {
						switch (t.label) {
							case 0:
								return [4, a.getRandomBytes(32)];
							case 1:
								return e = t.sent(), o.privateKeyVerify(e) ? [2, e] : [3, 0];
							case 2:
								return [2]
						}
					}))
				}))
			}, t.createPrivateKeySync = function() {
				for (;;) {
					var e = a.getRandomBytesSync(32);
					if (o.privateKeyVerify(e)) return e
				}
			},
			function(e) {
				for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
			}(r(119))
	}, function(e, t, r) {
		e.exports = r(242)(r(243))
	}, function(e, t, r) {
		"use strict";
		var n = t;

		function i(e) {
			return 1 === e.length ? "0" + e : e
		}

		function o(e) {
			for (var t = "", r = 0; r < e.length; r++) t += i(e[r].toString(16));
			return t
		}
		n.toArray = function(e, t) {
			if (Array.isArray(e)) return e.slice();
			if (!e) return [];
			var r = [];
			if ("string" != typeof e) {
				for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
				return r
			}
			if ("hex" === t) {
				(e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
				for (n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
			} else
				for (n = 0; n < e.length; n++) {
					var i = e.charCodeAt(n),
						o = i >> 8,
						a = 255 & i;
					o ? r.push(o, a) : r.push(a)
				}
			return r
		}, n.zero2 = i, n.toHex = o, n.encode = function(e, t) {
			return "hex" === t ? o(e) : e
		}
	}, function(e, t, r) {
		var n;

		function i(e) {
			this.rand = e
		}
		if (e.exports = function(e) {
				return n || (n = new i(null)), n.generate(e)
			}, e.exports.Rand = i, i.prototype.generate = function(e) {
				return this._rand(e)
			}, i.prototype._rand = function(e) {
				if (this.rand.getBytes) return this.rand.getBytes(e);
				for (var t = new Uint8Array(e), r = 0; r < t.length; r++) t[r] = this.rand.getByte();
				return t
			}, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(e) {
			var t = new Uint8Array(e);
			return self.crypto.getRandomValues(t), t
		} : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(e) {
			var t = new Uint8Array(e);
			return self.msCrypto.getRandomValues(t), t
		} : "object" == typeof window && (i.prototype._rand = function() {
			throw new Error("Not implemented yet")
		});
		else try {
			var o = r(246);
			if ("function" != typeof o.randomBytes) throw new Error("Not supported");
			i.prototype._rand = function(e) {
				return o.randomBytes(e)
			}
		} catch (e) {}
	}, function(e, t, r) {
		"use strict";
		var n = t;
		n.base = r(45), n.short = r(247), n.mont = r(248), n.edwards = r(249)
	}, function(e, t, r) {
		"use strict";
		var n = r(15).rotr32;

		function i(e, t, r) {
			return e & t ^ ~e & r
		}

		function o(e, t, r) {
			return e & t ^ e & r ^ t & r
		}

		function a(e, t, r) {
			return e ^ t ^ r
		}
		t.ft_1 = function(e, t, r, n) {
			return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? a(t, r, n) : 2 === e ? o(t, r, n) : void 0
		}, t.ch32 = i, t.maj32 = o, t.p32 = a, t.s0_256 = function(e) {
			return n(e, 2) ^ n(e, 13) ^ n(e, 22)
		}, t.s1_256 = function(e) {
			return n(e, 6) ^ n(e, 11) ^ n(e, 25)
		}, t.g0_256 = function(e) {
			return n(e, 7) ^ n(e, 18) ^ e >>> 3
		}, t.g1_256 = function(e) {
			return n(e, 17) ^ n(e, 19) ^ e >>> 10
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(15),
			i = r(37),
			o = r(123),
			a = r(22),
			s = n.sum32,
			u = n.sum32_4,
			c = n.sum32_5,
			f = o.ch32,
			h = o.maj32,
			l = o.s0_256,
			d = o.s1_256,
			p = o.g0_256,
			b = o.g1_256,
			g = i.BlockHash,
			m = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

		function y() {
			if (!(this instanceof y)) return new y;
			g.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = m, this.W = new Array(64)
		}
		n.inherits(y, g), e.exports = y, y.blockSize = 512, y.outSize = 256, y.hmacStrength = 192, y.padLength = 64, y.prototype._update = function(e, t) {
			for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
			for (; n < r.length; n++) r[n] = u(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
			var i = this.h[0],
				o = this.h[1],
				g = this.h[2],
				m = this.h[3],
				y = this.h[4],
				v = this.h[5],
				_ = this.h[6],
				w = this.h[7];
			for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
				var M = c(w, d(y), f(y, v, _), this.k[n], r[n]),
					S = s(l(i), h(i, o, g));
				w = _, _ = v, v = y, y = s(m, M), m = g, g = o, o = i, i = s(M, S)
			}
			this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], g), this.h[3] = s(this.h[3], m), this.h[4] = s(this.h[4], y), this.h[5] = s(this.h[5], v), this.h[6] = s(this.h[6], _), this.h[7] = s(this.h[7], w)
		}, y.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(15),
			i = r(37),
			o = r(22),
			a = n.rotr64_hi,
			s = n.rotr64_lo,
			u = n.shr64_hi,
			c = n.shr64_lo,
			f = n.sum64,
			h = n.sum64_hi,
			l = n.sum64_lo,
			d = n.sum64_4_hi,
			p = n.sum64_4_lo,
			b = n.sum64_5_hi,
			g = n.sum64_5_lo,
			m = i.BlockHash,
			y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

		function v() {
			if (!(this instanceof v)) return new v;
			m.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = y, this.W = new Array(160)
		}

		function _(e, t, r, n, i) {
			var o = e & r ^ ~e & i;
			return o < 0 && (o += 4294967296), o
		}

		function w(e, t, r, n, i, o) {
			var a = t & n ^ ~t & o;
			return a < 0 && (a += 4294967296), a
		}

		function M(e, t, r, n, i) {
			var o = e & r ^ e & i ^ r & i;
			return o < 0 && (o += 4294967296), o
		}

		function S(e, t, r, n, i, o) {
			var a = t & n ^ t & o ^ n & o;
			return a < 0 && (a += 4294967296), a
		}

		function x(e, t) {
			var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
			return r < 0 && (r += 4294967296), r
		}

		function E(e, t) {
			var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
			return r < 0 && (r += 4294967296), r
		}

		function k(e, t) {
			var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
			return r < 0 && (r += 4294967296), r
		}

		function A(e, t) {
			var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
			return r < 0 && (r += 4294967296), r
		}

		function R(e, t) {
			var r = a(e, t, 1) ^ a(e, t, 8) ^ u(e, t, 7);
			return r < 0 && (r += 4294967296), r
		}

		function T(e, t) {
			var r = s(e, t, 1) ^ s(e, t, 8) ^ c(e, t, 7);
			return r < 0 && (r += 4294967296), r
		}

		function C(e, t) {
			var r = a(e, t, 19) ^ a(t, e, 29) ^ u(e, t, 6);
			return r < 0 && (r += 4294967296), r
		}

		function O(e, t) {
			var r = s(e, t, 19) ^ s(t, e, 29) ^ c(e, t, 6);
			return r < 0 && (r += 4294967296), r
		}
		n.inherits(v, m), e.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function(e, t) {
			for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
			for (; n < r.length; n += 2) {
				var i = C(r[n - 4], r[n - 3]),
					o = O(r[n - 4], r[n - 3]),
					a = r[n - 14],
					s = r[n - 13],
					u = R(r[n - 30], r[n - 29]),
					c = T(r[n - 30], r[n - 29]),
					f = r[n - 32],
					h = r[n - 31];
				r[n] = d(i, o, a, s, u, c, f, h), r[n + 1] = p(i, o, a, s, u, c, f, h)
			}
		}, v.prototype._update = function(e, t) {
			this._prepareBlock(e, t);
			var r = this.W,
				n = this.h[0],
				i = this.h[1],
				a = this.h[2],
				s = this.h[3],
				u = this.h[4],
				c = this.h[5],
				d = this.h[6],
				p = this.h[7],
				m = this.h[8],
				y = this.h[9],
				v = this.h[10],
				R = this.h[11],
				T = this.h[12],
				C = this.h[13],
				O = this.h[14],
				P = this.h[15];
			o(this.k.length === r.length);
			for (var I = 0; I < r.length; I += 2) {
				var B = O,
					L = P,
					j = k(m, y),
					N = A(m, y),
					U = _(m, y, v, R, T),
					q = w(m, y, v, R, T, C),
					D = this.k[I],
					H = this.k[I + 1],
					z = r[I],
					F = r[I + 1],
					W = b(B, L, j, N, U, q, D, H, z, F),
					K = g(B, L, j, N, U, q, D, H, z, F);
				B = x(n, i), L = E(n, i), j = M(n, i, a, s, u), N = S(n, i, a, s, u, c);
				var V = h(B, L, j, N),
					J = l(B, L, j, N);
				O = T, P = C, T = v, C = R, v = m, R = y, m = h(d, p, W, K), y = l(p, p, W, K), d = u, p = c, u = a, c = s, a = n, s = i, n = h(W, K, V, J), i = l(W, K, V, J)
			}
			f(this.h, 0, n, i), f(this.h, 2, a, s), f(this.h, 4, u, c), f(this.h, 6, d, p), f(this.h, 8, m, y), f(this.h, 10, v, R), f(this.h, 12, T, C), f(this.h, 14, O, P)
		}, v.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(3),
			i = r(269),
			o = r(278),
			a = r(279),
			s = r(284);

		function u(e) {
			s.call(this, "digest"), this._hash = e
		}
		n(u, s), u.prototype._update = function(e) {
			this._hash.update(e)
		}, u.prototype._final = function() {
			return this._hash.digest()
		}, e.exports = function(e) {
			return "md5" === (e = e.toLowerCase()) ? new i : "rmd160" === e || "ripemd160" === e ? new o : new u(a(e))
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(13).Buffer,
			i = r(270).Transform;

		function o(e) {
			i.call(this), this._block = n.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
		}
		r(3)(o, i), o.prototype._transform = function(e, t, r) {
			var n = null;
			try {
				this.update(e, t)
			} catch (e) {
				n = e
			}
			r(n)
		}, o.prototype._flush = function(e) {
			var t = null;
			try {
				this.push(this.digest())
			} catch (e) {
				t = e
			}
			e(t)
		}, o.prototype.update = function(e, t) {
			if (function(e, t) {
					if (!n.isBuffer(e) && "string" != typeof e) throw new TypeError(t + " must be a string or a buffer")
				}(e, "Data"), this._finalized) throw new Error("Digest already called");
			n.isBuffer(e) || (e = n.from(e, t));
			for (var r = this._block, i = 0; this._blockOffset + e.length - i >= this._blockSize;) {
				for (var o = this._blockOffset; o < this._blockSize;) r[o++] = e[i++];
				this._update(), this._blockOffset = 0
			}
			for (; i < e.length;) r[this._blockOffset++] = e[i++];
			for (var a = 0, s = 8 * e.length; s > 0; ++a) this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
			return this
		}, o.prototype._update = function() {
			throw new Error("_update is not implemented")
		}, o.prototype.digest = function(e) {
			if (this._finalized) throw new Error("Digest already called");
			this._finalized = !0;
			var t = this._digest();
			void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0;
			for (var r = 0; r < 4; ++r) this._length[r] = 0;
			return t
		}, o.prototype._digest = function() {
			throw new Error("_digest is not implemented")
		}, e.exports = o
	}, function(e, t, r) {
		"use strict";
		(function(t, n) {
			var i;
			e.exports = E, E.ReadableState = x;
			r(12).EventEmitter;
			var o = function(e, t) {
					return e.listeners(t).length
				},
				a = r(129),
				s = r(2).Buffer,
				u = t.Uint8Array || function() {};
			var c, f = r(271);
			c = f && f.debuglog ? f.debuglog("stream") : function() {};
			var h, l, d, p = r(272),
				b = r(130),
				g = r(131).getHighWaterMark,
				m = r(28).codes,
				y = m.ERR_INVALID_ARG_TYPE,
				v = m.ERR_STREAM_PUSH_AFTER_EOF,
				_ = m.ERR_METHOD_NOT_IMPLEMENTED,
				w = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
			r(3)(E, a);
			var M = b.errorOrDestroy,
				S = ["error", "close", "destroy", "pause", "resume"];

			function x(e, t, n) {
				i = i || r(29), e = e || {}, "boolean" != typeof n && (n = t instanceof i), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = g(this, e, "readableHighWaterMark", n), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (h || (h = r(20).StringDecoder), this.decoder = new h(e.encoding), this.encoding = e.encoding)
			}

			function E(e) {
				if (i = i || r(29), !(this instanceof E)) return new E(e);
				var t = this instanceof i;
				this._readableState = new x(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), a.call(this)
			}

			function k(e, t, r, n, i) {
				c("readableAddChunk", t);
				var o, a = e._readableState;
				if (null === t) a.reading = !1,
					function(e, t) {
						if (c("onEofChunk"), t.ended) return;
						if (t.decoder) {
							var r = t.decoder.end();
							r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
						}
						t.ended = !0, t.sync ? T(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, C(e)))
					}(e, a);
				else if (i || (o = function(e, t) {
						var r;
						n = t, s.isBuffer(n) || n instanceof u || "string" == typeof t || void 0 === t || e.objectMode || (r = new y("chunk", ["string", "Buffer", "Uint8Array"], t));
						var n;
						return r
					}(a, t)), o) M(e, o);
				else if (a.objectMode || t && t.length > 0)
					if ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === s.prototype || (t = function(e) {
							return s.from(e)
						}(t)), n) a.endEmitted ? M(e, new w) : A(e, a, t, !0);
					else if (a.ended) M(e, new v);
				else {
					if (a.destroyed) return !1;
					a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? A(e, a, t, !1) : O(e, a)) : A(e, a, t, !1)
				} else n || (a.reading = !1, O(e, a));
				return !a.ended && (a.length < a.highWaterMark || 0 === a.length)
			}

			function A(e, t, r, n) {
				t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && T(e)), O(e, t)
			}
			Object.defineProperty(E.prototype, "destroyed", {
				enumerable: !1,
				get: function() {
					return void 0 !== this._readableState && this._readableState.destroyed
				},
				set: function(e) {
					this._readableState && (this._readableState.destroyed = e)
				}
			}), E.prototype.destroy = b.destroy, E.prototype._undestroy = b.undestroy, E.prototype._destroy = function(e, t) {
				t(e)
			}, E.prototype.push = function(e, t) {
				var r, n = this._readableState;
				return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = s.from(e, t), t = ""), r = !0), k(this, e, t, !1, r)
			}, E.prototype.unshift = function(e) {
				return k(this, e, null, !0, !1)
			}, E.prototype.isPaused = function() {
				return !1 === this._readableState.flowing
			}, E.prototype.setEncoding = function(e) {
				h || (h = r(20).StringDecoder);
				var t = new h(e);
				this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
				for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += t.write(n.data), n = n.next;
				return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
			};

			function R(e, t) {
				return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
					return e >= 1073741824 ? e = 1073741824 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
				}(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
			}

			function T(e) {
				var t = e._readableState;
				c("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (c("emitReadable", t.flowing), t.emittedReadable = !0, n.nextTick(C, e))
			}

			function C(e) {
				var t = e._readableState;
				c("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, j(e)
			}

			function O(e, t) {
				t.readingMore || (t.readingMore = !0, n.nextTick(P, e, t))
			}

			function P(e, t) {
				for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
					var r = t.length;
					if (c("maybeReadMore read 0"), e.read(0), r === t.length) break
				}
				t.readingMore = !1
			}

			function I(e) {
				var t = e._readableState;
				t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
			}

			function B(e) {
				c("readable nexttick read 0"), e.read(0)
			}

			function L(e, t) {
				c("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), j(e), t.flowing && !t.reading && e.read(0)
			}

			function j(e) {
				var t = e._readableState;
				for (c("flow", t.flowing); t.flowing && null !== e.read(););
			}

			function N(e, t) {
				return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r);
				var r
			}

			function U(e) {
				var t = e._readableState;
				c("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, n.nextTick(q, t, e))
			}

			function q(e, t) {
				if (c("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
					var r = t._writableState;
					(!r || r.autoDestroy && r.finished) && t.destroy()
				}
			}

			function D(e, t) {
				for (var r = 0, n = e.length; r < n; r++)
					if (e[r] === t) return r;
				return -1
			}
			E.prototype.read = function(e) {
				c("read", e), e = parseInt(e, 10);
				var t = this._readableState,
					r = e;
				if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return c("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? U(this) : T(this), null;
				if (0 === (e = R(e, t)) && t.ended) return 0 === t.length && U(this), null;
				var n, i = t.needReadable;
				return c("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && c("length less than watermark", i = !0), t.ended || t.reading ? c("reading or ended", i = !1) : i && (c("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = R(r, t))), null === (n = e > 0 ? N(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && U(this)), null !== n && this.emit("data", n), n
			}, E.prototype._read = function(e) {
				M(this, new _("_read()"))
			}, E.prototype.pipe = function(e, t) {
				var r = this,
					i = this._readableState;
				switch (i.pipesCount) {
					case 0:
						i.pipes = e;
						break;
					case 1:
						i.pipes = [i.pipes, e];
						break;
					default:
						i.pipes.push(e)
				}
				i.pipesCount += 1, c("pipe count=%d opts=%j", i.pipesCount, t);
				var a = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? u : g;

				function s(t, n) {
					c("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, c("cleanup"), e.removeListener("close", p), e.removeListener("finish", b), e.removeListener("drain", f), e.removeListener("error", d), e.removeListener("unpipe", s), r.removeListener("end", u), r.removeListener("end", g), r.removeListener("data", l), h = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || f())
				}

				function u() {
					c("onend"), e.end()
				}
				i.endEmitted ? n.nextTick(a) : r.once("end", a), e.on("unpipe", s);
				var f = function(e) {
					return function() {
						var t = e._readableState;
						c("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && o(e, "data") && (t.flowing = !0, j(e))
					}
				}(r);
				e.on("drain", f);
				var h = !1;

				function l(t) {
					c("ondata");
					var n = e.write(t);
					c("dest.write", n), !1 === n && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== D(i.pipes, e)) && !h && (c("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause())
				}

				function d(t) {
					c("onerror", t), g(), e.removeListener("error", d), 0 === o(e, "error") && M(e, t)
				}

				function p() {
					e.removeListener("finish", b), g()
				}

				function b() {
					c("onfinish"), e.removeListener("close", p), g()
				}

				function g() {
					c("unpipe"), r.unpipe(e)
				}
				return r.on("data", l),
					function(e, t, r) {
						if ("function" == typeof e.prependListener) return e.prependListener(t, r);
						e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
					}(e, "error", d), e.once("close", p), e.once("finish", b), e.emit("pipe", r), i.flowing || (c("pipe resume"), r.resume()), e
			}, E.prototype.unpipe = function(e) {
				var t = this._readableState,
					r = {
						hasUnpiped: !1
					};
				if (0 === t.pipesCount) return this;
				if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
				if (!e) {
					var n = t.pipes,
						i = t.pipesCount;
					t.pipes = null, t.pipesCount = 0, t.flowing = !1;
					for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {
						hasUnpiped: !1
					});
					return this
				}
				var a = D(t.pipes, e);
				return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
			}, E.prototype.on = function(e, t) {
				var r = a.prototype.on.call(this, e, t),
					i = this._readableState;
				return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, c("on readable", i.length, i.reading), i.length ? T(this) : i.reading || n.nextTick(B, this))), r
			}, E.prototype.addListener = E.prototype.on, E.prototype.removeListener = function(e, t) {
				var r = a.prototype.removeListener.call(this, e, t);
				return "readable" === e && n.nextTick(I, this), r
			}, E.prototype.removeAllListeners = function(e) {
				var t = a.prototype.removeAllListeners.apply(this, arguments);
				return "readable" !== e && void 0 !== e || n.nextTick(I, this), t
			}, E.prototype.resume = function() {
				var e = this._readableState;
				return e.flowing || (c("resume"), e.flowing = !e.readableListening, function(e, t) {
					t.resumeScheduled || (t.resumeScheduled = !0, n.nextTick(L, e, t))
				}(this, e)), e.paused = !1, this
			}, E.prototype.pause = function() {
				return c("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (c("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
			}, E.prototype.wrap = function(e) {
				var t = this,
					r = this._readableState,
					n = !1;
				for (var i in e.on("end", (function() {
						if (c("wrapped end"), r.decoder && !r.ended) {
							var e = r.decoder.end();
							e && e.length && t.push(e)
						}
						t.push(null)
					})), e.on("data", (function(i) {
						(c("wrapped data"), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()))
					})), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
					return function() {
						return e[t].apply(e, arguments)
					}
				}(i));
				for (var o = 0; o < S.length; o++) e.on(S[o], this.emit.bind(this, S[o]));
				return this._read = function(t) {
					c("wrapped _read", t), n && (n = !1, e.resume())
				}, this
			}, "function" == typeof Symbol && (E.prototype[Symbol.asyncIterator] = function() {
				return void 0 === l && (l = r(274)), l(this)
			}), Object.defineProperty(E.prototype, "readableHighWaterMark", {
				enumerable: !1,
				get: function() {
					return this._readableState.highWaterMark
				}
			}), Object.defineProperty(E.prototype, "readableBuffer", {
				enumerable: !1,
				get: function() {
					return this._readableState && this._readableState.buffer
				}
			}), Object.defineProperty(E.prototype, "readableFlowing", {
				enumerable: !1,
				get: function() {
					return this._readableState.flowing
				},
				set: function(e) {
					this._readableState && (this._readableState.flowing = e)
				}
			}), E._fromList = N, Object.defineProperty(E.prototype, "readableLength", {
				enumerable: !1,
				get: function() {
					return this._readableState.length
				}
			}), "function" == typeof Symbol && (E.from = function(e, t) {
				return void 0 === d && (d = r(275)), d(E, e, t)
			})
		}).call(this, r(6), r(5))
	}, function(e, t, r) {
		e.exports = r(12).EventEmitter
	}, function(e, t, r) {
		"use strict";
		(function(t) {
			function r(e, t) {
				i(e, t), n(e)
			}

			function n(e) {
				e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
			}

			function i(e, t) {
				e.emit("error", t)
			}
			e.exports = {
				destroy: function(e, o) {
					var a = this,
						s = this._readableState && this._readableState.destroyed,
						u = this._writableState && this._writableState.destroyed;
					return s || u ? (o ? o(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, t.nextTick(i, this, e)) : t.nextTick(i, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {
						!o && e ? a._writableState ? a._writableState.errorEmitted ? t.nextTick(n, a) : (a._writableState.errorEmitted = !0, t.nextTick(r, a, e)) : t.nextTick(r, a, e) : o ? (t.nextTick(n, a), o(e)) : t.nextTick(n, a)
					})), this)
				},
				undestroy: function() {
					this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
				},
				errorOrDestroy: function(e, t) {
					var r = e._readableState,
						n = e._writableState;
					r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
				}
			}
		}).call(this, r(5))
	}, function(e, t, r) {
		"use strict";
		var n = r(28).codes.ERR_INVALID_OPT_VALUE;
		e.exports = {
			getHighWaterMark: function(e, t, r, i) {
				var o = function(e, t, r) {
					return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
				}(t, i, r);
				if (null != o) {
					if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r : "highWaterMark", o);
					return Math.floor(o)
				}
				return e.objectMode ? 16 : 16384
			}
		}
	}, function(e, t, r) {
		"use strict";
		(function(t, n) {
			function i(e) {
				var t = this;
				this.next = null, this.entry = null, this.finish = function() {
					! function(e, t, r) {
						var n = e.entry;
						e.entry = null;
						for (; n;) {
							var i = n.callback;
							t.pendingcb--, i(r), n = n.next
						}
						t.corkedRequestsFree.next = e
					}(t, e)
				}
			}
			var o;
			e.exports = E, E.WritableState = x;
			var a = {
					deprecate: r(54)
				},
				s = r(129),
				u = r(2).Buffer,
				c = t.Uint8Array || function() {};
			var f, h = r(130),
				l = r(131).getHighWaterMark,
				d = r(28).codes,
				p = d.ERR_INVALID_ARG_TYPE,
				b = d.ERR_METHOD_NOT_IMPLEMENTED,
				g = d.ERR_MULTIPLE_CALLBACK,
				m = d.ERR_STREAM_CANNOT_PIPE,
				y = d.ERR_STREAM_DESTROYED,
				v = d.ERR_STREAM_NULL_VALUES,
				_ = d.ERR_STREAM_WRITE_AFTER_END,
				w = d.ERR_UNKNOWN_ENCODING,
				M = h.errorOrDestroy;

			function S() {}

			function x(e, t, a) {
				o = o || r(29), e = e || {}, "boolean" != typeof a && (a = t instanceof o), this.objectMode = !!e.objectMode, a && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = l(this, e, "writableHighWaterMark", a), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
				var s = !1 === e.decodeStrings;
				this.decodeStrings = !s, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
					! function(e, t) {
						var r = e._writableState,
							i = r.sync,
							o = r.writecb;
						if ("function" != typeof o) throw new g;
						if (function(e) {
								e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
							}(r), t) ! function(e, t, r, i, o) {
							--t.pendingcb, r ? (n.nextTick(o, i), n.nextTick(O, e, t), e._writableState.errorEmitted = !0, M(e, i)) : (o(i), e._writableState.errorEmitted = !0, M(e, i), O(e, t))
						}(e, r, i, t, o);
						else {
							var a = T(r) || e.destroyed;
							a || r.corked || r.bufferProcessing || !r.bufferedRequest || R(e, r), i ? n.nextTick(A, e, r, a, o) : A(e, r, a, o)
						}
					}(t, e)
				}, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this)
			}

			function E(e) {
				var t = this instanceof(o = o || r(29));
				if (!t && !f.call(E, this)) return new E(e);
				this._writableState = new x(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), s.call(this)
			}

			function k(e, t, r, n, i, o, a) {
				t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new y("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
			}

			function A(e, t, r, n) {
				r || function(e, t) {
					0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
				}(e, t), t.pendingcb--, n(), O(e, t)
			}

			function R(e, t) {
				t.bufferProcessing = !0;
				var r = t.bufferedRequest;
				if (e._writev && r && r.next) {
					var n = t.bufferedRequestCount,
						o = new Array(n),
						a = t.corkedRequestsFree;
					a.entry = r;
					for (var s = 0, u = !0; r;) o[s] = r, r.isBuf || (u = !1), r = r.next, s += 1;
					o.allBuffers = u, k(e, t, !0, t.length, o, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0
				} else {
					for (; r;) {
						var c = r.chunk,
							f = r.encoding,
							h = r.callback;
						if (k(e, t, !1, t.objectMode ? 1 : c.length, c, f, h), r = r.next, t.bufferedRequestCount--, t.writing) break
					}
					null === r && (t.lastBufferedRequest = null)
				}
				t.bufferedRequest = r, t.bufferProcessing = !1
			}

			function T(e) {
				return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
			}

			function C(e, t) {
				e._final((function(r) {
					t.pendingcb--, r && M(e, r), t.prefinished = !0, e.emit("prefinish"), O(e, t)
				}))
			}

			function O(e, t) {
				var r = T(t);
				if (r && (function(e, t) {
						t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, n.nextTick(C, e, t)))
					}(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
					var i = e._readableState;
					(!i || i.autoDestroy && i.endEmitted) && e.destroy()
				}
				return r
			}
			r(3)(E, s), x.prototype.getBuffer = function() {
					for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
					return t
				},
				function() {
					try {
						Object.defineProperty(x.prototype, "buffer", {
							get: a.deprecate((function() {
								return this.getBuffer()
							}), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
						})
					} catch (e) {}
				}(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (f = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, {
					value: function(e) {
						return !!f.call(this, e) || this === E && (e && e._writableState instanceof x)
					}
				})) : f = function(e) {
					return e instanceof this
				}, E.prototype.pipe = function() {
					M(this, new m)
				}, E.prototype.write = function(e, t, r) {
					var i, o = this._writableState,
						a = !1,
						s = !o.objectMode && (i = e, u.isBuffer(i) || i instanceof c);
					return s && !u.isBuffer(e) && (e = function(e) {
						return u.from(e)
					}(e)), "function" == typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = o.defaultEncoding), "function" != typeof r && (r = S), o.ending ? function(e, t) {
						var r = new _;
						M(e, r), n.nextTick(t, r)
					}(this, r) : (s || function(e, t, r, i) {
						var o;
						return null === r ? o = new v : "string" == typeof r || t.objectMode || (o = new p("chunk", ["string", "Buffer"], r)), !o || (M(e, o), n.nextTick(i, o), !1)
					}(this, o, e, r)) && (o.pendingcb++, a = function(e, t, r, n, i, o) {
						if (!r) {
							var a = function(e, t, r) {
								e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = u.from(t, r));
								return t
							}(t, n, i);
							n !== a && (r = !0, i = "buffer", n = a)
						}
						var s = t.objectMode ? 1 : n.length;
						t.length += s;
						var c = t.length < t.highWaterMark;
						c || (t.needDrain = !0);
						if (t.writing || t.corked) {
							var f = t.lastBufferedRequest;
							t.lastBufferedRequest = {
								chunk: n,
								encoding: i,
								isBuf: r,
								callback: o,
								next: null
							}, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
						} else k(e, t, !1, s, n, i, o);
						return c
					}(this, o, s, e, t, r)), a
				}, E.prototype.cork = function() {
					this._writableState.corked++
				}, E.prototype.uncork = function() {
					var e = this._writableState;
					e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || R(this, e))
				}, E.prototype.setDefaultEncoding = function(e) {
					if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new w(e);
					return this._writableState.defaultEncoding = e, this
				}, Object.defineProperty(E.prototype, "writableBuffer", {
					enumerable: !1,
					get: function() {
						return this._writableState && this._writableState.getBuffer()
					}
				}), Object.defineProperty(E.prototype, "writableHighWaterMark", {
					enumerable: !1,
					get: function() {
						return this._writableState.highWaterMark
					}
				}), E.prototype._write = function(e, t, r) {
					r(new b("_write()"))
				}, E.prototype._writev = null, E.prototype.end = function(e, t, r) {
					var i = this._writableState;
					return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || function(e, t, r) {
						t.ending = !0, O(e, t), r && (t.finished ? n.nextTick(r) : e.once("finish", r));
						t.ended = !0, e.writable = !1
					}(this, i, r), this
				}, Object.defineProperty(E.prototype, "writableLength", {
					enumerable: !1,
					get: function() {
						return this._writableState.length
					}
				}), Object.defineProperty(E.prototype, "destroyed", {
					enumerable: !1,
					get: function() {
						return void 0 !== this._writableState && this._writableState.destroyed
					},
					set: function(e) {
						this._writableState && (this._writableState.destroyed = e)
					}
				}), E.prototype.destroy = h.destroy, E.prototype._undestroy = h.undestroy, E.prototype._destroy = function(e, t) {
					t(e)
				}
		}).call(this, r(6), r(5))
	}, function(e, t, r) {
		"use strict";
		e.exports = f;
		var n = r(28).codes,
			i = n.ERR_METHOD_NOT_IMPLEMENTED,
			o = n.ERR_MULTIPLE_CALLBACK,
			a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
			s = n.ERR_TRANSFORM_WITH_LENGTH_0,
			u = r(29);

		function c(e, t) {
			var r = this._transformState;
			r.transforming = !1;
			var n = r.writecb;
			if (null === n) return this.emit("error", new o);
			r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
			var i = this._readableState;
			i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
		}

		function f(e) {
			if (!(this instanceof f)) return new f(e);
			u.call(this, e), this._transformState = {
				afterTransform: c.bind(this),
				needTransform: !1,
				transforming: !1,
				writecb: null,
				writechunk: null,
				writeencoding: null
			}, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", h)
		}

		function h() {
			var e = this;
			"function" != typeof this._flush || this._readableState.destroyed ? l(this, null, null) : this._flush((function(t, r) {
				l(e, t, r)
			}))
		}

		function l(e, t, r) {
			if (t) return e.emit("error", t);
			if (null != r && e.push(r), e._writableState.length) throw new s;
			if (e._transformState.transforming) throw new a;
			return e.push(null)
		}
		r(3)(f, u), f.prototype.push = function(e, t) {
			return this._transformState.needTransform = !1, u.prototype.push.call(this, e, t)
		}, f.prototype._transform = function(e, t, r) {
			r(new i("_transform()"))
		}, f.prototype._write = function(e, t, r) {
			var n = this._transformState;
			if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
				var i = this._readableState;
				(n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
			}
		}, f.prototype._read = function(e) {
			var t = this._transformState;
			null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
		}, f.prototype._destroy = function(e, t) {
			u.prototype._destroy.call(this, e, (function(e) {
				t(e)
			}))
		}
	}, function(e, t, r) {
		var n = r(3),
			i = r(30),
			o = r(13).Buffer,
			a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
			s = new Array(64);

		function u() {
			this.init(), this._w = s, i.call(this, 64, 56)
		}

		function c(e, t, r) {
			return r ^ e & (t ^ r)
		}

		function f(e, t, r) {
			return e & t | r & (e | t)
		}

		function h(e) {
			return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
		}

		function l(e) {
			return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
		}

		function d(e) {
			return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
		}
		n(u, i), u.prototype.init = function() {
			return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
		}, u.prototype._update = function(e) {
			for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, u = 0 | this._e, p = 0 | this._f, b = 0 | this._g, g = 0 | this._h, m = 0; m < 16; ++m) r[m] = e.readInt32BE(4 * m);
			for (; m < 64; ++m) r[m] = 0 | (((t = r[m - 2]) >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10) + r[m - 7] + d(r[m - 15]) + r[m - 16];
			for (var y = 0; y < 64; ++y) {
				var v = g + l(u) + c(u, p, b) + a[y] + r[y] | 0,
					_ = h(n) + f(n, i, o) | 0;
				g = b, b = p, p = u, u = s + v | 0, s = o, o = i, i = n, n = v + _ | 0
			}
			this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = u + this._e | 0, this._f = p + this._f | 0, this._g = b + this._g | 0, this._h = g + this._h | 0
		}, u.prototype._hash = function() {
			var e = o.allocUnsafe(32);
			return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
		}, e.exports = u
	}, function(e, t, r) {
		var n = r(3),
			i = r(30),
			o = r(13).Buffer,
			a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
			s = new Array(160);

		function u() {
			this.init(), this._w = s, i.call(this, 128, 112)
		}

		function c(e, t, r) {
			return r ^ e & (t ^ r)
		}

		function f(e, t, r) {
			return e & t | r & (e | t)
		}

		function h(e, t) {
			return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
		}

		function l(e, t) {
			return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
		}

		function d(e, t) {
			return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
		}

		function p(e, t) {
			return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
		}

		function b(e, t) {
			return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
		}

		function g(e, t) {
			return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
		}

		function m(e, t) {
			return e >>> 0 < t >>> 0 ? 1 : 0
		}
		n(u, i), u.prototype.init = function() {
			return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
		}, u.prototype._update = function(e) {
			for (var t = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, u = 0 | this._fh, y = 0 | this._gh, v = 0 | this._hh, _ = 0 | this._al, w = 0 | this._bl, M = 0 | this._cl, S = 0 | this._dl, x = 0 | this._el, E = 0 | this._fl, k = 0 | this._gl, A = 0 | this._hl, R = 0; R < 32; R += 2) t[R] = e.readInt32BE(4 * R), t[R + 1] = e.readInt32BE(4 * R + 4);
			for (; R < 160; R += 2) {
				var T = t[R - 30],
					C = t[R - 30 + 1],
					O = d(T, C),
					P = p(C, T),
					I = b(T = t[R - 4], C = t[R - 4 + 1]),
					B = g(C, T),
					L = t[R - 14],
					j = t[R - 14 + 1],
					N = t[R - 32],
					U = t[R - 32 + 1],
					q = P + j | 0,
					D = O + L + m(q, P) | 0;
				D = (D = D + I + m(q = q + B | 0, B) | 0) + N + m(q = q + U | 0, U) | 0, t[R] = D, t[R + 1] = q
			}
			for (var H = 0; H < 160; H += 2) {
				D = t[H], q = t[H + 1];
				var z = f(r, n, i),
					F = f(_, w, M),
					W = h(r, _),
					K = h(_, r),
					V = l(s, x),
					J = l(x, s),
					Y = a[H],
					G = a[H + 1],
					Z = c(s, u, y),
					$ = c(x, E, k),
					X = A + J | 0,
					Q = v + V + m(X, A) | 0;
				Q = (Q = (Q = Q + Z + m(X = X + $ | 0, $) | 0) + Y + m(X = X + G | 0, G) | 0) + D + m(X = X + q | 0, q) | 0;
				var ee = K + F | 0,
					te = W + z + m(ee, K) | 0;
				v = y, A = k, y = u, k = E, u = s, E = x, s = o + Q + m(x = S + X | 0, S) | 0, o = i, S = M, i = n, M = w, n = r, w = _, r = Q + te + m(_ = X + ee | 0, X) | 0
			}
			this._al = this._al + _ | 0, this._bl = this._bl + w | 0, this._cl = this._cl + M | 0, this._dl = this._dl + S | 0, this._el = this._el + x | 0, this._fl = this._fl + E | 0, this._gl = this._gl + k | 0, this._hl = this._hl + A | 0, this._ah = this._ah + r + m(this._al, _) | 0, this._bh = this._bh + n + m(this._bl, w) | 0, this._ch = this._ch + i + m(this._cl, M) | 0, this._dh = this._dh + o + m(this._dl, S) | 0, this._eh = this._eh + s + m(this._el, x) | 0, this._fh = this._fh + u + m(this._fl, E) | 0, this._gh = this._gh + y + m(this._gl, k) | 0, this._hh = this._hh + v + m(this._hl, A) | 0
		}, u.prototype._hash = function() {
			var e = o.allocUnsafe(64);

			function t(t, r, n) {
				e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4)
			}
			return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e
		}, e.exports = u
	}, function(e, t) {
		e.exports = function(e) {
			if ("string" != typeof e) throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof e + ", while checking isHexPrefixed.");
			return "0x" === e.slice(0, 2)
		}
	}, function(e, t, r) {
		"use strict";
		const n = (e, t) => function() {
			const r = t.promiseModule,
				n = new Array(arguments.length);
			for (let e = 0; e < arguments.length; e++) n[e] = arguments[e];
			return new r((r, i) => {
				t.errorFirst ? n.push((function(e, n) {
					if (t.multiArgs) {
						const t = new Array(arguments.length - 1);
						for (let e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
						e ? (t.unshift(e), i(t)) : r(t)
					} else e ? i(e) : r(n)
				})) : n.push((function(e) {
					if (t.multiArgs) {
						const e = new Array(arguments.length - 1);
						for (let t = 0; t < arguments.length; t++) e[t] = arguments[t];
						r(e)
					} else r(e)
				})), e.apply(this, n)
			})
		};
		e.exports = (e, t) => {
			t = Object.assign({
				exclude: [/.+(Sync|Stream)$/],
				errorFirst: !0,
				promiseModule: Promise
			}, t);
			const r = e => {
				const r = t => "string" == typeof t ? e === t : t.test(e);
				return t.include ? t.include.some(r) : !t.exclude.some(r)
			};
			let i;
			i = "function" == typeof e ? function() {
				return t.excludeMain ? e.apply(this, arguments) : n(e, t).apply(this, arguments)
			} : Object.create(Object.getPrototypeOf(e));
			for (const o in e) {
				const a = e[o];
				i[o] = "function" == typeof a && r(o) ? n(a, t) : a
			}
			return i
		}
	}, function(e, t, r) {
		const n = r(44),
			i = r(294)();

		function o(e) {
			this.currentProvider = e
		}

		function a(e) {
			return function() {
				const t = this;
				var r = [].slice.call(arguments),
					n = r.pop();
				t.sendAsync({
					method: e,
					params: r
				}, n)
			}
		}

		function s(e, t) {
			return function() {
				const r = this;
				var n = [].slice.call(arguments),
					i = n.pop();
				n.length < e && n.push("latest"), r.sendAsync({
					method: t,
					params: n
				}, i)
			}
		}
		e.exports = o, o.prototype.getBalance = s(2, "eth_getBalance"), o.prototype.getCode = s(2, "eth_getCode"), o.prototype.getTransactionCount = s(2, "eth_getTransactionCount"), o.prototype.getStorageAt = s(3, "eth_getStorageAt"), o.prototype.call = s(2, "eth_call"), o.prototype.protocolVersion = a("eth_protocolVersion"), o.prototype.syncing = a("eth_syncing"), o.prototype.coinbase = a("eth_coinbase"), o.prototype.mining = a("eth_mining"), o.prototype.hashrate = a("eth_hashrate"), o.prototype.gasPrice = a("eth_gasPrice"), o.prototype.accounts = a("eth_accounts"), o.prototype.blockNumber = a("eth_blockNumber"), o.prototype.getBlockTransactionCountByHash = a("eth_getBlockTransactionCountByHash"), o.prototype.getBlockTransactionCountByNumber = a("eth_getBlockTransactionCountByNumber"), o.prototype.getUncleCountByBlockHash = a("eth_getUncleCountByBlockHash"), o.prototype.getUncleCountByBlockNumber = a("eth_getUncleCountByBlockNumber"), o.prototype.sign = a("eth_sign"), o.prototype.sendTransaction = a("eth_sendTransaction"), o.prototype.sendRawTransaction = a("eth_sendRawTransaction"), o.prototype.estimateGas = a("eth_estimateGas"), o.prototype.getBlockByHash = a("eth_getBlockByHash"), o.prototype.getBlockByNumber = a("eth_getBlockByNumber"), o.prototype.getTransactionByHash = a("eth_getTransactionByHash"), o.prototype.getTransactionByBlockHashAndIndex = a("eth_getTransactionByBlockHashAndIndex"), o.prototype.getTransactionByBlockNumberAndIndex = a("eth_getTransactionByBlockNumberAndIndex"), o.prototype.getTransactionReceipt = a("eth_getTransactionReceipt"), o.prototype.getUncleByBlockHashAndIndex = a("eth_getUncleByBlockHashAndIndex"), o.prototype.getUncleByBlockNumberAndIndex = a("eth_getUncleByBlockNumberAndIndex"), o.prototype.getCompilers = a("eth_getCompilers"), o.prototype.compileLLL = a("eth_compileLLL"), o.prototype.compileSolidity = a("eth_compileSolidity"), o.prototype.compileSerpent = a("eth_compileSerpent"), o.prototype.newFilter = a("eth_newFilter"), o.prototype.newBlockFilter = a("eth_newBlockFilter"), o.prototype.newPendingTransactionFilter = a("eth_newPendingTransactionFilter"), o.prototype.uninstallFilter = a("eth_uninstallFilter"), o.prototype.getFilterChanges = a("eth_getFilterChanges"), o.prototype.getFilterLogs = a("eth_getFilterLogs"), o.prototype.getLogs = a("eth_getLogs"), o.prototype.getWork = a("eth_getWork"), o.prototype.submitWork = a("eth_submitWork"), o.prototype.submitHashrate = a("eth_submitHashrate"), o.prototype.sendAsync = function(e, t) {
			var r;
			this.currentProvider.sendAsync((r = e, n({
				id: i(),
				jsonrpc: "2.0",
				params: []
			}, r)), (function(e, r) {
				if (!e && r.error && (e = new Error("EthQuery - RPC Error - " + r.error.message)), e) return t(e);
				t(null, r.result)
			}))
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t, r) {
			((0, n.default)(e) ? l : d)(e, (0, f.default)(t), r)
		};
		var n = h(r(47)),
			i = h(r(145)),
			o = h(r(301)),
			a = h(r(148)),
			s = h(r(38)),
			u = h(r(64)),
			c = h(r(66)),
			f = h(r(23));

		function h(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function l(e, t, r) {
			r = (0, u.default)(r || s.default);
			var n = 0,
				o = 0,
				a = e.length;

			function f(e, t) {
				e ? r(e) : ++o !== a && t !== i.default || r(null)
			}
			for (0 === a && r(null); n < a; n++) t(e[n], n, (0, c.default)(f))
		}
		var d = (0, a.default)(o.default, 1 / 0);
		e.exports = t.default
	}, function(e, t, r) {
		var n = r(141).Symbol;
		e.exports = n
	}, function(e, t, r) {
		var n = r(142),
			i = "object" == typeof self && self && self.Object === Object && self,
			o = n || i || Function("return this")();
		e.exports = o
	}, function(e, t, r) {
		(function(t) {
			var r = "object" == typeof t && t && t.Object === Object && t;
			e.exports = r
		}).call(this, r(6))
	}, function(e, t) {
		e.exports = function(e) {
			var t = typeof e;
			return null != e && ("object" == t || "function" == t)
		}
	}, function(e, t) {
		e.exports = function(e) {
			return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {}, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			return function(t, r, u) {
				if (u = (0, i.default)(u || n.default), e <= 0 || !t) return u(null);
				var c = (0, o.default)(t),
					f = !1,
					h = 0,
					l = !1;

				function d(e, t) {
					if (h -= 1, e) f = !0, u(e);
					else {
						if (t === s.default || f && h <= 0) return f = !0, u(null);
						l || p()
					}
				}

				function p() {
					for (l = !0; h < e && !f;) {
						var t = c();
						if (null === t) return f = !0, void(h <= 0 && u(null));
						h += 1, r(t.value, t.key, (0, a.default)(d))
					}
					l = !1
				}
				p()
			}
		};
		var n = u(r(38)),
			i = u(r(64)),
			o = u(r(302)),
			a = u(r(66)),
			s = u(r(145));

		function u(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = t.default
	}, function(e, t) {
		var r = Array.isArray;
		e.exports = r
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t) {
			return function(r, n, i) {
				return e(r, t, n, i)
			}
		}, e.exports = t.default
	}, function(e, t, r) {
		const n = r(150);

		function i(e) {
			return "never" !== s(e)
		}

		function o(e) {
			var t = a(e);
			return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t)
		}

		function a(e) {
			switch (e.method) {
				case "eth_getStorageAt":
					return 2;
				case "eth_getBalance":
				case "eth_getCode":
				case "eth_getTransactionCount":
				case "eth_call":
				case "eth_estimateGas":
					return 1;
				case "eth_getBlockByNumber":
					return 0;
				default:
					return
			}
		}

		function s(e) {
			switch (e.method) {
				case "web3_clientVersion":
				case "web3_sha3":
				case "eth_protocolVersion":
				case "eth_getBlockTransactionCountByHash":
				case "eth_getUncleCountByBlockHash":
				case "eth_getCode":
				case "eth_getBlockByHash":
				case "eth_getTransactionByHash":
				case "eth_getTransactionByBlockHashAndIndex":
				case "eth_getTransactionReceipt":
				case "eth_getUncleByBlockHashAndIndex":
				case "eth_getCompilers":
				case "eth_compileLLL":
				case "eth_compileSolidity":
				case "eth_compileSerpent":
				case "shh_version":
					return "perma";
				case "eth_getBlockByNumber":
				case "eth_getBlockTransactionCountByNumber":
				case "eth_getUncleCountByBlockNumber":
				case "eth_getTransactionByBlockNumberAndIndex":
				case "eth_getUncleByBlockNumberAndIndex":
					return "fork";
				case "eth_gasPrice":
				case "eth_getBalance":
				case "eth_getStorageAt":
				case "eth_getTransactionCount":
				case "eth_call":
				case "eth_estimateGas":
				case "eth_getFilterLogs":
				case "eth_getLogs":
				case "eth_blockNumber":
					return "block";
				case "net_version":
				case "net_peerCount":
				case "net_listening":
				case "eth_syncing":
				case "eth_sign":
				case "eth_coinbase":
				case "eth_mining":
				case "eth_hashrate":
				case "eth_accounts":
				case "eth_sendTransaction":
				case "eth_sendRawTransaction":
				case "eth_newFilter":
				case "eth_newBlockFilter":
				case "eth_newPendingTransactionFilter":
				case "eth_uninstallFilter":
				case "eth_getFilterChanges":
				case "eth_getWork":
				case "eth_submitWork":
				case "eth_submitHashrate":
				case "db_putString":
				case "db_getString":
				case "db_putHex":
				case "db_getHex":
				case "shh_post":
				case "shh_newIdentity":
				case "shh_hasIdentity":
				case "shh_newGroup":
				case "shh_addToGroup":
				case "shh_newFilter":
				case "shh_uninstallFilter":
				case "shh_getFilterChanges":
				case "shh_getMessages":
					return "never"
			}
		}
		e.exports = {
			cacheIdentifierForPayload: function(e, t = {}) {
				if (!i(e)) return null;
				const {
					includeBlockRef: r
				} = t, a = r ? e.params : o(e);
				return e.method + ":" + n(a)
			},
			canCache: i,
			blockTagForPayload: function(e) {
				var t = a(e);
				if (t >= e.params.length) return null;
				return e.params[t]
			},
			paramsWithoutBlockTag: o,
			blockTagParamIndex: a,
			cacheTypeForPayload: s
		}
	}, function(e, t, r) {
		var n = "undefined" != typeof JSON ? JSON : r(328);
		e.exports = function(e, t) {
			t || (t = {}), "function" == typeof t && (t = {
				cmp: t
			});
			var r = t.space || "";
			"number" == typeof r && (r = Array(r + 1).join(" "));
			var a, s = "boolean" == typeof t.cycles && t.cycles,
				u = t.replacer || function(e, t) {
					return t
				},
				c = t.cmp && (a = t.cmp, function(e) {
					return function(t, r) {
						var n = {
								key: t,
								value: e[t]
							},
							i = {
								key: r,
								value: e[r]
							};
						return a(n, i)
					}
				}),
				f = [];
			return function e(t, a, h, l) {
				var d = r ? "\n" + new Array(l + 1).join(r) : "",
					p = r ? ": " : ":";
				if (h && h.toJSON && "function" == typeof h.toJSON && (h = h.toJSON()), void 0 !== (h = u.call(t, a, h))) {
					if ("object" != typeof h || null === h) return n.stringify(h);
					if (i(h)) {
						for (var b = [], g = 0; g < h.length; g++) {
							var m = e(h, g, h[g], l + 1) || n.stringify(null);
							b.push(d + r + m)
						}
						return "[" + b.join(",") + d + "]"
					}
					if (-1 !== f.indexOf(h)) {
						if (s) return n.stringify("__cycle__");
						throw new TypeError("Converting circular structure to JSON")
					}
					f.push(h);
					var y = o(h).sort(c && c(h));
					for (b = [], g = 0; g < y.length; g++) {
						var v = e(h, a = y[g], h[a], l + 1);
						if (v) {
							var _ = n.stringify(a) + p + v;
							b.push(d + r + _)
						}
					}
					return f.splice(f.indexOf(h), 1), "{" + b.join(",") + d + "}"
				}
			}({
				"": e
			}, "", e, 0)
		};
		var i = Array.isArray || function(e) {
				return "[object Array]" === {}.toString.call(e)
			},
			o = Object.keys || function(e) {
				var t = Object.prototype.hasOwnProperty || function() {
						return !0
					},
					r = [];
				for (var n in e) t.call(e, n) && r.push(n);
				return r
			}
	}, function(e, t, r) {
		const n = r(373).Mutex,
			{
				createAsyncMiddleware: i
			} = r(152),
			o = r(156),
			a = r(346),
			s = r(349),
			u = r(350),
			{
				intToHex: c,
				hexToInt: f
			} = r(39);

		function h(e) {
			return l(async (...t) => {
				const r = await e(...t);
				return c(r.id)
			})
		}

		function l(e) {
			return i(async (t, r) => {
				const n = await e.apply(null, t.params);
				r.result = n
			})
		}

		function d(e, t) {
			const r = [];
			for (let t in e) r.push(e[t]);
			return r
		}
		e.exports = function({
			blockTracker: e,
			provider: t
		}) {
			let r = 0,
				i = {};
			const p = new n,
				b = function({
					mutex: e
				}) {
					return t => async (r, n, i, o) => {
						(await e.acquire())(), t(r, n, i, o)
					}
				}({
					mutex: p
				}),
				g = o({
					eth_newFilter: b(h(y)),
					eth_newBlockFilter: b(h(v)),
					eth_newPendingTransactionFilter: b(h(_)),
					eth_uninstallFilter: b(l(S)),
					eth_getFilterChanges: b(l(w)),
					eth_getFilterLogs: b(l(M))
				}),
				m = async ({
					oldBlock: e,
					newBlock: t
				}) => {
					if (0 === i.length) return;
					const r = await p.acquire();
					try {
						await Promise.all(d(i).map(async r => {
							try {
								await r.update({
									oldBlock: e,
									newBlock: t
								})
							} catch (e) {
								console.error(e)
							}
						}))
					} catch (e) {
						console.error(e)
					}
					r()
				};
			return g.newLogFilter = y, g.newBlockFilter = v, g.newPendingTransactionFilter = _, g.uninstallFilter = S, g.getFilterChanges = w, g.getFilterLogs = M, g.destroy = () => {
				!async function() {
					const e = d(i).length;
					i = {}, E({
						prevFilterCount: e,
						newFilterCount: 0
					})
				}()
			}, g;
			async function y(e) {
				const r = new a({
					provider: t,
					params: e
				});
				await x(r);
				return r
			}
			async function v() {
				const e = new s({
					provider: t
				});
				await x(e);
				return e
			}
			async function _() {
				const e = new u({
					provider: t
				});
				await x(e);
				return e
			}
			async function w(e) {
				const t = f(e),
					r = i[t];
				if (!r) throw new Error(`No filter for index "${t}"`);
				return r.getChangesAndClear()
			}
			async function M(e) {
				const t = f(e),
					r = i[t];
				if (!r) throw new Error(`No filter for index "${t}"`);
				return "log" === r.type ? results = r.getAllResults() : results = [], results
			}
			async function S(e) {
				const t = f(e),
					r = i[t],
					n = Boolean(r);
				return n && await async function(e) {
					const t = d(i).length;
					delete i[e];
					const r = d(i).length;
					E({
						prevFilterCount: t,
						newFilterCount: r
					})
				}(t), n
			}
			async function x(t) {
				const n = d(i).length,
					o = await e.getLatestBlock();
				await t.initialize({
					currentBlock: o
				}), r++, i[r] = t, t.id = r, t.idHex = c(r);
				return E({
					prevFilterCount: n,
					newFilterCount: d(i).length
				}), r
			}

			function E({
				prevFilterCount: t,
				newFilterCount: r
			}) {
				0 === t && r > 0 ? e.on("sync", m) : t > 0 && 0 === r && e.removeListener("sync", m)
			}
		}
	}, function(e, t, r) {
		"use strict";
		var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
				void 0 === n && (n = r), Object.defineProperty(e, n, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, n) {
				void 0 === n && (n = r), e[n] = t[r]
			}),
			i = this && this.__exportStar || function(e, t) {
				for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), i(r(338), t), i(r(339), t), i(r(340), t), i(r(153), t), i(r(154), t), i(r(344), t)
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.getUniqueId = void 0;
		let n = Math.floor(4294967295 * Math.random());
		t.getUniqueId = function() {
			return n = (n + 1) % 4294967295, n
		}
	}, function(e, t, r) {
		"use strict";
		var n = this && this.__importDefault || function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.JsonRpcEngine = void 0;
		const i = n(r(69)),
			o = r(341);
		class a extends i.default {
			constructor() {
				super(), this._middleware = []
			}
			push(e) {
				this._middleware.push(e)
			}
			handle(e, t) {
				if (t && "function" != typeof t) throw new Error('"callback" must be a function if provided.');
				return Array.isArray(e) ? t ? this._handleBatch(e, t) : this._handleBatch(e) : t ? this._handle(e, t) : this._promiseHandle(e)
			}
			asMiddleware() {
				return async (e, t, r, n) => {
					try {
						const [i, o, s] = await a._runAllMiddleware(e, t, this._middleware);
						return o ? (await a._runReturnHandlers(s), n(i)) : r(async e => {
							try {
								await a._runReturnHandlers(s)
							} catch (t) {
								return e(t)
							}
							return e()
						})
					} catch (e) {
						return n(e)
					}
				}
			}
			async _handleBatch(e, t) {
				try {
					const r = await Promise.all(e.map(this._promiseHandle.bind(this)));
					return t ? t(null, r) : r
				} catch (e) {
					if (t) return t(e);
					throw e
				}
			}
			_promiseHandle(e) {
				return new Promise(t => {
					this._handle(e, (e, r) => {
						t(r)
					})
				})
			}
			async _handle(e, t) {
				if (!e || Array.isArray(e) || "object" != typeof e) {
					const r = new o.EthereumRpcError(o.errorCodes.rpc.invalidRequest, "Requests must be plain objects. Received: " + typeof e, {
						request: e
					});
					return t(r, {
						id: void 0,
						jsonrpc: "2.0",
						error: r
					})
				}
				if ("string" != typeof e.method) {
					const r = new o.EthereumRpcError(o.errorCodes.rpc.invalidRequest, "Must specify a string method. Received: " + typeof e.method, {
						request: e
					});
					return t(r, {
						id: e.id,
						jsonrpc: "2.0",
						error: r
					})
				}
				const r = Object.assign({}, e),
					n = {
						id: r.id,
						jsonrpc: r.jsonrpc
					};
				let i = null;
				try {
					await this._processRequest(r, n)
				} catch (e) {
					i = e
				}
				return i && (delete n.result, n.error || (n.error = o.serializeError(i))), t(i, n)
			}
			async _processRequest(e, t) {
				const [r, n, i] = await a._runAllMiddleware(e, t, this._middleware);
				if (a._checkForCompletion(e, t, n), await a._runReturnHandlers(i), r) throw r
			}
			static async _runAllMiddleware(e, t, r) {
				const n = [];
				let i = null,
					o = !1;
				for (const s of r)
					if ([i, o] = await a._runMiddleware(e, t, s, n), o) break;
				return [i, o, n.reverse()]
			}
			static _runMiddleware(e, t, r, n) {
				return new Promise(i => {
					const a = e => {
							const r = e || t.error;
							r && (t.error = o.serializeError(r)), i([r, !0])
						},
						u = r => {
							t.error ? a(t.error) : (r && ("function" != typeof r && a(new o.EthereumRpcError(o.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:\n${s(e)}`, {
								request: e
							})), n.push(r)), i([null, !1]))
						};
					try {
						r(e, t, u, a)
					} catch (e) {
						a(e)
					}
				})
			}
			static async _runReturnHandlers(e) {
				for (const t of e) await new Promise((e, r) => {
					t(t => t ? r(t) : e())
				})
			}
			static _checkForCompletion(e, t, r) {
				if (!("result" in t) && !("error" in t)) throw new o.EthereumRpcError(o.errorCodes.rpc.internal, "JsonRpcEngine: Response has no error or result for request:\n" + s(e), {
					request: e
				});
				if (!r) throw new o.EthereumRpcError(o.errorCodes.rpc.internal, "JsonRpcEngine: Nothing ended request:\n" + s(e), {
					request: e
				})
			}
		}

		function s(e) {
			return JSON.stringify(e, null, 2)
		}
		t.JsonRpcEngine = a
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
		const n = r(71),
			i = r(70),
			o = n.errorCodes.rpc.internal,
			a = {
				code: o,
				message: s(o)
			};

		function s(e, r = "Unspecified error message. This is a bug, please report it.") {
			if (Number.isInteger(e)) {
				const r = e.toString();
				if (h(n.errorValues, r)) return n.errorValues[r].message;
				if (c(e)) return t.JSON_RPC_SERVER_ERROR_MESSAGE
			}
			return r
		}

		function u(e) {
			if (!Number.isInteger(e)) return !1;
			const t = e.toString();
			return !!n.errorValues[t] || !!c(e)
		}

		function c(e) {
			return e >= -32099 && e <= -32e3
		}

		function f(e) {
			return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
		}

		function h(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}
		t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", t.getMessageFromCode = s, t.isValidCode = u, t.serializeError = function(e, {
			fallbackError: t = a,
			shouldIncludeStack: r = !1
		} = {}) {
			var n, o;
			if (!t || !Number.isInteger(t.code) || "string" != typeof t.message) throw new Error("Must provide fallback error with integer number code and string message.");
			if (e instanceof i.EthereumRpcError) return e.serialize();
			const c = {};
			if (e && "object" == typeof e && !Array.isArray(e) && h(e, "code") && u(e.code)) {
				const t = e;
				c.code = t.code, t.message && "string" == typeof t.message ? (c.message = t.message, h(t, "data") && (c.data = t.data)) : (c.message = s(c.code), c.data = {
					originalError: f(e)
				})
			} else {
				c.code = t.code;
				const r = null === (n = e) || void 0 === n ? void 0 : n.message;
				c.message = r && "string" == typeof r ? r : t.message, c.data = {
					originalError: f(e)
				}
			}
			const l = null === (o = e) || void 0 === o ? void 0 : o.stack;
			return r && e && l && "string" == typeof l && (c.stack = l), c
		}
	}, function(e, t, r) {
		e.exports = r(345)
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.getWindowMetadata = void 0;
		const n = r(10);
		t.getWindowMetadata = function() {
			let e, t;
			try {
				e = n.getDocumentOrThrow(), t = n.getLocationOrThrow()
			} catch (e) {
				return null
			}

			function r(...t) {
				const r = e.getElementsByTagName("meta");
				for (let e = 0; e < r.length; e++) {
					const n = r[e],
						i = ["itemprop", "property", "name"].map(e => n.getAttribute(e)).filter(e => !!e && t.includes(e));
					if (i.length && i) {
						const e = n.getAttribute("content");
						if (e) return e
					}
				}
				return ""
			}
			const i = function() {
				let t = r("name", "og:site_name", "og:title", "twitter:title");
				return t || (t = e.title), t
			}();
			return {
				description: r("description", "og:description", "twitter:description", "keywords"),
				url: t.origin,
				icons: function() {
					const r = e.getElementsByTagName("link"),
						n = [];
					for (let e = 0; e < r.length; e++) {
						const i = r[e],
							o = i.getAttribute("rel");
						if (o && o.toLowerCase().indexOf("icon") > -1) {
							const e = i.getAttribute("href");
							if (e)
								if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
									let r = t.protocol + "//" + t.host;
									if (0 === e.indexOf("/")) r += e;
									else {
										const n = t.pathname.split("/");
										n.pop();
										r += n.join("/") + "/" + e
									}
									n.push(r)
								} else if (0 === e.indexOf("//")) {
								const r = t.protocol + e;
								n.push(r)
							} else n.push(e)
						}
					}
					return n
				}(),
				name: i
			}
		}
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			r.d(t, "a", (function() {
				return l
			}));
			var n = function() {
					for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
					var n = Array(e),
						i = 0;
					for (t = 0; t < r; t++)
						for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
					return n
				},
				i = function(e, t, r) {
					this.name = e, this.version = t, this.os = r, this.type = "browser"
				},
				o = function(t) {
					this.version = t, this.type = "node", this.name = "node", this.os = e.platform
				},
				a = function(e, t, r, n) {
					this.name = e, this.version = t, this.os = r, this.bot = n, this.type = "bot-device"
				},
				s = function() {
					this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
				},
				u = function() {
					this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
				},
				c = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
				f = [
					["aol", /AOLShield\/([0-9\._]+)/],
					["edge", /Edge\/([0-9\._]+)/],
					["edge-ios", /EdgiOS\/([0-9\._]+)/],
					["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
					["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
					["samsung", /SamsungBrowser\/([0-9\.]+)/],
					["silk", /\bSilk\/([0-9._-]+)\b/],
					["miui", /MiuiBrowser\/([0-9\.]+)$/],
					["beaker", /BeakerBrowser\/([0-9\.]+)/],
					["edge-chromium", /EdgA?\/([0-9\.]+)/],
					["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
					["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
					["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
					["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
					["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
					["fxios", /FxiOS\/([0-9\.]+)/],
					["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
					["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
					["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
					["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
					["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
					["ie", /MSIE\s(7\.0)/],
					["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
					["android", /Android\s([0-9\.]+)/],
					["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
					["safari", /Version\/([0-9\._]+).*Safari/],
					["facebook", /FBAV\/([0-9\.]+)/],
					["instagram", /Instagram\s([0-9\.]+)/],
					["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
					["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
					["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
				],
				h = [
					["iOS", /iP(hone|od|ad)/],
					["Android OS", /Android/],
					["BlackBerry OS", /BlackBerry|BB10/],
					["Windows Mobile", /IEMobile/],
					["Amazon OS", /Kindle/],
					["Windows 3.11", /Win16/],
					["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
					["Windows 98", /(Windows 98)|(Win98)/],
					["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
					["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
					["Windows Server 2003", /(Windows NT 5.2)/],
					["Windows Vista", /(Windows NT 6.0)/],
					["Windows 7", /(Windows NT 6.1)/],
					["Windows 8", /(Windows NT 6.2)/],
					["Windows 8.1", /(Windows NT 6.3)/],
					["Windows 10", /(Windows NT 10.0)/],
					["Windows ME", /Windows ME/],
					["Open BSD", /OpenBSD/],
					["Sun OS", /SunOS/],
					["Chrome OS", /CrOS/],
					["Linux", /(Linux)|(X11)/],
					["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
					["QNX", /QNX/],
					["BeOS", /BeOS/],
					["OS/2", /OS\/2/]
				];

			function l(t) {
				return t ? p(t) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new u : "undefined" != typeof navigator ? p(navigator.userAgent) : void 0 !== e && e.version ? new o(e.version.slice(1)) : null
			}

			function d(e) {
				return "" !== e && f.reduce((function(t, r) {
					var n = r[0],
						i = r[1];
					if (t) return t;
					var o = i.exec(e);
					return !!o && [n, o]
				}), !1)
			}

			function p(e) {
				var t = d(e);
				if (!t) return null;
				var r = t[0],
					o = t[1];
				if ("searchbot" === r) return new s;
				var u = o[1] && o[1].split(/[._]/).slice(0, 3);
				u ? u.length < 3 && (u = n(u, function(e) {
					for (var t = [], r = 0; r < e; r++) t.push("0");
					return t
				}(3 - u.length))) : u = [];
				var f = u.join("."),
					l = function(e) {
						for (var t = 0, r = h.length; t < r; t++) {
							var n = h[t],
								i = n[0];
							if (n[1].exec(e)) return i
						}
						return null
					}(e),
					p = c.exec(e);
				return p && p[1] ? new a(r, f, l, p[1]) : new i(r, f, l)
			}
		}).call(this, r(5))
	}, function(e, t, r) {
		(function(n, i) {
			var o;
			/**
			 * [js-sha3]{@link https://github.com/emn178/js-sha3}
			 *
			 * @version 0.8.0
			 * @author Chen, Yi-Cyuan [emn178@gmail.com]
			 * @copyright Chen, Yi-Cyuan 2015-2018
			 * @license MIT
			 */
			! function() {
				"use strict";
				var a = "input is invalid type",
					s = "object" == typeof window,
					u = s ? window : {};
				u.JS_SHA3_NO_WINDOW && (s = !1);
				var c = !s && "object" == typeof self;
				!u.JS_SHA3_NO_NODE_JS && "object" == typeof n && n.versions && n.versions.node ? u = i : c && (u = self);
				var f = !u.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports,
					h = r(171),
					l = !u.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
					d = "0123456789abcdef".split(""),
					p = [4, 1024, 262144, 67108864],
					b = [0, 8, 16, 24],
					g = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
					m = [224, 256, 384, 512],
					y = [128, 256],
					v = ["hex", "buffer", "arrayBuffer", "array", "digest"],
					_ = {
						128: 168,
						256: 136
					};
				!u.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
					return "[object Array]" === Object.prototype.toString.call(e)
				}), !l || !u.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
					return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
				});
				for (var w = function(e, t, r) {
						return function(n) {
							return new j(e, t, e).update(n)[r]()
						}
					}, M = function(e, t, r) {
						return function(n, i) {
							return new j(e, t, i).update(n)[r]()
						}
					}, S = function(e, t, r) {
						return function(t, n, i, o) {
							return R["cshake" + e].update(t, n, i, o)[r]()
						}
					}, x = function(e, t, r) {
						return function(t, n, i, o) {
							return R["kmac" + e].update(t, n, i, o)[r]()
						}
					}, E = function(e, t, r, n) {
						for (var i = 0; i < v.length; ++i) {
							var o = v[i];
							e[o] = t(r, n, o)
						}
						return e
					}, k = function(e, t) {
						var r = w(e, t, "hex");
						return r.create = function() {
							return new j(e, t, e)
						}, r.update = function(e) {
							return r.create().update(e)
						}, E(r, w, e, t)
					}, A = [{
						name: "keccak",
						padding: [1, 256, 65536, 16777216],
						bits: m,
						createMethod: k
					}, {
						name: "sha3",
						padding: [6, 1536, 393216, 100663296],
						bits: m,
						createMethod: k
					}, {
						name: "shake",
						padding: [31, 7936, 2031616, 520093696],
						bits: y,
						createMethod: function(e, t) {
							var r = M(e, t, "hex");
							return r.create = function(r) {
								return new j(e, t, r)
							}, r.update = function(e, t) {
								return r.create(t).update(e)
							}, E(r, M, e, t)
						}
					}, {
						name: "cshake",
						padding: p,
						bits: y,
						createMethod: function(e, t) {
							var r = _[e],
								n = S(e, 0, "hex");
							return n.create = function(n, i, o) {
								return i || o ? new j(e, t, n).bytepad([i, o], r) : R["shake" + e].create(n)
							}, n.update = function(e, t, r, i) {
								return n.create(t, r, i).update(e)
							}, E(n, S, e, t)
						}
					}, {
						name: "kmac",
						padding: p,
						bits: y,
						createMethod: function(e, t) {
							var r = _[e],
								n = x(e, 0, "hex");
							return n.create = function(n, i, o) {
								return new N(e, t, i).bytepad(["KMAC", o], r).bytepad([n], r)
							}, n.update = function(e, t, r, i) {
								return n.create(e, r, i).update(t)
							}, E(n, x, e, t)
						}
					}], R = {}, T = [], C = 0; C < A.length; ++C)
					for (var O = A[C], P = O.bits, I = 0; I < P.length; ++I) {
						var B = O.name + "_" + P[I];
						if (T.push(B), R[B] = O.createMethod(P[I], O.padding), "sha3" !== O.name) {
							var L = O.name + P[I];
							T.push(L), R[L] = R[B]
						}
					}

				function j(e, t, r) {
					this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
					for (var n = 0; n < 50; ++n) this.s[n] = 0
				}

				function N(e, t, r) {
					j.call(this, e, t, r)
				}
				j.prototype.update = function(e) {
					if (this.finalized) throw new Error("finalize already called");
					var t, r = typeof e;
					if ("string" !== r) {
						if ("object" !== r) throw new Error(a);
						if (null === e) throw new Error(a);
						if (l && e.constructor === ArrayBuffer) e = new Uint8Array(e);
						else if (!(Array.isArray(e) || l && ArrayBuffer.isView(e))) throw new Error(a);
						t = !0
					}
					for (var n, i, o = this.blocks, s = this.byteCount, u = e.length, c = this.blockCount, f = 0, h = this.s; f < u;) {
						if (this.reset)
							for (this.reset = !1, o[0] = this.block, n = 1; n < c + 1; ++n) o[n] = 0;
						if (t)
							for (n = this.start; f < u && n < s; ++f) o[n >> 2] |= e[f] << b[3 & n++];
						else
							for (n = this.start; f < u && n < s; ++f)(i = e.charCodeAt(f)) < 128 ? o[n >> 2] |= i << b[3 & n++] : i < 2048 ? (o[n >> 2] |= (192 | i >> 6) << b[3 & n++], o[n >> 2] |= (128 | 63 & i) << b[3 & n++]) : i < 55296 || i >= 57344 ? (o[n >> 2] |= (224 | i >> 12) << b[3 & n++], o[n >> 2] |= (128 | i >> 6 & 63) << b[3 & n++], o[n >> 2] |= (128 | 63 & i) << b[3 & n++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++f)), o[n >> 2] |= (240 | i >> 18) << b[3 & n++], o[n >> 2] |= (128 | i >> 12 & 63) << b[3 & n++], o[n >> 2] |= (128 | i >> 6 & 63) << b[3 & n++], o[n >> 2] |= (128 | 63 & i) << b[3 & n++]);
						if (this.lastByteIndex = n, n >= s) {
							for (this.start = n - s, this.block = o[c], n = 0; n < c; ++n) h[n] ^= o[n];
							U(h), this.reset = !0
						} else this.start = n
					}
					return this
				}, j.prototype.encode = function(e, t) {
					var r = 255 & e,
						n = 1,
						i = [r];
					for (r = 255 & (e >>= 8); r > 0;) i.unshift(r), r = 255 & (e >>= 8), ++n;
					return t ? i.push(n) : i.unshift(n), this.update(i), i.length
				}, j.prototype.encodeString = function(e) {
					var t, r = typeof e;
					if ("string" !== r) {
						if ("object" !== r) throw new Error(a);
						if (null === e) throw new Error(a);
						if (l && e.constructor === ArrayBuffer) e = new Uint8Array(e);
						else if (!(Array.isArray(e) || l && ArrayBuffer.isView(e))) throw new Error(a);
						t = !0
					}
					var n = 0,
						i = e.length;
					if (t) n = i;
					else
						for (var o = 0; o < e.length; ++o) {
							var s = e.charCodeAt(o);
							s < 128 ? n += 1 : s < 2048 ? n += 2 : s < 55296 || s >= 57344 ? n += 3 : (s = 65536 + ((1023 & s) << 10 | 1023 & e.charCodeAt(++o)), n += 4)
						}
					return n += this.encode(8 * n), this.update(e), n
				}, j.prototype.bytepad = function(e, t) {
					for (var r = this.encode(t), n = 0; n < e.length; ++n) r += this.encodeString(e[n]);
					var i = t - r % t,
						o = [];
					return o.length = i, this.update(o), this
				}, j.prototype.finalize = function() {
					if (!this.finalized) {
						this.finalized = !0;
						var e = this.blocks,
							t = this.lastByteIndex,
							r = this.blockCount,
							n = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
						for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
						U(n)
					}
				}, j.prototype.toString = j.prototype.hex = function() {
					this.finalize();
					for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, a = 0, s = ""; a < n;) {
						for (o = 0; o < t && a < n; ++o, ++a) e = r[o], s += d[e >> 4 & 15] + d[15 & e] + d[e >> 12 & 15] + d[e >> 8 & 15] + d[e >> 20 & 15] + d[e >> 16 & 15] + d[e >> 28 & 15] + d[e >> 24 & 15];
						a % t == 0 && (U(r), o = 0)
					}
					return i && (e = r[o], s += d[e >> 4 & 15] + d[15 & e], i > 1 && (s += d[e >> 12 & 15] + d[e >> 8 & 15]), i > 2 && (s += d[e >> 20 & 15] + d[e >> 16 & 15])), s
				}, j.prototype.arrayBuffer = function() {
					this.finalize();
					var e, t = this.blockCount,
						r = this.s,
						n = this.outputBlocks,
						i = this.extraBytes,
						o = 0,
						a = 0,
						s = this.outputBits >> 3;
					e = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(s);
					for (var u = new Uint32Array(e); a < n;) {
						for (o = 0; o < t && a < n; ++o, ++a) u[a] = r[o];
						a % t == 0 && U(r)
					}
					return i && (u[o] = r[o], e = e.slice(0, s)), e
				}, j.prototype.buffer = j.prototype.arrayBuffer, j.prototype.digest = j.prototype.array = function() {
					this.finalize();
					for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, a = 0, s = 0, u = []; s < i;) {
						for (a = 0; a < r && s < i; ++a, ++s) e = s << 2, t = n[a], u[e] = 255 & t, u[e + 1] = t >> 8 & 255, u[e + 2] = t >> 16 & 255, u[e + 3] = t >> 24 & 255;
						s % r == 0 && U(n)
					}
					return o && (e = s << 2, t = n[a], u[e] = 255 & t, o > 1 && (u[e + 1] = t >> 8 & 255), o > 2 && (u[e + 2] = t >> 16 & 255)), u
				}, N.prototype = new j, N.prototype.finalize = function() {
					return this.encode(this.outputBits, !0), j.prototype.finalize.call(this)
				};
				var U = function(e) {
					var t, r, n, i, o, a, s, u, c, f, h, l, d, p, b, m, y, v, _, w, M, S, x, E, k, A, R, T, C, O, P, I, B, L, j, N, U, q, D, H, z, F, W, K, V, J, Y, G, Z, $, X, Q, ee, te, re, ne, ie, oe, ae, se, ue, ce, fe;
					for (n = 0; n < 48; n += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], f = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (l = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | s >>> 31), r = (d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (s << 1 | a >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (u << 1 | c >>> 31), r = o ^ (c << 1 | u >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = a ^ (f << 1 | h >>> 31), r = s ^ (h << 1 | f >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = u ^ (l << 1 | d >>> 31), r = c ^ (d << 1 | l >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = f ^ (i << 1 | o >>> 31), r = h ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], b = e[1], J = e[11] << 4 | e[10] >>> 28, Y = e[10] << 4 | e[11] >>> 28, T = e[20] << 3 | e[21] >>> 29, C = e[21] << 3 | e[20] >>> 29, se = e[31] << 9 | e[30] >>> 23, ue = e[30] << 9 | e[31] >>> 23, F = e[40] << 18 | e[41] >>> 14, W = e[41] << 18 | e[40] >>> 14, L = e[2] << 1 | e[3] >>> 31, j = e[3] << 1 | e[2] >>> 31, m = e[13] << 12 | e[12] >>> 20, y = e[12] << 12 | e[13] >>> 20, G = e[22] << 10 | e[23] >>> 22, Z = e[23] << 10 | e[22] >>> 22, O = e[33] << 13 | e[32] >>> 19, P = e[32] << 13 | e[33] >>> 19, ce = e[42] << 2 | e[43] >>> 30, fe = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, N = e[14] << 6 | e[15] >>> 26, U = e[15] << 6 | e[14] >>> 26, v = e[25] << 11 | e[24] >>> 21, _ = e[24] << 11 | e[25] >>> 21, $ = e[34] << 15 | e[35] >>> 17, X = e[35] << 15 | e[34] >>> 17, I = e[45] << 29 | e[44] >>> 3, B = e[44] << 29 | e[45] >>> 3, E = e[6] << 28 | e[7] >>> 4, k = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, q = e[26] << 25 | e[27] >>> 7, D = e[27] << 25 | e[26] >>> 7, w = e[36] << 21 | e[37] >>> 11, M = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, K = e[8] << 27 | e[9] >>> 5, V = e[9] << 27 | e[8] >>> 5, A = e[18] << 20 | e[19] >>> 12, R = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, H = e[38] << 8 | e[39] >>> 24, z = e[39] << 8 | e[38] >>> 24, S = e[48] << 14 | e[49] >>> 18, x = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~m & v, e[1] = b ^ ~y & _, e[10] = E ^ ~A & T, e[11] = k ^ ~R & C, e[20] = L ^ ~N & q, e[21] = j ^ ~U & D, e[30] = K ^ ~J & G, e[31] = V ^ ~Y & Z, e[40] = te ^ ~ne & oe, e[41] = re ^ ~ie & ae, e[2] = m ^ ~v & w, e[3] = y ^ ~_ & M, e[12] = A ^ ~T & O, e[13] = R ^ ~C & P, e[22] = N ^ ~q & H, e[23] = U ^ ~D & z, e[32] = J ^ ~G & $, e[33] = Y ^ ~Z & X, e[42] = ne ^ ~oe & se, e[43] = ie ^ ~ae & ue, e[4] = v ^ ~w & S, e[5] = _ ^ ~M & x, e[14] = T ^ ~O & I, e[15] = C ^ ~P & B, e[24] = q ^ ~H & F, e[25] = D ^ ~z & W, e[34] = G ^ ~$ & Q, e[35] = Z ^ ~X & ee, e[44] = oe ^ ~se & ce, e[45] = ae ^ ~ue & fe, e[6] = w ^ ~S & p, e[7] = M ^ ~x & b, e[16] = O ^ ~I & E, e[17] = P ^ ~B & k, e[26] = H ^ ~F & L, e[27] = z ^ ~W & j, e[36] = $ ^ ~Q & K, e[37] = X ^ ~ee & V, e[46] = se ^ ~ce & te, e[47] = ue ^ ~fe & re, e[8] = S ^ ~p & m, e[9] = x ^ ~b & y, e[18] = I ^ ~E & A, e[19] = B ^ ~k & R, e[28] = F ^ ~L & N, e[29] = W ^ ~j & U, e[38] = Q ^ ~K & J, e[39] = ee ^ ~V & Y, e[48] = ce ^ ~te & ne, e[49] = fe ^ ~re & ie, e[0] ^= g[n], e[1] ^= g[n + 1]
				};
				if (f) e.exports = R;
				else {
					for (C = 0; C < T.length; ++C) u[T[C]] = R[T[C]];
					h && (void 0 === (o = function() {
						return R
					}.call(t, r, t, e)) || (e.exports = o))
				}
			}()
		}).call(this, r(5), r(6))
	}, function(e, t, r) {
		"use strict";
		r(7), r(24);
		var n = r(80);
		r.o(n, "payloadId") && r.d(t, "payloadId", (function() {
			return n.payloadId
		}));
		var i = r(81);
		r.d(t, "payloadId", (function() {
			return i.a
		}));
		r(82), r(83), r(88), r(89)
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			var n = r(1),
				i = r(162);
			const o = void 0 !== e.WebSocket ? e.WebSocket : r(177);
			t.a = class {
				constructor(e) {
					if (this.opts = e, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = e.protocol, this._version = e.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = e.subscriptions || [], this._netMonitor = e.netMonitor || new i.a, !e.url || "string" != typeof e.url) throw new Error("Missing or invalid WebSocket url");
					this._url = e.url, this._netMonitor.on("online", () => this._socketCreate())
				}
				set readyState(e) {}
				get readyState() {
					return this._socket ? this._socket.readyState : -1
				}
				set connecting(e) {}
				get connecting() {
					return 0 === this.readyState
				}
				set connected(e) {}
				get connected() {
					return 1 === this.readyState
				}
				set closing(e) {}
				get closing() {
					return 2 === this.readyState
				}
				set closed(e) {}
				get closed() {
					return 3 === this.readyState
				}
				open() {
					this._socketCreate()
				}
				close() {
					this._socketClose()
				}
				send(e, t, r) {
					if (!t || "string" != typeof t) throw new Error("Missing or invalid topic field");
					this._socketSend({
						topic: t,
						type: "pub",
						payload: e,
						silent: !!r
					})
				}
				subscribe(e) {
					this._socketSend({
						topic: e,
						type: "sub",
						payload: "",
						silent: !0
					})
				}
				on(e, t) {
					this._events.push({
						event: e,
						callback: t
					})
				}
				_socketCreate() {
					if (this._nextSocket) return;
					const e = function(e, t, r) {
						var i, o;
						const a = (e.startsWith("https") ? e.replace("https", "wss") : e.startsWith("http") ? e.replace("http", "ws") : e).split("?"),
							s = Object(n.isBrowser)() ? {
								protocol: t,
								version: r,
								env: "browser",
								host: (null === (i = Object(n.getLocation)()) || void 0 === i ? void 0 : i.host) || ""
							} : {
								protocol: t,
								version: r,
								env: (null === (o = Object(n.detectEnv)()) || void 0 === o ? void 0 : o.name) || ""
							},
							u = Object(n.appendToQueryString)(Object(n.getQueryString)(a[1] || ""), s);
						return a[0] + "?" + u
					}(this._url, this._protocol, this._version);
					if (this._nextSocket = new o(e), !this._nextSocket) throw new Error("Failed to create socket");
					this._nextSocket.onmessage = e => this._socketReceive(e), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = e => this._socketError(e), this._nextSocket.onclose = () => {
						setTimeout(() => {
							this._nextSocket = null, this._socketCreate()
						}, 1e3)
					}
				}
				_socketOpen() {
					this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue()
				}
				_socketClose() {
					this._socket && (this._socket.onclose = () => {}, this._socket.close())
				}
				_socketSend(e) {
					const t = JSON.stringify(e);
					this._socket && 1 === this._socket.readyState ? this._socket.send(t) : (this._setToQueue(e), this._socketCreate())
				}
				async _socketReceive(e) {
					let t;
					try {
						t = JSON.parse(e.data)
					} catch (e) {
						return
					}
					if (this._socketSend({
							topic: t.topic,
							type: "ack",
							payload: "",
							silent: !0
						}), this._socket && 1 === this._socket.readyState) {
						const e = this._events.filter(e => "message" === e.event);
						e && e.length && e.forEach(e => e.callback(t))
					}
				}
				_socketError(e) {
					const t = this._events.filter(e => "error" === e.event);
					t && t.length && t.forEach(t => t.callback(e))
				}
				_queueSubscriptions() {
					this._subscriptions.forEach(e => this._queue.push({
						topic: e,
						type: "sub",
						payload: "",
						silent: !0
					})), this._subscriptions = this.opts.subscriptions || []
				}
				_setToQueue(e) {
					this._queue.push(e)
				}
				_pushQueue() {
					this._queue.forEach(e => this._socketSend(e)), this._queue = []
				}
			}
		}).call(this, r(6))
	}, function(e, t, r) {
		"use strict";
		t.a = class {
			constructor() {
				this._eventEmitters = [], "undefined" != typeof window && void 0 !== window.addEventListener && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")))
			}
			on(e, t) {
				this._eventEmitters.push({
					event: e,
					callback: t
				})
			}
			trigger(e) {
				let t = [];
				e && (t = this._eventEmitters.filter(t => t.event === e)), t.forEach(e => {
					e.callback()
				})
			}
		}
	}, function(e, t, r) {
		"use strict";
		var n = Object.prototype.hasOwnProperty,
			i = "~";

		function o() {}

		function a(e, t, r) {
			this.fn = e, this.context = t, this.once = r || !1
		}

		function s(e, t, r, n, o) {
			if ("function" != typeof r) throw new TypeError("The listener must be a function");
			var s = new a(r, n || e, o),
				u = i ? i + t : t;
			return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], s] : e._events[u].push(s) : (e._events[u] = s, e._eventsCount++), e
		}

		function u(e, t) {
			0 == --e._eventsCount ? e._events = new o : delete e._events[t]
		}

		function c() {
			this._events = new o, this._eventsCount = 0
		}
		Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (i = !1)), c.prototype.eventNames = function() {
			var e, t, r = [];
			if (0 === this._eventsCount) return r;
			for (t in e = this._events) n.call(e, t) && r.push(i ? t.slice(1) : t);
			return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
		}, c.prototype.listeners = function(e) {
			var t = i ? i + e : e,
				r = this._events[t];
			if (!r) return [];
			if (r.fn) return [r.fn];
			for (var n = 0, o = r.length, a = new Array(o); n < o; n++) a[n] = r[n].fn;
			return a
		}, c.prototype.listenerCount = function(e) {
			var t = i ? i + e : e,
				r = this._events[t];
			return r ? r.fn ? 1 : r.length : 0
		}, c.prototype.emit = function(e, t, r, n, o, a) {
			var s = i ? i + e : e;
			if (!this._events[s]) return !1;
			var u, c, f = this._events[s],
				h = arguments.length;
			if (f.fn) {
				switch (f.once && this.removeListener(e, f.fn, void 0, !0), h) {
					case 1:
						return f.fn.call(f.context), !0;
					case 2:
						return f.fn.call(f.context, t), !0;
					case 3:
						return f.fn.call(f.context, t, r), !0;
					case 4:
						return f.fn.call(f.context, t, r, n), !0;
					case 5:
						return f.fn.call(f.context, t, r, n, o), !0;
					case 6:
						return f.fn.call(f.context, t, r, n, o, a), !0
				}
				for (c = 1, u = new Array(h - 1); c < h; c++) u[c - 1] = arguments[c];
				f.fn.apply(f.context, u)
			} else {
				var l, d = f.length;
				for (c = 0; c < d; c++) switch (f[c].once && this.removeListener(e, f[c].fn, void 0, !0), h) {
					case 1:
						f[c].fn.call(f[c].context);
						break;
					case 2:
						f[c].fn.call(f[c].context, t);
						break;
					case 3:
						f[c].fn.call(f[c].context, t, r);
						break;
					case 4:
						f[c].fn.call(f[c].context, t, r, n);
						break;
					default:
						if (!u)
							for (l = 1, u = new Array(h - 1); l < h; l++) u[l - 1] = arguments[l];
						f[c].fn.apply(f[c].context, u)
				}
			}
			return !0
		}, c.prototype.on = function(e, t, r) {
			return s(this, e, t, r, !1)
		}, c.prototype.once = function(e, t, r) {
			return s(this, e, t, r, !0)
		}, c.prototype.removeListener = function(e, t, r, n) {
			var o = i ? i + e : e;
			if (!this._events[o]) return this;
			if (!t) return u(this, o), this;
			var a = this._events[o];
			if (a.fn) a.fn !== t || n && !a.once || r && a.context !== r || u(this, o);
			else {
				for (var s = 0, c = [], f = a.length; s < f; s++)(a[s].fn !== t || n && !a[s].once || r && a[s].context !== r) && c.push(a[s]);
				c.length ? this._events[o] = 1 === c.length ? c[0] : c : u(this, o)
			}
			return this
		}, c.prototype.removeAllListeners = function(e) {
			var t;
			return e ? (t = i ? i + e : e, this._events[t] && u(this, t)) : (this._events = new o, this._eventsCount = 0), this
		}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = i, c.EventEmitter = c, e.exports = c
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			function(e) {
				for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
			}(r(203));
		var n = r(56);
		t.XMLHttpRequestEventTarget = n.XMLHttpRequestEventTarget
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const n = r(166),
			i = n.__importDefault(r(372)),
			o = n.__importDefault(r(178)),
			a = n.__importDefault(r(202)),
			s = r(1),
			u = r(224),
			c = r(332),
			f = r(336),
			h = r(337),
			l = r(351),
			d = r(367),
			p = r(370);
		t.default = class extends u {
			constructor(e) {
				if (super({
						pollingInterval: e.pollingInterval || 8e3
					}), this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModal = o.default, this.qrcodeModalOptions = void 0, this.rpc = null, this.infuraId = "", this.http = null, this.isConnecting = !1, this.connected = !1, this.connectCallbacks = [], this.accounts = [], this.chainId = 10, /* TODO */ this.rpcUrl = "", this.enable = () => n.__awaiter(this, void 0, void 0, (function*() {
						const e = yield this.getWalletConnector();
						if (e) return this.start(), this.subscribeWalletConnector(), e.accounts;
						throw new Error("Failed to connect to WalleConnect")
					})), this.request = e => n.__awaiter(this, void 0, void 0, (function*() {
						return this.send(e)
					})), this.send = (e, t) => n.__awaiter(this, void 0, void 0, (function*() {
						if ("string" == typeof e) {
							const r = e;
							let n = t;
							return "personal_sign" === r && (n = s.parsePersonalSign(n)), this.sendAsyncPromise(r, n)
						}
						if ("personal_sign" === (e = Object.assign({
								id: s.payloadId(),
								jsonrpc: "2.0"
							}, e)).method && (e.params = s.parsePersonalSign(e.params)), !t) return this.sendAsyncPromise(e.method, e.params);
						this.sendAsync(e, t)
					})), this.onConnect = e => {
						this.connectCallbacks.push(e)
					}, this.triggerConnect = e => {
						this.connectCallbacks && this.connectCallbacks.length && this.connectCallbacks.forEach(t => t(e))
					}, this.bridge = e.connector ? e.connector.bridge : e.bridge || "https://bridge.walletconnect.org", this.qrcode = void 0 === e.qrcode || !1 !== e.qrcode, this.qrcodeModal = e.qrcodeModal || this.qrcodeModal, this.qrcodeModalOptions = e.qrcodeModalOptions, this.wc = e.connector || new i.default({
						bridge: this.bridge,
						qrcodeModal: this.qrcode ? this.qrcodeModal : void 0,
						qrcodeModalOptions: this.qrcodeModalOptions,
						storageId: null == e ? void 0 : e.storageId,
						signingMethods: null == e ? void 0 : e.signingMethods,
						clientMeta: null == e ? void 0 : e.clientMeta
					}), this.rpc = e.rpc || null, !(this.rpc || e.infuraId && "string" == typeof e.infuraId && e.infuraId.trim())) throw new Error("Missing one of the required parameters: rpc or infuraId");
				this.infuraId = e.infuraId || "", this.chainId = (null == e ? void 0 : e.chainId) || this.chainId, this.initialize()
			}
			get isWalletConnect() {
				return !0
			}
			get connector() {
				return this.wc
			}
			get walletMeta() {
				return this.wc.peerMeta
			}
			disconnect() {
				return n.__awaiter(this, void 0, void 0, (function*() {
					this.close()
				}))
			}
			close() {
				return n.__awaiter(this, void 0, void 0, (function*() {
					const e = yield this.getWalletConnector({
						disableSessionCreation: !0
					});
					yield e.killSession(), yield this.onDisconnect()
				}))
			}
			handleRequest(e) {
				return n.__awaiter(this, void 0, void 0, (function*() {
					try {
						let t, r = null;
						const n = yield this.getWalletConnector();
						switch (e.method) {
							case "wc_killSession":
								yield this.close(), r = null;
								break;
							case "eth_accounts":
								r = n.accounts;
								break;
							case "eth_coinbase":
								r = n.accounts[0];
								break;
							case "eth_chainId":
							case "net_version":
								r = n.chainId;
								break;
							case "eth_uninstallFilter":
								this.sendAsync(e, e => e), r = !0;
								break;
							default:
								t = yield this.handleOtherRequests(e)
						}
						return t || this.formatResponse(e, r)
					} catch (e) {
						throw this.emit("error", e), e
					}
				}))
			}
			handleOtherRequests(e) {
				return n.__awaiter(this, void 0, void 0, (function*() {
					if (!s.signingMethods.includes(e.method) && e.method.startsWith("eth_")) return this.handleReadRequests(e);
					const t = yield this.getWalletConnector(), r = yield t.sendCustomRequest(e);
					return this.formatResponse(e, r)
				}))
			}
			handleReadRequests(e) {
				return n.__awaiter(this, void 0, void 0, (function*() {
					if (!this.http) {
						const e = new Error("HTTP Connection not available");
						throw this.emit("error", e), e
					}
					return this.http.send(e)
				}))
			}
			formatResponse(e, t) {
				return {
					id: e.id,
					jsonrpc: e.jsonrpc,
					result: t
				}
			}
			getWalletConnector(e = {}) {
				const {
					disableSessionCreation: t = !1
				} = e;
				return new Promise((e, r) => {
					const n = this.wc;
					this.isConnecting ? this.onConnect(t => e(t)) : n.connected || t ? (this.connected || (this.connected = !0, this.updateState(n.session)), e(n)) : (this.isConnecting = !0, n.on("modal_closed", () => {
						r(new Error("User closed modal"))
					}), n.createSession({
						chainId: this.chainId
					}).then(() => {
						n.on("connect", (t, i) => {
							if (t) return this.isConnecting = !1, r(t);
							this.isConnecting = !1, this.connected = !0, i && this.updateState(i.params[0]), this.emit("connect"), this.triggerConnect(n), e(n)
						})
					}).catch(e => {
						this.isConnecting = !1, r(e)
					}))
				})
			}
			subscribeWalletConnector() {
				return n.__awaiter(this, void 0, void 0, (function*() {
					const e = yield this.getWalletConnector();
					e.on("disconnect", e => {
						e ? this.emit("error", e) : this.onDisconnect()
					}), e.on("session_update", (e, t) => {
						e ? this.emit("error", e) : this.updateState(t.params[0])
					})
				}))
			}
			onDisconnect() {
				return n.__awaiter(this, void 0, void 0, (function*() {
					yield this.stop(), this.emit("close", 1e3, "Connection closed"), this.emit("disconnect", 1e3, "Connection disconnected"), this.connected = !1
				}))
			}
			updateState(e) {
				return n.__awaiter(this, void 0, void 0, (function*() {
					const {
						accounts: t,
						chainId: r,
						networkId: n,
						rpcUrl: i
					} = e;
					(!this.accounts || t && this.accounts !== t) && (this.accounts = t, this.emit("accountsChanged", t)), (!this.chainId || r && this.chainId !== r) && (this.chainId = r, this.emit("chainChanged", r)), (!this.networkId || n && this.networkId !== n) && (this.networkId = n, this.emit("networkChanged", n)), this.updateRpcUrl(this.chainId, i || "")
				}))
			}
			updateRpcUrl(e, t = "") {
				const r = {
					infuraId: this.infuraId,
					custom: this.rpc || void 0
				};
				(t = t || s.getRpcUrl(e, r)) ? (this.rpcUrl = t, this.updateHttpConnection()) : this.emit("error", new Error("No RPC Url available for chainId: " + e))
			}
			updateHttpConnection() {
				this.rpcUrl && (this.http = new a.default(this.rpcUrl), this.http.on("payload", e => this.emit("payload", e)), this.http.on("error", e => this.emit("error", e)))
			}
			sendAsyncPromise(e, t) {
				return new Promise((r, n) => {
					this.sendAsync({
						id: s.payloadId(),
						jsonrpc: "2.0",
						method: e,
						params: t || []
					}, (e, t) => {
						e ? n(e) : r(t.result)
					})
				})
			}
			initialize() {
				this.updateRpcUrl(this.chainId), this.addProvider(new f({
					eth_hashrate: "0x00",
					eth_mining: !1,
					eth_syncing: !0,
					net_listening: !0,
					web3_clientVersion: "WalletConnect/v1.x.x/javascript"
				})), this.addProvider(new c), this.addProvider(new p), this.addProvider(new h), this.addProvider(new d), this.addProvider(new l(this.configWallet())), this.addProvider({
					handleRequest: (e, t, r) => n.__awaiter(this, void 0, void 0, (function*() {
						try {
							const {
								error: t,
								result: n
							} = yield this.handleRequest(e);
							r(t, n)
						} catch (e) {
							r(e)
						}
					})),
					setEngine: e => e
				})
			}
			configWallet() {
				return {
					getAccounts: e => n.__awaiter(this, void 0, void 0, (function*() {
						try {
							const t = (yield this.getWalletConnector()).accounts;
							t && t.length ? e(null, t) : e(new Error("Failed to get accounts"))
						} catch (t) {
							e(t)
						}
					})),
					processMessage: (e, t) => n.__awaiter(this, void 0, void 0, (function*() {
						try {
							const r = yield this.getWalletConnector(), n = yield r.signMessage([e.from, e.data]);
							t(null, n)
						} catch (e) {
							t(e)
						}
					})),
					processPersonalMessage: (e, t) => n.__awaiter(this, void 0, void 0, (function*() {
						try {
							const r = yield this.getWalletConnector(), n = yield r.signPersonalMessage([e.data, e.from]);
							t(null, n)
						} catch (e) {
							t(e)
						}
					})),
					processSignTransaction: (e, t) => n.__awaiter(this, void 0, void 0, (function*() {
						try {
							const r = yield this.getWalletConnector(), n = yield r.signTransaction(e);
							t(null, n)
						} catch (e) {
							t(e)
						}
					})),
					processTransaction: (e, t) => n.__awaiter(this, void 0, void 0, (function*() {
						try {
							const r = yield this.getWalletConnector(), n = yield r.sendTransaction(e);
							t(null, n)
						} catch (e) {
							t(e)
						}
					})),
					processTypedMessage: (e, t) => n.__awaiter(this, void 0, void 0, (function*() {
						try {
							const r = yield this.getWalletConnector(), n = yield r.signTypedData([e.from, e.data]);
							t(null, n)
						} catch (e) {
							t(e)
						}
					}))
				}
			}
		}
	}, function(e, t, r) {
		"use strict";
		r.r(t), r.d(t, "__extends", (function() {
			return i
		})), r.d(t, "__assign", (function() {
			return o
		})), r.d(t, "__rest", (function() {
			return a
		})), r.d(t, "__decorate", (function() {
			return s
		})), r.d(t, "__param", (function() {
			return u
		})), r.d(t, "__metadata", (function() {
			return c
		})), r.d(t, "__awaiter", (function() {
			return f
		})), r.d(t, "__generator", (function() {
			return h
		})), r.d(t, "__exportStar", (function() {
			return l
		})), r.d(t, "__values", (function() {
			return d
		})), r.d(t, "__read", (function() {
			return p
		})), r.d(t, "__spread", (function() {
			return b
		})), r.d(t, "__await", (function() {
			return g
		})), r.d(t, "__asyncGenerator", (function() {
			return m
		})), r.d(t, "__asyncDelegator", (function() {
			return y
		})), r.d(t, "__asyncValues", (function() {
			return v
		})), r.d(t, "__makeTemplateObject", (function() {
			return _
		})), r.d(t, "__importStar", (function() {
			return w
		})), r.d(t, "__importDefault", (function() {
			return M
		}));
		/*! *****************************************************************************
		Copyright (c) Microsoft Corporation. All rights reserved.
		Licensed under the Apache License, Version 2.0 (the "License"); you may not use
		this file except in compliance with the License. You may obtain a copy of the
		License at http://www.apache.org/licenses/LICENSE-2.0

		THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
		KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
		WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
		MERCHANTABLITY OR NON-INFRINGEMENT.

		See the Apache Version 2.0 License for specific language governing permissions
		and limitations under the License.
		***************************************************************************** */
		var n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		};

		function i(e, t) {
			function r() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		}
		var o = function() {
			return (o = Object.assign || function(e) {
				for (var t, r = 1, n = arguments.length; r < n; r++)
					for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e
			}).apply(this, arguments)
		};

		function a(e, t) {
			var r = {};
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var i = 0;
				for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && (r[n[i]] = e[n[i]])
			}
			return r
		}

		function s(e, t, r, n) {
			var i, o = arguments.length,
				a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
			else
				for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a);
			return o > 3 && a && Object.defineProperty(t, r, a), a
		}

		function u(e, t) {
			return function(r, n) {
				t(r, n, e)
			}
		}

		function c(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		}

		function f(e, t, r, n) {
			return new(r || (r = Promise))((function(i, o) {
				function a(e) {
					try {
						u(n.next(e))
					} catch (e) {
						o(e)
					}
				}

				function s(e) {
					try {
						u(n.throw(e))
					} catch (e) {
						o(e)
					}
				}

				function u(e) {
					e.done ? i(e.value) : new r((function(t) {
						t(e.value)
					})).then(a, s)
				}
				u((n = n.apply(e, t || [])).next())
			}))
		}

		function h(e, t) {
			var r, n, i, o, a = {
				label: 0,
				sent: function() {
					if (1 & i[0]) throw i[1];
					return i[1]
				},
				trys: [],
				ops: []
			};
			return o = {
				next: s(0),
				throw: s(1),
				return: s(2)
			}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
				return this
			}), o;

			function s(o) {
				return function(s) {
					return function(o) {
						if (r) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
							switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
								case 0:
								case 1:
									i = o;
									break;
								case 4:
									return a.label++, {
										value: o[1],
										done: !1
									};
								case 5:
									a.label++, n = o[1], o = [0];
									continue;
								case 7:
									o = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
										a = 0;
										continue
									}
									if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
										a.label = o[1];
										break
									}
									if (6 === o[0] && a.label < i[1]) {
										a.label = i[1], i = o;
										break
									}
									if (i && a.label < i[2]) {
										a.label = i[2], a.ops.push(o);
										break
									}
									i[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							o = t.call(e, a)
						} catch (e) {
							o = [6, e], n = 0
						} finally {
							r = i = 0
						}
						if (5 & o[0]) throw o[1];
						return {
							value: o[0] ? o[1] : void 0,
							done: !0
						}
					}([o, s])
				}
			}
		}

		function l(e, t) {
			for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
		}

		function d(e) {
			var t = "function" == typeof Symbol && e[Symbol.iterator],
				r = 0;
			return t ? t.call(e) : {
				next: function() {
					return e && r >= e.length && (e = void 0), {
						value: e && e[r++],
						done: !e
					}
				}
			}
		}

		function p(e, t) {
			var r = "function" == typeof Symbol && e[Symbol.iterator];
			if (!r) return e;
			var n, i, o = r.call(e),
				a = [];
			try {
				for (;
					(void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
			} catch (e) {
				i = {
					error: e
				}
			} finally {
				try {
					n && !n.done && (r = o.return) && r.call(o)
				} finally {
					if (i) throw i.error
				}
			}
			return a
		}

		function b() {
			for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
			return e
		}

		function g(e) {
			return this instanceof g ? (this.v = e, this) : new g(e)
		}

		function m(e, t, r) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var n, i = r.apply(e, t || []),
				o = [];
			return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
				return this
			}, n;

			function a(e) {
				i[e] && (n[e] = function(t) {
					return new Promise((function(r, n) {
						o.push([e, t, r, n]) > 1 || s(e, t)
					}))
				})
			}

			function s(e, t) {
				try {
					(r = i[e](t)).value instanceof g ? Promise.resolve(r.value.v).then(u, c) : f(o[0][2], r)
				} catch (e) {
					f(o[0][3], e)
				}
				var r
			}

			function u(e) {
				s("next", e)
			}

			function c(e) {
				s("throw", e)
			}

			function f(e, t) {
				e(t), o.shift(), o.length && s(o[0][0], o[0][1])
			}
		}

		function y(e) {
			var t, r;
			return t = {}, n("next"), n("throw", (function(e) {
				throw e
			})), n("return"), t[Symbol.iterator] = function() {
				return this
			}, t;

			function n(n, i) {
				t[n] = e[n] ? function(t) {
					return (r = !r) ? {
						value: g(e[n](t)),
						done: "return" === n
					} : i ? i(t) : t
				} : i
			}
		}

		function v(e) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var t, r = e[Symbol.asyncIterator];
			return r ? r.call(e) : (e = d(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
				return this
			}, t);

			function n(r) {
				t[r] = e[r] && function(t) {
					return new Promise((function(n, i) {
						(function(e, t, r, n) {
							Promise.resolve(n).then((function(t) {
								e({
									value: t,
									done: r
								})
							}), t)
						})(n, i, (t = e[r](t)).done, t.value)
					}))
				}
			}
		}

		function _(e, t) {
			return Object.defineProperty ? Object.defineProperty(e, "raw", {
				value: t
			}) : e.raw = t, e
		}

		function w(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
			return t.default = e, t
		}

		function M(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function(e, t) {}, function(e, t, r) {
		"use strict";
		t.byteLength = function(e) {
			var t = c(e),
				r = t[0],
				n = t[1];
			return 3 * (r + n) / 4 - n
		}, t.toByteArray = function(e) {
			var t, r, n = c(e),
				a = n[0],
				s = n[1],
				u = new o(function(e, t, r) {
					return 3 * (t + r) / 4 - r
				}(0, a, s)),
				f = 0,
				h = s > 0 ? a - 4 : a;
			for (r = 0; r < h; r += 4) t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)], u[f++] = t >> 16 & 255, u[f++] = t >> 8 & 255, u[f++] = 255 & t;
			2 === s && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, u[f++] = 255 & t);
			1 === s && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, u[f++] = t >> 8 & 255, u[f++] = 255 & t);
			return u
		}, t.fromByteArray = function(e) {
			for (var t, r = e.length, i = r % 3, o = [], a = 0, s = r - i; a < s; a += 16383) o.push(f(e, a, a + 16383 > s ? s : a + 16383));
			1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
			return o.join("")
		};
		for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) n[s] = a[s], i[a.charCodeAt(s)] = s;

		function c(e) {
			var t = e.length;
			if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			var r = e.indexOf("=");
			return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
		}

		function f(e, t, r) {
			for (var i, o, a = [], s = t; s < r; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
			return a.join("")
		}
		i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
	}, function(e, t) {
		/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
		t.read = function(e, t, r, n, i) {
			var o, a, s = 8 * i - n - 1,
				u = (1 << s) - 1,
				c = u >> 1,
				f = -7,
				h = r ? i - 1 : 0,
				l = r ? -1 : 1,
				d = e[t + h];
			for (h += l, o = d & (1 << -f) - 1, d >>= -f, f += s; f > 0; o = 256 * o + e[t + h], h += l, f -= 8);
			for (a = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; a = 256 * a + e[t + h], h += l, f -= 8);
			if (0 === o) o = 1 - c;
			else {
				if (o === u) return a ? NaN : 1 / 0 * (d ? -1 : 1);
				a += Math.pow(2, n), o -= c
			}
			return (d ? -1 : 1) * a * Math.pow(2, o - n)
		}, t.write = function(e, t, r, n, i, o) {
			var a, s, u, c = 8 * o - i - 1,
				f = (1 << c) - 1,
				h = f >> 1,
				l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				d = n ? 0 : o - 1,
				p = n ? 1 : -1,
				b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
			for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = f) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (t += a + h >= 1 ? l / u : l * Math.pow(2, 1 - h)) * u >= 2 && (a++, u /= 2), a + h >= f ? (s = 0, a = f) : a + h >= 1 ? (s = (t * u - 1) * Math.pow(2, i), a += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + d] = 255 & s, d += p, s /= 256, i -= 8);
			for (a = a << i | s, c += i; c > 0; e[r + d] = 255 & a, d += p, a /= 256, c -= 8);
			e[r + d - p] |= 128 * b
		}
	}, function(e, t, r) {
		(function(t) {
			var n = r(79).strict;
			e.exports = function(e) {
				if (n(e)) {
					var r = t.from(e.buffer);
					return e.byteLength !== e.buffer.byteLength && (r = r.slice(e.byteOffset, e.byteOffset + e.byteLength)), r
				}
				return t.from(e)
			}
		}).call(this, r(2).Buffer)
	}, function(e, t) {
		(function(t) {
			e.exports = t
		}).call(this, {})
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			function r() {
				return (null == e ? void 0 : e.crypto) || (null == e ? void 0 : e.msCrypto) || {}
			}

			function n() {
				const e = r();
				return e.subtle || e.webkitSubtle
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = r, t.getSubtleCrypto = n, t.isBrowserCryptoAvailable = function() {
				return !!r() && !!n()
			}
		}).call(this, r(6))
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			function r() {
				return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
			}

			function n() {
				return void 0 !== e && void 0 !== e.versions && void 0 !== e.versions.node
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = r, t.isNode = n, t.isBrowser = function() {
				return !r() && !n()
			}
		}).call(this, r(5))
	}, function(e, t, r) {
		"use strict";
		e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, e => "%" + e.charCodeAt(0).toString(16).toUpperCase())
	}, function(e, t, r) {
		"use strict";
		var n = new RegExp("%[a-f0-9]{2}", "gi"),
			i = new RegExp("(%[a-f0-9]{2})+", "gi");

		function o(e, t) {
			try {
				return decodeURIComponent(e.join(""))
			} catch (e) {}
			if (1 === e.length) return e;
			t = t || 1;
			var r = e.slice(0, t),
				n = e.slice(t);
			return Array.prototype.concat.call([], o(r), o(n))
		}

		function a(e) {
			try {
				return decodeURIComponent(e)
			} catch (i) {
				for (var t = e.match(n), r = 1; r < t.length; r++) t = (e = o(t, r).join("")).match(n);
				return e
			}
		}
		e.exports = function(e) {
			if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
			try {
				return e = e.replace(/\+/g, " "), decodeURIComponent(e)
			} catch (t) {
				return function(e) {
					for (var t = {
							"%FE%FF": "��",
							"%FF%FE": "��"
						}, r = i.exec(e); r;) {
						try {
							t[r[0]] = decodeURIComponent(r[0])
						} catch (e) {
							var n = a(r[0]);
							n !== r[0] && (t[r[0]] = n)
						}
						r = i.exec(e)
					}
					t["%C2"] = "�";
					for (var o = Object.keys(t), s = 0; s < o.length; s++) {
						var u = o[s];
						e = e.replace(new RegExp(u, "g"), t[u])
					}
					return e
				}(e)
			}
		}
	}, function(e, t, r) {
		"use strict";
		e.exports = (e, t) => {
			if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
			if ("" === t) return [e];
			const r = e.indexOf(t);
			return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
		}
	}, function(e, t, r) {
		"use strict";
		e.exports = function() {
			throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
		}
	}, function(e, t, r) {
		(function(t) {
			function n(e) {
				return e && "object" == typeof e && "default" in e ? e.default : e
			}
			var i = r(76),
				o = n(r(179)),
				a = n(r(200)),
				s = r(374);
			"undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));

			function u(e) {
				return s.createElement("div", {
					className: "walletconnect-modal__header"
				}, s.createElement("img", {
					src: "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
					className: "walletconnect-modal__headerLogo"
				}), s.createElement("p", null, "WalletConnect"), s.createElement("div", {
					className: "walletconnect-modal__close__wrapper",
					onClick: e.onClose
				}, s.createElement("div", {
					id: "walletconnect-qrcode-close",
					className: "walletconnect-modal__close__icon"
				}, s.createElement("div", {
					className: "walletconnect-modal__close__line1"
				}), s.createElement("div", {
					className: "walletconnect-modal__close__line2"
				}))))
			}

			function c(e) {
				return s.createElement("a", {
					className: "walletconnect-connect__button",
					href: e.href,
					id: "walletconnect-connect-button-" + e.name,
					onClick: e.onClick,
					rel: "noopener noreferrer",
					style: {
						backgroundColor: e.color
					},
					target: "_blank"
				}, e.name)
			}

			function f(e) {
				var t = e.color,
					r = e.href,
					n = e.name,
					i = e.logo,
					o = e.onClick;
				return s.createElement("a", {
					className: "walletconnect-modal__base__row",
					href: r,
					onClick: o,
					rel: "noopener noreferrer",
					target: "_blank"
				}, s.createElement("h3", {
					className: "walletconnect-modal__base__row__h3"
				}, n), s.createElement("div", {
					className: "walletconnect-modal__base__row__right"
				}, s.createElement("div", {
					className: "walletconnect-modal__base__row__right__app-icon",
					style: {
						background: "url('" + i + "') " + t,
						backgroundSize: "100%"
					}
				}), s.createElement("img", {
					src: "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E",
					className: "walletconnect-modal__base__row__right__caret"
				})))
			}

			function h(e) {
				var t = e.color,
					r = e.href,
					n = e.name,
					i = e.logo,
					o = e.onClick,
					a = window.innerWidth < 768 ? (n.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
				return s.createElement("a", {
					className: "walletconnect-connect__button__icon_anchor",
					href: r,
					onClick: o,
					rel: "noopener noreferrer",
					target: "_blank"
				}, s.createElement("div", {
					className: "walletconnect-connect__button__icon",
					style: {
						background: "url('" + i + "') " + t,
						backgroundSize: "100%"
					}
				}), s.createElement("div", {
					style: {
						fontSize: a
					},
					className: "walletconnect-connect__button__text"
				}, n))
			}

			function l(e) {
				var t = i.isAndroid(),
					r = s.useState(1),
					n = r[0],
					o = r[1],
					a = e.links,
					u = e.errorMessage,
					l = a.length > 5,
					d = Math.ceil(a.length / 12),
					p = [12 * (n - 1) + 1, 12 * n],
					b = a.length ? a.filter((function(e, t) {
						return t + 1 >= p[0] && t + 1 <= p[1]
					})) : [];
				return s.createElement("div", null, s.createElement("p", {
					id: "walletconnect-qrcode-text",
					className: "walletconnect-qrcode__text"
				}, t ? e.text.connect_mobile_wallet : e.text.choose_preferred_wallet), s.createElement("div", {
					className: "walletconnect-connect__buttons__wrapper" + (t ? "__android" : l ? "__wrap" : "")
				}, t ? s.createElement(c, {
					name: e.text.connect,
					color: "rgb(64, 153, 255)",
					href: e.uri,
					onClick: s.useCallback((function() {
						i.saveMobileLinkInfo({
							name: "Unknown",
							href: e.uri
						})
					}), [])
				}) : b.length ? b.map((function(t) {
					var r = t.color,
						n = t.name,
						o = t.shortName,
						a = t.logo,
						u = i.formatIOSMobile(e.uri, t),
						c = s.useCallback((function() {
							i.saveMobileLinkInfo({
								name: n,
								href: u
							})
						}), [b]);
					return l ? s.createElement(h, {
						color: r,
						href: u,
						name: o,
						logo: a,
						onClick: c
					}) : s.createElement(f, {
						color: r,
						href: u,
						name: n,
						logo: a,
						onClick: c
					})
				})) : s.createElement(s.Fragment, null, s.createElement("p", null, u.length ? e.errorMessage : e.text.loading))), !(t || !(d > 1)) && s.createElement("div", {
					className: "walletconnect-modal__footer"
				}, Array(d).fill(0).map((function(e, t) {
					var r = t + 1,
						i = n === r;
					return s.createElement("a", {
						style: {
							margin: "auto 10px",
							fontWeight: i ? "bold" : "normal"
						},
						onClick: function() {
							return o(r)
						}
					}, r)
				}))))
			}

			function d(e) {
				var t = !!e.message.trim();
				return s.createElement("div", {
					className: "walletconnect-qrcode__notification" + (t ? " notification__show" : "")
				}, e.message)
			}

			function p(e) {
				var t = s.useState(""),
					r = t[0],
					n = t[1],
					i = s.useState(""),
					u = i[0],
					c = i[1];
				s.useEffect((function() {
					try {
						return Promise.resolve(function(e) {
							try {
								var t = "";
								return Promise.resolve(o.toString(e, {
									margin: 0,
									type: "svg"
								})).then((function(e) {
									return "string" == typeof e && (t = e.replace("<svg", '<svg class="walletconnect-qrcode__image"')), t
								}))
							} catch (e) {
								return Promise.reject(e)
							}
						}(e.uri)).then((function(e) {
							c(e)
						}))
					} catch (e) {
						Promise.reject(e)
					}
				}), []);
				return s.createElement("div", null, s.createElement("p", {
					id: "walletconnect-qrcode-text",
					className: "walletconnect-qrcode__text"
				}, e.text.scan_qrcode_with_wallet), s.createElement("div", {
					dangerouslySetInnerHTML: {
						__html: u
					}
				}), s.createElement("div", {
					className: "walletconnect-modal__footer"
				}, s.createElement("a", {
					onClick: function() {
						a(e.uri) ? (n(e.text.copied_to_clipboard), setInterval((function() {
							return n("")
						}), 1200)) : (n("Error"), setInterval((function() {
							return n("")
						}), 1200))
					}
				}, e.text.copy_to_clipboard)), s.createElement(d, {
					message: r
				}))
			}

			function b(e) {
				var t = i.isAndroid(),
					r = i.isMobile(),
					n = r ? e.qrcodeModalOptions && e.qrcodeModalOptions.mobileLinks ? e.qrcodeModalOptions.mobileLinks : void 0 : e.qrcodeModalOptions && e.qrcodeModalOptions.desktopLinks ? e.qrcodeModalOptions.desktopLinks : void 0,
					o = s.useState(!1),
					a = o[0],
					c = o[1],
					f = s.useState(!1),
					h = f[0],
					d = f[1],
					b = s.useState(!r),
					g = b[0],
					m = b[1],
					y = {
						mobile: r,
						text: e.text,
						uri: e.uri,
						qrcodeModalOptions: e.qrcodeModalOptions
					},
					v = s.useState(""),
					_ = v[0],
					w = v[1],
					M = s.useState(!1),
					S = M[0],
					x = M[1],
					E = s.useState([]),
					k = E[0],
					A = E[1],
					R = s.useState(""),
					T = R[0],
					C = R[1],
					O = function() {
						h || a || n && !n.length || k.length > 0 || s.useEffect((function() {
							! function() {
								try {
									if (t) return Promise.resolve();
									c(!0);
									var o = function(e, t) {
										try {
											var r = e()
										} catch (e) {
											return t(e)
										}
										return r && r.then ? r.then(void 0, t) : r
									}((function() {
										var t = i.getWalletRegistryUrl();
										return Promise.resolve(fetch(t).then((function(e) {
											return e.json()
										}))).then((function(t) {
											var o = r ? "mobile" : "desktop",
												a = i.getMobileLinkRegistry(i.formatMobileRegistry(t, o), n);
											c(!1), d(!0), C(a.length ? "" : e.text.no_supported_wallets), A(a);
											var s = 1 === a.length;
											s && (w(i.formatIOSMobile(e.uri, a[0])), m(!0)), x(s)
										}))
									}), (function(t) {
										c(!1), d(!0), C(e.text.something_went_wrong), console.error(t)
									}));
									Promise.resolve(o && o.then ? o.then((function() {})) : void 0)
								} catch (e) {
									return Promise.reject(e)
								}
							}()
						}))
					};
				O();
				var P = r ? g : !g;
				return s.createElement("div", {
					id: "walletconnect-qrcode-modal",
					className: "walletconnect-qrcode__base animated fadeIn"
				}, s.createElement("div", {
					className: "walletconnect-modal__base"
				}, s.createElement(u, {
					onClose: e.onClose
				}), S && g ? s.createElement("div", {
					className: "walletconnect-modal__single_wallet"
				}, s.createElement("a", {
					onClick: function() {
						return i.saveMobileLinkInfo({
							name: k[0].name,
							href: _
						})
					},
					href: _,
					rel: "noopener noreferrer",
					target: "_blank"
				}, e.text.connect_with + " " + (S ? k[0].name : "") + " ›")) : t || a || !a && k.length ? s.createElement("div", {
					className: "walletconnect-modal__mobile__toggle" + (P ? " right__selected" : "")
				}, s.createElement("div", {
					className: "walletconnect-modal__mobile__toggle_selector"
				}), r ? s.createElement(s.Fragment, null, s.createElement("a", {
					onClick: function() {
						return m(!1), O()
					}
				}, e.text.mobile), s.createElement("a", {
					onClick: function() {
						return m(!0)
					}
				}, e.text.qrcode)) : s.createElement(s.Fragment, null, s.createElement("a", {
					onClick: function() {
						return m(!0)
					}
				}, e.text.qrcode), s.createElement("a", {
					onClick: function() {
						return m(!1), O()
					}
				}, e.text.desktop))) : null, s.createElement("div", null, g || !t && !a && !k.length ? s.createElement(p, Object.assign({}, y)) : s.createElement(l, Object.assign({}, y, {
					links: k,
					errorMessage: T
				})))))
			}
			var g = {
				de: {
					choose_preferred_wallet: "Wähle bevorzugte Wallet",
					connect_mobile_wallet: "Verbinde mit Mobile Wallet",
					scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
					connect: "Verbinden",
					qrcode: "QR-Code",
					mobile: "Mobile",
					desktop: "Desktop",
					copy_to_clipboard: "In die Zwischenablage kopieren",
					copied_to_clipboard: "In die Zwischenablage kopiert!",
					connect_with: "Verbinden mit Hilfe von",
					loading: "Laden...",
					something_went_wrong: "Etwas ist schief gelaufen",
					no_supported_wallets: "Es gibt noch keine unterstützten Geldbörsen"
				},
				en: {
					choose_preferred_wallet: "Choose your preferred wallet",
					connect_mobile_wallet: "Connect to Mobile Wallet",
					scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
					connect: "Connect",
					qrcode: "QR Code",
					mobile: "Mobile",
					desktop: "Desktop",
					copy_to_clipboard: "Copy to clipboard",
					copied_to_clipboard: "Copied to clipboard!",
					connect_with: "Connect with",
					loading: "Loading...",
					something_went_wrong: "Something went wrong",
					no_supported_wallets: "There are no supported wallets yet"
				},
				es: {
					choose_preferred_wallet: "Elige tu billetera preferida",
					connect_mobile_wallet: "Conectar a billetera móvil",
					scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
					connect: "Conectar",
					qrcode: "Código QR",
					mobile: "Móvil",
					desktop: "Desktop",
					copy_to_clipboard: "Copiar",
					copied_to_clipboard: "Copiado!",
					connect_with: "Conectar mediante",
					loading: "Cargando...",
					something_went_wrong: "Algo salió mal",
					no_supported_wallets: "Todavía no hay monederos compatibles"
				},
				fr: {
					choose_preferred_wallet: "Choisissez votre portefeuille préféré",
					connect_mobile_wallet: "Se connecter au portefeuille mobile",
					scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
					connect: "Se connecter",
					qrcode: "QR Code",
					mobile: "Mobile",
					desktop: "Desktop",
					copy_to_clipboard: "Copier",
					copied_to_clipboard: "Copié!",
					connect_with: "Connectez-vous à l'aide de",
					loading: "Chargement...",
					something_went_wrong: "Quelque chose a mal tourné",
					no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge"
				},
				ko: {
					choose_preferred_wallet: "원하는 지갑을 선택하세요",
					connect_mobile_wallet: "모바일 지갑과 연결",
					scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
					connect: "연결",
					qrcode: "QR 코드",
					mobile: "모바일",
					desktop: "데스크탑",
					copy_to_clipboard: "클립보드에 복사",
					copied_to_clipboard: "클립보드에 복사되었습니다!",
					connect_with: "와 연결하다",
					loading: "로드 중...",
					something_went_wrong: "문제가 발생했습니다.",
					no_supported_wallets: "아직 지원되는 지갑이 없습니다"
				},
				pt: {
					choose_preferred_wallet: "Escolha sua carteira preferida",
					connect_mobile_wallet: "Conectar-se à carteira móvel",
					scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
					connect: "Conectar",
					qrcode: "Código QR",
					mobile: "Móvel",
					desktop: "Desktop",
					copy_to_clipboard: "Copiar",
					copied_to_clipboard: "Copiado!",
					connect_with: "Ligar por meio de",
					loading: "Carregamento...",
					something_went_wrong: "Algo correu mal",
					no_supported_wallets: "Ainda não há carteiras suportadas"
				},
				zh: {
					choose_preferred_wallet: "选择你的钱包",
					connect_mobile_wallet: "连接至移动端钱包",
					scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
					connect: "连接",
					qrcode: "二维码",
					mobile: "移动",
					desktop: "桌面",
					copy_to_clipboard: "复制到剪贴板",
					copied_to_clipboard: "复制到剪贴板成功！",
					connect_with: "通过以下方式连接",
					loading: "正在加载...",
					something_went_wrong: "出了问题",
					no_supported_wallets: "目前还没有支持的钱包"
				},
				fa: {
					choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
					connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
					scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
					connect: "اتصال",
					qrcode: "کد QR",
					mobile: "سیار",
					desktop: "دسکتاپ",
					copy_to_clipboard: "کپی به کلیپ بورد",
					copied_to_clipboard: "در کلیپ بورد کپی شد!",
					connect_with: "ارتباط با",
					loading: "...بارگذاری",
					something_went_wrong: "مشکلی پیش آمد",
					no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد"
				}
			};

			function m() {
				var e = i.getDocumentOrThrow(),
					t = e.getElementById("walletconnect-qrcode-modal");
				t && (t.className = t.className.replace("fadeIn", "fadeOut"), setTimeout((function() {
					var t = e.getElementById("walletconnect-wrapper");
					t && e.body.removeChild(t)
				}), 300))
			}

			function y(e) {
				return function() {
					m(), e && e()
				}
			}

			function v(e, t, r) {
				! function() {
					var e = i.getDocumentOrThrow(),
						t = e.getElementById("walletconnect-style-sheet");
					t && e.head.removeChild(t);
					var r = e.createElement("style");
					r.setAttribute("id", "walletconnect-style-sheet"), r.innerText = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 30px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n', e.head.appendChild(r)
				}();
				var n, o = function() {
					var e = i.getDocumentOrThrow(),
						t = e.createElement("div");
					return t.setAttribute("id", "walletconnect-wrapper"), e.body.appendChild(t), t
				}();
				s.render(s.createElement(b, {
					text: (n = i.getNavigatorOrThrow().language.split("-")[0] || "en", g[n] || g.en),
					uri: e,
					onClose: y(t),
					qrcodeModalOptions: r
				}), o)
			}
			var _ = function() {
				return void 0 !== t && void 0 !== t.versions && void 0 !== t.versions.node
			};
			var w = {
				open: function(e, t, r) {
					console.log(e), _() ? function(e) {
						o.toString(e, {
							type: "terminal"
						}).then(console.log)
					}(e) : v(e, t, r)
				},
				close: function() {
					_() || m()
				}
			};
			e.exports = w
		}).call(this, r(5))
	}, function(e, t, r) {
		var n = r(180),
			i = r(181),
			o = r(198),
			a = r(199);

		function s(e, t, r, o, a) {
			var s = [].slice.call(arguments, 1),
				u = s.length,
				c = "function" == typeof s[u - 1];
			if (!c && !n()) throw new Error("Callback required as last argument");
			if (!c) {
				if (u < 1) throw new Error("Too few arguments provided");
				return 1 === u ? (r = t, t = o = void 0) : 2 !== u || t.getContext || (o = r, r = t, t = void 0), new Promise((function(n, a) {
					try {
						var s = i.create(r, o);
						n(e(s, t, o))
					} catch (e) {
						a(e)
					}
				}))
			}
			if (u < 2) throw new Error("Too few arguments provided");
			2 === u ? (a = r, r = t, t = o = void 0) : 3 === u && (t.getContext && void 0 === a ? (a = o, o = void 0) : (a = o, o = r, r = t, t = void 0));
			try {
				var f = i.create(r, o);
				a(null, e(f, t, o))
			} catch (e) {
				a(e)
			}
		}
		t.create = i.create, t.toCanvas = s.bind(null, o.render), t.toDataURL = s.bind(null, o.renderToDataURL), t.toString = s.bind(null, (function(e, t, r) {
			return a.render(e, r)
		}))
	}, function(e, t) {
		e.exports = function() {
			return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
		}
	}, function(e, t, r) {
		var n = r(25),
			i = r(17),
			o = r(51),
			a = r(182),
			s = r(183),
			u = r(184),
			c = r(185),
			f = r(186),
			h = r(98),
			l = r(187),
			d = r(190),
			p = r(191),
			b = r(18),
			g = r(192),
			m = r(50);

		function y(e, t, r) {
			var n, i, o = e.size,
				a = p.getEncodedBits(t, r);
			for (n = 0; n < 15; n++) i = 1 == (a >> n & 1), n < 6 ? e.set(n, 8, i, !0) : n < 8 ? e.set(n + 1, 8, i, !0) : e.set(o - 15 + n, 8, i, !0), n < 8 ? e.set(8, o - n - 1, i, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, i, !0) : e.set(8, 15 - n - 1, i, !0);
			e.set(o - 8, 8, 1, !0)
		}

		function v(e, t, r) {
			var o = new a;
			r.forEach((function(t) {
				o.put(t.mode.bit, 4), o.put(t.getLength(), b.getCharCountIndicator(t.mode, e)), t.write(o)
			}));
			var s = 8 * (i.getSymbolTotalCodewords(e) - h.getTotalCodewordsCount(e, t));
			for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
			for (var u = (s - o.getLengthInBits()) / 8, c = 0; c < u; c++) o.put(c % 2 ? 17 : 236, 8);
			return function(e, t, r) {
				for (var o = i.getSymbolTotalCodewords(t), a = h.getTotalCodewordsCount(t, r), s = o - a, u = h.getBlocksCount(t, r), c = u - o % u, f = Math.floor(o / u), d = Math.floor(s / u), p = d + 1, b = f - d, g = new l(b), m = 0, y = new Array(u), v = new Array(u), _ = 0, w = n.from(e.buffer), M = 0; M < u; M++) {
					var S = M < c ? d : p;
					y[M] = w.slice(m, m + S), v[M] = g.encode(y[M]), m += S, _ = Math.max(_, S)
				}
				var x, E, k = n.alloc(o),
					A = 0;
				for (x = 0; x < _; x++)
					for (E = 0; E < u; E++) x < y[E].length && (k[A++] = y[E][x]);
				for (x = 0; x < b; x++)
					for (E = 0; E < u; E++) k[A++] = v[E][x];
				return k
			}(o, e, t)
		}

		function _(e, t, r, n) {
			var o;
			if (m(e)) o = g.fromArray(e);
			else {
				if ("string" != typeof e) throw new Error("Invalid data");
				var a = t;
				if (!a) {
					var h = g.rawSplit(e);
					a = d.getBestVersionForData(h, r)
				}
				o = g.fromString(e, a || 40)
			}
			var l = d.getBestVersionForData(o, r);
			if (!l) throw new Error("The amount of data is too big to be stored in a QR Code");
			if (t) {
				if (t < l) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + l + ".\n")
			} else t = l;
			var p = v(t, r, o),
				b = i.getSymbolSize(t),
				_ = new s(b);
			return function(e, t) {
					for (var r = e.size, n = c.getPositions(t), i = 0; i < n.length; i++)
						for (var o = n[i][0], a = n[i][1], s = -1; s <= 7; s++)
							if (!(o + s <= -1 || r <= o + s))
								for (var u = -1; u <= 7; u++) a + u <= -1 || r <= a + u || (s >= 0 && s <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && u >= 2 && u <= 4 ? e.set(o + s, a + u, !0, !0) : e.set(o + s, a + u, !1, !0))
				}(_, t),
				function(e) {
					for (var t = e.size, r = 8; r < t - 8; r++) {
						var n = r % 2 == 0;
						e.set(r, 6, n, !0), e.set(6, r, n, !0)
					}
				}(_),
				function(e, t) {
					for (var r = u.getPositions(t), n = 0; n < r.length; n++)
						for (var i = r[n][0], o = r[n][1], a = -2; a <= 2; a++)
							for (var s = -2; s <= 2; s++) - 2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? e.set(i + a, o + s, !0, !0) : e.set(i + a, o + s, !1, !0)
				}(_, t), y(_, r, 0), t >= 7 && function(e, t) {
					for (var r, n, i, o = e.size, a = d.getEncodedBits(t), s = 0; s < 18; s++) r = Math.floor(s / 3), n = s % 3 + o - 8 - 3, i = 1 == (a >> s & 1), e.set(r, n, i, !0), e.set(n, r, i, !0)
				}(_, t),
				function(e, t) {
					for (var r = e.size, n = -1, i = r - 1, o = 7, a = 0, s = r - 1; s > 0; s -= 2)
						for (6 === s && s--;;) {
							for (var u = 0; u < 2; u++)
								if (!e.isReserved(i, s - u)) {
									var c = !1;
									a < t.length && (c = 1 == (t[a] >>> o & 1)), e.set(i, s - u, c), -1 === --o && (a++, o = 7)
								} if ((i += n) < 0 || r <= i) {
								i -= n, n = -n;
								break
							}
						}
				}(_, p), isNaN(n) && (n = f.getBestMask(_, y.bind(null, _, r))), f.applyMask(n, _), y(_, r, n), {
					modules: _,
					version: t,
					errorCorrectionLevel: r,
					maskPattern: n,
					segments: o
				}
		}
		t.create = function(e, t) {
			if (void 0 === e || "" === e) throw new Error("No input text");
			var r, n, a = o.M;
			return void 0 !== t && (a = o.from(t.errorCorrectionLevel, o.M), r = d.from(t.version), n = f.from(t.maskPattern), t.toSJISFunc && i.setToSJISFunction(t.toSJISFunc)), _(e, r, a, n)
		}
	}, function(e, t) {
		function r() {
			this.buffer = [], this.length = 0
		}
		r.prototype = {
			get: function(e) {
				var t = Math.floor(e / 8);
				return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
			},
			put: function(e, t) {
				for (var r = 0; r < t; r++) this.putBit(1 == (e >>> t - r - 1 & 1))
			},
			getLengthInBits: function() {
				return this.length
			},
			putBit: function(e) {
				var t = Math.floor(this.length / 8);
				this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
			}
		}, e.exports = r
	}, function(e, t, r) {
		var n = r(25);

		function i(e) {
			if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
			this.size = e, this.data = n.alloc(e * e), this.reservedBit = n.alloc(e * e)
		}
		i.prototype.set = function(e, t, r, n) {
			var i = e * this.size + t;
			this.data[i] = r, n && (this.reservedBit[i] = !0)
		}, i.prototype.get = function(e, t) {
			return this.data[e * this.size + t]
		}, i.prototype.xor = function(e, t, r) {
			this.data[e * this.size + t] ^= r
		}, i.prototype.isReserved = function(e, t) {
			return this.reservedBit[e * this.size + t]
		}, e.exports = i
	}, function(e, t, r) {
		var n = r(17).getSymbolSize;
		t.getRowColCoords = function(e) {
			if (1 === e) return [];
			for (var t = Math.floor(e / 7) + 2, r = n(e), i = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)), o = [r - 7], a = 1; a < t - 1; a++) o[a] = o[a - 1] - i;
			return o.push(6), o.reverse()
		}, t.getPositions = function(e) {
			for (var r = [], n = t.getRowColCoords(e), i = n.length, o = 0; o < i; o++)
				for (var a = 0; a < i; a++) 0 === o && 0 === a || 0 === o && a === i - 1 || o === i - 1 && 0 === a || r.push([n[o], n[a]]);
			return r
		}
	}, function(e, t, r) {
		var n = r(17).getSymbolSize;
		t.getPositions = function(e) {
			var t = n(e);
			return [
				[0, 0],
				[t - 7, 0],
				[0, t - 7]
			]
		}
	}, function(e, t) {
		t.Patterns = {
			PATTERN000: 0,
			PATTERN001: 1,
			PATTERN010: 2,
			PATTERN011: 3,
			PATTERN100: 4,
			PATTERN101: 5,
			PATTERN110: 6,
			PATTERN111: 7
		};
		var r = 3,
			n = 3,
			i = 40,
			o = 10;

		function a(e, r, n) {
			switch (e) {
				case t.Patterns.PATTERN000:
					return (r + n) % 2 == 0;
				case t.Patterns.PATTERN001:
					return r % 2 == 0;
				case t.Patterns.PATTERN010:
					return n % 3 == 0;
				case t.Patterns.PATTERN011:
					return (r + n) % 3 == 0;
				case t.Patterns.PATTERN100:
					return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
				case t.Patterns.PATTERN101:
					return r * n % 2 + r * n % 3 == 0;
				case t.Patterns.PATTERN110:
					return (r * n % 2 + r * n % 3) % 2 == 0;
				case t.Patterns.PATTERN111:
					return (r * n % 3 + (r + n) % 2) % 2 == 0;
				default:
					throw new Error("bad maskPattern:" + e)
			}
		}
		t.isValid = function(e) {
			return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
		}, t.from = function(e) {
			return t.isValid(e) ? parseInt(e, 10) : void 0
		}, t.getPenaltyN1 = function(e) {
			for (var t = e.size, n = 0, i = 0, o = 0, a = null, s = null, u = 0; u < t; u++) {
				i = o = 0, a = s = null;
				for (var c = 0; c < t; c++) {
					var f = e.get(u, c);
					f === a ? i++ : (i >= 5 && (n += r + (i - 5)), a = f, i = 1), (f = e.get(c, u)) === s ? o++ : (o >= 5 && (n += r + (o - 5)), s = f, o = 1)
				}
				i >= 5 && (n += r + (i - 5)), o >= 5 && (n += r + (o - 5))
			}
			return n
		}, t.getPenaltyN2 = function(e) {
			for (var t = e.size, r = 0, i = 0; i < t - 1; i++)
				for (var o = 0; o < t - 1; o++) {
					var a = e.get(i, o) + e.get(i, o + 1) + e.get(i + 1, o) + e.get(i + 1, o + 1);
					4 !== a && 0 !== a || r++
				}
			return r * n
		}, t.getPenaltyN3 = function(e) {
			for (var t = e.size, r = 0, n = 0, o = 0, a = 0; a < t; a++) {
				n = o = 0;
				for (var s = 0; s < t; s++) n = n << 1 & 2047 | e.get(a, s), s >= 10 && (1488 === n || 93 === n) && r++, o = o << 1 & 2047 | e.get(s, a), s >= 10 && (1488 === o || 93 === o) && r++
			}
			return r * i
		}, t.getPenaltyN4 = function(e) {
			for (var t = 0, r = e.data.length, n = 0; n < r; n++) t += e.data[n];
			return Math.abs(Math.ceil(100 * t / r / 5) - 10) * o
		}, t.applyMask = function(e, t) {
			for (var r = t.size, n = 0; n < r; n++)
				for (var i = 0; i < r; i++) t.isReserved(i, n) || t.xor(i, n, a(e, i, n))
		}, t.getBestMask = function(e, r) {
			for (var n = Object.keys(t.Patterns).length, i = 0, o = 1 / 0, a = 0; a < n; a++) {
				r(a), t.applyMask(a, e);
				var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
				t.applyMask(a, e), s < o && (o = s, i = a)
			}
			return i
		}
	}, function(e, t, r) {
		var n = r(25),
			i = r(188),
			o = r(2).Buffer;

		function a(e) {
			this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
		}
		a.prototype.initialize = function(e) {
			this.degree = e, this.genPoly = i.generateECPolynomial(this.degree)
		}, a.prototype.encode = function(e) {
			if (!this.genPoly) throw new Error("Encoder not initialized");
			var t = n.alloc(this.degree),
				r = o.concat([e, t], e.length + this.degree),
				a = i.mod(r, this.genPoly),
				s = this.degree - a.length;
			if (s > 0) {
				var u = n.alloc(this.degree);
				return a.copy(u, s), u
			}
			return a
		}, e.exports = a
	}, function(e, t, r) {
		var n = r(25),
			i = r(189);
		t.mul = function(e, t) {
			for (var r = n.alloc(e.length + t.length - 1), o = 0; o < e.length; o++)
				for (var a = 0; a < t.length; a++) r[o + a] ^= i.mul(e[o], t[a]);
			return r
		}, t.mod = function(e, t) {
			for (var r = n.from(e); r.length - t.length >= 0;) {
				for (var o = r[0], a = 0; a < t.length; a++) r[a] ^= i.mul(t[a], o);
				for (var s = 0; s < r.length && 0 === r[s];) s++;
				r = r.slice(s)
			}
			return r
		}, t.generateECPolynomial = function(e) {
			for (var r = n.from([1]), o = 0; o < e; o++) r = t.mul(r, [1, i.exp(o)]);
			return r
		}
	}, function(e, t, r) {
		var n = r(25),
			i = n.alloc(512),
			o = n.alloc(256);
		! function() {
			for (var e = 1, t = 0; t < 255; t++) i[t] = e, o[e] = t, 256 & (e <<= 1) && (e ^= 285);
			for (t = 255; t < 512; t++) i[t] = i[t - 255]
		}(), t.log = function(e) {
			if (e < 1) throw new Error("log(" + e + ")");
			return o[e]
		}, t.exp = function(e) {
			return i[e]
		}, t.mul = function(e, t) {
			return 0 === e || 0 === t ? 0 : i[o[e] + o[t]]
		}
	}, function(e, t, r) {
		var n = r(17),
			i = r(98),
			o = r(51),
			a = r(18),
			s = r(99),
			u = r(50),
			c = n.getBCHDigit(7973);

		function f(e, t) {
			return a.getCharCountIndicator(e, t) + 4
		}

		function h(e, t) {
			var r = 0;
			return e.forEach((function(e) {
				var n = f(e.mode, t);
				r += n + e.getBitsLength()
			})), r
		}
		t.from = function(e, t) {
			return s.isValid(e) ? parseInt(e, 10) : t
		}, t.getCapacity = function(e, t, r) {
			if (!s.isValid(e)) throw new Error("Invalid QR Code version");
			void 0 === r && (r = a.BYTE);
			var o = 8 * (n.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t));
			if (r === a.MIXED) return o;
			var u = o - f(r, e);
			switch (r) {
				case a.NUMERIC:
					return Math.floor(u / 10 * 3);
				case a.ALPHANUMERIC:
					return Math.floor(u / 11 * 2);
				case a.KANJI:
					return Math.floor(u / 13);
				case a.BYTE:
				default:
					return Math.floor(u / 8)
			}
		}, t.getBestVersionForData = function(e, r) {
			var n, i = o.from(r, o.M);
			if (u(e)) {
				if (e.length > 1) return function(e, r) {
					for (var n = 1; n <= 40; n++) {
						if (h(e, n) <= t.getCapacity(n, r, a.MIXED)) return n
					}
				}(e, i);
				if (0 === e.length) return 1;
				n = e[0]
			} else n = e;
			return function(e, r, n) {
				for (var i = 1; i <= 40; i++)
					if (r <= t.getCapacity(i, n, e)) return i
			}(n.mode, n.getLength(), i)
		}, t.getEncodedBits = function(e) {
			if (!s.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
			for (var t = e << 12; n.getBCHDigit(t) - c >= 0;) t ^= 7973 << n.getBCHDigit(t) - c;
			return e << 12 | t
		}
	}, function(e, t, r) {
		var n = r(17),
			i = n.getBCHDigit(1335);
		t.getEncodedBits = function(e, t) {
			for (var r = e.bit << 3 | t, o = r << 10; n.getBCHDigit(o) - i >= 0;) o ^= 1335 << n.getBCHDigit(o) - i;
			return 21522 ^ (r << 10 | o)
		}
	}, function(e, t, r) {
		var n = r(18),
			i = r(193),
			o = r(194),
			a = r(195),
			s = r(196),
			u = r(100),
			c = r(17),
			f = r(197);

		function h(e) {
			return unescape(encodeURIComponent(e)).length
		}

		function l(e, t, r) {
			for (var n, i = []; null !== (n = e.exec(r));) i.push({
				data: n[0],
				index: n.index,
				mode: t,
				length: n[0].length
			});
			return i
		}

		function d(e) {
			var t, r, i = l(u.NUMERIC, n.NUMERIC, e),
				o = l(u.ALPHANUMERIC, n.ALPHANUMERIC, e);
			return c.isKanjiModeEnabled() ? (t = l(u.BYTE, n.BYTE, e), r = l(u.KANJI, n.KANJI, e)) : (t = l(u.BYTE_KANJI, n.BYTE, e), r = []), i.concat(o, t, r).sort((function(e, t) {
				return e.index - t.index
			})).map((function(e) {
				return {
					data: e.data,
					mode: e.mode,
					length: e.length
				}
			}))
		}

		function p(e, t) {
			switch (t) {
				case n.NUMERIC:
					return i.getBitsLength(e);
				case n.ALPHANUMERIC:
					return o.getBitsLength(e);
				case n.KANJI:
					return s.getBitsLength(e);
				case n.BYTE:
					return a.getBitsLength(e)
			}
		}

		function b(e, t) {
			var r, u = n.getBestModeForData(e);
			if ((r = n.from(t, u)) !== n.BYTE && r.bit < u.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(r) + ".\n Suggested mode is: " + n.toString(u));
			switch (r !== n.KANJI || c.isKanjiModeEnabled() || (r = n.BYTE), r) {
				case n.NUMERIC:
					return new i(e);
				case n.ALPHANUMERIC:
					return new o(e);
				case n.KANJI:
					return new s(e);
				case n.BYTE:
					return new a(e)
			}
		}
		t.fromArray = function(e) {
			return e.reduce((function(e, t) {
				return "string" == typeof t ? e.push(b(t, null)) : t.data && e.push(b(t.data, t.mode)), e
			}), [])
		}, t.fromString = function(e, r) {
			for (var i = function(e, t) {
					for (var r = {}, i = {
							start: {}
						}, o = ["start"], a = 0; a < e.length; a++) {
						for (var s = e[a], u = [], c = 0; c < s.length; c++) {
							var f = s[c],
								h = "" + a + c;
							u.push(h), r[h] = {
								node: f,
								lastCount: 0
							}, i[h] = {};
							for (var l = 0; l < o.length; l++) {
								var d = o[l];
								r[d] && r[d].node.mode === f.mode ? (i[d][h] = p(r[d].lastCount + f.length, f.mode) - p(r[d].lastCount, f.mode), r[d].lastCount += f.length) : (r[d] && (r[d].lastCount = f.length), i[d][h] = p(f.length, f.mode) + 4 + n.getCharCountIndicator(f.mode, t))
							}
						}
						o = u
					}
					for (l = 0; l < o.length; l++) i[o[l]].end = 0;
					return {
						map: i,
						table: r
					}
				}(function(e) {
					for (var t = [], r = 0; r < e.length; r++) {
						var i = e[r];
						switch (i.mode) {
							case n.NUMERIC:
								t.push([i, {
									data: i.data,
									mode: n.ALPHANUMERIC,
									length: i.length
								}, {
									data: i.data,
									mode: n.BYTE,
									length: i.length
								}]);
								break;
							case n.ALPHANUMERIC:
								t.push([i, {
									data: i.data,
									mode: n.BYTE,
									length: i.length
								}]);
								break;
							case n.KANJI:
								t.push([i, {
									data: i.data,
									mode: n.BYTE,
									length: h(i.data)
								}]);
								break;
							case n.BYTE:
								t.push([{
									data: i.data,
									mode: n.BYTE,
									length: h(i.data)
								}])
						}
					}
					return t
				}(d(e, c.isKanjiModeEnabled())), r), o = f.find_path(i.map, "start", "end"), a = [], s = 1; s < o.length - 1; s++) a.push(i.table[o[s]].node);
			return t.fromArray(function(e) {
				return e.reduce((function(e, t) {
					var r = e.length - 1 >= 0 ? e[e.length - 1] : null;
					return r && r.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
				}), [])
			}(a))
		}, t.rawSplit = function(e) {
			return t.fromArray(d(e, c.isKanjiModeEnabled()))
		}
	}, function(e, t, r) {
		var n = r(18);

		function i(e) {
			this.mode = n.NUMERIC, this.data = e.toString()
		}
		i.getBitsLength = function(e) {
			return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
		}, i.prototype.getLength = function() {
			return this.data.length
		}, i.prototype.getBitsLength = function() {
			return i.getBitsLength(this.data.length)
		}, i.prototype.write = function(e) {
			var t, r, n;
			for (t = 0; t + 3 <= this.data.length; t += 3) r = this.data.substr(t, 3), n = parseInt(r, 10), e.put(n, 10);
			var i = this.data.length - t;
			i > 0 && (r = this.data.substr(t), n = parseInt(r, 10), e.put(n, 3 * i + 1))
		}, e.exports = i
	}, function(e, t, r) {
		var n = r(18),
			i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

		function o(e) {
			this.mode = n.ALPHANUMERIC, this.data = e
		}
		o.getBitsLength = function(e) {
			return 11 * Math.floor(e / 2) + e % 2 * 6
		}, o.prototype.getLength = function() {
			return this.data.length
		}, o.prototype.getBitsLength = function() {
			return o.getBitsLength(this.data.length)
		}, o.prototype.write = function(e) {
			var t;
			for (t = 0; t + 2 <= this.data.length; t += 2) {
				var r = 45 * i.indexOf(this.data[t]);
				r += i.indexOf(this.data[t + 1]), e.put(r, 11)
			}
			this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6)
		}, e.exports = o
	}, function(e, t, r) {
		var n = r(25),
			i = r(18);

		function o(e) {
			this.mode = i.BYTE, this.data = n.from(e)
		}
		o.getBitsLength = function(e) {
			return 8 * e
		}, o.prototype.getLength = function() {
			return this.data.length
		}, o.prototype.getBitsLength = function() {
			return o.getBitsLength(this.data.length)
		}, o.prototype.write = function(e) {
			for (var t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8)
		}, e.exports = o
	}, function(e, t, r) {
		var n = r(18),
			i = r(17);

		function o(e) {
			this.mode = n.KANJI, this.data = e
		}
		o.getBitsLength = function(e) {
			return 13 * e
		}, o.prototype.getLength = function() {
			return this.data.length
		}, o.prototype.getBitsLength = function() {
			return o.getBitsLength(this.data.length)
		}, o.prototype.write = function(e) {
			var t;
			for (t = 0; t < this.data.length; t++) {
				var r = i.toSJIS(this.data[t]);
				if (r >= 33088 && r <= 40956) r -= 33088;
				else {
					if (!(r >= 57408 && r <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
					r -= 49472
				}
				r = 192 * (r >>> 8 & 255) + (255 & r), e.put(r, 13)
			}
		}, e.exports = o
	}, function(e, t, r) {
		"use strict";
		var n = {
			single_source_shortest_paths: function(e, t, r) {
				var i = {},
					o = {};
				o[t] = 0;
				var a, s, u, c, f, h, l, d = n.PriorityQueue.make();
				for (d.push(t, 0); !d.empty();)
					for (u in s = (a = d.pop()).value, c = a.cost, f = e[s] || {}) f.hasOwnProperty(u) && (h = c + f[u], l = o[u], (void 0 === o[u] || l > h) && (o[u] = h, d.push(u, h), i[u] = s));
				if (void 0 !== r && void 0 === o[r]) {
					var p = ["Could not find a path from ", t, " to ", r, "."].join("");
					throw new Error(p)
				}
				return i
			},
			extract_shortest_path_from_predecessor_list: function(e, t) {
				for (var r = [], n = t; n;) r.push(n), e[n], n = e[n];
				return r.reverse(), r
			},
			find_path: function(e, t, r) {
				var i = n.single_source_shortest_paths(e, t, r);
				return n.extract_shortest_path_from_predecessor_list(i, r)
			},
			PriorityQueue: {
				make: function(e) {
					var t, r = n.PriorityQueue,
						i = {};
					for (t in e = e || {}, r) r.hasOwnProperty(t) && (i[t] = r[t]);
					return i.queue = [], i.sorter = e.sorter || r.default_sorter, i
				},
				default_sorter: function(e, t) {
					return e.cost - t.cost
				},
				push: function(e, t) {
					var r = {
						value: e,
						cost: t
					};
					this.queue.push(r), this.queue.sort(this.sorter)
				},
				pop: function() {
					return this.queue.shift()
				},
				empty: function() {
					return 0 === this.queue.length
				}
			}
		};
		e.exports = n
	}, function(e, t, r) {
		var n = r(101);
		t.render = function(e, t, r) {
			var i = r,
				o = t;
			void 0 !== i || t && t.getContext || (i = t, t = void 0), t || (o = function() {
				try {
					return document.createElement("canvas")
				} catch (e) {
					throw new Error("You need to specify a canvas element")
				}
			}()), i = n.getOptions(i);
			var a = n.getImageWidth(e.modules.size, i),
				s = o.getContext("2d"),
				u = s.createImageData(a, a);
			return n.qrToImageData(u.data, e, i),
				function(e, t, r) {
					e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = r, t.width = r, t.style.height = r + "px", t.style.width = r + "px"
				}(s, o, a), s.putImageData(u, 0, 0), o
		}, t.renderToDataURL = function(e, r, n) {
			var i = n;
			void 0 !== i || r && r.getContext || (i = r, r = void 0), i || (i = {});
			var o = t.render(e, r, i),
				a = i.type || "image/png",
				s = i.rendererOpts || {};
			return o.toDataURL(a, s.quality)
		}
	}, function(e, t, r) {
		var n = r(101);

		function i(e, t) {
			var r = e.a / 255,
				n = t + '="' + e.hex + '"';
			return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n
		}

		function o(e, t, r) {
			var n = e + t;
			return void 0 !== r && (n += " " + r), n
		}
		t.render = function(e, t, r) {
			var a = n.getOptions(t),
				s = e.modules.size,
				u = e.modules.data,
				c = s + 2 * a.margin,
				f = a.color.light.a ? "<path " + i(a.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
				h = "<path " + i(a.color.dark, "stroke") + ' d="' + function(e, t, r) {
					for (var n = "", i = 0, a = !1, s = 0, u = 0; u < e.length; u++) {
						var c = Math.floor(u % t),
							f = Math.floor(u / t);
						c || a || (a = !0), e[u] ? (s++, u > 0 && c > 0 && e[u - 1] || (n += a ? o("M", c + r, .5 + f + r) : o("m", i, 0), i = 0, a = !1), c + 1 < t && e[u + 1] || (n += o("h", s), s = 0)) : i++
					}
					return n
				}(u, s, a.margin) + '"/>',
				l = 'viewBox="0 0 ' + c + " " + c + '"',
				d = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + l + ' shape-rendering="crispEdges">' + f + h + "</svg>\n";
			return "function" == typeof r && r(null, d), d
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(201),
			i = {
				"text/plain": "Text",
				"text/html": "Url",
				default: "Text"
			};
		e.exports = function(e, t) {
			var r, o, a, s, u, c, f = !1;
			t || (t = {}), r = t.debug || !1;
			try {
				if (a = n(), s = document.createRange(), u = document.getSelection(), (c = document.createElement("span")).textContent = e, c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
						if (n.stopPropagation(), t.format)
							if (n.preventDefault(), void 0 === n.clipboardData) {
								r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
								var o = i[t.format] || i.default;
								window.clipboardData.setData(o, e)
							} else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
						t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
					})), document.body.appendChild(c), s.selectNodeContents(c), u.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
				f = !0
			} catch (n) {
				r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
				try {
					window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), f = !0
				} catch (n) {
					r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), o = function(e) {
						var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
						return e.replace(/#{\s*key\s*}/g, t)
					}("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, e)
				}
			} finally {
				u && ("function" == typeof u.removeRange ? u.removeRange(s) : u.removeAllRanges()), c && document.body.removeChild(c), a()
			}
			return f
		}
	}, function(e, t) {
		e.exports = function() {
			var e = document.getSelection();
			if (!e.rangeCount) return function() {};
			for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
			switch (t.tagName.toUpperCase()) {
				case "INPUT":
				case "TEXTAREA":
					t.blur();
					break;
				default:
					t = null
			}
			return e.removeAllRanges(),
				function() {
					"Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach((function(t) {
						e.addRange(t)
					})), t && t.focus()
				}
		}
	}, function(e, t, r) {
		"use strict";
		r.r(t);
		var n = r(163),
			i = r.n(n),
			o = r(164),
			a = r(1);
		const s = Object(a.getFromWindow)("XMLHttpRequest") || o.XMLHttpRequest;
		class u extends i.a {
			constructor(e) {
				super(), this.url = e
			}
			formatError(e, t, r = -1) {
				return {
					error: {
						message: t,
						code: r
					},
					id: e.id,
					jsonrpc: e.jsonrpc
				}
			}
			send(e, t) {
				return new Promise(r => {
					if ("eth_subscribe" === e.method) {
						const t = this.formatError(e, "Subscriptions are not supported by this HTTP endpoint");
						return this.emit("error", t), r(t)
					}
					const n = new s;
					let i = !1;
					const o = (o, a) => {
						if (!i)
							if (n.abort(), i = !0, t) t(o, a);
							else {
								const {
									id: t,
									jsonrpc: n
								} = e, i = o ? {
									id: t,
									jsonrpc: n,
									error: {
										message: o.message,
										code: o.code
									}
								} : {
									id: t,
									jsonrpc: n,
									result: a
								};
								this.emit("payload", i), r(i)
							}
					};
					n.open("POST", this.url, !0), n.setRequestHeader("Content-Type", "application/json"), n.timeout = 6e4, n.onerror = o, n.ontimeout = o, n.onreadystatechange = () => {
						if (4 === n.readyState) try {
							const e = JSON.parse(n.responseText);
							o(e.error, e.result)
						} catch (e) {
							o(e)
						}
					}, n.send(JSON.stringify(e))
				})
			}
		}
		t.default = u
	}, function(e, t, r) {
		"use strict";
		(function(e, n) {
			var i, o = this && this.__extends || (i = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
					},
					function(e, t) {
						function r() {
							this.constructor = e
						}
						i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
					}),
				a = this && this.__assign || Object.assign || function(e) {
					for (var t, r = 1, n = arguments.length; r < n; r++)
						for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = r(102),
				u = r(218),
				c = r(219),
				f = r(55),
				h = r(220),
				l = r(221),
				d = r(56),
				p = r(222),
				b = r(223),
				g = function(t) {
					function r(n) {
						void 0 === n && (n = {});
						var i = t.call(this) || this;
						return i.UNSENT = r.UNSENT, i.OPENED = r.OPENED, i.HEADERS_RECEIVED = r.HEADERS_RECEIVED, i.LOADING = r.LOADING, i.DONE = r.DONE, i.onreadystatechange = null, i.readyState = r.UNSENT, i.response = null, i.responseText = "", i.responseType = "", i.status = 0, i.statusText = "", i.timeout = 0, i.upload = new p.XMLHttpRequestUpload, i.responseUrl = "", i.withCredentials = !1, i._method = null, i._url = null, i._sync = !1, i._headers = {}, i._loweredHeaders = {}, i._mimeOverride = null, i._request = null, i._response = null, i._responseParts = null, i._responseHeaders = null, i._aborting = null, i._error = null, i._loadedBytes = 0, i._totalBytes = 0, i._lengthComputable = !1, i._restrictedMethods = {
							CONNECT: !0,
							TRACE: !0,
							TRACK: !0
						}, i._restrictedHeaders = {
							"accept-charset": !0,
							"accept-encoding": !0,
							"access-control-request-headers": !0,
							"access-control-request-method": !0,
							connection: !0,
							"content-length": !0,
							cookie: !0,
							cookie2: !0,
							date: !0,
							dnt: !0,
							expect: !0,
							host: !0,
							"keep-alive": !0,
							origin: !0,
							referer: !0,
							te: !0,
							trailer: !0,
							"transfer-encoding": !0,
							upgrade: !0,
							"user-agent": !0,
							via: !0
						}, i._privateHeaders = {
							"set-cookie": !0,
							"set-cookie2": !0
						}, i._userAgent = "Mozilla/5.0 (" + c.type() + " " + c.arch() + ") node.js/" + e.versions.node + " v8/" + e.versions.v8, i._anonymous = n.anon || !1, i
					}
					return o(r, t), r.prototype.open = function(e, t, n, i, o) {
						if (void 0 === n && (n = !0), e = e.toUpperCase(), this._restrictedMethods[e]) throw new r.SecurityError("HTTP method " + e + " is not allowed in XHR");
						var a = this._parseUrl(t, i, o);
						this.readyState === r.HEADERS_RECEIVED || (this.readyState, r.LOADING), this._method = e, this._url = a, this._sync = !n, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(r.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1
					}, r.prototype.setRequestHeader = function(e, t) {
						if (this.readyState !== r.OPENED) throw new r.InvalidStateError("XHR readyState must be OPENED");
						var n = e.toLowerCase();
						this._restrictedHeaders[n] || /^sec-/.test(n) || /^proxy-/.test(n) ? console.warn('Refused to set unsafe header "' + e + '"') : (t = t.toString(), null != this._loweredHeaders[n] ? (e = this._loweredHeaders[n], this._headers[e] = this._headers[e] + ", " + t) : (this._loweredHeaders[n] = e, this._headers[e] = t))
					}, r.prototype.send = function(e) {
						if (this.readyState !== r.OPENED) throw new r.InvalidStateError("XHR readyState must be OPENED");
						if (this._request) throw new r.InvalidStateError("send() already called");
						switch (this._url.protocol) {
							case "file:":
								return this._sendFile(e);
							case "http:":
							case "https:":
								return this._sendHttp(e);
							default:
								throw new r.NetworkError("Unsupported protocol " + this._url.protocol)
						}
					}, r.prototype.abort = function() {
						null != this._request && (this._request.abort(), this._setError(), this._dispatchProgress("abort"), this._dispatchProgress("loadend"))
					}, r.prototype.getResponseHeader = function(e) {
						if (null == this._responseHeaders || null == e) return null;
						var t = e.toLowerCase();
						return this._responseHeaders.hasOwnProperty(t) ? this._responseHeaders[e.toLowerCase()] : null
					}, r.prototype.getAllResponseHeaders = function() {
						var e = this;
						return null == this._responseHeaders ? "" : Object.keys(this._responseHeaders).map((function(t) {
							return t + ": " + e._responseHeaders[t]
						})).join("\r\n")
					}, r.prototype.overrideMimeType = function(e) {
						if (this.readyState === r.LOADING || this.readyState === r.DONE) throw new r.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");
						this._mimeOverride = e.toLowerCase()
					}, r.prototype.nodejsSet = function(e) {
						if (this.nodejsHttpAgent = e.httpAgent || this.nodejsHttpAgent, this.nodejsHttpsAgent = e.httpsAgent || this.nodejsHttpsAgent, e.hasOwnProperty("baseUrl")) {
							if (null != e.baseUrl)
								if (!f.parse(e.baseUrl, !1, !0).protocol) throw new r.SyntaxError("baseUrl must be an absolute URL");
							this.nodejsBaseUrl = e.baseUrl
						}
					}, r.nodejsSet = function(e) {
						r.prototype.nodejsSet(e)
					}, r.prototype._setReadyState = function(e) {
						this.readyState = e, this.dispatchEvent(new h.ProgressEvent("readystatechange"))
					}, r.prototype._sendFile = function(e) {
						throw new Error("Protocol file: not implemented")
					}, r.prototype._sendHttp = function(e) {
						if (this._sync) throw new Error("Synchronous XHR processing not implemented");
						!e || "GET" !== this._method && "HEAD" !== this._method ? e = e || "" : (console.warn("Discarding entity body for " + this._method + " requests"), e = null), this.upload._setData(e), this._finalizeHeaders(), this._sendHxxpRequest()
					}, r.prototype._sendHxxpRequest = function() {
						var e = this;
						if (this.withCredentials) {
							var t = r.cookieJar.getCookies(b.CookieAccessInfo(this._url.hostname, this._url.pathname, "https:" === this._url.protocol)).toValueString();
							this._headers.cookie = this._headers.cookie2 = t
						}
						var n = "http:" === this._url.protocol ? [s, this.nodejsHttpAgent] : [u, this.nodejsHttpsAgent],
							i = n[0],
							o = n[1],
							a = i.request.bind(i)({
								hostname: this._url.hostname,
								port: +this._url.port,
								path: this._url.path,
								auth: this._url.auth,
								method: this._method,
								headers: this._headers,
								agent: o
							});
						this._request = a, this.timeout && a.setTimeout(this.timeout, (function() {
							return e._onHttpTimeout(a)
						})), a.on("response", (function(t) {
							return e._onHttpResponse(a, t)
						})), a.on("error", (function(t) {
							return e._onHttpRequestError(a, t)
						})), this.upload._startUpload(a), this._request === a && this._dispatchProgress("loadstart")
					}, r.prototype._finalizeHeaders = function() {
						this._headers = a({}, this._headers, {
							Connection: "keep-alive",
							Host: this._url.host,
							"User-Agent": this._userAgent
						}, this._anonymous ? {
							Referer: "about:blank"
						} : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders)
					}, r.prototype._onHttpResponse = function(e, t) {
						var n = this;
						if (this._request === e) {
							if (this.withCredentials && (t.headers["set-cookie"] || t.headers["set-cookie2"]) && r.cookieJar.setCookies(t.headers["set-cookie"] || t.headers["set-cookie2"]), [301, 302, 303, 307, 308].indexOf(t.statusCode) >= 0) return this._url = this._parseUrl(t.headers.location), this._method = "GET", this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]), null != this._headers["Content-Type"] && delete this._headers["Content-Type"], delete this._headers["Content-Length"], this.upload._reset(), this._finalizeHeaders(), void this._sendHxxpRequest();
							this._response = t, this._response.on("data", (function(e) {
								return n._onHttpResponseData(t, e)
							})), this._response.on("end", (function() {
								return n._onHttpResponseEnd(t)
							})), this._response.on("close", (function() {
								return n._onHttpResponseClose(t)
							})), this.responseUrl = this._url.href.split("#")[0], this.status = t.statusCode, this.statusText = s.STATUS_CODES[this.status], this._parseResponseHeaders(t);
							var i = this._responseHeaders["content-length"] || "";
							this._totalBytes = +i, this._lengthComputable = !!i, this._setReadyState(r.HEADERS_RECEIVED)
						}
					}, r.prototype._onHttpResponseData = function(e, t) {
						this._response === e && (this._responseParts.push(new n(t)), this._loadedBytes += t.length, this.readyState !== r.LOADING && this._setReadyState(r.LOADING), this._dispatchProgress("progress"))
					}, r.prototype._onHttpResponseEnd = function(e) {
						this._response === e && (this._parseResponse(), this._request = null, this._response = null, this._setReadyState(r.DONE), this._dispatchProgress("load"), this._dispatchProgress("loadend"))
					}, r.prototype._onHttpResponseClose = function(e) {
						if (this._response === e) {
							var t = this._request;
							this._setError(), t.abort(), this._setReadyState(r.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend")
						}
					}, r.prototype._onHttpTimeout = function(e) {
						this._request === e && (this._setError(), e.abort(), this._setReadyState(r.DONE), this._dispatchProgress("timeout"), this._dispatchProgress("loadend"))
					}, r.prototype._onHttpRequestError = function(e, t) {
						this._request === e && (this._setError(), e.abort(), this._setReadyState(r.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend"))
					}, r.prototype._dispatchProgress = function(e) {
						var t = new r.ProgressEvent(e);
						t.lengthComputable = this._lengthComputable, t.loaded = this._loadedBytes, t.total = this._totalBytes, this.dispatchEvent(t)
					}, r.prototype._setError = function() {
						this._request = null, this._response = null, this._responseHeaders = null, this._responseParts = null
					}, r.prototype._parseUrl = function(e, t, r) {
						var n = null == this.nodejsBaseUrl ? e : f.resolve(this.nodejsBaseUrl, e),
							i = f.parse(n, !1, !0);
						i.hash = null;
						var o = (i.auth || "").split(":"),
							a = o[0],
							s = o[1];
						return (a || s || t || r) && (i.auth = (t || a || "") + ":" + (r || s || "")), i
					}, r.prototype._parseResponseHeaders = function(e) {
						for (var t in this._responseHeaders = {}, e.headers) {
							var r = t.toLowerCase();
							this._privateHeaders[r] || (this._responseHeaders[r] = e.headers[t])
						}
						null != this._mimeOverride && (this._responseHeaders["content-type"] = this._mimeOverride)
					}, r.prototype._parseResponse = function() {
						var e = n.concat(this._responseParts);
						switch (this._responseParts = null, this.responseType) {
							case "json":
								this.responseText = null;
								try {
									this.response = JSON.parse(e.toString("utf-8"))
								} catch (e) {
									this.response = null
								}
								return;
							case "buffer":
								return this.responseText = null, void(this.response = e);
							case "arraybuffer":
								this.responseText = null;
								for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), i = 0; i < e.length; i++) r[i] = e[i];
								return void(this.response = t);
							case "text":
							default:
								try {
									this.responseText = e.toString(this._parseResponseEncoding())
								} catch (t) {
									this.responseText = e.toString("binary")
								}
								this.response = this.responseText
						}
					}, r.prototype._parseResponseEncoding = function() {
						return /;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"] || "")[1] || "utf-8"
					}, r.ProgressEvent = h.ProgressEvent, r.InvalidStateError = l.InvalidStateError, r.NetworkError = l.NetworkError, r.SecurityError = l.SecurityError, r.SyntaxError = l.SyntaxError, r.XMLHttpRequestUpload = p.XMLHttpRequestUpload, r.UNSENT = 0, r.OPENED = 1, r.HEADERS_RECEIVED = 2, r.LOADING = 3, r.DONE = 4, r.cookieJar = b.CookieJar(), r
				}(d.XMLHttpRequestEventTarget);
			t.XMLHttpRequest = g, g.prototype.nodejsHttpAgent = s.globalAgent, g.prototype.nodejsHttpsAgent = u.globalAgent, g.prototype.nodejsBaseUrl = null
		}).call(this, r(5), r(2).Buffer)
	}, function(e, t, r) {
		(function(t, n, i) {
			var o = r(103),
				a = r(3),
				s = r(104),
				u = r(34),
				c = r(211),
				f = s.IncomingMessage,
				h = s.readyStates;
			var l = e.exports = function(e) {
				var r, n = this;
				u.Writable.call(n), n._opts = e, n._body = [], n._headers = {}, e.auth && n.setHeader("Authorization", "Basic " + new t(e.auth).toString("base64")), Object.keys(e.headers).forEach((function(t) {
					n.setHeader(t, e.headers[t])
				}));
				var i = !0;
				if ("disable-fetch" === e.mode || "requestTimeout" in e && !o.abortController) i = !1, r = !0;
				else if ("prefer-streaming" === e.mode) r = !1;
				else if ("allow-wrong-content-type" === e.mode) r = !o.overrideMimeType;
				else {
					if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw new Error("Invalid value for opts.mode");
					r = !0
				}
				n._mode = function(e, t) {
					return o.fetch && t ? "fetch" : o.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : o.msstream ? "ms-stream" : o.arraybuffer && e ? "arraybuffer" : o.vbArray && e ? "text:vbarray" : "text"
				}(r, i), n._fetchTimer = null, n.on("finish", (function() {
					n._onFinish()
				}))
			};
			a(l, u.Writable), l.prototype.setHeader = function(e, t) {
				var r = e.toLowerCase(); - 1 === d.indexOf(r) && (this._headers[r] = {
					name: e,
					value: t
				})
			}, l.prototype.getHeader = function(e) {
				var t = this._headers[e.toLowerCase()];
				return t ? t.value : null
			}, l.prototype.removeHeader = function(e) {
				delete this._headers[e.toLowerCase()]
			}, l.prototype._onFinish = function() {
				var e = this;
				if (!e._destroyed) {
					var r = e._opts,
						a = e._headers,
						s = null;
					"GET" !== r.method && "HEAD" !== r.method && (s = o.arraybuffer ? c(t.concat(e._body)) : o.blobConstructor ? new n.Blob(e._body.map((function(e) {
						return c(e)
					})), {
						type: (a["content-type"] || {}).value || ""
					}) : t.concat(e._body).toString());
					var u = [];
					if (Object.keys(a).forEach((function(e) {
							var t = a[e].name,
								r = a[e].value;
							Array.isArray(r) ? r.forEach((function(e) {
								u.push([t, e])
							})) : u.push([t, r])
						})), "fetch" === e._mode) {
						var f = null;
						if (o.abortController) {
							var l = new AbortController;
							f = l.signal, e._fetchAbortController = l, "requestTimeout" in r && 0 !== r.requestTimeout && (e._fetchTimer = n.setTimeout((function() {
								e.emit("requestTimeout"), e._fetchAbortController && e._fetchAbortController.abort()
							}), r.requestTimeout))
						}
						n.fetch(e._opts.url, {
							method: e._opts.method,
							headers: u,
							body: s || void 0,
							mode: "cors",
							credentials: r.withCredentials ? "include" : "same-origin",
							signal: f
						}).then((function(t) {
							e._fetchResponse = t, e._connect()
						}), (function(t) {
							n.clearTimeout(e._fetchTimer), e._destroyed || e.emit("error", t)
						}))
					} else {
						var d = e._xhr = new n.XMLHttpRequest;
						try {
							d.open(e._opts.method, e._opts.url, !0)
						} catch (t) {
							return void i.nextTick((function() {
								e.emit("error", t)
							}))
						}
						"responseType" in d && (d.responseType = e._mode.split(":")[0]), "withCredentials" in d && (d.withCredentials = !!r.withCredentials), "text" === e._mode && "overrideMimeType" in d && d.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in r && (d.timeout = r.requestTimeout, d.ontimeout = function() {
							e.emit("requestTimeout")
						}), u.forEach((function(e) {
							d.setRequestHeader(e[0], e[1])
						})), e._response = null, d.onreadystatechange = function() {
							switch (d.readyState) {
								case h.LOADING:
								case h.DONE:
									e._onXHRProgress()
							}
						}, "moz-chunked-arraybuffer" === e._mode && (d.onprogress = function() {
							e._onXHRProgress()
						}), d.onerror = function() {
							e._destroyed || e.emit("error", new Error("XHR error"))
						};
						try {
							d.send(s)
						} catch (t) {
							return void i.nextTick((function() {
								e.emit("error", t)
							}))
						}
					}
				}
			}, l.prototype._onXHRProgress = function() {
				(function(e) {
					try {
						var t = e.status;
						return null !== t && 0 !== t
					} catch (e) {
						return !1
					}
				})(this._xhr) && !this._destroyed && (this._response || this._connect(), this._response._onXHRProgress())
			}, l.prototype._connect = function() {
				var e = this;
				e._destroyed || (e._response = new f(e._xhr, e._fetchResponse, e._mode, e._fetchTimer), e._response.on("error", (function(t) {
					e.emit("error", t)
				})), e.emit("response", e._response))
			}, l.prototype._write = function(e, t, r) {
				this._body.push(e), r()
			}, l.prototype.abort = l.prototype.destroy = function() {
				this._destroyed = !0, n.clearTimeout(this._fetchTimer), this._response && (this._response._destroyed = !0), this._xhr ? this._xhr.abort() : this._fetchAbortController && this._fetchAbortController.abort()
			}, l.prototype.end = function(e, t, r) {
				"function" == typeof e && (r = e, e = void 0), u.Writable.prototype.end.call(this, e, t, r)
			}, l.prototype.flushHeaders = function() {}, l.prototype.setTimeout = function() {}, l.prototype.setNoDelay = function() {}, l.prototype.setSocketKeepAlive = function() {};
			var d = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
		}).call(this, r(2).Buffer, r(6), r(5))
	}, function(e, t) {}, function(e, t, r) {
		"use strict";
		var n = r(52).Buffer,
			i = r(207);
		e.exports = function() {
			function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.head = null, this.tail = null, this.length = 0
			}
			return e.prototype.push = function(e) {
				var t = {
					data: e,
					next: null
				};
				this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
			}, e.prototype.unshift = function(e) {
				var t = {
					data: e,
					next: this.head
				};
				0 === this.length && (this.tail = t), this.head = t, ++this.length
			}, e.prototype.shift = function() {
				if (0 !== this.length) {
					var e = this.head.data;
					return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
				}
			}, e.prototype.clear = function() {
				this.head = this.tail = null, this.length = 0
			}, e.prototype.join = function(e) {
				if (0 === this.length) return "";
				for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
				return r
			}, e.prototype.concat = function(e) {
				if (0 === this.length) return n.alloc(0);
				if (1 === this.length) return this.head.data;
				for (var t, r, i, o = n.allocUnsafe(e >>> 0), a = this.head, s = 0; a;) t = a.data, r = o, i = s, t.copy(r, i), s += a.data.length, a = a.next;
				return o
			}, e
		}(), i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function() {
			var e = i.inspect({
				length: this.length
			});
			return this.constructor.name + " " + e
		})
	}, function(e, t) {}, function(e, t, r) {
		(function(e, t) {
			! function(e, r) {
				"use strict";
				if (!e.setImmediate) {
					var n, i, o, a, s, u = 1,
						c = {},
						f = !1,
						h = e.document,
						l = Object.getPrototypeOf && Object.getPrototypeOf(e);
					l = l && l.setTimeout ? l : e, "[object process]" === {}.toString.call(e.process) ? n = function(e) {
						t.nextTick((function() {
							p(e)
						}))
					} : ! function() {
						if (e.postMessage && !e.importScripts) {
							var t = !0,
								r = e.onmessage;
							return e.onmessage = function() {
								t = !1
							}, e.postMessage("", "*"), e.onmessage = r, t
						}
					}() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
						p(e.data)
					}, n = function(e) {
						o.port2.postMessage(e)
					}) : h && "onreadystatechange" in h.createElement("script") ? (i = h.documentElement, n = function(e) {
						var t = h.createElement("script");
						t.onreadystatechange = function() {
							p(e), t.onreadystatechange = null, i.removeChild(t), t = null
						}, i.appendChild(t)
					}) : n = function(e) {
						setTimeout(p, 0, e)
					} : (a = "setImmediate$" + Math.random() + "$", s = function(t) {
						t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && p(+t.data.slice(a.length))
					}, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), n = function(t) {
						e.postMessage(a + t, "*")
					}), l.setImmediate = function(e) {
						"function" != typeof e && (e = new Function("" + e));
						for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
						var i = {
							callback: e,
							args: t
						};
						return c[u] = i, n(u), u++
					}, l.clearImmediate = d
				}

				function d(e) {
					delete c[e]
				}

				function p(e) {
					if (f) setTimeout(p, 0, e);
					else {
						var t = c[e];
						if (t) {
							f = !0;
							try {
								! function(e) {
									var t = e.callback,
										r = e.args;
									switch (r.length) {
										case 0:
											t();
											break;
										case 1:
											t(r[0]);
											break;
										case 2:
											t(r[0], r[1]);
											break;
										case 3:
											t(r[0], r[1], r[2]);
											break;
										default:
											t.apply(void 0, r)
									}
								}(t)
							} finally {
								d(e), f = !1
							}
						}
					}
				}
			}("undefined" == typeof self ? void 0 === e ? this : e : self)
		}).call(this, r(6), r(5))
	}, function(e, t, r) {
		var n = r(2),
			i = n.Buffer;

		function o(e, t) {
			for (var r in e) t[r] = e[r]
		}

		function a(e, t, r) {
			return i(e, t, r)
		}
		i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), o(i, a), a.from = function(e, t, r) {
			if ("number" == typeof e) throw new TypeError("Argument must not be a number");
			return i(e, t, r)
		}, a.alloc = function(e, t, r) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			var n = i(e);
			return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
		}, a.allocUnsafe = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return i(e)
		}, a.allocUnsafeSlow = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return n.SlowBuffer(e)
		}
	}, function(e, t, r) {
		"use strict";
		e.exports = o;
		var n = r(109),
			i = Object.create(r(35));

		function o(e) {
			if (!(this instanceof o)) return new o(e);
			n.call(this, e)
		}
		i.inherits = r(3), i.inherits(o, n), o.prototype._transform = function(e, t, r) {
			r(null, e)
		}
	}, function(e, t, r) {
		var n = r(2).Buffer;
		e.exports = function(e) {
			if (e instanceof Uint8Array) {
				if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength) return e.buffer;
				if ("function" == typeof e.buffer.slice) return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
			}
			if (n.isBuffer(e)) {
				for (var t = new Uint8Array(e.length), r = e.length, i = 0; i < r; i++) t[i] = e[i];
				return t.buffer
			}
			throw new Error("Argument must be a Buffer")
		}
	}, function(e, t) {
		e.exports = {
			100: "Continue",
			101: "Switching Protocols",
			102: "Processing",
			200: "OK",
			201: "Created",
			202: "Accepted",
			203: "Non-Authoritative Information",
			204: "No Content",
			205: "Reset Content",
			206: "Partial Content",
			207: "Multi-Status",
			208: "Already Reported",
			226: "IM Used",
			300: "Multiple Choices",
			301: "Moved Permanently",
			302: "Found",
			303: "See Other",
			304: "Not Modified",
			305: "Use Proxy",
			307: "Temporary Redirect",
			308: "Permanent Redirect",
			400: "Bad Request",
			401: "Unauthorized",
			402: "Payment Required",
			403: "Forbidden",
			404: "Not Found",
			405: "Method Not Allowed",
			406: "Not Acceptable",
			407: "Proxy Authentication Required",
			408: "Request Timeout",
			409: "Conflict",
			410: "Gone",
			411: "Length Required",
			412: "Precondition Failed",
			413: "Payload Too Large",
			414: "URI Too Long",
			415: "Unsupported Media Type",
			416: "Range Not Satisfiable",
			417: "Expectation Failed",
			418: "I'm a teapot",
			421: "Misdirected Request",
			422: "Unprocessable Entity",
			423: "Locked",
			424: "Failed Dependency",
			425: "Unordered Collection",
			426: "Upgrade Required",
			428: "Precondition Required",
			429: "Too Many Requests",
			431: "Request Header Fields Too Large",
			451: "Unavailable For Legal Reasons",
			500: "Internal Server Error",
			501: "Not Implemented",
			502: "Bad Gateway",
			503: "Service Unavailable",
			504: "Gateway Timeout",
			505: "HTTP Version Not Supported",
			506: "Variant Also Negotiates",
			507: "Insufficient Storage",
			508: "Loop Detected",
			509: "Bandwidth Limit Exceeded",
			510: "Not Extended",
			511: "Network Authentication Required"
		}
	}, function(e, t, r) {
		(function(e, n) {
			var i; /*! https://mths.be/punycode v1.4.1 by @mathias */
			! function(o) {
				t && t.nodeType, e && e.nodeType;
				var a = "object" == typeof n && n;
				a.global !== a && a.window !== a && a.self;
				var s, u = 2147483647,
					c = /^xn--/,
					f = /[^\x20-\x7E]/,
					h = /[\x2E\u3002\uFF0E\uFF61]/g,
					l = {
						overflow: "Overflow: input needs wider integers to process",
						"not-basic": "Illegal input >= 0x80 (not a basic code point)",
						"invalid-input": "Invalid input"
					},
					d = Math.floor,
					p = String.fromCharCode;

				function b(e) {
					throw new RangeError(l[e])
				}

				function g(e, t) {
					for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
					return n
				}

				function m(e, t) {
					var r = e.split("@"),
						n = "";
					return r.length > 1 && (n = r[0] + "@", e = r[1]), n + g((e = e.replace(h, ".")).split("."), t).join(".")
				}

				function y(e) {
					for (var t, r, n = [], i = 0, o = e.length; i < o;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (r = e.charCodeAt(i++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--) : n.push(t);
					return n
				}

				function v(e) {
					return g(e, (function(e) {
						var t = "";
						return e > 65535 && (t += p((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += p(e)
					})).join("")
				}

				function _(e, t) {
					return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
				}

				function w(e, t, r) {
					var n = 0;
					for (e = r ? d(e / 700) : e >> 1, e += d(e / t); e > 455; n += 36) e = d(e / 35);
					return d(n + 36 * e / (e + 38))
				}

				function M(e) {
					var t, r, n, i, o, a, s, c, f, h, l, p = [],
						g = e.length,
						m = 0,
						y = 128,
						_ = 72;
					for ((r = e.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && b("not-basic"), p.push(e.charCodeAt(n));
					for (i = r > 0 ? r + 1 : 0; i < g;) {
						for (o = m, a = 1, s = 36; i >= g && b("invalid-input"), ((c = (l = e.charCodeAt(i++)) - 48 < 10 ? l - 22 : l - 65 < 26 ? l - 65 : l - 97 < 26 ? l - 97 : 36) >= 36 || c > d((u - m) / a)) && b("overflow"), m += c * a, !(c < (f = s <= _ ? 1 : s >= _ + 26 ? 26 : s - _)); s += 36) a > d(u / (h = 36 - f)) && b("overflow"), a *= h;
						_ = w(m - o, t = p.length + 1, 0 == o), d(m / t) > u - y && b("overflow"), y += d(m / t), m %= t, p.splice(m++, 0, y)
					}
					return v(p)
				}

				function S(e) {
					var t, r, n, i, o, a, s, c, f, h, l, g, m, v, M, S = [];
					for (g = (e = y(e)).length, t = 128, r = 0, o = 72, a = 0; a < g; ++a)(l = e[a]) < 128 && S.push(p(l));
					for (n = i = S.length, i && S.push("-"); n < g;) {
						for (s = u, a = 0; a < g; ++a)(l = e[a]) >= t && l < s && (s = l);
						for (s - t > d((u - r) / (m = n + 1)) && b("overflow"), r += (s - t) * m, t = s, a = 0; a < g; ++a)
							if ((l = e[a]) < t && ++r > u && b("overflow"), l == t) {
								for (c = r, f = 36; !(c < (h = f <= o ? 1 : f >= o + 26 ? 26 : f - o)); f += 36) M = c - h, v = 36 - h, S.push(p(_(h + M % v, 0))), c = d(M / v);
								S.push(p(_(c, 0))), o = w(r, m, n == i), r = 0, ++n
							}++ r, ++t
					}
					return S.join("")
				}
				s = {
					version: "1.4.1",
					ucs2: {
						decode: y,
						encode: v
					},
					decode: M,
					encode: S,
					toASCII: function(e) {
						return m(e, (function(e) {
							return f.test(e) ? "xn--" + S(e) : e
						}))
					},
					toUnicode: function(e) {
						return m(e, (function(e) {
							return c.test(e) ? M(e.slice(4).toLowerCase()) : e
						}))
					}
				}, void 0 === (i = function() {
					return s
				}.call(t, r, t, e)) || (e.exports = i)
			}()
		}).call(this, r(33)(e), r(6))
	}, function(e, t, r) {
		"use strict";
		e.exports = {
			isString: function(e) {
				return "string" == typeof e
			},
			isObject: function(e) {
				return "object" == typeof e && null !== e
			},
			isNull: function(e) {
				return null === e
			},
			isNullOrUndefined: function(e) {
				return null == e
			}
		}
	}, function(e, t, r) {
		"use strict";
		t.decode = t.parse = r(216), t.encode = t.stringify = r(217)
	}, function(e, t, r) {
		"use strict";

		function n(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}
		e.exports = function(e, t, r, o) {
			t = t || "&", r = r || "=";
			var a = {};
			if ("string" != typeof e || 0 === e.length) return a;
			var s = /\+/g;
			e = e.split(t);
			var u = 1e3;
			o && "number" == typeof o.maxKeys && (u = o.maxKeys);
			var c = e.length;
			u > 0 && c > u && (c = u);
			for (var f = 0; f < c; ++f) {
				var h, l, d, p, b = e[f].replace(s, "%20"),
					g = b.indexOf(r);
				g >= 0 ? (h = b.substr(0, g), l = b.substr(g + 1)) : (h = b, l = ""), d = decodeURIComponent(h), p = decodeURIComponent(l), n(a, d) ? i(a[d]) ? a[d].push(p) : a[d] = [a[d], p] : a[d] = p
			}
			return a
		};
		var i = Array.isArray || function(e) {
			return "[object Array]" === Object.prototype.toString.call(e)
		}
	}, function(e, t, r) {
		"use strict";
		var n = function(e) {
			switch (typeof e) {
				case "string":
					return e;
				case "boolean":
					return e ? "true" : "false";
				case "number":
					return isFinite(e) ? e : "";
				default:
					return ""
			}
		};
		e.exports = function(e, t, r, s) {
			return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? o(a(e), (function(a) {
				var s = encodeURIComponent(n(a)) + r;
				return i(e[a]) ? o(e[a], (function(e) {
					return s + encodeURIComponent(n(e))
				})).join(t) : s + encodeURIComponent(n(e[a]))
			})).join(t) : s ? encodeURIComponent(n(s)) + r + encodeURIComponent(n(e)) : ""
		};
		var i = Array.isArray || function(e) {
			return "[object Array]" === Object.prototype.toString.call(e)
		};

		function o(e, t) {
			if (e.map) return e.map(t);
			for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
			return r
		}
		var a = Object.keys || function(e) {
			var t = [];
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
			return t
		}
	}, function(e, t, r) {
		var n = r(102),
			i = r(55),
			o = e.exports;
		for (var a in n) n.hasOwnProperty(a) && (o[a] = n[a]);

		function s(e) {
			if ("string" == typeof e && (e = i.parse(e)), e.protocol || (e.protocol = "https:"), "https:" !== e.protocol) throw new Error('Protocol "' + e.protocol + '" not supported. Expected "https:"');
			return e
		}
		o.request = function(e, t) {
			return e = s(e), n.request.call(this, e, t)
		}, o.get = function(e, t) {
			return e = s(e), n.get.call(this, e, t)
		}
	}, function(e, t) {
		t.endianness = function() {
			return "LE"
		}, t.hostname = function() {
			return "undefined" != typeof location ? location.hostname : ""
		}, t.loadavg = function() {
			return []
		}, t.uptime = function() {
			return 0
		}, t.freemem = function() {
			return Number.MAX_VALUE
		}, t.totalmem = function() {
			return Number.MAX_VALUE
		}, t.cpus = function() {
			return []
		}, t.type = function() {
			return "Browser"
		}, t.release = function() {
			return "undefined" != typeof navigator ? navigator.appVersion : ""
		}, t.networkInterfaces = t.getNetworkInterfaces = function() {
			return {}
		}, t.arch = function() {
			return "javascript"
		}, t.platform = function() {
			return "browser"
		}, t.tmpdir = t.tmpDir = function() {
			return "/tmp"
		}, t.EOL = "\n", t.homedir = function() {
			return "/"
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function(e) {
			this.type = e, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0
		};
		t.ProgressEvent = n
	}, function(e, t, r) {
		"use strict";
		var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
			},
			function(e, t) {
				function r() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
			});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return i(t, e), t
		}(Error);
		t.SecurityError = o;
		var a = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return i(t, e), t
		}(Error);
		t.InvalidStateError = a;
		var s = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return i(t, e), t
		}(Error);
		t.NetworkError = s;
		var u = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return i(t, e), t
		}(Error);
		t.SyntaxError = u
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				},
				function(e, t) {
					function r() {
						this.constructor = e
					}
					n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
				});
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var o = function(t) {
				function r() {
					var e = t.call(this) || this;
					return e._contentType = null, e._body = null, e._reset(), e
				}
				return i(r, t), r.prototype._reset = function() {
					this._contentType = null, this._body = null
				}, r.prototype._setData = function(t) {
					if (null != t)
						if ("string" == typeof t) 0 !== t.length && (this._contentType = "text/plain;charset=UTF-8"), this._body = new e(t, "utf-8");
						else if (e.isBuffer(t)) this._body = t;
					else if (t instanceof ArrayBuffer) {
						for (var r = new e(t.byteLength), n = new Uint8Array(t), i = 0; i < t.byteLength; i++) r[i] = n[i];
						this._body = r
					} else {
						if (!(t.buffer && t.buffer instanceof ArrayBuffer)) throw new Error("Unsupported send() data " + t);
						r = new e(t.byteLength);
						var o = t.byteOffset;
						for (n = new Uint8Array(t.buffer), i = 0; i < t.byteLength; i++) r[i] = n[i + o];
						this._body = r
					}
				}, r.prototype._finalizeHeaders = function(e, t) {
					this._contentType && !t["content-type"] && (e["Content-Type"] = this._contentType), this._body && (e["Content-Length"] = this._body.length.toString())
				}, r.prototype._startUpload = function(e) {
					this._body && e.write(this._body), e.end()
				}, r
			}(r(56).XMLHttpRequestEventTarget);
			t.XMLHttpRequestUpload = o
		}).call(this, r(2).Buffer)
	}, function(e, t) {
		! function() {
			"use strict";

			function e(t, r, n, i) {
				return this instanceof e ? (this.domain = t || void 0, this.path = r || "/", this.secure = !!n, this.script = !!i, this) : new e(t, r, n, i)
			}

			function r(e, t, n) {
				return e instanceof r ? e : this instanceof r ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(n || "/"), this.explicit_path = !1, this.domain = t || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, e && this.parse(e, t, n), this) : new r(e, t, n)
			}
			e.All = Object.freeze(Object.create(null)), t.CookieAccessInfo = e, t.Cookie = r, r.prototype.toString = function() {
				var e = [this.name + "=" + this.value];
				return this.expiration_date !== 1 / 0 && e.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && e.push("domain=" + this.domain), this.path && e.push("path=" + this.path), this.secure && e.push("secure"), this.noscript && e.push("httponly"), e.join("; ")
			}, r.prototype.toValueString = function() {
				return this.name + "=" + this.value
			};
			var n = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;

			function i() {
				var e, t;
				return this instanceof i ? (e = Object.create(null), this.setCookie = function(n, i, o) {
					var a, s;
					if (a = (n = new r(n, i, o)).expiration_date <= Date.now(), void 0 !== e[n.name]) {
						for (t = e[n.name], s = 0; s < t.length; s += 1)
							if (t[s].collidesWith(n)) return a ? (t.splice(s, 1), 0 === t.length && delete e[n.name], !1) : (t[s] = n, n);
						return !a && (t.push(n), n)
					}
					return !a && (e[n.name] = [n], e[n.name])
				}, this.getCookie = function(r, n) {
					var i, o;
					if (t = e[r])
						for (o = 0; o < t.length; o += 1)
							if ((i = t[o]).expiration_date <= Date.now()) 0 === t.length && delete e[i.name];
							else if (i.matches(n)) return i
				}, this.getCookies = function(t) {
					var r, n, i = [];
					for (r in e)(n = this.getCookie(r, t)) && i.push(n);
					return i.toString = function() {
						return i.join(":")
					}, i.toValueString = function() {
						return i.map((function(e) {
							return e.toValueString()
						})).join(";")
					}, i
				}, this) : new i
			}
			r.prototype.parse = function(e, t, n) {
				if (this instanceof r) {
					var i, o = e.split(";").filter((function(e) {
							return !!e
						})),
						a = o[0].match(/([^=]+)=([\s\S]*)/);
					if (!a) return void console.warn("Invalid cookie header encountered. Header: '" + e + "'");
					var s = a[1],
						u = a[2];
					if ("string" != typeof s || 0 === s.length || "string" != typeof u) return void console.warn("Unable to extract values from cookie header. Cookie: '" + e + "'");
					for (this.name = s, this.value = u, i = 1; i < o.length; i += 1) switch (s = (a = o[i].match(/([^=]+)(?:=([\s\S]*))?/))[1].trim().toLowerCase(), u = a[2], s) {
						case "httponly":
							this.noscript = !0;
							break;
						case "expires":
							this.expiration_date = u ? Number(Date.parse(u)) : 1 / 0;
							break;
						case "path":
							this.path = u ? u.trim() : "", this.explicit_path = !0;
							break;
						case "domain":
							this.domain = u ? u.trim() : "", this.explicit_domain = !!this.domain;
							break;
						case "secure":
							this.secure = !0
					}
					return this.explicit_path || (this.path = n || "/"), this.explicit_domain || (this.domain = t), this
				}
				return (new r).parse(e, t, n)
			}, r.prototype.matches = function(t) {
				return t === e.All || !(this.noscript && t.script || this.secure && !t.secure || !this.collidesWith(t))
			}, r.prototype.collidesWith = function(e) {
				if (this.path && !e.path || this.domain && !e.domain) return !1;
				if (this.path && 0 !== e.path.indexOf(this.path)) return !1;
				if (this.explicit_path && 0 !== e.path.indexOf(this.path)) return !1;
				var t = e.domain && e.domain.replace(/^[\.]/, ""),
					r = this.domain && this.domain.replace(/^[\.]/, "");
				if (r === t) return !0;
				if (r) {
					if (!this.explicit_domain) return !1;
					var n = t.indexOf(r);
					return -1 !== n && n === t.length - r.length
				}
				return !0
			}, t.CookieJar = i, i.prototype.setCookies = function(e, t, i) {
				var o, a, s = [];
				for (e = (e = Array.isArray(e) ? e : e.split(n)).map((function(e) {
						return new r(e, t, i)
					})), o = 0; o < e.length; o += 1) a = e[o], this.setCookie(a, t, i) && s.push(a);
				return s
			}
		}()
	}, function(e, t, r) {
		const n = r(12).EventEmitter,
			i = r(21).inherits,
			o = r(36),
			a = r(292),
			s = r(296),
			u = r(324),
			c = r(327),
			f = (r(149), r(67)),
			h = function() {};

		function l(e) {
			n.call(this), this.setMaxListeners(30), e = e || {};
			const t = {
					sendAsync: this._handleAsync.bind(this)
				},
				r = e.blockTrackerProvider || t;
			this._blockTracker = e.blockTracker || new a({
				provider: r,
				pollingInterval: e.pollingInterval || 4e3,
				setSkipCacheFlag: !0
			}), this._ready = new c, this.currentBlock = null, this._providers = []
		}
		e.exports = l, i(l, n), l.prototype.start = function(e = h) {
			const t = this;
			t._ready.go(), t._blockTracker.on("latest", e => {
				t._getBlockByNumberWithRetry(e, (e, r) => {
					if (e) return void this.emit("error", e);
					if (!r) return console.log(r), void this.emit("error", new Error("Could not find block"));
					const n = (i = r, {
						number: o.toBuffer(i.number),
						hash: o.toBuffer(i.hash),
						parentHash: o.toBuffer(i.parentHash),
						nonce: o.toBuffer(i.nonce),
						mixHash: o.toBuffer(i.mixHash),
						sha3Uncles: o.toBuffer(i.sha3Uncles),
						logsBloom: o.toBuffer(i.logsBloom),
						transactionsRoot: o.toBuffer(i.transactionsRoot),
						stateRoot: o.toBuffer(i.stateRoot),
						receiptsRoot: o.toBuffer(i.receiptRoot || i.receiptsRoot),
						miner: o.toBuffer(i.miner),
						difficulty: o.toBuffer(i.difficulty),
						totalDifficulty: o.toBuffer(i.totalDifficulty),
						size: o.toBuffer(i.size),
						extraData: o.toBuffer(i.extraData),
						gasLimit: o.toBuffer(i.gasLimit),
						gasUsed: o.toBuffer(i.gasUsed),
						timestamp: o.toBuffer(i.timestamp),
						transactions: i.transactions
					});
					var i;
					t._setCurrentBlock(n), t.emit("rawBlock", r), t.emit("latest", r)
				})
			}), t._blockTracker.on("sync", t.emit.bind(t, "sync")), t._blockTracker.on("error", t.emit.bind(t, "error")), t._running = !0, t.emit("start")
		}, l.prototype.stop = function() {
			this._blockTracker.removeAllListeners(), this._running = !1, this.emit("stop")
		}, l.prototype.isRunning = function() {
			return this._running
		}, l.prototype.addProvider = function(e, t) {
			const r = this;
			"number" == typeof t ? r._providers.splice(t, 0, e) : r._providers.push(e), e.setEngine(this)
		}, l.prototype.removeProvider = function(e) {
			const t = this._providers.indexOf(e);
			if (t < 0) throw new Error("Provider not found.");
			this._providers.splice(t, 1)
		}, l.prototype.send = function(e) {
			throw new Error("Web3ProviderEngine does not support synchronous requests.")
		}, l.prototype.sendAsync = function(e, t) {
			const r = this;
			r._ready.await((function() {
				Array.isArray(e) ? s(e, r._handleAsync.bind(r), t) : r._handleAsync(e, t)
			}))
		}, l.prototype._getBlockByNumberWithRetry = function(e, t) {
			const r = this;
			let n = 5;
			return void i();

			function i() {
				r._getBlockByNumber(e, o)
			}

			function o(e, r) {
				return e ? t(e) : r ? void t(null, r) : n > 0 ? (n--, void setTimeout((function() {
					i()
				}), 1e3)) : void t(null, null)
			}
		}, l.prototype._getBlockByNumber = function(e, t) {
			const r = f({
				method: "eth_getBlockByNumber",
				params: [e, !1],
				skipCache: !0
			});
			this._handleAsync(r, (e, r) => e ? t(e) : t(null, r.result))
		}, l.prototype._handleAsync = function(e, t) {
			var r = this,
				n = -1,
				i = null,
				o = null,
				a = [];

			function s(r, n) {
				o = r, i = n, u(a, (function(e, t) {
					e ? e(o, i, t) : t()
				}), (function() {
					var r = {
						id: e.id,
						jsonrpc: e.jsonrpc,
						result: i
					};
					null != o ? (r.error = {
						message: o.stack || o.message || o,
						code: -32e3
					}, t(o, r)) : t(null, r)
				}))
			}! function t(i) {
				if (n += 1, a.unshift(i), n >= r._providers.length) s(new Error('Request for method "' + e.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));
				else try {
					r._providers[n].handleRequest(e, t, s)
				} catch (e) {
					s(e)
				}
			}()
		}, l.prototype._setCurrentBlock = function(e) {
			this.currentBlock = e, this.emit("block", e)
		}
	}, function(e, t) {
		e.exports = function(e) {
			return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
		}
	}, function(e, t) {
		"function" == typeof Object.create ? e.exports = function(e, t) {
			e.super_ = t, e.prototype = Object.create(t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			})
		} : e.exports = function(e, t) {
			e.super_ = t;
			var r = function() {};
			r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
		}
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.createHashFunction = function(t) {
				return function(r) {
					var n = t();
					return n.update(r), e.from(n.digest())
				}
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		e.exports = r(229)(r(239))
	}, function(e, t, r) {
		const n = r(230),
			i = r(238);
		e.exports = function(e) {
			const t = n(e),
				r = i(e);
			return function(e, n) {
				switch ("string" == typeof e ? e.toLowerCase() : e) {
					case "keccak224":
						return new t(1152, 448, null, 224, n);
					case "keccak256":
						return new t(1088, 512, null, 256, n);
					case "keccak384":
						return new t(832, 768, null, 384, n);
					case "keccak512":
						return new t(576, 1024, null, 512, n);
					case "sha3-224":
						return new t(1152, 448, 6, 224, n);
					case "sha3-256":
						return new t(1088, 512, 6, 256, n);
					case "sha3-384":
						return new t(832, 768, 6, 384, n);
					case "sha3-512":
						return new t(576, 1024, 6, 512, n);
					case "shake128":
						return new r(1344, 256, 31, n);
					case "shake256":
						return new r(1088, 512, 31, n);
					default:
						throw new Error("Invald algorithm: " + e)
				}
			}
		}
	}, function(e, t, r) {
		(function(t) {
			const {
				Transform: n
			} = r(111);
			e.exports = e => class r extends n {
				constructor(t, r, n, i, o) {
					super(o), this._rate = t, this._capacity = r, this._delimitedSuffix = n, this._hashBitLength = i, this._options = o, this._state = new e, this._state.initialize(t, r), this._finalized = !1
				}
				_transform(e, t, r) {
					let n = null;
					try {
						this.update(e, t)
					} catch (e) {
						n = e
					}
					r(n)
				}
				_flush(e) {
					let t = null;
					try {
						this.push(this.digest())
					} catch (e) {
						t = e
					}
					e(t)
				}
				update(e, r) {
					if (!t.isBuffer(e) && "string" != typeof e) throw new TypeError("Data must be a string or a buffer");
					if (this._finalized) throw new Error("Digest already called");
					return t.isBuffer(e) || (e = t.from(e, r)), this._state.absorb(e), this
				}
				digest(e) {
					if (this._finalized) throw new Error("Digest already called");
					this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
					let t = this._state.squeeze(this._hashBitLength / 8);
					return void 0 !== e && (t = t.toString(e)), this._resetState(), t
				}
				_resetState() {
					return this._state.initialize(this._rate, this._capacity), this
				}
				_clone() {
					const e = new r(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
					return this._state.copy(e._state), e._finalized = this._finalized, e
				}
			}
		}).call(this, r(2).Buffer)
	}, function(e, t) {}, function(e, t, r) {
		"use strict";

		function n(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), r.push.apply(r, n)
			}
			return r
		}

		function i(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		}

		function o(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
			}
		}
		var a = r(2).Buffer,
			s = r(233).inspect,
			u = s && s.custom || "inspect";
		e.exports = function() {
			function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.head = null, this.tail = null, this.length = 0
			}
			var t, r, c;
			return t = e, (r = [{
				key: "push",
				value: function(e) {
					var t = {
						data: e,
						next: null
					};
					this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
				}
			}, {
				key: "unshift",
				value: function(e) {
					var t = {
						data: e,
						next: this.head
					};
					0 === this.length && (this.tail = t), this.head = t, ++this.length
				}
			}, {
				key: "shift",
				value: function() {
					if (0 !== this.length) {
						var e = this.head.data;
						return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
					}
				}
			}, {
				key: "clear",
				value: function() {
					this.head = this.tail = null, this.length = 0
				}
			}, {
				key: "join",
				value: function(e) {
					if (0 === this.length) return "";
					for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
					return r
				}
			}, {
				key: "concat",
				value: function(e) {
					if (0 === this.length) return a.alloc(0);
					for (var t, r, n, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0; o;) t = o.data, r = i, n = s, a.prototype.copy.call(t, r, n), s += o.data.length, o = o.next;
					return i
				}
			}, {
				key: "consume",
				value: function(e, t) {
					var r;
					return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
				}
			}, {
				key: "first",
				value: function() {
					return this.head.data
				}
			}, {
				key: "_getString",
				value: function(e) {
					var t = this.head,
						r = 1,
						n = t.data;
					for (e -= n.length; t = t.next;) {
						var i = t.data,
							o = e > i.length ? i.length : e;
						if (o === i.length ? n += i : n += i.slice(0, e), 0 == (e -= o)) {
							o === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o));
							break
						}++r
					}
					return this.length -= r, n
				}
			}, {
				key: "_getBuffer",
				value: function(e) {
					var t = a.allocUnsafe(e),
						r = this.head,
						n = 1;
					for (r.data.copy(t), e -= r.data.length; r = r.next;) {
						var i = r.data,
							o = e > i.length ? i.length : e;
						if (i.copy(t, t.length - e, 0, o), 0 == (e -= o)) {
							o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o));
							break
						}++n
					}
					return this.length -= n, t
				}
			}, {
				key: u,
				value: function(e, t) {
					return s(this, function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = null != arguments[t] ? arguments[t] : {};
							t % 2 ? n(Object(r), !0).forEach((function(t) {
								i(e, t, r[t])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
							}))
						}
						return e
					}({}, t, {
						depth: 0,
						customInspect: !1
					}))
				}
			}]) && o(t.prototype, r), c && o(t, c), e
		}()
	}, function(e, t) {}, function(e, t, r) {
		"use strict";
		(function(t) {
			var n;

			function i(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var o = r(57),
				a = Symbol("lastResolve"),
				s = Symbol("lastReject"),
				u = Symbol("error"),
				c = Symbol("ended"),
				f = Symbol("lastPromise"),
				h = Symbol("handlePromise"),
				l = Symbol("stream");

			function d(e, t) {
				return {
					value: e,
					done: t
				}
			}

			function p(e) {
				var t = e[a];
				if (null !== t) {
					var r = e[l].read();
					null !== r && (e[f] = null, e[a] = null, e[s] = null, t(d(r, !1)))
				}
			}

			function b(e) {
				t.nextTick(p, e)
			}
			var g = Object.getPrototypeOf((function() {})),
				m = Object.setPrototypeOf((i(n = {
					get stream() {
						return this[l]
					},
					next: function() {
						var e = this,
							r = this[u];
						if (null !== r) return Promise.reject(r);
						if (this[c]) return Promise.resolve(d(void 0, !0));
						if (this[l].destroyed) return new Promise((function(r, n) {
							t.nextTick((function() {
								e[u] ? n(e[u]) : r(d(void 0, !0))
							}))
						}));
						var n, i = this[f];
						if (i) n = new Promise(function(e, t) {
							return function(r, n) {
								e.then((function() {
									t[c] ? r(d(void 0, !0)) : t[h](r, n)
								}), n)
							}
						}(i, this));
						else {
							var o = this[l].read();
							if (null !== o) return Promise.resolve(d(o, !1));
							n = new Promise(this[h])
						}
						return this[f] = n, n
					}
				}, Symbol.asyncIterator, (function() {
					return this
				})), i(n, "return", (function() {
					var e = this;
					return new Promise((function(t, r) {
						e[l].destroy(null, (function(e) {
							e ? r(e) : t(d(void 0, !0))
						}))
					}))
				})), n), g);
			e.exports = function(e) {
				var t, r = Object.create(m, (i(t = {}, l, {
					value: e,
					writable: !0
				}), i(t, a, {
					value: null,
					writable: !0
				}), i(t, s, {
					value: null,
					writable: !0
				}), i(t, u, {
					value: null,
					writable: !0
				}), i(t, c, {
					value: e._readableState.endEmitted,
					writable: !0
				}), i(t, h, {
					value: function(e, t) {
						var n = r[l].read();
						n ? (r[f] = null, r[a] = null, r[s] = null, e(d(n, !1))) : (r[a] = e, r[s] = t)
					},
					writable: !0
				}), t));
				return r[f] = null, o(e, (function(e) {
					if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
						var t = r[s];
						return null !== t && (r[f] = null, r[a] = null, r[s] = null, t(e)), void(r[u] = e)
					}
					var n = r[a];
					null !== n && (r[f] = null, r[a] = null, r[s] = null, n(d(void 0, !0))), r[c] = !0
				})), e.on("readable", b.bind(null, r)), r
			}
		}).call(this, r(5))
	}, function(e, t) {
		e.exports = function() {
			throw new Error("Readable.from is not available in the browser")
		}
	}, function(e, t, r) {
		"use strict";
		e.exports = i;
		var n = r(117);

		function i(e) {
			if (!(this instanceof i)) return new i(e);
			n.call(this, e)
		}
		r(3)(i, n), i.prototype._transform = function(e, t, r) {
			r(null, e)
		}
	}, function(e, t, r) {
		"use strict";
		var n;
		var i = r(26).codes,
			o = i.ERR_MISSING_ARGS,
			a = i.ERR_STREAM_DESTROYED;

		function s(e) {
			if (e) throw e
		}

		function u(e, t, i, o) {
			o = function(e) {
				var t = !1;
				return function() {
					t || (t = !0, e.apply(void 0, arguments))
				}
			}(o);
			var s = !1;
			e.on("close", (function() {
				s = !0
			})), void 0 === n && (n = r(57)), n(e, {
				readable: t,
				writable: i
			}, (function(e) {
				if (e) return o(e);
				s = !0, o()
			}));
			var u = !1;
			return function(t) {
				if (!s && !u) return u = !0,
					function(e) {
						return e.setHeader && "function" == typeof e.abort
					}(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void o(t || new a("pipe"))
			}
		}

		function c(e) {
			e()
		}

		function f(e, t) {
			return e.pipe(t)
		}

		function h(e) {
			return e.length ? "function" != typeof e[e.length - 1] ? s : e.pop() : s
		}
		e.exports = function() {
			for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			var n, i = h(t);
			if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new o("streams");
			var a = t.map((function(e, r) {
				var o = r < t.length - 1;
				return u(e, o, r > 0, (function(e) {
					n || (n = e), e && a.forEach(c), o || (a.forEach(c), i(n))
				}))
			}));
			return t.reduce(f)
		}
	}, function(e, t, r) {
		(function(t) {
			const {
				Transform: n
			} = r(111);
			e.exports = e => class r extends n {
				constructor(t, r, n, i) {
					super(i), this._rate = t, this._capacity = r, this._delimitedSuffix = n, this._options = i, this._state = new e, this._state.initialize(t, r), this._finalized = !1
				}
				_transform(e, t, r) {
					let n = null;
					try {
						this.update(e, t)
					} catch (e) {
						n = e
					}
					r(n)
				}
				_flush() {}
				_read(e) {
					this.push(this.squeeze(e))
				}
				update(e, r) {
					if (!t.isBuffer(e) && "string" != typeof e) throw new TypeError("Data must be a string or a buffer");
					if (this._finalized) throw new Error("Squeeze already called");
					return t.isBuffer(e) || (e = t.from(e, r)), this._state.absorb(e), this
				}
				squeeze(e, t) {
					this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
					let r = this._state.squeeze(e);
					return void 0 !== t && (r = r.toString(t)), r
				}
				_resetState() {
					return this._state.initialize(this._rate, this._capacity), this
				}
				_clone() {
					const e = new r(this._rate, this._capacity, this._delimitedSuffix, this._options);
					return this._state.copy(e._state), e._finalized = this._finalized, e
				}
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		(function(t) {
			const n = r(240);

			function i() {
				this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1
			}
			i.prototype.initialize = function(e, t) {
				for (let e = 0; e < 50; ++e) this.state[e] = 0;
				this.blockSize = e / 8, this.count = 0, this.squeezing = !1
			}, i.prototype.absorb = function(e) {
				for (let t = 0; t < e.length; ++t) this.state[~~(this.count / 4)] ^= e[t] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (n.p1600(this.state), this.count = 0)
			}, i.prototype.absorbLastFewBits = function(e) {
				this.state[~~(this.count / 4)] ^= e << this.count % 4 * 8, 0 != (128 & e) && this.count === this.blockSize - 1 && n.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, n.p1600(this.state), this.count = 0, this.squeezing = !0
			}, i.prototype.squeeze = function(e) {
				this.squeezing || this.absorbLastFewBits(1);
				const r = t.alloc(e);
				for (let t = 0; t < e; ++t) r[t] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (n.p1600(this.state), this.count = 0);
				return r
			}, i.prototype.copy = function(e) {
				for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
				e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing
			}, e.exports = i
		}).call(this, r(2).Buffer)
	}, function(e, t) {
		const r = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
		t.p1600 = function(e) {
			for (let t = 0; t < 24; ++t) {
				const n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
					i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
					o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
					a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
					s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
					u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
					c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
					f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
					h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
					l = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
				let d = h ^ (o << 1 | a >>> 31),
					p = l ^ (a << 1 | o >>> 31);
				const b = e[0] ^ d,
					g = e[1] ^ p,
					m = e[10] ^ d,
					y = e[11] ^ p,
					v = e[20] ^ d,
					_ = e[21] ^ p,
					w = e[30] ^ d,
					M = e[31] ^ p,
					S = e[40] ^ d,
					x = e[41] ^ p;
				d = n ^ (s << 1 | u >>> 31), p = i ^ (u << 1 | s >>> 31);
				const E = e[2] ^ d,
					k = e[3] ^ p,
					A = e[12] ^ d,
					R = e[13] ^ p,
					T = e[22] ^ d,
					C = e[23] ^ p,
					O = e[32] ^ d,
					P = e[33] ^ p,
					I = e[42] ^ d,
					B = e[43] ^ p;
				d = o ^ (c << 1 | f >>> 31), p = a ^ (f << 1 | c >>> 31);
				const L = e[4] ^ d,
					j = e[5] ^ p,
					N = e[14] ^ d,
					U = e[15] ^ p,
					q = e[24] ^ d,
					D = e[25] ^ p,
					H = e[34] ^ d,
					z = e[35] ^ p,
					F = e[44] ^ d,
					W = e[45] ^ p;
				d = s ^ (h << 1 | l >>> 31), p = u ^ (l << 1 | h >>> 31);
				const K = e[6] ^ d,
					V = e[7] ^ p,
					J = e[16] ^ d,
					Y = e[17] ^ p,
					G = e[26] ^ d,
					Z = e[27] ^ p,
					$ = e[36] ^ d,
					X = e[37] ^ p,
					Q = e[46] ^ d,
					ee = e[47] ^ p;
				d = c ^ (n << 1 | i >>> 31), p = f ^ (i << 1 | n >>> 31);
				const te = e[8] ^ d,
					re = e[9] ^ p,
					ne = e[18] ^ d,
					ie = e[19] ^ p,
					oe = e[28] ^ d,
					ae = e[29] ^ p,
					se = e[38] ^ d,
					ue = e[39] ^ p,
					ce = e[48] ^ d,
					fe = e[49] ^ p,
					he = b,
					le = g,
					de = y << 4 | m >>> 28,
					pe = m << 4 | y >>> 28,
					be = v << 3 | _ >>> 29,
					ge = _ << 3 | v >>> 29,
					me = M << 9 | w >>> 23,
					ye = w << 9 | M >>> 23,
					ve = S << 18 | x >>> 14,
					_e = x << 18 | S >>> 14,
					we = E << 1 | k >>> 31,
					Me = k << 1 | E >>> 31,
					Se = R << 12 | A >>> 20,
					xe = A << 12 | R >>> 20,
					Ee = T << 10 | C >>> 22,
					ke = C << 10 | T >>> 22,
					Ae = P << 13 | O >>> 19,
					Re = O << 13 | P >>> 19,
					Te = I << 2 | B >>> 30,
					Ce = B << 2 | I >>> 30,
					Oe = j << 30 | L >>> 2,
					Pe = L << 30 | j >>> 2,
					Ie = N << 6 | U >>> 26,
					Be = U << 6 | N >>> 26,
					Le = D << 11 | q >>> 21,
					je = q << 11 | D >>> 21,
					Ne = H << 15 | z >>> 17,
					Ue = z << 15 | H >>> 17,
					qe = W << 29 | F >>> 3,
					De = F << 29 | W >>> 3,
					He = K << 28 | V >>> 4,
					ze = V << 28 | K >>> 4,
					Fe = Y << 23 | J >>> 9,
					We = J << 23 | Y >>> 9,
					Ke = G << 25 | Z >>> 7,
					Ve = Z << 25 | G >>> 7,
					Je = $ << 21 | X >>> 11,
					Ye = X << 21 | $ >>> 11,
					Ge = ee << 24 | Q >>> 8,
					Ze = Q << 24 | ee >>> 8,
					$e = te << 27 | re >>> 5,
					Xe = re << 27 | te >>> 5,
					Qe = ne << 20 | ie >>> 12,
					et = ie << 20 | ne >>> 12,
					tt = ae << 7 | oe >>> 25,
					rt = oe << 7 | ae >>> 25,
					nt = se << 8 | ue >>> 24,
					it = ue << 8 | se >>> 24,
					ot = ce << 14 | fe >>> 18,
					at = fe << 14 | ce >>> 18;
				e[0] = he ^ ~Se & Le, e[1] = le ^ ~xe & je, e[10] = He ^ ~Qe & be, e[11] = ze ^ ~et & ge, e[20] = we ^ ~Ie & Ke, e[21] = Me ^ ~Be & Ve, e[30] = $e ^ ~de & Ee, e[31] = Xe ^ ~pe & ke, e[40] = Oe ^ ~Fe & tt, e[41] = Pe ^ ~We & rt, e[2] = Se ^ ~Le & Je, e[3] = xe ^ ~je & Ye, e[12] = Qe ^ ~be & Ae, e[13] = et ^ ~ge & Re, e[22] = Ie ^ ~Ke & nt, e[23] = Be ^ ~Ve & it, e[32] = de ^ ~Ee & Ne, e[33] = pe ^ ~ke & Ue, e[42] = Fe ^ ~tt & me, e[43] = We ^ ~rt & ye, e[4] = Le ^ ~Je & ot, e[5] = je ^ ~Ye & at, e[14] = be ^ ~Ae & qe, e[15] = ge ^ ~Re & De, e[24] = Ke ^ ~nt & ve, e[25] = Ve ^ ~it & _e, e[34] = Ee ^ ~Ne & Ge, e[35] = ke ^ ~Ue & Ze, e[44] = tt ^ ~me & Te, e[45] = rt ^ ~ye & Ce, e[6] = Je ^ ~ot & he, e[7] = Ye ^ ~at & le, e[16] = Ae ^ ~qe & He, e[17] = Re ^ ~De & ze, e[26] = nt ^ ~ve & we, e[27] = it ^ ~_e & Me, e[36] = Ne ^ ~Ge & $e, e[37] = Ue ^ ~Ze & Xe, e[46] = me ^ ~Te & Oe, e[47] = ye ^ ~Ce & Pe, e[8] = ot ^ ~he & Se, e[9] = at ^ ~le & xe, e[18] = qe ^ ~He & Qe, e[19] = De ^ ~ze & et, e[28] = ve ^ ~we & Ie, e[29] = _e ^ ~Me & Be, e[38] = Ge ^ ~$e & de, e[39] = Ze ^ ~Xe & pe, e[48] = Te ^ ~Oe & Fe, e[49] = Ce ^ ~Pe & We, e[0] ^= r[2 * t], e[1] ^= r[2 * t + 1]
			}
		}
	}, function(e, t, r) {
		"use strict";
		(function(t) {
			var n = r(118),
				i = r(266),
				o = r(267),
				a = function(e) {
					return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e))
				};
			e.exports = {
				privateKeyVerify: a,
				privateKeyExport: function(e, t) {
					if (32 !== e.length) throw new RangeError("private key length is invalid");
					var r = i.privateKeyExport(e, t);
					return o.privateKeyExport(e, r, t)
				},
				privateKeyImport: function(e) {
					if (null !== (e = o.privateKeyImport(e)) && 32 === e.length && a(e)) return e;
					throw new Error("couldn't import from DER format")
				},
				privateKeyNegate: function(e) {
					return t.from(n.privateKeyNegate(Uint8Array.from(e)))
				},
				privateKeyModInverse: function(e) {
					if (32 !== e.length) throw new Error("private key length is invalid");
					return t.from(i.privateKeyModInverse(Uint8Array.from(e)))
				},
				privateKeyTweakAdd: function(e, r) {
					return t.from(n.privateKeyTweakAdd(Uint8Array.from(e), r))
				},
				privateKeyTweakMul: function(e, r) {
					return t.from(n.privateKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r)))
				},
				publicKeyCreate: function(e, r) {
					return t.from(n.publicKeyCreate(Uint8Array.from(e), r))
				},
				publicKeyConvert: function(e, r) {
					return t.from(n.publicKeyConvert(Uint8Array.from(e), r))
				},
				publicKeyVerify: function(e) {
					return (33 === e.length || 65 === e.length) && n.publicKeyVerify(Uint8Array.from(e))
				},
				publicKeyTweakAdd: function(e, r, i) {
					return t.from(n.publicKeyTweakAdd(Uint8Array.from(e), Uint8Array.from(r), i))
				},
				publicKeyTweakMul: function(e, r, i) {
					return t.from(n.publicKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r), i))
				},
				publicKeyCombine: function(e, r) {
					var i = [];
					return e.forEach((function(e) {
						i.push(Uint8Array.from(e))
					})), t.from(n.publicKeyCombine(i, r))
				},
				signatureNormalize: function(e) {
					return t.from(n.signatureNormalize(Uint8Array.from(e)))
				},
				signatureExport: function(e) {
					return t.from(n.signatureExport(Uint8Array.from(e)))
				},
				signatureImport: function(e) {
					return t.from(n.signatureImport(Uint8Array.from(e)))
				},
				signatureImportLax: function(e) {
					if (0 === e.length) throw new RangeError("signature length is invalid");
					var t = o.signatureImportLax(e);
					if (null === t) throw new Error("couldn't parse DER signature");
					return i.signatureImport(t)
				},
				sign: function(e, r, i) {
					if (null === i) throw new TypeError("options should be an Object");
					var o = void 0;
					if (i) {
						if (o = {}, null === i.data) throw new TypeError("options.data should be a Buffer");
						if (i.data) {
							if (32 !== i.data.length) throw new RangeError("options.data length is invalid");
							o.data = new Uint8Array(i.data)
						}
						if (null === i.noncefn) throw new TypeError("options.noncefn should be a Function");
						i.noncefn && (o.noncefn = function(e, r, n, o, a) {
							var s = null != n ? t.from(n) : null,
								u = null != o ? t.from(o) : null,
								c = t.from("");
							return i.noncefn && (c = i.noncefn(t.from(e), t.from(r), s, u, a)), Uint8Array.from(c)
						})
					}
					var a = n.ecdsaSign(Uint8Array.from(e), Uint8Array.from(r), o);
					return {
						signature: t.from(a.signature),
						recovery: a.recid
					}
				},
				verify: function(e, t, r) {
					return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r)
				},
				recover: function(e, r, i, o) {
					return t.from(n.ecdsaRecover(Uint8Array.from(r), i, Uint8Array.from(e), o))
				},
				ecdh: function(e, r) {
					return t.from(n.ecdh(Uint8Array.from(e), Uint8Array.from(r), {}))
				},
				ecdhUnsafe: function(e, r, n) {
					if (33 !== e.length && 65 !== e.length) throw new RangeError("public key length is invalid");
					if (32 !== r.length) throw new RangeError("private key length is invalid");
					return t.from(i.ecdhUnsafe(Uint8Array.from(e), Uint8Array.from(r), n))
				}
			}
		}).call(this, r(2).Buffer)
	}, function(e, t) {
		const r = "Impossible case. Please create issue.",
			n = "The tweak was out of range or the resulted private key is invalid",
			i = "The tweak was out of range or equal to zero",
			o = "Unknow error on context randomization",
			a = "Private Key is invalid",
			s = "Public Key could not be parsed",
			u = "Public Key serialization error",
			c = "The sum of the public keys is not valid",
			f = "Signature could not be parsed",
			h = "The nonce generation function failed, or the private key was invalid",
			l = "Public key could not be recover",
			d = "Scalar was invalid (zero or overflow)";

		function p(e, t) {
			if (!e) throw new Error(t)
		}

		function b(e, t, r) {
			if (p(t instanceof Uint8Array, `Expected ${e} to be an Uint8Array`), void 0 !== r)
				if (Array.isArray(r)) {
					const n = `Expected ${e} to be an Uint8Array with length [${r.join(", ")}]`;
					p(r.includes(t.length), n)
				} else {
					const n = `Expected ${e} to be an Uint8Array with length ${r}`;
					p(t.length === r, n)
				}
		}

		function g(e) {
			p("Boolean" === y(e), "Expected compressed to be a Boolean")
		}

		function m(e = (e => new Uint8Array(e)), t) {
			return "function" == typeof e && (e = e(t)), b("output", e, t), e
		}

		function y(e) {
			return Object.prototype.toString.call(e).slice(8, -1)
		}
		e.exports = e => ({
			contextRandomize(t) {
				switch (p(null === t || t instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), null !== t && b("seed", t, 32), e.contextRandomize(t)) {
					case 1:
						throw new Error(o)
				}
			},
			privateKeyVerify: t => (b("private key", t, 32), 0 === e.privateKeyVerify(t)),
			privateKeyNegate(t) {
				switch (b("private key", t, 32), e.privateKeyNegate(t)) {
					case 0:
						return t;
					case 1:
						throw new Error(r)
				}
			},
			privateKeyTweakAdd(t, r) {
				switch (b("private key", t, 32), b("tweak", r, 32), e.privateKeyTweakAdd(t, r)) {
					case 0:
						return t;
					case 1:
						throw new Error(n)
				}
			},
			privateKeyTweakMul(t, r) {
				switch (b("private key", t, 32), b("tweak", r, 32), e.privateKeyTweakMul(t, r)) {
					case 0:
						return t;
					case 1:
						throw new Error(i)
				}
			},
			publicKeyVerify: t => (b("public key", t, [33, 65]), 0 === e.publicKeyVerify(t)),
			publicKeyCreate(t, r = !0, n) {
				switch (b("private key", t, 32), g(r), n = m(n, r ? 33 : 65), e.publicKeyCreate(n, t)) {
					case 0:
						return n;
					case 1:
						throw new Error(a);
					case 2:
						throw new Error(u)
				}
			},
			publicKeyConvert(t, r = !0, n) {
				switch (b("public key", t, [33, 65]), g(r), n = m(n, r ? 33 : 65), e.publicKeyConvert(n, t)) {
					case 0:
						return n;
					case 1:
						throw new Error(s);
					case 2:
						throw new Error(u)
				}
			},
			publicKeyNegate(t, n = !0, i) {
				switch (b("public key", t, [33, 65]), g(n), i = m(i, n ? 33 : 65), e.publicKeyNegate(i, t)) {
					case 0:
						return i;
					case 1:
						throw new Error(s);
					case 2:
						throw new Error(r);
					case 3:
						throw new Error(u)
				}
			},
			publicKeyCombine(t, r = !0, n) {
				p(Array.isArray(t), "Expected public keys to be an Array"), p(t.length > 0, "Expected public keys array will have more than zero items");
				for (const e of t) b("public key", e, [33, 65]);
				switch (g(r), n = m(n, r ? 33 : 65), e.publicKeyCombine(n, t)) {
					case 0:
						return n;
					case 1:
						throw new Error(s);
					case 2:
						throw new Error(c);
					case 3:
						throw new Error(u)
				}
			},
			publicKeyTweakAdd(t, r, i = !0, o) {
				switch (b("public key", t, [33, 65]), b("tweak", r, 32), g(i), o = m(o, i ? 33 : 65), e.publicKeyTweakAdd(o, t, r)) {
					case 0:
						return o;
					case 1:
						throw new Error(s);
					case 2:
						throw new Error(n)
				}
			},
			publicKeyTweakMul(t, r, n = !0, o) {
				switch (b("public key", t, [33, 65]), b("tweak", r, 32), g(n), o = m(o, n ? 33 : 65), e.publicKeyTweakMul(o, t, r)) {
					case 0:
						return o;
					case 1:
						throw new Error(s);
					case 2:
						throw new Error(i)
				}
			},
			signatureNormalize(t) {
				switch (b("signature", t, 64), e.signatureNormalize(t)) {
					case 0:
						return t;
					case 1:
						throw new Error(f)
				}
			},
			signatureExport(t, n) {
				b("signature", t, 64);
				const i = {
					output: n = m(n, 72),
					outputlen: 72
				};
				switch (e.signatureExport(i, t)) {
					case 0:
						return n.slice(0, i.outputlen);
					case 1:
						throw new Error(f);
					case 2:
						throw new Error(r)
				}
			},
			signatureImport(t, n) {
				switch (b("signature", t), n = m(n, 64), e.signatureImport(n, t)) {
					case 0:
						return n;
					case 1:
						throw new Error(f);
					case 2:
						throw new Error(r)
				}
			},
			ecdsaSign(t, n, i = {}, o) {
				b("message", t, 32), b("private key", n, 32), p("Object" === y(i), "Expected options to be an Object"), void 0 !== i.data && b("options.data", i.data), void 0 !== i.noncefn && p("Function" === y(i.noncefn), "Expected options.noncefn to be a Function");
				const a = {
					signature: o = m(o, 64),
					recid: null
				};
				switch (e.ecdsaSign(a, t, n, i.data, i.noncefn)) {
					case 0:
						return a;
					case 1:
						throw new Error(h);
					case 2:
						throw new Error(r)
				}
			},
			ecdsaVerify(t, r, n) {
				switch (b("signature", t, 64), b("message", r, 32), b("public key", n, [33, 65]), e.ecdsaVerify(t, r, n)) {
					case 0:
						return !0;
					case 3:
						return !1;
					case 1:
						throw new Error(f);
					case 2:
						throw new Error(s)
				}
			},
			ecdsaRecover(t, n, i, o = !0, a) {
				switch (b("signature", t, 64), p("Number" === y(n) && n >= 0 && n <= 3, "Expected recovery id to be a Number within interval [0, 3]"), b("message", i, 32), g(o), a = m(a, o ? 33 : 65), e.ecdsaRecover(a, t, n, i)) {
					case 0:
						return a;
					case 1:
						throw new Error(f);
					case 2:
						throw new Error(l);
					case 3:
						throw new Error(r)
				}
			},
			ecdh(t, r, n = {}, i) {
				switch (b("public key", t, [33, 65]), b("private key", r, 32), p("Object" === y(n), "Expected options to be an Object"), void 0 !== n.data && b("options.data", n.data), void 0 !== n.hashfn ? (p("Function" === y(n.hashfn), "Expected options.hashfn to be a Function"), void 0 !== n.xbuf && b("options.xbuf", n.xbuf, 32), void 0 !== n.ybuf && b("options.ybuf", n.ybuf, 32), b("output", i)) : i = m(i, 32), e.ecdh(i, t, r, n.data, n.hashfn, n.xbuf, n.ybuf)) {
					case 0:
						return i;
					case 1:
						throw new Error(s);
					case 2:
						throw new Error(d)
				}
			}
		})
	}, function(e, t, r) {
		const n = new(0, r(58).ec)("secp256k1"),
			i = n.curve,
			o = i.n.constructor;

		function a(e) {
			const t = e[0];
			switch (t) {
				case 2:
				case 3:
					return 33 !== e.length ? null : function(e, t) {
						let r = new o(t);
						if (r.cmp(i.p) >= 0) return null;
						r = r.toRed(i.red);
						let a = r.redSqr().redIMul(r).redIAdd(i.b).redSqrt();
						return 3 === e !== a.isOdd() && (a = a.redNeg()), n.keyPair({
							pub: {
								x: r,
								y: a
							}
						})
					}(t, e.subarray(1, 33));
				case 4:
				case 6:
				case 7:
					return 65 !== e.length ? null : function(e, t, r) {
						let a = new o(t),
							s = new o(r);
						if (a.cmp(i.p) >= 0 || s.cmp(i.p) >= 0) return null;
						if (a = a.toRed(i.red), s = s.toRed(i.red), (6 === e || 7 === e) && s.isOdd() !== (7 === e)) return null;
						const u = a.redSqr().redIMul(a);
						return s.redSqr().redISub(u.redIAdd(i.b)).isZero() ? n.keyPair({
							pub: {
								x: a,
								y: s
							}
						}) : null
					}(t, e.subarray(1, 33), e.subarray(33, 65));
				default:
					return null
			}
		}

		function s(e, t) {
			const r = t.encode(null, 33 === e.length);
			for (let t = 0; t < e.length; ++t) e[t] = r[t]
		}
		e.exports = {
			contextRandomize: () => 0,
			privateKeyVerify(e) {
				const t = new o(e);
				return t.cmp(i.n) < 0 && !t.isZero() ? 0 : 1
			},
			privateKeyNegate(e) {
				const t = new o(e),
					r = i.n.sub(t).umod(i.n).toArrayLike(Uint8Array, "be", 32);
				return e.set(r), 0
			},
			privateKeyTweakAdd(e, t) {
				const r = new o(t);
				if (r.cmp(i.n) >= 0) return 1;
				if (r.iadd(new o(e)), r.cmp(i.n) >= 0 && r.isub(i.n), r.isZero()) return 1;
				const n = r.toArrayLike(Uint8Array, "be", 32);
				return e.set(n), 0
			},
			privateKeyTweakMul(e, t) {
				let r = new o(t);
				if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
				r.imul(new o(e)), r.cmp(i.n) >= 0 && (r = r.umod(i.n));
				const n = r.toArrayLike(Uint8Array, "be", 32);
				return e.set(n), 0
			},
			publicKeyVerify: e => null === a(e) ? 1 : 0,
			publicKeyCreate(e, t) {
				const r = new o(t);
				if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
				return s(e, n.keyFromPrivate(t).getPublic()), 0
			},
			publicKeyConvert(e, t) {
				const r = a(t);
				if (null === r) return 1;
				return s(e, r.getPublic()), 0
			},
			publicKeyNegate(e, t) {
				const r = a(t);
				if (null === r) return 1;
				const n = r.getPublic();
				return n.y = n.y.redNeg(), s(e, n), 0
			},
			publicKeyCombine(e, t) {
				const r = new Array(t.length);
				for (let e = 0; e < t.length; ++e)
					if (r[e] = a(t[e]), null === r[e]) return 1;
				let n = r[0].getPublic();
				for (let e = 1; e < r.length; ++e) n = n.add(r[e].pub);
				return n.isInfinity() ? 2 : (s(e, n), 0)
			},
			publicKeyTweakAdd(e, t, r) {
				const n = a(t);
				if (null === n) return 1;
				if ((r = new o(r)).cmp(i.n) >= 0) return 2;
				const u = n.getPublic().add(i.g.mul(r));
				return u.isInfinity() ? 2 : (s(e, u), 0)
			},
			publicKeyTweakMul(e, t, r) {
				const n = a(t);
				if (null === n) return 1;
				if ((r = new o(r)).cmp(i.n) >= 0 || r.isZero()) return 2;
				return s(e, n.getPublic().mul(r)), 0
			},
			signatureNormalize(e) {
				const t = new o(e.subarray(0, 32)),
					r = new o(e.subarray(32, 64));
				return t.cmp(i.n) >= 0 || r.cmp(i.n) >= 0 ? 1 : (1 === r.cmp(n.nh) && e.set(i.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32), 0)
			},
			signatureExport(e, t) {
				const r = t.subarray(0, 32),
					n = t.subarray(32, 64);
				if (new o(r).cmp(i.n) >= 0) return 1;
				if (new o(n).cmp(i.n) >= 0) return 1;
				const {
					output: a
				} = e;
				let s = a.subarray(4, 37);
				s[0] = 0, s.set(r, 1);
				let u = 33,
					c = 0;
				for (; u > 1 && 0 === s[c] && !(128 & s[c + 1]); --u, ++c);
				if (s = s.subarray(c), 128 & s[0]) return 1;
				if (u > 1 && 0 === s[0] && !(128 & s[1])) return 1;
				let f = a.subarray(39, 72);
				f[0] = 0, f.set(n, 1);
				let h = 33,
					l = 0;
				for (; h > 1 && 0 === f[l] && !(128 & f[l + 1]); --h, ++l);
				return f = f.subarray(l), 128 & f[0] || h > 1 && 0 === f[0] && !(128 & f[1]) ? 1 : (e.outputlen = 6 + u + h, a[0] = 48, a[1] = e.outputlen - 2, a[2] = 2, a[3] = s.length, a.set(s, 4), a[4 + u] = 2, a[5 + u] = f.length, a.set(f, 6 + u), 0)
			},
			signatureImport(e, t) {
				if (t.length < 8) return 1;
				if (t.length > 72) return 1;
				if (48 !== t[0]) return 1;
				if (t[1] !== t.length - 2) return 1;
				if (2 !== t[2]) return 1;
				const r = t[3];
				if (0 === r) return 1;
				if (5 + r >= t.length) return 1;
				if (2 !== t[4 + r]) return 1;
				const n = t[5 + r];
				if (0 === n) return 1;
				if (6 + r + n !== t.length) return 1;
				if (128 & t[4]) return 1;
				if (r > 1 && 0 === t[4] && !(128 & t[5])) return 1;
				if (128 & t[r + 6]) return 1;
				if (n > 1 && 0 === t[r + 6] && !(128 & t[r + 7])) return 1;
				let a = t.subarray(4, 4 + r);
				if (33 === a.length && 0 === a[0] && (a = a.subarray(1)), a.length > 32) return 1;
				let s = t.subarray(6 + r);
				if (33 === s.length && 0 === s[0] && (s = s.slice(1)), s.length > 32) throw new Error("S length is too long");
				let u = new o(a);
				u.cmp(i.n) >= 0 && (u = new o(0));
				let c = new o(t.subarray(6 + r));
				return c.cmp(i.n) >= 0 && (c = new o(0)), e.set(u.toArrayLike(Uint8Array, "be", 32), 0), e.set(c.toArrayLike(Uint8Array, "be", 32), 32), 0
			},
			ecdsaSign(e, t, r, a, s) {
				if (s) {
					const e = s;
					s = n => {
						const i = e(t, r, null, a, n);
						if (!(i instanceof Uint8Array && 32 === i.length)) throw new Error("This is the way");
						return new o(i)
					}
				}
				const u = new o(r);
				if (u.cmp(i.n) >= 0 || u.isZero()) return 1;
				let c;
				try {
					c = n.sign(t, r, {
						canonical: !0,
						k: s,
						pers: a
					})
				} catch (e) {
					return 1
				}
				return e.signature.set(c.r.toArrayLike(Uint8Array, "be", 32), 0), e.signature.set(c.s.toArrayLike(Uint8Array, "be", 32), 32), e.recid = c.recoveryParam, 0
			},
			ecdsaVerify(e, t, r) {
				const s = {
						r: e.subarray(0, 32),
						s: e.subarray(32, 64)
					},
					u = new o(s.r),
					c = new o(s.s);
				if (u.cmp(i.n) >= 0 || c.cmp(i.n) >= 0) return 1;
				if (1 === c.cmp(n.nh) || u.isZero() || c.isZero()) return 3;
				const f = a(r);
				if (null === f) return 2;
				const h = f.getPublic();
				return n.verify(t, s, h) ? 0 : 3
			},
			ecdsaRecover(e, t, r, a) {
				const u = {
						r: t.slice(0, 32),
						s: t.slice(32, 64)
					},
					c = new o(u.r),
					f = new o(u.s);
				if (c.cmp(i.n) >= 0 || f.cmp(i.n) >= 0) return 1;
				if (c.isZero() || f.isZero()) return 2;
				let h;
				try {
					h = n.recoverPubKey(a, u, r)
				} catch (e) {
					return 2
				}
				return s(e, h), 0
			},
			ecdh(e, t, r, s, u, c, f) {
				const h = a(t);
				if (null === h) return 1;
				const l = new o(r);
				if (l.cmp(i.n) >= 0 || l.isZero()) return 2;
				const d = h.getPublic().mul(l);
				if (void 0 === u) {
					const t = d.encode(null, !0),
						r = n.hash().update(t).digest();
					for (let t = 0; t < 32; ++t) e[t] = r[t]
				} else {
					c || (c = new Uint8Array(32));
					const t = d.getX().toArray("be", 32);
					for (let e = 0; e < 32; ++e) c[e] = t[e];
					f || (f = new Uint8Array(32));
					const r = d.getY().toArray("be", 32);
					for (let e = 0; e < 32; ++e) f[e] = r[e];
					const n = u(c, f, s);
					if (!(n instanceof Uint8Array && n.length === e.length)) return 2;
					e.set(n)
				}
				return 0
			}
		}
	}, function(e) {
		e.exports = JSON.parse('{"name":"elliptic","version":"6.5.4","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"lint":"eslint lib test","lint:fix":"npm run lint -- --fix","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^2.0.2","coveralls":"^3.1.0","eslint":"^7.6.0","grunt":"^1.2.1","grunt-browserify":"^5.3.0","grunt-cli":"^1.3.2","grunt-contrib-connect":"^3.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^5.0.0","grunt-mocha-istanbul":"^5.0.2","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.5","mocha":"^8.0.1"},"dependencies":{"bn.js":"^4.11.9","brorand":"^1.1.0","hash.js":"^1.0.0","hmac-drbg":"^1.0.1","inherits":"^2.0.4","minimalistic-assert":"^1.0.1","minimalistic-crypto-utils":"^1.0.1"}}')
	}, function(e, t) {}, function(e, t) {}, function(e, t, r) {
		"use strict";
		var n = r(11),
			i = r(16),
			o = r(3),
			a = r(45),
			s = n.assert;

		function u(e) {
			a.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
		}

		function c(e, t, r, n) {
			a.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
		}

		function f(e, t, r, n) {
			a.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
		}
		o(u, a), e.exports = u, u.prototype._getEndomorphism = function(e) {
			if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
				var t, r;
				if (e.beta) t = new i(e.beta, 16).toRed(this.red);
				else {
					var n = this._getEndoRoots(this.p);
					t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
				}
				if (e.lambda) r = new i(e.lambda, 16);
				else {
					var o = this._getEndoRoots(this.n);
					0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1], s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
				}
				return {
					beta: t,
					lambda: r,
					basis: e.basis ? e.basis.map((function(e) {
						return {
							a: new i(e.a, 16),
							b: new i(e.b, 16)
						}
					})) : this._getEndoBasis(r)
				}
			}
		}, u.prototype._getEndoRoots = function(e) {
			var t = e === this.p ? this.red : i.mont(e),
				r = new i(2).toRed(t).redInvm(),
				n = r.redNeg(),
				o = new i(3).toRed(t).redNeg().redSqrt().redMul(r);
			return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
		}, u.prototype._getEndoBasis = function(e) {
			for (var t, r, n, o, a, s, u, c, f, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), l = e, d = this.n.clone(), p = new i(1), b = new i(0), g = new i(0), m = new i(1), y = 0; 0 !== l.cmpn(0);) {
				var v = d.div(l);
				c = d.sub(v.mul(l)), f = g.sub(v.mul(p));
				var _ = m.sub(v.mul(b));
				if (!n && c.cmp(h) < 0) t = u.neg(), r = p, n = c.neg(), o = f;
				else if (n && 2 == ++y) break;
				u = c, d = l, l = c, g = p, p = f, m = b, b = _
			}
			a = c.neg(), s = f;
			var w = n.sqr().add(o.sqr());
			return a.sqr().add(s.sqr()).cmp(w) >= 0 && (a = t, s = r), n.negative && (n = n.neg(), o = o.neg()), a.negative && (a = a.neg(), s = s.neg()), [{
				a: n,
				b: o
			}, {
				a: a,
				b: s
			}]
		}, u.prototype._endoSplit = function(e) {
			var t = this.endo.basis,
				r = t[0],
				n = t[1],
				i = n.b.mul(e).divRound(this.n),
				o = r.b.neg().mul(e).divRound(this.n),
				a = i.mul(r.a),
				s = o.mul(n.a),
				u = i.mul(r.b),
				c = o.mul(n.b);
			return {
				k1: e.sub(a).sub(s),
				k2: u.add(c).neg()
			}
		}, u.prototype.pointFromX = function(e, t) {
			(e = new i(e, 16)).red || (e = e.toRed(this.red));
			var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
				n = r.redSqrt();
			if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
			var o = n.fromRed().isOdd();
			return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n)
		}, u.prototype.validate = function(e) {
			if (e.inf) return !0;
			var t = e.x,
				r = e.y,
				n = this.a.redMul(t),
				i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
			return 0 === r.redSqr().redISub(i).cmpn(0)
		}, u.prototype._endoWnafMulAdd = function(e, t, r) {
			for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
				var a = this._endoSplit(t[o]),
					s = e[o],
					u = s._getBeta();
				a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), u = u.neg(!0)), n[2 * o] = s, n[2 * o + 1] = u, i[2 * o] = a.k1, i[2 * o + 1] = a.k2
			}
			for (var c = this._wnafMulAdd(1, n, i, 2 * o, r), f = 0; f < 2 * o; f++) n[f] = null, i[f] = null;
			return c
		}, o(c, a.BasePoint), u.prototype.point = function(e, t, r) {
			return new c(this, e, t, r)
		}, u.prototype.pointFromJSON = function(e, t) {
			return c.fromJSON(this, e, t)
		}, c.prototype._getBeta = function() {
			if (this.curve.endo) {
				var e = this.precomputed;
				if (e && e.beta) return e.beta;
				var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
				if (e) {
					var r = this.curve,
						n = function(e) {
							return r.point(e.x.redMul(r.endo.beta), e.y)
						};
					e.beta = t, t.precomputed = {
						beta: null,
						naf: e.naf && {
							wnd: e.naf.wnd,
							points: e.naf.points.map(n)
						},
						doubles: e.doubles && {
							step: e.doubles.step,
							points: e.doubles.points.map(n)
						}
					}
				}
				return t
			}
		}, c.prototype.toJSON = function() {
			return this.precomputed ? [this.x, this.y, this.precomputed && {
				doubles: this.precomputed.doubles && {
					step: this.precomputed.doubles.step,
					points: this.precomputed.doubles.points.slice(1)
				},
				naf: this.precomputed.naf && {
					wnd: this.precomputed.naf.wnd,
					points: this.precomputed.naf.points.slice(1)
				}
			}] : [this.x, this.y]
		}, c.fromJSON = function(e, t, r) {
			"string" == typeof t && (t = JSON.parse(t));
			var n = e.point(t[0], t[1], r);
			if (!t[2]) return n;

			function i(t) {
				return e.point(t[0], t[1], r)
			}
			var o = t[2];
			return n.precomputed = {
				beta: null,
				doubles: o.doubles && {
					step: o.doubles.step,
					points: [n].concat(o.doubles.points.map(i))
				},
				naf: o.naf && {
					wnd: o.naf.wnd,
					points: [n].concat(o.naf.points.map(i))
				}
			}, n
		}, c.prototype.inspect = function() {
			return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
		}, c.prototype.isInfinity = function() {
			return this.inf
		}, c.prototype.add = function(e) {
			if (this.inf) return e;
			if (e.inf) return this;
			if (this.eq(e)) return this.dbl();
			if (this.neg().eq(e)) return this.curve.point(null, null);
			if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
			var t = this.y.redSub(e.y);
			0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
			var r = t.redSqr().redISub(this.x).redISub(e.x),
				n = t.redMul(this.x.redSub(r)).redISub(this.y);
			return this.curve.point(r, n)
		}, c.prototype.dbl = function() {
			if (this.inf) return this;
			var e = this.y.redAdd(this.y);
			if (0 === e.cmpn(0)) return this.curve.point(null, null);
			var t = this.curve.a,
				r = this.x.redSqr(),
				n = e.redInvm(),
				i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
				o = i.redSqr().redISub(this.x.redAdd(this.x)),
				a = i.redMul(this.x.redSub(o)).redISub(this.y);
			return this.curve.point(o, a)
		}, c.prototype.getX = function() {
			return this.x.fromRed()
		}, c.prototype.getY = function() {
			return this.y.fromRed()
		}, c.prototype.mul = function(e) {
			return e = new i(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
		}, c.prototype.mulAdd = function(e, t, r) {
			var n = [this, t],
				i = [e, r];
			return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
		}, c.prototype.jmulAdd = function(e, t, r) {
			var n = [this, t],
				i = [e, r];
			return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
		}, c.prototype.eq = function(e) {
			return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
		}, c.prototype.neg = function(e) {
			if (this.inf) return this;
			var t = this.curve.point(this.x, this.y.redNeg());
			if (e && this.precomputed) {
				var r = this.precomputed,
					n = function(e) {
						return e.neg()
					};
				t.precomputed = {
					naf: r.naf && {
						wnd: r.naf.wnd,
						points: r.naf.points.map(n)
					},
					doubles: r.doubles && {
						step: r.doubles.step,
						points: r.doubles.points.map(n)
					}
				}
			}
			return t
		}, c.prototype.toJ = function() {
			return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
		}, o(f, a.BasePoint), u.prototype.jpoint = function(e, t, r) {
			return new f(this, e, t, r)
		}, f.prototype.toP = function() {
			if (this.isInfinity()) return this.curve.point(null, null);
			var e = this.z.redInvm(),
				t = e.redSqr(),
				r = this.x.redMul(t),
				n = this.y.redMul(t).redMul(e);
			return this.curve.point(r, n)
		}, f.prototype.neg = function() {
			return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
		}, f.prototype.add = function(e) {
			if (this.isInfinity()) return e;
			if (e.isInfinity()) return this;
			var t = e.z.redSqr(),
				r = this.z.redSqr(),
				n = this.x.redMul(t),
				i = e.x.redMul(r),
				o = this.y.redMul(t.redMul(e.z)),
				a = e.y.redMul(r.redMul(this.z)),
				s = n.redSub(i),
				u = o.redSub(a);
			if (0 === s.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
			var c = s.redSqr(),
				f = c.redMul(s),
				h = n.redMul(c),
				l = u.redSqr().redIAdd(f).redISub(h).redISub(h),
				d = u.redMul(h.redISub(l)).redISub(o.redMul(f)),
				p = this.z.redMul(e.z).redMul(s);
			return this.curve.jpoint(l, d, p)
		}, f.prototype.mixedAdd = function(e) {
			if (this.isInfinity()) return e.toJ();
			if (e.isInfinity()) return this;
			var t = this.z.redSqr(),
				r = this.x,
				n = e.x.redMul(t),
				i = this.y,
				o = e.y.redMul(t).redMul(this.z),
				a = r.redSub(n),
				s = i.redSub(o);
			if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
			var u = a.redSqr(),
				c = u.redMul(a),
				f = r.redMul(u),
				h = s.redSqr().redIAdd(c).redISub(f).redISub(f),
				l = s.redMul(f.redISub(h)).redISub(i.redMul(c)),
				d = this.z.redMul(a);
			return this.curve.jpoint(h, l, d)
		}, f.prototype.dblp = function(e) {
			if (0 === e) return this;
			if (this.isInfinity()) return this;
			if (!e) return this.dbl();
			var t;
			if (this.curve.zeroA || this.curve.threeA) {
				var r = this;
				for (t = 0; t < e; t++) r = r.dbl();
				return r
			}
			var n = this.curve.a,
				i = this.curve.tinv,
				o = this.x,
				a = this.y,
				s = this.z,
				u = s.redSqr().redSqr(),
				c = a.redAdd(a);
			for (t = 0; t < e; t++) {
				var f = o.redSqr(),
					h = c.redSqr(),
					l = h.redSqr(),
					d = f.redAdd(f).redIAdd(f).redIAdd(n.redMul(u)),
					p = o.redMul(h),
					b = d.redSqr().redISub(p.redAdd(p)),
					g = p.redISub(b),
					m = d.redMul(g);
				m = m.redIAdd(m).redISub(l);
				var y = c.redMul(s);
				t + 1 < e && (u = u.redMul(l)), o = b, s = y, c = m
			}
			return this.curve.jpoint(o, c.redMul(i), s)
		}, f.prototype.dbl = function() {
			return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
		}, f.prototype._zeroDbl = function() {
			var e, t, r;
			if (this.zOne) {
				var n = this.x.redSqr(),
					i = this.y.redSqr(),
					o = i.redSqr(),
					a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
				a = a.redIAdd(a);
				var s = n.redAdd(n).redIAdd(n),
					u = s.redSqr().redISub(a).redISub(a),
					c = o.redIAdd(o);
				c = (c = c.redIAdd(c)).redIAdd(c), e = u, t = s.redMul(a.redISub(u)).redISub(c), r = this.y.redAdd(this.y)
			} else {
				var f = this.x.redSqr(),
					h = this.y.redSqr(),
					l = h.redSqr(),
					d = this.x.redAdd(h).redSqr().redISub(f).redISub(l);
				d = d.redIAdd(d);
				var p = f.redAdd(f).redIAdd(f),
					b = p.redSqr(),
					g = l.redIAdd(l);
				g = (g = g.redIAdd(g)).redIAdd(g), e = b.redISub(d).redISub(d), t = p.redMul(d.redISub(e)).redISub(g), r = (r = this.y.redMul(this.z)).redIAdd(r)
			}
			return this.curve.jpoint(e, t, r)
		}, f.prototype._threeDbl = function() {
			var e, t, r;
			if (this.zOne) {
				var n = this.x.redSqr(),
					i = this.y.redSqr(),
					o = i.redSqr(),
					a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
				a = a.redIAdd(a);
				var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
					u = s.redSqr().redISub(a).redISub(a);
				e = u;
				var c = o.redIAdd(o);
				c = (c = c.redIAdd(c)).redIAdd(c), t = s.redMul(a.redISub(u)).redISub(c), r = this.y.redAdd(this.y)
			} else {
				var f = this.z.redSqr(),
					h = this.y.redSqr(),
					l = this.x.redMul(h),
					d = this.x.redSub(f).redMul(this.x.redAdd(f));
				d = d.redAdd(d).redIAdd(d);
				var p = l.redIAdd(l),
					b = (p = p.redIAdd(p)).redAdd(p);
				e = d.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(f);
				var g = h.redSqr();
				g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), t = d.redMul(p.redISub(e)).redISub(g)
			}
			return this.curve.jpoint(e, t, r)
		}, f.prototype._dbl = function() {
			var e = this.curve.a,
				t = this.x,
				r = this.y,
				n = this.z,
				i = n.redSqr().redSqr(),
				o = t.redSqr(),
				a = r.redSqr(),
				s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
				u = t.redAdd(t),
				c = (u = u.redIAdd(u)).redMul(a),
				f = s.redSqr().redISub(c.redAdd(c)),
				h = c.redISub(f),
				l = a.redSqr();
			l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
			var d = s.redMul(h).redISub(l),
				p = r.redAdd(r).redMul(n);
			return this.curve.jpoint(f, d, p)
		}, f.prototype.trpl = function() {
			if (!this.curve.zeroA) return this.dbl().add(this);
			var e = this.x.redSqr(),
				t = this.y.redSqr(),
				r = this.z.redSqr(),
				n = t.redSqr(),
				i = e.redAdd(e).redIAdd(e),
				o = i.redSqr(),
				a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
				s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
				u = n.redIAdd(n);
			u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
			var c = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(u),
				f = t.redMul(c);
			f = (f = f.redIAdd(f)).redIAdd(f);
			var h = this.x.redMul(s).redISub(f);
			h = (h = h.redIAdd(h)).redIAdd(h);
			var l = this.y.redMul(c.redMul(u.redISub(c)).redISub(a.redMul(s)));
			l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
			var d = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
			return this.curve.jpoint(h, l, d)
		}, f.prototype.mul = function(e, t) {
			return e = new i(e, t), this.curve._wnafMul(this, e)
		}, f.prototype.eq = function(e) {
			if ("affine" === e.type) return this.eq(e.toJ());
			if (this === e) return !0;
			var t = this.z.redSqr(),
				r = e.z.redSqr();
			if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
			var n = t.redMul(this.z),
				i = r.redMul(e.z);
			return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
		}, f.prototype.eqXToP = function(e) {
			var t = this.z.redSqr(),
				r = e.toRed(this.curve.red).redMul(t);
			if (0 === this.x.cmp(r)) return !0;
			for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
				if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
				if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
			}
		}, f.prototype.inspect = function() {
			return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
		}, f.prototype.isInfinity = function() {
			return 0 === this.z.cmpn(0)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(16),
			i = r(3),
			o = r(45),
			a = r(11);

		function s(e) {
			o.call(this, "mont", e), this.a = new n(e.a, 16).toRed(this.red), this.b = new n(e.b, 16).toRed(this.red), this.i4 = new n(4).toRed(this.red).redInvm(), this.two = new n(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
		}

		function u(e, t, r) {
			o.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new n(t, 16), this.z = new n(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
		}
		i(s, o), e.exports = s, s.prototype.validate = function(e) {
			var t = e.normalize().x,
				r = t.redSqr(),
				n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
			return 0 === n.redSqrt().redSqr().cmp(n)
		}, i(u, o.BasePoint), s.prototype.decodePoint = function(e, t) {
			return this.point(a.toArray(e, t), 1)
		}, s.prototype.point = function(e, t) {
			return new u(this, e, t)
		}, s.prototype.pointFromJSON = function(e) {
			return u.fromJSON(this, e)
		}, u.prototype.precompute = function() {}, u.prototype._encode = function() {
			return this.getX().toArray("be", this.curve.p.byteLength())
		}, u.fromJSON = function(e, t) {
			return new u(e, t[0], t[1] || e.one)
		}, u.prototype.inspect = function() {
			return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
		}, u.prototype.isInfinity = function() {
			return 0 === this.z.cmpn(0)
		}, u.prototype.dbl = function() {
			var e = this.x.redAdd(this.z).redSqr(),
				t = this.x.redSub(this.z).redSqr(),
				r = e.redSub(t),
				n = e.redMul(t),
				i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
			return this.curve.point(n, i)
		}, u.prototype.add = function() {
			throw new Error("Not supported on Montgomery curve")
		}, u.prototype.diffAdd = function(e, t) {
			var r = this.x.redAdd(this.z),
				n = this.x.redSub(this.z),
				i = e.x.redAdd(e.z),
				o = e.x.redSub(e.z).redMul(r),
				a = i.redMul(n),
				s = t.z.redMul(o.redAdd(a).redSqr()),
				u = t.x.redMul(o.redISub(a).redSqr());
			return this.curve.point(s, u)
		}, u.prototype.mul = function(e) {
			for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) i.push(t.andln(1));
			for (var o = i.length - 1; o >= 0; o--) 0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());
			return n
		}, u.prototype.mulAdd = function() {
			throw new Error("Not supported on Montgomery curve")
		}, u.prototype.jumlAdd = function() {
			throw new Error("Not supported on Montgomery curve")
		}, u.prototype.eq = function(e) {
			return 0 === this.getX().cmp(e.getX())
		}, u.prototype.normalize = function() {
			return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
		}, u.prototype.getX = function() {
			return this.normalize(), this.x.fromRed()
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(11),
			i = r(16),
			o = r(3),
			a = r(45),
			s = n.assert;

		function u(e) {
			this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, a.call(this, "edwards", e), this.a = new i(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c)
		}

		function c(e, t, r, n, o) {
			a.BasePoint.call(this, e, "projective"), null === t && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = n ? new i(n, 16) : this.curve.one, this.t = o && new i(o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
		}
		o(u, a), e.exports = u, u.prototype._mulA = function(e) {
			return this.mOneA ? e.redNeg() : this.a.redMul(e)
		}, u.prototype._mulC = function(e) {
			return this.oneC ? e : this.c.redMul(e)
		}, u.prototype.jpoint = function(e, t, r, n) {
			return this.point(e, t, r, n)
		}, u.prototype.pointFromX = function(e, t) {
			(e = new i(e, 16)).red || (e = e.toRed(this.red));
			var r = e.redSqr(),
				n = this.c2.redSub(this.a.redMul(r)),
				o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
				a = n.redMul(o.redInvm()),
				s = a.redSqrt();
			if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
			var u = s.fromRed().isOdd();
			return (t && !u || !t && u) && (s = s.redNeg()), this.point(e, s)
		}, u.prototype.pointFromY = function(e, t) {
			(e = new i(e, 16)).red || (e = e.toRed(this.red));
			var r = e.redSqr(),
				n = r.redSub(this.c2),
				o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
				a = n.redMul(o.redInvm());
			if (0 === a.cmp(this.zero)) {
				if (t) throw new Error("invalid point");
				return this.point(this.zero, e)
			}
			var s = a.redSqrt();
			if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
			return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e)
		}, u.prototype.validate = function(e) {
			if (e.isInfinity()) return !0;
			e.normalize();
			var t = e.x.redSqr(),
				r = e.y.redSqr(),
				n = t.redMul(this.a).redAdd(r),
				i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
			return 0 === n.cmp(i)
		}, o(c, a.BasePoint), u.prototype.pointFromJSON = function(e) {
			return c.fromJSON(this, e)
		}, u.prototype.point = function(e, t, r, n) {
			return new c(this, e, t, r, n)
		}, c.fromJSON = function(e, t) {
			return new c(e, t[0], t[1], t[2])
		}, c.prototype.inspect = function() {
			return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
		}, c.prototype.isInfinity = function() {
			return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
		}, c.prototype._extDbl = function() {
			var e = this.x.redSqr(),
				t = this.y.redSqr(),
				r = this.z.redSqr();
			r = r.redIAdd(r);
			var n = this.curve._mulA(e),
				i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
				o = n.redAdd(t),
				a = o.redSub(r),
				s = n.redSub(t),
				u = i.redMul(a),
				c = o.redMul(s),
				f = i.redMul(s),
				h = a.redMul(o);
			return this.curve.point(u, c, h, f)
		}, c.prototype._projDbl = function() {
			var e, t, r, n, i, o, a = this.x.redAdd(this.y).redSqr(),
				s = this.x.redSqr(),
				u = this.y.redSqr();
			if (this.curve.twisted) {
				var c = (n = this.curve._mulA(s)).redAdd(u);
				this.zOne ? (e = a.redSub(s).redSub(u).redMul(c.redSub(this.curve.two)), t = c.redMul(n.redSub(u)), r = c.redSqr().redSub(c).redSub(c)) : (i = this.z.redSqr(), o = c.redSub(i).redISub(i), e = a.redSub(s).redISub(u).redMul(o), t = c.redMul(n.redSub(u)), r = c.redMul(o))
			} else n = s.redAdd(u), i = this.curve._mulC(this.z).redSqr(), o = n.redSub(i).redSub(i), e = this.curve._mulC(a.redISub(n)).redMul(o), t = this.curve._mulC(n).redMul(s.redISub(u)), r = n.redMul(o);
			return this.curve.point(e, t, r)
		}, c.prototype.dbl = function() {
			return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
		}, c.prototype._extAdd = function(e) {
			var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
				r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
				n = this.t.redMul(this.curve.dd).redMul(e.t),
				i = this.z.redMul(e.z.redAdd(e.z)),
				o = r.redSub(t),
				a = i.redSub(n),
				s = i.redAdd(n),
				u = r.redAdd(t),
				c = o.redMul(a),
				f = s.redMul(u),
				h = o.redMul(u),
				l = a.redMul(s);
			return this.curve.point(c, f, l, h)
		}, c.prototype._projAdd = function(e) {
			var t, r, n = this.z.redMul(e.z),
				i = n.redSqr(),
				o = this.x.redMul(e.x),
				a = this.y.redMul(e.y),
				s = this.curve.d.redMul(o).redMul(a),
				u = i.redSub(s),
				c = i.redAdd(s),
				f = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),
				h = n.redMul(u).redMul(f);
			return this.curve.twisted ? (t = n.redMul(c).redMul(a.redSub(this.curve._mulA(o))), r = u.redMul(c)) : (t = n.redMul(c).redMul(a.redSub(o)), r = this.curve._mulC(u).redMul(c)), this.curve.point(h, t, r)
		}, c.prototype.add = function(e) {
			return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
		}, c.prototype.mul = function(e) {
			return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
		}, c.prototype.mulAdd = function(e, t, r) {
			return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
		}, c.prototype.jmulAdd = function(e, t, r) {
			return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
		}, c.prototype.normalize = function() {
			if (this.zOne) return this;
			var e = this.z.redInvm();
			return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
		}, c.prototype.neg = function() {
			return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
		}, c.prototype.getX = function() {
			return this.normalize(), this.x.fromRed()
		}, c.prototype.getY = function() {
			return this.normalize(), this.y.fromRed()
		}, c.prototype.eq = function(e) {
			return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
		}, c.prototype.eqXToP = function(e) {
			var t = e.toRed(this.curve.red).redMul(this.z);
			if (0 === this.x.cmp(t)) return !0;
			for (var r = e.clone(), n = this.curve.redN.redMul(this.z);;) {
				if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
				if (t.redIAdd(n), 0 === this.x.cmp(t)) return !0
			}
		}, c.prototype.toP = c.prototype.normalize, c.prototype.mixedAdd = c.prototype.add
	}, function(e, t, r) {
		"use strict";
		t.sha1 = r(251), t.sha224 = r(252), t.sha256 = r(124), t.sha384 = r(253), t.sha512 = r(125)
	}, function(e, t, r) {
		"use strict";
		var n = r(15),
			i = r(37),
			o = r(123),
			a = n.rotl32,
			s = n.sum32,
			u = n.sum32_5,
			c = o.ft_1,
			f = i.BlockHash,
			h = [1518500249, 1859775393, 2400959708, 3395469782];

		function l() {
			if (!(this instanceof l)) return new l;
			f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
		}
		n.inherits(l, f), e.exports = l, l.blockSize = 512, l.outSize = 160, l.hmacStrength = 80, l.padLength = 64, l.prototype._update = function(e, t) {
			for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
			for (; n < r.length; n++) r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
			var i = this.h[0],
				o = this.h[1],
				f = this.h[2],
				l = this.h[3],
				d = this.h[4];
			for (n = 0; n < r.length; n++) {
				var p = ~~(n / 20),
					b = u(a(i, 5), c(p, o, f, l), d, r[n], h[p]);
				d = l, l = f, f = a(o, 30), o = i, i = b
			}
			this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], f), this.h[3] = s(this.h[3], l), this.h[4] = s(this.h[4], d)
		}, l.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(15),
			i = r(124);

		function o() {
			if (!(this instanceof o)) return new o;
			i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
		}
		n.inherits(o, i), e.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(15),
			i = r(125);

		function o() {
			if (!(this instanceof o)) return new o;
			i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
		}
		n.inherits(o, i), e.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(15),
			i = r(37),
			o = n.rotl32,
			a = n.sum32,
			s = n.sum32_3,
			u = n.sum32_4,
			c = i.BlockHash;

		function f() {
			if (!(this instanceof f)) return new f;
			c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
		}

		function h(e, t, r, n) {
			return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n)
		}

		function l(e) {
			return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
		}

		function d(e) {
			return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
		}
		n.inherits(f, c), t.ripemd160 = f, f.blockSize = 512, f.outSize = 160, f.hmacStrength = 192, f.padLength = 64, f.prototype._update = function(e, t) {
			for (var r = this.h[0], n = this.h[1], i = this.h[2], c = this.h[3], f = this.h[4], y = r, v = n, _ = i, w = c, M = f, S = 0; S < 80; S++) {
				var x = a(o(u(r, h(S, n, i, c), e[p[S] + t], l(S)), g[S]), f);
				r = f, f = c, c = o(i, 10), i = n, n = x, x = a(o(u(y, h(79 - S, v, _, w), e[b[S] + t], d(S)), m[S]), M), y = M, M = w, w = o(_, 10), _ = v, v = x
			}
			x = s(this.h[1], i, w), this.h[1] = s(this.h[2], c, M), this.h[2] = s(this.h[3], f, y), this.h[3] = s(this.h[4], r, v), this.h[4] = s(this.h[0], n, _), this.h[0] = x
		}, f.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
		};
		var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
			b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
			g = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
			m = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
	}, function(e, t, r) {
		"use strict";
		var n = r(15),
			i = r(22);

		function o(e, t, r) {
			if (!(this instanceof o)) return new o(e, t, r);
			this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r))
		}
		e.exports = o, o.prototype._init = function(e) {
			e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), i(e.length <= this.blockSize);
			for (var t = e.length; t < this.blockSize; t++) e.push(0);
			for (t = 0; t < e.length; t++) e[t] ^= 54;
			for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++) e[t] ^= 106;
			this.outer = (new this.Hash).update(e)
		}, o.prototype.update = function(e, t) {
			return this.inner.update(e, t), this
		}, o.prototype.digest = function(e) {
			return this.outer.update(this.inner.digest()), this.outer.digest(e)
		}
	}, function(e, t) {
		e.exports = {
			doubles: {
				step: 4,
				points: [
					["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
					["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
					["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
					["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
					["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
					["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
					["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
					["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
					["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
					["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
					["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
					["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
					["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
					["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
					["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
					["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
					["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
					["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
					["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
					["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
					["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
					["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
					["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
					["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
					["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
					["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
					["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
					["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
					["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
					["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
					["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
					["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
					["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
					["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
					["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
					["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
					["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
					["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
					["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
					["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
					["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
					["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
					["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
					["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
					["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
					["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
					["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
					["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
					["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
					["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
					["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
					["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
					["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
					["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
					["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
					["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
					["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
					["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
					["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
					["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
					["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
					["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
					["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
					["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
					["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
				]
			},
			naf: {
				wnd: 7,
				points: [
					["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
					["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
					["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
					["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
					["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
					["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
					["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
					["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
					["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
					["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
					["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
					["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
					["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
					["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
					["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
					["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
					["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
					["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
					["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
					["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
					["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
					["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
					["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
					["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
					["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
					["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
					["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
					["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
					["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
					["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
					["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
					["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
					["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
					["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
					["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
					["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
					["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
					["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
					["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
					["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
					["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
					["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
					["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
					["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
					["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
					["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
					["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
					["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
					["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
					["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
					["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
					["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
					["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
					["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
					["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
					["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
					["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
					["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
					["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
					["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
					["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
					["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
					["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
					["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
					["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
					["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
					["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
					["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
					["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
					["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
					["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
					["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
					["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
					["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
					["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
					["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
					["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
					["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
					["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
					["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
					["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
					["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
					["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
					["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
					["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
					["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
					["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
					["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
					["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
					["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
					["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
					["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
					["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
					["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
					["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
					["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
					["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
					["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
					["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
					["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
					["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
					["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
					["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
					["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
					["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
					["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
					["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
					["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
					["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
					["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
					["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
					["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
					["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
					["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
					["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
					["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
					["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
					["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
					["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
					["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
					["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
					["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
					["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
					["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
					["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
					["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
					["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
				]
			}
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(16),
			i = r(258),
			o = r(11),
			a = r(59),
			s = r(121),
			u = o.assert,
			c = r(259),
			f = r(260);

		function h(e) {
			if (!(this instanceof h)) return new h(e);
			"string" == typeof e && (u(Object.prototype.hasOwnProperty.call(a, e), "Unknown curve " + e), e = a[e]), e instanceof a.PresetCurve && (e = {
				curve: e
			}), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
		}
		e.exports = h, h.prototype.keyPair = function(e) {
			return new c(this, e)
		}, h.prototype.keyFromPrivate = function(e, t) {
			return c.fromPrivate(this, e, t)
		}, h.prototype.keyFromPublic = function(e, t) {
			return c.fromPublic(this, e, t)
		}, h.prototype.genKeyPair = function(e) {
			e || (e = {});
			for (var t = new i({
					hash: this.hash,
					pers: e.pers,
					persEnc: e.persEnc || "utf8",
					entropy: e.entropy || s(this.hash.hmacStrength),
					entropyEnc: e.entropy && e.entropyEnc || "utf8",
					nonce: this.n.toArray()
				}), r = this.n.byteLength(), o = this.n.sub(new n(2));;) {
				var a = new n(t.generate(r));
				if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a)
			}
		}, h.prototype._truncateToN = function(e, t) {
			var r = 8 * e.byteLength() - this.n.bitLength();
			return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
		}, h.prototype.sign = function(e, t, r, o) {
			"object" == typeof r && (o = r, r = null), o || (o = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new n(e, 16));
			for (var a = this.n.byteLength(), s = t.getPrivate().toArray("be", a), u = e.toArray("be", a), c = new i({
					hash: this.hash,
					entropy: s,
					nonce: u,
					pers: o.pers,
					persEnc: o.persEnc || "utf8"
				}), h = this.n.sub(new n(1)), l = 0;; l++) {
				var d = o.k ? o.k(l) : new n(c.generate(this.n.byteLength()));
				if (!((d = this._truncateToN(d, !0)).cmpn(1) <= 0 || d.cmp(h) >= 0)) {
					var p = this.g.mul(d);
					if (!p.isInfinity()) {
						var b = p.getX(),
							g = b.umod(this.n);
						if (0 !== g.cmpn(0)) {
							var m = d.invm(this.n).mul(g.mul(t.getPrivate()).iadd(e));
							if (0 !== (m = m.umod(this.n)).cmpn(0)) {
								var y = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(g) ? 2 : 0);
								return o.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), y ^= 1), new f({
									r: g,
									s: m,
									recoveryParam: y
								})
							}
						}
					}
				}
			}
		}, h.prototype.verify = function(e, t, r, i) {
			e = this._truncateToN(new n(e, 16)), r = this.keyFromPublic(r, i);
			var o = (t = new f(t, "hex")).r,
				a = t.s;
			if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
			if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
			var s, u = a.invm(this.n),
				c = u.mul(e).umod(this.n),
				h = u.mul(o).umod(this.n);
			return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(c, r.getPublic(), h)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(c, r.getPublic(), h)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o)
		}, h.prototype.recoverPubKey = function(e, t, r, i) {
			u((3 & r) === r, "The recovery param is more than two bits"), t = new f(t, i);
			var o = this.n,
				a = new n(e),
				s = t.r,
				c = t.s,
				h = 1 & r,
				l = r >> 1;
			if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l) throw new Error("Unable to find sencond key candinate");
			s = l ? this.curve.pointFromX(s.add(this.curve.n), h) : this.curve.pointFromX(s, h);
			var d = t.r.invm(o),
				p = o.sub(a).mul(d).umod(o),
				b = c.mul(d).umod(o);
			return this.g.mulAdd(p, s, b)
		}, h.prototype.getKeyRecoveryParam = function(e, t, r, n) {
			if (null !== (t = new f(t, n)).recoveryParam) return t.recoveryParam;
			for (var i = 0; i < 4; i++) {
				var o;
				try {
					o = this.recoverPubKey(e, t, i)
				} catch (e) {
					continue
				}
				if (o.eq(r)) return i
			}
			throw new Error("Unable to find valid recovery factor")
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(60),
			i = r(120),
			o = r(22);

		function a(e) {
			if (!(this instanceof a)) return new a(e);
			this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
			var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
				r = i.toArray(e.nonce, e.nonceEnc || "hex"),
				n = i.toArray(e.pers, e.persEnc || "hex");
			o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
		}
		e.exports = a, a.prototype._init = function(e, t, r) {
			var n = e.concat(t).concat(r);
			this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
			for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
			this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
		}, a.prototype._hmac = function() {
			return new n.hmac(this.hash, this.K)
		}, a.prototype._update = function(e) {
			var t = this._hmac().update(this.V).update([0]);
			e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
		}, a.prototype.reseed = function(e, t, r, n) {
			"string" != typeof t && (n = r, r = t, t = null), e = i.toArray(e, t), r = i.toArray(r, n), o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
		}, a.prototype.generate = function(e, t, r, n) {
			if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
			"string" != typeof t && (n = r, r = t, t = null), r && (r = i.toArray(r, n || "hex"), this._update(r));
			for (var o = []; o.length < e;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
			var a = o.slice(0, e);
			return this._update(r), this._reseed++, i.encode(a, t)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(16),
			i = r(11).assert;

		function o(e, t) {
			this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
		}
		e.exports = o, o.fromPublic = function(e, t, r) {
			return t instanceof o ? t : new o(e, {
				pub: t,
				pubEnc: r
			})
		}, o.fromPrivate = function(e, t, r) {
			return t instanceof o ? t : new o(e, {
				priv: t,
				privEnc: r
			})
		}, o.prototype.validate = function() {
			var e = this.getPublic();
			return e.isInfinity() ? {
				result: !1,
				reason: "Invalid public key"
			} : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
				result: !0,
				reason: null
			} : {
				result: !1,
				reason: "Public key * N != O"
			} : {
				result: !1,
				reason: "Public key is not a point"
			}
		}, o.prototype.getPublic = function(e, t) {
			return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
		}, o.prototype.getPrivate = function(e) {
			return "hex" === e ? this.priv.toString(16, 2) : this.priv
		}, o.prototype._importPrivate = function(e, t) {
			this.priv = new n(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
		}, o.prototype._importPublic = function(e, t) {
			if (e.x || e.y) return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
			this.pub = this.ec.curve.decodePoint(e, t)
		}, o.prototype.derive = function(e) {
			return e.validate() || i(e.validate(), "public point not validated"), e.mul(this.priv).getX()
		}, o.prototype.sign = function(e, t, r) {
			return this.ec.sign(e, this, t, r)
		}, o.prototype.verify = function(e, t) {
			return this.ec.verify(e, t, this)
		}, o.prototype.inspect = function() {
			return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(16),
			i = r(11),
			o = i.assert;

		function a(e, t) {
			if (e instanceof a) return e;
			this._importDER(e, t) || (o(e.r && e.s, "Signature without r or s"), this.r = new n(e.r, 16), this.s = new n(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
		}

		function s() {
			this.place = 0
		}

		function u(e, t) {
			var r = e[t.place++];
			if (!(128 & r)) return r;
			var n = 15 & r;
			if (0 === n || n > 4) return !1;
			for (var i = 0, o = 0, a = t.place; o < n; o++, a++) i <<= 8, i |= e[a], i >>>= 0;
			return !(i <= 127) && (t.place = a, i)
		}

		function c(e) {
			for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
			return 0 === t ? e : e.slice(t)
		}

		function f(e, t) {
			if (t < 128) e.push(t);
			else {
				var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
				for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
				e.push(t)
			}
		}
		e.exports = a, a.prototype._importDER = function(e, t) {
			e = i.toArray(e, t);
			var r = new s;
			if (48 !== e[r.place++]) return !1;
			var o = u(e, r);
			if (!1 === o) return !1;
			if (o + r.place !== e.length) return !1;
			if (2 !== e[r.place++]) return !1;
			var a = u(e, r);
			if (!1 === a) return !1;
			var c = e.slice(r.place, a + r.place);
			if (r.place += a, 2 !== e[r.place++]) return !1;
			var f = u(e, r);
			if (!1 === f) return !1;
			if (e.length !== f + r.place) return !1;
			var h = e.slice(r.place, f + r.place);
			if (0 === c[0]) {
				if (!(128 & c[1])) return !1;
				c = c.slice(1)
			}
			if (0 === h[0]) {
				if (!(128 & h[1])) return !1;
				h = h.slice(1)
			}
			return this.r = new n(c), this.s = new n(h), this.recoveryParam = null, !0
		}, a.prototype.toDER = function(e) {
			var t = this.r.toArray(),
				r = this.s.toArray();
			for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = c(t), r = c(r); !(r[0] || 128 & r[1]);) r = r.slice(1);
			var n = [2];
			f(n, t.length), (n = n.concat(t)).push(2), f(n, r.length);
			var o = n.concat(r),
				a = [48];
			return f(a, o.length), a = a.concat(o), i.encode(a, e)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(60),
			i = r(59),
			o = r(11),
			a = o.assert,
			s = o.parseBytes,
			u = r(262),
			c = r(263);

		function f(e) {
			if (a("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof f)) return new f(e);
			e = i[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = n.sha512
		}
		e.exports = f, f.prototype.sign = function(e, t) {
			e = s(e);
			var r = this.keyFromSecret(t),
				n = this.hashInt(r.messagePrefix(), e),
				i = this.g.mul(n),
				o = this.encodePoint(i),
				a = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
				u = n.add(a).umod(this.curve.n);
			return this.makeSignature({
				R: i,
				S: u,
				Rencoded: o
			})
		}, f.prototype.verify = function(e, t, r) {
			e = s(e), t = this.makeSignature(t);
			var n = this.keyFromPublic(r),
				i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
				o = this.g.mul(t.S());
			return t.R().add(n.pub().mul(i)).eq(o)
		}, f.prototype.hashInt = function() {
			for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
			return o.intFromLE(e.digest()).umod(this.curve.n)
		}, f.prototype.keyFromPublic = function(e) {
			return u.fromPublic(this, e)
		}, f.prototype.keyFromSecret = function(e) {
			return u.fromSecret(this, e)
		}, f.prototype.makeSignature = function(e) {
			return e instanceof c ? e : new c(this, e)
		}, f.prototype.encodePoint = function(e) {
			var t = e.getY().toArray("le", this.encodingLength);
			return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t
		}, f.prototype.decodePoint = function(e) {
			var t = (e = o.parseBytes(e)).length - 1,
				r = e.slice(0, t).concat(-129 & e[t]),
				n = 0 != (128 & e[t]),
				i = o.intFromLE(r);
			return this.curve.pointFromY(i, n)
		}, f.prototype.encodeInt = function(e) {
			return e.toArray("le", this.encodingLength)
		}, f.prototype.decodeInt = function(e) {
			return o.intFromLE(e)
		}, f.prototype.isPoint = function(e) {
			return e instanceof this.pointClass
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(11),
			i = n.assert,
			o = n.parseBytes,
			a = n.cachedProperty;

		function s(e, t) {
			this.eddsa = e, this._secret = o(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = o(t.pub)
		}
		s.fromPublic = function(e, t) {
			return t instanceof s ? t : new s(e, {
				pub: t
			})
		}, s.fromSecret = function(e, t) {
			return t instanceof s ? t : new s(e, {
				secret: t
			})
		}, s.prototype.secret = function() {
			return this._secret
		}, a(s, "pubBytes", (function() {
			return this.eddsa.encodePoint(this.pub())
		})), a(s, "pub", (function() {
			return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
		})), a(s, "privBytes", (function() {
			var e = this.eddsa,
				t = this.hash(),
				r = e.encodingLength - 1,
				n = t.slice(0, e.encodingLength);
			return n[0] &= 248, n[r] &= 127, n[r] |= 64, n
		})), a(s, "priv", (function() {
			return this.eddsa.decodeInt(this.privBytes())
		})), a(s, "hash", (function() {
			return this.eddsa.hash().update(this.secret()).digest()
		})), a(s, "messagePrefix", (function() {
			return this.hash().slice(this.eddsa.encodingLength)
		})), s.prototype.sign = function(e) {
			return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
		}, s.prototype.verify = function(e, t) {
			return this.eddsa.verify(e, t, this)
		}, s.prototype.getSecret = function(e) {
			return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), e)
		}, s.prototype.getPublic = function(e) {
			return n.encode(this.pubBytes(), e)
		}, e.exports = s
	}, function(e, t, r) {
		"use strict";
		var n = r(16),
			i = r(11),
			o = i.assert,
			a = i.cachedProperty,
			s = i.parseBytes;

		function u(e, t) {
			this.eddsa = e, "object" != typeof t && (t = s(t)), Array.isArray(t) && (t = {
				R: t.slice(0, e.encodingLength),
				S: t.slice(e.encodingLength)
			}), o(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof n && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
		}
		a(u, "S", (function() {
			return this.eddsa.decodeInt(this.Sencoded())
		})), a(u, "R", (function() {
			return this.eddsa.decodePoint(this.Rencoded())
		})), a(u, "Rencoded", (function() {
			return this.eddsa.encodePoint(this.R())
		})), a(u, "Sencoded", (function() {
			return this.eddsa.encodeInt(this.S())
		})), u.prototype.toBytes = function() {
			return this.Rencoded().concat(this.Sencoded())
		}, u.prototype.toHex = function() {
			return i.encode(this.toBytes(), "hex").toUpperCase()
		}, e.exports = u
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = r(265);
		t.getRandomBytes = function(e) {
			return new Promise((function(t, r) {
				n(e, (function(e, n) {
					e ? r(e) : t(n)
				}))
			}))
		}, t.getRandomBytesSync = function(e) {
			return n(e)
		}
	}, function(e, t, r) {
		"use strict";
		(function(t, n) {
			var i = r(13).Buffer,
				o = t.crypto || t.msCrypto;
			o && o.getRandomValues ? e.exports = function(e, t) {
				if (e > 4294967295) throw new RangeError("requested too many random bytes");
				var r = i.allocUnsafe(e);
				if (e > 0)
					if (e > 65536)
						for (var a = 0; a < e; a += 65536) o.getRandomValues(r.slice(a, a + 65536));
					else o.getRandomValues(r);
				if ("function" == typeof t) return n.nextTick((function() {
					t(null, r)
				}));
				return r
			} : e.exports = function() {
				throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
			}
		}).call(this, r(6), r(5))
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			var n = r(9),
				i = new(0, r(58).ec)("secp256k1"),
				o = i.curve;
			t.privateKeyExport = function(e, t) {
				var r = new n(e);
				if (r.ucmp(o.n) >= 0) throw new Error("couldn't export to DER format");
				var s = i.g.mul(r);
				return a(s.getX(), s.getY(), t)
			}, t.privateKeyModInverse = function(t) {
				var r = new n(t);
				if (r.ucmp(o.n) >= 0 || r.isZero()) throw new Error("private key range is invalid");
				return r.invm(o.n).toArrayLike(e, "be", 32)
			}, t.signatureImport = function(t) {
				var r = new n(t.r);
				r.ucmp(o.n) >= 0 && (r = new n(0));
				var i = new n(t.s);
				return i.ucmp(o.n) >= 0 && (i = new n(0)), e.concat([r.toArrayLike(e, "be", 32), i.toArrayLike(e, "be", 32)])
			}, t.ecdhUnsafe = function(e, t, r) {
				var s = i.keyFromPublic(e),
					u = new n(t);
				if (u.ucmp(o.n) >= 0 || u.isZero()) throw new Error("scalar was invalid (zero or overflow)");
				var c = s.pub.mul(u);
				return a(c.getX(), c.getY(), r)
			};
			var a = function(t, r, n) {
				var i = void 0;
				return n ? ((i = e.alloc(33))[0] = r.isOdd() ? 3 : 2, t.toArrayLike(e, "be", 32).copy(i, 1)) : ((i = e.alloc(65))[0] = 4, t.toArrayLike(e, "be", 32).copy(i, 1), r.toArrayLike(e, "be", 32).copy(i, 33)), i
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			var r = e.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
				n = e.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
			t.privateKeyExport = function(t, i, o) {
				var a = e.from(o ? r : n);
				return t.copy(a, o ? 8 : 9), i.copy(a, o ? 181 : 214), a
			}, t.privateKeyImport = function(e) {
				var t = e.length,
					r = 0;
				if (t < r + 1 || 48 !== e[r]) return null;
				if (t < (r += 1) + 1 || !(128 & e[r])) return null;
				var n = 127 & e[r];
				if (n < 1 || n > 2) return null;
				if (t < (r += 1) + n) return null;
				var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
				return t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1] ? null : e.slice(r + 2, r + 2 + e[r + 1])
			}, t.signatureImportLax = function(t) {
				var r = e.alloc(32, 0),
					n = e.alloc(32, 0),
					i = t.length,
					o = 0;
				if (48 !== t[o++]) return null;
				var a = t[o++];
				if (128 & a && (o += a - 128) > i) return null;
				if (2 !== t[o++]) return null;
				var s = t[o++];
				if (128 & s) {
					if (o + (a = s - 128) > i) return null;
					for (; a > 0 && 0 === t[o]; o += 1, a -= 1);
					for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o]
				}
				if (s > i - o) return null;
				var u = o;
				if (o += s, 2 !== t[o++]) return null;
				var c = t[o++];
				if (128 & c) {
					if (o + (a = c - 128) > i) return null;
					for (; a > 0 && 0 === t[o]; o += 1, a -= 1);
					for (c = 0; a > 0; o += 1, a -= 1) c = (c << 8) + t[o]
				}
				if (c > i - o) return null;
				var f = o;
				for (o += c; s > 0 && 0 === t[u]; s -= 1, u += 1);
				if (s > 32) return null;
				var h = t.slice(u, u + s);
				for (h.copy(r, 32 - h.length); c > 0 && 0 === t[f]; c -= 1, f += 1);
				if (c > 32) return null;
				var l = t.slice(f, f + c);
				return l.copy(n, 32 - l.length), {
					r: r,
					s: n
				}
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		/*
		object-assign
		(c) Sindre Sorhus
		@license MIT
		*/
		var n = Object.getOwnPropertySymbols,
			i = Object.prototype.hasOwnProperty,
			o = Object.prototype.propertyIsEnumerable;

		function a(e) {
			if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(e)
		}
		e.exports = function() {
			try {
				if (!Object.assign) return !1;
				var e = new String("abc");
				if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
				for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
				if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
						return t[e]
					})).join("")) return !1;
				var n = {};
				return "abcdefghijklmnopqrst".split("").forEach((function(e) {
					n[e] = e
				})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
			} catch (e) {
				return !1
			}
		}() ? Object.assign : function(e, t) {
			for (var r, s, u = a(e), c = 1; c < arguments.length; c++) {
				for (var f in r = Object(arguments[c])) i.call(r, f) && (u[f] = r[f]);
				if (n) {
					s = n(r);
					for (var h = 0; h < s.length; h++) o.call(r, s[h]) && (u[s[h]] = r[s[h]])
				}
			}
			return u
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(3),
			i = r(127),
			o = r(13).Buffer,
			a = new Array(16);

		function s() {
			i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
		}

		function u(e, t) {
			return e << t | e >>> 32 - t
		}

		function c(e, t, r, n, i, o, a) {
			return u(e + (t & r | ~t & n) + i + o | 0, a) + t | 0
		}

		function f(e, t, r, n, i, o, a) {
			return u(e + (t & n | r & ~n) + i + o | 0, a) + t | 0
		}

		function h(e, t, r, n, i, o, a) {
			return u(e + (t ^ r ^ n) + i + o | 0, a) + t | 0
		}

		function l(e, t, r, n, i, o, a) {
			return u(e + (r ^ (t | ~n)) + i + o | 0, a) + t | 0
		}
		n(s, i), s.prototype._update = function() {
			for (var e = a, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
			var r = this._a,
				n = this._b,
				i = this._c,
				o = this._d;
			r = c(r, n, i, o, e[0], 3614090360, 7), o = c(o, r, n, i, e[1], 3905402710, 12), i = c(i, o, r, n, e[2], 606105819, 17), n = c(n, i, o, r, e[3], 3250441966, 22), r = c(r, n, i, o, e[4], 4118548399, 7), o = c(o, r, n, i, e[5], 1200080426, 12), i = c(i, o, r, n, e[6], 2821735955, 17), n = c(n, i, o, r, e[7], 4249261313, 22), r = c(r, n, i, o, e[8], 1770035416, 7), o = c(o, r, n, i, e[9], 2336552879, 12), i = c(i, o, r, n, e[10], 4294925233, 17), n = c(n, i, o, r, e[11], 2304563134, 22), r = c(r, n, i, o, e[12], 1804603682, 7), o = c(o, r, n, i, e[13], 4254626195, 12), i = c(i, o, r, n, e[14], 2792965006, 17), r = f(r, n = c(n, i, o, r, e[15], 1236535329, 22), i, o, e[1], 4129170786, 5), o = f(o, r, n, i, e[6], 3225465664, 9), i = f(i, o, r, n, e[11], 643717713, 14), n = f(n, i, o, r, e[0], 3921069994, 20), r = f(r, n, i, o, e[5], 3593408605, 5), o = f(o, r, n, i, e[10], 38016083, 9), i = f(i, o, r, n, e[15], 3634488961, 14), n = f(n, i, o, r, e[4], 3889429448, 20), r = f(r, n, i, o, e[9], 568446438, 5), o = f(o, r, n, i, e[14], 3275163606, 9), i = f(i, o, r, n, e[3], 4107603335, 14), n = f(n, i, o, r, e[8], 1163531501, 20), r = f(r, n, i, o, e[13], 2850285829, 5), o = f(o, r, n, i, e[2], 4243563512, 9), i = f(i, o, r, n, e[7], 1735328473, 14), r = h(r, n = f(n, i, o, r, e[12], 2368359562, 20), i, o, e[5], 4294588738, 4), o = h(o, r, n, i, e[8], 2272392833, 11), i = h(i, o, r, n, e[11], 1839030562, 16), n = h(n, i, o, r, e[14], 4259657740, 23), r = h(r, n, i, o, e[1], 2763975236, 4), o = h(o, r, n, i, e[4], 1272893353, 11), i = h(i, o, r, n, e[7], 4139469664, 16), n = h(n, i, o, r, e[10], 3200236656, 23), r = h(r, n, i, o, e[13], 681279174, 4), o = h(o, r, n, i, e[0], 3936430074, 11), i = h(i, o, r, n, e[3], 3572445317, 16), n = h(n, i, o, r, e[6], 76029189, 23), r = h(r, n, i, o, e[9], 3654602809, 4), o = h(o, r, n, i, e[12], 3873151461, 11), i = h(i, o, r, n, e[15], 530742520, 16), r = l(r, n = h(n, i, o, r, e[2], 3299628645, 23), i, o, e[0], 4096336452, 6), o = l(o, r, n, i, e[7], 1126891415, 10), i = l(i, o, r, n, e[14], 2878612391, 15), n = l(n, i, o, r, e[5], 4237533241, 21), r = l(r, n, i, o, e[12], 1700485571, 6), o = l(o, r, n, i, e[3], 2399980690, 10), i = l(i, o, r, n, e[10], 4293915773, 15), n = l(n, i, o, r, e[1], 2240044497, 21), r = l(r, n, i, o, e[8], 1873313359, 6), o = l(o, r, n, i, e[15], 4264355552, 10), i = l(i, o, r, n, e[6], 2734768916, 15), n = l(n, i, o, r, e[13], 1309151649, 21), r = l(r, n, i, o, e[4], 4149444226, 6), o = l(o, r, n, i, e[11], 3174756917, 10), i = l(i, o, r, n, e[2], 718787259, 15), n = l(n, i, o, r, e[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + o | 0
		}, s.prototype._digest = function() {
			this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
			var e = o.allocUnsafe(16);
			return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
		}, e.exports = s
	}, function(e, t, r) {
		(t = e.exports = r(128)).Stream = t, t.Readable = t, t.Writable = r(132), t.Duplex = r(29), t.Transform = r(133), t.PassThrough = r(276), t.finished = r(62), t.pipeline = r(277)
	}, function(e, t) {}, function(e, t, r) {
		"use strict";

		function n(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), r.push.apply(r, n)
			}
			return r
		}

		function i(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		}

		function o(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
			}
		}
		var a = r(2).Buffer,
			s = r(273).inspect,
			u = s && s.custom || "inspect";
		e.exports = function() {
			function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.head = null, this.tail = null, this.length = 0
			}
			var t, r, c;
			return t = e, (r = [{
				key: "push",
				value: function(e) {
					var t = {
						data: e,
						next: null
					};
					this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
				}
			}, {
				key: "unshift",
				value: function(e) {
					var t = {
						data: e,
						next: this.head
					};
					0 === this.length && (this.tail = t), this.head = t, ++this.length
				}
			}, {
				key: "shift",
				value: function() {
					if (0 !== this.length) {
						var e = this.head.data;
						return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
					}
				}
			}, {
				key: "clear",
				value: function() {
					this.head = this.tail = null, this.length = 0
				}
			}, {
				key: "join",
				value: function(e) {
					if (0 === this.length) return "";
					for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
					return r
				}
			}, {
				key: "concat",
				value: function(e) {
					if (0 === this.length) return a.alloc(0);
					for (var t, r, n, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0; o;) t = o.data, r = i, n = s, a.prototype.copy.call(t, r, n), s += o.data.length, o = o.next;
					return i
				}
			}, {
				key: "consume",
				value: function(e, t) {
					var r;
					return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
				}
			}, {
				key: "first",
				value: function() {
					return this.head.data
				}
			}, {
				key: "_getString",
				value: function(e) {
					var t = this.head,
						r = 1,
						n = t.data;
					for (e -= n.length; t = t.next;) {
						var i = t.data,
							o = e > i.length ? i.length : e;
						if (o === i.length ? n += i : n += i.slice(0, e), 0 == (e -= o)) {
							o === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o));
							break
						}++r
					}
					return this.length -= r, n
				}
			}, {
				key: "_getBuffer",
				value: function(e) {
					var t = a.allocUnsafe(e),
						r = this.head,
						n = 1;
					for (r.data.copy(t), e -= r.data.length; r = r.next;) {
						var i = r.data,
							o = e > i.length ? i.length : e;
						if (i.copy(t, t.length - e, 0, o), 0 == (e -= o)) {
							o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o));
							break
						}++n
					}
					return this.length -= n, t
				}
			}, {
				key: u,
				value: function(e, t) {
					return s(this, function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = null != arguments[t] ? arguments[t] : {};
							t % 2 ? n(Object(r), !0).forEach((function(t) {
								i(e, t, r[t])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
							}))
						}
						return e
					}({}, t, {
						depth: 0,
						customInspect: !1
					}))
				}
			}]) && o(t.prototype, r), c && o(t, c), e
		}()
	}, function(e, t) {}, function(e, t, r) {
		"use strict";
		(function(t) {
			var n;

			function i(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var o = r(62),
				a = Symbol("lastResolve"),
				s = Symbol("lastReject"),
				u = Symbol("error"),
				c = Symbol("ended"),
				f = Symbol("lastPromise"),
				h = Symbol("handlePromise"),
				l = Symbol("stream");

			function d(e, t) {
				return {
					value: e,
					done: t
				}
			}

			function p(e) {
				var t = e[a];
				if (null !== t) {
					var r = e[l].read();
					null !== r && (e[f] = null, e[a] = null, e[s] = null, t(d(r, !1)))
				}
			}

			function b(e) {
				t.nextTick(p, e)
			}
			var g = Object.getPrototypeOf((function() {})),
				m = Object.setPrototypeOf((i(n = {
					get stream() {
						return this[l]
					},
					next: function() {
						var e = this,
							r = this[u];
						if (null !== r) return Promise.reject(r);
						if (this[c]) return Promise.resolve(d(void 0, !0));
						if (this[l].destroyed) return new Promise((function(r, n) {
							t.nextTick((function() {
								e[u] ? n(e[u]) : r(d(void 0, !0))
							}))
						}));
						var n, i = this[f];
						if (i) n = new Promise(function(e, t) {
							return function(r, n) {
								e.then((function() {
									t[c] ? r(d(void 0, !0)) : t[h](r, n)
								}), n)
							}
						}(i, this));
						else {
							var o = this[l].read();
							if (null !== o) return Promise.resolve(d(o, !1));
							n = new Promise(this[h])
						}
						return this[f] = n, n
					}
				}, Symbol.asyncIterator, (function() {
					return this
				})), i(n, "return", (function() {
					var e = this;
					return new Promise((function(t, r) {
						e[l].destroy(null, (function(e) {
							e ? r(e) : t(d(void 0, !0))
						}))
					}))
				})), n), g);
			e.exports = function(e) {
				var t, r = Object.create(m, (i(t = {}, l, {
					value: e,
					writable: !0
				}), i(t, a, {
					value: null,
					writable: !0
				}), i(t, s, {
					value: null,
					writable: !0
				}), i(t, u, {
					value: null,
					writable: !0
				}), i(t, c, {
					value: e._readableState.endEmitted,
					writable: !0
				}), i(t, h, {
					value: function(e, t) {
						var n = r[l].read();
						n ? (r[f] = null, r[a] = null, r[s] = null, e(d(n, !1))) : (r[a] = e, r[s] = t)
					},
					writable: !0
				}), t));
				return r[f] = null, o(e, (function(e) {
					if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
						var t = r[s];
						return null !== t && (r[f] = null, r[a] = null, r[s] = null, t(e)), void(r[u] = e)
					}
					var n = r[a];
					null !== n && (r[f] = null, r[a] = null, r[s] = null, n(d(void 0, !0))), r[c] = !0
				})), e.on("readable", b.bind(null, r)), r
			}
		}).call(this, r(5))
	}, function(e, t) {
		e.exports = function() {
			throw new Error("Readable.from is not available in the browser")
		}
	}, function(e, t, r) {
		"use strict";
		e.exports = i;
		var n = r(133);

		function i(e) {
			if (!(this instanceof i)) return new i(e);
			n.call(this, e)
		}
		r(3)(i, n), i.prototype._transform = function(e, t, r) {
			r(null, e)
		}
	}, function(e, t, r) {
		"use strict";
		var n;
		var i = r(28).codes,
			o = i.ERR_MISSING_ARGS,
			a = i.ERR_STREAM_DESTROYED;

		function s(e) {
			if (e) throw e
		}

		function u(e, t, i, o) {
			o = function(e) {
				var t = !1;
				return function() {
					t || (t = !0, e.apply(void 0, arguments))
				}
			}(o);
			var s = !1;
			e.on("close", (function() {
				s = !0
			})), void 0 === n && (n = r(62)), n(e, {
				readable: t,
				writable: i
			}, (function(e) {
				if (e) return o(e);
				s = !0, o()
			}));
			var u = !1;
			return function(t) {
				if (!s && !u) return u = !0,
					function(e) {
						return e.setHeader && "function" == typeof e.abort
					}(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void o(t || new a("pipe"))
			}
		}

		function c(e) {
			e()
		}

		function f(e, t) {
			return e.pipe(t)
		}

		function h(e) {
			return e.length ? "function" != typeof e[e.length - 1] ? s : e.pop() : s
		}
		e.exports = function() {
			for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			var n, i = h(t);
			if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new o("streams");
			var a = t.map((function(e, r) {
				var o = r < t.length - 1;
				return u(e, o, r > 0, (function(e) {
					n || (n = e), e && a.forEach(c), o || (a.forEach(c), i(n))
				}))
			}));
			return t.reduce(f)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(2).Buffer,
			i = r(3),
			o = r(127),
			a = new Array(16),
			s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
			u = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
			c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
			f = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
			h = [0, 1518500249, 1859775393, 2400959708, 2840853838],
			l = [1352829926, 1548603684, 1836072691, 2053994217, 0];

		function d() {
			o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
		}

		function p(e, t) {
			return e << t | e >>> 32 - t
		}

		function b(e, t, r, n, i, o, a, s) {
			return p(e + (t ^ r ^ n) + o + a | 0, s) + i | 0
		}

		function g(e, t, r, n, i, o, a, s) {
			return p(e + (t & r | ~t & n) + o + a | 0, s) + i | 0
		}

		function m(e, t, r, n, i, o, a, s) {
			return p(e + ((t | ~r) ^ n) + o + a | 0, s) + i | 0
		}

		function y(e, t, r, n, i, o, a, s) {
			return p(e + (t & n | r & ~n) + o + a | 0, s) + i | 0
		}

		function v(e, t, r, n, i, o, a, s) {
			return p(e + (t ^ (r | ~n)) + o + a | 0, s) + i | 0
		}
		i(d, o), d.prototype._update = function() {
			for (var e = a, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
			for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, d = 0 | this._e, _ = 0 | this._a, w = 0 | this._b, M = 0 | this._c, S = 0 | this._d, x = 0 | this._e, E = 0; E < 80; E += 1) {
				var k, A;
				E < 16 ? (k = b(r, n, i, o, d, e[s[E]], h[0], c[E]), A = v(_, w, M, S, x, e[u[E]], l[0], f[E])) : E < 32 ? (k = g(r, n, i, o, d, e[s[E]], h[1], c[E]), A = y(_, w, M, S, x, e[u[E]], l[1], f[E])) : E < 48 ? (k = m(r, n, i, o, d, e[s[E]], h[2], c[E]), A = m(_, w, M, S, x, e[u[E]], l[2], f[E])) : E < 64 ? (k = y(r, n, i, o, d, e[s[E]], h[3], c[E]), A = g(_, w, M, S, x, e[u[E]], l[3], f[E])) : (k = v(r, n, i, o, d, e[s[E]], h[4], c[E]), A = b(_, w, M, S, x, e[u[E]], l[4], f[E])), r = d, d = o, o = p(i, 10), i = n, n = k, _ = x, x = S, S = p(M, 10), M = w, w = A
			}
			var R = this._b + i + S | 0;
			this._b = this._c + o + x | 0, this._c = this._d + d + _ | 0, this._d = this._e + r + w | 0, this._e = this._a + n + M | 0, this._a = R
		}, d.prototype._digest = function() {
			this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
			var e = n.alloc ? n.alloc(20) : new n(20);
			return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e
		}, e.exports = d
	}, function(e, t, r) {
		(t = e.exports = function(e) {
			e = e.toLowerCase();
			var r = t[e];
			if (!r) throw new Error(e + " is not supported (we accept pull requests)");
			return new r
		}).sha = r(280), t.sha1 = r(281), t.sha224 = r(282), t.sha256 = r(134), t.sha384 = r(283), t.sha512 = r(135)
	}, function(e, t, r) {
		var n = r(3),
			i = r(30),
			o = r(13).Buffer,
			a = [1518500249, 1859775393, -1894007588, -899497514],
			s = new Array(80);

		function u() {
			this.init(), this._w = s, i.call(this, 64, 56)
		}

		function c(e) {
			return e << 30 | e >>> 2
		}

		function f(e, t, r, n) {
			return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n
		}
		n(u, i), u.prototype.init = function() {
			return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
		}, u.prototype._update = function(e) {
			for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, u = 0 | this._e, h = 0; h < 16; ++h) r[h] = e.readInt32BE(4 * h);
			for (; h < 80; ++h) r[h] = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16];
			for (var l = 0; l < 80; ++l) {
				var d = ~~(l / 20),
					p = 0 | ((t = n) << 5 | t >>> 27) + f(d, i, o, s) + u + r[l] + a[d];
				u = s, s = o, o = c(i), i = n, n = p
			}
			this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = u + this._e | 0
		}, u.prototype._hash = function() {
			var e = o.allocUnsafe(20);
			return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
		}, e.exports = u
	}, function(e, t, r) {
		var n = r(3),
			i = r(30),
			o = r(13).Buffer,
			a = [1518500249, 1859775393, -1894007588, -899497514],
			s = new Array(80);

		function u() {
			this.init(), this._w = s, i.call(this, 64, 56)
		}

		function c(e) {
			return e << 5 | e >>> 27
		}

		function f(e) {
			return e << 30 | e >>> 2
		}

		function h(e, t, r, n) {
			return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n
		}
		n(u, i), u.prototype.init = function() {
			return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
		}, u.prototype._update = function(e) {
			for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, u = 0 | this._e, l = 0; l < 16; ++l) r[l] = e.readInt32BE(4 * l);
			for (; l < 80; ++l) r[l] = (t = r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16]) << 1 | t >>> 31;
			for (var d = 0; d < 80; ++d) {
				var p = ~~(d / 20),
					b = c(n) + h(p, i, o, s) + u + r[d] + a[p] | 0;
				u = s, s = o, o = f(i), i = n, n = b
			}
			this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = u + this._e | 0
		}, u.prototype._hash = function() {
			var e = o.allocUnsafe(20);
			return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
		}, e.exports = u
	}, function(e, t, r) {
		var n = r(3),
			i = r(134),
			o = r(30),
			a = r(13).Buffer,
			s = new Array(64);

		function u() {
			this.init(), this._w = s, o.call(this, 64, 56)
		}
		n(u, i), u.prototype.init = function() {
			return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
		}, u.prototype._hash = function() {
			var e = a.allocUnsafe(28);
			return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
		}, e.exports = u
	}, function(e, t, r) {
		var n = r(3),
			i = r(135),
			o = r(30),
			a = r(13).Buffer,
			s = new Array(160);

		function u() {
			this.init(), this._w = s, o.call(this, 128, 112)
		}
		n(u, i), u.prototype.init = function() {
			return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
		}, u.prototype._hash = function() {
			var e = a.allocUnsafe(48);

			function t(t, r, n) {
				e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4)
			}
			return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e
		}, e.exports = u
	}, function(e, t, r) {
		var n = r(13).Buffer,
			i = r(285).Transform,
			o = r(20).StringDecoder;

		function a(e) {
			i.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
		}
		r(3)(a, i), a.prototype.update = function(e, t, r) {
			"string" == typeof e && (e = n.from(e, t));
			var i = this._update(e);
			return this.hashMode ? this : (r && (i = this._toString(i, r)), i)
		}, a.prototype.setAutoPadding = function() {}, a.prototype.getAuthTag = function() {
			throw new Error("trying to get auth tag in unsupported state")
		}, a.prototype.setAuthTag = function() {
			throw new Error("trying to set auth tag in unsupported state")
		}, a.prototype.setAAD = function() {
			throw new Error("trying to set aad in unsupported state")
		}, a.prototype._transform = function(e, t, r) {
			var n;
			try {
				this.hashMode ? this._update(e) : this.push(this._update(e))
			} catch (e) {
				n = e
			} finally {
				r(n)
			}
		}, a.prototype._flush = function(e) {
			var t;
			try {
				this.push(this.__final())
			} catch (e) {
				t = e
			}
			e(t)
		}, a.prototype._finalOrDigest = function(e) {
			var t = this.__final() || n.alloc(0);
			return e && (t = this._toString(t, e, !0)), t
		}, a.prototype._toString = function(e, t, r) {
			if (this._decoder || (this._decoder = new o(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings");
			var n = this._decoder.write(e);
			return r && (n += this._decoder.end()), n
		}, e.exports = a
	}, function(e, t, r) {
		e.exports = i;
		var n = r(12).EventEmitter;

		function i() {
			n.call(this)
		}
		r(3)(i, n), i.Readable = r(34), i.Writable = r(286), i.Duplex = r(287), i.Transform = r(288), i.PassThrough = r(289), i.Stream = i, i.prototype.pipe = function(e, t) {
			var r = this;

			function i(t) {
				e.writable && !1 === e.write(t) && r.pause && r.pause()
			}

			function o() {
				r.readable && r.resume && r.resume()
			}
			r.on("data", i), e.on("drain", o), e._isStdio || t && !1 === t.end || (r.on("end", s), r.on("close", u));
			var a = !1;

			function s() {
				a || (a = !0, e.end())
			}

			function u() {
				a || (a = !0, "function" == typeof e.destroy && e.destroy())
			}

			function c(e) {
				if (f(), 0 === n.listenerCount(this, "error")) throw e
			}

			function f() {
				r.removeListener("data", i), e.removeListener("drain", o), r.removeListener("end", s), r.removeListener("close", u), r.removeListener("error", c), e.removeListener("error", c), r.removeListener("end", f), r.removeListener("close", f), e.removeListener("close", f)
			}
			return r.on("error", c), e.on("error", c), r.on("end", f), r.on("close", f), e.on("close", f), e.emit("pipe", r), e
		}
	}, function(e, t, r) {
		e.exports = r(53)
	}, function(e, t, r) {
		e.exports = r(19)
	}, function(e, t, r) {
		e.exports = r(34).Transform
	}, function(e, t, r) {
		e.exports = r(34).PassThrough
	}, function(e, t, r) {
		var n = r(2),
			i = n.Buffer;

		function o(e, t) {
			for (var r in e) t[r] = e[r]
		}

		function a(e, t, r) {
			return i(e, t, r)
		}
		i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), o(i, a), a.from = function(e, t, r) {
			if ("number" == typeof e) throw new TypeError("Argument must not be a number");
			return i(e, t, r)
		}, a.alloc = function(e, t, r) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			var n = i(e);
			return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
		}, a.allocUnsafe = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return i(e)
		}, a.allocUnsafeSlow = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return n.SlowBuffer(e)
		}
	}, function(e, t, r) {
		var n = r(136);
		e.exports = function(e) {
			return "string" != typeof e ? e : n(e) ? e.slice(2) : e
		}
	}, function(e, t, r) {
		const n = r(137),
			i = r(293);

		function o(e, t) {
			return new Promise(r => {
				const n = setTimeout(r, e);
				n.unref && t && n.unref()
			})
		}
		e.exports = class extends i {
			constructor(e = {}) {
				if (!e.provider) throw new Error("PollingBlockTracker - no provider specified.");
				const t = e.pollingInterval || 2e4,
					r = e.retryTimeout || t / 10,
					n = void 0 === e.keepEventLoopActive || e.keepEventLoopActive,
					i = e.setSkipCacheFlag || !1;
				super(Object.assign({
					blockResetDuration: t
				}, e)), this._provider = e.provider, this._pollingInterval = t, this._retryTimeout = r, this._keepEventLoopActive = n, this._setSkipCacheFlag = i
			}
			async checkForLatestBlock() {
				return await this._updateLatestBlock(), await this.getLatestBlock()
			}
			_start() {
				this._performSync().catch(e => this.emit("error", e))
			}
			async _performSync() {
				for (; this._isRunning;) try {
					await this._updateLatestBlock(), await o(this._pollingInterval, !this._keepEventLoopActive)
				} catch (e) {
					const t = new Error("PollingBlockTracker - encountered an error while attempting to update latest block:\n" + e.stack);
					try {
						this.emit("error", t)
					} catch (e) {
						console.error(t)
					}
					await o(this._retryTimeout, !this._keepEventLoopActive)
				}
			}
			async _updateLatestBlock() {
				const e = await this._fetchLatestBlock();
				this._newPotentialLatest(e)
			}
			async _fetchLatestBlock() {
				const e = {
					jsonrpc: "2.0",
					id: 1,
					method: "eth_blockNumber",
					params: []
				};
				this._setSkipCacheFlag && (e.skipCache = !0);
				const t = await n(t => this._provider.sendAsync(e, t))();
				if (t.error) throw new Error("PollingBlockTracker - encountered error fetching block:\n" + t.error);
				return t.result
			}
		}
	}, function(e, t, r) {
		r(138), r(137);
		const n = r(295),
			i = (e, t) => e + t,
			o = ["sync", "latest"];

		function a(e) {
			return Number.parseInt(e, 16)
		}
		e.exports = class extends n {
			constructor(e = {}) {
				super(), this._blockResetDuration = e.blockResetDuration || 2e4, this._blockResetTimeout, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents()
			}
			isRunning() {
				return this._isRunning
			}
			getCurrentBlock() {
				return this._currentBlock
			}
			async getLatestBlock() {
				if (this._currentBlock) return this._currentBlock;
				return await new Promise(e => this.once("latest", e))
			}
			removeAllListeners(e) {
				e ? super.removeAllListeners(e) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener()
			}
			_start() {}
			_end() {}
			_setupInternalEvents() {
				this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener)
			}
			_onNewListener(e, t) {
				o.includes(e) && this._maybeStart()
			}
			_onRemoveListener(e, t) {
				this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
			}
			_maybeStart() {
				this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), this._start())
			}
			_maybeEnd() {
				this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), this._end())
			}
			_getBlockTrackerEventCount() {
				return o.map(e => this.listenerCount(e)).reduce(i)
			}
			_newPotentialLatest(e) {
				const t = this._currentBlock;
				t && a(e) <= a(t) || this._setCurrentBlock(e)
			}
			_setCurrentBlock(e) {
				const t = this._currentBlock;
				this._currentBlock = e, this.emit("latest", e), this.emit("sync", {
					oldBlock: t,
					newBlock: e
				})
			}
			_setupBlockResetTimeout() {
				this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref()
			}
			_cancelBlockResetTimeout() {
				clearTimeout(this._blockResetTimeout)
			}
			_resetCurrentBlock() {
				this._currentBlock = null
			}
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = (e = e || {}).max || Number.MAX_SAFE_INTEGER,
				r = void 0 !== e.start ? e.start : Math.floor(Math.random() * t);
			return function() {
				return r %= t, r++
			}
		}
	}, function(e, t, r) {
		const n = r(21),
			i = r(12);
		var o = "object" == typeof Reflect ? Reflect : null,
			a = o && "function" == typeof o.apply ? o.apply : function(e, t, r) {
				return Function.prototype.apply.call(e, t, r)
			};

		function s() {
			i.call(this)
		}

		function u(e, t, r) {
			try {
				a(e, t, r)
			} catch (e) {
				setTimeout(() => {
					throw e
				})
			}
		}

		function c(e, t) {
			for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
			return r
		}
		e.exports = s, n.inherits(s, i), s.prototype.emit = function(e) {
			for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
			var n = "error" === e,
				i = this._events;
			if (void 0 !== i) n = n && void 0 === i.error;
			else if (!n) return !1;
			if (n) {
				var o;
				if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
				var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
				throw a.context = o, a
			}
			var s = i[e];
			if (void 0 === s) return !1;
			if ("function" == typeof s) u(s, this, t);
			else {
				var f = s.length,
					h = c(s, f);
				for (r = 0; r < f; ++r) u(h[r], this, t)
			}
			return !0
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o(r(297)),
			i = o(r(323));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = (0, n.default)(i.default), e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			return function(t, r, o) {
				return e(n.default, t, (0, i.default)(r), o)
			}
		};
		var n = o(r(139)),
			i = o(r(23));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = t.default
	}, function(e, t, r) {
		var n = r(63),
			i = r(143);
		e.exports = function(e) {
			if (!i(e)) return !1;
			var t = n(e);
			return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
		}
	}, function(e, t, r) {
		var n = r(140),
			i = Object.prototype,
			o = i.hasOwnProperty,
			a = i.toString,
			s = n ? n.toStringTag : void 0;
		e.exports = function(e) {
			var t = o.call(e, s),
				r = e[s];
			try {
				e[s] = void 0;
				var n = !0
			} catch (e) {}
			var i = a.call(e);
			return n && (t ? e[s] = r : delete e[s]), i
		}
	}, function(e, t) {
		var r = Object.prototype.toString;
		e.exports = function(e) {
			return r.call(e)
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t, r, o) {
			(0, n.default)(t)(e, (0, i.default)(r), o)
		};
		var n = o(r(146)),
			i = o(r(23));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			if ((0, n.default)(e)) return function(e) {
				var t = -1,
					r = e.length;
				return function() {
					return ++t < r ? {
						value: e[t],
						key: t
					} : null
				}
			}(e);
			var t = (0, i.default)(e);
			return t ? function(e) {
				var t = -1;
				return function() {
					var r = e.next();
					return r.done ? null : (t++, {
						value: r.value,
						key: t
					})
				}
			}(t) : (r = e, a = (0, o.default)(r), s = -1, u = a.length, function() {
				var e = a[++s];
				return s < u ? {
					value: r[e],
					key: e
				} : null
			});
			var r, a, s, u
		};
		var n = a(r(47)),
			i = a(r(303)),
			o = a(r(304));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			return n && e[n] && e[n]()
		};
		var n = "function" == typeof Symbol && Symbol.iterator;
		e.exports = t.default
	}, function(e, t, r) {
		var n = r(305),
			i = r(316),
			o = r(47);
		e.exports = function(e) {
			return o(e) ? n(e) : i(e)
		}
	}, function(e, t, r) {
		var n = r(306),
			i = r(307),
			o = r(147),
			a = r(309),
			s = r(311),
			u = r(312),
			c = Object.prototype.hasOwnProperty;
		e.exports = function(e, t) {
			var r = o(e),
				f = !r && i(e),
				h = !r && !f && a(e),
				l = !r && !f && !h && u(e),
				d = r || f || h || l,
				p = d ? n(e.length, String) : [],
				b = p.length;
			for (var g in e) !t && !c.call(e, g) || d && ("length" == g || h && ("offset" == g || "parent" == g) || l && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, b)) || p.push(g);
			return p
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}
	}, function(e, t, r) {
		var n = r(308),
			i = r(65),
			o = Object.prototype,
			a = o.hasOwnProperty,
			s = o.propertyIsEnumerable,
			u = n(function() {
				return arguments
			}()) ? n : function(e) {
				return i(e) && a.call(e, "callee") && !s.call(e, "callee")
			};
		e.exports = u
	}, function(e, t, r) {
		var n = r(63),
			i = r(65);
		e.exports = function(e) {
			return i(e) && "[object Arguments]" == n(e)
		}
	}, function(e, t, r) {
		(function(e) {
			var n = r(141),
				i = r(310),
				o = t && !t.nodeType && t,
				a = o && "object" == typeof e && e && !e.nodeType && e,
				s = a && a.exports === o ? n.Buffer : void 0,
				u = (s ? s.isBuffer : void 0) || i;
			e.exports = u
		}).call(this, r(33)(e))
	}, function(e, t) {
		e.exports = function() {
			return !1
		}
	}, function(e, t) {
		var r = /^(?:0|[1-9]\d*)$/;
		e.exports = function(e, t) {
			var n = typeof e;
			return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
	}, function(e, t, r) {
		var n = r(313),
			i = r(314),
			o = r(315),
			a = o && o.isTypedArray,
			s = a ? i(a) : n;
		e.exports = s
	}, function(e, t, r) {
		var n = r(63),
			i = r(144),
			o = r(65),
			a = {};
		a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
			return o(e) && i(e.length) && !!a[n(e)]
		}
	}, function(e, t) {
		e.exports = function(e) {
			return function(t) {
				return e(t)
			}
		}
	}, function(e, t, r) {
		(function(e) {
			var n = r(142),
				i = t && !t.nodeType && t,
				o = i && "object" == typeof e && e && !e.nodeType && e,
				a = o && o.exports === i && n.process,
				s = function() {
					try {
						var e = o && o.require && o.require("util").types;
						return e || a && a.binding && a.binding("util")
					} catch (e) {}
				}();
			e.exports = s
		}).call(this, r(33)(e))
	}, function(e, t, r) {
		var n = r(317),
			i = r(318),
			o = Object.prototype.hasOwnProperty;
		e.exports = function(e) {
			if (!n(e)) return i(e);
			var t = [];
			for (var r in Object(e)) o.call(e, r) && "constructor" != r && t.push(r);
			return t
		}
	}, function(e, t) {
		var r = Object.prototype;
		e.exports = function(e) {
			var t = e && e.constructor;
			return e === ("function" == typeof t && t.prototype || r)
		}
	}, function(e, t, r) {
		var n = r(319)(Object.keys, Object);
		e.exports = n
	}, function(e, t) {
		e.exports = function(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			return (0, i.default)((function(t, r) {
				var i;
				try {
					i = e.apply(this, t)
				} catch (e) {
					return r(e)
				}(0, n.default)(i) && "function" == typeof i.then ? i.then((function(e) {
					s(r, null, e)
				}), (function(e) {
					s(r, e.message ? e : new Error(e))
				})) : r(null, i)
			}))
		};
		var n = a(r(143)),
			i = a(r(321)),
			o = a(r(322));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function s(e, t, r) {
			try {
				e(t, r)
			} catch (e) {
				(0, o.default)(u, e)
			}
		}

		function u(e) {
			throw e
		}
		e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			return function() {
				var t = (0, o.default)(arguments),
					r = t.pop();
				e.call(this, t, r)
			}
		};
		var n, i = r(48),
			o = (n = i) && n.__esModule ? n : {
				default: n
			};
		e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		(function(e, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.hasNextTick = t.hasSetImmediate = void 0, t.fallback = f, t.wrap = h;
			var i, o = r(48),
				a = (i = o) && i.__esModule ? i : {
					default: i
				};
			var s, u = t.hasSetImmediate = "function" == typeof e && e,
				c = t.hasNextTick = "object" == typeof n && "function" == typeof n.nextTick;

			function f(e) {
				setTimeout(e, 0)
			}

			function h(e) {
				return function(t) {
					var r = (0, a.default)(arguments, 1);
					e((function() {
						t.apply(null, r)
					}))
				}
			}
			s = u ? e : c ? n.nextTick : f, t.default = h(s)
		}).call(this, r(108).setImmediate, r(5))
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t, r, o) {
			o = o || n.default, t = t || [];
			var a = [],
				s = 0,
				u = (0, i.default)(r);
			e(t, (function(e, t, r) {
				var n = s++;
				u(e, (function(e, t) {
					a[n] = t, r(e)
				}))
			}), (function(e) {
				o(e, a)
			}))
		};
		var n = o(r(38)),
			i = o(r(23));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o(r(325)),
			i = o(r(148));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = (0, i.default)(n.default, 1), e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t, r, a) {
			(0, n.default)(t)(e, (0, i.default)((0, o.default)(r)), a)
		};
		var n = a(r(146)),
			i = a(r(326)),
			o = a(r(23));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			return function(t, r, n) {
				return e(t, n)
			}
		}, e.exports = t.default
	}, function(e, t, r) {
		const n = r(12).EventEmitter,
			i = r(21).inherits;

		function o() {
			n.call(this), this.isLocked = !0
		}
		e.exports = o, i(o, n), o.prototype.go = function() {
			this.isLocked = !1, this.emit("unlock")
		}, o.prototype.stop = function() {
			this.isLocked = !0, this.emit("lock")
		}, o.prototype.await = function(e) {
			const t = this;
			t.isLocked ? t.once("unlock", e) : setTimeout(e)
		}
	}, function(e, t, r) {
		t.parse = r(329), t.stringify = r(330)
	}, function(e, t) {
		var r, n, i, o, a = {
				'"': '"',
				"\\": "\\",
				"/": "/",
				b: "\b",
				f: "\f",
				n: "\n",
				r: "\r",
				t: "\t"
			},
			s = function(e) {
				throw {
					name: "SyntaxError",
					message: e,
					at: r,
					text: i
				}
			},
			u = function(e) {
				return e && e !== n && s("Expected '" + e + "' instead of '" + n + "'"), n = i.charAt(r), r += 1, n
			},
			c = function() {
				var e, t = "";
				for ("-" === n && (t = "-", u("-")); n >= "0" && n <= "9";) t += n, u();
				if ("." === n)
					for (t += "."; u() && n >= "0" && n <= "9";) t += n;
				if ("e" === n || "E" === n)
					for (t += n, u(), "-" !== n && "+" !== n || (t += n, u()); n >= "0" && n <= "9";) t += n, u();
				if (e = +t, isFinite(e)) return e;
				s("Bad number")
			},
			f = function() {
				var e, t, r, i = "";
				if ('"' === n)
					for (; u();) {
						if ('"' === n) return u(), i;
						if ("\\" === n)
							if (u(), "u" === n) {
								for (r = 0, t = 0; t < 4 && (e = parseInt(u(), 16), isFinite(e)); t += 1) r = 16 * r + e;
								i += String.fromCharCode(r)
							} else {
								if ("string" != typeof a[n]) break;
								i += a[n]
							}
						else i += n
					}
				s("Bad string")
			},
			h = function() {
				for (; n && n <= " ";) u()
			};
		o = function() {
			switch (h(), n) {
				case "{":
					return function() {
						var e, t = {};
						if ("{" === n) {
							if (u("{"), h(), "}" === n) return u("}"), t;
							for (; n;) {
								if (e = f(), h(), u(":"), Object.hasOwnProperty.call(t, e) && s('Duplicate key "' + e + '"'), t[e] = o(), h(), "}" === n) return u("}"), t;
								u(","), h()
							}
						}
						s("Bad object")
					}();
				case "[":
					return function() {
						var e = [];
						if ("[" === n) {
							if (u("["), h(), "]" === n) return u("]"), e;
							for (; n;) {
								if (e.push(o()), h(), "]" === n) return u("]"), e;
								u(","), h()
							}
						}
						s("Bad array")
					}();
				case '"':
					return f();
				case "-":
					return c();
				default:
					return n >= "0" && n <= "9" ? c() : function() {
						switch (n) {
							case "t":
								return u("t"), u("r"), u("u"), u("e"), !0;
							case "f":
								return u("f"), u("a"), u("l"), u("s"), u("e"), !1;
							case "n":
								return u("n"), u("u"), u("l"), u("l"), null
						}
						s("Unexpected '" + n + "'")
					}()
			}
		}, e.exports = function(e, t) {
			var a;
			return i = e, r = 0, n = " ", a = o(), h(), n && s("Syntax error"), "function" == typeof t ? function e(r, n) {
				var i, o, a = r[n];
				if (a && "object" == typeof a)
					for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (void 0 !== (o = e(a, i)) ? a[i] = o : delete a[i]);
				return t.call(r, n, a)
			}({
				"": a
			}, "") : a
		}
	}, function(e, t) {
		var r, n, i, o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			a = {
				"\b": "\\b",
				"\t": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			};

		function s(e) {
			return o.lastIndex = 0, o.test(e) ? '"' + e.replace(o, (function(e) {
				var t = a[e];
				return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
			})) + '"' : '"' + e + '"'
		}
		e.exports = function(e, t, o) {
			var a;
			if (r = "", n = "", "number" == typeof o)
				for (a = 0; a < o; a += 1) n += " ";
			else "string" == typeof o && (n = o);
			if (i = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
			return function e(t, o) {
				var a, u, c, f, h, l = r,
					d = o[t];
				switch (d && "object" == typeof d && "function" == typeof d.toJSON && (d = d.toJSON(t)), "function" == typeof i && (d = i.call(o, t, d)), typeof d) {
					case "string":
						return s(d);
					case "number":
						return isFinite(d) ? String(d) : "null";
					case "boolean":
					case "null":
						return String(d);
					case "object":
						if (!d) return "null";
						if (r += n, h = [], "[object Array]" === Object.prototype.toString.apply(d)) {
							for (f = d.length, a = 0; a < f; a += 1) h[a] = e(a, d) || "null";
							return c = 0 === h.length ? "[]" : r ? "[\n" + r + h.join(",\n" + r) + "\n" + l + "]" : "[" + h.join(",") + "]", r = l, c
						}
						if (i && "object" == typeof i)
							for (f = i.length, a = 0; a < f; a += 1) "string" == typeof(u = i[a]) && (c = e(u, d)) && h.push(s(u) + (r ? ": " : ":") + c);
						else
							for (u in d) Object.prototype.hasOwnProperty.call(d, u) && (c = e(u, d)) && h.push(s(u) + (r ? ": " : ":") + c);
						return c = 0 === h.length ? "{}" : r ? "{\n" + r + h.join(",\n" + r) + "\n" + l + "}" : "{" + h.join(",") + "}", r = l, c
				}
			}("", {
				"": e
			})
		}
	}, function(e, t) {
		e.exports = function() {
			return Math.floor(Number.MAX_SAFE_INTEGER * Math.random())
		}
	}, function(e, t, r) {
		const n = r(68),
			i = r(333);
		e.exports = class extends n {
			constructor(e) {
				super(({
					blockTracker: t
				}) => i(Object.assign({
					blockTracker: t
				}, e)))
			}
		}
	}, function(e, t, r) {
		const n = r(334),
			i = r(335),
			o = [void 0, null, "<nil>"];
		e.exports = function(e = {}) {
			const {
				blockTracker: t
			} = e;
			if (!t) throw new Error("createBlockCacheMiddleware - No BlockTracker specified");
			const r = new a,
				o = {
					perma: r,
					block: r,
					fork: r
				};
			return i(async (e, i, a) => {
				if (e.skipCache) return a();
				const s = n.cacheTypeForPayload(e),
					u = o[s];
				if (!u) return a();
				if (!u.canCacheRequest(e)) return a();
				let c, f = n.blockTagForPayload(e);
				if (f || (f = "latest"), "earliest" === f) c = "0x00";
				else if ("latest" === f) {
					const e = await t.getLatestBlock();
					r.clearBefore(e), c = e
				} else c = f;
				const h = await u.get(e, c);
				void 0 === h ? (await a(), await u.set(e, c, i.result)) : i.result = h
			})
		};
		class a {
			constructor() {
				this.cache = {}
			}
			getBlockCacheForPayload(e, t) {
				const r = Number.parseInt(t, 16);
				let n = this.cache[r];
				if (!n) {
					const e = {};
					this.cache[r] = e, n = e
				}
				return n
			}
			async get(e, t) {
				const r = this.getBlockCacheForPayload(e, t);
				if (!r) return;
				return r[n.cacheIdentifierForPayload(e, !0)]
			}
			async set(e, t, r) {
				if (!this.canCacheResult(e, r)) return;
				this.getBlockCacheForPayload(e, t)[n.cacheIdentifierForPayload(e, !0)] = r
			}
			canCacheRequest(e) {
				if (!n.canCache(e)) return !1;
				return "pending" !== n.blockTagForPayload(e)
			}
			canCacheResult(e, t) {
				if (!o.includes(t)) return !!(!["eth_getTransactionByHash", "eth_getTransactionReceipt"].includes(e.method) || t && t.blockHash && "0x0000000000000000000000000000000000000000000000000000000000000000" !== t.blockHash)
			}
			clearBefore(e) {
				const t = this,
					r = Number.parseInt(e, 16);
				Object.keys(t.cache).map(Number).filter(e => e < r).forEach(e => delete t.cache[e])
			}
		}
	}, function(e, t, r) {
		const n = r(150);

		function i(e) {
			return "never" !== s(e)
		}

		function o(e) {
			const t = a(e);
			return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t)
		}

		function a(e) {
			switch (e.method) {
				case "eth_getStorageAt":
					return 2;
				case "eth_getBalance":
				case "eth_getCode":
				case "eth_getTransactionCount":
				case "eth_call":
					return 1;
				case "eth_getBlockByNumber":
					return 0;
				default:
					return
			}
		}

		function s(e) {
			switch (e.method) {
				case "web3_clientVersion":
				case "web3_sha3":
				case "eth_protocolVersion":
				case "eth_getBlockTransactionCountByHash":
				case "eth_getUncleCountByBlockHash":
				case "eth_getCode":
				case "eth_getBlockByHash":
				case "eth_getTransactionByHash":
				case "eth_getTransactionByBlockHashAndIndex":
				case "eth_getTransactionReceipt":
				case "eth_getUncleByBlockHashAndIndex":
				case "eth_getCompilers":
				case "eth_compileLLL":
				case "eth_compileSolidity":
				case "eth_compileSerpent":
				case "shh_version":
				case "test_permaCache":
					return "perma";
				case "eth_getBlockByNumber":
				case "eth_getBlockTransactionCountByNumber":
				case "eth_getUncleCountByBlockNumber":
				case "eth_getTransactionByBlockNumberAndIndex":
				case "eth_getUncleByBlockNumberAndIndex":
				case "test_forkCache":
					return "fork";
				case "eth_gasPrice":
				case "eth_blockNumber":
				case "eth_getBalance":
				case "eth_getStorageAt":
				case "eth_getTransactionCount":
				case "eth_call":
				case "eth_estimateGas":
				case "eth_getFilterLogs":
				case "eth_getLogs":
				case "test_blockCache":
					return "block";
				case "net_version":
				case "net_peerCount":
				case "net_listening":
				case "eth_syncing":
				case "eth_sign":
				case "eth_coinbase":
				case "eth_mining":
				case "eth_hashrate":
				case "eth_accounts":
				case "eth_sendTransaction":
				case "eth_sendRawTransaction":
				case "eth_newFilter":
				case "eth_newBlockFilter":
				case "eth_newPendingTransactionFilter":
				case "eth_uninstallFilter":
				case "eth_getFilterChanges":
				case "eth_getWork":
				case "eth_submitWork":
				case "eth_submitHashrate":
				case "db_putString":
				case "db_getString":
				case "db_putHex":
				case "db_getHex":
				case "shh_post":
				case "shh_newIdentity":
				case "shh_hasIdentity":
				case "shh_newGroup":
				case "shh_addToGroup":
				case "shh_newFilter":
				case "shh_uninstallFilter":
				case "shh_getFilterChanges":
				case "shh_getMessages":
				case "test_neverCache":
					return "never"
			}
		}
		e.exports = {
			cacheIdentifierForPayload: function(e, t) {
				const r = t ? o(e) : e.params;
				return i(e) ? e.method + ":" + n(r) : null
			},
			canCache: i,
			blockTagForPayload: function(e) {
				let t = a(e);
				if (t >= e.params.length) return null;
				return e.params[t]
			},
			paramsWithoutBlockTag: o,
			blockTagParamIndex: a,
			cacheTypeForPayload: s
		}
	}, function(e, t) {
		e.exports = function(e) {
			return (t, r, n, i) => {
				let o;
				const a = new Promise(e => {
					o = e
				});
				let s, u;
				e(t, r, async () => {
					u = !0, n(e => {
						s = e, o()
					}), await a
				}).then(async () => {
					u ? (await a, s(null)) : i(null)
				}).catch(e => {
					s ? s(e) : i(e)
				})
			}
		}
	}, function(e, t, r) {
		const n = r(21).inherits,
			i = r(49);

		function o(e) {
			e = e || {}, this.staticResponses = e
		}
		e.exports = o, n(o, i), o.prototype.handleRequest = function(e, t, r) {
			var n = this.staticResponses[e.method];
			"function" == typeof n ? n(e, t, r) : void 0 !== n ? setTimeout(() => r(null, n)) : t()
		}
	}, function(e, t, r) {
		const n = r(68),
			i = r(151);
		e.exports = class extends n {
			constructor() {
				super(({
					blockTracker: e,
					provider: t,
					engine: r
				}) => i({
					blockTracker: e,
					provider: t
				}))
			}
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.createIdRemapMiddleware = void 0;
		const n = r(153);
		t.createIdRemapMiddleware = function() {
			return (e, t, r, i) => {
				const o = e.id,
					a = n.getUniqueId();
				e.id = a, t.id = a, r(r => {
					e.id = o, t.id = o, r()
				})
			}
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.createAsyncMiddleware = void 0, t.createAsyncMiddleware = function(e) {
			return async (t, r, n, i) => {
				let o;
				const a = new Promise(e => {
					o = e
				});
				let s = null,
					u = !1;
				const c = async () => {
					u = !0, n(e => {
						s = e, o()
					}), await a
				};
				try {
					await e(t, r, c), u ? (await a, s(null)) : i(null)
				} catch (e) {
					s ? s(e) : i(e)
				}
			}
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.createScaffoldMiddleware = void 0, t.createScaffoldMiddleware = function(e) {
			return (t, r, n, i) => {
				const o = e[t.method];
				return void 0 === o ? n() : "function" == typeof o ? o(t, r, n, i) : (r.result = o, i())
			}
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
		const n = r(70);
		Object.defineProperty(t, "EthereumRpcError", {
			enumerable: !0,
			get: function() {
				return n.EthereumRpcError
			}
		}), Object.defineProperty(t, "EthereumProviderError", {
			enumerable: !0,
			get: function() {
				return n.EthereumProviderError
			}
		});
		const i = r(155);
		Object.defineProperty(t, "serializeError", {
			enumerable: !0,
			get: function() {
				return i.serializeError
			}
		}), Object.defineProperty(t, "getMessageFromCode", {
			enumerable: !0,
			get: function() {
				return i.getMessageFromCode
			}
		});
		const o = r(343);
		Object.defineProperty(t, "ethErrors", {
			enumerable: !0,
			get: function() {
				return o.ethErrors
			}
		});
		const a = r(71);
		Object.defineProperty(t, "errorCodes", {
			enumerable: !0,
			get: function() {
				return a.errorCodes
			}
		})
	}, function(e, t) {
		e.exports = i, i.default = i, i.stable = a, i.stableStringify = a;
		var r = [],
			n = [];

		function i(e, t, i) {
			var o;
			! function e(t, i, o, a) {
				var s;
				if ("object" == typeof t && null !== t) {
					for (s = 0; s < o.length; s++)
						if (o[s] === t) {
							var u = Object.getOwnPropertyDescriptor(a, i);
							return void(void 0 !== u.get ? u.configurable ? (Object.defineProperty(a, i, {
								value: "[Circular]"
							}), r.push([a, i, t, u])) : n.push([t, i]) : (a[i] = "[Circular]", r.push([a, i, t])))
						} if (o.push(t), Array.isArray(t))
						for (s = 0; s < t.length; s++) e(t[s], s, o, t);
					else {
						var c = Object.keys(t);
						for (s = 0; s < c.length; s++) {
							var f = c[s];
							e(t[f], f, o, t)
						}
					}
					o.pop()
				}
			}(e, "", [], void 0);
			try {
				o = 0 === n.length ? JSON.stringify(e, t, i) : JSON.stringify(e, s(t), i)
			} catch (e) {
				return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
			} finally {
				for (; 0 !== r.length;) {
					var a = r.pop();
					4 === a.length ? Object.defineProperty(a[0], a[1], a[3]) : a[0][a[1]] = a[2]
				}
			}
			return o
		}

		function o(e, t) {
			return e < t ? -1 : e > t ? 1 : 0
		}

		function a(e, t, i) {
			var a, u = function e(t, i, a, s) {
				var u;
				if ("object" == typeof t && null !== t) {
					for (u = 0; u < a.length; u++)
						if (a[u] === t) {
							var c = Object.getOwnPropertyDescriptor(s, i);
							return void(void 0 !== c.get ? c.configurable ? (Object.defineProperty(s, i, {
								value: "[Circular]"
							}), r.push([s, i, t, c])) : n.push([t, i]) : (s[i] = "[Circular]", r.push([s, i, t])))
						} try {
						if ("function" == typeof t.toJSON) return
					} catch (e) {
						return
					}
					if (a.push(t), Array.isArray(t))
						for (u = 0; u < t.length; u++) e(t[u], u, a, t);
					else {
						var f = {},
							h = Object.keys(t).sort(o);
						for (u = 0; u < h.length; u++) {
							var l = h[u];
							e(t[l], l, a, t), f[l] = t[l]
						}
						if (void 0 === s) return f;
						r.push([s, i, t]), s[i] = f
					}
					a.pop()
				}
			}(e, "", [], void 0) || e;
			try {
				a = 0 === n.length ? JSON.stringify(u, t, i) : JSON.stringify(u, s(t), i)
			} catch (e) {
				return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
			} finally {
				for (; 0 !== r.length;) {
					var c = r.pop();
					4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2]
				}
			}
			return a
		}

		function s(e) {
			return e = void 0 !== e ? e : function(e, t) {
					return t
				},
				function(t, r) {
					if (n.length > 0)
						for (var i = 0; i < n.length; i++) {
							var o = n[i];
							if (o[1] === t && o[0] === r) {
								r = "[Circular]", n.splice(i, 1);
								break
							}
						}
					return e.call(this, t, r)
				}
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ethErrors = void 0;
		const n = r(70),
			i = r(155),
			o = r(71);

		function a(e, t) {
			const [r, o] = u(t);
			return new n.EthereumRpcError(e, r || i.getMessageFromCode(e), o)
		}

		function s(e, t) {
			const [r, o] = u(t);
			return new n.EthereumProviderError(e, r || i.getMessageFromCode(e), o)
		}

		function u(e) {
			if (e) {
				if ("string" == typeof e) return [e];
				if ("object" == typeof e && !Array.isArray(e)) {
					const {
						message: t,
						data: r
					} = e;
					if (t && "string" != typeof t) throw new Error("Must specify string message.");
					return [t || void 0, r]
				}
			}
			return []
		}
		t.ethErrors = {
			rpc: {
				parse: e => a(o.errorCodes.rpc.parse, e),
				invalidRequest: e => a(o.errorCodes.rpc.invalidRequest, e),
				invalidParams: e => a(o.errorCodes.rpc.invalidParams, e),
				methodNotFound: e => a(o.errorCodes.rpc.methodNotFound, e),
				internal: e => a(o.errorCodes.rpc.internal, e),
				server: e => {
					if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
					const {
						code: t
					} = e;
					if (!Number.isInteger(t) || t > -32005 || t < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
					return a(t, e)
				},
				invalidInput: e => a(o.errorCodes.rpc.invalidInput, e),
				resourceNotFound: e => a(o.errorCodes.rpc.resourceNotFound, e),
				resourceUnavailable: e => a(o.errorCodes.rpc.resourceUnavailable, e),
				transactionRejected: e => a(o.errorCodes.rpc.transactionRejected, e),
				methodNotSupported: e => a(o.errorCodes.rpc.methodNotSupported, e),
				limitExceeded: e => a(o.errorCodes.rpc.limitExceeded, e)
			},
			provider: {
				userRejectedRequest: e => s(o.errorCodes.provider.userRejectedRequest, e),
				unauthorized: e => s(o.errorCodes.provider.unauthorized, e),
				unsupportedMethod: e => s(o.errorCodes.provider.unsupportedMethod, e),
				disconnected: e => s(o.errorCodes.provider.disconnected, e),
				chainDisconnected: e => s(o.errorCodes.provider.chainDisconnected, e),
				custom: e => {
					if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
					const {
						code: t,
						message: r,
						data: i
					} = e;
					if (!r || "string" != typeof r) throw new Error('"message" must be a nonempty string');
					return new n.EthereumProviderError(t, r, i)
				}
			}
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.mergeMiddleware = void 0;
		const n = r(154);
		t.mergeMiddleware = function(e) {
			const t = new n.JsonRpcEngine;
			return e.forEach(e => t.push(e)), t.asMiddleware()
		}
	}, function(e, t) {
		e.exports = function(e) {
			return (t, r, n, i) => {
				const o = e[t.method];
				return void 0 === o ? n() : "function" == typeof o ? o(t, r, n, i) : (r.result = o, i())
			}
		}
	}, function(e, t, r) {
		const n = r(138),
			i = r(347),
			o = r(348),
			{
				bnToHex: a,
				hexToInt: s,
				incrementHexInt: u,
				minBlockRef: c,
				blockRefIsNumber: f
			} = r(39);
		e.exports = class extends o {
			constructor({
				provider: e,
				params: t
			}) {
				super(), this.type = "log", this.ethQuery = new n(e), this.params = Object.assign({
					fromBlock: "latest",
					toBlock: "latest",
					address: void 0,
					topics: []
				}, t), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map(e => e.toLowerCase()))
			}
			async initialize({
				currentBlock: e
			}) {
				let t = this.params.fromBlock;
				["latest", "pending"].includes(t) && (t = e), "earliest" === t && (t = "0x0"), this.params.fromBlock = t;
				const r = c(this.params.toBlock, e),
					n = Object.assign({}, this.params, {
						toBlock: r
					}),
					i = await this._fetchLogs(n);
				this.addInitialResults(i)
			}
			async update({
				oldBlock: e,
				newBlock: t
			}) {
				const r = t;
				let n;
				n = e ? u(e) : t;
				const i = Object.assign({}, this.params, {
						fromBlock: n,
						toBlock: r
					}),
					o = (await this._fetchLogs(i)).filter(e => this.matchLog(e));
				this.addResults(o)
			}
			async _fetchLogs(e) {
				return await i(t => this.ethQuery.getLogs(e, t))()
			}
			matchLog(e) {
				if (s(this.params.fromBlock) >= s(e.blockNumber)) return !1;
				if (f(this.params.toBlock) && s(this.params.toBlock) <= s(e.blockNumber)) return !1;
				const t = e.address && e.address.toLowerCase();
				if (this.params.address && t && !this.params.address.includes(t)) return !1;
				return this.params.topics.every((t, r) => {
					let n = e.topics[r];
					if (!n) return !1;
					n = n.toLowerCase();
					let i = Array.isArray(t) ? t : [t];
					if (i.includes(null)) return !0;
					i = i.map(e => e.toLowerCase());
					return i.includes(n)
				})
			}
		}
	}, function(e, t, r) {
		"use strict";
		const n = (e, t, r, n) => function(...i) {
				return new(0, t.promiseModule)((o, a) => {
					t.multiArgs ? i.push((...e) => {
						t.errorFirst ? e[0] ? a(e) : (e.shift(), o(e)) : o(e)
					}) : t.errorFirst ? i.push((e, t) => {
						e ? a(e) : o(t)
					}) : i.push(o);
					const s = this === r ? n : this;
					Reflect.apply(e, s, i)
				})
			},
			i = new WeakMap;
		e.exports = (e, t) => {
			t = {
				exclude: [/.+(?:Sync|Stream)$/],
				errorFirst: !0,
				promiseModule: Promise,
				...t
			};
			const r = typeof e;
			if (null === e || "object" !== r && "function" !== r) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null===e?"null":r}\``);
			const o = new WeakMap,
				a = new Proxy(e, {
					apply(e, r, i) {
						const s = o.get(e);
						if (s) return Reflect.apply(s, r, i);
						const u = t.excludeMain ? e : n(e, t, a, e);
						return o.set(e, u), Reflect.apply(u, r, i)
					},
					get(e, r) {
						const s = e[r];
						if (!((e, r) => {
								let n = i.get(e);
								if (n || (n = {}, i.set(e, n)), r in n) return n[r];
								const o = e => "string" == typeof e || "symbol" == typeof r ? r === e : e.test(r),
									a = Reflect.getOwnPropertyDescriptor(e, r),
									s = void 0 === a || a.writable || a.configurable,
									u = (t.include ? t.include.some(o) : !t.exclude.some(o)) && s;
								return n[r] = u, u
							})(e, r) || s === Function.prototype[r]) return s;
						const u = o.get(s);
						if (u) return u;
						if ("function" == typeof s) {
							const r = n(s, t, a, e);
							return o.set(s, r), r
						}
						return s
					}
				});
			return a
		}
	}, function(e, t, r) {
		const n = r(72);
		e.exports = class extends n {
			constructor() {
				super(), this.allResults = []
			}
			async update() {
				throw new Error("BaseFilterWithHistory - no update method specified")
			}
			addResults(e) {
				this.allResults = this.allResults.concat(e), super.addResults(e)
			}
			addInitialResults(e) {
				this.allResults = this.allResults.concat(e), super.addInitialResults(e)
			}
			getAllResults() {
				return this.allResults
			}
		}
	}, function(e, t, r) {
		const n = r(72),
			i = r(73),
			{
				incrementHexInt: o
			} = r(39);
		e.exports = class extends n {
			constructor({
				provider: e,
				params: t
			}) {
				super(), this.type = "block", this.provider = e
			}
			async update({
				oldBlock: e,
				newBlock: t
			}) {
				const r = t,
					n = o(e),
					a = (await i({
						provider: this.provider,
						fromBlock: n,
						toBlock: r
					})).map(e => e.hash);
				this.addResults(a)
			}
		}
	}, function(e, t, r) {
		const n = r(72),
			i = r(73),
			{
				incrementHexInt: o
			} = r(39);
		e.exports = class extends n {
			constructor({
				provider: e
			}) {
				super(), this.type = "tx", this.provider = e
			}
			async update({
				oldBlock: e
			}) {
				const t = e,
					r = o(e),
					n = await i({
						provider: this.provider,
						fromBlock: r,
						toBlock: t
					}),
					a = [];
				for (const e of n) a.push(...e.transactions);
				this.addResults(a)
			}
		}
	}, function(e, t, r) {
		const n = r(352),
			i = r(353),
			o = r(21).inherits,
			a = r(36),
			s = r(355),
			u = r(44),
			c = r(365),
			f = r(49),
			h = r(366),
			l = /^[0-9A-Fa-f]+$/g;

		function d(e) {
			this.nonceLock = c(1), e.getAccounts && (this.getAccounts = e.getAccounts), e.processTransaction && (this.processTransaction = e.processTransaction), e.processMessage && (this.processMessage = e.processMessage), e.processPersonalMessage && (this.processPersonalMessage = e.processPersonalMessage), e.processTypedMessage && (this.processTypedMessage = e.processTypedMessage), this.approveTransaction = e.approveTransaction || this.autoApprove, this.approveMessage = e.approveMessage || this.autoApprove, this.approvePersonalMessage = e.approvePersonalMessage || this.autoApprove, this.approveDecryptMessage = e.approveDecryptMessage || this.autoApprove, this.approveEncryptionPublicKey = e.approveEncryptionPublicKey || this.autoApprove, this.approveTypedMessage = e.approveTypedMessage || this.autoApprove, e.signTransaction && (this.signTransaction = e.signTransaction || y("signTransaction")), e.signMessage && (this.signMessage = e.signMessage || y("signMessage")), e.signPersonalMessage && (this.signPersonalMessage = e.signPersonalMessage || y("signPersonalMessage")), e.decryptMessage && (this.decryptMessage = e.decryptMessage || y("decryptMessage")), e.encryptionPublicKey && (this.encryptionPublicKey = e.encryptionPublicKey || y("encryptionPublicKey")), e.signTypedMessage && (this.signTypedMessage = e.signTypedMessage || y("signTypedMessage")), e.recoverPersonalSignature && (this.recoverPersonalSignature = e.recoverPersonalSignature), e.publishTransaction && (this.publishTransaction = e.publishTransaction), this.estimateGas = e.estimateGas || this.estimateGas, this.getGasPrice = e.getGasPrice || this.getGasPrice
		}

		function p(e) {
			return e.toLowerCase()
		}

		function b(e) {
			const t = a.addHexPrefix(e);
			return a.isValidAddress(t)
		}

		function g(e) {
			const t = a.addHexPrefix(e);
			return !a.isValidAddress(t) && m(e)
		}

		function m(e) {
			if (!("string" == typeof e)) return !1;
			if (!("0x" === e.slice(0, 2))) return !1;
			return e.slice(2).match(l)
		}

		function y(e) {
			return function(t, r) {
				r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + e + '" fn in constructor options'))
			}
		}
		e.exports = d, o(d, f), d.prototype.handleRequest = function(e, t, r) {
			const i = this;
			let o, a, s, c, f;
			switch (i._parityRequests = {}, i._parityRequestCount = 0, e.method) {
				case "eth_coinbase":
					return void i.getAccounts((function(e, t) {
						if (e) return r(e);
						let n = t[0] || null;
						r(null, n)
					}));
				case "eth_accounts":
					return void i.getAccounts((function(e, t) {
						if (e) return r(e);
						r(null, t)
					}));
				case "eth_sendTransaction":
					return o = e.params[0], void n([e => i.validateTransaction(o, e), e => i.processTransaction(o, e)], r);
				case "eth_signTransaction":
					return o = e.params[0], void n([e => i.validateTransaction(o, e), e => i.processSignTransaction(o, e)], r);
				case "eth_sign":
					return f = e.params[0], c = e.params[1], s = e.params[2] || {}, a = u(s, {
						from: f,
						data: c
					}), void n([e => i.validateMessage(a, e), e => i.processMessage(a, e)], r);
				case "personal_sign":
					return function() {
						const t = e.params[0];
						if (g(e.params[1]) && b(t)) {
							let t = "The eth_personalSign method requires params ordered ";
							t += "[message, address]. This was previously handled incorrectly, ", t += "and has been corrected automatically. ", t += "Please switch this param order for smooth behavior in the future.", console.warn(t), f = e.params[0], c = e.params[1]
						} else c = e.params[0], f = e.params[1];
						s = e.params[2] || {}, a = u(s, {
							from: f,
							data: c
						}), n([e => i.validatePersonalMessage(a, e), e => i.processPersonalMessage(a, e)], r)
					}();
				case "eth_decryptMessage":
					return function() {
						const t = e.params[0];
						if (g(e.params[1]) && b(t)) {
							let t = "The eth_decryptMessage method requires params ordered ";
							t += "[message, address]. This was previously handled incorrectly, ", t += "and has been corrected automatically. ", t += "Please switch this param order for smooth behavior in the future.", console.warn(t), f = e.params[0], c = e.params[1]
						} else c = e.params[0], f = e.params[1];
						s = e.params[2] || {}, a = u(s, {
							from: f,
							data: c
						}), n([e => i.validateDecryptMessage(a, e), e => i.processDecryptMessage(a, e)], r)
					}();
				case "encryption_public_key":
					return function() {
						const t = e.params[0];
						n([e => i.validateEncryptionPublicKey(t, e), e => i.processEncryptionPublicKey(t, e)], r)
					}();
				case "personal_ecRecover":
					return function() {
						c = e.params[0];
						let t = e.params[1];
						s = e.params[2] || {}, a = u(s, {
							sig: t,
							data: c
						}), i.recoverPersonalSignature(a, r)
					}();
				case "eth_signTypedData":
				case "eth_signTypedData_v3":
				case "eth_signTypedData_v4":
					return function() {
						const t = e.params[0],
							o = e.params[1];
						b(t) ? (f = t, c = o) : (c = t, f = o), s = e.params[2] || {}, a = u(s, {
							from: f,
							data: c
						}), n([e => i.validateTypedMessage(a, e), e => i.processTypedMessage(a, e)], r)
					}();
				case "parity_postTransaction":
					return o = e.params[0], void i.parityPostTransaction(o, r);
				case "parity_postSign":
					return f = e.params[0], c = e.params[1], void i.parityPostSign(f, c, r);
				case "parity_checkRequest":
					return function() {
						const t = e.params[0];
						i.parityCheckRequest(t, r)
					}();
				case "parity_defaultAccount":
					return void i.getAccounts((function(e, t) {
						if (e) return r(e);
						const n = t[0] || null;
						r(null, n)
					}));
				default:
					return void t()
			}
		}, d.prototype.getAccounts = function(e) {
			e(null, [])
		}, d.prototype.processTransaction = function(e, t) {
			const r = this;
			n([t => r.approveTransaction(e, t), (e, t) => r.checkApproval("transaction", e, t), t => r.finalizeAndSubmitTx(e, t)], t)
		}, d.prototype.processSignTransaction = function(e, t) {
			const r = this;
			n([t => r.approveTransaction(e, t), (e, t) => r.checkApproval("transaction", e, t), t => r.finalizeTx(e, t)], t)
		}, d.prototype.processMessage = function(e, t) {
			const r = this;
			n([t => r.approveMessage(e, t), (e, t) => r.checkApproval("message", e, t), t => r.signMessage(e, t)], t)
		}, d.prototype.processPersonalMessage = function(e, t) {
			const r = this;
			n([t => r.approvePersonalMessage(e, t), (e, t) => r.checkApproval("message", e, t), t => r.signPersonalMessage(e, t)], t)
		}, d.prototype.processDecryptMessage = function(e, t) {
			const r = this;
			n([t => r.approveDecryptMessage(e, t), (e, t) => r.checkApproval("decryptMessage", e, t), t => r.decryptMessage(e, t)], t)
		}, d.prototype.processEncryptionPublicKey = function(e, t) {
			const r = this;
			n([t => r.approveEncryptionPublicKey(e, t), (e, t) => r.checkApproval("encryptionPublicKey", e, t), t => r.encryptionPublicKey(e, t)], t)
		}, d.prototype.processTypedMessage = function(e, t) {
			const r = this;
			n([t => r.approveTypedMessage(e, t), (e, t) => r.checkApproval("message", e, t), t => r.signTypedMessage(e, t)], t)
		}, d.prototype.autoApprove = function(e, t) {
			t(null, !0)
		}, d.prototype.checkApproval = function(e, t, r) {
			r(t ? null : new Error("User denied " + e + " signature."))
		}, d.prototype.parityPostTransaction = function(e, t) {
			const r = this,
				n = "0x" + r._parityRequestCount.toString(16);
			r._parityRequestCount++, r.emitPayload({
				method: "eth_sendTransaction",
				params: [e]
			}, (function(e, t) {
				if (e) return void(r._parityRequests[n] = {
					error: e
				});
				const i = t.result;
				r._parityRequests[n] = i
			})), t(null, n)
		}, d.prototype.parityPostSign = function(e, t, r) {
			const n = this,
				i = "0x" + n._parityRequestCount.toString(16);
			n._parityRequestCount++, n.emitPayload({
				method: "eth_sign",
				params: [e, t]
			}, (function(e, t) {
				if (e) return void(n._parityRequests[i] = {
					error: e
				});
				const r = t.result;
				n._parityRequests[i] = r
			})), r(null, i)
		}, d.prototype.parityCheckRequest = function(e, t) {
			const r = this._parityRequests[e] || null;
			return r ? r.error ? t(r.error) : void t(null, r) : t(null, null)
		}, d.prototype.recoverPersonalSignature = function(e, t) {
			let r;
			try {
				r = s.recoverPersonalSignature(e)
			} catch (e) {
				return t(e)
			}
			t(null, r)
		}, d.prototype.validateTransaction = function(e, t) {
			if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign transaction."));
			this.validateSender(e.from, (function(r, n) {
				return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to sign transaction for this address: "${e.from}"`))
			}))
		}, d.prototype.validateMessage = function(e, t) {
			if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign message."));
			this.validateSender(e.from, (function(r, n) {
				return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))
			}))
		}, d.prototype.validatePersonalMessage = function(e, t) {
			return void 0 === e.from ? t(new Error("Undefined address - from address required to sign personal message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to sign personal message.")) : m(e.data) ? void this.validateSender(e.from, (function(r, n) {
				return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))
			})) : t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))
		}, d.prototype.validateDecryptMessage = function(e, t) {
			return void 0 === e.from ? t(new Error("Undefined address - from address required to decrypt message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to decrypt message.")) : m(e.data) ? void this.validateSender(e.from, (function(r, n) {
				return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to decrypt message for this address: "${e.from}"`))
			})) : t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."))
		}, d.prototype.validateEncryptionPublicKey = function(e, t) {
			this.validateSender(e, (function(r, n) {
				return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to obtain encryption public key for this address: "${e}"`))
			}))
		}, d.prototype.validateTypedMessage = function(e, t) {
			return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, (function(r, n) {
				return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))
			}))
		}, d.prototype.validateSender = function(e, t) {
			if (!e) return t(null, !1);
			this.getAccounts((function(r, n) {
				if (r) return t(r);
				const i = -1 !== n.map(p).indexOf(e.toLowerCase());
				t(null, i)
			}))
		}, d.prototype.finalizeAndSubmitTx = function(e, t) {
			const r = this;
			r.nonceLock.take((function() {
				n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r), r.publishTransaction.bind(r)], (function(e, n) {
					if (r.nonceLock.leave(), e) return t(e);
					t(null, n)
				}))
			}))
		}, d.prototype.finalizeTx = function(e, t) {
			const r = this;
			r.nonceLock.take((function() {
				n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r)], (function(n, i) {
					if (r.nonceLock.leave(), n) return t(n);
					t(null, {
						raw: i,
						tx: e
					})
				}))
			}))
		}, d.prototype.publishTransaction = function(e, t) {
			this.emitPayload({
				method: "eth_sendRawTransaction",
				params: [e]
			}, (function(e, r) {
				if (e) return t(e);
				t(null, r.result)
			}))
		}, d.prototype.estimateGas = function(e, t) {
			h(this.engine, e, t)
		}, d.prototype.getGasPrice = function(e) {
			this.emitPayload({
				method: "eth_gasPrice",
				params: []
			}, (function(t, r) {
				if (t) return e(t);
				e(null, r.result)
			}))
		}, d.prototype.fillInTxExtras = function(e, t) {
			const r = this,
				n = e.from,
				o = {};
			void 0 === e.gasPrice && (o.gasPrice = r.getGasPrice.bind(r)), void 0 === e.nonce && (o.nonce = r.emitPayload.bind(r, {
				method: "eth_getTransactionCount",
				params: [n, "pending"]
			})), void 0 === e.gas && (o.gas = r.estimateGas.bind(r, function(e) {
				return {
					from: e.from,
					to: e.to,
					value: e.value,
					data: e.data,
					gas: e.gas,
					gasPrice: e.gasPrice,
					nonce: e.nonce
				}
			}(e))), i(o, (function(r, n) {
				if (r) return t(r);
				const i = {};
				n.gasPrice && (i.gasPrice = n.gasPrice), n.nonce && (i.nonce = n.nonce.result), n.gas && (i.gas = n.gas), t(null, u(e, i))
			}))
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t) {
			if (t = (0, o.default)(t || i.default), !(0, n.default)(e)) return t(new Error("First argument to waterfall must be an array of functions"));
			if (!e.length) return t();
			var r = 0;

			function c(t) {
				var n = (0, u.default)(e[r++]);
				t.push((0, s.default)(f)), n.apply(null, t)
			}

			function f(n) {
				if (n || r === e.length) return t.apply(null, arguments);
				c((0, a.default)(arguments, 1))
			}
			c([])
		};
		var n = c(r(147)),
			i = c(r(38)),
			o = c(r(64)),
			a = c(r(48)),
			s = c(r(66)),
			u = c(r(23));

		function c(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t) {
			(0, i.default)(n.default, e, t)
		};
		var n = o(r(139)),
			i = o(r(354));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t, r) {
			r = r || n.default;
			var s = (0, i.default)(t) ? [] : {};
			e(t, (function(e, t, r) {
				(0, a.default)(e)((function(e, n) {
					arguments.length > 2 && (n = (0, o.default)(arguments, 1)), s[t] = n, r(e)
				}))
			}), (function(e) {
				r(e, s)
			}))
		};
		var n = s(r(38)),
			i = s(r(47)),
			o = s(r(48)),
			a = s(r(23));

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = t.default
	}, function(e, t, r) {
		const n = r(36),
			i = r(356);

		function o(e) {
			const t = new Error("Expect argument to be non-empty array");
			if ("object" != typeof e || !e.length) throw t;
			const r = e.map((function(e) {
					return "bytes" === e.type ? n.toBuffer(e.value) : e.value
				})),
				o = e.map((function(e) {
					return e.type
				})),
				a = e.map((function(e) {
					if (!e.name) throw t;
					return e.type + " " + e.name
				}));
			return i.soliditySHA3(["bytes32", "bytes32"], [i.soliditySHA3(new Array(e.length).fill("string"), a), i.soliditySHA3(o, r)])
		}

		function a(e, t) {
			const r = n.toBuffer(t),
				i = n.fromRpcSig(r);
			return n.ecrecover(e, i.v, i.r, i.s)
		}

		function s(e) {
			const t = n.toBuffer(e.data);
			return a(n.hashPersonalMessage(t), e.sig)
		}

		function u(e, t) {
			for (var r = "" + e; r.length < t;) r = "0" + r;
			return r
		}
		e.exports = {
			concatSig: function(e, t, r) {
				const i = n.fromSigned(t),
					o = n.fromSigned(r),
					a = n.bufferToInt(e),
					s = u(n.toUnsigned(i).toString("hex"), 64),
					c = u(n.toUnsigned(o).toString("hex"), 64),
					f = n.stripHexPrefix(n.intToHex(a));
				return n.addHexPrefix(s.concat(c, f)).toString("hex")
			},
			normalize: function(e) {
				if (e) {
					if ("number" == typeof e) {
						const t = n.toBuffer(e);
						e = n.bufferToHex(t)
					}
					if ("string" != typeof e) {
						var t = "eth-sig-util.normalize() requires hex string or integer input.";
						throw new Error(t += " received " + typeof e + ": " + e)
					}
					return n.addHexPrefix(e.toLowerCase())
				}
			},
			personalSign: function(e, t) {
				var r = n.toBuffer(t.data),
					i = n.hashPersonalMessage(r),
					o = n.ecsign(i, e);
				return n.bufferToHex(this.concatSig(o.v, o.r, o.s))
			},
			recoverPersonalSignature: function(e) {
				const t = s(e),
					r = n.publicToAddress(t);
				return n.bufferToHex(r)
			},
			extractPublicKey: function(e) {
				return "0x" + s(e).toString("hex")
			},
			typedSignatureHash: function(e) {
				const t = o(e);
				return n.bufferToHex(t)
			},
			signTypedData: function(e, t) {
				const r = o(t.data),
					i = n.ecsign(r, e);
				return n.bufferToHex(this.concatSig(i.v, i.r, i.s))
			},
			recoverTypedSignature: function(e) {
				const t = a(o(e.data), e.sig),
					r = n.publicToAddress(t);
				return n.bufferToHex(r)
			}
		}
	}, function(e, t, r) {
		e.exports = r(357)
	}, function(e, t, r) {
		(function(t) {
			const n = r(358),
				i = r(9);
			var o = function() {};

			function a(e) {
				return e.startsWith("int[") ? "int256" + e.slice(3) : "int" === e ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : "uint" === e ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : "fixed" === e ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : "ufixed" === e ? "ufixed128x128" : e
			}

			function s(e) {
				return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
			}

			function u(e) {
				var t = /^\D+(\d+)x(\d+)$/.exec(e);
				return [parseInt(t[1], 10), parseInt(t[2], 10)]
			}

			function c(e) {
				var t = e.match(/(.*)\[(.*?)\]$/);
				return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null
			}

			function f(e) {
				var t = typeof e;
				if ("string" === t) return n.isHexPrefixed(e) ? new i(n.stripHexPrefix(e), 16) : new i(e, 10);
				if ("number" === t) return new i(e);
				if (e.toArray) return e;
				throw new Error("Argument is not a number")
			}

			function h(e) {
				var t = /^(\w+)\((.*)\)$/.exec(e);
				if (3 !== t.length) throw new Error("Invalid method signature");
				var r = /^(.+)\):\((.+)$/.exec(t[2]);
				if (null !== r && 3 === r.length) return {
					method: t[1],
					args: r[1].split(","),
					retargs: r[2].split(",")
				};
				var n = t[2].split(",");
				return 1 === n.length && "" === n[0] && (n = []), {
					method: t[1],
					args: n
				}
			}

			function l(e, r) {
				var o, a, h, d;
				if ("address" === e) return l("uint160", f(r));
				if ("bool" === e) return l("uint8", r ? 1 : 0);
				if ("string" === e) return l("bytes", t.from(r, "utf8"));
				if (g(e)) {
					if (void 0 === r.length) throw new Error("Not an array?");
					if ("dynamic" !== (o = c(e)) && 0 !== o && r.length > o) throw new Error("Elements exceed array size: " + o);
					for (d in h = [], e = e.slice(0, e.lastIndexOf("[")), "string" == typeof r && (r = JSON.parse(r)), r) h.push(l(e, r[d]));
					if ("dynamic" === o) {
						var p = l("uint256", r.length);
						h.unshift(p)
					}
					return t.concat(h)
				}
				if ("bytes" === e) return r = t.from(r), h = t.concat([l("uint256", r.length), r]), r.length % 32 != 0 && (h = t.concat([h, n.zeros(32 - r.length % 32)])), h;
				if (e.startsWith("bytes")) {
					if ((o = s(e)) < 1 || o > 32) throw new Error("Invalid bytes<N> width: " + o);
					return n.setLengthRight(r, 32)
				}
				if (e.startsWith("uint")) {
					if ((o = s(e)) % 8 || o < 8 || o > 256) throw new Error("Invalid uint<N> width: " + o);
					if ((a = f(r)).bitLength() > o) throw new Error("Supplied uint exceeds width: " + o + " vs " + a.bitLength());
					if (a < 0) throw new Error("Supplied uint is negative");
					return a.toArrayLike(t, "be", 32)
				}
				if (e.startsWith("int")) {
					if ((o = s(e)) % 8 || o < 8 || o > 256) throw new Error("Invalid int<N> width: " + o);
					if ((a = f(r)).bitLength() > o) throw new Error("Supplied int exceeds width: " + o + " vs " + a.bitLength());
					return a.toTwos(256).toArrayLike(t, "be", 32)
				}
				if (e.startsWith("ufixed")) {
					if (o = u(e), (a = f(r)) < 0) throw new Error("Supplied ufixed is negative");
					return l("uint256", a.mul(new i(2).pow(new i(o[1]))))
				}
				if (e.startsWith("fixed")) return o = u(e), l("int256", f(r).mul(new i(2).pow(new i(o[1]))));
				throw new Error("Unsupported or invalid type: " + e)
			}

			function d(e, r, n) {
				var o, a, s, u;
				if ("string" == typeof e && (e = p(e)), "address" === e.name) return d(e.rawType, r, n).toArrayLike(t, "be", 20).toString("hex");
				if ("bool" === e.name) return d(e.rawType, r, n).toString() === new i(1).toString();
				if ("string" === e.name) {
					var c = d(e.rawType, r, n);
					return t.from(c, "utf8").toString()
				}
				if (e.isArray) {
					for (s = [], o = e.size, "dynamic" === e.size && (n = d("uint256", r, n).toNumber(), o = d("uint256", r, n).toNumber(), n += 32), u = 0; u < o; u++) {
						var f = d(e.subArray, r, n);
						s.push(f), n += e.subArray.memoryUsage
					}
					return s
				}
				if ("bytes" === e.name) return n = d("uint256", r, n).toNumber(), o = d("uint256", r, n).toNumber(), r.slice(n + 32, n + 32 + o);
				if (e.name.startsWith("bytes")) return r.slice(n, n + e.size);
				if (e.name.startsWith("uint")) {
					if ((a = new i(r.slice(n, n + 32), 16, "be")).bitLength() > e.size) throw new Error("Decoded int exceeds width: " + e.size + " vs " + a.bitLength());
					return a
				}
				if (e.name.startsWith("int")) {
					if ((a = new i(r.slice(n, n + 32), 16, "be").fromTwos(256)).bitLength() > e.size) throw new Error("Decoded uint exceeds width: " + e.size + " vs " + a.bitLength());
					return a
				}
				if (e.name.startsWith("ufixed")) {
					if (o = new i(2).pow(new i(e.size[1])), !(a = d("uint256", r, n)).mod(o).isZero()) throw new Error("Decimals not supported yet");
					return a.div(o)
				}
				if (e.name.startsWith("fixed")) {
					if (o = new i(2).pow(new i(e.size[1])), !(a = d("int256", r, n)).mod(o).isZero()) throw new Error("Decimals not supported yet");
					return a.div(o)
				}
				throw new Error("Unsupported or invalid type: " + e.name)
			}

			function p(e) {
				var t, r, n;
				if (g(e)) {
					t = c(e);
					var i = e.slice(0, e.lastIndexOf("["));
					return i = p(i), r = {
						isArray: !0,
						name: e,
						size: t,
						memoryUsage: "dynamic" === t ? 32 : i.memoryUsage * t,
						subArray: i
					}
				}
				switch (e) {
					case "address":
						n = "uint160";
						break;
					case "bool":
						n = "uint8";
						break;
					case "string":
						n = "bytes"
				}
				if (r = {
						rawType: n,
						name: e,
						memoryUsage: 32
					}, e.startsWith("bytes") && "bytes" !== e || e.startsWith("uint") || e.startsWith("int") ? r.size = s(e) : (e.startsWith("ufixed") || e.startsWith("fixed")) && (r.size = u(e)), e.startsWith("bytes") && "bytes" !== e && (r.size < 1 || r.size > 32)) throw new Error("Invalid bytes<N> width: " + r.size);
				if ((e.startsWith("uint") || e.startsWith("int")) && (r.size % 8 || r.size < 8 || r.size > 256)) throw new Error("Invalid int/uint<N> width: " + r.size);
				return r
			}

			function b(e) {
				return "string" === e || "bytes" === e || "dynamic" === c(e)
			}

			function g(e) {
				return e.lastIndexOf("]") === e.length - 1
			}

			function m(e, t) {
				return e.startsWith("address") || e.startsWith("bytes") ? "0x" + t.toString("hex") : t.toString()
			}
			o.eventID = function(e, r) {
				var i = e + "(" + r.map(a).join(",") + ")";
				return n.keccak256(t.from(i))
			}, o.methodID = function(e, t) {
				return o.eventID(e, t).slice(0, 4)
			}, o.rawEncode = function(e, r) {
				var n = [],
					i = [],
					o = 0;
				e.forEach((function(e) {
					if (g(e)) {
						var t = c(e);
						o += "dynamic" !== t ? 32 * t : 32
					} else o += 32
				}));
				for (var s = 0; s < e.length; s++) {
					var u = a(e[s]),
						f = l(u, r[s]);
					b(u) ? (n.push(l("uint256", o)), i.push(f), o += f.length) : n.push(f)
				}
				return t.concat(n.concat(i))
			}, o.rawDecode = function(e, r) {
				var n = [];
				r = t.from(r);
				for (var i = 0, o = 0; o < e.length; o++) {
					var s = p(a(e[o])),
						u = d(s, r, i);
					i += s.memoryUsage, n.push(u)
				}
				return n
			}, o.simpleEncode = function(e) {
				var r = Array.prototype.slice.call(arguments).slice(1),
					n = h(e);
				if (r.length !== n.args.length) throw new Error("Argument count mismatch");
				return t.concat([o.methodID(n.method, n.args), o.rawEncode(n.args, r)])
			}, o.simpleDecode = function(e, t) {
				var r = h(e);
				if (!r.retargs) throw new Error("No return values in method");
				return o.rawDecode(r.retargs, t)
			}, o.stringify = function(e, t) {
				var r = [];
				for (var n in e) {
					var i = e[n],
						o = t[n];
					o = /^[^\[]+\[.*\]$/.test(i) ? o.map((function(e) {
						return m(i, e)
					})).join(", ") : m(i, o), r.push(o)
				}
				return r
			}, o.solidityHexValue = function(e, r, i) {
				var a, u;
				if (g(e)) {
					var h = e.replace(/\[.*?\]/, "");
					if (!g(h)) {
						var l = c(e);
						if ("dynamic" !== l && 0 !== l && r.length > l) throw new Error("Elements exceed array size: " + l)
					}
					var d = r.map((function(e) {
						return o.solidityHexValue(h, e, 256)
					}));
					return t.concat(d)
				}
				if ("bytes" === e) return r;
				if ("string" === e) return t.from(r, "utf8");
				if ("bool" === e) {
					i = i || 8;
					var p = Array(i / 4).join("0");
					return t.from(r ? p + "1" : p + "0", "hex")
				}
				if ("address" === e) {
					var b = 20;
					return i && (b = i / 8), n.setLengthLeft(r, b)
				}
				if (e.startsWith("bytes")) {
					if ((a = s(e)) < 1 || a > 32) throw new Error("Invalid bytes<N> width: " + a);
					return n.setLengthRight(r, a)
				}
				if (e.startsWith("uint")) {
					if ((a = s(e)) % 8 || a < 8 || a > 256) throw new Error("Invalid uint<N> width: " + a);
					if ((u = f(r)).bitLength() > a) throw new Error("Supplied uint exceeds width: " + a + " vs " + u.bitLength());
					return i = i || a, u.toArrayLike(t, "be", i / 8)
				}
				if (e.startsWith("int")) {
					if ((a = s(e)) % 8 || a < 8 || a > 256) throw new Error("Invalid int<N> width: " + a);
					if ((u = f(r)).bitLength() > a) throw new Error("Supplied int exceeds width: " + a + " vs " + u.bitLength());
					return i = i || a, u.toTwos(a).toArrayLike(t, "be", i / 8)
				}
				throw new Error("Unsupported or invalid type: " + e)
			}, o.solidityPack = function(e, r) {
				if (e.length !== r.length) throw new Error("Number of types are not matching the values");
				for (var n = [], i = 0; i < e.length; i++) {
					var s = a(e[i]),
						u = r[i];
					n.push(o.solidityHexValue(s, u, null))
				}
				return t.concat(n)
			}, o.soliditySHA3 = function(e, t) {
				return n.keccak256(o.solidityPack(e, t))
			}, o.soliditySHA256 = function(e, t) {
				return n.sha256(o.solidityPack(e, t))
			}, o.solidityRIPEMD160 = function(e, t) {
				return n.ripemd160(o.solidityPack(e, t), !0)
			}, o.fromSerpent = function(e) {
				for (var t, r = [], n = 0; n < e.length; n++) {
					var i = e[n];
					if ("s" === i) r.push("bytes");
					else if ("b" === i) {
						for (var o = "bytes", a = n + 1; a < e.length && ((t = e[a]) >= "0" && t <= "9");) o += e[a] - "0", a++;
						n = a - 1, r.push(o)
					} else if ("i" === i) r.push("int256");
					else {
						if ("a" !== i) throw new Error("Unsupported or invalid type: " + i);
						r.push("int256[]")
					}
				}
				return r
			}, o.toSerpent = function(e) {
				for (var t = [], r = 0; r < e.length; r++) {
					var n = e[r];
					if ("bytes" === n) t.push("s");
					else if (n.startsWith("bytes")) t.push("b" + s(n));
					else if ("int256" === n) t.push("i");
					else {
						if ("int256[]" !== n) throw new Error("Unsupported or invalid type: " + n);
						t.push("a")
					}
				}
				return t.join("")
			}, e.exports = o
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
				void 0 === n && (n = r), Object.defineProperty(e, n, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, n) {
				void 0 === n && (n = r), e[n] = t[r]
			}),
			i = this && this.__exportStar || function(e, t) {
				for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.secp256k1 = t.rlp = t.BN = void 0;
		var o = r(74);
		t.secp256k1 = o;
		var a = r(31),
			s = r(9);
		t.BN = s;
		var u = r(46);
		t.rlp = u, Object.assign(t, a), i(r(361), t), i(r(362), t), i(r(75), t), i(r(363), t), i(r(40), t), i(r(364), t)
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = r(9),
				i = new(0, r(58).ec)("secp256k1"),
				o = i.curve;
			t.privateKeyExport = function(e, t) {
				void 0 === t && (t = !0);
				var r = new n(e);
				if (r.ucmp(o.n) >= 0) throw new Error("couldn't export to DER format");
				var s = i.g.mul(r);
				return a(s.getX(), s.getY(), t)
			}, t.privateKeyModInverse = function(t) {
				var r = new n(t);
				if (r.ucmp(o.n) >= 0 || r.isZero()) throw new Error("private key range is invalid");
				return r.invm(o.n).toArrayLike(e, "be", 32)
			}, t.signatureImport = function(t) {
				var r = new n(t.r);
				r.ucmp(o.n) >= 0 && (r = new n(0));
				var i = new n(t.s);
				return i.ucmp(o.n) >= 0 && (i = new n(0)), e.concat([r.toArrayLike(e, "be", 32), i.toArrayLike(e, "be", 32)])
			}, t.ecdhUnsafe = function(e, t, r) {
				void 0 === r && (r = !0);
				var s = i.keyFromPublic(e),
					u = new n(t);
				if (u.ucmp(o.n) >= 0 || u.isZero()) throw new Error("scalar was invalid (zero or overflow)");
				var c = s.pub.mul(u);
				return a(c.getX(), c.getY(), r)
			};
			var a = function(t, r, n) {
				var i;
				return n ? ((i = e.alloc(33))[0] = r.isOdd() ? 3 : 2, t.toArrayLike(e, "be", 32).copy(i, 1)) : ((i = e.alloc(65))[0] = 4, t.toArrayLike(e, "be", 32).copy(i, 1), r.toArrayLike(e, "be", 32).copy(i, 33)), i
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = e.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
				n = e.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
			t.privateKeyExport = function(t, i, o) {
				void 0 === o && (o = !0);
				var a = e.from(o ? r : n);
				return t.copy(a, o ? 8 : 9), i.copy(a, o ? 181 : 214), a
			}, t.privateKeyImport = function(e) {
				var t = e.length,
					r = 0;
				if (t < r + 1 || 48 !== e[r]) return null;
				if (t < (r += 1) + 1 || !(128 & e[r])) return null;
				var n = 127 & e[r];
				if (n < 1 || n > 2) return null;
				if (t < (r += 1) + n) return null;
				var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
				return t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1] ? null : e.slice(r + 2, r + 2 + e[r + 1])
			}, t.signatureImportLax = function(t) {
				var r = e.alloc(32, 0),
					n = e.alloc(32, 0),
					i = t.length,
					o = 0;
				if (48 !== t[o++]) return null;
				var a = t[o++];
				if (128 & a && (o += a - 128) > i) return null;
				if (2 !== t[o++]) return null;
				var s = t[o++];
				if (128 & s) {
					if (o + (a = s - 128) > i) return null;
					for (; a > 0 && 0 === t[o]; o += 1, a -= 1);
					for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o]
				}
				if (s > i - o) return null;
				var u = o;
				if (o += s, 2 !== t[o++]) return null;
				var c = t[o++];
				if (128 & c) {
					if (o + (a = c - 128) > i) return null;
					for (; a > 0 && 0 === t[o]; o += 1, a -= 1);
					for (c = 0; a > 0; o += 1, a -= 1) c = (c << 8) + t[o]
				}
				if (c > i - o) return null;
				var f = o;
				for (o += c; s > 0 && 0 === t[u]; s -= 1, u += 1);
				if (s > 32) return null;
				var h = t.slice(u, u + s);
				for (h.copy(r, 32 - h.length); c > 0 && 0 === t[f]; c -= 1, f += 1);
				if (c > 32) return null;
				var l = t.slice(f, f + c);
				return l.copy(n, 32 - l.length), {
					r: r,
					s: n
				}
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.KECCAK256_RLP = t.KECCAK256_RLP_S = t.KECCAK256_RLP_ARRAY = t.KECCAK256_RLP_ARRAY_S = t.KECCAK256_NULL = t.KECCAK256_NULL_S = t.TWO_POW256 = t.MAX_INTEGER = void 0;
			var n = r(9);
			t.MAX_INTEGER = new n("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new n("10000000000000000000000000000000000000000000000000000000000000000", 16), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.KECCAK256_NULL = e.from(t.KECCAK256_NULL_S, "hex"), t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.KECCAK256_RLP_ARRAY = e.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.KECCAK256_RLP = e.from(t.KECCAK256_RLP_S, "hex")
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.importPublic = t.privateToPublic = t.privateToAddress = t.publicToAddress = t.pubToAddress = t.isValidPublic = t.isValidPrivate = t.isPrecompiled = t.generateAddress2 = t.generateAddress = t.isValidChecksumAddress = t.toChecksumAddress = t.isZeroAddress = t.isValidAddress = t.zeroAddress = void 0;
			var n = r(61),
				i = r(31),
				o = r(74),
				a = r(9),
				s = r(40),
				u = r(75);
			t.zeroAddress = function() {
				var e = s.zeros(20);
				return s.bufferToHex(e)
			}, t.isValidAddress = function(e) {
				return /^0x[0-9a-fA-F]{40}$/.test(e)
			}, t.isZeroAddress = function(e) {
				return t.zeroAddress() === s.addHexPrefix(e)
			}, t.toChecksumAddress = function(e, t) {
				e = i.stripHexPrefix(e).toLowerCase();
				for (var r = void 0 !== t ? t.toString() + "0x" : "", n = u.keccak(r + e).toString("hex"), o = "0x", a = 0; a < e.length; a++) parseInt(n[a], 16) >= 8 ? o += e[a].toUpperCase() : o += e[a];
				return o
			}, t.isValidChecksumAddress = function(e, r) {
				return t.isValidAddress(e) && t.toChecksumAddress(e, r) === e
			}, t.generateAddress = function(t, r) {
				t = s.toBuffer(t);
				var n = new a(r);
				return n.isZero() ? u.rlphash([t, null]).slice(-20) : u.rlphash([t, e.from(n.toArray())]).slice(-20)
			}, t.generateAddress2 = function(t, r, i) {
				var o = s.toBuffer(t),
					a = s.toBuffer(r),
					c = s.toBuffer(i);
				return n(20 === o.length), n(32 === a.length), u.keccak256(e.concat([e.from("ff", "hex"), o, a, u.keccak256(c)])).slice(-20)
			}, t.isPrecompiled = function(e) {
				var t = s.unpad(e);
				return 1 === t.length && t[0] >= 1 && t[0] <= 8
			}, t.isValidPrivate = function(e) {
				return o.privateKeyVerify(e)
			}, t.isValidPublic = function(t, r) {
				return void 0 === r && (r = !1), 64 === t.length ? o.publicKeyVerify(e.concat([e.from([4]), t])) : !!r && o.publicKeyVerify(t)
			}, t.pubToAddress = function(e, t) {
				return void 0 === t && (t = !1), e = s.toBuffer(e), t && 64 !== e.length && (e = o.publicKeyConvert(e, !1).slice(1)), n(64 === e.length), u.keccak(e).slice(-20)
			}, t.publicToAddress = t.pubToAddress, t.privateToAddress = function(e) {
				return t.publicToAddress(t.privateToPublic(e))
			}, t.privateToPublic = function(e) {
				return e = s.toBuffer(e), o.publicKeyCreate(e, !1).slice(1)
			}, t.importPublic = function(e) {
				return 64 !== (e = s.toBuffer(e)).length && (e = o.publicKeyConvert(e, !1).slice(1)), e
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.hashPersonalMessage = t.isValidSignature = t.fromRpcSig = t.toRpcSig = t.ecrecover = t.ecsign = void 0;
			var n = r(74),
				i = r(9),
				o = r(40),
				a = r(75);

			function s(e, t) {
				return t ? e - (2 * t + 35) : e - 27
			}

			function u(e) {
				return 0 === e || 1 === e
			}
			t.ecsign = function(e, t, r) {
				var i = n.sign(e, t),
					o = i.recovery;
				return {
					r: i.signature.slice(0, 32),
					s: i.signature.slice(32, 64),
					v: r ? o + (2 * r + 35) : o + 27
				}
			}, t.ecrecover = function(t, r, i, a, c) {
				var f = e.concat([o.setLength(i, 32), o.setLength(a, 32)], 64),
					h = s(r, c);
				if (!u(h)) throw new Error("Invalid signature v value");
				var l = n.recover(t, f, h);
				return n.publicKeyConvert(l, !1).slice(1)
			}, t.toRpcSig = function(t, r, n, i) {
				if (!u(s(t, i))) throw new Error("Invalid signature v value");
				return o.bufferToHex(e.concat([o.setLengthLeft(r, 32), o.setLengthLeft(n, 32), o.toBuffer(t)]))
			}, t.fromRpcSig = function(e) {
				var t = o.toBuffer(e);
				if (65 !== t.length) throw new Error("Invalid signature length");
				var r = t[64];
				return r < 27 && (r += 27), {
					v: r,
					r: t.slice(0, 32),
					s: t.slice(32, 64)
				}
			}, t.isValidSignature = function(e, t, r, n, o) {
				void 0 === n && (n = !0);
				var a = new i("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
					c = new i("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
				if (32 !== t.length || 32 !== r.length) return !1;
				if (!u(s(e, o))) return !1;
				var f = new i(t),
					h = new i(r);
				return !(f.isZero() || f.gt(c) || h.isZero() || h.gt(c)) && (!n || 1 !== h.cmp(a))
			}, t.hashPersonalMessage = function(t) {
				var r = e.from("Ethereum Signed Message:\n" + t.length.toString(), "utf-8");
				return a.keccak(e.concat([r, t]))
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.defineProperties = void 0;
			var n = r(61),
				i = r(31),
				o = r(46),
				a = r(40);
			t.defineProperties = function(t, r, s) {
				if (t.raw = [], t._fields = [], t.toJSON = function(e) {
						if (void 0 === e && (e = !1), e) {
							var r = {};
							return t._fields.forEach((function(e) {
								r[e] = "0x" + t[e].toString("hex")
							})), r
						}
						return a.baToJSON(t.raw)
					}, t.serialize = function() {
						return o.encode(t.raw)
					}, r.forEach((function(r, i) {
						function o() {
							return t.raw[i]
						}

						function s(o) {
							"00" !== (o = a.toBuffer(o)).toString("hex") || r.allowZero || (o = e.allocUnsafe(0)), r.allowLess && r.length ? (o = a.stripZeros(o), n(r.length >= o.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === o.length || !r.length || n(r.length === o.length, "The field " + r.name + " must have byte length of " + r.length), t.raw[i] = o
						}
						t._fields.push(r.name), Object.defineProperty(t, r.name, {
							enumerable: !0,
							configurable: !0,
							get: o,
							set: s
						}), r.default && (t[r.name] = r.default), r.alias && Object.defineProperty(t, r.alias, {
							enumerable: !1,
							configurable: !0,
							set: s,
							get: o
						})
					})), s)
					if ("string" == typeof s && (s = e.from(i.stripHexPrefix(s), "hex")), e.isBuffer(s) && (s = o.decode(s)), Array.isArray(s)) {
						if (s.length > t._fields.length) throw new Error("wrong number of fields in data");
						s.forEach((function(e, r) {
							t[t._fields[r]] = a.toBuffer(e)
						}))
					} else {
						if ("object" != typeof s) throw new Error("invalid data");
						var u = Object.keys(s);
						r.forEach((function(e) {
							-1 !== u.indexOf(e.name) && (t[e.name] = s[e.name]), -1 !== u.indexOf(e.alias) && (t[e.alias] = s[e.alias])
						}))
					}
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		(function(t) {
			! function(r) {
				"use strict";
				var n = function(e) {
					setTimeout(e, 0)
				};
				void 0 !== t && t && "function" == typeof t.nextTick && (n = t.nextTick), e.exports = function(e) {
					var t = {
						capacity: e || 1,
						current: 0,
						queue: [],
						firstHere: !1,
						take: function() {
							if (!1 === t.firstHere) {
								t.current++, t.firstHere = !0;
								var e = 1
							} else e = 0;
							var r = {
								n: 1
							};
							"function" == typeof arguments[0] ? r.task = arguments[0] : r.n = arguments[0], arguments.length >= 2 && ("function" == typeof arguments[1] ? r.task = arguments[1] : r.n = arguments[1]);
							var n = r.task;
							if (r.task = function() {
									n(t.leave)
								}, t.current + r.n - e > t.capacity) return 1 === e && (t.current--, t.firstHere = !1), t.queue.push(r);
							t.current += r.n - e, r.task(t.leave), 1 === e && (t.firstHere = !1)
						},
						leave: function(e) {
							if (e = e || 1, t.current -= e, t.queue.length) {
								var r = t.queue[0];
								r.n + t.current > t.capacity || (t.queue.shift(), t.current += r.n, n(r.task))
							} else if (t.current < 0) throw new Error("leave called too many times.")
						},
						available: function(e) {
							return e = e || 1, t.current + e <= t.capacity
						}
					};
					return t
				}
			}()
		}).call(this, r(5))
	}, function(e, t, r) {
		const n = r(67);
		e.exports = function(e, t, r) {
			e.sendAsync(n({
				method: "eth_estimateGas",
				params: [t]
			}), (function(e, t) {
				if (e) return "no contract code at given address" === e.message ? r(null, "0xcf08") : r(e);
				r(null, t.result)
			}))
		}
	}, function(e, t, r) {
		(function(t) {
			const n = r(21).inherits,
				i = r(368),
				o = r(36),
				a = r(49),
				s = r(149).blockTagForPayload;

			function u(e) {
				this.nonceCache = {}
			}
			e.exports = u, n(u, a), u.prototype.handleRequest = function(e, r, n) {
				const a = this;
				switch (e.method) {
					case "eth_getTransactionCount":
						var u = s(e),
							c = e.params[0].toLowerCase(),
							f = a.nonceCache[c];
						return void("pending" === u ? f ? n(null, f) : r((function(e, t, r) {
							if (e) return r();
							void 0 === a.nonceCache[c] && (a.nonceCache[c] = t), r()
						})) : r());
					case "eth_sendRawTransaction":
						return void r((function(r, n, s) {
							if (r) return s();
							var u = e.params[0],
								c = (o.stripHexPrefix(u), t.from(o.stripHexPrefix(u), "hex"), new i(t.from(o.stripHexPrefix(u), "hex"))),
								f = "0x" + c.getSenderAddress().toString("hex").toLowerCase(),
								h = o.bufferToInt(c.nonce),
								l = (++h).toString(16);
							l.length % 2 && (l = "0" + l), l = "0x" + l, a.nonceCache[f] = l, s()
						}));
					case "evm_revert":
						return a.nonceCache = {}, void r();
					default:
						return void r()
				}
			}
		}).call(this, r(2).Buffer)
	}, function(e, t, r) {
		"use strict";
		(function(t) {
			var n = r(36),
				i = r(369),
				o = n.BN,
				a = new o("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
				s = function() {
					function e(r) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e), r = r || {};
						var i = [{
							name: "nonce",
							length: 32,
							allowLess: !0,
							default: new t([])
						}, {
							name: "gasPrice",
							length: 32,
							allowLess: !0,
							default: new t([])
						}, {
							name: "gasLimit",
							alias: "gas",
							length: 32,
							allowLess: !0,
							default: new t([])
						}, {
							name: "to",
							allowZero: !0,
							length: 20,
							default: new t([])
						}, {
							name: "value",
							length: 32,
							allowLess: !0,
							default: new t([])
						}, {
							name: "data",
							alias: "input",
							allowZero: !0,
							default: new t([])
						}, {
							name: "v",
							allowZero: !0,
							default: new t([28])
						}, {
							name: "r",
							length: 32,
							allowZero: !0,
							allowLess: !0,
							default: new t([])
						}, {
							name: "s",
							length: 32,
							allowZero: !0,
							allowLess: !0,
							default: new t([])
						}];
						n.defineProperties(this, i, r), Object.defineProperty(this, "from", {
							enumerable: !0,
							configurable: !0,
							get: this.getSenderAddress.bind(this)
						});
						var o = n.bufferToInt(this.v),
							a = Math.floor((o - 35) / 2);
						a < 0 && (a = 0), this._chainId = a || r.chainId || 0, this._homestead = !0
					}
					return e.prototype.toCreationAddress = function() {
						return "" === this.to.toString("hex")
					}, e.prototype.hash = function(e) {
						void 0 === e && (e = !0);
						var t = void 0;
						if (e) t = this.raw;
						else if (this._chainId > 0) {
							var r = this.raw.slice();
							this.v = this._chainId, this.r = 0, this.s = 0, t = this.raw, this.raw = r
						} else t = this.raw.slice(0, 6);
						return n.rlphash(t)
					}, e.prototype.getChainId = function() {
						return this._chainId
					}, e.prototype.getSenderAddress = function() {
						if (this._from) return this._from;
						var e = this.getSenderPublicKey();
						return this._from = n.publicToAddress(e), this._from
					}, e.prototype.getSenderPublicKey = function() {
						if (!(this._senderPubKey && this._senderPubKey.length || this.verifySignature())) throw new Error("Invalid Signature");
						return this._senderPubKey
					}, e.prototype.verifySignature = function() {
						var e = this.hash(!1);
						if (this._homestead && 1 === new o(this.s).cmp(a)) return !1;
						try {
							var t = n.bufferToInt(this.v);
							this._chainId > 0 && (t -= 2 * this._chainId + 8), this._senderPubKey = n.ecrecover(e, t, this.r, this.s)
						} catch (e) {
							return !1
						}
						return !!this._senderPubKey
					}, e.prototype.sign = function(e) {
						var t = this.hash(!1),
							r = n.ecsign(t, e);
						this._chainId > 0 && (r.v += 2 * this._chainId + 8), Object.assign(this, r)
					}, e.prototype.getDataFee = function() {
						for (var e = this.raw[5], t = new o(0), r = 0; r < e.length; r++) 0 === e[r] ? t.iaddn(i.txDataZeroGas.v) : t.iaddn(i.txDataNonZeroGas.v);
						return t
					}, e.prototype.getBaseFee = function() {
						var e = this.getDataFee().iaddn(i.txGas.v);
						return this._homestead && this.toCreationAddress() && e.iaddn(i.txCreation.v), e
					}, e.prototype.getUpfrontCost = function() {
						return new o(this.gasLimit).imul(new o(this.gasPrice)).iadd(new o(this.value))
					}, e.prototype.validate = function(e) {
						var t = [];
						return this.verifySignature() || t.push("Invalid Signature"), this.getBaseFee().cmp(new o(this.gasLimit)) > 0 && t.push(["gas limit is too low. Need at least " + this.getBaseFee()]), void 0 === e || !1 === e ? 0 === t.length : t.join(" ")
					}, e
				}();
			e.exports = s
		}).call(this, r(2).Buffer)
	}, function(e) {
		e.exports = JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}')
	}, function(e, t, r) {
		const n = r(68),
			i = r(371);
		e.exports = class extends n {
			constructor() {
				super(({
					blockTracker: e,
					provider: t,
					engine: r
				}) => {
					const {
						events: n,
						middleware: o
					} = i({
						blockTracker: e,
						provider: t
					});
					return n.on("notification", e => r.emit("data", null, e)), o
				})
			}
		}
	}, function(e, t, r) {
		const n = r(69).default,
			i = r(156),
			{
				createAsyncMiddleware: o
			} = r(152),
			a = r(151),
			{
				unsafeRandomBytes: s,
				incrementHexInt: u
			} = r(39),
			c = r(73);

		function f(e) {
			return {
				hash: e.hash,
				parentHash: e.parentHash,
				sha3Uncles: e.sha3Uncles,
				miner: e.miner,
				stateRoot: e.stateRoot,
				transactionsRoot: e.transactionsRoot,
				receiptsRoot: e.receiptsRoot,
				logsBloom: e.logsBloom,
				difficulty: e.difficulty,
				number: e.number,
				gasLimit: e.gasLimit,
				gasUsed: e.gasUsed,
				nonce: e.nonce,
				mixHash: e.mixHash,
				timestamp: e.timestamp,
				extraData: e.extraData
			}
		}
		e.exports = function({
			blockTracker: e,
			provider: t
		}) {
			const r = {},
				h = a({
					blockTracker: e,
					provider: t
				});
			let l = !1;
			const d = new n,
				p = i({
					eth_subscribe: o((async function(n, i) {
						if (l) throw new Error("SubscriptionManager - attempting to use after destroying");
						const o = n.params[0],
							a = s(16);
						let d;
						switch (o) {
							case "newHeads":
								d = function({
									subId: r
								}) {
									const n = {
										type: o,
										destroy: async () => {
											e.removeListener("sync", n.update)
										},
										update: async ({
											oldBlock: e,
											newBlock: n
										}) => {
											const i = n,
												o = u(e);
											(await c({
												provider: t,
												fromBlock: o,
												toBlock: i
											})).map(f).forEach(e => {
												b(r, e)
											})
										}
									};
									return e.on("sync", n.update), n
								}({
									subId: a
								});
								break;
							case "logs":
								const r = n.params[1],
									i = await h.newLogFilter(r);
								d = function({
									subId: e,
									filter: t
								}) {
									t.on("update", t => b(e, t));
									return {
										type: o,
										destroy: async () => await h.uninstallFilter(t.idHex)
									}
								}({
									subId: a,
									filter: i
								});
								break;
							default:
								throw new Error(`SubscriptionManager - unsupported subscription type "${o}"`)
						}
						return r[a] = d, void(i.result = a)
					})),
					eth_unsubscribe: o((async function(e, t) {
						if (l) throw new Error("SubscriptionManager - attempting to use after destroying");
						const n = e.params[0],
							i = r[n];
						if (!i) return void(t.result = !1);
						delete r[n], await i.destroy(), t.result = !0
					}))
				});
			return p.destroy = function() {
				d.removeAllListeners();
				for (const e in r) r[e].destroy(), delete r[e];
				l = !0
			}, {
				events: d,
				middleware: p
			};

			function b(e, t) {
				d.emit("notification", {
					jsonrpc: "2.0",
					method: "eth_subscription",
					params: {
						subscription: e,
						result: t
					}
				})
			}
		}
	}, function(e, t, r) {
		"use strict";
		r.r(t);
		var n = {};
		r.r(n), r.d(n, "generateKey", (function() {
			return d
		})), r.d(n, "verifyHmac", (function() {
			return p
		})), r.d(n, "encrypt", (function() {
			return b
		})), r.d(n, "decrypt", (function() {
			return g
		}));
		var i = r(1),
			o = r(161);
		var a = class {
			constructor() {
				this._eventEmitters = []
			}
			subscribe(e) {
				this._eventEmitters.push(e)
			}
			unsubscribe(e) {
				this._eventEmitters = this._eventEmitters.filter(t => t.event !== e)
			}
			trigger(e) {
				let t, r = [];
				t = Object(i.isJsonRpcRequest)(e) ? e.method : Object(i.isJsonRpcResponseSuccess)(e) || Object(i.isJsonRpcResponseError)(e) ? "response:" + e.id : Object(i.isInternalEvent)(e) ? e.event : "", t && (r = this._eventEmitters.filter(e => e.event === t)), r && r.length || Object(i.isReservedEvent)(t) || Object(i.isInternalEvent)(t) || (r = this._eventEmitters.filter(e => "call_request" === e.event)), r.forEach(t => {
					if (Object(i.isJsonRpcResponseError)(e)) {
						const r = new Error(e.error.message);
						t.callback(r, null)
					} else t.callback(null, e)
				})
			}
		};
		var s = class {
			constructor(e = "walletconnect") {
				this.storageId = e
			}
			getSession() {
				let e = null;
				const t = Object(i.getLocal)(this.storageId);
				return t && Object(i.isWalletConnectSession)(t) && (e = t), e
			}
			setSession(e) {
				return Object(i.setLocal)(this.storageId, e), e
			}
			removeSession() {
				Object(i.removeLocal)(this.storageId)
			}
		};
		const u = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map(e => `https://${e}.bridge.walletconnect.org`);

		function c() {
			return u[Math.floor(Math.random() * u.length)]
		}
		var f = class {
				constructor(e) {
					if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new a, this._clientMeta = Object(i.getClientMeta)() || e.connectorOpts.clientMeta || null, this._cryptoLib = e.cryptoLib, this._sessionStorage = e.sessionStorage || new s(e.connectorOpts.storageId), this._qrcodeModal = e.connectorOpts.qrcodeModal, this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions, this._signingMethods = [...i.signingMethods, ...e.connectorOpts.signingMethods || []], !e.connectorOpts.bridge && !e.connectorOpts.uri && !e.connectorOpts.session) throw new Error("Missing one of the required parameters: bridge / uri / session");
					var t;
					e.connectorOpts.bridge && (this.bridge = function(e) {
						return "walletconnect.org" === function(e) {
							return function(e) {
								let t = e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0];
								return t = t.split(":")[0], t = t.split("?")[0], t
							}(e).split(".").slice(-2).join(".")
						}(e)
					}(t = e.connectorOpts.bridge) ? c() : t), e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
					const r = e.connectorOpts.session || this._getStorageSession();
					r && (this.session = r), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = e.transport || new o.a({
						protocol: this.protocol,
						version: this.version,
						url: this.bridge,
						subscriptions: [this.clientId]
					}), this._subscribeToInternalEvents(), this._initTransport(), e.connectorOpts.uri && this._subscribeToSessionRequest(), e.pushServerOpts && this._registerPushServer(e.pushServerOpts)
				}
				set bridge(e) {
					e && (this._bridge = e)
				}
				get bridge() {
					return this._bridge
				}
				set key(e) {
					if (!e) return;
					const t = Object(i.convertHexToArrayBuffer)(e);
					this._key = t
				}
				get key() {
					if (this._key) {
						return Object(i.convertArrayBufferToHex)(this._key, !0)
					}
					return ""
				}
				set clientId(e) {
					e && (this._clientId = e)
				}
				get clientId() {
					let e = this._clientId;
					return e || (e = this._clientId = Object(i.uuid)()), this._clientId
				}
				set peerId(e) {
					e && (this._peerId = e)
				}
				get peerId() {
					return this._peerId
				}
				set clientMeta(e) {}
				get clientMeta() {
					let e = this._clientMeta;
					return e || (e = this._clientMeta = Object(i.getClientMeta)()), e
				}
				set peerMeta(e) {
					this._peerMeta = e
				}
				get peerMeta() {
					return this._peerMeta
				}
				set handshakeTopic(e) {
					e && (this._handshakeTopic = e)
				}
				get handshakeTopic() {
					return this._handshakeTopic
				}
				set handshakeId(e) {
					e && (this._handshakeId = e)
				}
				get handshakeId() {
					return this._handshakeId
				}
				get uri() {
					return this._formatUri()
				}
				set uri(e) {
					if (!e) return;
					const {
						handshakeTopic: t,
						bridge: r,
						key: n
					} = this._parseUri(e);
					this.handshakeTopic = t, this.bridge = r, this.key = n
				}
				set chainId(e) {
					this._chainId = e
				}
				get chainId() {
					return this._chainId
				}
				set networkId(e) {
					this._networkId = e
				}
				get networkId() {
					return this._networkId
				}
				set accounts(e) {
					this._accounts = e
				}
				get accounts() {
					return this._accounts
				}
				set rpcUrl(e) {
					this._rpcUrl = e
				}
				get rpcUrl() {
					return this._rpcUrl
				}
				set connected(e) {}
				get connected() {
					return this._connected
				}
				set pending(e) {}
				get pending() {
					return !!this._handshakeTopic
				}
				get session() {
					return {
						connected: this.connected,
						accounts: this.accounts,
						chainId: this.chainId,
						bridge: this.bridge,
						key: this.key,
						clientId: this.clientId,
						clientMeta: this.clientMeta,
						peerId: this.peerId,
						peerMeta: this.peerMeta,
						handshakeId: this.handshakeId,
						handshakeTopic: this.handshakeTopic
					}
				}
				set session(e) {
					e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic)
				}
				on(e, t) {
					const r = {
						event: e,
						callback: t
					};
					this._eventManager.subscribe(r)
				}
				off(e) {
					this._eventManager.unsubscribe(e)
				}
				async createInstantRequest(e) {
					this._key = await this._generateKey();
					const t = this._formatRequest({
						method: "wc_instantRequest",
						params: [{
							peerId: this.clientId,
							peerMeta: this.clientMeta,
							request: this._formatRequest(e)
						}]
					});
					this.handshakeId = t.id, this.handshakeTopic = Object(i.uuid)(), this._eventManager.trigger({
						event: "display_uri",
						params: [this.uri]
					}), this.on("modal_closed", () => {
						throw new Error("User close QRCode Modal")
					});
					const r = () => {
						this.killSession()
					};
					try {
						const e = await this._sendCallRequest(t);
						return e && r(), e
					} catch (e) {
						throw r(), e
					}
				}
				async connect(e) {
					if (!this._qrcodeModal) throw new Error("QRCode Modal not provided");
					return this.connected ? {
						chainId: this.chainId,
						accounts: this.accounts
					} : (await this.createSession(e), new Promise(async (e, t) => {
						this.on("modal_closed", () => t(new Error("User close QRCode Modal"))), this.on("connect", (r, n) => {
							if (r) return t(r);
							e(n.params[0])
						})
					}))
				}
				async createSession(e) {
					if (this._connected) throw new Error("Session currently connected");
					if (this.pending) return;
					this._key = await this._generateKey();
					const t = this._formatRequest({
						method: "wc_sessionRequest",
						params: [{
							peerId: this.clientId,
							peerMeta: this.clientMeta,
							chainId: e && e.chainId ? e.chainId : null
						}]
					});
					this.handshakeId = t.id, this.handshakeTopic = Object(i.uuid)(), this._sendSessionRequest(t, "Session update rejected", {
						topic: this.handshakeTopic
					}), this._eventManager.trigger({
						event: "display_uri",
						params: [this.uri]
					})
				}
				approveSession(e) {
					if (this._connected) throw new Error("Session currently connected");
					this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
					const t = {
							approved: !0,
							chainId: this.chainId,
							networkId: this.networkId,
							accounts: this.accounts,
							rpcUrl: this.rpcUrl,
							peerId: this.clientId,
							peerMeta: this.clientMeta
						},
						r = {
							id: this.handshakeId,
							jsonrpc: "2.0",
							result: t
						};
					this._sendResponse(r), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
						event: "connect",
						params: [{
							peerId: this.peerId,
							peerMeta: this.peerMeta,
							chainId: this.chainId,
							accounts: this.accounts
						}]
					})
				}
				rejectSession(e) {
					if (this._connected) throw new Error("Session currently connected");
					const t = e && e.message ? e.message : "Session Rejected",
						r = this._formatResponse({
							id: this.handshakeId,
							error: {
								message: t
							}
						});
					this._sendResponse(r), this._connected = !1, this._eventManager.trigger({
						event: "disconnect",
						params: [{
							message: t
						}]
					}), this._removeStorageSession()
				}
				updateSession(e) {
					if (!this._connected) throw new Error("Session currently disconnected");
					this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
					const t = {
							approved: !0,
							chainId: this.chainId,
							networkId: this.networkId,
							accounts: this.accounts,
							rpcUrl: this.rpcUrl
						},
						r = this._formatRequest({
							method: "wc_sessionUpdate",
							params: [t]
						});
					this._sendSessionRequest(r, "Session update rejected"), this._eventManager.trigger({
						event: "session_update",
						params: [{
							chainId: this.chainId,
							accounts: this.accounts
						}]
					}), this._manageStorageSession()
				}
				async killSession(e) {
					const t = e ? e.message : "Session Disconnected",
						r = this._formatRequest({
							method: "wc_sessionUpdate",
							params: [{
								approved: !1,
								chainId: null,
								networkId: null,
								accounts: null
							}]
						});
					await this._sendRequest(r), this._handleSessionDisconnect(t)
				}
				async sendTransaction(e) {
					if (!this._connected) throw new Error("Session currently disconnected");
					const t = Object(i.parseTransactionData)(e),
						r = this._formatRequest({
							method: "eth_sendTransaction",
							params: [t]
						});
					return await this._sendCallRequest(r)
				}
				async signTransaction(e) {
					if (!this._connected) throw new Error("Session currently disconnected");
					const t = Object(i.parseTransactionData)(e),
						r = this._formatRequest({
							method: "eth_signTransaction",
							params: [t]
						});
					return await this._sendCallRequest(r)
				}
				async signMessage(e) {
					if (!this._connected) throw new Error("Session currently disconnected");
					const t = this._formatRequest({
						method: "eth_sign",
						params: e
					});
					return await this._sendCallRequest(t)
				}
				async signPersonalMessage(e) {
					if (!this._connected) throw new Error("Session currently disconnected");
					e = Object(i.parsePersonalSign)(e);
					const t = this._formatRequest({
						method: "personal_sign",
						params: e
					});
					return await this._sendCallRequest(t)
				}
				async signTypedData(e) {
					if (!this._connected) throw new Error("Session currently disconnected");
					const t = this._formatRequest({
						method: "eth_signTypedData",
						params: e
					});
					return await this._sendCallRequest(t)
				}
				async updateChain(e) {
					if (!this._connected) throw new Error("Session currently disconnected");
					const t = this._formatRequest({
						method: "wallet_updateChain",
						params: [e]
					});
					return await this._sendCallRequest(t)
				}
				unsafeSend(e, t) {
					return this._sendRequest(e, t), this._eventManager.trigger({
						event: "call_request_sent",
						params: [{
							request: e,
							options: t
						}]
					}), new Promise((t, r) => {
						this._subscribeToResponse(e.id, (e, n) => {
							if (e) r(e);
							else {
								if (!n) throw new Error("Missing JSON RPC response");
								t(n)
							}
						})
					})
				}
				async sendCustomRequest(e, t) {
					if (!this._connected) throw new Error("Session currently disconnected");
					switch (e.method) {
						case "eth_accounts":
							return this.accounts;
						case "eth_chainId":
							return Object(i.convertNumberToHex)(this.chainId);
						case "eth_sendTransaction":
						case "eth_signTransaction":
							e.params && (e.params[0] = Object(i.parseTransactionData)(e.params[0]));
							break;
						case "personal_sign":
							e.params && (e.params = Object(i.parsePersonalSign)(e.params))
					}
					const r = this._formatRequest(e);
					return await this._sendCallRequest(r, t)
				}
				approveRequest(e) {
					if (!Object(i.isJsonRpcResponseSuccess)(e)) throw new Error('JSON-RPC success response must include "result" field'); {
						const t = this._formatResponse(e);
						this._sendResponse(t)
					}
				}
				rejectRequest(e) {
					if (!Object(i.isJsonRpcResponseError)(e)) throw new Error('JSON-RPC error response must include "error" field'); {
						const t = this._formatResponse(e);
						this._sendResponse(t)
					}
				}
				transportClose() {
					this._transport.close()
				}
				async _sendRequest(e, t) {
					const r = this._formatRequest(e),
						n = await this._encrypt(r),
						o = void 0 !== (null == t ? void 0 : t.topic) ? t.topic : this.peerId,
						a = JSON.stringify(n),
						s = void 0 !== (null == t ? void 0 : t.forcePushNotification) ? !t.forcePushNotification : Object(i.isSilentPayload)(r);
					this._transport.send(a, o, s)
				}
				async _sendResponse(e) {
					const t = await this._encrypt(e),
						r = this.peerId,
						n = JSON.stringify(t);
					this._transport.send(n, r, !0)
				}
				async _sendSessionRequest(e, t, r) {
					this._sendRequest(e, r), this._subscribeToSessionResponse(e.id, t)
				}
				_sendCallRequest(e, t) {
					return this._sendRequest(e, t), this._eventManager.trigger({
						event: "call_request_sent",
						params: [{
							request: e,
							options: t
						}]
					}), this._subscribeToCallResponse(e.id)
				}
				_formatRequest(e) {
					if (void 0 === e.method) throw new Error('JSON RPC request must have valid "method" value');
					return {
						id: void 0 === e.id ? Object(i.payloadId)() : e.id,
						jsonrpc: "2.0",
						method: e.method,
						params: void 0 === e.params ? [] : e.params
					}
				}
				_formatResponse(e) {
					if (void 0 === e.id) throw new Error('JSON RPC request must have valid "id" value');
					const t = {
						id: e.id,
						jsonrpc: "2.0"
					};
					if (Object(i.isJsonRpcResponseError)(e)) {
						const r = Object(i.formatRpcError)(e.error);
						return Object.assign(Object.assign(Object.assign({}, t), e), {
							error: r
						})
					}
					if (Object(i.isJsonRpcResponseSuccess)(e)) {
						return Object.assign(Object.assign({}, t), e)
					}
					throw new Error("JSON RPC response format is invalid")
				}
				_handleSessionDisconnect(e) {
					const t = e || "Session Disconnected";
					this._connected || (this._qrcodeModal && this._qrcodeModal.close(), Object(i.removeLocal)(i.mobileLinkChoiceKey)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._eventManager.trigger({
						event: "disconnect",
						params: [{
							message: t
						}]
					}), this._removeStorageSession(), this.transportClose()
				}
				_handleSessionResponse(e, t) {
					t && t.approved ? (this._connected ? (t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), this._eventManager.trigger({
						event: "session_update",
						params: [{
							chainId: this.chainId,
							accounts: this.accounts
						}]
					})) : (this._connected = !0, t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), t.peerId && !this.peerId && (this.peerId = t.peerId), t.peerMeta && !this.peerMeta && (this.peerMeta = t.peerMeta), this._eventManager.trigger({
						event: "connect",
						params: [{
							peerId: this.peerId,
							peerMeta: this.peerMeta,
							chainId: this.chainId,
							accounts: this.accounts
						}]
					})), this._manageStorageSession()) : this._handleSessionDisconnect(e)
				}
				async _handleIncomingMessages(e) {
					if (![this.clientId, this.handshakeTopic].includes(e.topic)) return;
					let t;
					try {
						t = JSON.parse(e.payload)
					} catch (e) {
						return
					}
					const r = await this._decrypt(t);
					r && this._eventManager.trigger(r)
				}
				_subscribeToSessionRequest() {
					this._transport.subscribe(this.handshakeTopic)
				}
				_subscribeToResponse(e, t) {
					this.on("response:" + e, t)
				}
				_subscribeToSessionResponse(e, t) {
					this._subscribeToResponse(e, (e, r) => {
						e ? this._handleSessionResponse(e.message) : r.result ? this._handleSessionResponse(t, r.result) : r.error && r.error.message ? this._handleSessionResponse(r.error.message) : this._handleSessionResponse(t)
					})
				}
				_subscribeToCallResponse(e) {
					return new Promise((t, r) => {
						this._subscribeToResponse(e, (e, n) => {
							e ? r(e) : n.result ? t(n.result) : n.error && n.error.message ? r(new Error(n.error.message)) : r(new Error("JSON RPC response format is invalid"))
						})
					})
				}
				_subscribeToInternalEvents() {
					this.on("display_uri", () => {
						this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
							this._eventManager.trigger({
								event: "modal_closed",
								params: []
							})
						}, this._qrcodeModalOptions)
					}), this.on("connect", () => {
						this._qrcodeModal && this._qrcodeModal.close()
					}), this.on("call_request_sent", (e, t) => {
						const {
							request: r
						} = t.params[0];
						if (Object(i.isMobile)() && this._signingMethods.includes(r.method)) {
							const e = Object(i.getLocal)(i.mobileLinkChoiceKey);
							e && (window.location.href = e.href)
						}
					}), this.on("wc_sessionRequest", (e, t) => {
						e && this._eventManager.trigger({
							event: "error",
							params: [{
								code: "SESSION_REQUEST_ERROR",
								message: e.toString()
							}]
						}), this.handshakeId = t.id, this.peerId = t.params[0].peerId, this.peerMeta = t.params[0].peerMeta;
						const r = Object.assign(Object.assign({}, t), {
							method: "session_request"
						});
						this._eventManager.trigger(r)
					}), this.on("wc_sessionUpdate", (e, t) => {
						e && this._handleSessionResponse(e.message), this._handleSessionResponse("Session disconnected", t.params[0])
					})
				}
				_initTransport() {
					this._transport.on("message", e => this._handleIncomingMessages(e)), this._transport.on("open", () => this._eventManager.trigger({
						event: "transport_open",
						params: []
					})), this._transport.on("close", () => this._eventManager.trigger({
						event: "transport_close",
						params: []
					})), this._transport.on("error", () => this._eventManager.trigger({
						event: "transport_error",
						params: ["Websocket connection failed"]
					})), this._transport.open()
				}
				_formatUri() {
					return `${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`
				}
				_parseUri(e) {
					const t = Object(i.parseWalletConnectUri)(e);
					if (t.protocol === this.protocol) {
						if (!t.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
						const e = t.handshakeTopic;
						if (!t.bridge) throw Error("Invalid or missing bridge url parameter value");
						const r = decodeURIComponent(t.bridge);
						if (!t.key) throw Error("Invalid or missing key parameter value");
						return {
							handshakeTopic: e,
							bridge: r,
							key: t.key
						}
					}
					throw new Error("URI format is invalid")
				}
				async _generateKey() {
					if (this._cryptoLib) {
						return await this._cryptoLib.generateKey()
					}
					return null
				}
				async _encrypt(e) {
					const t = this._key;
					if (this._cryptoLib && t) {
						return await this._cryptoLib.encrypt(e, t)
					}
					return null
				}
				async _decrypt(e) {
					const t = this._key;
					if (this._cryptoLib && t) {
						return await this._cryptoLib.decrypt(e, t)
					}
					return null
				}
				_getStorageSession() {
					let e = null;
					return this._sessionStorage && (e = this._sessionStorage.getSession()), e
				}
				_setStorageSession() {
					this._sessionStorage && this._sessionStorage.setSession(this.session)
				}
				_removeStorageSession() {
					this._sessionStorage && this._sessionStorage.removeSession()
				}
				_manageStorageSession() {
					this._connected ? this._setStorageSession() : this._removeStorageSession()
				}
				_registerPushServer(e) {
					if (!e.url || "string" != typeof e.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
					if (!e.type || "string" != typeof e.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
					if (!e.token || "string" != typeof e.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
					const t = {
						bridge: this.bridge,
						topic: this.clientId,
						type: e.type,
						token: e.token,
						peerName: "",
						language: e.language || ""
					};
					this.on("connect", async (r, n) => {
						if (r) throw r;
						if (e.peerMeta) {
							const e = n.params[0].peerMeta.name;
							t.peerName = e
						}
						try {
							const r = await fetch(e.url + "/new", {
								method: "POST",
								headers: {
									Accept: "application/json",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(t)
							});
							if (!(await r.json()).success) throw Error("Failed to register in Push Server")
						} catch (r) {
							throw Error("Failed to register in Push Server")
						}
					})
				}
			},
			h = r(32),
			l = r(0);
		async function d(e) {
			const t = (e || 256) / 8,
				r = h.randomBytes(t);
			return Object(i.convertBufferToArrayBuffer)(l.arrayToBuffer(r))
		}
		async function p(e, t) {
			const r = l.hexToArray(e.data),
				n = l.hexToArray(e.iv),
				i = l.hexToArray(e.hmac),
				o = l.arrayToHex(i, !1),
				a = l.concatArrays(r, n),
				s = await h.hmacSha256Sign(t, a),
				u = l.arrayToHex(s, !1);
			return l.removeHexPrefix(o) === l.removeHexPrefix(u)
		}
		async function b(e, t, r) {
			const n = l.bufferToArray(Object(i.convertArrayBufferToBuffer)(t)),
				o = r || await d(128),
				a = l.bufferToArray(Object(i.convertArrayBufferToBuffer)(o)),
				s = l.arrayToHex(a, !1),
				u = JSON.stringify(e),
				c = l.utf8ToArray(u),
				f = await h.aesCbcEncrypt(a, n, c),
				p = l.arrayToHex(f, !1),
				b = l.concatArrays(f, a),
				g = await h.hmacSha256Sign(n, b);
			return {
				data: p,
				hmac: l.arrayToHex(g, !1),
				iv: s
			}
		}
		async function g(e, t) {
			const r = l.bufferToArray(Object(i.convertArrayBufferToBuffer)(t));
			if (!r) throw new Error("Missing key: required for decryption");
			if (!await p(e, r)) return null;
			const n = l.hexToArray(e.data),
				o = l.hexToArray(e.iv),
				a = await h.aesCbcDecrypt(o, r, n),
				s = l.arrayToUtf8(a);
			let u;
			try {
				u = JSON.parse(s)
			} catch (e) {
				return null
			}
			return u
		}
		t.default = class extends f {
			constructor(e, t) {
				super({
					cryptoLib: n,
					connectorOpts: e,
					pushServerOpts: t
				})
			}
		}
	}, function(e, t, r) {
		"use strict";
		r.r(t);

		function n(e, t, r, n) {
			return new(r || (r = Promise))((function(i, o) {
				function a(e) {
					try {
						u(n.next(e))
					} catch (e) {
						o(e)
					}
				}

				function s(e) {
					try {
						u(n.throw(e))
					} catch (e) {
						o(e)
					}
				}

				function u(e) {
					var t;
					e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
						e(t)
					}))).then(a, s)
				}
				u((n = n.apply(e, t || [])).next())
			}))
		}

		function i(e, t) {
			var r, n, i, o, a = {
				label: 0,
				sent: function() {
					if (1 & i[0]) throw i[1];
					return i[1]
				},
				trys: [],
				ops: []
			};
			return o = {
				next: s(0),
				throw: s(1),
				return: s(2)
			}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
				return this
			}), o;

			function s(o) {
				return function(s) {
					return function(o) {
						if (r) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
							switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
								case 0:
								case 1:
									i = o;
									break;
								case 4:
									return a.label++, {
										value: o[1],
										done: !1
									};
								case 5:
									a.label++, n = o[1], o = [0];
									continue;
								case 7:
									o = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
										a = 0;
										continue
									}
									if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
										a.label = o[1];
										break
									}
									if (6 === o[0] && a.label < i[1]) {
										a.label = i[1], i = o;
										break
									}
									if (i && a.label < i[2]) {
										a.label = i[2], a.ops.push(o);
										break
									}
									i[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							o = t.call(e, a)
						} catch (e) {
							o = [6, e], n = 0
						} finally {
							r = i = 0
						}
						if (5 & o[0]) throw o[1];
						return {
							value: o[0] ? o[1] : void 0,
							done: !0
						}
					}([o, s])
				}
			}
		}
		Object.create;
		Object.create;
		var o = function() {
				function e(e) {
					if (this._maxConcurrency = e, this._queue = [], e <= 0) throw new Error("semaphore must be initialized to a positive value");
					this._value = e
				}
				return e.prototype.acquire = function() {
					var e = this,
						t = this.isLocked(),
						r = new Promise((function(t) {
							return e._queue.push(t)
						}));
					return t || this._dispatch(), r
				}, e.prototype.runExclusive = function(e) {
					return n(this, void 0, void 0, (function() {
						var t, r, n;
						return i(this, (function(i) {
							switch (i.label) {
								case 0:
									return [4, this.acquire()];
								case 1:
									t = i.sent(), r = t[0], n = t[1], i.label = 2;
								case 2:
									return i.trys.push([2, , 4, 5]), [4, e(r)];
								case 3:
									return [2, i.sent()];
								case 4:
									return n(), [7];
								case 5:
									return [2]
							}
						}))
					}))
				}, e.prototype.isLocked = function() {
					return this._value <= 0
				}, e.prototype.release = function() {
					if (this._maxConcurrency > 1) throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
					if (this._currentReleaser) {
						var e = this._currentReleaser;
						this._currentReleaser = void 0, e()
					}
				}, e.prototype._dispatch = function() {
					var e = this,
						t = this._queue.shift();
					if (t) {
						var r = !1;
						this._currentReleaser = function() {
							r || (r = !0, e._value++, e._dispatch())
						}, t([this._value--, this._currentReleaser])
					}
				}, e
			}(),
			a = function() {
				function e() {
					this._semaphore = new o(1)
				}
				return e.prototype.acquire = function() {
					return n(this, void 0, void 0, (function() {
						var e;
						return i(this, (function(t) {
							switch (t.label) {
								case 0:
									return [4, this._semaphore.acquire()];
								case 1:
									return e = t.sent(), [2, e[1]]
							}
						}))
					}))
				}, e.prototype.runExclusive = function(e) {
					return this._semaphore.runExclusive((function() {
						return e()
					}))
				}, e.prototype.isLocked = function() {
					return this._semaphore.isLocked()
				}, e.prototype.release = function() {
					this._semaphore.release()
				}, e
			}();

		function s(e, t, r) {
			var o = this;
			return void 0 === r && (r = new Error("timeout")), {
				acquire: function() {
					return new Promise((function(a, s) {
						return n(o, void 0, void 0, (function() {
							var n, o;
							return i(this, (function(i) {
								switch (i.label) {
									case 0:
										return n = !1, setTimeout((function() {
											n = !0, s(r)
										}), t), [4, e.acquire()];
									case 1:
										return o = i.sent(), n ? (Array.isArray(o) ? o[1] : o)() : a(o), [2]
								}
							}))
						}))
					}))
				},
				runExclusive: function(e) {
					return n(this, void 0, void 0, (function() {
						var t, r;
						return i(this, (function(n) {
							switch (n.label) {
								case 0:
									t = function() {}, n.label = 1;
								case 1:
									return n.trys.push([1, , 7, 8]), [4, this.acquire()];
								case 2:
									return r = n.sent(), Array.isArray(r) ? (t = r[1], [4, e(r[0])]) : [3, 4];
								case 3:
									return [2, n.sent()];
								case 4:
									return t = r, [4, e()];
								case 5:
									return [2, n.sent()];
								case 6:
									return [3, 8];
								case 7:
									return t(), [7];
								case 8:
									return [2]
							}
						}))
					}))
				},
				release: function() {
					e.release()
				},
				isLocked: function() {
					return e.isLocked()
				}
			}
		}
		r.d(t, "Mutex", (function() {
			return a
		})), r.d(t, "Semaphore", (function() {
			return o
		})), r.d(t, "withTimeout", (function() {
			return s
		}))
	}, function(e, t, r) {
		"use strict";
		r.r(t);
		var n, i, o, a, s, u, c, f = {},
			h = [],
			l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

		function d(e, t) {
			for (var r in t) e[r] = t[r];
			return e
		}

		function p(e) {
			var t = e.parentNode;
			t && t.removeChild(e)
		}

		function b(e, t, r) {
			var n, i = arguments,
				o = {};
			for (n in t) "key" !== n && "ref" !== n && (o[n] = t[n]);
			if (arguments.length > 3)
				for (r = [r], n = 3; n < arguments.length; n++) r.push(i[n]);
			if (null != r && (o.children = r), "function" == typeof e && null != e.defaultProps)
				for (n in e.defaultProps) void 0 === o[n] && (o[n] = e.defaultProps[n]);
			return g(e, o, t && t.key, t && t.ref, null)
		}

		function g(e, t, r, i, o) {
			var a = {
				type: e,
				props: t,
				key: r,
				ref: i,
				__k: null,
				__: null,
				__b: 0,
				__e: null,
				__d: void 0,
				__c: null,
				constructor: void 0,
				__v: o
			};
			return null == o && (a.__v = a), n.vnode && n.vnode(a), a
		}

		function m() {
			return {}
		}

		function y(e) {
			return e.children
		}

		function v(e, t) {
			this.props = e, this.context = t
		}

		function _(e, t) {
			if (null == t) return e.__ ? _(e.__, e.__.__k.indexOf(e) + 1) : null;
			for (var r; t < e.__k.length; t++)
				if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
			return "function" == typeof e.type ? _(e) : null
		}

		function w(e) {
			var t, r;
			if (null != (e = e.__) && null != e.__c) {
				for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
					if (null != (r = e.__k[t]) && null != r.__e) {
						e.__e = e.__c.base = r.__e;
						break
					} return w(e)
			}
		}

		function M(e) {
			(!e.__d && (e.__d = !0) && i.push(e) && !o++ || s !== n.debounceRendering) && ((s = n.debounceRendering) || a)(S)
		}

		function S() {
			for (var e; o = i.length;) e = i.sort((function(e, t) {
				return e.__v.__b - t.__v.__b
			})), i = [], e.some((function(e) {
				var t, r, n, i, o, a, s;
				e.__d && (a = (o = (t = e).__v).__e, (s = t.__P) && (r = [], (n = d({}, o)).__v = n, i = T(s, o, n, t.__n, void 0 !== s.ownerSVGElement, null, r, null == a ? _(o) : a), C(r, o), i != a && w(o)))
			}))
		}

		function x(e, t, r, n, i, o, a, s, u) {
			var c, l, d, b, g, m, y, v = r && r.__k || h,
				w = v.length;
			if (s == f && (s = null != o ? o[0] : w ? _(r, 0) : null), c = 0, t.__k = E(t.__k, (function(r) {
					if (null != r) {
						if (r.__ = t, r.__b = t.__b + 1, null === (d = v[c]) || d && r.key == d.key && r.type === d.type) v[c] = void 0;
						else
							for (l = 0; l < w; l++) {
								if ((d = v[l]) && r.key == d.key && r.type === d.type) {
									v[l] = void 0;
									break
								}
								d = null
							}
						if (b = T(e, r, d = d || f, n, i, o, a, s, u), (l = r.ref) && d.ref != l && (y || (y = []), d.ref && y.push(d.ref, null, r), y.push(l, r.__c || b, r)), null != b) {
							var h;
							if (null == m && (m = b), void 0 !== r.__d) h = r.__d, r.__d = void 0;
							else if (o == d || b != s || null == b.parentNode) {
								e: if (null == s || s.parentNode !== e) e.appendChild(b), h = null;
									else {
										for (g = s, l = 0;
											(g = g.nextSibling) && l < w; l += 2)
											if (g == b) break e;
										e.insertBefore(b, s), h = s
									}
								"option" == t.type && (e.value = "")
							}
							s = void 0 !== h ? h : b.nextSibling, "function" == typeof t.type && (t.__d = s)
						} else s && d.__e == s && s.parentNode != e && (s = _(d))
					}
					return c++, r
				})), t.__e = m, null != o && "function" != typeof t.type)
				for (c = o.length; c--;) null != o[c] && p(o[c]);
			for (c = w; c--;) null != v[c] && I(v[c], v[c]);
			if (y)
				for (c = 0; c < y.length; c++) P(y[c], y[++c], y[++c])
		}

		function E(e, t, r) {
			if (null == r && (r = []), null == e || "boolean" == typeof e) t && r.push(t(null));
			else if (Array.isArray(e))
				for (var n = 0; n < e.length; n++) E(e[n], t, r);
			else r.push(t ? t("string" == typeof e || "number" == typeof e ? g(null, e, null, null, e) : null != e.__e || null != e.__c ? g(e.type, e.props, e.key, null, e.__v) : e) : e);
			return r
		}

		function k(e, t, r) {
			"-" === t[0] ? e.setProperty(t, r) : e[t] = "number" == typeof r && !1 === l.test(t) ? r + "px" : null == r ? "" : r
		}

		function A(e, t, r, n, i) {
			var o, a, s, u, c;
			if (i ? "className" === t && (t = "class") : "class" === t && (t = "className"), "style" === t)
				if (o = e.style, "string" == typeof r) o.cssText = r;
				else {
					if ("string" == typeof n && (o.cssText = "", n = null), n)
						for (u in n) r && u in r || k(o, u, "");
					if (r)
						for (c in r) n && r[c] === n[c] || k(o, c, r[c])
				}
			else "o" === t[0] && "n" === t[1] ? (a = t !== (t = t.replace(/Capture$/, "")), s = t.toLowerCase(), t = (s in e ? s : t).slice(2), r ? (n || e.addEventListener(t, R, a), (e.l || (e.l = {}))[t] = r) : e.removeEventListener(t, R, a)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && !i && t in e ? e[t] = null == r ? "" : r : "function" != typeof r && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == r || !1 === r ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : null == r || !1 === r && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, r))
		}

		function R(e) {
			this.l[e.type](n.event ? n.event(e) : e)
		}

		function T(e, t, r, i, o, a, s, u, c) {
			var f, h, l, p, b, g, m, _, w, M, S = t.type;
			if (void 0 !== t.constructor) return null;
			(f = n.__b) && f(t);
			try {
				e: if ("function" == typeof S) {
					if (_ = t.props, w = (f = S.contextType) && i[f.__c], M = f ? w ? w.props.value : f.__ : i, r.__c ? m = (h = t.__c = r.__c).__ = h.__E : ("prototype" in S && S.prototype.render ? t.__c = h = new S(_, M) : (t.__c = h = new v(_, M), h.constructor = S, h.render = B), w && w.sub(h), h.props = _, h.state || (h.state = {}), h.context = M, h.__n = i, l = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != S.getDerivedStateFromProps && (h.__s == h.state && (h.__s = d({}, h.__s)), d(h.__s, S.getDerivedStateFromProps(_, h.__s))), p = h.props, b = h.state, l) null == S.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
					else {
						if (null == S.getDerivedStateFromProps && _ !== p && null != h.componentWillReceiveProps && h.componentWillReceiveProps(_, M), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(_, h.__s, M) || t.__v === r.__v && !h.__) {
							for (h.props = _, h.state = h.__s, t.__v !== r.__v && (h.__d = !1), h.__v = t, t.__e = r.__e, t.__k = r.__k, h.__h.length && s.push(h), f = 0; f < t.__k.length; f++) t.__k[f] && (t.__k[f].__ = t);
							break e
						}
						null != h.componentWillUpdate && h.componentWillUpdate(_, h.__s, M), null != h.componentDidUpdate && h.__h.push((function() {
							h.componentDidUpdate(p, b, g)
						}))
					}
					h.context = M, h.props = _, h.state = h.__s, (f = n.__r) && f(t), h.__d = !1, h.__v = t, h.__P = e, f = h.render(h.props, h.state, h.context), t.__k = null != f && f.type == y && null == f.key ? f.props.children : Array.isArray(f) ? f : [f], null != h.getChildContext && (i = d(d({}, i), h.getChildContext())), l || null == h.getSnapshotBeforeUpdate || (g = h.getSnapshotBeforeUpdate(p, b)), x(e, t, r, i, o, a, s, u, c), h.base = t.__e, h.__h.length && s.push(h), m && (h.__E = h.__ = null), h.__e = !1
				} else null == a && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = O(r.__e, t, r, i, o, a, s, c);
				(f = n.diffed) && f(t)
			}
			catch (e) {
				t.__v = null, n.__e(e, t, r)
			}
			return t.__e
		}

		function C(e, t) {
			n.__c && n.__c(t, e), e.some((function(t) {
				try {
					e = t.__h, t.__h = [], e.some((function(e) {
						e.call(t)
					}))
				} catch (e) {
					n.__e(e, t.__v)
				}
			}))
		}

		function O(e, t, r, n, i, o, a, s) {
			var u, c, l, d, p, b = r.props,
				g = t.props;
			if (i = "svg" === t.type || i, null != o)
				for (u = 0; u < o.length; u++)
					if (null != (c = o[u]) && ((null === t.type ? 3 === c.nodeType : c.localName === t.type) || e == c)) {
						e = c, o[u] = null;
						break
					} if (null == e) {
				if (null === t.type) return document.createTextNode(g);
				e = i ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, g.is && {
					is: g.is
				}), o = null, s = !1
			}
			if (null === t.type) b !== g && e.data != g && (e.data = g);
			else {
				if (null != o && (o = h.slice.call(e.childNodes)), l = (b = r.props || f).dangerouslySetInnerHTML, d = g.dangerouslySetInnerHTML, !s) {
					if (b === f)
						for (b = {}, p = 0; p < e.attributes.length; p++) b[e.attributes[p].name] = e.attributes[p].value;
					(d || l) && (d && l && d.__html == l.__html || (e.innerHTML = d && d.__html || ""))
				}(function(e, t, r, n, i) {
					var o;
					for (o in r) "children" === o || "key" === o || o in t || A(e, o, null, r[o], n);
					for (o in t) i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || r[o] === t[o] || A(e, o, t[o], r[o], n)
				})(e, g, b, i, s), d ? t.__k = [] : (t.__k = t.props.children, x(e, t, r, n, "foreignObject" !== t.type && i, o, a, f, s)), s || ("value" in g && void 0 !== (u = g.value) && u !== e.value && A(e, "value", u, b.value, !1), "checked" in g && void 0 !== (u = g.checked) && u !== e.checked && A(e, "checked", u, b.checked, !1))
			}
			return e
		}

		function P(e, t, r) {
			try {
				"function" == typeof e ? e(t) : e.current = t
			} catch (e) {
				n.__e(e, r)
			}
		}

		function I(e, t, r) {
			var i, o, a;
			if (n.unmount && n.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || P(i, null, t)), r || "function" == typeof e.type || (r = null != (o = e.__e)), e.__e = e.__d = void 0, null != (i = e.__c)) {
				if (i.componentWillUnmount) try {
					i.componentWillUnmount()
				} catch (e) {
					n.__e(e, t)
				}
				i.base = i.__P = null
			}
			if (i = e.__k)
				for (a = 0; a < i.length; a++) i[a] && I(i[a], t, r);
			null != o && p(o)
		}

		function B(e, t, r) {
			return this.constructor(e, r)
		}

		function L(e, t, r) {
			var i, o, a;
			n.__ && n.__(e, t), o = (i = r === u) ? null : r && r.__k || t.__k, e = b(y, null, [e]), a = [], T(t, (i ? t : r || t).__k = e, o || f, f, void 0 !== t.ownerSVGElement, r && !i ? [r] : o ? null : h.slice.call(t.childNodes), a, r || f, i), C(a, e)
		}

		function j(e, t) {
			L(e, t, u)
		}

		function N(e, t) {
			var r, n;
			for (n in t = d(d({}, e.props), t), arguments.length > 2 && (t.children = h.slice.call(arguments, 2)), r = {}, t) "key" !== n && "ref" !== n && (r[n] = t[n]);
			return g(e.type, r, t.key || e.key, t.ref || e.ref, null)
		}

		function U(e) {
			var t = {},
				r = {
					__c: "__cC" + c++,
					__: e,
					Consumer: function(e, t) {
						return e.children(t)
					},
					Provider: function(e) {
						var n, i = this;
						return this.getChildContext || (n = [], this.getChildContext = function() {
							return t[r.__c] = i, t
						}, this.shouldComponentUpdate = function(e) {
							i.props.value !== e.value && n.some((function(t) {
								t.context = e.value, M(t)
							}))
						}, this.sub = function(e) {
							n.push(e);
							var t = e.componentWillUnmount;
							e.componentWillUnmount = function() {
								n.splice(n.indexOf(e), 1), t && t.call(e)
							}
						}), e.children
					}
				};
			return r.Consumer.contextType = r, r.Provider.__ = r, r
		}
		n = {
			__e: function(e, t) {
				for (var r, n; t = t.__;)
					if ((r = t.__c) && !r.__) try {
						if (r.constructor && null != r.constructor.getDerivedStateFromError && (n = !0, r.setState(r.constructor.getDerivedStateFromError(e))), null != r.componentDidCatch && (n = !0, r.componentDidCatch(e)), n) return M(r.__E = r)
					} catch (t) {
						e = t
					}
				throw e
			}
		}, v.prototype.setState = function(e, t) {
			var r;
			r = this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof e && (e = e(r, this.props)), e && d(r, e), null != e && this.__v && (t && this.__h.push(t), M(this))
		}, v.prototype.forceUpdate = function(e) {
			this.__v && (this.__e = !0, e && this.__h.push(e), M(this))
		}, v.prototype.render = y, i = [], o = 0, a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = f, c = 0;
		var q, D, H, z = 0,
			F = [],
			W = n.__r,
			K = n.diffed,
			V = n.__c,
			J = n.unmount;

		function Y(e, t) {
			n.__h && n.__h(D, e, z || t), z = 0;
			var r = D.__H || (D.__H = {
				__: [],
				__h: []
			});
			return e >= r.__.length && r.__.push({}), r.__[e]
		}

		function G(e) {
			return z = 1, Z(fe, e)
		}

		function Z(e, t, r) {
			var n = Y(q++, 2);
			return n.__c || (n.__c = D, n.__ = [r ? r(t) : fe(void 0, t), function(t) {
				var r = e(n.__[0], t);
				n.__[0] !== r && (n.__[0] = r, n.__c.setState({}))
			}]), n.__
		}

		function $(e, t) {
			var r = Y(q++, 3);
			!n.__s && ce(r.__H, t) && (r.__ = e, r.__H = t, D.__H.__h.push(r))
		}

		function X(e, t) {
			var r = Y(q++, 4);
			!n.__s && ce(r.__H, t) && (r.__ = e, r.__H = t, D.__h.push(r))
		}

		function Q(e) {
			return z = 5, te((function() {
				return {
					current: e
				}
			}), [])
		}

		function ee(e, t, r) {
			z = 6, X((function() {
				"function" == typeof e ? e(t()) : e && (e.current = t())
			}), null == r ? r : r.concat(e))
		}

		function te(e, t) {
			var r = Y(q++, 7);
			return ce(r.__H, t) ? (r.__H = t, r.__h = e, r.__ = e()) : r.__
		}

		function re(e, t) {
			return z = 8, te((function() {
				return e
			}), t)
		}

		function ne(e) {
			var t = D.context[e.__c],
				r = Y(q++, 9);
			return r.__c = e, t ? (null == r.__ && (r.__ = !0, t.sub(D)), t.props.value) : e.__
		}

		function ie(e, t) {
			n.useDebugValue && n.useDebugValue(t ? t(e) : e)
		}

		function oe(e) {
			var t = Y(q++, 10),
				r = G();
			return t.__ = e, D.componentDidCatch || (D.componentDidCatch = function(e) {
				t.__ && t.__(e), r[1](e)
			}), [r[0], function() {
				r[1](void 0)
			}]
		}

		function ae() {
			F.some((function(e) {
				if (e.__P) try {
					e.__H.__h.forEach(se), e.__H.__h.forEach(ue), e.__H.__h = []
				} catch (t) {
					return e.__H.__h = [], n.__e(t, e.__v), !0
				}
			})), F = []
		}

		function se(e) {
			e.t && e.t()
		}

		function ue(e) {
			var t = e.__();
			"function" == typeof t && (e.t = t)
		}

		function ce(e, t) {
			return !e || t.some((function(t, r) {
				return t !== e[r]
			}))
		}

		function fe(e, t) {
			return "function" == typeof t ? t(e) : t
		}

		function he(e, t) {
			for (var r in t) e[r] = t[r];
			return e
		}

		function le(e, t) {
			for (var r in e)
				if ("__source" !== r && !(r in t)) return !0;
			for (var n in t)
				if ("__source" !== n && e[n] !== t[n]) return !0;
			return !1
		}
		n.__r = function(e) {
			W && W(e), q = 0, (D = e.__c).__H && (D.__H.__h.forEach(se), D.__H.__h.forEach(ue), D.__H.__h = [])
		}, n.diffed = function(e) {
			K && K(e);
			var t = e.__c;
			if (t) {
				var r = t.__H;
				r && r.__h.length && (1 !== F.push(t) && H === n.requestAnimationFrame || ((H = n.requestAnimationFrame) || function(e) {
					var t, r = function() {
							clearTimeout(n), cancelAnimationFrame(t), setTimeout(e)
						},
						n = setTimeout(r, 100);
					"undefined" != typeof window && (t = requestAnimationFrame(r))
				})(ae))
			}
		}, n.__c = function(e, t) {
			t.some((function(e) {
				try {
					e.__h.forEach(se), e.__h = e.__h.filter((function(e) {
						return !e.__ || ue(e)
					}))
				} catch (r) {
					t.some((function(e) {
						e.__h && (e.__h = [])
					})), t = [], n.__e(r, e.__v)
				}
			})), V && V(e, t)
		}, n.unmount = function(e) {
			J && J(e);
			var t = e.__c;
			if (t) {
				var r = t.__H;
				if (r) try {
					r.__.forEach((function(e) {
						return e.t && e.t()
					}))
				} catch (e) {
					n.__e(e, t.__v)
				}
			}
		}, r.d(t, "version", (function() {
			return Ne
		})), r.d(t, "Children", (function() {
			return ye
		})), r.d(t, "render", (function() {
			return Oe
		})), r.d(t, "hydrate", (function() {
			return Pe
		})), r.d(t, "unmountComponentAtNode", (function() {
			return He
		})), r.d(t, "createPortal", (function() {
			return Re
		})), r.d(t, "createFactory", (function() {
			return Ue
		})), r.d(t, "cloneElement", (function() {
			return De
		})), r.d(t, "isValidElement", (function() {
			return qe
		})), r.d(t, "findDOMNode", (function() {
			return ze
		})), r.d(t, "PureComponent", (function() {
			return de
		})), r.d(t, "memo", (function() {
			return pe
		})), r.d(t, "forwardRef", (function() {
			return ge
		})), r.d(t, "unstable_batchedUpdates", (function() {
			return Fe
		})), r.d(t, "Suspense", (function() {
			return we
		})), r.d(t, "SuspenseList", (function() {
			return xe
		})), r.d(t, "lazy", (function() {
			return Se
		})), r.d(t, "useState", (function() {
			return G
		})), r.d(t, "useReducer", (function() {
			return Z
		})), r.d(t, "useEffect", (function() {
			return $
		})), r.d(t, "useLayoutEffect", (function() {
			return X
		})), r.d(t, "useRef", (function() {
			return Q
		})), r.d(t, "useImperativeHandle", (function() {
			return ee
		})), r.d(t, "useMemo", (function() {
			return te
		})), r.d(t, "useCallback", (function() {
			return re
		})), r.d(t, "useContext", (function() {
			return ne
		})), r.d(t, "useDebugValue", (function() {
			return ie
		})), r.d(t, "useErrorBoundary", (function() {
			return oe
		})), r.d(t, "createElement", (function() {
			return b
		})), r.d(t, "createContext", (function() {
			return U
		})), r.d(t, "createRef", (function() {
			return m
		})), r.d(t, "Fragment", (function() {
			return y
		})), r.d(t, "Component", (function() {
			return v
		}));
		var de = function(e) {
			var t, r;

			function n(t) {
				var r;
				return (r = e.call(this, t) || this).isPureReactComponent = !0, r
			}
			return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, n.prototype.shouldComponentUpdate = function(e, t) {
				return le(this.props, e) || le(this.state, t)
			}, n
		}(v);

		function pe(e, t) {
			function r(e) {
				var r = this.props.ref,
					n = r == e.ref;
				return !n && r && (r.call ? r(null) : r.current = null), t ? !t(this.props, e) || !n : le(this.props, e)
			}

			function n(t) {
				return this.shouldComponentUpdate = r, b(e, he({}, t))
			}
			return n.prototype.isReactComponent = !0, n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.t = !0, n
		}
		var be = n.__b;

		function ge(e) {
			function t(t) {
				var r = he({}, t);
				return delete r.ref, e(r, t.ref)
			}
			return t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
		}
		n.__b = function(e) {
			e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), be && be(e)
		};
		var me = function(e, t) {
				return e ? E(e).reduce((function(e, r, n) {
					return e.concat(t(r, n))
				}), []) : null
			},
			ye = {
				map: me,
				forEach: me,
				count: function(e) {
					return e ? E(e).length : 0
				},
				only: function(e) {
					if (1 !== (e = E(e)).length) throw new Error("Children.only() expects only one child.");
					return e[0]
				},
				toArray: E
			},
			ve = n.__e;

		function _e(e) {
			return e && ((e = he({}, e)).__c = null, e.__k = e.__k && e.__k.map(_e)), e
		}

		function we() {
			this.__u = 0, this.o = null, this.__b = null
		}

		function Me(e) {
			var t = e.__.__c;
			return t && t.u && t.u(e)
		}

		function Se(e) {
			var t, r, n;

			function i(i) {
				if (t || (t = e()).then((function(e) {
						r = e.default || e
					}), (function(e) {
						n = e
					})), n) throw n;
				if (!r) throw t;
				return b(r, i)
			}
			return i.displayName = "Lazy", i.t = !0, i
		}

		function xe() {
			this.i = null, this.l = null
		}
		n.__e = function(e, t, r) {
			if (e.then)
				for (var n, i = t; i = i.__;)
					if ((n = i.__c) && n.__c) return n.__c(e, t.__c);
			ve(e, t, r)
		}, (we.prototype = new v).__c = function(e, t) {
			var r = this;
			null == r.o && (r.o = []), r.o.push(t);
			var n = Me(r.__v),
				i = !1,
				o = function() {
					i || (i = !0, n ? n(a) : a())
				};
			t.__c = t.componentWillUnmount, t.componentWillUnmount = function() {
				o(), t.__c && t.__c()
			};
			var a = function() {
				var e;
				if (!--r.__u)
					for (r.__v.__k[0] = r.state.u, r.setState({
							u: r.__b = null
						}); e = r.o.pop();) e.forceUpdate()
			};
			r.__u++ || r.setState({
				u: r.__b = r.__v.__k[0]
			}), e.then(o, o)
		}, we.prototype.render = function(e, t) {
			return this.__b && (this.__v.__k[0] = _e(this.__b), this.__b = null), [b(v, null, t.u ? null : e.children), t.u && e.fallback]
		};
		var Ee = function(e, t, r) {
			if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
				for (r = e.i; r;) {
					for (; r.length > 3;) r.pop()();
					if (r[1] < r[0]) break;
					e.i = r = r[2]
				}
		};
		(xe.prototype = new v).u = function(e) {
			var t = this,
				r = Me(t.__v),
				n = t.l.get(e);
			return n[0]++,
				function(i) {
					var o = function() {
						t.props.revealOrder ? (n.push(i), Ee(t, e, n)) : i()
					};
					r ? r(o) : o()
				}
		}, xe.prototype.render = function(e) {
			this.i = null, this.l = new Map;
			var t = E(e.children);
			e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
			for (var r = t.length; r--;) this.l.set(t[r], this.i = [1, 0, this.i]);
			return e.children
		}, xe.prototype.componentDidUpdate = xe.prototype.componentDidMount = function() {
			var e = this;
			e.l.forEach((function(t, r) {
				Ee(e, r, t)
			}))
		};
		var ke = function() {
			function e() {}
			var t = e.prototype;
			return t.getChildContext = function() {
				return this.props.context
			}, t.render = function(e) {
				return e.children
			}, e
		}();

		function Ae(e) {
			var t = this,
				r = e.container,
				n = b(ke, {
					context: t.context
				}, e.vnode);
			return t.s && t.s !== r && (t.v.parentNode && t.s.removeChild(t.v), I(t.h), t.p = !1), e.vnode ? t.p ? (r.__k = t.__k, L(n, r), t.__k = r.__k) : (t.v = document.createTextNode(""), j("", r), r.appendChild(t.v), t.p = !0, t.s = r, L(n, r, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), I(t.h)), t.h = n, t.componentWillUnmount = function() {
				t.v.parentNode && t.s.removeChild(t.v), I(t.h)
			}, null
		}

		function Re(e, t) {
			return b(Ae, {
				vnode: e,
				container: t
			})
		}
		var Te = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
		v.prototype.isReactComponent = {};
		var Ce = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

		function Oe(e, t, r) {
			if (null == t.__k)
				for (; t.firstChild;) t.removeChild(t.firstChild);
			return L(e, t), "function" == typeof r && r(), e ? e.__c : null
		}

		function Pe(e, t, r) {
			return j(e, t), "function" == typeof r && r(), e ? e.__c : null
		}
		var Ie = n.event;

		function Be(e, t) {
			e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, {
				configurable: !1,
				get: function() {
					return this["UNSAFE_" + t]
				},
				set: function(e) {
					this["UNSAFE_" + t] = e
				}
			})
		}
		n.event = function(e) {
			Ie && (e = Ie(e)), e.persist = function() {};
			var t = !1,
				r = !1,
				n = e.stopPropagation;
			e.stopPropagation = function() {
				n.call(e), t = !0
			};
			var i = e.preventDefault;
			return e.preventDefault = function() {
				i.call(e), r = !0
			}, e.isPropagationStopped = function() {
				return t
			}, e.isDefaultPrevented = function() {
				return r
			}, e.nativeEvent = e
		};
		var Le = {
				configurable: !0,
				get: function() {
					return this.class
				}
			},
			je = n.vnode;
		n.vnode = function(e) {
			e.$$typeof = Ce;
			var t = e.type,
				r = e.props;
			if (t) {
				if (r.class != r.className && (Le.enumerable = "className" in r, null != r.className && (r.class = r.className), Object.defineProperty(r, "className", Le)), "function" != typeof t) {
					var n, i, o;
					for (o in r.defaultValue && void 0 !== r.value && (r.value || 0 === r.value || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && "select" === t && (E(r.children).forEach((function(e) {
							-1 != r.value.indexOf(e.props.value) && (e.props.selected = !0)
						})), delete r.value), r)
						if (n = Te.test(o)) break;
					if (n)
						for (o in i = e.props = {}, r) i[Te.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] = r[o]
				}! function(t) {
					var r = e.type,
						n = e.props;
					if (n && "string" == typeof r) {
						var i = {};
						for (var o in n) /^on(Ani|Tra|Tou)/.test(o) && (n[o.toLowerCase()] = n[o], delete n[o]), i[o.toLowerCase()] = o;
						if (i.ondoubleclick && (n.ondblclick = n[i.ondoubleclick], delete n[i.ondoubleclick]), i.onbeforeinput && (n.onbeforeinput = n[i.onbeforeinput], delete n[i.onbeforeinput]), i.onchange && ("textarea" === r || "input" === r.toLowerCase() && !/^fil|che|ra/i.test(n.type))) {
							var a = i.oninput || "oninput";
							n[a] || (n[a] = n[i.onchange], delete n[i.onchange])
						}
					}
				}(), "function" == typeof t && !t.m && t.prototype && (Be(t.prototype, "componentWillMount"), Be(t.prototype, "componentWillReceiveProps"), Be(t.prototype, "componentWillUpdate"), t.m = !0)
			}
			je && je(e)
		};
		var Ne = "16.8.0";

		function Ue(e) {
			return b.bind(null, e)
		}

		function qe(e) {
			return !!e && e.$$typeof === Ce
		}

		function De(e) {
			return qe(e) ? N.apply(null, arguments) : e
		}

		function He(e) {
			return !!e.__k && (L(null, e), !0)
		}

		function ze(e) {
			return e && (e.base || 1 === e.nodeType && e) || null
		}
		var Fe = function(e, t) {
			return e(t)
		};
		t.default = {
			useState: G,
			useReducer: Z,
			useEffect: $,
			useLayoutEffect: X,
			useRef: Q,
			useImperativeHandle: ee,
			useMemo: te,
			useCallback: re,
			useContext: ne,
			useDebugValue: ie,
			version: "16.8.0",
			Children: ye,
			render: Oe,
			hydrate: Oe,
			unmountComponentAtNode: He,
			createPortal: Re,
			createElement: b,
			createContext: U,
			createFactory: Ue,
			cloneElement: De,
			createRef: m,
			Fragment: y,
			isValidElement: qe,
			findDOMNode: ze,
			Component: v,
			PureComponent: de,
			memo: pe,
			forwardRef: ge,
			unstable_batchedUpdates: Fe,
			Suspense: we,
			SuspenseList: xe,
			lazy: Se
		}
	}])
}));