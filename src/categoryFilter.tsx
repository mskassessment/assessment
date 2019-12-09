import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

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

    //@ts-ignore
    const handleDelete = chipToDelete => () => {
        props.hideCategory(chipToDelete)
        // setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
    };

    return (
        <Paper>
            {props.allCategories.map((category: string, i: number) => {
                let icon;
                const isActive = props.visibleCategories.includes(category)
                console.log(isActive)
                return (
                    <Chip
                        key={i}
                        icon={icon}
                        label={category}
                        className={classes.chip + ' ' + classes.active}
                    />
                );
            })}
        </Paper>
    );
}