import{ssr as t,ssrHydrationKey as o,ssrAttribute as i,escape as e,createComponent as l}from"solid-js/web";import{Show as s}from"solid-js";import{u as p,f as n}from"./index2.mjs";import"solid-js/web/storage";import"h3";import"unctx";import"node:async_hooks";import"unstorage";import"unstorage/drivers/fs-lite";var m=["<p",' style="','" role="alert" id="error-message">',"</p>"],d=["<main","><h1>Login</h1><form",' method="post"><input type="hidden" name="redirectTo"','><fieldset><legend>Login or Register?</legend><label><input type="radio" name="loginType" value="login" checked=""> Login</label><label><input type="radio" name="loginType" value="register"> Register</label></fieldset><div><label for="username-input">Username</label><input name="username" placeholder="kody"></div><div><label for="password-input">Password</label><input name="password" type="password" placeholder="twixrox"></div><button type="submit">Login</button><!--$-->',"<!--/--></form></main>"];function L(a){const r=p(n);return t(d,o(),i("action",e(n,!0),!1),i("value",e(a.params.redirectTo,!0)??"/",!1),e(l(s,{get when(){return r.result},get children(){return t(m,o(),"color:red",e(r.result.message))}})))}export{L as default};
