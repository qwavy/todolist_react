import React, { Component } from "react";
import './FilterButtons.css'

export default class FilterButtons extends Component {

    state = {
        Allbtn: false,
        Donebtn: false,
        Importantbtn: false,
    }

    // onAll = () => {

    // }
    // eslint-disable-next-line react/require-render-return
    render() {
        const { Allbtn, All_btn,Donebtn,Done_btn } = this.props;

        let classes = ''
        classes += Allbtn ? ' all' : ''
        classes += Donebtn ? ' done' : ''

        return (
            <div className={classes}>
                <div>
                    <button onClick={All_btn}>All
                    </button>
                    <button onClick={Done_btn}>Done</button>
                    <button></button>
                </div>
            </div>

        )
    }

}
