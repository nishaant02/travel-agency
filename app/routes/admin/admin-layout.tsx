import {Outlet} from "react-router";

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            MobileSidebar
            <aside className="w-full max-w-[270 px] hidden lg:block">Sidebar</aside>
            <aside className= "children">
                < Outlet />
            </aside>
        </div>
    )
}
export default AdminLayout
