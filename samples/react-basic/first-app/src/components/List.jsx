
export const List = (props) => {
    const { tasks, children } = props;
    const taskItems = tasks.map((task, index) => {
        return <li key={index}>{task}</li>;
    });

    return (
        <div>
            {children}
            {taskItems}
        </div>
    );
};