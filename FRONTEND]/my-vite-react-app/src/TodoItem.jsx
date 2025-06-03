const TodoItem = (props) => {
    let todoText = props.text;
    return (
            <li>
                <button>🗑️</button>
                <button>📝</button>
                {todoText}
            </li>
    );
};

export default TodoItem;