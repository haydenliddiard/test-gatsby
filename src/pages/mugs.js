import React from 'react'
import { useMugQuery } from '../hooks/useMugQuery'

const Mugs = () => {
    const {allWpMug} = useMugQuery();

  return (
    <div>
        <h1>Mugs</h1>
        <div>
            {allWpMug.edges.reverse().map((elem, i) => {
                return (
                    <div>
                    <h2>{elem.node.title}</h2>
                    <div className="worpress-page-container" dangerouslySetInnerHTML={{__html: elem.node.content} }/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Mugs