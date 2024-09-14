// @refresh reload
import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start/router";
import {Suspense} from "solid-js";
import "./app.css";
import {Counter, LoginForm} from "@solid-auth/solidstart-auth-backend-v3/src";


export default function App() {
    return (
        // <Router
        //     root={props => (
        //         <>
        //             <a href="/">Index</a>
        //             <a href="/about">About</a>
        //             <Suspense fallback={<h1>Oh no!</h1>}>{props.children}</Suspense>
        //             <LoginForm/>
        //         </>
        //     )}
        // >
        //     <FileRoutes/>
        // </Router>
        <>
            <Counter/>
            <LoginForm/>
        </>
    );
}
