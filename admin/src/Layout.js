import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <div className="container-scroller">
 <Outlet/>
    </div>
  );
}

export default Layout;
