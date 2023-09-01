import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from './Button';

const AddUser = (props) => {
  const initValues = {
    username: '',
    years: '',
  };

  const [formData, setFormData] = useState(initValues);

  const onChangeInputHandler = (key, value) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    props.onNewUser(formData);
  }

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className={classes.input}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => onChangeInputHandler('username', e.target.value)}
          />
        </div>
        <div>
          <label>Age (Years)</label>
          <input
            type="number"
            value={formData.years}
            onChange={(e) => onChangeInputHandler('years', e.target.value)}
          />
        </div>
        <Button type="submit" text="Add User" />
      </div>
    </form>
  );
};

export default AddUser;
