import React from 'react'
import { Box,Stack } from '@mui/material';

function LeftPanel() {
    return (
        <div>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Stack spacing={2}>
                    <h1>Logo</h1>
                    <h1>Search</h1>
                    <h1>Liked songs</h1>
                    <h1>Liked podcasts</h1>
                    <h1>Liked playlists</h1>
                </Stack>
            </Box>
        </div>
    )
}

export default LeftPanel;
