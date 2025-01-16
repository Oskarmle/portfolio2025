import { createRootRoute, Outlet } from "@tanstack/react-router";
import "./index.css";

export const Route = createRootRoute({
  component: () => (
    <div>
      <Outlet />
      <div className="bg"></div>
    </div>
  ),
});
