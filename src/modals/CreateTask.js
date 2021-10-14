import React ,{useState}from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CreateTask = ({modal, toggle,save}) => {
    const mystyle = {
        margin: "10px 0 5px 0"
      };
    const mystylebtm = {
        margin: "10px 0 20px 0"
    };
      const [taskId, setTaskID] = useState('');
      const [taskName, setTaskName] = useState('');
      const [taskIsCompleted, setTaskIsCompleted] = useState('');
      const [taskDealine, setTaskDealine] = useState('');
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const isCompleted = e.target.isCompleted
        const dealine = e.target.dealine

        if(name == "taskName"){
            setTaskName(value)
        }else {
            setTaskID(value)
            setTaskIsCompleted(isCompleted)
            setTaskDealine(dealine)
        }
    }
    const handleSave = () => {
        let taskObj = {}
        taskObj["Id"] = taskId
        taskObj["Name"] = taskName
        taskObj["IsCompleted"] = taskIsCompleted
        taskObj["Dealine"] = taskDealine
        save(taskObj)
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    {/* ID */}
                    <div classID="form-group">
                        <label>Task ID</label>
                        <input type="text" className="form-control" 
                        style={mystylebtm} value={taskId} onChange= {handleChange} name="taskId"></input>
                    </div>
                    {/* Name */}
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className="form-control" 
                        style={mystylebtm} value={taskName} onChange= {handleChange} name="taskName"></input>
                    </div>
                    {/* IsCompleted */}
                    <div className="form-group">
                        <label>Task Completed</label>
                        <input type="date" className="form-control" 
                        style={mystylebtm} value={taskIsCompleted} onChange= {handleChange} name="taskIsCompleted"></input>
                    </div>
                    {/* Dealine */}
                    <div className="form-group">
                        <label>Task Dealine</label>
                        <input type="date" className="form-control" 
                        style={mystylebtm} value={taskDealine} onChange= {handleChange} name="taskDealine"></input>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;