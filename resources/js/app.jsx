import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { CssBaseline, ThemeProvider, alpha } from "@mui/material";
import ColorContext, { primary } from "./Contexts/ColorContext";
import { ApiContext } from "./Contexts/ApiContext";

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ApiContext>
                <ThemeProvider theme={ColorContext}>
                    <CssBaseline>
                        <App {...props} />
                    </CssBaseline>
                </ThemeProvider>
            </ApiContext>
        );
    },
    progress: {
        color: alpha(primary, 0.7),
    },
});
