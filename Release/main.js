'use strict';

var require$$0 = require('events');
var require$$1 = require('timers');
var require$$0$1 = require('net');
var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var _nodeResolve_empty = {};

var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _nodeResolve_empty
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

var util;
var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return util;
	hasRequiredUtil = 1;

	let register;
	try {
	  const { app } = require('electron');
	  register = app.setAsDefaultProtocolClient.bind(app);
	} catch (err) {
	  try {
	    register = require$$2;
	  } catch (e) {} // eslint-disable-line no-empty
	}

	if (typeof register !== 'function') {
	  register = () => false;
	}

	function pid() {
	  if (typeof process !== 'undefined') {
	    return process.pid;
	  }
	  return null;
	}

	const uuid4122 = () => {
	  let uuid = '';
	  for (let i = 0; i < 32; i += 1) {
	    if (i === 8 || i === 12 || i === 16 || i === 20) {
	      uuid += '-';
	    }
	    let n;
	    if (i === 12) {
	      n = 4;
	    } else {
	      const random = Math.random() * 16 | 0;
	      if (i === 16) {
	        n = (random & 3) | 0;
	      } else {
	        n = random;
	      }
	    }
	    uuid += n.toString(16);
	  }
	  return uuid;
	};

	util = {
	  pid,
	  register,
	  uuid: uuid4122,
	};
	return util;
}

var browser = {exports: {}};

var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser.exports;
	hasRequiredBrowser = 1;
	(function (module, exports) {

		// ref: https://github.com/tc39/proposal-global
		var getGlobal = function () {
			// the only reliable means to get the global object is
			// `Function('return this')()`
			// However, this causes CSP violations in Chrome apps.
			if (typeof self !== 'undefined') { return self; }
			if (typeof window !== 'undefined') { return window; }
			if (typeof commonjsGlobal !== 'undefined') { return commonjsGlobal; }
			throw new Error('unable to locate global object');
		};

		var globalObject = getGlobal();

		module.exports = exports = globalObject.fetch;

		// Needed for TypeScript and Webpack.
		if (globalObject.fetch) {
			exports.default = globalObject.fetch.bind(globalObject);
		}

		exports.Headers = globalObject.Headers;
		exports.Request = globalObject.Request;
		exports.Response = globalObject.Response; 
	} (browser, browser.exports));
	return browser.exports;
}

var ipc = {exports: {}};

var hasRequiredIpc;

function requireIpc () {
	if (hasRequiredIpc) return ipc.exports;
	hasRequiredIpc = 1;

	const net = require$$0$1;
	const EventEmitter = require$$0;
	const fetch = requireBrowser();
	const { uuid } = requireUtil();

	const OPCodes = {
	  HANDSHAKE: 0,
	  FRAME: 1,
	  CLOSE: 2,
	  PING: 3,
	  PONG: 4,
	};

	function getIPCPath(id) {
	  if (process.platform === 'win32') {
	    return `\\\\?\\pipe\\discord-ipc-${id}`;
	  }
	  const { env: { XDG_RUNTIME_DIR, TMPDIR, TMP, TEMP } } = process;
	  const prefix = XDG_RUNTIME_DIR || TMPDIR || TMP || TEMP || '/tmp';
	  return `${prefix.replace(/\/$/, '')}/discord-ipc-${id}`;
	}

	function getIPC(id = 0) {
	  return new Promise((resolve, reject) => {
	    const path = getIPCPath(id);
	    const onerror = () => {
	      if (id < 10) {
	        resolve(getIPC(id + 1));
	      } else {
	        reject(new Error('Could not connect'));
	      }
	    };
	    const sock = net.createConnection(path, () => {
	      sock.removeListener('error', onerror);
	      resolve(sock);
	    });
	    sock.once('error', onerror);
	  });
	}

	async function findEndpoint(tries = 0) {
	  if (tries > 30) {
	    throw new Error('Could not find endpoint');
	  }
	  const endpoint = `http://127.0.0.1:${6463 + (tries % 10)}`;
	  try {
	    const r = await fetch(endpoint);
	    if (r.status === 404) {
	      return endpoint;
	    }
	    return findEndpoint(tries + 1);
	  } catch (e) {
	    return findEndpoint(tries + 1);
	  }
	}

	function encode(op, data) {
	  data = JSON.stringify(data);
	  const len = Buffer.byteLength(data);
	  const packet = Buffer.alloc(8 + len);
	  packet.writeInt32LE(op, 0);
	  packet.writeInt32LE(len, 4);
	  packet.write(data, 8, len);
	  return packet;
	}

	const working = {
	  full: '',
	  op: undefined,
	};

	function decode(socket, callback) {
	  const packet = socket.read();
	  if (!packet) {
	    return;
	  }

	  let { op } = working;
	  let raw;
	  if (working.full === '') {
	    op = working.op = packet.readInt32LE(0);
	    const len = packet.readInt32LE(4);
	    raw = packet.slice(8, len + 8);
	  } else {
	    raw = packet.toString();
	  }

	  try {
	    const data = JSON.parse(working.full + raw);
	    callback({ op, data }); // eslint-disable-line callback-return
	    working.full = '';
	    working.op = undefined;
	  } catch (err) {
	    working.full += raw;
	  }

	  decode(socket, callback);
	}

	class IPCTransport extends EventEmitter {
	  constructor(client) {
	    super();
	    this.client = client;
	    this.socket = null;
	  }

	  async connect() {
	    const socket = this.socket = await getIPC();
	    socket.on('close', this.onClose.bind(this));
	    socket.on('error', this.onClose.bind(this));
	    this.emit('open');
	    socket.write(encode(OPCodes.HANDSHAKE, {
	      v: 1,
	      client_id: this.client.clientId,
	    }));
	    socket.pause();
	    socket.on('readable', () => {
	      decode(socket, ({ op, data }) => {
	        switch (op) {
	          case OPCodes.PING:
	            this.send(data, OPCodes.PONG);
	            break;
	          case OPCodes.FRAME:
	            if (!data) {
	              return;
	            }
	            if (data.cmd === 'AUTHORIZE' && data.evt !== 'ERROR') {
	              findEndpoint()
	                .then((endpoint) => {
	                  this.client.request.endpoint = endpoint;
	                })
	                .catch((e) => {
	                  this.client.emit('error', e);
	                });
	            }
	            this.emit('message', data);
	            break;
	          case OPCodes.CLOSE:
	            this.emit('close', data);
	            break;
	          default:
	            break;
	        }
	      });
	    });
	  }

	  onClose(e) {
	    this.emit('close', e);
	  }

	  send(data, op = OPCodes.FRAME) {
	    this.socket.write(encode(op, data));
	  }

	  async close() {
	    return new Promise((r) => {
	      this.once('close', r);
	      this.send({}, OPCodes.CLOSE);
	      this.socket.end();
	    });
	  }

	  ping() {
	    this.send(uuid(), OPCodes.PING);
	  }
	}

	ipc.exports = IPCTransport;
	ipc.exports.encode = encode;
	ipc.exports.decode = decode;
	return ipc.exports;
}

var constants = {};

var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;

	function keyMirror(arr) {
	  const tmp = {};
	  for (const value of arr) {
	    tmp[value] = value;
	  }
	  return tmp;
	}


	constants.browser = typeof window !== 'undefined';

	constants.RPCCommands = keyMirror([
	  'DISPATCH',
	  'AUTHORIZE',
	  'AUTHENTICATE',
	  'GET_GUILD',
	  'GET_GUILDS',
	  'GET_CHANNEL',
	  'GET_CHANNELS',
	  'CREATE_CHANNEL_INVITE',
	  'GET_RELATIONSHIPS',
	  'GET_USER',
	  'SUBSCRIBE',
	  'UNSUBSCRIBE',
	  'SET_USER_VOICE_SETTINGS',
	  'SET_USER_VOICE_SETTINGS_2',
	  'SELECT_VOICE_CHANNEL',
	  'GET_SELECTED_VOICE_CHANNEL',
	  'SELECT_TEXT_CHANNEL',
	  'GET_VOICE_SETTINGS',
	  'SET_VOICE_SETTINGS_2',
	  'SET_VOICE_SETTINGS',
	  'CAPTURE_SHORTCUT',
	  'SET_ACTIVITY',
	  'SEND_ACTIVITY_JOIN_INVITE',
	  'CLOSE_ACTIVITY_JOIN_REQUEST',
	  'ACTIVITY_INVITE_USER',
	  'ACCEPT_ACTIVITY_INVITE',
	  'INVITE_BROWSER',
	  'DEEP_LINK',
	  'CONNECTIONS_CALLBACK',
	  'BRAINTREE_POPUP_BRIDGE_CALLBACK',
	  'GIFT_CODE_BROWSER',
	  'GUILD_TEMPLATE_BROWSER',
	  'OVERLAY',
	  'BROWSER_HANDOFF',
	  'SET_CERTIFIED_DEVICES',
	  'GET_IMAGE',
	  'CREATE_LOBBY',
	  'UPDATE_LOBBY',
	  'DELETE_LOBBY',
	  'UPDATE_LOBBY_MEMBER',
	  'CONNECT_TO_LOBBY',
	  'DISCONNECT_FROM_LOBBY',
	  'SEND_TO_LOBBY',
	  'SEARCH_LOBBIES',
	  'CONNECT_TO_LOBBY_VOICE',
	  'DISCONNECT_FROM_LOBBY_VOICE',
	  'SET_OVERLAY_LOCKED',
	  'OPEN_OVERLAY_ACTIVITY_INVITE',
	  'OPEN_OVERLAY_GUILD_INVITE',
	  'OPEN_OVERLAY_VOICE_SETTINGS',
	  'VALIDATE_APPLICATION',
	  'GET_ENTITLEMENT_TICKET',
	  'GET_APPLICATION_TICKET',
	  'START_PURCHASE',
	  'GET_SKUS',
	  'GET_ENTITLEMENTS',
	  'GET_NETWORKING_CONFIG',
	  'NETWORKING_SYSTEM_METRICS',
	  'NETWORKING_PEER_METRICS',
	  'NETWORKING_CREATE_TOKEN',
	  'SET_USER_ACHIEVEMENT',
	  'GET_USER_ACHIEVEMENTS',
	]);

	constants.RPCEvents = keyMirror([
	  'CURRENT_USER_UPDATE',
	  'GUILD_STATUS',
	  'GUILD_CREATE',
	  'CHANNEL_CREATE',
	  'RELATIONSHIP_UPDATE',
	  'VOICE_CHANNEL_SELECT',
	  'VOICE_STATE_CREATE',
	  'VOICE_STATE_DELETE',
	  'VOICE_STATE_UPDATE',
	  'VOICE_SETTINGS_UPDATE',
	  'VOICE_SETTINGS_UPDATE_2',
	  'VOICE_CONNECTION_STATUS',
	  'SPEAKING_START',
	  'SPEAKING_STOP',
	  'GAME_JOIN',
	  'GAME_SPECTATE',
	  'ACTIVITY_JOIN',
	  'ACTIVITY_JOIN_REQUEST',
	  'ACTIVITY_SPECTATE',
	  'ACTIVITY_INVITE',
	  'NOTIFICATION_CREATE',
	  'MESSAGE_CREATE',
	  'MESSAGE_UPDATE',
	  'MESSAGE_DELETE',
	  'LOBBY_DELETE',
	  'LOBBY_UPDATE',
	  'LOBBY_MEMBER_CONNECT',
	  'LOBBY_MEMBER_DISCONNECT',
	  'LOBBY_MEMBER_UPDATE',
	  'LOBBY_MESSAGE',
	  'CAPTURE_SHORTCUT_CHANGE',
	  'OVERLAY',
	  'OVERLAY_UPDATE',
	  'ENTITLEMENT_CREATE',
	  'ENTITLEMENT_DELETE',
	  'USER_ACHIEVEMENT_UPDATE',
	  'READY',
	  'ERROR',
	]);

	constants.RPCErrors = {
	  CAPTURE_SHORTCUT_ALREADY_LISTENING: 5004,
	  GET_GUILD_TIMED_OUT: 5002,
	  INVALID_ACTIVITY_JOIN_REQUEST: 4012,
	  INVALID_ACTIVITY_SECRET: 5005,
	  INVALID_CHANNEL: 4005,
	  INVALID_CLIENTID: 4007,
	  INVALID_COMMAND: 4002,
	  INVALID_ENTITLEMENT: 4015,
	  INVALID_EVENT: 4004,
	  INVALID_GIFT_CODE: 4016,
	  INVALID_GUILD: 4003,
	  INVALID_INVITE: 4011,
	  INVALID_LOBBY: 4013,
	  INVALID_LOBBY_SECRET: 4014,
	  INVALID_ORIGIN: 4008,
	  INVALID_PAYLOAD: 4000,
	  INVALID_PERMISSIONS: 4006,
	  INVALID_TOKEN: 4009,
	  INVALID_USER: 4010,
	  LOBBY_FULL: 5007,
	  NO_ELIGIBLE_ACTIVITY: 5006,
	  OAUTH2_ERROR: 5000,
	  PURCHASE_CANCELED: 5008,
	  PURCHASE_ERROR: 5009,
	  RATE_LIMITED: 5011,
	  SELECT_CHANNEL_TIMED_OUT: 5001,
	  SELECT_VOICE_FORCE_REQUIRED: 5003,
	  SERVICE_UNAVAILABLE: 1001,
	  TRANSACTION_ABORTED: 1002,
	  UNAUTHORIZED_FOR_ACHIEVEMENT: 5010,
	  UNKNOWN_ERROR: 1000,
	};

	constants.RPCCloseCodes = {
	  CLOSE_NORMAL: 1000,
	  CLOSE_UNSUPPORTED: 1003,
	  CLOSE_ABNORMAL: 1006,
	  INVALID_CLIENTID: 4000,
	  INVALID_ORIGIN: 4001,
	  RATELIMITED: 4002,
	  TOKEN_REVOKED: 4003,
	  INVALID_VERSION: 4004,
	  INVALID_ENCODING: 4005,
	};

	constants.LobbyTypes = {
	  PRIVATE: 1,
	  PUBLIC: 2,
	};

	constants.RelationshipTypes = {
	  NONE: 0,
	  FRIEND: 1,
	  BLOCKED: 2,
	  PENDING_INCOMING: 3,
	  PENDING_OUTGOING: 4,
	  IMPLICIT: 5,
	};
	return constants;
}

var websocket;
var hasRequiredWebsocket;

function requireWebsocket () {
	if (hasRequiredWebsocket) return websocket;
	hasRequiredWebsocket = 1;

	const EventEmitter = require$$0;
	const { browser } = requireConstants();

	// eslint-disable-next-line
	const WebSocket = browser ? window.WebSocket : require$$2;

	const pack = (d) => JSON.stringify(d);
	const unpack = (s) => JSON.parse(s);

	class WebSocketTransport extends EventEmitter {
	  constructor(client) {
	    super();
	    this.client = client;
	    this.ws = null;
	    this.tries = 0;
	  }

	  async connect() {
	    const port = 6463 + (this.tries % 10);
	    this.tries += 1;

	    this.ws = new WebSocket(
	      `ws://127.0.0.1:${port}/?v=1&client_id=${this.client.clientId}`,
	      browser ? undefined : { origin: this.client.options.origin },
	    );
	    this.ws.onopen = this.onOpen.bind(this);
	    this.ws.onclose = this.onClose.bind(this);
	    this.ws.onerror = this.onError.bind(this);
	    this.ws.onmessage = this.onMessage.bind(this);
	  }

	  onOpen() {
	    this.emit('open');
	  }

	  onClose(event) {
	    if (!event.wasClean) {
	      return;
	    }
	    this.emit('close', event);
	  }

	  onError(event) {
	    try {
	      this.ws.close();
	    } catch {} // eslint-disable-line no-empty

	    if (this.tries > 20) {
	      this.emit('error', event.error);
	    } else {
	      setTimeout(() => {
	        this.connect();
	      }, 250);
	    }
	  }

	  onMessage(event) {
	    this.emit('message', unpack(event.data));
	  }

	  send(data) {
	    this.ws.send(pack(data));
	  }

	  ping() {} // eslint-disable-line no-empty-function

	  close() {
	    return new Promise((r) => {
	      this.once('close', r);
	      this.ws.close();
	    });
	  }
	}

	websocket = WebSocketTransport;
	return websocket;
}

var transports;
var hasRequiredTransports;

function requireTransports () {
	if (hasRequiredTransports) return transports;
	hasRequiredTransports = 1;

	transports = {
	  ipc: requireIpc(),
	  websocket: requireWebsocket(),
	};
	return transports;
}

var client;
var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client;
	hasRequiredClient = 1;

	const EventEmitter = require$$0;
	const { setTimeout, clearTimeout } = require$$1;
	const fetch = requireBrowser();
	const transports = requireTransports();
	const { RPCCommands, RPCEvents, RelationshipTypes } = requireConstants();
	const { pid: getPid, uuid } = requireUtil();

	function subKey(event, args) {
	  return `${event}${JSON.stringify(args)}`;
	}

	/**
	 * @typedef {RPCClientOptions}
	 * @extends {ClientOptions}
	 * @prop {string} transport RPC transport. one of `ipc` or `websocket`
	 */

	/**
	 * The main hub for interacting with Discord RPC
	 * @extends {BaseClient}
	 */
	class RPCClient extends EventEmitter {
	  /**
	   * @param {RPCClientOptions} [options] Options for the client.
	   * You must provide a transport
	   */
	  constructor(options = {}) {
	    super();

	    this.options = options;

	    this.accessToken = null;
	    this.clientId = null;

	    /**
	     * Application used in this client
	     * @type {?ClientApplication}
	     */
	    this.application = null;

	    /**
	     * User used in this application
	     * @type {?User}
	     */
	    this.user = null;

	    const Transport = transports[options.transport];
	    if (!Transport) {
	      throw new TypeError('RPC_INVALID_TRANSPORT', options.transport);
	    }

	    this.fetch = (method, path, { data, query } = {}) =>
	      fetch(`${this.fetch.endpoint}${path}${query ? new URLSearchParams(query) : ''}`, {
	        method,
	        body: data,
	        headers: {
	          Authorization: `Bearer ${this.accessToken}`,
	        },
	      }).then(async (r) => {
	        const body = await r.json();
	        if (!r.ok) {
	          const e = new Error(r.status);
	          e.body = body;
	          throw e;
	        }
	        return body;
	      });

	    this.fetch.endpoint = 'https://discord.com/api';

	    /**
	     * Raw transport userd
	     * @type {RPCTransport}
	     * @private
	     */
	    this.transport = new Transport(this);
	    this.transport.on('message', this._onRpcMessage.bind(this));

	    /**
	     * Map of nonces being expected from the transport
	     * @type {Map}
	     * @private
	     */
	    this._expecting = new Map();

	    this._connectPromise = undefined;
	  }

	  /**
	   * Search and connect to RPC
	   */
	  connect(clientId) {
	    if (this._connectPromise) {
	      return this._connectPromise;
	    }
	    this._connectPromise = new Promise((resolve, reject) => {
	      this.clientId = clientId;
	      const timeout = setTimeout(() => reject(new Error('RPC_CONNECTION_TIMEOUT')), 10e3);
	      timeout.unref();
	      this.once('connected', () => {
	        clearTimeout(timeout);
	        resolve(this);
	      });
	      this.transport.once('close', () => {
	        this._expecting.forEach((e) => {
	          e.reject(new Error('connection closed'));
	        });
	        this.emit('disconnected');
	        reject(new Error('connection closed'));
	      });
	      this.transport.connect().catch(reject);
	    });
	    return this._connectPromise;
	  }

	  /**
	   * @typedef {RPCLoginOptions}
	   * @param {string} clientId Client ID
	   * @param {string} [clientSecret] Client secret
	   * @param {string} [accessToken] Access token
	   * @param {string} [rpcToken] RPC token
	   * @param {string} [tokenEndpoint] Token endpoint
	   * @param {string[]} [scopes] Scopes to authorize with
	   */

	  /**
	   * Performs authentication flow. Automatically calls Client#connect if needed.
	   * @param {RPCLoginOptions} options Options for authentication.
	   * At least one property must be provided to perform login.
	   * @example client.login({ clientId: '1234567', clientSecret: 'abcdef123' });
	   * @returns {Promise<RPCClient>}
	   */
	  async login(options = {}) {
	    let { clientId, accessToken } = options;
	    await this.connect(clientId);
	    if (!options.scopes) {
	      this.emit('ready');
	      return this;
	    }
	    if (!accessToken) {
	      accessToken = await this.authorize(options);
	    }
	    return this.authenticate(accessToken);
	  }

	  /**
	   * Request
	   * @param {string} cmd Command
	   * @param {Object} [args={}] Arguments
	   * @param {string} [evt] Event
	   * @returns {Promise}
	   * @private
	   */
	  request(cmd, args, evt) {
	    return new Promise((resolve, reject) => {
	      const nonce = uuid();
	      this.transport.send({ cmd, args, evt, nonce });
	      this._expecting.set(nonce, { resolve, reject });
	    });
	  }

	  /**
	   * Message handler
	   * @param {Object} message message
	   * @private
	   */
	  _onRpcMessage(message) {
	    if (message.cmd === RPCCommands.DISPATCH && message.evt === RPCEvents.READY) {
	      if (message.data.user) {
	        this.user = message.data.user;
	      }
	      this.emit('connected');
	    } else if (this._expecting.has(message.nonce)) {
	      const { resolve, reject } = this._expecting.get(message.nonce);
	      if (message.evt === 'ERROR') {
	        const e = new Error(message.data.message);
	        e.code = message.data.code;
	        e.data = message.data;
	        reject(e);
	      } else {
	        resolve(message.data);
	      }
	      this._expecting.delete(message.nonce);
	    } else {
	      this.emit(message.evt, message.data);
	    }
	  }

	  /**
	   * Authorize
	   * @param {Object} options options
	   * @returns {Promise}
	   * @private
	   */
	  async authorize({ scopes, clientSecret, rpcToken, redirectUri, prompt } = {}) {
	    if (clientSecret && rpcToken === true) {
	      const body = await this.fetch('POST', '/oauth2/token/rpc', {
	        data: new URLSearchParams({
	          client_id: this.clientId,
	          client_secret: clientSecret,
	        }),
	      });
	      rpcToken = body.rpc_token;
	    }

	    const { code } = await this.request('AUTHORIZE', {
	      scopes,
	      client_id: this.clientId,
	      prompt,
	      rpc_token: rpcToken,
	    });

	    const response = await this.fetch('POST', '/oauth2/token', {
	      data: new URLSearchParams({
	        client_id: this.clientId,
	        client_secret: clientSecret,
	        code,
	        grant_type: 'authorization_code',
	        redirect_uri: redirectUri,
	      }),
	    });

	    return response.access_token;
	  }

	  /**
	   * Authenticate
	   * @param {string} accessToken access token
	   * @returns {Promise}
	   * @private
	   */
	  authenticate(accessToken) {
	    return this.request('AUTHENTICATE', { access_token: accessToken })
	      .then(({ application, user }) => {
	        this.accessToken = accessToken;
	        this.application = application;
	        this.user = user;
	        this.emit('ready');
	        return this;
	      });
	  }


	  /**
	   * Fetch a guild
	   * @param {Snowflake} id Guild ID
	   * @param {number} [timeout] Timeout request
	   * @returns {Promise<Guild>}
	   */
	  getGuild(id, timeout) {
	    return this.request(RPCCommands.GET_GUILD, { guild_id: id, timeout });
	  }

	  /**
	   * Fetch all guilds
	   * @param {number} [timeout] Timeout request
	   * @returns {Promise<Collection<Snowflake, Guild>>}
	   */
	  getGuilds(timeout) {
	    return this.request(RPCCommands.GET_GUILDS, { timeout });
	  }

	  /**
	   * Get a channel
	   * @param {Snowflake} id Channel ID
	   * @param {number} [timeout] Timeout request
	   * @returns {Promise<Channel>}
	   */
	  getChannel(id, timeout) {
	    return this.request(RPCCommands.GET_CHANNEL, { channel_id: id, timeout });
	  }

	  /**
	   * Get all channels
	   * @param {Snowflake} [id] Guild ID
	   * @param {number} [timeout] Timeout request
	   * @returns {Promise<Collection<Snowflake, Channel>>}
	   */
	  async getChannels(id, timeout) {
	    const { channels } = await this.request(RPCCommands.GET_CHANNELS, {
	      timeout,
	      guild_id: id,
	    });
	    return channels;
	  }

	  /**
	   * @typedef {CertifiedDevice}
	   * @prop {string} type One of `AUDIO_INPUT`, `AUDIO_OUTPUT`, `VIDEO_INPUT`
	   * @prop {string} uuid This device's Windows UUID
	   * @prop {object} vendor Vendor information
	   * @prop {string} vendor.name Vendor's name
	   * @prop {string} vendor.url Vendor's url
	   * @prop {object} model Model information
	   * @prop {string} model.name Model's name
	   * @prop {string} model.url Model's url
	   * @prop {string[]} related Array of related product's Windows UUIDs
	   * @prop {boolean} echoCancellation If the device has echo cancellation
	   * @prop {boolean} noiseSuppression If the device has noise suppression
	   * @prop {boolean} automaticGainControl If the device has automatic gain control
	   * @prop {boolean} hardwareMute If the device has a hardware mute
	   */

	  /**
	   * Tell discord which devices are certified
	   * @param {CertifiedDevice[]} devices Certified devices to send to discord
	   * @returns {Promise}
	   */
	  setCertifiedDevices(devices) {
	    return this.request(RPCCommands.SET_CERTIFIED_DEVICES, {
	      devices: devices.map((d) => ({
	        type: d.type,
	        id: d.uuid,
	        vendor: d.vendor,
	        model: d.model,
	        related: d.related,
	        echo_cancellation: d.echoCancellation,
	        noise_suppression: d.noiseSuppression,
	        automatic_gain_control: d.automaticGainControl,
	        hardware_mute: d.hardwareMute,
	      })),
	    });
	  }

	  /**
	   * @typedef {UserVoiceSettings}
	   * @prop {Snowflake} id ID of the user these settings apply to
	   * @prop {?Object} [pan] Pan settings, an object with `left` and `right` set between
	   * 0.0 and 1.0, inclusive
	   * @prop {?number} [volume=100] The volume
	   * @prop {bool} [mute] If the user is muted
	   */

	  /**
	   * Set the voice settings for a user, by id
	   * @param {Snowflake} id ID of the user to set
	   * @param {UserVoiceSettings} settings Settings
	   * @returns {Promise}
	   */
	  setUserVoiceSettings(id, settings) {
	    return this.request(RPCCommands.SET_USER_VOICE_SETTINGS, {
	      user_id: id,
	      pan: settings.pan,
	      mute: settings.mute,
	      volume: settings.volume,
	    });
	  }

	  /**
	   * Move the user to a voice channel
	   * @param {Snowflake} id ID of the voice channel
	   * @param {Object} [options] Options
	   * @param {number} [options.timeout] Timeout for the command
	   * @param {boolean} [options.force] Force this move. This should only be done if you
	   * have explicit permission from the user.
	   * @returns {Promise}
	   */
	  selectVoiceChannel(id, { timeout, force = false } = {}) {
	    return this.request(RPCCommands.SELECT_VOICE_CHANNEL, { channel_id: id, timeout, force });
	  }

	  /**
	   * Move the user to a text channel
	   * @param {Snowflake} id ID of the voice channel
	   * @param {Object} [options] Options
	   * @param {number} [options.timeout] Timeout for the command
	   * have explicit permission from the user.
	   * @returns {Promise}
	   */
	  selectTextChannel(id, { timeout } = {}) {
	    return this.request(RPCCommands.SELECT_TEXT_CHANNEL, { channel_id: id, timeout });
	  }

	  /**
	   * Get current voice settings
	   * @returns {Promise}
	   */
	  getVoiceSettings() {
	    return this.request(RPCCommands.GET_VOICE_SETTINGS)
	      .then((s) => ({
	        automaticGainControl: s.automatic_gain_control,
	        echoCancellation: s.echo_cancellation,
	        noiseSuppression: s.noise_suppression,
	        qos: s.qos,
	        silenceWarning: s.silence_warning,
	        deaf: s.deaf,
	        mute: s.mute,
	        input: {
	          availableDevices: s.input.available_devices,
	          device: s.input.device_id,
	          volume: s.input.volume,
	        },
	        output: {
	          availableDevices: s.output.available_devices,
	          device: s.output.device_id,
	          volume: s.output.volume,
	        },
	        mode: {
	          type: s.mode.type,
	          autoThreshold: s.mode.auto_threshold,
	          threshold: s.mode.threshold,
	          shortcut: s.mode.shortcut,
	          delay: s.mode.delay,
	        },
	      }));
	  }

	  /**
	   * Set current voice settings, overriding the current settings until this session disconnects.
	   * This also locks the settings for any other rpc sessions which may be connected.
	   * @param {Object} args Settings
	   * @returns {Promise}
	   */
	  setVoiceSettings(args) {
	    return this.request(RPCCommands.SET_VOICE_SETTINGS, {
	      automatic_gain_control: args.automaticGainControl,
	      echo_cancellation: args.echoCancellation,
	      noise_suppression: args.noiseSuppression,
	      qos: args.qos,
	      silence_warning: args.silenceWarning,
	      deaf: args.deaf,
	      mute: args.mute,
	      input: args.input ? {
	        device_id: args.input.device,
	        volume: args.input.volume,
	      } : undefined,
	      output: args.output ? {
	        device_id: args.output.device,
	        volume: args.output.volume,
	      } : undefined,
	      mode: args.mode ? {
	        type: args.mode.type,
	        auto_threshold: args.mode.autoThreshold,
	        threshold: args.mode.threshold,
	        shortcut: args.mode.shortcut,
	        delay: args.mode.delay,
	      } : undefined,
	    });
	  }

	  /**
	   * Capture a shortcut using the client
	   * The callback takes (key, stop) where `stop` is a function that will stop capturing.
	   * This `stop` function must be called before disconnecting or else the user will have
	   * to restart their client.
	   * @param {Function} callback Callback handling keys
	   * @returns {Promise<Function>}
	   */
	  captureShortcut(callback) {
	    const subid = subKey(RPCEvents.CAPTURE_SHORTCUT_CHANGE);
	    const stop = () => {
	      this._subscriptions.delete(subid);
	      return this.request(RPCCommands.CAPTURE_SHORTCUT, { action: 'STOP' });
	    };
	    this._subscriptions.set(subid, ({ shortcut }) => {
	      callback(shortcut, stop);
	    });
	    return this.request(RPCCommands.CAPTURE_SHORTCUT, { action: 'START' })
	      .then(() => stop);
	  }

	  /**
	   * Sets the presence for the logged in user.
	   * @param {object} args The rich presence to pass.
	   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
	   * @returns {Promise}
	   */
	  setActivity(args = {}, pid = getPid()) {
	    let timestamps;
	    let assets;
	    let party;
	    let secrets;
	    if (args.startTimestamp || args.endTimestamp) {
	      timestamps = {
	        start: args.startTimestamp,
	        end: args.endTimestamp,
	      };
	      if (timestamps.start instanceof Date) {
	        timestamps.start = Math.round(timestamps.start.getTime());
	      }
	      if (timestamps.end instanceof Date) {
	        timestamps.end = Math.round(timestamps.end.getTime());
	      }
	      if (timestamps.start > 2147483647000) {
	        throw new RangeError('timestamps.start must fit into a unix timestamp');
	      }
	      if (timestamps.end > 2147483647000) {
	        throw new RangeError('timestamps.end must fit into a unix timestamp');
	      }
	    }
	    if (
	      args.largeImageKey || args.largeImageText
	      || args.smallImageKey || args.smallImageText
	    ) {
	      assets = {
	        large_image: args.largeImageKey,
	        large_text: args.largeImageText,
	        small_image: args.smallImageKey,
	        small_text: args.smallImageText,
	      };
	    }
	    if (args.partySize || args.partyId || args.partyMax) {
	      party = { id: args.partyId };
	      if (args.partySize || args.partyMax) {
	        party.size = [args.partySize, args.partyMax];
	      }
	    }
	    if (args.matchSecret || args.joinSecret || args.spectateSecret) {
	      secrets = {
	        match: args.matchSecret,
	        join: args.joinSecret,
	        spectate: args.spectateSecret,
	      };
	    }

	    return this.request(RPCCommands.SET_ACTIVITY, {
	      pid,
	      activity: {
	        state: args.state,
	        details: args.details,
	        timestamps,
	        assets,
	        party,
	        secrets,
	        buttons: args.buttons,
	        instance: !!args.instance,
	      },
	    });
	  }

	  /**
	   * Clears the currently set presence, if any. This will hide the "Playing X" message
	   * displayed below the user's name.
	   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
	   * @returns {Promise}
	   */
	  clearActivity(pid = getPid()) {
	    return this.request(RPCCommands.SET_ACTIVITY, {
	      pid,
	    });
	  }

	  /**
	   * Invite a user to join the game the RPC user is currently playing
	   * @param {User} user The user to invite
	   * @returns {Promise}
	   */
	  sendJoinInvite(user) {
	    return this.request(RPCCommands.SEND_ACTIVITY_JOIN_INVITE, {
	      user_id: user.id || user,
	    });
	  }

	  /**
	   * Request to join the game the user is playing
	   * @param {User} user The user whose game you want to request to join
	   * @returns {Promise}
	   */
	  sendJoinRequest(user) {
	    return this.request(RPCCommands.SEND_ACTIVITY_JOIN_REQUEST, {
	      user_id: user.id || user,
	    });
	  }

	  /**
	   * Reject a join request from a user
	   * @param {User} user The user whose request you wish to reject
	   * @returns {Promise}
	   */
	  closeJoinRequest(user) {
	    return this.request(RPCCommands.CLOSE_ACTIVITY_JOIN_REQUEST, {
	      user_id: user.id || user,
	    });
	  }

	  createLobby(type, capacity, metadata) {
	    return this.request(RPCCommands.CREATE_LOBBY, {
	      type,
	      capacity,
	      metadata,
	    });
	  }

	  updateLobby(lobby, { type, owner, capacity, metadata } = {}) {
	    return this.request(RPCCommands.UPDATE_LOBBY, {
	      id: lobby.id || lobby,
	      type,
	      owner_id: (owner && owner.id) || owner,
	      capacity,
	      metadata,
	    });
	  }

	  deleteLobby(lobby) {
	    return this.request(RPCCommands.DELETE_LOBBY, {
	      id: lobby.id || lobby,
	    });
	  }

	  connectToLobby(id, secret) {
	    return this.request(RPCCommands.CONNECT_TO_LOBBY, {
	      id,
	      secret,
	    });
	  }

	  sendToLobby(lobby, data) {
	    return this.request(RPCCommands.SEND_TO_LOBBY, {
	      id: lobby.id || lobby,
	      data,
	    });
	  }

	  disconnectFromLobby(lobby) {
	    return this.request(RPCCommands.DISCONNECT_FROM_LOBBY, {
	      id: lobby.id || lobby,
	    });
	  }

	  updateLobbyMember(lobby, user, metadata) {
	    return this.request(RPCCommands.UPDATE_LOBBY_MEMBER, {
	      lobby_id: lobby.id || lobby,
	      user_id: user.id || user,
	      metadata,
	    });
	  }

	  getRelationships() {
	    const types = Object.keys(RelationshipTypes);
	    return this.request(RPCCommands.GET_RELATIONSHIPS)
	      .then((o) => o.relationships.map((r) => ({
	        ...r,
	        type: types[r.type],
	      })));
	  }

	  /**
	   * Subscribe to an event
	   * @param {string} event Name of event e.g. `MESSAGE_CREATE`
	   * @param {Object} [args] Args for event e.g. `{ channel_id: '1234' }`
	   * @returns {Promise<Object>}
	   */
	  async subscribe(event, args) {
	    await this.request(RPCCommands.SUBSCRIBE, args, event);
	    return {
	      unsubscribe: () => this.request(RPCCommands.UNSUBSCRIBE, args, event),
	    };
	  }

	  /**
	   * Destroy the client
	   */
	  async destroy() {
	    await this.transport.close();
	  }
	}

	client = RPCClient;
	return client;
}

var src;
var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;

	const util = requireUtil();

	src = {
	  Client: requireClient(),
	  register(id) {
	    return util.register(`discord-${id}`);
	  },
	};
	return src;
}

var srcExports = requireSrc();

var Logger = /** @class */ (function () {
    function Logger() {
        this.plugin = this.plugin;
    }
    Logger.prototype.log = function (message, showPopups) {
        if (showPopups) {
            new obsidian.Notice(message);
        }
        console.log("discordrpc: ".concat(message));
    };
    Logger.prototype.logIgnoreNoNotice = function (message) {
        new obsidian.Notice(message);
        console.log("discordrpc: ".concat(message));
    };
    return Logger;
}());

var DiscordRPCSettings = /** @class */ (function () {
    function DiscordRPCSettings() {
        // showVaultName: boolean = true;
        // showFolderName: boolean = true;
        this.showCurrentFileName = true;
        this.showConnectionTimer = false;
        this.showPopups = true;
        this.customVaultName = "";
        this.showFileExtension = false;
        this.useLoadedTime = false;
        this.connectOnStart = true;
        this.autoHideStatusBar = true;
        this.privacyMode = false;
        // useCustomString: boolean = false;
        this.customString = "Vault: %vault% %folder%";
    }
    return DiscordRPCSettings;
}());
var PluginState;
(function (PluginState) {
    PluginState[PluginState["connected"] = 0] = "connected";
    PluginState[PluginState["connecting"] = 1] = "connecting";
    PluginState[PluginState["disconnected"] = 2] = "disconnected";
})(PluginState || (PluginState = {}));

var DiscordRPCSettingsTab = /** @class */ (function (_super) {
    __extends(DiscordRPCSettingsTab, _super);
    function DiscordRPCSettingsTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logger = new Logger();
        return _this;
    }
    DiscordRPCSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Discord Rich Presence Settings" });
        containerEl.createEl("h3", { text: "Privacy Settings" });
        new obsidian.Setting(containerEl)
            .setName("Privacy Mode")
            .setDesc("Enable this to hide the name of the vault and Hide file names")
            .addToggle(function (boolean) {
            return boolean.setValue(plugin.settings.privacyMode).onChange(function (value) {
                plugin.settings.privacyMode = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("Privacy Mode Enabled");
                }
                else {
                    _this.logger.logIgnoreNoNotice("Privacy Mode Disabled");
                }
                plugin.setActivity("", "", "", "");
            });
        });
        // new Setting(containerEl)
        //   .setName("Show Folder Name")
        //   .setDesc(
        //     "Enable this to show the name of the folder you are working with."
        //   )
        //   .addToggle((boolean) =>
        //     boolean.setValue(plugin.settings.showFolderName).onChange((value) => {
        //       plugin.settings.showFolderName = value;
        //       plugin.saveData(plugin.settings);
        //       if (boolean.getValue()) {
        //         this.logger.logIgnoreNoNotice("Folder Name is now Visible");
        //       } else {
        //         this.logger.logIgnoreNoNotice("Folder Name is no longer Visible");
        //       }
        //       plugin.setActivity(
        //         this.app.vault.getName(),
        //         plugin.currentFile.basename,
        //         plugin.currentFile.extension,
        //         plugin.currentFile.parent.name
        //       );
        //     })
        //   );
        // new Setting(containerEl)
        //   .setName("Show Vault Name")
        //   .setDesc(
        //     "Enable this to show the name of the vault you are working with. Will be displayed where the vault name is displayed."
        //   )
        //   .addToggle((boolean) =>
        //     boolean.setValue(plugin.settings.showVaultName).onChange((value) => {
        //       plugin.settings.showVaultName = value;
        //       plugin.saveData(plugin.settings);
        //       if (boolean.getValue()) {
        //         this.logger.logIgnoreNoNotice("Vault Name is now Visible");
        //       } else {
        //         this.logger.logIgnoreNoNotice("Vault Name is no longer Visible");
        //       }
        //       plugin.setActivity(
        //         this.app.vault.getName(),
        //         plugin.currentFile.basename,
        //         plugin.currentFile.extension,
        //         plugin.currentFile.parent.name
        //       );
        //     })
        //   );
        new obsidian.Setting(containerEl)
            .setName("Show Current File Name")
            .setDesc("Enable this to show the name of the file you are working on.")
            .addToggle(function (boolean) {
            return boolean
                .setValue(plugin.settings.showCurrentFileName)
                .onChange(function (value) {
                plugin.settings.showCurrentFileName = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("File Name is now Visable");
                }
                else {
                    _this.logger.logIgnoreNoNotice("File Name is no longer Visable");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension, plugin.currentFile.parent.name);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Show File Extension")
            .setDesc("Enable this to show file extension.")
            .addToggle(function (boolean) {
            return boolean
                .setValue(plugin.settings.showFileExtension)
                .onChange(function (value) {
                plugin.settings.showFileExtension = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension, plugin.currentFile.parent.name);
            });
        });
        containerEl.createEl("h3", { text: "Customization" });
        new obsidian.Setting(containerEl)
            .setName("Set Custom Vault Name")
            .setDesc("Change the vault name shown publicly. Leave blank to use your actual vault name.")
            .addText(function (text) {
            return text.setValue(plugin.settings.customVaultName).onChange(function (value) {
                plugin.settings.customVaultName = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension, plugin.currentFile.parent.name);
            });
        });
        // new Setting(containerEl)
        //   .setName("Use Custom a custom message")
        //   .setDesc(
        //     "Enable this to use a custom message instead of the default. Placeholders: %vault% (Vault Name), %folder% (Folder Name), %file% (File Name), %extension% (File Extension)"
        //   )
        //   .addToggle((boolean) =>
        //     boolean.setValue(plugin.settings.useCustomString).onChange((value) => {
        //       plugin.settings.useCustomString = value;
        //       plugin.saveData(plugin.settings);
        //       if (boolean.getValue()) {
        //         this.logger.logIgnoreNoNotice("Using Custom String...");
        //       } else {
        //         this.logger.logIgnoreNoNotice("Not Using Custom String...");
        //       }
        //       plugin.setActivity(
        //         this.app.vault.getName(),
        //         plugin.currentFile.basename,
        //         plugin.currentFile.extension,
        //         plugin.currentFile.parent.name
        //       );
        //     })
        //   );
        new obsidian.Setting(containerEl)
            .setName("Set Custom Message")
            .setDesc("Change the message displayed on your rich presence. Placeholders: %vault% (Vault Name), %folder% (Folder Name), %file% (File Name), %extension% (File Extension)")
            .addText(function (text) {
            return text.setValue(plugin.settings.customString).onChange(function (value) {
                plugin.settings.customString = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension, plugin.currentFile.parent.name);
            });
        });
        containerEl.createEl("h3", { text: "Time Settings" });
        new obsidian.Setting(containerEl)
            .setName("Use Obsidian Total Time")
            .setDesc("Enable to use the total time you have been using Obsidian, instead of the time spent editing a single file.")
            .addToggle(function (boolean) {
            boolean.setValue(plugin.settings.useLoadedTime).onChange(function (value) {
                plugin.settings.useLoadedTime = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension, plugin.currentFile.parent.name);
            });
        });
        containerEl.createEl("h3", { text: "Status Bar Settings" });
        new obsidian.Setting(containerEl)
            .setName("Automatically hide Status Bar")
            .setDesc("Automatically hide status bar after successfully connecting to Discord.")
            .addToggle(function (boolean) {
            boolean
                .setValue(plugin.settings.autoHideStatusBar)
                .onChange(function (value) {
                plugin.settings.autoHideStatusBar = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension, plugin.currentFile.parent.name);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Show Connected Time")
            .setDesc("Show time spent editing file or time connected to Discord in the status bar.")
            .addToggle(function (boolean) {
            boolean.setValue(plugin.settings.showConnectionTimer).onChange(function (value) {
                plugin.settings.showConnectionTimer = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension, plugin.currentFile.parent.name);
                // needed to make timer disappear, otherwise it will freeze
                plugin.statusBar.displayState(plugin.getState(), plugin.settings.autoHideStatusBar);
            });
        });
        containerEl.createEl("h3", { text: "Startup Settings" });
        new obsidian.Setting(containerEl)
            .setName("Automatically Connect to Discord")
            .setDesc("Automatically connect to Discord on startup. You can always click the status bar to manually connect.")
            .addToggle(function (boolean) {
            boolean.setValue(plugin.settings.connectOnStart).onChange(function (value) {
                plugin.settings.connectOnStart = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension, plugin.currentFile.parent.name);
            });
        });
        containerEl.createEl("h3", { text: "Notice Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Notices")
            .setDesc("Enable this to show connection Notices.")
            .addToggle(function (boolean) {
            return boolean.setValue(plugin.settings.showPopups).onChange(function (value) {
                plugin.settings.showPopups = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("Notices Enabled");
                }
                else {
                    _this.logger.logIgnoreNoNotice("Notices Disabled");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension, plugin.currentFile.parent.name);
            });
        });
    };
    return DiscordRPCSettingsTab;
}(obsidian.PluginSettingTab));

var StatusBar = /** @class */ (function () {
    function StatusBar(statusBarEl) {
        this.statusBarEl = statusBarEl;
    }
    StatusBar.prototype.displayState = function (state, autoHide) {
        switch (state) {
            case PluginState.connected:
                this.displayConnected(autoHide ? 10000 : 0);
                break;
            case PluginState.connecting:
                this.statusBarEl.setText("Connecting to Discord...");
                break;
            case PluginState.disconnected:
                this.statusBarEl.setText("\uD83D\uDDD8 Reconnect to Discord");
                break;
        }
    };
    StatusBar.prototype.displayTimer = function (loadedTime) {
        this.statusBarEl.setText("\uD83C\uDF0D ".concat(StatusBar.millisecsToString(new Date().getTime() - loadedTime.getTime())));
    };
    StatusBar.prototype.displayConnected = function (timeout) {
        var _this = this;
        this.statusBarEl.setText("\uD83C\uDF0D Connected to Discord");
        if (timeout && timeout > 0) {
            window.setTimeout(function () {
                _this.statusBarEl.setText("");
            }, timeout);
        }
        else {
            window.setTimeout(function () {
                _this.statusBarEl.setText("\uD83C\uDF0D");
            }, 5000);
        }
    };
    /* Returns [HH:]mm:ss on the stopwatch
    https://github.com/grassbl8d/flexible-pomo-obsidian/blob/ae037e3710866863c5397f42af06c5540a807b10/src/timer.ts#L475
    */
    StatusBar.millisecsToString = function (millisecs) {
        var formattedCountDown;
        if (millisecs >= 60 * 60 * 1000) { /* >= 1 hour*/
            formattedCountDown = obsidian.moment.utc(millisecs).format('HH:mm:ss');
        }
        else {
            formattedCountDown = obsidian.moment.utc(millisecs).format('mm:ss');
        }
        return formattedCountDown.toString();
    };
    return StatusBar;
}());

var ObsidianDiscordRPC = /** @class */ (function (_super) {
    __extends(ObsidianDiscordRPC, _super);
    function ObsidianDiscordRPC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logger = new Logger();
        return _this;
    }
    ObsidianDiscordRPC.prototype.setState = function (state) {
        this.state = state;
    };
    ObsidianDiscordRPC.prototype.getState = function () {
        return this.state;
    };
    // Remove unnecessary methods
    // public getApp(): any {
    //   return this.app;
    // }
    // public getPluginManifest(): PluginManifest {
    //   return this.manifest;
    // }
    ObsidianDiscordRPC.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statusBarEl, _a, activeFile;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        statusBarEl = this.addStatusBarItem();
                        this.statusBar = new StatusBar(statusBarEl);
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = (_b.sent()) || new DiscordRPCSettings();
                        this.registerEvent(this.app.workspace.on("file-open", this.onFileOpen, this));
                        this.registerInterval(window.setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                if (this.settings.showConnectionTimer && this.getState() == PluginState.connected) {
                                    this.statusBar.displayTimer(this.settings.useLoadedTime ? this.loadedTime : this.lastSetTime);
                                }
                                return [2 /*return*/];
                            });
                        }); }, 500));
                        this.registerDomEvent(statusBarEl, "click", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(this.getState() == PluginState.disconnected)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.connectDiscord()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        if (!(this.getState() == PluginState.connected)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.disconnectDiscord()];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        this.addSettingTab(new DiscordRPCSettingsTab(this.app, this));
                        this.addCommand({
                            id: "reconnect-discord",
                            name: "Reconnect to Discord",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.connectDiscord()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); },
                        });
                        this.addCommand({
                            id: "disconnect-discord",
                            name: "Disconnect from Discord",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.disconnectDiscord()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); },
                        });
                        if (!this.settings.connectOnStart) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.connectDiscord()];
                    case 2:
                        _b.sent();
                        activeFile = this.app.workspace.getActiveFile();
                        if (activeFile) {
                            this.onFileOpen(activeFile);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState(PluginState.disconnected);
                        this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.onFileOpen = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentFile = file;
                        if (!(this.getState() === PluginState.connected)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setActivity(this.app.vault.getName(), file.basename, file.extension, file.parent.name)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        this.rpc.clearActivity();
                        this.rpc.destroy();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.parse = function (inputString, vaultName) {
        return __awaiter(this, void 0, void 0, function () {
            var folderName, fileName, fileExtension, placeholders, parsedString;
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                folderName = ((_b = (_a = this.currentFile) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.name) || "";
                fileName = ((_c = this.currentFile) === null || _c === void 0 ? void 0 : _c.name) || "";
                fileExtension = ((_d = this.currentFile) === null || _d === void 0 ? void 0 : _d.extension) || "";
                placeholders = {
                    "%vault%": vaultName,
                    "%folder%": folderName,
                    "%file%": fileName,
                    "%extension%": fileExtension,
                };
                parsedString = inputString.replace(/%[\w]+%/g, function (match) {
                    var placeholder = match.toLowerCase(); // Normalize to lowercase
                    return placeholders[placeholder] || match; // Replace if found, otherwise keep original
                });
                return [2 /*return*/, parsedString];
            });
        });
    };
    ObsidianDiscordRPC.prototype.connectDiscord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.log("Attempting to connect to Discord...", this.settings.showPopups); // Log connection attempt
                        this.loadedTime = new Date();
                        this.lastSetTime = new Date();
                        this.rpc = new srcExports.Client({
                            transport: "ipc",
                        });
                        this.setState(PluginState.connecting);
                        this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                        this.rpc.once("ready", function () {
                            _this.setState(PluginState.connected);
                            _this.statusBar.displayState(_this.getState(), _this.settings.autoHideStatusBar);
                            _this.logger.log("Connected to Discord with client ID: " + _this.rpc.user.id, _this.settings.showPopups); // Log successful connection
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rpc.login({
                                clientId: "1343184166354812979",
                            })];
                    case 2:
                        _a.sent();
                        this.logger.log("Discord login successful", this.settings.showPopups); // Log successful login
                        return [4 /*yield*/, this.setActivity(this.app.vault.getName(), "...", "", "")];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.setState(PluginState.disconnected);
                        this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                        this.logger.log("Failed to connect to Discord: " + error_1.message + "\nStack Trace: " + error_1.stack, this.settings.showPopups); // Log detailed error
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.disconnectDiscord = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.rpc.clearActivity();
                this.rpc.destroy();
                this.setState(PluginState.disconnected);
                this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                this.logger.log("Disconnected from Discord", this.settings.showPopups);
                return [2 /*return*/];
            });
        });
    };
    ObsidianDiscordRPC.prototype.setActivity = function (vaultName, fileName, fileExtension, folderName) {
        return __awaiter(this, void 0, void 0, function () {
            var vault, file, date, parsedText, details, activity, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.getState() === PluginState.connected)) return [3 /*break*/, 5];
                        vault = this.settings.customVaultName || vaultName;
                        file = this.settings.showFileExtension
                            ? "".concat(fileName, ".").concat(fileExtension)
                            : fileName;
                        date = this.settings.useLoadedTime ? this.loadedTime : new Date();
                        this.lastSetTime = date;
                        parsedText = this.parse(this.settings.customString, vault);
                        details = this.settings.showCurrentFileName
                            ? "Editing ".concat(file)
                            : "Editing Notes";
                        activity = {
                            startTimestamp: date,
                            largeImageKey: "logo",
                            largeImageText: "Obsidian",
                        };
                        if (!this.settings.privacyMode) return [3 /*break*/, 1];
                        activity.details = "Editing Notes";
                        activity.state = "Working in a Vault";
                        return [3 /*break*/, 3];
                    case 1:
                        activity.details = details;
                        _a = activity;
                        _b = "".concat;
                        return [4 /*yield*/, parsedText];
                    case 2:
                        _a.state = _b.apply("", [(_c.sent()).toString()]);
                        _c.label = 3;
                    case 3: 
                    // if (this.settings.privacyMode) {
                    //   activity.details = "Editing Notes";
                    //   activity.state = "Working in a Vault";
                    // } else {
                    //   if (this.settings.useCustomString) {
                    //     activity.details = "Test";
                    //     activity.state = this.settings.customString;
                    //   } else if (this.settings.showVaultName && this.settings.showCurrentFileName) {
                    //     activity.details = `Editing ${file}`;
                    //     activity.state = `Vault: ${vault}${folder}`;
                    //   } else if (this.settings.showVaultName) {
                    //     activity.state = `Vault: ${vault}${folder}`;
                    //   } else if (this.settings.showCurrentFileName) {
                    //     activity.details = `Editing ${file}`;
                    //     if (folder) {
                    //       activity.state = `In ${folder}`;
                    //     }
                    //   }
                    // }
                    return [4 /*yield*/, this.rpc.setActivity(activity)];
                    case 4:
                        // if (this.settings.privacyMode) {
                        //   activity.details = "Editing Notes";
                        //   activity.state = "Working in a Vault";
                        // } else {
                        //   if (this.settings.useCustomString) {
                        //     activity.details = "Test";
                        //     activity.state = this.settings.customString;
                        //   } else if (this.settings.showVaultName && this.settings.showCurrentFileName) {
                        //     activity.details = `Editing ${file}`;
                        //     activity.state = `Vault: ${vault}${folder}`;
                        //   } else if (this.settings.showVaultName) {
                        //     activity.state = `Vault: ${vault}${folder}`;
                        //   } else if (this.settings.showCurrentFileName) {
                        //     activity.details = `Editing ${file}`;
                        //     if (folder) {
                        //       activity.state = `In ${folder}`;
                        //     }
                        //   }
                        // }
                        _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return ObsidianDiscordRPC;
}(obsidian.Plugin));

module.exports = ObsidianDiscordRPC;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9kaXNjb3JkLXJwYy9zcmMvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL2Jyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL3RyYW5zcG9ydHMvaXBjLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy9jb25zdGFudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy9jbGllbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL2luZGV4LmpzIiwiLi4vc3JjL2xvZ2dlci50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5ncy10YWIudHMiLCIuLi9zcmMvc3RhdHVzLWJhci50cyIsIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wsIEl0ZXJhdG9yICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcclxuICAgIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxyXG4gICAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcclxuICAgIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XHJcbiAgICB2YXIgXywgZG9uZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xyXG4gICAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xyXG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcclxuICAgICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgIGRvbmUgPSB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcclxuICAgIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xyXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcclxuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgQXN5bmNJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gQXN5bmNJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiLCBhd2FpdFJldHVybiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIGF3YWl0UmV0dXJuKGYpIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodikudGhlbihmLCByZWplY3QpOyB9OyB9XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKGdbbl0pIHsgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgaWYgKGYpIGlbbl0gPSBmKGlbbl0pOyB9IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG52YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcclxuICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHZhciBhciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XHJcbiAgICAgICAgcmV0dXJuIGFyO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBvd25LZXlzKG8pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XHJcbiAgICAgICAgdmFyIGRpc3Bvc2UsIGlubmVyO1xyXG4gICAgICAgIGlmIChhc3luYykge1xyXG4gICAgICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XHJcbiAgICAgICAgICAgIGlmIChhc3luYykgaW5uZXIgPSBkaXNwb3NlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XHJcbiAgICAgICAgaWYgKGlubmVyKSBkaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRyeSB7IGlubmVyLmNhbGwodGhpcyk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpOyB9IH07XHJcbiAgICAgICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFzeW5jKSB7XHJcbiAgICAgICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuXHJcbn1cclxuXHJcbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XHJcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xyXG4gICAgZnVuY3Rpb24gZmFpbChlKSB7XHJcbiAgICAgICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xyXG4gICAgICAgIGVudi5oYXNFcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgciwgcyA9IDA7XHJcbiAgICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICAgIHdoaWxlIChyID0gZW52LnN0YWNrLnBvcCgpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXIuYXN5bmMgJiYgcyA9PT0gMSkgcmV0dXJuIHMgPSAwLCBlbnYuc3RhY2sucHVzaChyKSwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihuZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyLmRpc3Bvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gci5kaXNwb3NlLmNhbGwoci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuYXN5bmMpIHJldHVybiBzIHw9IDIsIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgcyB8PSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzID09PSAxKSByZXR1cm4gZW52Lmhhc0Vycm9yID8gUHJvbWlzZS5yZWplY3QoZW52LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbihwYXRoLCBwcmVzZXJ2ZUpzeCkge1xyXG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIC9eXFwuXFwuP1xcLy8udGVzdChwYXRoKSkge1xyXG4gICAgICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLih0c3gpJHwoKD86XFwuZCk/KSgoPzpcXC5bXi4vXSs/KT8pXFwuKFtjbV0/KXRzJC9pLCBmdW5jdGlvbiAobSwgdHN4LCBkLCBleHQsIGNtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0c3ggPyBwcmVzZXJ2ZUpzeCA/IFwiLmpzeFwiIDogXCIuanNcIiA6IGQgJiYgKCFleHQgfHwgIWNtKSA/IG0gOiAoZCArIGV4dCArIFwiLlwiICsgY20udG9Mb3dlckNhc2UoKSArIFwianNcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgX19leHRlbmRzOiBfX2V4dGVuZHMsXHJcbiAgICBfX2Fzc2lnbjogX19hc3NpZ24sXHJcbiAgICBfX3Jlc3Q6IF9fcmVzdCxcclxuICAgIF9fZGVjb3JhdGU6IF9fZGVjb3JhdGUsXHJcbiAgICBfX3BhcmFtOiBfX3BhcmFtLFxyXG4gICAgX19lc0RlY29yYXRlOiBfX2VzRGVjb3JhdGUsXHJcbiAgICBfX3J1bkluaXRpYWxpemVyczogX19ydW5Jbml0aWFsaXplcnMsXHJcbiAgICBfX3Byb3BLZXk6IF9fcHJvcEtleSxcclxuICAgIF9fc2V0RnVuY3Rpb25OYW1lOiBfX3NldEZ1bmN0aW9uTmFtZSxcclxuICAgIF9fbWV0YWRhdGE6IF9fbWV0YWRhdGEsXHJcbiAgICBfX2F3YWl0ZXI6IF9fYXdhaXRlcixcclxuICAgIF9fZ2VuZXJhdG9yOiBfX2dlbmVyYXRvcixcclxuICAgIF9fY3JlYXRlQmluZGluZzogX19jcmVhdGVCaW5kaW5nLFxyXG4gICAgX19leHBvcnRTdGFyOiBfX2V4cG9ydFN0YXIsXHJcbiAgICBfX3ZhbHVlczogX192YWx1ZXMsXHJcbiAgICBfX3JlYWQ6IF9fcmVhZCxcclxuICAgIF9fc3ByZWFkOiBfX3NwcmVhZCxcclxuICAgIF9fc3ByZWFkQXJyYXlzOiBfX3NwcmVhZEFycmF5cyxcclxuICAgIF9fc3ByZWFkQXJyYXk6IF9fc3ByZWFkQXJyYXksXHJcbiAgICBfX2F3YWl0OiBfX2F3YWl0LFxyXG4gICAgX19hc3luY0dlbmVyYXRvcjogX19hc3luY0dlbmVyYXRvcixcclxuICAgIF9fYXN5bmNEZWxlZ2F0b3I6IF9fYXN5bmNEZWxlZ2F0b3IsXHJcbiAgICBfX2FzeW5jVmFsdWVzOiBfX2FzeW5jVmFsdWVzLFxyXG4gICAgX19tYWtlVGVtcGxhdGVPYmplY3Q6IF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxyXG4gICAgX19pbXBvcnRTdGFyOiBfX2ltcG9ydFN0YXIsXHJcbiAgICBfX2ltcG9ydERlZmF1bHQ6IF9faW1wb3J0RGVmYXVsdCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEluOiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXHJcbiAgICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZTogX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXHJcbiAgICBfX2Rpc3Bvc2VSZXNvdXJjZXM6IF9fZGlzcG9zZVJlc291cmNlcyxcclxuICAgIF9fcmV3cml0ZVJlbGF0aXZlSW1wb3J0RXh0ZW5zaW9uOiBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbixcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgcmVnaXN0ZXI7XG50cnkge1xuICBjb25zdCB7IGFwcCB9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcbiAgcmVnaXN0ZXIgPSBhcHAuc2V0QXNEZWZhdWx0UHJvdG9jb2xDbGllbnQuYmluZChhcHApO1xufSBjYXRjaCAoZXJyKSB7XG4gIHRyeSB7XG4gICAgcmVnaXN0ZXIgPSByZXF1aXJlKCdyZWdpc3Rlci1zY2hlbWUnKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxufVxuXG5pZiAodHlwZW9mIHJlZ2lzdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gIHJlZ2lzdGVyID0gKCkgPT4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHBpZCgpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBwcm9jZXNzLnBpZDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgdXVpZDQxMjIgPSAoKSA9PiB7XG4gIGxldCB1dWlkID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkgKz0gMSkge1xuICAgIGlmIChpID09PSA4IHx8IGkgPT09IDEyIHx8IGkgPT09IDE2IHx8IGkgPT09IDIwKSB7XG4gICAgICB1dWlkICs9ICctJztcbiAgICB9XG4gICAgbGV0IG47XG4gICAgaWYgKGkgPT09IDEyKSB7XG4gICAgICBuID0gNDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDtcbiAgICAgIGlmIChpID09PSAxNikge1xuICAgICAgICBuID0gKHJhbmRvbSAmIDMpIHwgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG4gPSByYW5kb207XG4gICAgICB9XG4gICAgfVxuICAgIHV1aWQgKz0gbi50b1N0cmluZygxNik7XG4gIH1cbiAgcmV0dXJuIHV1aWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGlkLFxuICByZWdpc3RlcixcbiAgdXVpZDogdXVpZDQxMjIsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZ2xvYmFsXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkge1xuXHQvLyB0aGUgb25seSByZWxpYWJsZSBtZWFucyB0byBnZXQgdGhlIGdsb2JhbCBvYmplY3QgaXNcblx0Ly8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXG5cdC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxuXHRpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9XG5cdGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9XG5cdHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XG59XG5cbnZhciBnbG9iYWxPYmplY3QgPSBnZXRHbG9iYWwoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZ2xvYmFsT2JqZWN0LmZldGNoO1xuXG4vLyBOZWVkZWQgZm9yIFR5cGVTY3JpcHQgYW5kIFdlYnBhY2suXG5pZiAoZ2xvYmFsT2JqZWN0LmZldGNoKSB7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IGdsb2JhbE9iamVjdC5mZXRjaC5iaW5kKGdsb2JhbE9iamVjdCk7XG59XG5cbmV4cG9ydHMuSGVhZGVycyA9IGdsb2JhbE9iamVjdC5IZWFkZXJzO1xuZXhwb3J0cy5SZXF1ZXN0ID0gZ2xvYmFsT2JqZWN0LlJlcXVlc3Q7XG5leHBvcnRzLlJlc3BvbnNlID0gZ2xvYmFsT2JqZWN0LlJlc3BvbnNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZXQgPSByZXF1aXJlKCduZXQnKTtcbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5jb25zdCB7IHV1aWQgfSA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxuY29uc3QgT1BDb2RlcyA9IHtcbiAgSEFORFNIQUtFOiAwLFxuICBGUkFNRTogMSxcbiAgQ0xPU0U6IDIsXG4gIFBJTkc6IDMsXG4gIFBPTkc6IDQsXG59O1xuXG5mdW5jdGlvbiBnZXRJUENQYXRoKGlkKSB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgcmV0dXJuIGBcXFxcXFxcXD9cXFxccGlwZVxcXFxkaXNjb3JkLWlwYy0ke2lkfWA7XG4gIH1cbiAgY29uc3QgeyBlbnY6IHsgWERHX1JVTlRJTUVfRElSLCBUTVBESVIsIFRNUCwgVEVNUCB9IH0gPSBwcm9jZXNzO1xuICBjb25zdCBwcmVmaXggPSBYREdfUlVOVElNRV9ESVIgfHwgVE1QRElSIHx8IFRNUCB8fCBURU1QIHx8ICcvdG1wJztcbiAgcmV0dXJuIGAke3ByZWZpeC5yZXBsYWNlKC9cXC8kLywgJycpfS9kaXNjb3JkLWlwYy0ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIGdldElQQyhpZCA9IDApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBwYXRoID0gZ2V0SVBDUGF0aChpZCk7XG4gICAgY29uc3Qgb25lcnJvciA9ICgpID0+IHtcbiAgICAgIGlmIChpZCA8IDEwKSB7XG4gICAgICAgIHJlc29sdmUoZ2V0SVBDKGlkICsgMSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ291bGQgbm90IGNvbm5lY3QnKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBzb2NrID0gbmV0LmNyZWF0ZUNvbm5lY3Rpb24ocGF0aCwgKCkgPT4ge1xuICAgICAgc29jay5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICAgIHJlc29sdmUoc29jayk7XG4gICAgfSk7XG4gICAgc29jay5vbmNlKCdlcnJvcicsIG9uZXJyb3IpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmluZEVuZHBvaW50KHRyaWVzID0gMCkge1xuICBpZiAodHJpZXMgPiAzMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgZW5kcG9pbnQnKTtcbiAgfVxuICBjb25zdCBlbmRwb2ludCA9IGBodHRwOi8vMTI3LjAuMC4xOiR7NjQ2MyArICh0cmllcyAlIDEwKX1gO1xuICB0cnkge1xuICAgIGNvbnN0IHIgPSBhd2FpdCBmZXRjaChlbmRwb2ludCk7XG4gICAgaWYgKHIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgIHJldHVybiBlbmRwb2ludDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmRFbmRwb2ludCh0cmllcyArIDEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZpbmRFbmRwb2ludCh0cmllcyArIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZShvcCwgZGF0YSkge1xuICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIGNvbnN0IGxlbiA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuICBjb25zdCBwYWNrZXQgPSBCdWZmZXIuYWxsb2MoOCArIGxlbik7XG4gIHBhY2tldC53cml0ZUludDMyTEUob3AsIDApO1xuICBwYWNrZXQud3JpdGVJbnQzMkxFKGxlbiwgNCk7XG4gIHBhY2tldC53cml0ZShkYXRhLCA4LCBsZW4pO1xuICByZXR1cm4gcGFja2V0O1xufVxuXG5jb25zdCB3b3JraW5nID0ge1xuICBmdWxsOiAnJyxcbiAgb3A6IHVuZGVmaW5lZCxcbn07XG5cbmZ1bmN0aW9uIGRlY29kZShzb2NrZXQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHBhY2tldCA9IHNvY2tldC5yZWFkKCk7XG4gIGlmICghcGFja2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHsgb3AgfSA9IHdvcmtpbmc7XG4gIGxldCByYXc7XG4gIGlmICh3b3JraW5nLmZ1bGwgPT09ICcnKSB7XG4gICAgb3AgPSB3b3JraW5nLm9wID0gcGFja2V0LnJlYWRJbnQzMkxFKDApO1xuICAgIGNvbnN0IGxlbiA9IHBhY2tldC5yZWFkSW50MzJMRSg0KTtcbiAgICByYXcgPSBwYWNrZXQuc2xpY2UoOCwgbGVuICsgOCk7XG4gIH0gZWxzZSB7XG4gICAgcmF3ID0gcGFja2V0LnRvU3RyaW5nKCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHdvcmtpbmcuZnVsbCArIHJhdyk7XG4gICAgY2FsbGJhY2soeyBvcCwgZGF0YSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYWxsYmFjay1yZXR1cm5cbiAgICB3b3JraW5nLmZ1bGwgPSAnJztcbiAgICB3b3JraW5nLm9wID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB3b3JraW5nLmZ1bGwgKz0gcmF3O1xuICB9XG5cbiAgZGVjb2RlKHNvY2tldCwgY2FsbGJhY2spO1xufVxuXG5jbGFzcyBJUENUcmFuc3BvcnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuc29ja2V0ID0gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgY29uc3Qgc29ja2V0ID0gdGhpcy5zb2NrZXQgPSBhd2FpdCBnZXRJUEMoKTtcbiAgICBzb2NrZXQub24oJ2Nsb3NlJywgdGhpcy5vbkNsb3NlLmJpbmQodGhpcykpO1xuICAgIHNvY2tldC5vbignZXJyb3InLCB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5lbWl0KCdvcGVuJyk7XG4gICAgc29ja2V0LndyaXRlKGVuY29kZShPUENvZGVzLkhBTkRTSEFLRSwge1xuICAgICAgdjogMSxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnQuY2xpZW50SWQsXG4gICAgfSkpO1xuICAgIHNvY2tldC5wYXVzZSgpO1xuICAgIHNvY2tldC5vbigncmVhZGFibGUnLCAoKSA9PiB7XG4gICAgICBkZWNvZGUoc29ja2V0LCAoeyBvcCwgZGF0YSB9KSA9PiB7XG4gICAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgICBjYXNlIE9QQ29kZXMuUElORzpcbiAgICAgICAgICAgIHRoaXMuc2VuZChkYXRhLCBPUENvZGVzLlBPTkcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBPUENvZGVzLkZSQU1FOlxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmNtZCA9PT0gJ0FVVEhPUklaRScgJiYgZGF0YS5ldnQgIT09ICdFUlJPUicpIHtcbiAgICAgICAgICAgICAgZmluZEVuZHBvaW50KClcbiAgICAgICAgICAgICAgICAudGhlbigoZW5kcG9pbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LnJlcXVlc3QuZW5kcG9pbnQgPSBlbmRwb2ludDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnQuZW1pdCgnZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBPUENvZGVzLkNMT1NFOlxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjbG9zZScsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xvc2UoZSkge1xuICAgIHRoaXMuZW1pdCgnY2xvc2UnLCBlKTtcbiAgfVxuXG4gIHNlbmQoZGF0YSwgb3AgPSBPUENvZGVzLkZSQU1FKSB7XG4gICAgdGhpcy5zb2NrZXQud3JpdGUoZW5jb2RlKG9wLCBkYXRhKSk7XG4gIH1cblxuICBhc3luYyBjbG9zZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHIpID0+IHtcbiAgICAgIHRoaXMub25jZSgnY2xvc2UnLCByKTtcbiAgICAgIHRoaXMuc2VuZCh7fSwgT1BDb2Rlcy5DTE9TRSk7XG4gICAgICB0aGlzLnNvY2tldC5lbmQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBpbmcoKSB7XG4gICAgdGhpcy5zZW5kKHV1aWQoKSwgT1BDb2Rlcy5QSU5HKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElQQ1RyYW5zcG9ydDtcbm1vZHVsZS5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24ga2V5TWlycm9yKGFycikge1xuICBjb25zdCB0bXAgPSB7fTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnIpIHtcbiAgICB0bXBbdmFsdWVdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRtcDtcbn1cblxuXG5leHBvcnRzLmJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0cy5SUENDb21tYW5kcyA9IGtleU1pcnJvcihbXG4gICdESVNQQVRDSCcsXG4gICdBVVRIT1JJWkUnLFxuICAnQVVUSEVOVElDQVRFJyxcbiAgJ0dFVF9HVUlMRCcsXG4gICdHRVRfR1VJTERTJyxcbiAgJ0dFVF9DSEFOTkVMJyxcbiAgJ0dFVF9DSEFOTkVMUycsXG4gICdDUkVBVEVfQ0hBTk5FTF9JTlZJVEUnLFxuICAnR0VUX1JFTEFUSU9OU0hJUFMnLFxuICAnR0VUX1VTRVInLFxuICAnU1VCU0NSSUJFJyxcbiAgJ1VOU1VCU0NSSUJFJyxcbiAgJ1NFVF9VU0VSX1ZPSUNFX1NFVFRJTkdTJyxcbiAgJ1NFVF9VU0VSX1ZPSUNFX1NFVFRJTkdTXzInLFxuICAnU0VMRUNUX1ZPSUNFX0NIQU5ORUwnLFxuICAnR0VUX1NFTEVDVEVEX1ZPSUNFX0NIQU5ORUwnLFxuICAnU0VMRUNUX1RFWFRfQ0hBTk5FTCcsXG4gICdHRVRfVk9JQ0VfU0VUVElOR1MnLFxuICAnU0VUX1ZPSUNFX1NFVFRJTkdTXzInLFxuICAnU0VUX1ZPSUNFX1NFVFRJTkdTJyxcbiAgJ0NBUFRVUkVfU0hPUlRDVVQnLFxuICAnU0VUX0FDVElWSVRZJyxcbiAgJ1NFTkRfQUNUSVZJVFlfSk9JTl9JTlZJVEUnLFxuICAnQ0xPU0VfQUNUSVZJVFlfSk9JTl9SRVFVRVNUJyxcbiAgJ0FDVElWSVRZX0lOVklURV9VU0VSJyxcbiAgJ0FDQ0VQVF9BQ1RJVklUWV9JTlZJVEUnLFxuICAnSU5WSVRFX0JST1dTRVInLFxuICAnREVFUF9MSU5LJyxcbiAgJ0NPTk5FQ1RJT05TX0NBTExCQUNLJyxcbiAgJ0JSQUlOVFJFRV9QT1BVUF9CUklER0VfQ0FMTEJBQ0snLFxuICAnR0lGVF9DT0RFX0JST1dTRVInLFxuICAnR1VJTERfVEVNUExBVEVfQlJPV1NFUicsXG4gICdPVkVSTEFZJyxcbiAgJ0JST1dTRVJfSEFORE9GRicsXG4gICdTRVRfQ0VSVElGSUVEX0RFVklDRVMnLFxuICAnR0VUX0lNQUdFJyxcbiAgJ0NSRUFURV9MT0JCWScsXG4gICdVUERBVEVfTE9CQlknLFxuICAnREVMRVRFX0xPQkJZJyxcbiAgJ1VQREFURV9MT0JCWV9NRU1CRVInLFxuICAnQ09OTkVDVF9UT19MT0JCWScsXG4gICdESVNDT05ORUNUX0ZST01fTE9CQlknLFxuICAnU0VORF9UT19MT0JCWScsXG4gICdTRUFSQ0hfTE9CQklFUycsXG4gICdDT05ORUNUX1RPX0xPQkJZX1ZPSUNFJyxcbiAgJ0RJU0NPTk5FQ1RfRlJPTV9MT0JCWV9WT0lDRScsXG4gICdTRVRfT1ZFUkxBWV9MT0NLRUQnLFxuICAnT1BFTl9PVkVSTEFZX0FDVElWSVRZX0lOVklURScsXG4gICdPUEVOX09WRVJMQVlfR1VJTERfSU5WSVRFJyxcbiAgJ09QRU5fT1ZFUkxBWV9WT0lDRV9TRVRUSU5HUycsXG4gICdWQUxJREFURV9BUFBMSUNBVElPTicsXG4gICdHRVRfRU5USVRMRU1FTlRfVElDS0VUJyxcbiAgJ0dFVF9BUFBMSUNBVElPTl9USUNLRVQnLFxuICAnU1RBUlRfUFVSQ0hBU0UnLFxuICAnR0VUX1NLVVMnLFxuICAnR0VUX0VOVElUTEVNRU5UUycsXG4gICdHRVRfTkVUV09SS0lOR19DT05GSUcnLFxuICAnTkVUV09SS0lOR19TWVNURU1fTUVUUklDUycsXG4gICdORVRXT1JLSU5HX1BFRVJfTUVUUklDUycsXG4gICdORVRXT1JLSU5HX0NSRUFURV9UT0tFTicsXG4gICdTRVRfVVNFUl9BQ0hJRVZFTUVOVCcsXG4gICdHRVRfVVNFUl9BQ0hJRVZFTUVOVFMnLFxuXSk7XG5cbmV4cG9ydHMuUlBDRXZlbnRzID0ga2V5TWlycm9yKFtcbiAgJ0NVUlJFTlRfVVNFUl9VUERBVEUnLFxuICAnR1VJTERfU1RBVFVTJyxcbiAgJ0dVSUxEX0NSRUFURScsXG4gICdDSEFOTkVMX0NSRUFURScsXG4gICdSRUxBVElPTlNISVBfVVBEQVRFJyxcbiAgJ1ZPSUNFX0NIQU5ORUxfU0VMRUNUJyxcbiAgJ1ZPSUNFX1NUQVRFX0NSRUFURScsXG4gICdWT0lDRV9TVEFURV9ERUxFVEUnLFxuICAnVk9JQ0VfU1RBVEVfVVBEQVRFJyxcbiAgJ1ZPSUNFX1NFVFRJTkdTX1VQREFURScsXG4gICdWT0lDRV9TRVRUSU5HU19VUERBVEVfMicsXG4gICdWT0lDRV9DT05ORUNUSU9OX1NUQVRVUycsXG4gICdTUEVBS0lOR19TVEFSVCcsXG4gICdTUEVBS0lOR19TVE9QJyxcbiAgJ0dBTUVfSk9JTicsXG4gICdHQU1FX1NQRUNUQVRFJyxcbiAgJ0FDVElWSVRZX0pPSU4nLFxuICAnQUNUSVZJVFlfSk9JTl9SRVFVRVNUJyxcbiAgJ0FDVElWSVRZX1NQRUNUQVRFJyxcbiAgJ0FDVElWSVRZX0lOVklURScsXG4gICdOT1RJRklDQVRJT05fQ1JFQVRFJyxcbiAgJ01FU1NBR0VfQ1JFQVRFJyxcbiAgJ01FU1NBR0VfVVBEQVRFJyxcbiAgJ01FU1NBR0VfREVMRVRFJyxcbiAgJ0xPQkJZX0RFTEVURScsXG4gICdMT0JCWV9VUERBVEUnLFxuICAnTE9CQllfTUVNQkVSX0NPTk5FQ1QnLFxuICAnTE9CQllfTUVNQkVSX0RJU0NPTk5FQ1QnLFxuICAnTE9CQllfTUVNQkVSX1VQREFURScsXG4gICdMT0JCWV9NRVNTQUdFJyxcbiAgJ0NBUFRVUkVfU0hPUlRDVVRfQ0hBTkdFJyxcbiAgJ09WRVJMQVknLFxuICAnT1ZFUkxBWV9VUERBVEUnLFxuICAnRU5USVRMRU1FTlRfQ1JFQVRFJyxcbiAgJ0VOVElUTEVNRU5UX0RFTEVURScsXG4gICdVU0VSX0FDSElFVkVNRU5UX1VQREFURScsXG4gICdSRUFEWScsXG4gICdFUlJPUicsXG5dKTtcblxuZXhwb3J0cy5SUENFcnJvcnMgPSB7XG4gIENBUFRVUkVfU0hPUlRDVVRfQUxSRUFEWV9MSVNURU5JTkc6IDUwMDQsXG4gIEdFVF9HVUlMRF9USU1FRF9PVVQ6IDUwMDIsXG4gIElOVkFMSURfQUNUSVZJVFlfSk9JTl9SRVFVRVNUOiA0MDEyLFxuICBJTlZBTElEX0FDVElWSVRZX1NFQ1JFVDogNTAwNSxcbiAgSU5WQUxJRF9DSEFOTkVMOiA0MDA1LFxuICBJTlZBTElEX0NMSUVOVElEOiA0MDA3LFxuICBJTlZBTElEX0NPTU1BTkQ6IDQwMDIsXG4gIElOVkFMSURfRU5USVRMRU1FTlQ6IDQwMTUsXG4gIElOVkFMSURfRVZFTlQ6IDQwMDQsXG4gIElOVkFMSURfR0lGVF9DT0RFOiA0MDE2LFxuICBJTlZBTElEX0dVSUxEOiA0MDAzLFxuICBJTlZBTElEX0lOVklURTogNDAxMSxcbiAgSU5WQUxJRF9MT0JCWTogNDAxMyxcbiAgSU5WQUxJRF9MT0JCWV9TRUNSRVQ6IDQwMTQsXG4gIElOVkFMSURfT1JJR0lOOiA0MDA4LFxuICBJTlZBTElEX1BBWUxPQUQ6IDQwMDAsXG4gIElOVkFMSURfUEVSTUlTU0lPTlM6IDQwMDYsXG4gIElOVkFMSURfVE9LRU46IDQwMDksXG4gIElOVkFMSURfVVNFUjogNDAxMCxcbiAgTE9CQllfRlVMTDogNTAwNyxcbiAgTk9fRUxJR0lCTEVfQUNUSVZJVFk6IDUwMDYsXG4gIE9BVVRIMl9FUlJPUjogNTAwMCxcbiAgUFVSQ0hBU0VfQ0FOQ0VMRUQ6IDUwMDgsXG4gIFBVUkNIQVNFX0VSUk9SOiA1MDA5LFxuICBSQVRFX0xJTUlURUQ6IDUwMTEsXG4gIFNFTEVDVF9DSEFOTkVMX1RJTUVEX09VVDogNTAwMSxcbiAgU0VMRUNUX1ZPSUNFX0ZPUkNFX1JFUVVJUkVEOiA1MDAzLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiAxMDAxLFxuICBUUkFOU0FDVElPTl9BQk9SVEVEOiAxMDAyLFxuICBVTkFVVEhPUklaRURfRk9SX0FDSElFVkVNRU5UOiA1MDEwLFxuICBVTktOT1dOX0VSUk9SOiAxMDAwLFxufTtcblxuZXhwb3J0cy5SUENDbG9zZUNvZGVzID0ge1xuICBDTE9TRV9OT1JNQUw6IDEwMDAsXG4gIENMT1NFX1VOU1VQUE9SVEVEOiAxMDAzLFxuICBDTE9TRV9BQk5PUk1BTDogMTAwNixcbiAgSU5WQUxJRF9DTElFTlRJRDogNDAwMCxcbiAgSU5WQUxJRF9PUklHSU46IDQwMDEsXG4gIFJBVEVMSU1JVEVEOiA0MDAyLFxuICBUT0tFTl9SRVZPS0VEOiA0MDAzLFxuICBJTlZBTElEX1ZFUlNJT046IDQwMDQsXG4gIElOVkFMSURfRU5DT0RJTkc6IDQwMDUsXG59O1xuXG5leHBvcnRzLkxvYmJ5VHlwZXMgPSB7XG4gIFBSSVZBVEU6IDEsXG4gIFBVQkxJQzogMixcbn07XG5cbmV4cG9ydHMuUmVsYXRpb25zaGlwVHlwZXMgPSB7XG4gIE5PTkU6IDAsXG4gIEZSSUVORDogMSxcbiAgQkxPQ0tFRDogMixcbiAgUEVORElOR19JTkNPTUlORzogMyxcbiAgUEVORElOR19PVVRHT0lORzogNCxcbiAgSU1QTElDSVQ6IDUsXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IHsgYnJvd3NlciB9ID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuY29uc3QgV2ViU29ja2V0ID0gYnJvd3NlciA/IHdpbmRvdy5XZWJTb2NrZXQgOiByZXF1aXJlKCd3cycpO1xuXG5jb25zdCBwYWNrID0gKGQpID0+IEpTT04uc3RyaW5naWZ5KGQpO1xuY29uc3QgdW5wYWNrID0gKHMpID0+IEpTT04ucGFyc2Uocyk7XG5cbmNsYXNzIFdlYlNvY2tldFRyYW5zcG9ydCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy53cyA9IG51bGw7XG4gICAgdGhpcy50cmllcyA9IDA7XG4gIH1cblxuICBhc3luYyBjb25uZWN0KCkge1xuICAgIGNvbnN0IHBvcnQgPSA2NDYzICsgKHRoaXMudHJpZXMgJSAxMCk7XG4gICAgdGhpcy50cmllcyArPSAxO1xuXG4gICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQoXG4gICAgICBgd3M6Ly8xMjcuMC4wLjE6JHtwb3J0fS8/dj0xJmNsaWVudF9pZD0ke3RoaXMuY2xpZW50LmNsaWVudElkfWAsXG4gICAgICBicm93c2VyID8gdW5kZWZpbmVkIDogeyBvcmlnaW46IHRoaXMuY2xpZW50Lm9wdGlvbnMub3JpZ2luIH0sXG4gICAgKTtcbiAgICB0aGlzLndzLm9ub3BlbiA9IHRoaXMub25PcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cy5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cy5vbmVycm9yID0gdGhpcy5vbkVycm9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cy5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICB9XG5cbiAgb25DbG9zZShldmVudCkge1xuICAgIGlmICghZXZlbnQud2FzQ2xlYW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCdjbG9zZScsIGV2ZW50KTtcbiAgfVxuXG4gIG9uRXJyb3IoZXZlbnQpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgIH0gY2F0Y2gge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG4gICAgaWYgKHRoaXMudHJpZXMgPiAyMCkge1xuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGV2ZW50LmVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgfSwgMjUwKTtcbiAgICB9XG4gIH1cblxuICBvbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCB1bnBhY2soZXZlbnQuZGF0YSkpO1xuICB9XG5cbiAgc2VuZChkYXRhKSB7XG4gICAgdGhpcy53cy5zZW5kKHBhY2soZGF0YSkpO1xuICB9XG5cbiAgcGluZygpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHktZnVuY3Rpb25cblxuICBjbG9zZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHIpID0+IHtcbiAgICAgIHRoaXMub25jZSgnY2xvc2UnLCByKTtcbiAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlNvY2tldFRyYW5zcG9ydDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlwYzogcmVxdWlyZSgnLi9pcGMnKSxcbiAgd2Vic29ja2V0OiByZXF1aXJlKCcuL3dlYnNvY2tldCcpLFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCB7IHNldFRpbWVvdXQsIGNsZWFyVGltZW91dCB9ID0gcmVxdWlyZSgndGltZXJzJyk7XG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbmNvbnN0IHRyYW5zcG9ydHMgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMnKTtcbmNvbnN0IHsgUlBDQ29tbWFuZHMsIFJQQ0V2ZW50cywgUmVsYXRpb25zaGlwVHlwZXMgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCB7IHBpZDogZ2V0UGlkLCB1dWlkIH0gPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZnVuY3Rpb24gc3ViS2V5KGV2ZW50LCBhcmdzKSB7XG4gIHJldHVybiBgJHtldmVudH0ke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWA7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge1JQQ0NsaWVudE9wdGlvbnN9XG4gKiBAZXh0ZW5kcyB7Q2xpZW50T3B0aW9uc31cbiAqIEBwcm9wIHtzdHJpbmd9IHRyYW5zcG9ydCBSUEMgdHJhbnNwb3J0LiBvbmUgb2YgYGlwY2Agb3IgYHdlYnNvY2tldGBcbiAqL1xuXG4vKipcbiAqIFRoZSBtYWluIGh1YiBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBEaXNjb3JkIFJQQ1xuICogQGV4dGVuZHMge0Jhc2VDbGllbnR9XG4gKi9cbmNsYXNzIFJQQ0NsaWVudCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1JQQ0NsaWVudE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIGZvciB0aGUgY2xpZW50LlxuICAgKiBZb3UgbXVzdCBwcm92aWRlIGEgdHJhbnNwb3J0XG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBudWxsO1xuICAgIHRoaXMuY2xpZW50SWQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXBwbGljYXRpb24gdXNlZCBpbiB0aGlzIGNsaWVudFxuICAgICAqIEB0eXBlIHs/Q2xpZW50QXBwbGljYXRpb259XG4gICAgICovXG4gICAgdGhpcy5hcHBsaWNhdGlvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBVc2VyIHVzZWQgaW4gdGhpcyBhcHBsaWNhdGlvblxuICAgICAqIEB0eXBlIHs/VXNlcn1cbiAgICAgKi9cbiAgICB0aGlzLnVzZXIgPSBudWxsO1xuXG4gICAgY29uc3QgVHJhbnNwb3J0ID0gdHJhbnNwb3J0c1tvcHRpb25zLnRyYW5zcG9ydF07XG4gICAgaWYgKCFUcmFuc3BvcnQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JQQ19JTlZBTElEX1RSQU5TUE9SVCcsIG9wdGlvbnMudHJhbnNwb3J0KTtcbiAgICB9XG5cbiAgICB0aGlzLmZldGNoID0gKG1ldGhvZCwgcGF0aCwgeyBkYXRhLCBxdWVyeSB9ID0ge30pID0+XG4gICAgICBmZXRjaChgJHt0aGlzLmZldGNoLmVuZHBvaW50fSR7cGF0aH0ke3F1ZXJ5ID8gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeSkgOiAnJ31gLCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmFjY2Vzc1Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KS50aGVuKGFzeW5jIChyKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByLmpzb24oKTtcbiAgICAgICAgaWYgKCFyLm9rKSB7XG4gICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcihyLnN0YXR1cyk7XG4gICAgICAgICAgZS5ib2R5ID0gYm9keTtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2R5O1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmZldGNoLmVuZHBvaW50ID0gJ2h0dHBzOi8vZGlzY29yZC5jb20vYXBpJztcblxuICAgIC8qKlxuICAgICAqIFJhdyB0cmFuc3BvcnQgdXNlcmRcbiAgICAgKiBAdHlwZSB7UlBDVHJhbnNwb3J0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50cmFuc3BvcnQgPSBuZXcgVHJhbnNwb3J0KHRoaXMpO1xuICAgIHRoaXMudHJhbnNwb3J0Lm9uKCdtZXNzYWdlJywgdGhpcy5fb25ScGNNZXNzYWdlLmJpbmQodGhpcykpO1xuXG4gICAgLyoqXG4gICAgICogTWFwIG9mIG5vbmNlcyBiZWluZyBleHBlY3RlZCBmcm9tIHRoZSB0cmFuc3BvcnRcbiAgICAgKiBAdHlwZSB7TWFwfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZWN0aW5nID0gbmV3IE1hcCgpO1xuXG4gICAgdGhpcy5fY29ubmVjdFByb21pc2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGFuZCBjb25uZWN0IHRvIFJQQ1xuICAgKi9cbiAgY29ubmVjdChjbGllbnRJZCkge1xuICAgIGlmICh0aGlzLl9jb25uZWN0UHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICAgIH1cbiAgICB0aGlzLl9jb25uZWN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChuZXcgRXJyb3IoJ1JQQ19DT05ORUNUSU9OX1RJTUVPVVQnKSksIDEwZTMpO1xuICAgICAgdGltZW91dC51bnJlZigpO1xuICAgICAgdGhpcy5vbmNlKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50cmFuc3BvcnQub25jZSgnY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2V4cGVjdGluZy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgZS5yZWplY3QobmV3IEVycm9yKCdjb25uZWN0aW9uIGNsb3NlZCcpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdCgnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gY2xvc2VkJykpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5jb25uZWN0KCkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdFByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge1JQQ0xvZ2luT3B0aW9uc31cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIENsaWVudCBJRFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2NsaWVudFNlY3JldF0gQ2xpZW50IHNlY3JldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2Vzc1Rva2VuXSBBY2Nlc3MgdG9rZW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtycGNUb2tlbl0gUlBDIHRva2VuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdG9rZW5FbmRwb2ludF0gVG9rZW4gZW5kcG9pbnRcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3Njb3Blc10gU2NvcGVzIHRvIGF1dGhvcml6ZSB3aXRoXG4gICAqL1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhdXRoZW50aWNhdGlvbiBmbG93LiBBdXRvbWF0aWNhbGx5IGNhbGxzIENsaWVudCNjb25uZWN0IGlmIG5lZWRlZC5cbiAgICogQHBhcmFtIHtSUENMb2dpbk9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgYXV0aGVudGljYXRpb24uXG4gICAqIEF0IGxlYXN0IG9uZSBwcm9wZXJ0eSBtdXN0IGJlIHByb3ZpZGVkIHRvIHBlcmZvcm0gbG9naW4uXG4gICAqIEBleGFtcGxlIGNsaWVudC5sb2dpbih7IGNsaWVudElkOiAnMTIzNDU2NycsIGNsaWVudFNlY3JldDogJ2FiY2RlZjEyMycgfSk7XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJQQ0NsaWVudD59XG4gICAqL1xuICBhc3luYyBsb2dpbihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgeyBjbGllbnRJZCwgYWNjZXNzVG9rZW4gfSA9IG9wdGlvbnM7XG4gICAgYXdhaXQgdGhpcy5jb25uZWN0KGNsaWVudElkKTtcbiAgICBpZiAoIW9wdGlvbnMuc2NvcGVzKSB7XG4gICAgICB0aGlzLmVtaXQoJ3JlYWR5Jyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKCFhY2Nlc3NUb2tlbikge1xuICAgICAgYWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLmF1dGhvcml6ZShvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlKGFjY2Vzc1Rva2VuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbWQgQ29tbWFuZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2FyZ3M9e31dIEFyZ3VtZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V2dF0gRXZlbnRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZXF1ZXN0KGNtZCwgYXJncywgZXZ0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG5vbmNlID0gdXVpZCgpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuc2VuZCh7IGNtZCwgYXJncywgZXZ0LCBub25jZSB9KTtcbiAgICAgIHRoaXMuX2V4cGVjdGluZy5zZXQobm9uY2UsIHsgcmVzb2x2ZSwgcmVqZWN0IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaGFuZGxlclxuICAgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBtZXNzYWdlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25ScGNNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZS5jbWQgPT09IFJQQ0NvbW1hbmRzLkRJU1BBVENIICYmIG1lc3NhZ2UuZXZ0ID09PSBSUENFdmVudHMuUkVBRFkpIHtcbiAgICAgIGlmIChtZXNzYWdlLmRhdGEudXNlcikge1xuICAgICAgICB0aGlzLnVzZXIgPSBtZXNzYWdlLmRhdGEudXNlcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCgnY29ubmVjdGVkJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9leHBlY3RpbmcuaGFzKG1lc3NhZ2Uubm9uY2UpKSB7XG4gICAgICBjb25zdCB7IHJlc29sdmUsIHJlamVjdCB9ID0gdGhpcy5fZXhwZWN0aW5nLmdldChtZXNzYWdlLm5vbmNlKTtcbiAgICAgIGlmIChtZXNzYWdlLmV2dCA9PT0gJ0VSUk9SJykge1xuICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKG1lc3NhZ2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgZS5jb2RlID0gbWVzc2FnZS5kYXRhLmNvZGU7XG4gICAgICAgIGUuZGF0YSA9IG1lc3NhZ2UuZGF0YTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShtZXNzYWdlLmRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZXhwZWN0aW5nLmRlbGV0ZShtZXNzYWdlLm5vbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0KG1lc3NhZ2UuZXZ0LCBtZXNzYWdlLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRob3JpemVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIGF1dGhvcml6ZSh7IHNjb3BlcywgY2xpZW50U2VjcmV0LCBycGNUb2tlbiwgcmVkaXJlY3RVcmksIHByb21wdCB9ID0ge30pIHtcbiAgICBpZiAoY2xpZW50U2VjcmV0ICYmIHJwY1Rva2VuID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgdGhpcy5mZXRjaCgnUE9TVCcsICcvb2F1dGgyL3Rva2VuL3JwYycsIHtcbiAgICAgICAgZGF0YTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIHJwY1Rva2VuID0gYm9keS5ycGNfdG9rZW47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ0FVVEhPUklaRScsIHtcbiAgICAgIHNjb3BlcyxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcbiAgICAgIHByb21wdCxcbiAgICAgIHJwY190b2tlbjogcnBjVG9rZW4sXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2goJ1BPU1QnLCAnL29hdXRoMi90b2tlbicsIHtcbiAgICAgIGRhdGE6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgICAgY29kZSxcbiAgICAgICAgZ3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZScsXG4gICAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmksXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS5hY2Nlc3NfdG9rZW47XG4gIH1cblxuICAvKipcbiAgICogQXV0aGVudGljYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY2Nlc3NUb2tlbiBhY2Nlc3MgdG9rZW5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhdXRoZW50aWNhdGUoYWNjZXNzVG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdBVVRIRU5USUNBVEUnLCB7IGFjY2Vzc190b2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAgIC50aGVuKCh7IGFwcGxpY2F0aW9uLCB1c2VyIH0pID0+IHtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEZldGNoIGEgZ3VpbGRcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIEd1aWxkIElEXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZW91dF0gVGltZW91dCByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEd1aWxkPn1cbiAgICovXG4gIGdldEd1aWxkKGlkLCB0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfR1VJTEQsIHsgZ3VpbGRfaWQ6IGlkLCB0aW1lb3V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIGFsbCBndWlsZHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lb3V0XSBUaW1lb3V0IHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8Q29sbGVjdGlvbjxTbm93Zmxha2UsIEd1aWxkPj59XG4gICAqL1xuICBnZXRHdWlsZHModGltZW91dCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuR0VUX0dVSUxEUywgeyB0aW1lb3V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNoYW5uZWxcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIENoYW5uZWwgSURcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lb3V0XSBUaW1lb3V0IHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8Q2hhbm5lbD59XG4gICAqL1xuICBnZXRDaGFubmVsKGlkLCB0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfQ0hBTk5FTCwgeyBjaGFubmVsX2lkOiBpZCwgdGltZW91dCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGNoYW5uZWxzXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBbaWRdIEd1aWxkIElEXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZW91dF0gVGltZW91dCByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbGxlY3Rpb248U25vd2ZsYWtlLCBDaGFubmVsPj59XG4gICAqL1xuICBhc3luYyBnZXRDaGFubmVscyhpZCwgdGltZW91dCkge1xuICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IGF3YWl0IHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfQ0hBTk5FTFMsIHtcbiAgICAgIHRpbWVvdXQsXG4gICAgICBndWlsZF9pZDogaWQsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoYW5uZWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtDZXJ0aWZpZWREZXZpY2V9XG4gICAqIEBwcm9wIHtzdHJpbmd9IHR5cGUgT25lIG9mIGBBVURJT19JTlBVVGAsIGBBVURJT19PVVRQVVRgLCBgVklERU9fSU5QVVRgXG4gICAqIEBwcm9wIHtzdHJpbmd9IHV1aWQgVGhpcyBkZXZpY2UncyBXaW5kb3dzIFVVSURcbiAgICogQHByb3Age29iamVjdH0gdmVuZG9yIFZlbmRvciBpbmZvcm1hdGlvblxuICAgKiBAcHJvcCB7c3RyaW5nfSB2ZW5kb3IubmFtZSBWZW5kb3IncyBuYW1lXG4gICAqIEBwcm9wIHtzdHJpbmd9IHZlbmRvci51cmwgVmVuZG9yJ3MgdXJsXG4gICAqIEBwcm9wIHtvYmplY3R9IG1vZGVsIE1vZGVsIGluZm9ybWF0aW9uXG4gICAqIEBwcm9wIHtzdHJpbmd9IG1vZGVsLm5hbWUgTW9kZWwncyBuYW1lXG4gICAqIEBwcm9wIHtzdHJpbmd9IG1vZGVsLnVybCBNb2RlbCdzIHVybFxuICAgKiBAcHJvcCB7c3RyaW5nW119IHJlbGF0ZWQgQXJyYXkgb2YgcmVsYXRlZCBwcm9kdWN0J3MgV2luZG93cyBVVUlEc1xuICAgKiBAcHJvcCB7Ym9vbGVhbn0gZWNob0NhbmNlbGxhdGlvbiBJZiB0aGUgZGV2aWNlIGhhcyBlY2hvIGNhbmNlbGxhdGlvblxuICAgKiBAcHJvcCB7Ym9vbGVhbn0gbm9pc2VTdXBwcmVzc2lvbiBJZiB0aGUgZGV2aWNlIGhhcyBub2lzZSBzdXBwcmVzc2lvblxuICAgKiBAcHJvcCB7Ym9vbGVhbn0gYXV0b21hdGljR2FpbkNvbnRyb2wgSWYgdGhlIGRldmljZSBoYXMgYXV0b21hdGljIGdhaW4gY29udHJvbFxuICAgKiBAcHJvcCB7Ym9vbGVhbn0gaGFyZHdhcmVNdXRlIElmIHRoZSBkZXZpY2UgaGFzIGEgaGFyZHdhcmUgbXV0ZVxuICAgKi9cblxuICAvKipcbiAgICogVGVsbCBkaXNjb3JkIHdoaWNoIGRldmljZXMgYXJlIGNlcnRpZmllZFxuICAgKiBAcGFyYW0ge0NlcnRpZmllZERldmljZVtdfSBkZXZpY2VzIENlcnRpZmllZCBkZXZpY2VzIHRvIHNlbmQgdG8gZGlzY29yZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldENlcnRpZmllZERldmljZXMoZGV2aWNlcykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VUX0NFUlRJRklFRF9ERVZJQ0VTLCB7XG4gICAgICBkZXZpY2VzOiBkZXZpY2VzLm1hcCgoZCkgPT4gKHtcbiAgICAgICAgdHlwZTogZC50eXBlLFxuICAgICAgICBpZDogZC51dWlkLFxuICAgICAgICB2ZW5kb3I6IGQudmVuZG9yLFxuICAgICAgICBtb2RlbDogZC5tb2RlbCxcbiAgICAgICAgcmVsYXRlZDogZC5yZWxhdGVkLFxuICAgICAgICBlY2hvX2NhbmNlbGxhdGlvbjogZC5lY2hvQ2FuY2VsbGF0aW9uLFxuICAgICAgICBub2lzZV9zdXBwcmVzc2lvbjogZC5ub2lzZVN1cHByZXNzaW9uLFxuICAgICAgICBhdXRvbWF0aWNfZ2Fpbl9jb250cm9sOiBkLmF1dG9tYXRpY0dhaW5Db250cm9sLFxuICAgICAgICBoYXJkd2FyZV9tdXRlOiBkLmhhcmR3YXJlTXV0ZSxcbiAgICAgIH0pKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7VXNlclZvaWNlU2V0dGluZ3N9XG4gICAqIEBwcm9wIHtTbm93Zmxha2V9IGlkIElEIG9mIHRoZSB1c2VyIHRoZXNlIHNldHRpbmdzIGFwcGx5IHRvXG4gICAqIEBwcm9wIHs/T2JqZWN0fSBbcGFuXSBQYW4gc2V0dGluZ3MsIGFuIG9iamVjdCB3aXRoIGBsZWZ0YCBhbmQgYHJpZ2h0YCBzZXQgYmV0d2VlblxuICAgKiAwLjAgYW5kIDEuMCwgaW5jbHVzaXZlXG4gICAqIEBwcm9wIHs/bnVtYmVyfSBbdm9sdW1lPTEwMF0gVGhlIHZvbHVtZVxuICAgKiBAcHJvcCB7Ym9vbH0gW211dGVdIElmIHRoZSB1c2VyIGlzIG11dGVkXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZvaWNlIHNldHRpbmdzIGZvciBhIHVzZXIsIGJ5IGlkXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBJRCBvZiB0aGUgdXNlciB0byBzZXRcbiAgICogQHBhcmFtIHtVc2VyVm9pY2VTZXR0aW5nc30gc2V0dGluZ3MgU2V0dGluZ3NcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRVc2VyVm9pY2VTZXR0aW5ncyhpZCwgc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFVF9VU0VSX1ZPSUNFX1NFVFRJTkdTLCB7XG4gICAgICB1c2VyX2lkOiBpZCxcbiAgICAgIHBhbjogc2V0dGluZ3MucGFuLFxuICAgICAgbXV0ZTogc2V0dGluZ3MubXV0ZSxcbiAgICAgIHZvbHVtZTogc2V0dGluZ3Mudm9sdW1lLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhlIHVzZXIgdG8gYSB2b2ljZSBjaGFubmVsXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBJRCBvZiB0aGUgdm9pY2UgY2hhbm5lbFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVvdXRdIFRpbWVvdXQgZm9yIHRoZSBjb21tYW5kXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZm9yY2VdIEZvcmNlIHRoaXMgbW92ZS4gVGhpcyBzaG91bGQgb25seSBiZSBkb25lIGlmIHlvdVxuICAgKiBoYXZlIGV4cGxpY2l0IHBlcm1pc3Npb24gZnJvbSB0aGUgdXNlci5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZWxlY3RWb2ljZUNoYW5uZWwoaWQsIHsgdGltZW91dCwgZm9yY2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFTEVDVF9WT0lDRV9DSEFOTkVMLCB7IGNoYW5uZWxfaWQ6IGlkLCB0aW1lb3V0LCBmb3JjZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSB1c2VyIHRvIGEgdGV4dCBjaGFubmVsXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBJRCBvZiB0aGUgdm9pY2UgY2hhbm5lbFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVvdXRdIFRpbWVvdXQgZm9yIHRoZSBjb21tYW5kXG4gICAqIGhhdmUgZXhwbGljaXQgcGVybWlzc2lvbiBmcm9tIHRoZSB1c2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNlbGVjdFRleHRDaGFubmVsKGlkLCB7IHRpbWVvdXQgfSA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRUxFQ1RfVEVYVF9DSEFOTkVMLCB7IGNoYW5uZWxfaWQ6IGlkLCB0aW1lb3V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHZvaWNlIHNldHRpbmdzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0Vm9pY2VTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkdFVF9WT0lDRV9TRVRUSU5HUylcbiAgICAgIC50aGVuKChzKSA9PiAoe1xuICAgICAgICBhdXRvbWF0aWNHYWluQ29udHJvbDogcy5hdXRvbWF0aWNfZ2Fpbl9jb250cm9sLFxuICAgICAgICBlY2hvQ2FuY2VsbGF0aW9uOiBzLmVjaG9fY2FuY2VsbGF0aW9uLFxuICAgICAgICBub2lzZVN1cHByZXNzaW9uOiBzLm5vaXNlX3N1cHByZXNzaW9uLFxuICAgICAgICBxb3M6IHMucW9zLFxuICAgICAgICBzaWxlbmNlV2FybmluZzogcy5zaWxlbmNlX3dhcm5pbmcsXG4gICAgICAgIGRlYWY6IHMuZGVhZixcbiAgICAgICAgbXV0ZTogcy5tdXRlLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIGF2YWlsYWJsZURldmljZXM6IHMuaW5wdXQuYXZhaWxhYmxlX2RldmljZXMsXG4gICAgICAgICAgZGV2aWNlOiBzLmlucHV0LmRldmljZV9pZCxcbiAgICAgICAgICB2b2x1bWU6IHMuaW5wdXQudm9sdW1lLFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBhdmFpbGFibGVEZXZpY2VzOiBzLm91dHB1dC5hdmFpbGFibGVfZGV2aWNlcyxcbiAgICAgICAgICBkZXZpY2U6IHMub3V0cHV0LmRldmljZV9pZCxcbiAgICAgICAgICB2b2x1bWU6IHMub3V0cHV0LnZvbHVtZSxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZToge1xuICAgICAgICAgIHR5cGU6IHMubW9kZS50eXBlLFxuICAgICAgICAgIGF1dG9UaHJlc2hvbGQ6IHMubW9kZS5hdXRvX3RocmVzaG9sZCxcbiAgICAgICAgICB0aHJlc2hvbGQ6IHMubW9kZS50aHJlc2hvbGQsXG4gICAgICAgICAgc2hvcnRjdXQ6IHMubW9kZS5zaG9ydGN1dCxcbiAgICAgICAgICBkZWxheTogcy5tb2RlLmRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjdXJyZW50IHZvaWNlIHNldHRpbmdzLCBvdmVycmlkaW5nIHRoZSBjdXJyZW50IHNldHRpbmdzIHVudGlsIHRoaXMgc2Vzc2lvbiBkaXNjb25uZWN0cy5cbiAgICogVGhpcyBhbHNvIGxvY2tzIHRoZSBzZXR0aW5ncyBmb3IgYW55IG90aGVyIHJwYyBzZXNzaW9ucyB3aGljaCBtYXkgYmUgY29ubmVjdGVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyBTZXR0aW5nc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFZvaWNlU2V0dGluZ3MoYXJncykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VUX1ZPSUNFX1NFVFRJTkdTLCB7XG4gICAgICBhdXRvbWF0aWNfZ2Fpbl9jb250cm9sOiBhcmdzLmF1dG9tYXRpY0dhaW5Db250cm9sLFxuICAgICAgZWNob19jYW5jZWxsYXRpb246IGFyZ3MuZWNob0NhbmNlbGxhdGlvbixcbiAgICAgIG5vaXNlX3N1cHByZXNzaW9uOiBhcmdzLm5vaXNlU3VwcHJlc3Npb24sXG4gICAgICBxb3M6IGFyZ3MucW9zLFxuICAgICAgc2lsZW5jZV93YXJuaW5nOiBhcmdzLnNpbGVuY2VXYXJuaW5nLFxuICAgICAgZGVhZjogYXJncy5kZWFmLFxuICAgICAgbXV0ZTogYXJncy5tdXRlLFxuICAgICAgaW5wdXQ6IGFyZ3MuaW5wdXQgPyB7XG4gICAgICAgIGRldmljZV9pZDogYXJncy5pbnB1dC5kZXZpY2UsXG4gICAgICAgIHZvbHVtZTogYXJncy5pbnB1dC52b2x1bWUsXG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgb3V0cHV0OiBhcmdzLm91dHB1dCA/IHtcbiAgICAgICAgZGV2aWNlX2lkOiBhcmdzLm91dHB1dC5kZXZpY2UsXG4gICAgICAgIHZvbHVtZTogYXJncy5vdXRwdXQudm9sdW1lLFxuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIG1vZGU6IGFyZ3MubW9kZSA/IHtcbiAgICAgICAgdHlwZTogYXJncy5tb2RlLnR5cGUsXG4gICAgICAgIGF1dG9fdGhyZXNob2xkOiBhcmdzLm1vZGUuYXV0b1RocmVzaG9sZCxcbiAgICAgICAgdGhyZXNob2xkOiBhcmdzLm1vZGUudGhyZXNob2xkLFxuICAgICAgICBzaG9ydGN1dDogYXJncy5tb2RlLnNob3J0Y3V0LFxuICAgICAgICBkZWxheTogYXJncy5tb2RlLmRlbGF5LFxuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXB0dXJlIGEgc2hvcnRjdXQgdXNpbmcgdGhlIGNsaWVudFxuICAgKiBUaGUgY2FsbGJhY2sgdGFrZXMgKGtleSwgc3RvcCkgd2hlcmUgYHN0b3BgIGlzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHN0b3AgY2FwdHVyaW5nLlxuICAgKiBUaGlzIGBzdG9wYCBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgZGlzY29ubmVjdGluZyBvciBlbHNlIHRoZSB1c2VyIHdpbGwgaGF2ZVxuICAgKiB0byByZXN0YXJ0IHRoZWlyIGNsaWVudC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgaGFuZGxpbmcga2V5c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGdW5jdGlvbj59XG4gICAqL1xuICBjYXB0dXJlU2hvcnRjdXQoY2FsbGJhY2spIHtcbiAgICBjb25zdCBzdWJpZCA9IHN1YktleShSUENFdmVudHMuQ0FQVFVSRV9TSE9SVENVVF9DSEFOR0UpO1xuICAgIGNvbnN0IHN0b3AgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmRlbGV0ZShzdWJpZCk7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkNBUFRVUkVfU0hPUlRDVVQsIHsgYWN0aW9uOiAnU1RPUCcgfSk7XG4gICAgfTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnNldChzdWJpZCwgKHsgc2hvcnRjdXQgfSkgPT4ge1xuICAgICAgY2FsbGJhY2soc2hvcnRjdXQsIHN0b3ApO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuQ0FQVFVSRV9TSE9SVENVVCwgeyBhY3Rpb246ICdTVEFSVCcgfSlcbiAgICAgIC50aGVuKCgpID0+IHN0b3ApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByZXNlbmNlIGZvciB0aGUgbG9nZ2VkIGluIHVzZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzIFRoZSByaWNoIHByZXNlbmNlIHRvIHBhc3MuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcGlkXSBUaGUgYXBwbGljYXRpb24ncyBwcm9jZXNzIElELiBEZWZhdWx0cyB0byB0aGUgZXhlY3V0aW5nIHByb2Nlc3MnIFBJRC5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRBY3Rpdml0eShhcmdzID0ge30sIHBpZCA9IGdldFBpZCgpKSB7XG4gICAgbGV0IHRpbWVzdGFtcHM7XG4gICAgbGV0IGFzc2V0cztcbiAgICBsZXQgcGFydHk7XG4gICAgbGV0IHNlY3JldHM7XG4gICAgaWYgKGFyZ3Muc3RhcnRUaW1lc3RhbXAgfHwgYXJncy5lbmRUaW1lc3RhbXApIHtcbiAgICAgIHRpbWVzdGFtcHMgPSB7XG4gICAgICAgIHN0YXJ0OiBhcmdzLnN0YXJ0VGltZXN0YW1wLFxuICAgICAgICBlbmQ6IGFyZ3MuZW5kVGltZXN0YW1wLFxuICAgICAgfTtcbiAgICAgIGlmICh0aW1lc3RhbXBzLnN0YXJ0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aW1lc3RhbXBzLnN0YXJ0ID0gTWF0aC5yb3VuZCh0aW1lc3RhbXBzLnN0YXJ0LmdldFRpbWUoKSk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXN0YW1wcy5lbmQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRpbWVzdGFtcHMuZW5kID0gTWF0aC5yb3VuZCh0aW1lc3RhbXBzLmVuZC5nZXRUaW1lKCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzdGFtcHMuc3RhcnQgPiAyMTQ3NDgzNjQ3MDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0aW1lc3RhbXBzLnN0YXJ0IG11c3QgZml0IGludG8gYSB1bml4IHRpbWVzdGFtcCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzdGFtcHMuZW5kID4gMjE0NzQ4MzY0NzAwMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGltZXN0YW1wcy5lbmQgbXVzdCBmaXQgaW50byBhIHVuaXggdGltZXN0YW1wJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGFyZ3MubGFyZ2VJbWFnZUtleSB8fCBhcmdzLmxhcmdlSW1hZ2VUZXh0XG4gICAgICB8fCBhcmdzLnNtYWxsSW1hZ2VLZXkgfHwgYXJncy5zbWFsbEltYWdlVGV4dFxuICAgICkge1xuICAgICAgYXNzZXRzID0ge1xuICAgICAgICBsYXJnZV9pbWFnZTogYXJncy5sYXJnZUltYWdlS2V5LFxuICAgICAgICBsYXJnZV90ZXh0OiBhcmdzLmxhcmdlSW1hZ2VUZXh0LFxuICAgICAgICBzbWFsbF9pbWFnZTogYXJncy5zbWFsbEltYWdlS2V5LFxuICAgICAgICBzbWFsbF90ZXh0OiBhcmdzLnNtYWxsSW1hZ2VUZXh0LFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGFyZ3MucGFydHlTaXplIHx8IGFyZ3MucGFydHlJZCB8fCBhcmdzLnBhcnR5TWF4KSB7XG4gICAgICBwYXJ0eSA9IHsgaWQ6IGFyZ3MucGFydHlJZCB9O1xuICAgICAgaWYgKGFyZ3MucGFydHlTaXplIHx8IGFyZ3MucGFydHlNYXgpIHtcbiAgICAgICAgcGFydHkuc2l6ZSA9IFthcmdzLnBhcnR5U2l6ZSwgYXJncy5wYXJ0eU1heF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcmdzLm1hdGNoU2VjcmV0IHx8IGFyZ3Muam9pblNlY3JldCB8fCBhcmdzLnNwZWN0YXRlU2VjcmV0KSB7XG4gICAgICBzZWNyZXRzID0ge1xuICAgICAgICBtYXRjaDogYXJncy5tYXRjaFNlY3JldCxcbiAgICAgICAgam9pbjogYXJncy5qb2luU2VjcmV0LFxuICAgICAgICBzcGVjdGF0ZTogYXJncy5zcGVjdGF0ZVNlY3JldCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRVRfQUNUSVZJVFksIHtcbiAgICAgIHBpZCxcbiAgICAgIGFjdGl2aXR5OiB7XG4gICAgICAgIHN0YXRlOiBhcmdzLnN0YXRlLFxuICAgICAgICBkZXRhaWxzOiBhcmdzLmRldGFpbHMsXG4gICAgICAgIHRpbWVzdGFtcHMsXG4gICAgICAgIGFzc2V0cyxcbiAgICAgICAgcGFydHksXG4gICAgICAgIHNlY3JldHMsXG4gICAgICAgIGJ1dHRvbnM6IGFyZ3MuYnV0dG9ucyxcbiAgICAgICAgaW5zdGFuY2U6ICEhYXJncy5pbnN0YW5jZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBjdXJyZW50bHkgc2V0IHByZXNlbmNlLCBpZiBhbnkuIFRoaXMgd2lsbCBoaWRlIHRoZSBcIlBsYXlpbmcgWFwiIG1lc3NhZ2VcbiAgICogZGlzcGxheWVkIGJlbG93IHRoZSB1c2VyJ3MgbmFtZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwaWRdIFRoZSBhcHBsaWNhdGlvbidzIHByb2Nlc3MgSUQuIERlZmF1bHRzIHRvIHRoZSBleGVjdXRpbmcgcHJvY2VzcycgUElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGNsZWFyQWN0aXZpdHkocGlkID0gZ2V0UGlkKCkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFVF9BQ1RJVklUWSwge1xuICAgICAgcGlkLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludml0ZSBhIHVzZXIgdG8gam9pbiB0aGUgZ2FtZSB0aGUgUlBDIHVzZXIgaXMgY3VycmVudGx5IHBsYXlpbmdcbiAgICogQHBhcmFtIHtVc2VyfSB1c2VyIFRoZSB1c2VyIHRvIGludml0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNlbmRKb2luSW52aXRlKHVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFTkRfQUNUSVZJVFlfSk9JTl9JTlZJVEUsIHtcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHRvIGpvaW4gdGhlIGdhbWUgdGhlIHVzZXIgaXMgcGxheWluZ1xuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgVGhlIHVzZXIgd2hvc2UgZ2FtZSB5b3Ugd2FudCB0byByZXF1ZXN0IHRvIGpvaW5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZW5kSm9pblJlcXVlc3QodXNlcikge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VORF9BQ1RJVklUWV9KT0lOX1JFUVVFU1QsIHtcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWplY3QgYSBqb2luIHJlcXVlc3QgZnJvbSBhIHVzZXJcbiAgICogQHBhcmFtIHtVc2VyfSB1c2VyIFRoZSB1c2VyIHdob3NlIHJlcXVlc3QgeW91IHdpc2ggdG8gcmVqZWN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgY2xvc2VKb2luUmVxdWVzdCh1c2VyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DTE9TRV9BQ1RJVklUWV9KT0lOX1JFUVVFU1QsIHtcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUxvYmJ5KHR5cGUsIGNhcGFjaXR5LCBtZXRhZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuQ1JFQVRFX0xPQkJZLCB7XG4gICAgICB0eXBlLFxuICAgICAgY2FwYWNpdHksXG4gICAgICBtZXRhZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUxvYmJ5KGxvYmJ5LCB7IHR5cGUsIG93bmVyLCBjYXBhY2l0eSwgbWV0YWRhdGEgfSA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5VUERBVEVfTE9CQlksIHtcbiAgICAgIGlkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICAgIHR5cGUsXG4gICAgICBvd25lcl9pZDogKG93bmVyICYmIG93bmVyLmlkKSB8fCBvd25lcixcbiAgICAgIGNhcGFjaXR5LFxuICAgICAgbWV0YWRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVMb2JieShsb2JieSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuREVMRVRFX0xPQkJZLCB7XG4gICAgICBpZDogbG9iYnkuaWQgfHwgbG9iYnksXG4gICAgfSk7XG4gIH1cblxuICBjb25uZWN0VG9Mb2JieShpZCwgc2VjcmV0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DT05ORUNUX1RPX0xPQkJZLCB7XG4gICAgICBpZCxcbiAgICAgIHNlY3JldCxcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRUb0xvYmJ5KGxvYmJ5LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRU5EX1RPX0xPQkJZLCB7XG4gICAgICBpZDogbG9iYnkuaWQgfHwgbG9iYnksXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgZGlzY29ubmVjdEZyb21Mb2JieShsb2JieSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuRElTQ09OTkVDVF9GUk9NX0xPQkJZLCB7XG4gICAgICBpZDogbG9iYnkuaWQgfHwgbG9iYnksXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVMb2JieU1lbWJlcihsb2JieSwgdXNlciwgbWV0YWRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlVQREFURV9MT0JCWV9NRU1CRVIsIHtcbiAgICAgIGxvYmJ5X2lkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICAgIG1ldGFkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmVsYXRpb25zaGlwcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKFJlbGF0aW9uc2hpcFR5cGVzKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkdFVF9SRUxBVElPTlNISVBTKVxuICAgICAgLnRoZW4oKG8pID0+IG8ucmVsYXRpb25zaGlwcy5tYXAoKHIpID0+ICh7XG4gICAgICAgIC4uLnIsXG4gICAgICAgIHR5cGU6IHR5cGVzW3IudHlwZV0sXG4gICAgICB9KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgTmFtZSBvZiBldmVudCBlLmcuIGBNRVNTQUdFX0NSRUFURWBcbiAgICogQHBhcmFtIHtPYmplY3R9IFthcmdzXSBBcmdzIGZvciBldmVudCBlLmcuIGB7IGNoYW5uZWxfaWQ6ICcxMjM0JyB9YFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fVxuICAgKi9cbiAgYXN5bmMgc3Vic2NyaWJlKGV2ZW50LCBhcmdzKSB7XG4gICAgYXdhaXQgdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNVQlNDUklCRSwgYXJncywgZXZlbnQpO1xuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZTogKCkgPT4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlVOU1VCU0NSSUJFLCBhcmdzLCBldmVudCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBjbGllbnRcbiAgICovXG4gIGFzeW5jIGRlc3Ryb3koKSB7XG4gICAgYXdhaXQgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJQQ0NsaWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ2xpZW50OiByZXF1aXJlKCcuL2NsaWVudCcpLFxuICByZWdpc3RlcihpZCkge1xuICAgIHJldHVybiB1dGlsLnJlZ2lzdGVyKGBkaXNjb3JkLSR7aWR9YCk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCBPYnNpZGlhbkRpc2NvcmRSUEMgZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XHJcbiAgcGx1Z2luOiBPYnNpZGlhbkRpc2NvcmRSUEMgPSAodGhpcyBhcyBhbnkpLnBsdWdpbjtcclxuXHJcbiAgbG9nKG1lc3NhZ2U6IHN0cmluZywgc2hvd1BvcHVwczogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHNob3dQb3B1cHMpIHtcclxuICAgICAgbmV3IE5vdGljZShtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhgZGlzY29yZHJwYzogJHttZXNzYWdlfWApO1xyXG4gIH1cclxuXHJcbiAgbG9nSWdub3JlTm9Ob3RpY2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBuZXcgTm90aWNlKG1lc3NhZ2UpO1xyXG4gICAgY29uc29sZS5sb2coYGRpc2NvcmRycGM6ICR7bWVzc2FnZX1gKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERpc2NvcmRSUENTZXR0aW5ncyB7XHJcbiAgLy8gc2hvd1ZhdWx0TmFtZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgLy8gc2hvd0ZvbGRlck5hbWU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHNob3dDdXJyZW50RmlsZU5hbWU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHNob3dDb25uZWN0aW9uVGltZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93UG9wdXBzOiBib29sZWFuID0gdHJ1ZTtcclxuICBjdXN0b21WYXVsdE5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgc2hvd0ZpbGVFeHRlbnNpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICB1c2VMb2FkZWRUaW1lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29ubmVjdE9uU3RhcnQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGF1dG9IaWRlU3RhdHVzQmFyOiBib29sZWFuID0gdHJ1ZTtcclxuICBwcml2YWN5TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIHVzZUN1c3RvbVN0cmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGN1c3RvbVN0cmluZzogc3RyaW5nID0gXCJWYXVsdDogJXZhdWx0JSAlZm9sZGVyJVwiO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBQbHVnaW5TdGF0ZSB7XHJcbiAgY29ubmVjdGVkLFxyXG4gIGNvbm5lY3RpbmcsXHJcbiAgZGlzY29ubmVjdGVkLFxyXG59XHJcbiIsImltcG9ydCB7IFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJzcmMvbG9nZ2VyXCI7XHJcbmltcG9ydCBPYnNpZGlhbkRpc2NvcmRSUEMgZnJvbSBcInNyYy9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzY29yZFJQQ1NldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcigpO1xyXG5cclxuICBkaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgbGV0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBwbHVnaW46IE9ic2lkaWFuRGlzY29yZFJQQyA9ICh0aGlzIGFzIGFueSkucGx1Z2luO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgyXCIsIHsgdGV4dDogXCJEaXNjb3JkIFJpY2ggUHJlc2VuY2UgU2V0dGluZ3NcIiB9KTtcclxuXHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogXCJQcml2YWN5IFNldHRpbmdzXCIgfSk7XHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoXCJQcml2YWN5IE1vZGVcIilcclxuICAgICAgLnNldERlc2MoXCJFbmFibGUgdGhpcyB0byBoaWRlIHRoZSBuYW1lIG9mIHRoZSB2YXVsdCBhbmQgSGlkZSBmaWxlIG5hbWVzXCIpXHJcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+XHJcbiAgICAgICAgYm9vbGVhbi5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MucHJpdmFjeU1vZGUpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnByaXZhY3lNb2RlID0gdmFsdWU7XHJcbiAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgICBpZiAoYm9vbGVhbi5nZXRWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiUHJpdmFjeSBNb2RlIEVuYWJsZWRcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIlByaXZhY3kgTW9kZSBEaXNhYmxlZFwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkoXCJcIiwgXCJcIiwgXCJcIiwgXCJcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgIC8vICAgLnNldE5hbWUoXCJTaG93IEZvbGRlciBOYW1lXCIpXHJcbiAgICAvLyAgIC5zZXREZXNjKFxyXG4gICAgLy8gICAgIFwiRW5hYmxlIHRoaXMgdG8gc2hvdyB0aGUgbmFtZSBvZiB0aGUgZm9sZGVyIHlvdSBhcmUgd29ya2luZyB3aXRoLlwiXHJcbiAgICAvLyAgIClcclxuICAgIC8vICAgLmFkZFRvZ2dsZSgoYm9vbGVhbikgPT5cclxuICAgIC8vICAgICBib29sZWFuLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5zaG93Rm9sZGVyTmFtZSkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAvLyAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2hvd0ZvbGRlck5hbWUgPSB2YWx1ZTtcclxuICAgIC8vICAgICAgIHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xyXG5cclxuICAgIC8vICAgICAgIGlmIChib29sZWFuLmdldFZhbHVlKCkpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5sb2dnZXIubG9nSWdub3JlTm9Ob3RpY2UoXCJGb2xkZXIgTmFtZSBpcyBub3cgVmlzaWJsZVwiKTtcclxuICAgIC8vICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiRm9sZGVyIE5hbWUgaXMgbm8gbG9uZ2VyIFZpc2libGVcIik7XHJcbiAgICAvLyAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxyXG4gICAgLy8gICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXHJcbiAgICAvLyAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcclxuICAgIC8vICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvbixcclxuICAgIC8vICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLnBhcmVudC5uYW1lXHJcbiAgICAvLyAgICAgICApO1xyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICk7XHJcblxyXG4gICAgLy8gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAvLyAgIC5zZXROYW1lKFwiU2hvdyBWYXVsdCBOYW1lXCIpXHJcbiAgICAvLyAgIC5zZXREZXNjKFxyXG4gICAgLy8gICAgIFwiRW5hYmxlIHRoaXMgdG8gc2hvdyB0aGUgbmFtZSBvZiB0aGUgdmF1bHQgeW91IGFyZSB3b3JraW5nIHdpdGguIFdpbGwgYmUgZGlzcGxheWVkIHdoZXJlIHRoZSB2YXVsdCBuYW1lIGlzIGRpc3BsYXllZC5cIlxyXG4gICAgLy8gICApXHJcbiAgICAvLyAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+XHJcbiAgICAvLyAgICAgYm9vbGVhbi5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3Muc2hvd1ZhdWx0TmFtZSkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAvLyAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2hvd1ZhdWx0TmFtZSA9IHZhbHVlO1xyXG4gICAgLy8gICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XHJcblxyXG4gICAgLy8gICAgICAgaWYgKGJvb2xlYW4uZ2V0VmFsdWUoKSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIlZhdWx0IE5hbWUgaXMgbm93IFZpc2libGVcIik7XHJcbiAgICAvLyAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIlZhdWx0IE5hbWUgaXMgbm8gbG9uZ2VyIFZpc2libGVcIik7XHJcbiAgICAvLyAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxyXG4gICAgLy8gICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXHJcbiAgICAvLyAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcclxuICAgIC8vICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvbixcclxuICAgIC8vICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLnBhcmVudC5uYW1lXHJcbiAgICAvLyAgICAgICApO1xyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKFwiU2hvdyBDdXJyZW50IEZpbGUgTmFtZVwiKVxyXG4gICAgICAuc2V0RGVzYyhcIkVuYWJsZSB0aGlzIHRvIHNob3cgdGhlIG5hbWUgb2YgdGhlIGZpbGUgeW91IGFyZSB3b3JraW5nIG9uLlwiKVxyXG4gICAgICAuYWRkVG9nZ2xlKChib29sZWFuKSA9PlxyXG4gICAgICAgIGJvb2xlYW5cclxuICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3Muc2hvd0N1cnJlbnRGaWxlTmFtZSlcclxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnNob3dDdXJyZW50RmlsZU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYm9vbGVhbi5nZXRWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nSWdub3JlTm9Ob3RpY2UoXCJGaWxlIE5hbWUgaXMgbm93IFZpc2FibGVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nSWdub3JlTm9Ob3RpY2UoXCJGaWxlIE5hbWUgaXMgbm8gbG9uZ2VyIFZpc2FibGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcclxuICAgICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXHJcbiAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxyXG4gICAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLnBhcmVudC5uYW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAuc2V0TmFtZShcIlNob3cgRmlsZSBFeHRlbnNpb25cIilcclxuICAgICAgLnNldERlc2MoXCJFbmFibGUgdGhpcyB0byBzaG93IGZpbGUgZXh0ZW5zaW9uLlwiKVxyXG4gICAgICAuYWRkVG9nZ2xlKChib29sZWFuKSA9PlxyXG4gICAgICAgIGJvb2xlYW5cclxuICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3Muc2hvd0ZpbGVFeHRlbnNpb24pXHJcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5zaG93RmlsZUV4dGVuc2lvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcclxuICAgICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXHJcbiAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxyXG4gICAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLnBhcmVudC5uYW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDNcIiwgeyB0ZXh0OiBcIkN1c3RvbWl6YXRpb25cIiB9KTtcclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAuc2V0TmFtZShcIlNldCBDdXN0b20gVmF1bHQgTmFtZVwiKVxyXG4gICAgICAuc2V0RGVzYyhcclxuICAgICAgICBcIkNoYW5nZSB0aGUgdmF1bHQgbmFtZSBzaG93biBwdWJsaWNseS4gTGVhdmUgYmxhbmsgdG8gdXNlIHlvdXIgYWN0dWFsIHZhdWx0IG5hbWUuXCJcclxuICAgICAgKVxyXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cclxuICAgICAgICB0ZXh0LnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5jdXN0b21WYXVsdE5hbWUpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmN1c3RvbVZhdWx0TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XHJcblxyXG4gICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxyXG4gICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXHJcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcclxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvbixcclxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLnBhcmVudC5uYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAvLyAgIC5zZXROYW1lKFwiVXNlIEN1c3RvbSBhIGN1c3RvbSBtZXNzYWdlXCIpXHJcbiAgICAvLyAgIC5zZXREZXNjKFxyXG4gICAgLy8gICAgIFwiRW5hYmxlIHRoaXMgdG8gdXNlIGEgY3VzdG9tIG1lc3NhZ2UgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdC4gUGxhY2Vob2xkZXJzOiAldmF1bHQlIChWYXVsdCBOYW1lKSwgJWZvbGRlciUgKEZvbGRlciBOYW1lKSwgJWZpbGUlIChGaWxlIE5hbWUpLCAlZXh0ZW5zaW9uJSAoRmlsZSBFeHRlbnNpb24pXCJcclxuICAgIC8vICAgKVxyXG4gICAgLy8gICAuYWRkVG9nZ2xlKChib29sZWFuKSA9PlxyXG4gICAgLy8gICAgIGJvb2xlYW4uc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnVzZUN1c3RvbVN0cmluZykub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAvLyAgICAgICBwbHVnaW4uc2V0dGluZ3MudXNlQ3VzdG9tU3RyaW5nID0gdmFsdWU7XHJcbiAgICAvLyAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcclxuXHJcbiAgICAvLyAgICAgICBpZiAoYm9vbGVhbi5nZXRWYWx1ZSgpKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiVXNpbmcgQ3VzdG9tIFN0cmluZy4uLlwiKTtcclxuICAgIC8vICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiTm90IFVzaW5nIEN1c3RvbSBTdHJpbmcuLi5cIik7XHJcbiAgICAvLyAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxyXG4gICAgLy8gICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXHJcbiAgICAvLyAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcclxuICAgIC8vICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvbixcclxuICAgIC8vICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLnBhcmVudC5uYW1lXHJcbiAgICAvLyAgICAgICApO1xyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICk7XHJcblxyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoXCJTZXQgQ3VzdG9tIE1lc3NhZ2VcIilcclxuICAgICAgLnNldERlc2MoXHJcbiAgICAgICAgXCJDaGFuZ2UgdGhlIG1lc3NhZ2UgZGlzcGxheWVkIG9uIHlvdXIgcmljaCBwcmVzZW5jZS4gUGxhY2Vob2xkZXJzOiAldmF1bHQlIChWYXVsdCBOYW1lKSwgJWZvbGRlciUgKEZvbGRlciBOYW1lKSwgJWZpbGUlIChGaWxlIE5hbWUpLCAlZXh0ZW5zaW9uJSAoRmlsZSBFeHRlbnNpb24pXCJcclxuICAgICAgKVxyXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cclxuICAgICAgICB0ZXh0LnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5jdXN0b21TdHJpbmcpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmN1c3RvbVN0cmluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XHJcblxyXG4gICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxyXG4gICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXHJcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcclxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvbixcclxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLnBhcmVudC5uYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogXCJUaW1lIFNldHRpbmdzXCIgfSk7XHJcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgIC5zZXROYW1lKFwiVXNlIE9ic2lkaWFuIFRvdGFsIFRpbWVcIilcclxuICAgICAgICAuc2V0RGVzYyhcclxuICAgICAgICAgIFwiRW5hYmxlIHRvIHVzZSB0aGUgdG90YWwgdGltZSB5b3UgaGF2ZSBiZWVuIHVzaW5nIE9ic2lkaWFuLCBpbnN0ZWFkIG9mIHRoZSB0aW1lIHNwZW50IGVkaXRpbmcgYSBzaW5nbGUgZmlsZS5cIlxyXG4gICAgICAgIClcclxuICAgICAgICAuYWRkVG9nZ2xlKChib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICBib29sZWFuLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy51c2VMb2FkZWRUaW1lKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnVzZUxvYWRlZFRpbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgXHJcbiAgICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcclxuICAgICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXHJcbiAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxyXG4gICAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLnBhcmVudC5uYW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IFwiU3RhdHVzIEJhciBTZXR0aW5nc1wiIH0pO1xyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAuc2V0TmFtZShcIkF1dG9tYXRpY2FsbHkgaGlkZSBTdGF0dXMgQmFyXCIpXHJcbiAgICAgICAgLnNldERlc2MoXHJcbiAgICAgICAgICBcIkF1dG9tYXRpY2FsbHkgaGlkZSBzdGF0dXMgYmFyIGFmdGVyIHN1Y2Nlc3NmdWxseSBjb25uZWN0aW5nIHRvIERpc2NvcmQuXCJcclxuICAgICAgICApXHJcbiAgICAgICAgLmFkZFRvZ2dsZSgoYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgYm9vbGVhblxyXG4gICAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLmF1dG9IaWRlU3RhdHVzQmFyKVxyXG4gICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9IaWRlU3RhdHVzQmFyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgXHJcbiAgICAgICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxyXG4gICAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvbixcclxuICAgICAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5wYXJlbnQubmFtZVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAuc2V0TmFtZShcIlNob3cgQ29ubmVjdGVkIFRpbWVcIilcclxuICAgICAgICAuc2V0RGVzYyhcclxuICAgICAgICAgIFwiU2hvdyB0aW1lIHNwZW50IGVkaXRpbmcgZmlsZSBvciB0aW1lIGNvbm5lY3RlZCB0byBEaXNjb3JkIGluIHRoZSBzdGF0dXMgYmFyLlwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGJvb2xlYW4uc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnNob3dDb25uZWN0aW9uVGltZXIpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2hvd0Nvbm5lY3Rpb25UaW1lciA9IHZhbHVlO1xyXG4gICAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcclxuICBcclxuICAgICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxyXG4gICAgICAgICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcclxuICAgICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuYmFzZW5hbWUsXHJcbiAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvbixcclxuICAgICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUucGFyZW50Lm5hbWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gbmVlZGVkIHRvIG1ha2UgdGltZXIgZGlzYXBwZWFyLCBvdGhlcndpc2UgaXQgd2lsbCBmcmVlemVcclxuICAgICAgICAgICAgcGx1Z2luLnN0YXR1c0Jhci5kaXNwbGF5U3RhdGUocGx1Z2luLmdldFN0YXRlKCksIHBsdWdpbi5zZXR0aW5ncy5hdXRvSGlkZVN0YXR1c0Jhcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogXCJTdGFydHVwIFNldHRpbmdzXCIgfSk7XHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoXCJBdXRvbWF0aWNhbGx5IENvbm5lY3QgdG8gRGlzY29yZFwiKVxyXG4gICAgICAuc2V0RGVzYyhcclxuICAgICAgICBcIkF1dG9tYXRpY2FsbHkgY29ubmVjdCB0byBEaXNjb3JkIG9uIHN0YXJ0dXAuIFlvdSBjYW4gYWx3YXlzIGNsaWNrIHRoZSBzdGF0dXMgYmFyIHRvIG1hbnVhbGx5IGNvbm5lY3QuXCJcclxuICAgICAgKVxyXG4gICAgICAuYWRkVG9nZ2xlKChib29sZWFuKSA9PiB7XHJcbiAgICAgICAgYm9vbGVhbi5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuY29ubmVjdE9uU3RhcnQpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmNvbm5lY3RPblN0YXJ0ID0gdmFsdWU7XHJcbiAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkoXHJcbiAgICAgICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcclxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxyXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUucGFyZW50Lm5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDNcIiwgeyB0ZXh0OiBcIk5vdGljZSBTZXR0aW5nc1wiIH0pO1xyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKFwiU2hvdyBOb3RpY2VzXCIpXHJcbiAgICAgIC5zZXREZXNjKFwiRW5hYmxlIHRoaXMgdG8gc2hvdyBjb25uZWN0aW9uIE5vdGljZXMuXCIpXHJcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+XHJcbiAgICAgICAgYm9vbGVhbi5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3Muc2hvd1BvcHVwcykub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2hvd1BvcHVwcyA9IHZhbHVlO1xyXG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XHJcblxyXG4gICAgICAgICAgaWYgKGJvb2xlYW4uZ2V0VmFsdWUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIk5vdGljZXMgRW5hYmxlZFwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiTm90aWNlcyBEaXNhYmxlZFwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkoXHJcbiAgICAgICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcclxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxyXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUucGFyZW50Lm5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGx1Z2luU3RhdGUgfSBmcm9tIFwiLi9zZXR0aW5ncy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBtb21lbnQgfSBmcm9tICdvYnNpZGlhbic7XHJcbmltcG9ydCB0eXBlIHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIge1xyXG4gIHByaXZhdGUgc3RhdHVzQmFyRWw6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihzdGF0dXNCYXJFbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuc3RhdHVzQmFyRWwgPSBzdGF0dXNCYXJFbDtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlTdGF0ZShzdGF0ZTogUGx1Z2luU3RhdGUsIGF1dG9IaWRlOiBib29sZWFuKSB7XHJcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XHJcbiAgICAgIGNhc2UgUGx1Z2luU3RhdGUuY29ubmVjdGVkOlxyXG4gICAgICAgIHRoaXMuZGlzcGxheUNvbm5lY3RlZChhdXRvSGlkZSA/IDEwMDAwIDogMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUGx1Z2luU3RhdGUuY29ubmVjdGluZzpcclxuICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoYENvbm5lY3RpbmcgdG8gRGlzY29yZC4uLmApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBsdWdpblN0YXRlLmRpc2Nvbm5lY3RlZDpcclxuICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoYFxcdXsxRjVEOH0gUmVjb25uZWN0IHRvIERpc2NvcmRgKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc3BsYXlUaW1lcihsb2FkZWRUaW1lOiBEYXRlKSB7XHJcbiAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoYFxcdXsxRjMwRH0gJHtTdGF0dXNCYXIubWlsbGlzZWNzVG9TdHJpbmcobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkZWRUaW1lLmdldFRpbWUoKSl9YCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5Q29ubmVjdGVkKHRpbWVvdXQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBcXHV7MUYzMER9IENvbm5lY3RlZCB0byBEaXNjb3JkYCk7XHJcblxyXG4gICAgaWYgKHRpbWVvdXQgJiYgdGltZW91dCA+IDApIHtcclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChcIlwiKTtcclxuICAgICAgfSwgdGltZW91dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBcXHV7MUYzMER9YCk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogUmV0dXJucyBbSEg6XW1tOnNzIG9uIHRoZSBzdG9wd2F0Y2hcclxuICBodHRwczovL2dpdGh1Yi5jb20vZ3Jhc3NibDhkL2ZsZXhpYmxlLXBvbW8tb2JzaWRpYW4vYmxvYi9hZTAzN2UzNzEwODY2ODYzYzUzOTdmNDJhZjA2YzU1NDBhODA3YjEwL3NyYy90aW1lci50cyNMNDc1XHJcbiAgKi9cclxuICBzdGF0aWMgbWlsbGlzZWNzVG9TdHJpbmcobWlsbGlzZWNzOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IGZvcm1hdHRlZENvdW50RG93bjogc3RyaW5nO1xyXG5cclxuICAgIGlmIChtaWxsaXNlY3MgPj0gNjAgKiA2MCAqIDEwMDApIHsgLyogPj0gMSBob3VyKi9cclxuICAgICAgICBmb3JtYXR0ZWRDb3VudERvd24gPSBtb21lbnQudXRjKG1pbGxpc2VjcykuZm9ybWF0KCdISDptbTpzcycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtYXR0ZWRDb3VudERvd24gPSBtb21lbnQudXRjKG1pbGxpc2VjcykuZm9ybWF0KCdtbTpzcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWRDb3VudERvd24udG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2xpZW50LCBQcmVzZW5jZSB9IGZyb20gXCJkaXNjb3JkLXJwY1wiO1xyXG5pbXBvcnQgeyBQbHVnaW4sIFBsdWdpbk1hbmlmZXN0LCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRGlzY29yZFJQQ1NldHRpbmdzLCBQbHVnaW5TdGF0ZSB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IERpc2NvcmRSUENTZXR0aW5nc1RhYiB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzLXRhYlwiO1xyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9zdGF0dXMtYmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNpZGlhbkRpc2NvcmRSUEMgZXh0ZW5kcyBQbHVnaW4ge1xyXG4gIHB1YmxpYyBzdGF0ZTogUGx1Z2luU3RhdGU7XHJcbiAgcHVibGljIHNldHRpbmdzOiBEaXNjb3JkUlBDU2V0dGluZ3M7XHJcbiAgcHVibGljIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xyXG4gIHB1YmxpYyBycGM6IENsaWVudDtcclxuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XHJcbiAgcHVibGljIGN1cnJlbnRGaWxlOiBURmlsZTtcclxuICBwdWJsaWMgbG9hZGVkVGltZTogRGF0ZTtcclxuICBwdWJsaWMgbGFzdFNldFRpbWU6IERhdGU7XHJcblxyXG4gIHNldFN0YXRlKHN0YXRlOiBQbHVnaW5TdGF0ZSkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdGUoKTogUGx1Z2luU3RhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgdW5uZWNlc3NhcnkgbWV0aG9kc1xyXG4gIC8vIHB1YmxpYyBnZXRBcHAoKTogYW55IHtcclxuICAvLyAgIHJldHVybiB0aGlzLmFwcDtcclxuICAvLyB9XHJcblxyXG4gIC8vIHB1YmxpYyBnZXRQbHVnaW5NYW5pZmVzdCgpOiBQbHVnaW5NYW5pZmVzdCB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5tYW5pZmVzdDtcclxuICAvLyB9XHJcblxyXG4gIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgIGxldCBzdGF0dXNCYXJFbCA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xyXG4gICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHN0YXR1c0JhckVsKTtcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzID0gKGF3YWl0IHRoaXMubG9hZERhdGEoKSkgfHwgbmV3IERpc2NvcmRSUENTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcclxuICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKFwiZmlsZS1vcGVuXCIsIHRoaXMub25GaWxlT3BlbiwgdGhpcylcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckludGVydmFsKHdpbmRvdy5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dDb25uZWN0aW9uVGltZXIgJiYgdGhpcy5nZXRTdGF0ZSgpID09IFBsdWdpblN0YXRlLmNvbm5lY3RlZCl7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGlzcGxheVRpbWVyKHRoaXMuc2V0dGluZ3MudXNlTG9hZGVkVGltZT8gdGhpcy5sb2FkZWRUaW1lOiB0aGlzLmxhc3RTZXRUaW1lKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKSk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckRvbUV2ZW50KHN0YXR1c0JhckVsLCBcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0U3RhdGUoKSA9PSBQbHVnaW5TdGF0ZS5kaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmNvbm5lY3REaXNjb3JkKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRTdGF0ZSgpID09IFBsdWdpblN0YXRlLmNvbm5lY3RlZCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZGlzY29ubmVjdERpc2NvcmQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBEaXNjb3JkUlBDU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogXCJyZWNvbm5lY3QtZGlzY29yZFwiLFxyXG4gICAgICBuYW1lOiBcIlJlY29ubmVjdCB0byBEaXNjb3JkXCIsXHJcbiAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiBhd2FpdCB0aGlzLmNvbm5lY3REaXNjb3JkKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogXCJkaXNjb25uZWN0LWRpc2NvcmRcIixcclxuICAgICAgbmFtZTogXCJEaXNjb25uZWN0IGZyb20gRGlzY29yZFwiLFxyXG4gICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5kaXNjb25uZWN0RGlzY29yZCgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY29ubmVjdE9uU3RhcnQpIHtcclxuICAgICAgYXdhaXQgdGhpcy5jb25uZWN0RGlzY29yZCgpO1xyXG5cclxuICAgICAgLy8gT3B0aW1pemUgZmlsZSBmaW5kaW5nXHJcbiAgICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xyXG4gICAgICBpZiAoYWN0aXZlRmlsZSkge1xyXG4gICAgICAgIHRoaXMub25GaWxlT3BlbihhY3RpdmVGaWxlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5kaXNjb25uZWN0ZWQpO1xyXG4gICAgICB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5U3RhdGUoXHJcbiAgICAgICAgdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYXV0b0hpZGVTdGF0dXNCYXJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRmlsZU9wZW4oZmlsZTogVEZpbGUpIHtcclxuICAgIHRoaXMuY3VycmVudEZpbGUgPSBmaWxlO1xyXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoKSA9PT0gUGx1Z2luU3RhdGUuY29ubmVjdGVkKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0QWN0aXZpdHkoXHJcbiAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxyXG4gICAgICAgIGZpbGUuYmFzZW5hbWUsXHJcbiAgICAgICAgZmlsZS5leHRlbnNpb24sXHJcbiAgICAgICAgZmlsZS5wYXJlbnQubmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb251bmxvYWQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgdGhpcy5ycGMuY2xlYXJBY3Rpdml0eSgpO1xyXG4gICAgdGhpcy5ycGMuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGFyc2UoaW5wdXRTdHJpbmc6IHN0cmluZywgdmF1bHROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgLy8gU29tZSBjb25zdGFudHMuLi5cclxuICAgIGNvbnN0IGZvbGRlck5hbWUgPSB0aGlzLmN1cnJlbnRGaWxlPy5wYXJlbnQ/Lm5hbWUgfHwgXCJcIjtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5jdXJyZW50RmlsZT8ubmFtZSB8fCBcIlwiO1xyXG4gICAgY29uc3QgZmlsZUV4dGVuc2lvbiA9IHRoaXMuY3VycmVudEZpbGU/LmV4dGVuc2lvbiB8fCBcIlwiO1xyXG4gICAgLy8gQ3JlYXRlIGEgbWFwIG9mIHBsYWNlaG9sZGVycyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyB2YWx1ZXNcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgICAgXCIldmF1bHQlXCI6IHZhdWx0TmFtZSxcclxuICAgICAgXCIlZm9sZGVyJVwiOiBmb2xkZXJOYW1lLFxyXG4gICAgICBcIiVmaWxlJVwiOiBmaWxlTmFtZSxcclxuICAgICAgXCIlZXh0ZW5zaW9uJVwiOiBmaWxlRXh0ZW5zaW9uLFxyXG4gICAgfTtcclxuICBcclxuICAgIC8vIFVzZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byByZXBsYWNlIGFsbCBwbGFjZWhvbGRlcnMgaW4gb25lIGdvXHJcbiAgICBjb25zdCBwYXJzZWRTdHJpbmcgPSBpbnB1dFN0cmluZy5yZXBsYWNlKC8lW1xcd10rJS9nLCAobWF0Y2gpID0+IHtcclxuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBtYXRjaC50b0xvd2VyQ2FzZSgpOyAvLyBOb3JtYWxpemUgdG8gbG93ZXJjYXNlXHJcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlcnNbcGxhY2Vob2xkZXJdIHx8IG1hdGNoOyAvLyBSZXBsYWNlIGlmIGZvdW5kLCBvdGhlcndpc2Uga2VlcCBvcmlnaW5hbFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICByZXR1cm4gcGFyc2VkU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29ubmVjdERpc2NvcmQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLmxvZ2dlci5sb2coXCJBdHRlbXB0aW5nIHRvIGNvbm5lY3QgdG8gRGlzY29yZC4uLlwiLCB0aGlzLnNldHRpbmdzLnNob3dQb3B1cHMpOyAvLyBMb2cgY29ubmVjdGlvbiBhdHRlbXB0XHJcbiAgXHJcbiAgICB0aGlzLmxvYWRlZFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGhpcy5sYXN0U2V0VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgXHJcbiAgICB0aGlzLnJwYyA9IG5ldyBDbGllbnQoe1xyXG4gICAgICB0cmFuc3BvcnQ6IFwiaXBjXCIsXHJcbiAgICB9KTtcclxuICBcclxuICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuY29ubmVjdGluZyk7XHJcbiAgICB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5U3RhdGUoXHJcbiAgICAgIHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgdGhpcy5zZXR0aW5ncy5hdXRvSGlkZVN0YXR1c0JhclxyXG4gICAgKTtcclxuICBcclxuICAgIHRoaXMucnBjLm9uY2UoXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuY29ubmVjdGVkKTtcclxuICAgICAgdGhpcy5zdGF0dXNCYXIuZGlzcGxheVN0YXRlKFxyXG4gICAgICAgIHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmF1dG9IaWRlU3RhdHVzQmFyXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmxvZyhcIkNvbm5lY3RlZCB0byBEaXNjb3JkIHdpdGggY2xpZW50IElEOiBcIiArIHRoaXMucnBjLnVzZXIuaWQsIHRoaXMuc2V0dGluZ3Muc2hvd1BvcHVwcyk7IC8vIExvZyBzdWNjZXNzZnVsIGNvbm5lY3Rpb25cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5ycGMubG9naW4oe1xyXG4gICAgICAgIGNsaWVudElkOiBcIjEzNDMxODQxNjYzNTQ4MTI5NzlcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmxvZyhcIkRpc2NvcmQgbG9naW4gc3VjY2Vzc2Z1bFwiLCB0aGlzLnNldHRpbmdzLnNob3dQb3B1cHMpOyAvLyBMb2cgc3VjY2Vzc2Z1bCBsb2dpblxyXG4gICAgICBhd2FpdCB0aGlzLnNldEFjdGl2aXR5KHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSwgXCIuLi5cIiwgXCJcIiwgXCJcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmRpc2Nvbm5lY3RlZCk7XHJcbiAgICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXlTdGF0ZShcclxuICAgICAgICB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hdXRvSGlkZVN0YXR1c0JhclxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmxvZ2dlci5sb2coXCJGYWlsZWQgdG8gY29ubmVjdCB0byBEaXNjb3JkOiBcIiArIGVycm9yLm1lc3NhZ2UgKyBcIlxcblN0YWNrIFRyYWNlOiBcIiArIGVycm9yLnN0YWNrLCB0aGlzLnNldHRpbmdzLnNob3dQb3B1cHMpOyAvLyBMb2cgZGV0YWlsZWQgZXJyb3JcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGRpc2Nvbm5lY3REaXNjb3JkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5ycGMuY2xlYXJBY3Rpdml0eSgpO1xyXG4gICAgdGhpcy5ycGMuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5kaXNjb25uZWN0ZWQpO1xyXG4gICAgdGhpcy5zdGF0dXNCYXIuZGlzcGxheVN0YXRlKFxyXG4gICAgICB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuYXV0b0hpZGVTdGF0dXNCYXJcclxuICAgICk7XHJcbiAgICB0aGlzLmxvZ2dlci5sb2coXCJEaXNjb25uZWN0ZWQgZnJvbSBEaXNjb3JkXCIsIHRoaXMuc2V0dGluZ3Muc2hvd1BvcHVwcyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzZXRBY3Rpdml0eShcclxuICAgIHZhdWx0TmFtZTogc3RyaW5nLFxyXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgIGZpbGVFeHRlbnNpb246IHN0cmluZyxcclxuICAgIGZvbGRlck5hbWU6IHN0cmluZ1xyXG4gICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoKSA9PT0gUGx1Z2luU3RhdGUuY29ubmVjdGVkKSB7XHJcbiAgICAgIGNvbnN0IHZhdWx0ID0gdGhpcy5zZXR0aW5ncy5jdXN0b21WYXVsdE5hbWUgfHwgdmF1bHROYW1lO1xyXG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5zZXR0aW5ncy5zaG93RmlsZUV4dGVuc2lvblxyXG4gICAgICA/IGAke2ZpbGVOYW1lfS4ke2ZpbGVFeHRlbnNpb259YFxyXG4gICAgICA6IGZpbGVOYW1lO1xyXG4gICAgICBjb25zdCBkYXRlID0gdGhpcy5zZXR0aW5ncy51c2VMb2FkZWRUaW1lPyB0aGlzLmxvYWRlZFRpbWU6IG5ldyBEYXRlKCk7XHJcbiAgICAgIHRoaXMubGFzdFNldFRpbWUgPSBkYXRlO1xyXG5cclxuICAgICAgY29uc3QgcGFyc2VkVGV4dCA9IHRoaXMucGFyc2UodGhpcy5zZXR0aW5ncy5jdXN0b21TdHJpbmcsIHZhdWx0KTtcclxuICAgICAgY29uc3QgZGV0YWlscyA9IHRoaXMuc2V0dGluZ3Muc2hvd0N1cnJlbnRGaWxlTmFtZVxyXG4gICAgICA/IGBFZGl0aW5nICR7ZmlsZX1gXHJcbiAgICAgIDogXCJFZGl0aW5nIE5vdGVzXCI7XHJcblxyXG4gICAgICAvLyBTaW1wbGlmeSBSUEMgYWN0aXZpdHkgc2V0dGluZ1xyXG4gICAgICBjb25zdCBhY3Rpdml0eTogUHJlc2VuY2UgPSB7XHJcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGRhdGUsXHJcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJsb2dvXCIsXHJcbiAgICAgICAgbGFyZ2VJbWFnZVRleHQ6IFwiT2JzaWRpYW5cIixcclxuICAgICAgfTtcclxuXHJcbi8vICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudXNlQ3VzdG9tU3RyaW5nKSB7XHJcbi8vICAgICAgICBhY3Rpdml0eS5kZXRhaWxzID0gXCJUZXN0XCI7XHJcbi8vICAgICAgICBhY3Rpdml0eS5kZXRhaWxzID0gdGhpcy5zZXR0aW5ncy5jdXN0b21TdHJpbmc7XHJcbi8vICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucHJpdmFjeU1vZGUpIHtcclxuICAgICAgICBhY3Rpdml0eS5kZXRhaWxzID0gXCJFZGl0aW5nIE5vdGVzXCI7XHJcbiAgICAgICAgYWN0aXZpdHkuc3RhdGUgPSBcIldvcmtpbmcgaW4gYSBWYXVsdFwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjdGl2aXR5LmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgICAgIGFjdGl2aXR5LnN0YXRlID0gYCR7KGF3YWl0IHBhcnNlZFRleHQpLnRvU3RyaW5nKCl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgKHRoaXMuc2V0dGluZ3MucHJpdmFjeU1vZGUpIHtcclxuICAgICAgLy8gICBhY3Rpdml0eS5kZXRhaWxzID0gXCJFZGl0aW5nIE5vdGVzXCI7XHJcbiAgICAgIC8vICAgYWN0aXZpdHkuc3RhdGUgPSBcIldvcmtpbmcgaW4gYSBWYXVsdFwiO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyAgIGlmICh0aGlzLnNldHRpbmdzLnVzZUN1c3RvbVN0cmluZykge1xyXG4gICAgICAvLyAgICAgYWN0aXZpdHkuZGV0YWlscyA9IFwiVGVzdFwiO1xyXG4gICAgICAvLyAgICAgYWN0aXZpdHkuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmN1c3RvbVN0cmluZztcclxuICAgICAgLy8gICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd1ZhdWx0TmFtZSAmJiB0aGlzLnNldHRpbmdzLnNob3dDdXJyZW50RmlsZU5hbWUpIHtcclxuICAgICAgLy8gICAgIGFjdGl2aXR5LmRldGFpbHMgPSBgRWRpdGluZyAke2ZpbGV9YDtcclxuICAgICAgLy8gICAgIGFjdGl2aXR5LnN0YXRlID0gYFZhdWx0OiAke3ZhdWx0fSR7Zm9sZGVyfWA7XHJcbiAgICAgIC8vICAgfSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnNob3dWYXVsdE5hbWUpIHtcclxuICAgICAgLy8gICAgIGFjdGl2aXR5LnN0YXRlID0gYFZhdWx0OiAke3ZhdWx0fSR7Zm9sZGVyfWA7XHJcbiAgICAgIC8vICAgfSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnNob3dDdXJyZW50RmlsZU5hbWUpIHtcclxuICAgICAgLy8gICAgIGFjdGl2aXR5LmRldGFpbHMgPSBgRWRpdGluZyAke2ZpbGV9YDtcclxuICAgICAgLy8gICAgIGlmIChmb2xkZXIpIHtcclxuICAgICAgLy8gICAgICAgYWN0aXZpdHkuc3RhdGUgPSBgSW4gJHtmb2xkZXJ9YDtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIGF3YWl0IHRoaXMucnBjLnNldEFjdGl2aXR5KGFjdGl2aXR5IGFzIFByZXNlbmNlKTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsicmVxdWlyZSQkMSIsImdsb2JhbCIsInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsImlwY01vZHVsZSIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQ1IiwiTm90aWNlIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiLCJtb21lbnQiLCJDbGllbnQiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQW9GRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsR0FBRyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDck0sSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hLLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtBQUN0RCxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENB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QUFDbEQsd0JBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDM0IsOEJBQUUsRUFBQSxDQUFBLE1BQUEsQ0FBRyxRQUFRLEVBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxDQUFJLGFBQWE7OEJBQzVCLFFBQVE7QUFDSix3QkFBQSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRSxJQUFJLElBQUksRUFBRTtBQUNyRSx3QkFBQSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUk7QUFFakIsd0JBQUEsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO0FBQzFELHdCQUFBLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzhCQUM1QixVQUFXLENBQUEsTUFBQSxDQUFBLElBQUk7OEJBQ2YsZUFBZTtBQUdYLHdCQUFBLFFBQVEsR0FBYTtBQUN6Qiw0QkFBQSxjQUFjLEVBQUUsSUFBSTtBQUNwQiw0QkFBQSxhQUFhLEVBQUUsTUFBTTtBQUNyQiw0QkFBQSxjQUFjLEVBQUUsVUFBVTt5QkFDM0I7QUFPRyx3QkFBQSxJQUFBLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQXpCLE9BQXlCLENBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTtBQUMzQix3QkFBQSxRQUFRLENBQUMsT0FBTyxHQUFHLGVBQWU7QUFDbEMsd0JBQUEsUUFBUSxDQUFDLEtBQUssR0FBRyxvQkFBb0I7OztBQUVyQyx3QkFBQSxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU87QUFDMUIsd0JBQUEsRUFBQSxHQUFBLFFBQVE7O0FBQWEsd0JBQUEsT0FBQSxDQUFBLENBQUEsWUFBTSxVQUFVLENBQUE7O3dCQUFyQyxFQUFTLENBQUEsS0FBSyxHQUFHLEVBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQSxFQUFBLENBQUcsQ0FBQyxFQUFBLENBQUEsSUFBQSxFQUFnQixFQUFFLFFBQVEsRUFBRSxDQUFBLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBdUJyRCxPQUFNLENBQUEsQ0FBQSxZQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQW9CLENBQUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWhELHdCQUFBLEVBQUEsQ0FBQSxJQUFBLEVBQWdEOzs7Ozs7QUFFbkQsS0FBQTtJQUNILE9BQUMsa0JBQUE7QUFBRCxDQTVPQSxDQUFnREMsZUFBTSxDQTRPckQ7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsNyw4XX0=
