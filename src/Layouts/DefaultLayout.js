import {NavLink, Outlet} from "react-router";

export function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/dones">DoneList</NavLink></li>
                    <li><NavLink to="/aboutus">AboutUs</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}