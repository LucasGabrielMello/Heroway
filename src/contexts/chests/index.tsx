import React from "react";
import { prependOnceListener } from "cluster";

interface IProps {
    children: React.ReactNode;
}


export  const ChestsContext = React.createContext({
    totalChests: 0,
    openedChests: {
        total: 0,
        positions: []
    },
    updateOpenedChests: () => null
});

function ChestsProvider(props: IProps) {
    const [chestsState, updateChestsState] = React.useState({
        totalChests: 2,
        openedChests: {
            total: 0,
            positions: [],
        },
    updateOpenedChests: () => {
        console.log('chests');
    }

    })
    return(
        <ChestsContext.Provider value = {chestsState}>{props.children}</ChestsContext.Provider>
    )
}

export default ChestsProvider;