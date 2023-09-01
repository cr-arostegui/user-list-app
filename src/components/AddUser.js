import { useState } from 'react';
import classes from './AddUser.module.css';

const AddUser = () => {
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

  return (
    <form>
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
      </div>
    </form>
  );
};

export default AddUser;
