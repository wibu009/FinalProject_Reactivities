import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default observer(function NavBar() {
    const { userStore: { user, logout, isLoggedIn } } = useStore();

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    Connect People
                </Menu.Item>
                {isLoggedIn &&
                    <>
                        <Menu.Item as={NavLink} to='/activities' name="Activities" />
                        {/* <Menu.Item as={NavLink} to='/errors' name="Errors" /> */}
                        <Menu.Item as={NavLink} to='/activitiesCalendar' name="Activities Calendar" />
                        <Menu.Item>
                            <Button as={NavLink} to='/createActivity' positive content="Create Activity" />
                        </Menu.Item>
                        <Menu.Item position="right">
                            <Image avatar spaced="right" src={user?.image || '/assets/user.png'} />
                            <Dropdown pointing="top left" text={user?.displayName}>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} text='My Profile' icon='user' />
                                    <Dropdown.Item as={Link} to='/account/changePassword' text='Change Password' icon='setting' />
                                    <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    </>
                }
            </Container>
        </Menu>
    );
});