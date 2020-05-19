import React, { Fragment,useState } from 'react';
import { withStyles } from '@material-ui/core';
import TaskCard from './TaskCard';

const styles = () => ({
    root: {
        padding: '10px'
    }
});

const TaskContainer = (props) => {

    const { 
        classes,
        taskArray 
    } = props;

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => {
        setExpanded(panel);
    };

    return (
        <div className={ classes.root }>
            {
                taskArray.map((task,index) => (
                    <TaskCard 
                        key={task._id}
                        task={task} 
                        index={index}
                        expanded={expanded}
                        handleChange={handleChange}
                    />
                ))
            }
        </div>
    )
}

export default withStyles(styles)(TaskContainer);