import React from 'react'
import mugImage from '../../images/oneshot-mugs.svg'
import {Wrapper} from './Mugs.styles'
import { useMugQuery } from '../../hooks/useMugQuery'

const MugArea = () => {
  const {allWpMug} = useMugQuery();
  return (
    <Wrapper>
        <img src={mugImage} width="150" height="150" alt="mugs" />
        <article>Hey we love coffee! It's the best way to jump start your day, if your like us you need to try ours. Get hooked by one shot.</article>
        <div>
            {allWpMug.edges.reverse().map((elem, i) => {
                return (
                    <span key={i}>{elem.node.title}</span>
                )
            })}
        </div>
    </Wrapper>
  )
}

export default MugArea