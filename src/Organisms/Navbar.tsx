import * as React from 'react'
import { FlexBox } from '../Layout/Flexbox'
import { Grid } from '../Layout/Grid'
import { Card } from '../Molecules/Cards/Card'

export function Navbar() {
    return (
        <div>

            <Card styleProps={{ shape: "rectangle", width: "100%", height: "100vh", overflow: "hidden" }}>
                <Grid styleProps={{ rows: "24" }}>
                    {/* // /HEADER */}


                    <Card styleProps={{ shape: "rectangle", row: "1/3", overflow: "hidden" }}>
                        <h1>Sonalyse</h1>
                    </Card>
                    

                    <Card styleProps={{ shape: "rectangle", overflow: "hidden" }}>
                        Dashboard
                    </Card>
                    <Card styleProps={{ shape: "rectangle", overflow: "hidden" }}>
                        <FlexBox styleProps={{ alignItems: "center", justifyContent: "space-around" }}>
                            <a>logo</a>
                            <a>Dashboard</a>
                            <a>icon</a>
                        </FlexBox>
                    </Card>
                    <Card styleProps={{ shape: "rectangle", overflow: "hidden" }}>
                        <FlexBox styleProps={{ alignItems: "center", justifyContent: "space-around" }}>
                            <a>logo</a>
                            <a>Configuration</a>
                            <a>icon</a>
                        </FlexBox>
                    </Card>
                </Grid>
                <FlexBox styleProps={{ alignItems: "center", justifyContent: "center" }}>

                </FlexBox>
                <></>
            </Card>
        </div>

    )
}
