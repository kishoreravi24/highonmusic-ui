import React from 'react'
import { Box } from '@mui/material';
import Apiprovider from '../Api/apiCall';


function MainPanel() {
    return (
        <div>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <h1>Hello main panel</h1>
                <Apiprovider/>
            </Box>
        </div>
    )
}

export default MainPanel;
