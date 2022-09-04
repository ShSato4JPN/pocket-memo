import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import AikotobaEditForm from '../utils/AikotobaEditForm'

export default function CreateMemoOption() {
  const [selectValue, setSelectValue] = useState<string>('')
  const [isShare, setIsShare] = useState<boolean>(false)
  const [aikotoba, setAikotoba] = useState<string>('')
  const [checkAikotoba, setCheckAikotoba] = useState<string>('')

  useEffect(() => {
    // セレクトの初期値は ３日 とする
    setSelectValue('3')
  }, [])

  // プルダウン選択イベント
  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value)
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom>
          メモの保存期間 *
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
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom>
          メモの共有
        </Typography>
        <Box sx={{ width: '100%' }}>
          <AikotobaEditForm
            isShare={isShare}
            setIsShare={setIsShare}
            aikotoba={aikotoba}
            setAikotoba={setAikotoba}
            checkAikotoba={checkAikotoba}
            setCheckAikotoba={setCheckAikotoba}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
