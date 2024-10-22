import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoItem = ({key, data, onHandleDltTodo}) => {
  return (
    <>
      <li key={key} className="todo-item">
        <span>{data}</span>
        <button className="check-btn">
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={() => onHandleDltTodo(data)}>
          <MdDeleteForever />
        </button>
      </li>
    </>
  );
};
export default TodoItem;
