import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from '@mui/material';
import './App.css';
import HighonSong from '../Songs/song';
import HighonPodcast from '../Podcasts/podcasts';
import HighonPlaylist from '../Playlists/playlists';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import HeadsetIcon from '@mui/icons-material/Headset';
import {Apiprovider} from '../Api/apiCall';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Apiprovider>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: 'whitesmoke', height: '100vh' }}>
          <center>
            <h1><HeadsetIcon/> HighonMusic <GraphicEqIcon/></h1>
          </center>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                <Tab label="Songs" value="1" />
                <Tab label="Podcasts" value="2" />
                <Tab label="Playlists" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <center>
                <HighonSong />
              </center>
            </TabPanel>
            <TabPanel value="2">
              <center>
                <HighonPodcast />
              </center>
            </TabPanel>
            <TabPanel value="3">
              <center>
                <HighonPlaylist />
              </center>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
      </Apiprovider>
    </div>
  );
}

export default App;
