import React, {Component} from 'react';
import Header from '../Header/Header';
import SearchInput from '../SearchInput/SearchInput';
import TodoList from '../TodoList/TodoList';
import FormAdd from '../FormAdd/FormAdd';
import FilterButtons from '../FilterButtons/FilterButtons';

// Централизованное хранение данных

export default class App extends Component {

    state = {
        todos: [
            { id: 1, text: 'Learn React', important: true, done: false },
            { id: 2, text: 'Drink Coffee', important: false, done: true },
        ],
        search: '',
    }

    onToggleProperty = (prop, id) => {
        this.setState((state) => {
            const idx = state.todos.findIndex(item=>item.id === id)
            
            const obj = {
                ...state.todos[idx],
                [prop]: !state.todos[idx][prop],
            }
            return {
                todos: [
                    ...state.todos.slice(0, idx),
                    obj,
                    ...state.todos.slice(idx + 1)                
                ]
            }
        })
    }

    onAddTask = (text) => {
        this.setState((state)=>{ 
            const obj = {
                id: state.todos.length + 1,
                text,
                done: false,
                important: false,
                deleteItem:false
            }
            return {
                todos: [...state.todos.slice(0), obj]
            }
        })
    }

    onSeacrh =(text) => {
        this.setState({search:text})
    }

    searchItems = (list) => {
        return list.filter(item => item.text.toLowerCase().includes(this.state.search))
    }
    render(){
        // console.log(this.state.search)
        const {todos} = this.state
        const visibleitems = this.searchItems(todos)
        return (
            <>
                <div>
                    <Header />
                    <SearchInput value={this.state.search}
                    onSeacrh={this.onSeacrh}/>
                    <TodoList 
                        list={visibleitems}
                        onDone={(id)=>this.onToggleProperty('done', id)}
                        onImportant={(id)=>this.onToggleProperty('important', id)}
                        onDelete={(id)=>this.onToggleProperty('deleteItem', id)}
                    />
                    <FilterButtons onAll={(id)=>this.onToggleProperty('all',id)}/>
                    <FormAdd onAdd={this.onAddTask} />
                </div>
            </>
        )
    }
}

// const App = () => {

//     const todos = [
//         { id: 1, text: 'Learn React', important: true, done: false },
//         { id: 2, text: 'Drink Coffee', important: false, done: true },
//     ]
   

//     return (
//         <>
//             <div>
//                 <Header />
//                 <SearchInput />
//                 <TodoList list={todos} />
//                 <FormAdd />
//             </div>
//         </>
//     )
// }

// export default App;