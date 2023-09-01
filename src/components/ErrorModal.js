import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {

  const onCloseHandler = () => {
    props.onClose()
  }

  return (
    <div className={classes.backdrop} onClick={onCloseHandler}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>{props.content}</div>
        <div className={classes.actions}>
          <Button text="Okay" onClick={onCloseHandler}></Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
