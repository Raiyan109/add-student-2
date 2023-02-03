import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AddCircle, ListAlt } from '@mui/icons-material';

const useStyles = styled(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    activeLink: {
        backgroundColor: 'red !important',
        '&:hover': {
            backgroundColor: 'red !important',
        },
    },
}));
const SideNav = () => {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <div style={{ marginTop: '60px' }}>

            <Drawer
                variant="permanent"
                anchor="left"
            >
                <List component="nav" className={classes.root}>
                    <ListItem
                        button
                        component={RouterLink}
                        to="/addStudent"
                        selected={selectedIndex === 0}
                        onClick={event => handleListItemClick(event, 0)}
                        className={selectedIndex === 0 ? classes.activeLink : ''}
                    >
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText primary="Add Student" />
                    </ListItem>
                    <ListItem
                        button
                        component={RouterLink}
                        to="/manage"
                        selected={selectedIndex === 1}
                        onClick={event => handleListItemClick(event, 1)}
                        className={selectedIndex === 1 ? classes.activeLink : ''}
                    >
                        <ListItemIcon>
                            <ListAlt />
                        </ListItemIcon>
                        <ListItemText primary="Manage Students" />
                    </ListItem>
                </List>
                <Button>
                    Logout
                </Button>
            </Drawer>
        </div>
    );
};

export default SideNav;