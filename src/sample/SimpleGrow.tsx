import * as React from 'react'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Theme } from '@mui/material/styles'

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component='svg' sx={{ width: 100, height: 100 }}>
      <Box
        component='polygon'
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
      />
    </Box>
  </Paper>
)

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false)

  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label='Show'
      />
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>
          {
            <Paper sx={{ m: 1 }} elevation={4}>
              <Box component='svg' sx={{ width: 100, height: 100 }}>
                <Box
                  component='polygon'
                  sx={{
                    fill: (theme: Theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                  }}
                />
              </Box>
            </Paper>
          }
        </Grow>
      </Box>
    </Box>
  )
}
