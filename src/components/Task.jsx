import styles from './Task.module.css';

const Task = ({ description }) => {
  console.log(styles);
  return (
    <div
      className={styles['task-container']}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2px',
        gap: '10px',
      }}
    >
      <input type='checkbox' id='task-checkbox' />
      <span>{description}</span>
    </div>
  );
};

export default Task;
