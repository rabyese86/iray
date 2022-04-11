import React, { Component } from 'react'

export class Dee extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            comment:'',
            Topic: ''

            
        }
} 


handleUsernameChange = event =>{

    this.setState({

        username : event.target.value

     })
}

handleUsernameChange = event =>{

    this.setState({

        username : event.target.value

     })
}

handleCommenteChange = event =>{

    this.setState({

        comment: event.target.value
    })
}

    handleTopicChange =event =>{


        this.setState({
        
        Topic: event.target.value

        })
    }
    handleSubmit= event =>{

        document.write(`${this.state.username}${this.state.Topic}${this.state.comment}`)


    }

render() {

    return (
      
    
    
    <form onSubmit = {this.handleSubmit}>
        <div>
        <label>username </label>
        <input type="text" value= {this.state.username} onChange={this.handleUsernameChange}/> 

        </div>

        <div>
            <label> comment </label>
            <textarea value= {this.state.comment} onChange={this.handleCommenteChange}> </textarea>


        </div>

        <div> 

        <label> Topic </label>
        <select value = {this.state.Topic} onChange={this.handleTopicChange}>
            <option value= "html">HTML</option>
            <option value= "css">CSS</option>
            <option value="javascript">JAVA SCRIPT</option>

             </select>

        </div>

        <button type ="submit"> submit </button>

    </form>
    )
}
}

export default Dee