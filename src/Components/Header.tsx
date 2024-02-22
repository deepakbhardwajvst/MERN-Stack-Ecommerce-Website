import { useState } from "react";
import {
    FaSearch,
    FaShoppingBag,
    FaSignInAlt,
    FaUser,
    FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const user = { _id: "dfscv", role: "admin" };
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const logoutHandler = () => { setIsOpen(false) }
    return (
        <nav className="header">
            <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/search">
                <FaSearch />
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/cart">
                <FaShoppingBag />
            </Link>
            {user?._id ? (
                <>
                    <button onClick={() => setIsOpen((prev) => !prev)}>
                        <FaUser />
                    </button>
                    <dialog open={isOpen}>
                        <div className="">
                            {user.role === "admin" && (
                                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">Admin</Link>
                            )}
                            <Link onClick={() => setIsOpen(false)} to="/orders">Orders</Link>
                            <button type="button" onClick={logoutHandler}>
                                <FaSignOutAlt />
                            </button>
                        </div>
                    </dialog>
                </>
            ) : (
                <Link onClick={() => setIsOpen(false)} to="/login">
                    <FaSignInAlt />
                </Link>
            )}
        </nav>
    );
};

export default Header;
