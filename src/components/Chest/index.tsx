import React from 'react'
import './index.css'
import { TILE_SIZE } from '../../settings/constants';

/*const moviment = {
    position: { x: 5, y: 5},
    direction: EDirection.RIGHT,
}*/


interface IProps{
    initialPosition: {x: number, y: number}
}

const Chest = (props: IProps) =>{
    return(
        <div 
            style={{
                position: 'absolute',
                top: TILE_SIZE * props.initialPosition.y,
                left: TILE_SIZE * props.initialPosition.x,
                width: TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/CHEST.png)",
                backgroundRepeat: "no-repeat",
                animation: "chest-animation 1s steps(3) infinite"
            }}
        />
    )

}

export default Chest;