import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import MemoTitleField from '../utils/MemoTitleField'
import MemoEditArea from '../utils/MemoEditArea'

export default function MemoCreatingForm() {
  const [memoTitle, setMemoTitle] = useState<string>('')
  const [memoBody, setMemoBody] = useState<string>('')
  const [selectValue, setSelectValue] = useState<string>('3')

  // プルダウン選択イベント
  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value)
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom>
          タイトル *
        </Typography>
        <Box sx={{ width: '50%' }}>
          <MemoTitleField
            text={memoTitle}
            setText={setMemoTitle}
            id={'memo-title'}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom>
          メモ *
        </Typography>
        <MemoEditArea text={memoBody} setText={setMemoBody} id={'memo-body'} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom>
          保存期間 *
        </Typography>
        <FormControl>
          <Select
            onChange={handleChange}
            name='period'
            id='period'
            value={selectValue}
          >
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
        <FormControl sx={{ margin: 1, width: '100%' }} variant='standard'>
          <InputLabel htmlFor='standard-adornment-password'>
            Aikotoba
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type='text'
            sx={{ fontSize: 20, fontFamily: 'monospace' }}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}
