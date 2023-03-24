import React from 'react'
import { Table } from 'react-bootstrap'
import type { MeasurementAttributes } from './types'

type DashboardTableProps = {
  attributes: MeasurementAttributes[]
}

class DashboardTable extends React.Component<DashboardTableProps> {
  render() {
    return (
      <div data-testid="attributes-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {this.props.attributes.length > 0 ?
              this.props.attributes.map((attribute) => {
                return (
                  <tr key={attribute.name}>
                    <td>{attribute.name}</td>
                    <td>{attribute.value + attribute.unit}</td>
                  </tr>
                )
              })
            : null}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default DashboardTable
