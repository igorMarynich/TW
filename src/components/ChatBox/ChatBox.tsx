import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  chat: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    borderWidth: '1px',
    borderColor: '#ccc',
    borderRightStyle: 'solid',
    borderLeftStyle: 'solid',
  },
  text: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    position: 'relative',
    top: '80%',
  },
});

export const ChatBox = () => {
  // const [messages, setMessages] = useState([]);
  // const [user, setUser] = useState({});

  const classes = useStyles();
  const renderChat = () => {
    return <textarea placeholder="type your message"></textarea>;
  };

  const renderChatHeader = () => {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Chat box
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };
  return (
    <div className={classes.container}>
      <div className={classes.chat}>
        {renderChatHeader()}
        <div className={classes.text}>{renderChat()}</div>
      </div>
    </div>
  );
};
