import { useStore } from "effector-react"
import { useDrop } from "react-dnd"
import styled from "styled-components"
import { $draggedTask, insertTask } from "../../../store/store"
import Task from "../../Nav/Task/Task"

interface IStatusBar {
    name: string
    tasks: {
        id: number
        idKey: number
        completed: boolean
        text: string
        time: string
        color: string
        subColor: string
    }[]
    id: number
}


const StyledStatusBar = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #F3F3F3;
`

const StyledStatusBarName = styled.div`
    display: flex;
    width: calc(100% + 1px);
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 0;
    margin-bottom: 40px;
    box-sizing: border-box;
    border-right: 1px solid white;
    border-bottom: 1px solid #F3F3F3;
    span {
        background-color: #E8EBEF;
        border-radius: 100px;
        min-width: 17px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #8C939F;
    }
    `

const StatusBar: React.FC<IStatusBar> = ({name, tasks, id}) => {
    const draggedHref = useStore($draggedTask)
    
    
    const [isOver, dropRef] = useDrop ({
        accept: 'task',
        drop: () => {
            if(isOver.isOver) {
                insertTask({
                    drag: draggedHref,
                    drop: {
                        listId: id,
                        taskId: null
                    }
                }) 
            }
            else{
                console.log('Не овер')
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver({shallow: true}),
        })
    })
    


    return <>
        <StyledStatusBar ref={dropRef}>
            <StyledStatusBarName>{name}&nbsp;<span>{tasks.length}</span></StyledStatusBarName>
            {tasks.map((task, i) => {
                return <Task href={{listId: id, taskId: i}} key={i+task.text} {...task}></Task>
            })}
        </StyledStatusBar>
    </>
}

export default StatusBar