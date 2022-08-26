import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

interface State {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

export default function MemoCreatingForm() {
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
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom>
          タイトル *
        </Typography>
        <FormControl
          sx={{ margin: 1, width: '60%' }}
          variant='standard'
        >
          <InputLabel htmlFor='standard-adornment-password'>
            UserName
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type='text'
            value={values.password}
            onChange={handleChange('password')}
            sx={{ fontSize: 20, fontFamily: 'monospace' }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom>
          メモ *
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextareaAutosize
              required
              id='memo-body'
              minRows={10}
              name='body'
              style={{
                width: '100%',
                padding: 10,
                fontSize: 20,
                fontFamily: 'monospace',
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom>
          保存期間 *
        </Typography>
        <FormControl>
          <Select name='period' id='period' defaultValue={3}>
            {[1, 2, 3, 4, 5, 6, 7].map((v) => (
              <MenuItem value={v} key={v}>
                {v}日
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <Typography variant='h6' gutterBottom>
          メモの共有
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label='許可する' />
        </FormGroup>
      </Grid>
      <Grid item xs={5}>
        <Typography variant='h6' gutterBottom>
          合言葉 *
        </Typography>
        <FormControl
          sx={{ margin: 1, width: '100%' }}
          variant='standard'
        >
          <InputLabel htmlFor='standard-adornment-password'>
            Aikotoba
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type='text'
            value={values.password}
            onChange={handleChange('password')}
            sx={{ fontSize: 20, fontFamily: 'monospace' }}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}
