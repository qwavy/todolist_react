import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem';
import FilterButtons from '../FilterButtons/FilterButtons';

// props - properties

// const TodoList = (props) => {
//     return (
//         <ul>
//             {
//                 props.list.map((task) => {
//                     return (
//                         <><TodoListItem
//                             key={task.id}
//                             text={task.text}
//                             done={task.done}
//                             important={task.important}
//                             deleteItem={task.deleteItem}
//                             onToggleDone={() => props.onDone(task.id)}
//                             onToggleImportant={() => props.onImportant(task.id)}
//                             onToggleDelete={() => props.onDelete(task.id)} /><FilterButtons onToggleAll={() => props.onAll/></>
//                     )
//                 })
//             }

//         </ul>
//     )
// }


const TodoList = (props) => {
    return (
        
        <>
            <FilterButtons
             All_btn={() => props.onAll}            
            />
            <ul>
                {props.list.map(task =>
                    <TodoListItem key={task.id}
                        text={task.text}
                        done={task.done}
                        important={task.important}
                        deleteItem={task.deleteItem}
                        onToggleDone={() => props.onDone(task.id)}
                        onToggleImportant={() => props.onImportant(task.id)}
                        onToggleDelete={() => props.onDelete(task.id)} />

                )}
            </ul>
        </>
    )
}

export default TodoList;