import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
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

    useEffect(() => {
        setTaskID(taskObj.Id)
        setTaskName(taskObj.Name)
        setTaskIsCompleted(taskObj.IsCompleted)
        setTaskDealine(taskObj.Dealine)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['taskId'] = taskId
        tempObj['taskName'] = taskName
        tempObj['taskIsCompleted'] = taskIsCompleted
        tempObj['taskDealine'] = taskDealine
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                
                    <div className = "form-group">
                        <label>Task ID</label>
                        <input type="text" className = "form-control" value = {taskId} onChange = {handleChange} name = "taskId"/>
                    </div>
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Task Completed</label>
                        <input type="date" className = "form-control" value = {taskIsCompleted} onChange = {handleChange} name = "taskIsCompleted"/>
                    </div>
                    <div className = "form-group">
                        <label>Task Dealine</label>
                        <input type="date" className = "form-control" value = {taskDealine} onChange = {handleChange} name = "taskDealine"/>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;