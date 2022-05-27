import { useContext } from "react";
import Card from '@mui/material/Card';

import { BacklogsContext, WipsContext, DonesContext } from '../providers/TaskListProvider.jsx';


export const List = (props) => {
    const { tasks, children } = props;
    const taskItems = tasks.map((task, index) => {
        return <li key={index}>{task}</li>;
    });

    const extractListItems = (ctxList) => {
        return ctxList.map((ctxItem, index) => {
            return <Card>title:{ctxItem.title}, desc: {ctxItem.description}</Card>;
        });
    };

    const Backlogs = useContext(BacklogsContext);
    const BacklogItems = extractListItems(Backlogs);
    const Wips = useContext(WipsContext);
    const WipItems = extractListItems(Wips);
    const Dones = useContext(DonesContext);
    const DoneItems = extractListItems(Dones);

    return (
        <div>
            <h3>Backlogs</h3>
            {BacklogItems}
            <h3>Wips</h3>
            {WipItems}
            <h3>Dones</h3>
            {DoneItems}
        </div>
    );
};