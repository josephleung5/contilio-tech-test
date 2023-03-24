export type MeasurementAttributes = {
  name: string
  value: number
  unit: string
}

type Measurements = {
  title: string
  attributes: MeasurementAttributes[]
}

export type DashboardState = {
  measurements: Measurements[] | []
  currentItemIndex: number
}
