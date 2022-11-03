import React, { Component } from "react";
import './FilterButtons.css'
import { useState } from "react";

const FilterButtons = ({array,setArray}) => {
    const [activeAll,setActiveAll] = useState(false)
    const [activeDone,setActiveDone] = useState(false)
    const [activeImportant,setActiveImportant] = useState(false)

    const [copyArray,setCopyArray] = useState(JSON.parse(JSON.stringify(array)))

    const all_show = () => {

        setActiveAll(true)
        setActiveDone(false)
        setActiveImportant(false)


        setArray(copyArray)
    }
    const done_show = () => {
        setActiveAll(false)
        setActiveDone(true)
        setActiveImportant(false)


        const filtered = copyArray.filter(filtered => filtered.done === true)
        setArray(filtered)
    }

    const importnant_show = () => {
        setActiveAll(false)
        setActiveDone(false)
        setActiveImportant(true)


        const filtered = copyArray.filter(filtered => filtered.important === true)
        setArray(filtered)
    }

    return (
        
            <div>
                <button onClick={all_show} className={activeAll ? 'active' : null}>All</button>
                <button onClick={done_show} className={activeDone ? 'active' : null}>Done</button>
                <button onClick={importnant_show} className={activeImportant ? 'active' : null}>important</button>
            </div>

    )
}
export default FilterButtons

// export default class FilterButtons extends Component {

//     state = {
//         Allbtn: false,
//         Donebtn: false,
//         Importantbtn: false,
//         recipe:false
//         }
//     componentDidMount() {
//         // this.setState({this.recipe})
//     }
//     // allRecipe = Allbtn
//     // onAll = () => {
//     All_btn(){
//         // console.log(this.props.text)
        
//     }
//     Done_btn(){
        
//     }
//     Important_btn(){
        
//     }
//     // }
//     render() {
//         // const { Allbtn, All_btn,Donebtn,Done_btn ,Important_btn} = this.props;




//     }

// }
// import React, { useState, useEffect } from 'react';

// export default function FilterButtons(){
//     const [recipe, setRecipe] = useState()
//     const items
// }