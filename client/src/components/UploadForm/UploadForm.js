import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import ProgressBar from '../ProgressBar.js/ProgressBar';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

function UploadForm() {
  const [file, setFile] = useState(null);

  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('please select and image file (png or jpeg');
    }
  };
  return (
    <Container>
      <form>
        <input type="file" onChange={changeHandler} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </Container>
  );
}

export default UploadForm;
