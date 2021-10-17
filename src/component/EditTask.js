import React, { useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    //const [taskName, setTaskName] = useState('');
    //const [taskIsCompleted, setTaskIsCompleted] = useState('');
    //const [taskDeadline, setTaskDeadline] = useState('');
    const [formValue, setFormValue] = useState({
        ID: "",
        Name: "",
        Deadline: "",
        IsCompleted:"",
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };
    
      const { ID, Name, Deadline, IsCompleted } = formValue;
    /*useReducer(() => {
        setTaskName (taskObj.Name)
        setTaskIsCompleted(taskObj.isCompleted)
        setTaskDeadline(taskObj.Deadline)
    }, []);*/

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['ID'] = taskObj.ID
        tempObj['Name'] = Name
        tempObj['IsCompleted'] = IsCompleted
        tempObj['Deadline'] = Deadline
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input type="text" className="form-control"  value={ID} onChange= {handleChange} name="ID" readOnly/>
                    </div>
                    <div className = "form-group">
                        <label>Name</label>
                        <input type="text" className = "form-control" value = {Name} onChange = {handleChange} name = "Name"/>
                    </div>
                    <div className="form-group">
                        <label>Deadline</label>
                        <input type="date" className="form-control"  value={Deadline} onChange= {handleChange} name="Deadline"/>
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" className = "form-control" value = {IsCompleted} onChange = {handleChange} name = "IsCompleted"/>
                
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTask;