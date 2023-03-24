import { render, screen, fireEvent } from '@testing-library/react'
import Dashboard from './Dashboard'
import data from '../../../public/data.json'

describe('Dashboard component', () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      }),
    ) as jest.Mock

    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }))
  })
  
  it('renders successfully', async () => {
    render(<Dashboard />)
    expect(screen.getByText("Loading...")).toBeInTheDocument()

    const title = await screen.findByText(data[0].title)
    const table = screen.getByTestId('attributes-table')
    const barChart = screen.getByTestId('attributes-bar-chart')
    const rangeBar = screen.getByLabelText('select-data')

    expect(title).toBeInTheDocument()
    expect(table).toBeInTheDocument()
    expect(barChart).toBeInTheDocument()
    expect(rangeBar).toBeInTheDocument()
  })

  it('renders the correct information when new range is selected', async () => {
    render(<Dashboard />)
    expect(screen.getByText("Loading...")).toBeInTheDocument()

    const initialTitle = await screen.findByText(data[0].title)
    expect(initialTitle).toBeInTheDocument()
    
    const rangeBar = screen.getByLabelText('select-data')
    fireEvent.change(rangeBar, { target: { value: 1 } })

    const newTitle = await screen.findByText(data[1].title)
    expect(newTitle).toBeInTheDocument()
  })
})
