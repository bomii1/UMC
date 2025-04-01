interface TodoItemProps {
  title: string;
  onClick: () => void;
  buttonLabel: string;
  buttonClassName: string;
}

const TodoItem = ({ title, onClick, buttonLabel, buttonClassName }: TodoItemProps) => {
  return (
    <li className="render-container__item">
      <p className="render-container__item-text">{title}</p>
      <button className={`render-container__item-button ${buttonClassName}`} onClick={onClick}>
        {buttonLabel}
      </button>
    </li>
  );
};

export default TodoItem;
