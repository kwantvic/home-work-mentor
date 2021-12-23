import React from 'react';
import Form from 'react-bootstrap/Form';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Button from 'react-bootstrap/Button';

import styles from './Feedback.module.scss';

export default function Feedback({ sendComments }) {
  const [comments, setComments] = React.useState({
    fullName: '',
    email: '',
    text: '',
  });

  function handleChangeValue(e) {
    const { name, value } = e.target;
    setComments({
      ...comments,
      [name]: value,
    });
  }
  function handleSubmit(event, fullName, email, text) {
    event.preventDefault();
    sendComments(fullName, email, text);
    setComments({
      fullName: '',
      email: '',
      text: '',
    });
  }
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      className={styles.block}>
      <ListItem style={{ display: 'contents' }} className="listItem" alignItems="flex-start">
        <Form
          onSubmit={(event) =>
            handleSubmit(event, comments.fullName, comments.email, comments.text)
          }>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h4 className={styles.h4}>Обратная связь:</h4>
            </Form.Label>
            <div className={styles.parent}>
              <Form.Control
                onChange={handleChangeValue}
                className={styles.input}
                name="fullName"
                type="text"
                placeholder="Имя"
                value={comments.fullName}
              />
              <Form.Control
                onChange={handleChangeValue}
                className={styles.input}
                name="email"
                type="email"
                placeholder="Почта"
                value={comments.email}
              />
              <Form.Control
                onChange={handleChangeValue}
                className={`${styles.input} ${styles.text}`}
                as="textarea"
                placeholder="Текст..."
                cols={3}
                rows={3}
                name="text"
                value={comments.text}
              />
              <Button className={styles.button} variant="primary" type="submit">
                ОТПРАВИТЬ
              </Button>{' '}
            </div>
          </Form.Group>
        </Form>
      </ListItem>
    </List>
  );
}
