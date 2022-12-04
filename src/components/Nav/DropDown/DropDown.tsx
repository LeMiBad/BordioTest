import styled from "styled-components"
import { useOpeningSwitcher } from "../../../hooks/useOpeningSwitcher"
import DropDownCross from "../../../icons/DropDownCross"

interface IDropDown {
    links: string[]
    children: string
    color?: string
}

const StyledDropDown = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 7px;
    margin-bottom: 22px;
    font-size: 14px;
    user-select: none;
    color: ${props => props.color? props.color : 'white'};
    cursor: pointer;
`

const StyledLink = styled.div`
    color: #8C939F;
    font-size: 14px;
    margin-bottom: 18px;
    cursor: pointer;
    &:hover {
        color: #a7aebb;
    }
`



const DropDown: React.FC<IDropDown> = ({links, children, color}) => {
    const {openState, switchHandler} = useOpeningSwitcher()





    return <>
        <StyledDropDown color={color} onClick={switchHandler}>
            <DropDownCross isOpen={openState} color={color? color : 'white'}/>
            {children}
        </StyledDropDown>
        {openState? <>
            {links.map(link => <StyledLink key={link}>{link}</StyledLink>)}
        </> 
        : 
        <></>}
    </>
}

export default DropDown