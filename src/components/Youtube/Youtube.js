import React from 'react';
import YouTube from 'react-youtube';

function Youtube({ videoId }) {
  const opts = {
    height: '440',
    width: '100%',
  };

  return <YouTube videoId={videoId} opts={opts} />;
}

export default Youtube;
