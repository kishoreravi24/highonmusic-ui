import React, { useState, useEffect } from 'react';

const Apiprovider = () => {
  const [audioURL, setAudioURL] = useState([]);
  const songsApiUrl = "http://localhost:5000/songs/getSongs";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(songsApiUrl);
      if (!response.ok) {
        console.log("Network failure");
        return;
      }

      const jsonData = await response.json();
      const audioURLs = [];

      for (const data of jsonData) {
        const binaryData = atob(data.audio);
        const arrayBuffer = new ArrayBuffer(binaryData.length);
        const view = new Uint8Array(arrayBuffer);
        for (let i = 0; i < binaryData.length; i++) {
          view[i] = binaryData.charCodeAt(i);
        }
        const blob = new Blob([view], { type: 'audio/mpeg' });

        // Create an Object URL for the Blob
        const objectURL = URL.createObjectURL(blob);
        audioURLs.push(objectURL);
      }

      // Set the audioURL state with all the URLs
      setAudioURL(audioURLs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Song: {audioURL.length > 0 ? 'bae' : 'Loading...'}</h1>
      {audioURL.map((url, index) => (
        <audio key={index} controls src={url} />
      ))}
    </div>
  );
};

export default Apiprovider;
