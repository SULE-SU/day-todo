import {NavLink, Outlet} from "react-router";

export function DefaultLayout() {
    return <div>
        <header>
            <nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dones">DoneList</NavLink>
                <NavLink to="/aboutus">AboutUs</NavLink>
            </nav>

        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}