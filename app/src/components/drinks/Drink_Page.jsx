import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


function Drink_Page () {
    return(
    <div>
        <Table celled>
            <Table.Header >
                <Table.Row className='Header'>
                    <Table.HeaderCell>Espresso</Table.HeaderCell>
                    <Table.HeaderCell>Frappucino</Table.HeaderCell>
                    <Table.HeaderCell>Brewed</Table.HeaderCell>
                    <Table.HeaderCell>Tea</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                    <Table.Cell><button className='display-button menu-btn'>cell</button></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </div>
    )
}
export default Drink_Page;