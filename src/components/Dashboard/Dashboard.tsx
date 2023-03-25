import React from "react"
import { 
  Container,
  Stack,
  Form,
  Row,
  Col
} from 'react-bootstrap'
import DashboardTable from './DashboardTable'
import DashboardBarChart from './DashboardBarChart'
import type { DashboardState, MeasurementAttributes } from "./types"
import './Dashboard.scss'

class Dashboard extends React.Component<{}, DashboardState> {
  state: DashboardState = {
    measurements: [],
    currentItemIndex: 0
  }

  componentDidMount() {
    fetch('./data.json')
    .then((resp) => resp.json())
    .then((measurements) => {
      this.setState({
        measurements,
      })
    })
  }

  render() {
    const measurements = this.state.measurements
    const currentItemIndex = this.state.currentItemIndex
    const attributes: MeasurementAttributes[] = measurements.length > 0 ? measurements[currentItemIndex].attributes : []

    const getNextMeasurements = (index: number) => {
      this.setState({
        ...this.state,
        currentItemIndex: index
      })
    }

    return (
      <Container className="dashboard-container">
        {this.state.measurements.length > 0 ?
          <Stack gap={5}>
            <h1>{measurements[currentItemIndex].title}</h1>
            <Row>
              <Col sm={6}>
                <DashboardTable attributes={attributes} />
              </Col>
              <Col sm={6}>
                <DashboardBarChart attributes={attributes} />
              </Col>
            </Row>
            <div className="range-bar-container">
              <div className="range-bar-wrapper">
                <Form.Label>Range</Form.Label>
                <Form.Range 
                  aria-label="select-data"
                  onChange={(e) => getNextMeasurements(Number(e.target.value))}
                  min={0}
                  max={attributes.length - 1}
                />
              </div>
            </div>
          </Stack>
        : 'Loading...' }
      </Container>
    )
  }
}

export default Dashboard
