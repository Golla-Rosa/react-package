import { SFlexBox, SItem, SItemFlex } from "../index";
import * as React from "react";
import { IElementProps } from "../Interface/IStyleProps";

export function FlexBox({ props, styleProps, children }: IElementProps) {
    var childs;
    if (!Array.isArray(children))
        childs = React.Children.toArray([children])
    else
        childs = children;
    const childrenTab: JSX.Element[] | undefined = childs?.map((c: JSX.Element) => 
    <SItemFlex 
        justifyContent={c.props?.styleProps?.justifyContent} 
        alignItems={c.props?.styleProps?.alignItems}
        width={c.props?.styleProps?.width}>
            {c}
    </SItemFlex>)
    return <SFlexBox {...styleProps}>{childrenTab}</SFlexBox>
}