import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TaskCard from '../components/TaskCard';
import TaskContainer from '../components/TaskContainer';
import TaskService from '../service.js/TaskService';

const styles = () => ({
    root: {
        // padding: '10px'
    }
})

const Home = (props) => {

    const { classes } = props;

    const [taskArray, setTaskArray] = useState([])

    useEffect(() => {
        fetchAllTask();
    }, []);

    const fetchAllTask = async () => {
        const result = await TaskService.fetchAllTask();
        setTaskArray(result);
    };

    return (
        <div className={classes.root} >
            <TaskContainer 
                taskArray = {taskArray}
            />
        </div>
    )
}

export default withStyles(styles)(Home);