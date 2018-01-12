
import React from 'react';
import ReactDOM from 'react-dom';        
class UserForm extends React.Component {
    constructor() {
      super();
      this.state = {
        uername: "",
        emailBox: "",
        addressText:""
      };
    }
    
    handleChange({ target }) {
      this.setState({
        [target.name]: target.value
      });
    }
  
    publish() {
      console.log( this.state.uername, this.state.emailBox,this.state.addressText );
    }
    
    render() {
      return <div><center>
          <form onChange={target => this.handleChange(target)}>
         <div> <input 
          type="text" 
          name="uername" 
          placeholder="Enter your name here" 
          value={ this.state.uername }
        /></div>
        <div>
        <input 
          type="text" 
          name="addressText" 
          placeholder="Enter your name here"
          value={ this.state.addressText }
        /></div>
        <div>
        <input 
          type="text" 
          name="emailBox" 
          placeholder="Enter emailId here..."
          value={ this.state.emailBox } 
        />
        </div>
        
        <button value="Send" onClick={target => this.publish()}>Submit</button>
        </form>
        </center>
      </div>
    }
  }
const App = ()=>{
    return <UserForm />
}
ReactDOM.render(<App />,document.getElementById('root'))