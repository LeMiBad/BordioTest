import styled from "styled-components"
import MainWrapper from "../MainWrapper/MainWrapper"
import Nav from "../Nav/Nav"
import Tools from "../Tools/Tools"

const StyledApp = styled.div`
    display: flex;
`

const App = () => {
    return <>
        <StyledApp>
            <Nav/>
            <Tools/>
            <MainWrapper/>
        </StyledApp>
    </>
}

export default App