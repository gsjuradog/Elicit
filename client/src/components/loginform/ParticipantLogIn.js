import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import { useFireStore } from '../hooks/useFireStore';
import useStyles from './styles';

const ParticipantLogin = ({ setParticipantLogIn, history }) => {
  //no security here
  const [user, setUser] = useState({ name: '', code: '', project: '' });
  const [selectedProj, setSelectedProj] = useState(null);

  const classes = useStyles();
  //access database
  const { docs } = useFireStore('projects');
  // const { tasks } = useGetTasks('projects', project);
  console.log(docs);
  function redirect() {
    history.push({ pathname: '/uploadImage', state: { user: user } });
  }

  function handleChanges(e) {
    const value = e.target.value;
    setUser((user) => ({
      ...user,
      [e.target.name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    redirect();
    setParticipantLogIn(true);
    setUser({ name: '', code: '', project: '' });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in to participate
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChanges}
            id="name"
            label="Name"
            name="name"
            autoComplete="Name"
            // autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            onChange={handleChanges}
            fullWidth
            name="code"
            label="code"
            type="code"
            id="code"
            autoComplete="code"
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-selectProject">Project</InputLabel>
            <Select
              native
              value={user.project}
              onChange={handleChanges}
              label="project"
              inputProps={{
                name: 'project',
                id: 'outlined-selectProject',
              }}>
              <option aria-label="None" value="" />
              {docs.map((doc) => (
                <option key={doc.data.title} value={doc.data.title}>
                  {doc.data.title}
                </option>
              ))}
            </Select>
          </FormControl>
          {/*future implementation */}
          {/* {selectedProj && (
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-selectProject">Task</InputLabel>
              <Select
                native
                value={user.project}
                onChange={handleChangesOnTask}
                label="project"
                inputProps={{
                  name: 'project',
                  id: 'outlined-selectProject',
                }}>
                <option aria-label="None" value="" />
                {docs.map((doc) => (
                  <option key={doc.data.title} value={doc.data.title}>
                    {doc.data.title}
                  </option>
                ))}
              </Select>
            </FormControl>
          )} */}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Accept privacy policies"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Participate
          </Button>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};

export default ParticipantLogin;
