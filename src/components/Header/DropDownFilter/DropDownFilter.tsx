import { useState } from "react"
import styled from "styled-components"
import { useOpeningSwitcher } from "../../../hooks/useOpeningSwitcher"
import DropDownCross from "../../../icons/DropDownCross"

interface IDropDownFilter {
    selects: string[]
} 

const StyledSelectsWrapper = styled.div`
    padding: 8px 5px 10px 5px;
    margin-top: 10px;
    border-radius: 20px;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0px 2px 11px 3px #5b5f62;
    left: 0;
    width: 100%;
    top: 100%;
`
const StyledSelectsItem = styled.div`
    padding: 10px 20px;
    border-radius: 10px;
    &:hover {
        background-color: #dbdbdb;
    }
`

const StyledDropDownFilter = styled.div`
    position: relative;
    border-radius: 50px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: #F5F8FA;
    user-select: none;
    cursor: pointer;
`

const DropDownFilter: React.FC<IDropDownFilter> = ({selects}) => {
    const {openState, switchHandler} = useOpeningSwitcher()
    const [select, setSelect] = useState(0)


    const selectHandler = (id: number) => {
        setSelect(id)
        switchHandler()
    }

    return <>
        <StyledDropDownFilter onClick={switchHandler}>
            {selects[select]} 
            <DropDownCross color="#8C939F" isOpen={openState}/>
            {openState? 
            <StyledSelectsWrapper>
                {selects.map((select, id) => <StyledSelectsItem key={`${select}${id}`} onClick={() => selectHandler(id)}>{select}</StyledSelectsItem>)}
            </StyledSelectsWrapper> 
            : 
            <></>}
        </StyledDropDownFilter>
    </>
}

export default DropDownFilter