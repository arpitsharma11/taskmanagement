import React from 'react';
import { 
    withStyles, 
    Paper, 
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { displayDate } from '../utils/utilFunction';

const styles = () => ({
    root: {
        height: '40px'
    },
    heading: {
        fontSize: '15px',
        flexBasis: '80%',
        flexShrink: 0,
    },
    dueDate: {
        fontSize: '15px',
        fontWeight: 200
    },
})

const TaskCard = (props) => {

    const { 
        classes,
        task,
        index,
        expanded
    } = props;

    const handleChange = (panel) => (event, isExpanded) => {
        props.handleChange(isExpanded ? panel : false);
    };

    return (
        <ExpansionPanel
            expanded={expanded === `panel-${index}`} 
            onChange={handleChange(`panel-${index}`)}
        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`task-panel-content-${index}`}
                id={`panel-header-${index}`}
            >
                <Typography className={classes.heading}>
                    {task.title}
                </Typography>
                <Typography className={classes.dueDate}>
                    {displayDate(task.dueDate)}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div>
                    <Typography>
                        {task.description}
                    </Typography>
                </div>
                <div>
                    <DeleteIcon />
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default withStyles(styles)(TaskCard);