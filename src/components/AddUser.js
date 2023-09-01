import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from './Button';
import ErrorModal from './ErrorModal';

const AddUser = (props) => {
  const initValues = {
    username: '',
    years: '',
  };

  const [formData, setFormData] = useState(initValues);
  const [invalidInput, setInvalidInput] = useState(false);

  const onChangeInputHandler = (key, value) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    if (!isFormValid()) return;

    props.onNewUser(formData);
    setFormData(initValues);
  };

  const isFormValid = () => {
    if (
      formData.username.trim().length === 0 ||
      formData.years.trim().length === 0
    ) {
      setInvalidInput(true);
      return false;
    }

    setInvalidInput(false);
    return true;
  };

  const onCloseModal = () => {
    setInvalidInput(false);
  };

  return (
    <>
      <form onSubmit={onSubmitFormHandler}>
        <div className={classes.input}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={(e) => onChangeInputHandler('username', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={formData.years}
              onChange={(e) => onChangeInputHandler('years', e.target.value)}
            />
          </div>
          <Button type="submit" text="Add User" />
        </div>
      </form>
      {invalidInput && (
        <ErrorModal
          title="Invalid Input"
          content="Please enter a valid name and age (non-empty values)."
          onClose={onCloseModal}
        />
      )}
    </>
  );
};

export default AddUser;
