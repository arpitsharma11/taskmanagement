import React, { useEffect } from 'react';
import TaskService from '../service.js/TaskService';
import axios from 'axios';
import Home from '../pages/Home';

const App = () => {

    // useEffect(() => {
    //     fetchData();
    //     fetchById();
    //     // createTask();
    // }, []);

    // const fetchData = async () => {
    //     const result = await TaskService.fetchAllTask()
   
    //     console.log('All data',result);
    // };

    // const fetchById = async () => {
    //     const result = await TaskService.fetchTaskByid("5ec04e1bbb75f6212c45f109");

    //     console.log(`Data for id ${"5ec04e1bbb75f6212c45f109"}`,result);
    // }

    // const createTask = async () => {
    //     const body = {
    //         "title": "from front-end hehehhhhehe"
    //     };
    //     const result = await TaskService.createTask(body);

    //     console.log(`Create new task wiht id ${result._id}`, result);
    // }

    return (
        <div>
            <Home />
        </div>
    );
}

export default App;
