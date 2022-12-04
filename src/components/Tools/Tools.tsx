import styled from "styled-components"
import FilesSvg from "../../icons/FilesSvg"
import NotesSvg from "../../icons/NotesSvg"
import RoadMapSvg from "../../icons/RoadMapSvg"
import Shedule from "../../icons/SheduleSvg"
import Tasks from "../../icons/TasksSvg"
import ToolsItem from "./ToolsItem/ToolsItem"

const StyledTools = styled.div`
    background-color: #F5F8FA;
    height: 100vh;
    width: 10%;
    min-width: 150px;
    h3 {
        margin: 24px 16px 43px 16px;
        font-size: 18px;
        font-weight: 400;
    }
`




const Tools = () => {
    return <>
        <StyledTools>
            <h3>Tools</h3>
            <ToolsItem img={<RoadMapSvg/>}>Roadmap</ToolsItem>
            <ToolsItem active img={<Shedule/>}>Schedule</ToolsItem>
            <ToolsItem img={<Tasks/>}>Tasks</ToolsItem>
            <ToolsItem img={<NotesSvg/>}>Notes</ToolsItem>
            <ToolsItem img={<FilesSvg/>}>Files</ToolsItem>
        </StyledTools>
    </>
}

export default Tools