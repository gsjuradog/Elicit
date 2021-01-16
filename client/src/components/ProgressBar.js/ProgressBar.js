import React from 'react';
import useStorage from '../hooks/useStorage';
// add later setFile
const ProgressBar = ({ file }) => {
  const { url, progress } = useStorage(file);

  console.log(progress, url);

  return (
    <div className="progress-bar" style={{ width: progress + '%' }}>
      progress
    </div>
  );
};
export default ProgressBar;
