import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        alignSelf : 'center'
    }
};

const Footer = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <a href= "https://www.linkedin.com/in/kailashw/"> Linkedin </a>
                    </Typography>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <a href= "https://www.github.com/kailashw/"> GitHub </a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
