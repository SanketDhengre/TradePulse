import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        try {
            const u = localStorage.getItem("user");
            if (u) setUser(JSON.parse(u));
        } catch (e) {
            setUser(null);
        }
    }, []);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const handleProfileClick = (index) => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "https://frontend-gamma-five-34.vercel.app/login";
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return (
        <div className="menu-container">
            <img src="logo.svg" style={{ width: "150px" }} alt="TradePulse Logo" />
            <div className="menus">
                <ul>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/"
                            onClick={() => handleMenuClick(0)}
                        >
                            <p
                                className={
                                    selectedMenu === 0
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Dashboard
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/orders"
                            onClick={() => handleMenuClick(1)}
                        >
                            <p
                                className={
                                    selectedMenu === 1
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Orders
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/holdings"
                            onClick={() => handleMenuClick(2)}
                        >
                            <p
                                className={
                                    selectedMenu === 2
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Holdings
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/positions"
                            onClick={() => handleMenuClick(3)}
                        >
                            <p
                                className={
                                    selectedMenu === 3
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Positions
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="funds"
                            onClick={() => handleMenuClick(4)}
                        >
                            <p
                                className={
                                    selectedMenu === 4
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Funds
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/apps"
                            onClick={() => handleMenuClick(6)}
                        >
                            <p
                                className={
                                    selectedMenu === 6
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Apps
                            </p>
                        </Link>
                    </li>
                </ul>
                <hr />
                {user ? (
                    <div className="profile" onClick={handleProfileClick}>
                        <div className="avatar">
                            {(user.name || "U").slice(0, 2).toUpperCase()}
                        </div>
                        <p className="username">{user.name}</p>
                        <button
                            className="btn-logout"
                            onClick={handleLogout}
                            style={{ marginLeft: 12 }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div style={{ display: "flex", gap: 8 }}>
                        <a
                            className="btn btn-outline"
                            href="https://frontend-gamma-five-34.vercel.app/login"
                        >
                            Login
                        </a>
                        <a
                            className="btn btn-primary"
                            href="https://frontend-gamma-five-34.vercel.app/signup"
                        >
                            Signup
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
