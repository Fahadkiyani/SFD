import AuthGuard from "../utils/route-guard/AuthGuard";

const loginRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <div>Logged out</div>
    </AuthGuard>
  ),
};

export default loginRoutes;
