import React from 'react';
import ReactDOM from 'react-dom'



class Form extends React.Component{

    constructor(){
        super()
        this.state = ({
            firstName: "",
            lastName: ""
        })

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div>
                <input type="text" name="firstName" value={this.state.firstName} placeholder="first name" onChange={this.handleChange} />
                <input type="text" name="lastName" value={this.state.lastName} placeholder="Last name" onChange={this.handleChange} />
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
            </div>
        )
    }
}

export default Form