import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import styled from "styled-components"
import Header from "../Header/Header"
import StatusList from "./StatusList/StatusList"

const StyledMainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const MainWrapper = () => {
    return <>
        <DndProvider backend={HTML5Backend}>
            <StyledMainWrapper>
                <Header/>
                <StatusList/>
            </StyledMainWrapper>
        </DndProvider>
    </>
}

export default MainWrapper