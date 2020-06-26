import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './Header.css'


const header = () => {
    return (
        <AppBar position="static" color="secondary" elevation={0}>
            <Toolbar className="exact-center">
                <Typography>
                    Javascript Quiz
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default header