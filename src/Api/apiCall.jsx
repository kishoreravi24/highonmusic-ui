import {useState, useEffect} from 'react';

const Apiprovider = () => {
    const [data,SetData] = useState([]);
    const [audioURL,setAudioURL] = useState([]);
    const ApiUrl = "http://localhost:5000/songs/getSongs";

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
          const response = await fetch(ApiUrl);
          if (!response.ok) {
            console.log("Network failure");
          } else {
            const jsonData = await response.json();
            console.log(jsonData);
            console.log(jsonData[0].audio);
      
            // Access the audio data from jsonData instead of response.data
            const binaryData = atob(jsonData[0].audio);
            const arrayBuffer = new ArrayBuffer(binaryData.length);
            const view = new Uint8Array(arrayBuffer);
            for (let i = 0; i < binaryData.length; i++) {
              view[i] = binaryData.charCodeAt(i);
            }
            const blob = new Blob([view], { type: 'audio/mpeg' });
      
            // Create an Object URL for the Blob
            const objectURL = URL.createObjectURL(blob);
            setAudioURL(objectURL);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        <div>
          <h1>Song: {audioURL ? 'bae' : 'Loading...'}</h1>
          {audioURL && <audio controls src={audioURL} />}
        </div>
      );
}

export default Apiprovider;
