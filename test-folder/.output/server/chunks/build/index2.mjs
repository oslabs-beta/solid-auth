import { ssr, ssrHydrationKey, escape, ssrAttribute, isServer } from 'solid-js/web';
import { S as St, a as mt } from '../runtime.mjs';
import { createResource, untrack, sharedConfig } from 'solid-js';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'solid-js/web/storage';
import 'seroval';
import 'seroval-plugins/web';

function g(r, n) {
  let e, s = () => !e || e.state === "unresolved" ? void 0 : e.latest;
  [e] = createResource(() => y(r, untrack(s)), (u) => u, n);
  const a = () => e();
  return Object.defineProperty(a, "latest", { get() {
    return e.latest;
  } }), a;
}
class t {
  static all() {
    return new t();
  }
  static allSettled() {
    return new t();
  }
  static any() {
    return new t();
  }
  static race() {
    return new t();
  }
  static reject() {
    return new t();
  }
  static resolve() {
    return new t();
  }
  catch() {
    return new t();
  }
  then() {
    return new t();
  }
  finally() {
    return new t();
  }
}
function y(r, n) {
  if (isServer || !sharedConfig.context)
    return r(n);
  const e = fetch, s = Promise;
  try {
    return window.fetch = () => new t(), Promise = t, r(n);
  } finally {
    window.fetch = e, Promise = s;
  }
}
var b = ["<main", ' class="w-full p-4 space-y-2"><h2 class="font-bold text-3xl">Hello <!--$-->', '<!--/--></h2><h3 class="font-bold text-xl">Message board</h3><form', ' method="post"><button name="logout" type="submit">Logout</button></form></main>'];
function K() {
  var _a;
  const r = g(() => mt(), { deferStream: true });
  return ssr(b, ssrHydrationKey(), escape((_a = r()) == null ? void 0 : _a.username), ssrAttribute("action", escape(St, true), false));
}

export { K as default };
//# sourceMappingURL=index2.mjs.map
