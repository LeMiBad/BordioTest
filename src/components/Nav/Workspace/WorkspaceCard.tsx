import styled from "styled-components"
import avatar from './../../../icons/avatar.png'

const StyledWorkspaceCard = styled.div`
    width: calc(100% + 32px);
    padding: 6px 16px;
    box-sizing: border-box;
    background-color: #2D4071;
    color: #ffffff;
    font-size: 14px;
    margin: 19px 0 19px -16px;
    display: flex;
    align-items: center;
    gap: 8px;
    img {
        margin: 0px !important;
    }
`

const WorkspaceCard = () => {
    return <>
        <StyledWorkspaceCard>
            <img src={avatar} alt="avatar"></img>
            My Workspace
        </StyledWorkspaceCard>
    </>
}

export default WorkspaceCard