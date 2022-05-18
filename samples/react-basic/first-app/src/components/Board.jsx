import { List } from './List.jsx';


export const Board = (props) => {
    const { tasks, children } = props;

    return (
        <div>
            <h3>{children}</h3>
            <List tasks={tasks}>name</List>
        </div>
    );
};
