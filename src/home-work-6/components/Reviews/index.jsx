import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import styles from './Reviews.module.scss';
import { CloseButton } from 'react-bootstrap';

export default function Reviews({ comments, removeComment }) {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginBottom: 2 }}
      className={styles.block}>
      <h5 className={styles.h6}>Отзывы:</h5>

      {comments.map((obj, index) => (
        <ListItem key={index} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={obj.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={obj.fullName}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary">
                  {obj.text}
                </Typography>
                <br />
                {obj.createdAt}
                <CloseButton className={styles.close} onClick={() => removeComment(obj.text)} />
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
