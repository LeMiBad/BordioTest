import { useStore } from "effector-react"
import { useEffect } from "react"
import { useDrag, useDrop } from "react-dnd"
import styled from "styled-components"
import { $draggedTask, insertTask, setDraggedTask } from "../../../store/store"

interface ITask {
    text: string
    time: string
    color: string
    subColor: string
    completed?: boolean
    isDragging?: boolean
    href: {listId: number, taskId: number}
}

const StyledTask = styled.div<ITask>`
    width: 82%;
    margin: 0 auto 10px auto;
    padding: 15px;
    border-radius: 8px;
    cursor: ${props => props.isDragging? 'drabbing' : 'grab'};
    opacity: ${props => props.isDragging? '0' : '1'};
    color: ${props => props.completed? '#A5A5A5' : 'black'};
    background-color: ${props => props.completed? '#F0F0F0' : props.color};
    display: flex;
    flex-direction: column;
    gap: 5px;
div:nth-child(1) {
    font-size: 14px;
    text-decoration: ${props => props.completed? 'line-through' : 'auto'};
}
div:nth-child(2) {
    color: ${props => props.completed? '#A5A5A5' : props.subColor};
    font-size: 13px;
}
`




const Task: React.FC<ITask> = (props) => {
    const dragHref = useStore($draggedTask)
    const [{ isDragging, href }, dragRef] = useDrag(
        () => ({
                type: 'task',
                collect: (monitor) => {
                    return {
                        isDragging: monitor.isDragging(),
                        href: props.href
                    }
                },
        }),
        [],
    )

    const [isOver, dropRef] = useDrop ({
        accept: 'task',
        drop: () => {
            insertTask({
                drag: dragHref,
                drop: props.href
            })
        },
        collect: (monitor) => ({
            isOver: !monitor.isOver(),
        })
    })

    // console.log(isOver)

    useEffect(() => {
        if(href && isDragging) {
            setDraggedTask(href)
        }
    })

    return <>
        <div ref={dropRef}>
            <StyledTask isDragging={isDragging} ref={dragRef} {...props}>
                <div>{props.text}</div>
                <div>{props.time}</div>
            </StyledTask>
        </div>
    </>
}

export default Task