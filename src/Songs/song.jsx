import React, { useContext } from 'react';
import { Grid, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MyContext } from '../Api/apiCall';

function HighonSong() {
  const { data, setData } = useContext(MyContext);

  const getAudioBlobURL = (audio) => {
    const binaryData = atob(audio);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
      view[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob([view], { type: 'audio/mpeg' });
    return URL.createObjectURL(blob);
  };

  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((song, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={song.tag[0].preview}
                  alt={song.tag[0].name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {song.tag[0].name}
                  </Typography>
                  {/* Audio controls */}
                  <audio controls src={getAudioBlobURL(song.audio)} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HighonSong;
