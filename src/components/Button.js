import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={(event) => props.onClick && props.onClick(event)}
    >
      {props.text}
    </button>
  );
};

export default Button;
