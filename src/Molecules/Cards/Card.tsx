import * as React from 'react'
import styled from 'styled-components'
import { SCircle } from '../../Containers/Circle'
import { Rectangle, SRectangle } from '../../Containers/Rectangle'
import { Square } from '../../Containers/Square'
import { IElementProps } from '../../Interface/IStyleProps'
import { useState } from 'react'


export const SRectCard = styled(SRectangle)`
    border-radius: 20px 20px 20px 2s0px;
    // border: 1px solid grey;
    box-shadow: 17px 0px 65px rgba(0, 0, 0, 0.05)
  ;

`
export const SRoundedCard = styled(SCircle)`
    // border: 1px solid grey;
    // box-shadow: 1px 5px 5px;
`



export function Card({ props, children, styleProps }: IElementProps) {
    return (
        styleProps?.shape === "rectangle" ?
            <SRectCard overflow={styleProps?.overflow} width={styleProps?.width} height={styleProps?.height} bgColor={styleProps?.bgColor}>
                {children}
            </SRectCard> :
            <SRoundedCard overflow={styleProps?.overflow} width={styleProps?.width} height={styleProps?.height} bgColor={styleProps?.bgColor}>
                {children}
            </SRoundedCard>
    )
}
