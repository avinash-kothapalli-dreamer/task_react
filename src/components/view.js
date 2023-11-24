import React, { Component } from "react";
import Task from "./task";
import "../App.css"
import "../index.css"

export default class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedData: [], // Initialize fetchedData as an empty array
    };
    this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
  }
  handleDelete = (itemId) => {
    fetch(`https://avinashtech123.onrender.com/tasks/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ _id: itemId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          // Filter out the deleted task from the state
          this.setState((prevState) => ({
            fetchedData: {
              ...prevState.fetchedData,
              data: prevState.fetchedData.data.filter((item) => item._id !== itemId),
            },
          }));
          console.log('Delete successful');
        } else {
          console.error('Error deleting task');
        }
      })
      .catch((error) => {
        console.error('Error deleting:', error);
      });
  };
  handleUpdateStatus = (itemId) => {
    fetch("https://avinashtech123.onrender.com/tasks/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ _id: itemId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          // Update the corresponding task in the state with the updated task data
          const updatedTask = data.updatedTask;
          this.setState((prevState) => {
            const updatedData = prevState.fetchedData.data.map((item) =>
              item._id === updatedTask._id ? updatedTask : item
            );
            return { fetchedData: { ...prevState.fetchedData, data: updatedData } };
          });
          console.log("Update successful", updatedTask);
        } else {
          console.error("Error updating");
        }
      })
      .catch((error) => {
        console.error("Error updating:", error);
      });
  };
  

  componentDidMount() {
    console.log('Fetching data...');
    fetch("https://avinashtech123.onrender.com/tasks", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Set fetched data to state
        this.setState({ fetchedData: data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { fetchedData } = this.state;
    console.log(fetchedData)

    return (
        // Inside your render method in the parent component
<div>
  {fetchedData.data && fetchedData.data.length > 0 ? (
    <div>
      <h3>Fetching data...</h3>
      <table className="custom-table">
        {/* Table headers */}
        <thead>
        <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
        </tr>
        </thead>
        <tbody>
          {fetchedData.data.map((item, index) => (
            <Task
              key={index}
              item={item}
              onUpdateStatus={this.handleUpdateStatus}
              onDelete={this.handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p>No tasks available</p>
  )}
</div>

    );
  }
}
