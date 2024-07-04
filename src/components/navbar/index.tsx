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
        <NavItem>
            <NavLink>
            <Link href="/categories/phones">Smart Phones</Link>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink>
            <Link href="/categories/audio">Sound</Link>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink>
            <Link href="/categories/appliances">Home Appliances</Link>
            </NavLink>
        </NavItem>
        </Nav>
    </Navbar>
}