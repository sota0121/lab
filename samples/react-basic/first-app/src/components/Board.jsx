import { List } from './List.jsx';

import { BacklogsProvider, WipsProvider, DonesProvider } from '../providers/TaskListProvider.jsx';


export const Board = (props) => {
    const { tasks, children } = props;

    return (
        <div>
            <h3>{children}</h3>
            <BacklogsProvider>
                <List tasks={tasks}>Backlogs</List>
            </BacklogsProvider>
            <WipsProvider>
                <List tasks={tasks}>Wips</List>
            </WipsProvider>
            <DonesProvider>
                <List tasks={tasks}>Dones</List>
            </DonesProvider>
        </div>
    );
};
