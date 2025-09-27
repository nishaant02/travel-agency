import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
    // The layout function takes an options object and an array of child routes.
    layout("routes/admin/admin-layout.tsx", [
        route("dashboard", "routes/admin/dashboard.tsx"),
        route("all-user", "routes/admin/all-user.tsx")
    ]),
] satisfies RouteConfig;