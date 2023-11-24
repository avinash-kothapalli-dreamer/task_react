import React,{Component} from "react";

export default class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
            Name:"",
            Status:"",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const {Name,Status} = this.state;
        console.log('hii')
        console.log(Name);
      fetch("https://avinashtech123.onrender.com/create",{
     method:"POST",
     crossDomain:true,
     headers:{
       "content-Type":"application/json",
       Accept:"application/json",
       "Access-Control-Allow-Origin":"*"
     },
     body:JSON.stringify({
       //fname,
       Name,
      //  lname,
       Status
     }),
        }).then((res)=>res.json())

        .then((data)=>{
            //console.log(data);
            if(data.status=="ok"){
                alert("task created");
            }
            console.log('clear')
        })
         
    }

    render(){
      return(
        <form onSubmit={this.handleSubmit}>
            <div >
        <label>Task-Name</label>
        <input type="text" className="form-control" placeholder="Task-name"
        onChange={(e)=>this.setState({Name:e.target.value})}/>
        </div>
        <div>
        <label>Status</label>
        <input type="text" className="form-control" placeholder="done/notdone"
        onChange={(e)=>this.setState({Status:e.target.value})}/></div>
        <div className="d-grid">
          <button type="submit" className="butt btn btn-primary">
            Submit
          </button>
        </div>
        </form>
      )
    }

}