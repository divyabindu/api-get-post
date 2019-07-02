import React from 'react';
import ReactDOM from 'react-dom'


class Conditional extends React.Component{
    render(){
        return(
            this.props.isLoading===true ? <h1>LOading </h1> :  <h1>goodness loaded</h1>
        )
    }
}


export default Conditional