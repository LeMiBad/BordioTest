import { useStore } from "effector-react"
import styled from "styled-components"
import { $statusList } from "../../../store/store"
import StatusBar from "../StatusBar/StatusBar"


const StyledStatusList = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 30px;
    display: flex;
`

const StyledStatusBar = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #F3F3F3;
    `

const StyledAddButton = styled.button`
    width: 100%;
    padding: 10px 0;
    margin-bottom: 40px;
    margin-top: 1px;
    margin-left: -1px;
    border: 0;
    font-size: 14px;
    box-sizing: border-box;
    border-left: 1px solid #F3F3F3;
    border-bottom: 1px solid #F3F3F3;
    background-color: white;
    cursor: pointer;
    span {
        font-size: 14px;
    }
`

const StatusList = () => {
    const statusList = useStore($statusList)


    return <>
        <StyledStatusList>
            {statusList.map(list => <StatusBar key={list.name} tasks={list.tasks} name={list.name} id={list.id}/>)}
            <StyledStatusBar>
                <StyledAddButton>+ Create Status</StyledAddButton>
            </StyledStatusBar>
        </StyledStatusList>
    </>
}

export default StatusList