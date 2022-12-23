import React, { Component } from "react";
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from "reactstrap";

class AppNav extends Component {
    state = { }
    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Expense Tracker Application</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/departments">Departments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/disciplines">Disciplines</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/faculties">Faculties</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/groups">Groups</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/schedules">Schedules</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/students">Students</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/teachers">Teachers</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/expenses">Expenses</NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>
            </div>

        );
    }
}
export default AppNav;