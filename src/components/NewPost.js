import React, {useState} from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {

  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const changeBodyHandler = (event) => {
      setEnteredBody(event.target.value);
  };

  const changeAuthorHandler = (event) => {
      setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
        author: enteredAuthor,
        body: enteredBody
    };

    props.onAddPost(postData);
    setEnteredAuthor('');
    setEnteredBody('');
    props.onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler}/>
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;