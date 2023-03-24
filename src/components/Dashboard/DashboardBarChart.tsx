import React from 'react'
import { 
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import type { MeasurementAttributes } from './types'

type DashboardBarChartProps = {
  attributes: MeasurementAttributes[]
}

class DashboardBarChart extends React.Component<DashboardBarChartProps> {
  render() {
    return (
      <>
        {this.props.attributes.length > 0 ?
          <div data-testid="attributes-bar-chart">
            <ResponsiveContainer height={300}>
              <BarChart width={500} height={300} data={this.props.attributes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#00b9ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        : null }
      </>
    )
  }
}

export default DashboardBarChart
