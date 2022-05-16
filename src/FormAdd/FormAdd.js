import React, { Component } from 'react'


export default class FormAdd extends Component {

    state = {
        value: '',
    }

    onChange = (e) => {
        this.setState({ value: e.target.value })
    }

    onClick = () => {
        this.props.onAdd(this.state.value)
        this.setState({ value: '' })
    }

    upper = () => {
        this.setState((state) => {
            return {
                value: state.value.toUpperCase()
            }
        })
    }

    render() {
        return (
            <div>
                <label>Add Task
                    <input value={this.state.value}
                        onChange={this.onChange}
                        onBlur={this.upper}
                    />
                </label>
                <button onClick={this.onClick}>Add Task</button>
            </div>
        )
    }
}

// const FormAdd = (props) => <div>
//     <label>Add Task
//         <input id="search" type="text" />
//     </label>
//     <button onClick={props.onAdd}>Add Task</button>
// </div>

// export default FormAdd;