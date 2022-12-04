import { createEvent, createStore } from "effector"

type IstatusList = {
    name: string
    id: number
    tasks: {
        id: number
        idKey: number
        completed: boolean
        text: string
        time: string
        color: string
        subColor: string
    }[]
}[]


const statusList = [
    {
        name: 'New task',
        id: 0,
        tasks: [
            {id: 0, idKey: 1, completed: false, text: "Check email", time: "0:230h", color: "#ABE9CE", subColor: "#435E52"},
            {id: 1, idKey: 2, completed: false, text: "Compare PPC agencies and make a report for Steven", time: "3:00h", color: "#D8DCFF", subColor: "#404784"},
            {id: 2, idKey: 3, completed: false, text: "Meeting with Amanda (PR department)", time: "0:30h", color:"#ABE9CE", subColor: "#435E52"},
            {id: 3, idKey: 4, completed: false, text: "Get Patrick's approval for homepage new design", time: "0:20h", color: "#D8DCFF", subColor: "#404784"}
        ]
    },
    {
        id: 1,
        name: 'Scheduled',
        tasks: [
            {id: 0, idKey: 5, completed: false, text: "Check email", time: "0:20h", color: "#FFDFBA", subColor: "#662E1E"},
            {id: 1, idKey: 6, completed: false, text: 'Write a blogpost "7 best strategies for SEO in 2020"', time: "5:00h", color: "#FEC6B7", subColor: "#662E1E"},
            {id: 2, idKey: 7, completed: false, text: "New Ad copies for Manamaja", time: "2:00h", color: "#D9E6A2", subColor: "#4A4D3A"}
        ]
    },
    {
        id: 2,
        name: 'In progress',
        tasks: [
            {id: 0, idKey: 8, completed: false, text: "Check email", time: "0:20h", color: "#FFDFBA", subColor: "#662E1E"},
            {id: 1, idKey: 9, completed: false, text: "Record a video comment about last week's analytics report", time: "0:20h", color: "#F2BAE1", subColor: "#8E4778"},
            {id: 2, idKey: 10, completed: false, text: "Process all resumes for Content Marketer position", time: "1:00h", color: "#FFDFBA", subColor: "#662E1E"}
        ]
    },
    {
        id: 3,
        name: 'Completed',
        tasks: [
            {id: 0, idKey: 11, completed: true, text: "Check email", time: "0:20h", color: "#FFDFBA", subColor: "#662E1E"},
            {id: 1, idKey: 12, completed: true, text: "Weekly planning session", time: "0:45h", color: "#D9E6A2", subColor: "#662E1E"},
            {id: 2, idKey: 13, completed: true, text: "Create 5+ target audiences in Facebook for Samsung ...", time: "2:30h", color: "#D8DCFF", subColor: "#404784"},
            {id: 3, idKey: 14, completed: true, text: "Check email", time: "0:20h", color: "#FFDFBA", subColor: "#662E1E"}
        ]
    },
]

export const setDraggedTask = createEvent<{listId: number, taskId: number}>()
export const $draggedTask = createStore({listId: 0, taskId: 0})
    .on(setDraggedTask, (_, href) => href)


export const setDroppedList = createEvent<number>()
export const $droppedList = createStore(0)
    .on(setDroppedList, (_, droppedListId) => droppedListId)


export const insertTask = createEvent<{drag: {listId: number, taskId: number}, drop: {listId: number, taskId: number | null}}>()
export const $statusList = createStore<IstatusList>(statusList)
    .on(insertTask, (statusList, {drag, drop}) => {
        const newStatus: IstatusList = statusList = [...statusList]

        const draggedTask = newStatus[drag.listId].tasks[drag.taskId]
        const newTasks = newStatus[drag.listId].tasks
        newTasks.splice(drag.taskId, 1)
        newStatus[drag.listId].tasks = newTasks

        if(newStatus[drag.listId].name === 'Completed' && drag.listId !== drop.listId) {
            draggedTask.completed = false
        }
        else if(drag.listId !== drop.listId && newStatus[drop.listId].name === 'Completed') {
            draggedTask.completed = true
        }

        const droppedList = newStatus[drop.listId].tasks
        if(drop.taskId !== null) {
            droppedList.splice(drop.taskId, 0, draggedTask)
        }
        else {
            droppedList.push(draggedTask)
        }


        newStatus[drop.listId].tasks = droppedList

        return newStatus
    })








