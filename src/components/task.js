import { computeHeadingLevel } from "@testing-library/react";
import React,{Component} from "react";
export default class Task extends Component{
    constructor(props){
        super(props);

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate = (itemId) => {
        // Assuming you have a function passed as a prop to handle the update operation
        console.log('in handleupdate')
        this.props.onUpdateStatus(itemId);
      };
      handleDelete = (itemId)=>{
        this.props.onDelete(itemId);
      }
    render() {
        const { item } = this.props;
    
        return (
          <tr>
            <td>{item.Name}</td>
            <td>{item.Status}</td>
            <td>
            <button className="btn btn-primary spa"  onClick={() => this.handleUpdate(item._id)}>Update</button>  </td>           
            <td> <button className="btn btn-primary spa" onClick={() => this.handleDelete(item._id)}>Delete</button>
            </td>
          </tr>
        );
    }
}