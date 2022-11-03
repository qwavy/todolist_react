import React, { Component, useState } from 'react'
import './TodoListItem.css'

// state
// Function component
// Class component
const TodoListItem = (array) => {
    const [todos,setTodos] = useState(array)
    const [done, setDone] = useState(array.done)
    const [important, setImportant] = useState(array.important)
    const [deleteItem, setDeleteItem] = useState(false)


    const onToggleImportant = () => {
        // console.log(this)
        setImportant((current) => !current) 
        return array.important = true
        // console.log(array)
        // setTodos(array.importantc)
        // return array.important
        // array.important = true
        // console.log(array.important)
    }
    const onToggleDelete = () => {
        setDeleteItem((current) => !current) 
        // return array((item))
    }
    const onToggleDone = () => {

        setDone((current) => !current) 
    }
    // const { done, important, deleteItem, onToggleDelete, onToggleDone, onToggleImportant } = this.props;



    let classes = ''
    classes += done ? 'done' : ''
    classes += important ? ' important' : ''
    classes += deleteItem ? ' deleteItem' : ''

    return (
        <li className={classes}>
            {array.text}
            <div>
                <button
                    onClick={onToggleDone}>
                    Done
                </button>
                <button
                    onClick={onToggleImportant}>
                    Important
                </button>
                <button
                    onClick={onToggleDelete}>Delete</button>
            </div>
        </li>
    )

}
export  default TodoListItem
// export default class TodoListItem extends Component {

//     state = {
//         done: false,
//         important: false,
//         deleteItem: false
//     }

//     // onDone = () => {
//     //     // используем, когда значение не зависит от предыдущего
//     //     // this.setState({ done: true })

//     //     // используем, когда значение ЗАВИСИТ от предыдущего
//     //     this.setState((state) => {
//     //         return {
//     //             done: !state.done
//     //         }
//     //     })
//     // }

//     onImportant = () => {
//         console.log(this)
//     }
//     onToggleDelete = () => {
//         console.log('asd')
//     }

//     render() {
//         const { done, important, deleteItem, onToggleDelete, onToggleDone, onToggleImportant } = this.props;

//         let classes = ''
//         classes += done ? 'done' : ''
//         classes += important ? ' important' : ''
//         classes += deleteItem ? ' deleteItem' : ''

//         return (
//             <li className={classes}>
//                 {this.props.text}
//                 <div>
//                     <button
//                         onClick={onToggleDone}>
//                         Done
//                     </button>
//                     <button
//                         onClick={onToggleImportant}>
//                         Important
//                     </button>
//                     <button
//                         onClick={onToggleDelete}>Delete</button>
//                 </div>
//             </li>
//         )
//     }
// }

// const TodoListItem = ({ text,
//     // done = false, important = false
// }) => {

//     const done = false, important = false;

//     let classes = ''
//     classes += done ? ' done' : ''
//     classes += important ? ' important' : ''

//     return (
//         <li className={classes}>
//             {text}
//             <div>
//                 <button>Done</button>
//                 <button>Important</button>
//                 <button>Delete</button>
//             </div>
//         </li>
//     )
// }

// export default TodoListItem;