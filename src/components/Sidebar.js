import React, { useState, useEffect } from 'react';
import { SidebarMenus } from './SidebarMenus';
import Home from './Home';
import Photos from './Photos';
import { Route, Link, useHistory } from 'react-router-dom';

export default function Sidebar() {
    let history = useHistory();
    const [activeRoute, setActiveRoute] = useState('')
    useEffect(() => {
        console.log(history.location.pathname)
    }, [activeRoute])
    return (
        <div>
            <div class="sidenav">
                <ul>
                    {SidebarMenus.map((menuItem, index) => {
                        return (
                            <Link to={menuItem.path} onClick={() => setActiveRoute(menuItem.path)}>
                                <li className={activeRoute === menuItem.path ? 'activeMenu sidebar-lists' : 'sidebar-lists'}
                                    key={index}>{menuItem.icon}
                                    &nbsp;&nbsp;&nbsp;{menuItem.name}</li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
            <div className="sidebar-content">
                <Route exact path="/" component={Home} />
                <Route exact path="/photos" component={Photos} />
            </div>
        </div>
    )
}
