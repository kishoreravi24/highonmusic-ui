import LeftPanel from '../LeftPanel/leftPanel';
import MainPanel from '../MainPanel.jsx/mainPanel';
import './App.css';
import { Grid } from '@mui/material';

function App() {
  return (
      <div className="App">
        <Grid container spacing={2} style={{ margin: 0 }}>
          <Grid item xs={6}  md={3}>
            <LeftPanel />
          </Grid>
          <Grid item xs={6}  md={9}>
            <MainPanel />
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
