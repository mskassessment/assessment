import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    chip: {
        margin: theme.spacing(0.5),
    },
    active: {
        background: 'lightblue'
    }
}));

export default function ChipsArray(props: any) {
    const classes = useStyles(props);
    return (
        <Paper>
            {props.allCategories.map((category: string, i: number) => {
                let icon;
                const classNames = [classes.chip]
                const isActive = props.visibleCategories.includes(category)
                if (isActive) {
                    classNames.push(classes.active)
                }
                return (
                    <Chip
                        key={i}
                        onClick={evt => props.onCategoryClick(category)}
                        icon={icon}
                        label={category}
                        className={classNames.join(' ')}
                    />
                );
            })}
        </Paper>
    );
}