import {GlobalStyles} from './Theme.styles'
import React from 'react'
 const Theme = ({children}) => {
    console.log('loaded')
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    )
}

export default Theme