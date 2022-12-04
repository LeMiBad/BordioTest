import styled from "styled-components"
import HeaderGroup from "./HeaderGroup/HeaderGroup"
import Input from "../UI/Input/Input"
import Button from '../UI/Button/Button'
import DropDownFilter from './DropDownFilter/DropDownFilter'
import avatarBig from './../../icons/avatarBig.png'
import Notifications from "./Notifications/Notifications"


const StyledHeader = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 4px 0px #F0F1F2;
    img {
        cursor: pointer;
    }
`

const Header = () => {
    return <>
        <StyledHeader>
            <HeaderGroup>
                <>
                    <Button func={() => {console.log('Добавлен новый элемент')}}>+ Add new</Button>
                    <DropDownFilter selects={['Board view', 'Table view', 'Kanban']}/>
                    <DropDownFilter selects={['Filter', 'Some', 'Some', 'Some']}/>
                </>
            </HeaderGroup>
            <HeaderGroup>
                <>
                    <Input placeholder="Search ..."></Input>
                    <Notifications value={143}/>
                    <img src={avatarBig} alt='avatar'/>
                </>
            </HeaderGroup>
        </StyledHeader>
    </>
}

export default Header