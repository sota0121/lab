/* eslint-disable */

import React, {
    FC,
    createContext,
    useState,
} from 'react';

type playerInfo = {
    name: string;
    id: number;
    // color: string;
};
export type playerInfoList = playerInfo[];

// この型が PlayerInfoContext.Provider -> props.value の型になる
// See: https://blog.logrocket.com/how-to-use-react-context-typescript/#create-context
export type PlayerInfoContextType = {
    playerList: playerInfoList;
    setPlayerList: (playerList: playerInfoList) => void;
};

// future split as a module
const initPlayerList: playerInfoList = [
    { name: 'Player 1', id: 1 },
    { name: 'Player 2', id: 2 },
    { name: 'Player 3', id: 3 },
];
const initPlayerInfoContext: PlayerInfoContextType = {
    playerList: initPlayerList,
    setPlayerList: () => {},
};

export const PlayerInfoContext = createContext<PlayerInfoContextType | null>( {} as PlayerInfoContextType);

// React v18.x では、Props.children を明示的に型設定する必要がある
// const { children } = props; で children というプロパティはありませんと怒られる
type Props = {
    children: React.ReactNode;
};

export const PlayerInfoProvider: FC<Props> = ( props ) => {
    const { children } = props;

    // create global state for player info list
    const [ playerList, setPlayerList ] = useState<playerInfoList>(initPlayerList);

    return (
        <PlayerInfoContext.Provider value={{ playerList, setPlayerList }}>
            {children}
        </PlayerInfoContext.Provider>
    );
};
