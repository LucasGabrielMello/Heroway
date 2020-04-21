import useEventListener from '@use-it/event-listener'
import React from 'react'
import './index.css'
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';
import { start } from 'repl';

const initialPosition = {
    x: 15,
    y: 15,
}

const Hero = () =>{
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');

    useEventListener('keydown', (event:any) =>{
        if(event.key === 'ArrowLeft'){
            const newPosition = {
                x: positionState.x - 1,
                y: positionState.y,
            }

            updatePositionState(newPosition);
            updateDirectionState('LEFT');

        }else if(event.key === 'ArrowRight'){
            const newPosition = {
                x: positionState.x + 1,
                y: positionState.y,
            }

            updatePositionState(newPosition);
            updateDirectionState('RIGHT');
            
        }else if(event.key === 'ArrowDown'){
            const newPosition = {
                x: positionState.x,
                y: positionState.y - 1,
            }

            updatePositionState(newPosition);
            
        }else if(event.key === 'ArrowUp'){
            const newPosition = {
                x: positionState.x,
                y: positionState.y + 1,
            }

            updatePositionState(newPosition);}
            
    })


    return(
        <div 
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * positionState.y,
                left: TILE_SIZE * positionState.x,
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                animation: "hero-animation 1s steps(4) infinite",
                transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
            }}
        />
    )

}

export default Hero;