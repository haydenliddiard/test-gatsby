import React from 'react'
import mugImage from '../../images/oneshot-mugs.svg'
import {Wrapper} from './Mugs.styles'

const Mugs = () => {
  return (
    <Wrapper>
        <img src={mugImage} width="150" height="150" alt="mugs" />
        <article>Hey we love coffee! It's the best way to jump start your day, if your like us you need to try ours. Get hooked by one shot.</article>
        <div>
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>
        </div>
    </Wrapper>
  )
}

export default Mugs