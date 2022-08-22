import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

interface State {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

export default function TermsForm() {
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const handleChange =
    (prop: keyof State) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  return (
    <Grid
      container
      spacing={3}
      sx={{
        direction: 'column',
        justifyContent: 'center',
      }}
    >
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom>
          利用規約
        </Typography>
      </Grid>
    </Grid>
  )
}
