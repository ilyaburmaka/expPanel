import React, { Fragment  }from 'react'
import { TabsContent } from 'constants/ExpansionPanels/ExpansionPanels'
import PropTypes from 'prop-types'
import Img from 'additionals/pictureForTab.png'

import styled from 'styled-components'
const Text = styled.p`
    color: rgba(48, 69, 92, 0.8);
    font-size: 25px;
    line-height: 26px;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    max-height: 800px;
    opacity: 1;
    transform: translate(0, 0);
    margin-top: 14px;
    z-index: 2;
    transition:all 500ms ease;
`

const Table = () =>(
    <table border="1">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
        </tr>
    </table>
)
const PictDiv= styled.div`
        margin:20px 0px 0px 200px;
`
const Picture = () =>(
    <PictDiv><img src={Img} alt="logo"/></PictDiv>
)

const MyText = ({ active,act }) =>(
    <Fragment>
        { act === TabsContent.FIRST && active === TabsContent.FIRST && <Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae debitis dicta eius enim eos est excepturi ipsam magnam maxime minima necessitatibus nobis quidem repudiandae, sit totam voluptatem voluptatibus voluptatum? </Text>}
        { act === TabsContent.SECOND && active === TabsContent.SECOND && <Table />}
        { act === TabsContent.THIRD && active === TabsContent.THIRD && <Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque fuga magni minima nesciunt! Accusantium atque, commodi consequuntur distinctio eligendi facilis itaque libero, minus molestias nemo quibusdam quidem, quod sed vitae.</Text>}
        { act === TabsContent.FOURTH && active === TabsContent.FOURTH && <Picture /> }
    </Fragment>
)

MyText.propTypes = {
    active: PropTypes.string.isRequired,
    act: PropTypes.string.isRequired
}

export default MyText