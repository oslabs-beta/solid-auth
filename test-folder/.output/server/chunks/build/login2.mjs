import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent } from 'solid-js/web';
import { Show } from 'solid-js';
import { b as wt, c as Rt } from '../runtime.mjs';
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

var m = ["<p", ' style="', '" role="alert" id="error-message">', "</p>"], d = ["<main", "><h1>Login</h1><form", ' method="post"><input type="hidden" name="redirectTo"', '><fieldset><legend>Login or Register?</legend><label><input type="radio" name="loginType" value="login" checked=""> Login</label><label><input type="radio" name="loginType" value="register"> Register</label></fieldset><div><label for="username-input">Username</label><input name="username" placeholder="kody"></div><div><label for="password-input">Password</label><input name="password" type="password" placeholder="twixrox"></div><button type="submit">Login</button><!--$-->', "<!--/--></form></main>"];
function L(a) {
  var _a;
  const r = wt(Rt);
  return ssr(d, ssrHydrationKey(), ssrAttribute("action", escape(Rt, true), false), ssrAttribute("value", (_a = escape(a.params.redirectTo, true)) != null ? _a : "/", false), escape(createComponent(Show, { get when() {
    return r.result;
  }, get children() {
    return ssr(m, ssrHydrationKey(), "color:red", escape(r.result.message));
  } })));
}

export { L as default };
//# sourceMappingURL=login2.mjs.map
