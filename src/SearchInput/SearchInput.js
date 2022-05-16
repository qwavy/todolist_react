import React from 'react'


const SearchInput = ({onSeacrh}) => <div>
    <label htmlFor='search'>Input type</label>
    <input onChange={(e) => onSeacrh(e.target.value)} id="search" type="text" />
</div>

// export default class Search extends React.Component{

//     state = {
//         value: ' '
//     }

//     onChange = (e) => {
//         this.setState({ value: e.target.value })
//     }

//     onClick = () => {
//         this.props.onAdd(this.state.value)
//         this.setState({ value: '' })
//         console.log('asd')
//     }
//     render(){
//         return(
//             <label htmlFor='search'>Input type</label>
//             <input id="search" type="text" />
//         )
//     }
// }

// export default class LoginScreen extends React.Component {
//     constructor(props) {
//       super(props);
//       this.val = null;
//     }
  
//     render() {
//       return(
//             <div>
//               <input class="inputField" ref={ref => this.val = ref} />
//               {/* <button class="button" onClick={(e)=>{
//                 console.log(` ${this.val.value}`)
//               }}></button> */}
//             </div>
//       )
//     }
  
//   }



export default SearchInput