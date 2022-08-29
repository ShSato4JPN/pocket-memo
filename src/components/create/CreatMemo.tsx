import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import MemoTitleField from '../utils/MemoTitleField'
import MemoEditArea from '../utils/MemoEditArea'
import AikotobaEditForm from '../utils/AikotobaEditForm'

export default function CreatMemo() {
  const [memoTitle, setMemoTitle] = useState<string>('')
  const [memoBody, setMemoBody] = useState<string>('')
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
    </Grid>
  )
}
