import { List } from './List.jsx';
import { Box, Grid } from '@mui/material'

import { BacklogsProvider, WipsProvider, DonesProvider } from '../providers/TaskListProvider.jsx';


export const Board = (props) => {
    const { tasks, children } = props;

    return (
        <div>
            <h3>{children}</h3>
            {/* <BacklogsProvider>
                <List tasks={tasks}>Backlogs</List>
            </BacklogsProvider>
            <WipsProvider>
                <List tasks={tasks}>Wips</List>
            </WipsProvider>
            <DonesProvider>
                <List tasks={tasks}>Dones</List>
            </DonesProvider> */}
            <Grid container name='container-col' spacing={2}>
                <Grid container name='container-row1' direction='row-reverse' justifyContent='center'>
                    <Grid item xs={4} md={12} sx={{ width: '30px', backGroundColor: 'blue' }}>
                        <Box>
                            test1
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={12}>
                        <Box>
                            test2
                        </Box>
                    </Grid>
                </Grid>
                <Grid name='container-row2' container direction='row-reverse' justifyContent='center'>
                    <Grid item xs={4} md={6}>
                        <Box>
                            test3
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Box>
                            test4
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
