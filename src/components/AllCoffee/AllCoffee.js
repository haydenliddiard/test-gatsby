import React from 'react'
import {useCoffeeQuery} from "../../hooks/useCoffeQuery"

const AllCoffee = () => {
    const {allWpCoffee} = useCoffeeQuery();
    console.log(allWpCoffee.edges);
  return (
    <div>
        {allWpCoffee.edges.map((elem, i) => {
            return (
                <div>
                    <h2>{elem.node.title}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default AllCoffee