import {GlobalStyles} from './Theme.styles'
import React from 'react'
 const Theme = ({children}) => {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    )
}

export default Theme