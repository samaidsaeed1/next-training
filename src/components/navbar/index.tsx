'use client'
import Link from "next/link";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";

export default function NavBar() {
    return <Navbar className="me-auto">
        <Nav>
        <NavItem>
            <NavLink>
                <Link href="/">Sales</Link>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink>
                <Link href="/profile">Vendors</Link>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink>
            <Link href="/">Account</Link>
            </NavLink>
        </NavItem>
        </Nav>
    </Navbar>
}