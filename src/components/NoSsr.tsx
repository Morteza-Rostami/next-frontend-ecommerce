import dynamic from 'next/dynamic' 
import React from 'react'

const NonSSRWrapper = props => ( 
    <React.Fragment>{props.children}</React.Fragment> 
) 
export const Nossr = dynamic(() => Promise.resolve(NonSSRWrapper), { 
    ssr: false 
})

export const isSsr = () => typeof window === 'undefined';