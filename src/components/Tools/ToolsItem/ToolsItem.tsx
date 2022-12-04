import styled from "styled-components"

interface IToolsItem {
    children: string
    active?: boolean
    img: JSX.Element
}

interface primaryStyle {
    active?: boolean
}

const StyledToolsItem = styled.div<primaryStyle>`
    position: relative;
    display: flex;
    align-items: center;
    padding: 17px 14px;
    gap: 14px;
    font-size: 14px;
    width: 70%;
    color: ${props => props.active? '#0094FF' : ''};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${props => props.active? 'white' : ''};
    cursor: pointer;
    h3 {
        font-size: 14px !important;
        margin: 0 !important; 
    }
    &:hover {
        h3 {
            color: #0094FF;
        }
    }
    svg{
        min-width: 20px;
    }
    div{
        height: 100%;
        width: 4px;
        background-color: #0094FF;
        left: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        position: absolute;
    }
`




const ToolsItem: React.FC<IToolsItem> = ({children, img, active}) => {
    return <>
        <StyledToolsItem active={active}>
            {active? <div></div> : <></>}
            {img}
            <h3>{children}</h3>
        </StyledToolsItem>
    </>
}

export default ToolsItem