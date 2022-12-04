import styled from "styled-components"
import DropDown from "./DropDown/DropDown"
import Input from "../UI/Input/Input"
import WorkspaceCard from "./Workspace/WorkspaceCard"
import logo from './../../icons/logo.svg'

const StyledNav = styled.div`
    width: 12%;
    min-width: 150px;
    max-height: 100vh;
    padding: 26px 16px;
    background-color: #0F1D40;
    img {
        margin-bottom: 25px;
    }
`

const Nav = () => {
    return <>
        <StyledNav>
            <img src={logo} alt="" />
            <Input dark placeholder="Search ..."/>
            <WorkspaceCard/>
            <DropDown links={['Marketing', 'Mobile App']}>Favorites</DropDown>
            <DropDown links={['Marketing', 'Landing Pages', 'Wedding', 'Mobile App', 'House Construction']}>My Projects</DropDown>
        </StyledNav>
    </>
}

export default Nav