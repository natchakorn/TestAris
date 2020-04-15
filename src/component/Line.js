import React ,{Component} from "react";

export default class Line extends Component{
    
    constructor(props){
        super(props)
        this.state = {
          message:""
        }
      };
    
    handleSubmit =(e) => {
        e.preventDefault();
    }

 

    render(){
        let {message}=this.state.message
        return(
            <div className = "card card-body my-3">
                <form onSubmit = {this.handleSubmit}>
                    <label>input line message</label>
                    <input type = "text" className= "form-control" value={message}/>
                    <input type="submit" className="btn btn-primary" value="ส่ง"/>                
                </form>
            </div>
        )
    }
}
