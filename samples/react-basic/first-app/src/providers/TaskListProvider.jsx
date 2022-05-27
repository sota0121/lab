import { createContext } from 'react';
import { InitialBacklogs, InitialWips, InitialDones } from './InitialList.jsx';


export const BacklogsContext = createContext({InitialBacklogs});
export const WipsContext = createContext({InitialWips});
export const DonesContext = createContext({InitialDones});

export const BacklogsProvider = props => {
    const { children } = props;
    return (
        <BacklogsContext.Provider value={InitialBacklogs}>
            {children}
        </BacklogsContext.Provider>
    );
};

export const WipsProvider = props => {
    const { children } = props;
    return (
        <WipsContext.Provider value={InitialWips}>
            {children}
        </WipsContext.Provider>
    );
};

export const DonesProvider = props => {
    const { children } = props;
    return (
        <DonesContext.Provider value={InitialDones}>
            {children}
        </DonesContext.Provider>
    );
};

