import useEventListener from '@use-it/event-listener'
import React from 'react'
import './index.css'
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';
import { start } from 'repl';
import useHeroMoviment from '../../Hooks/useHeroMoviment';

/*const moviment = {
    position: { x: 5, y: 5},
    direction: EDirection.RIGHT,
}*/


interface IProps{
    initialPosition: {x: number, y: number}
}

const Hero = (props: IProps) =>{

    const {position, direction} = useHeroMoviment(props.initialPosition);

    return(
        <div 
            style={{
                position: 'absolute',
                top: TILE_SIZE * position.y - HEAD_OFFSET,
                left: TILE_SIZE * position.x,
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                animation: "hero-animation 1s steps(4) infinite",
                transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
                zIndex: 1,
            }}
        />
    )

}

export default Hero;