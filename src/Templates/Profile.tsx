import * as React from 'react'
import { Circle } from '../Containers/Circle'
import { Rectangle } from '../Containers/Rectangle'
import { FlexBox } from '../Layout/Flexbox'
import { Grid } from '../Layout/Grid'
import { Card } from '../Molecules/Card'

export function Profile() {
    return (
        <Card styleProps={{ width: "500px", height: "700px", bgColor: "red", overflow: "hidden" }}>
            <Grid styleProps={{ columns: "3", rows: "5", overflow: "hidden" }}>
                <FlexBox styleProps={{ column: "2/3", row: "1", alignItems: "center", justifyContent: "center" }}>
                    <Circle styleProps={{ overflow: "hidden", height: "50px", bgColor: "blue" }}>Profile</Circle>
                    <Circle styleProps={{ overflow: "hidden", height: "50px", bgColor: "blue" }}>Profile</Circle>

                </FlexBox>
                <FlexBox styleProps={{ row: "2", column: "2", justifyContent: "center" }}>
                    <Rectangle styleProps={{ bgColor: "blue", width: "100%", height: "300px" }}>
                        <FlexBox styleProps={{ justifyContent: "center" }}>

                            <Circle styleProps={{ height: "30px", bgColor: "red" }}>Profile</Circle>
                            <Circle styleProps={{ height: "30px", bgColor: "red" }}>Profile</Circle>
                        </FlexBox>

                    </Rectangle>
                    <Rectangle styleProps={{ bgColor: "blue", width: "100%", height: "300px" }}>
                        <FlexBox styleProps={{ justifyContent: "center" }}>

                            <Circle styleProps={{ height: "30px", bgColor: "red" }}>Profile</Circle>
                            <Circle styleProps={{ height: "30px", bgColor: "red" }}>Profile</Circle>
                        </FlexBox>

                    </Rectangle>
                </FlexBox>
            </Grid>
        </Card>
    )
}

export default Profile