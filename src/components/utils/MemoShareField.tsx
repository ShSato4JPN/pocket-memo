import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import PasswordField from '../utils/PasswordField'

interface Props {
  id: string
  shareCheck: boolean
  setShareCheck: React.Dispatch<React.SetStateAction<boolean>>
  aikotoba: string
  setAikotoba: React.Dispatch<React.SetStateAction<string>>
  checkAikotoba: string
  setCheckAikotoba: React.Dispatch<React.SetStateAction<string>>
}

const MemoShareField: React.FC<Props> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    props.setShareCheck(event.target.value === 'on' ? true : false)
  }

  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox value={props.shareCheck} onChange={handleChange} />
          }
          label='許可する'
        />
      </FormGroup>
      {props.shareCheck ? (
        <>
          <Typography>
            他の人にメモを共有する際に使用する合言葉（パスワード）を入力してください。
          </Typography>
          <Typography variant='h6' gutterBottom>
            合言葉 *
          </Typography>
          <InputLabel htmlFor='standard-adornment-password'>
            Password
          </InputLabel>
          <PasswordField
            id={'aikotoba'}
            text={props.aikotoba}
            setText={props.setAikotoba}
            label={'合言葉'}
            min={8}
            max={20}
          />
          <Typography variant='h6' gutterBottom>
            合言葉（確認用） *
          </Typography>
          <PasswordField
            id={'check-aikotobae'}
            text={props.checkAikotoba}
            setText={props.setCheckAikotoba}
            label={'合言葉 (確認用)'}
            min={8}
            max={20}
          />
        </>
      ) : (
        ''
      )}
    </Box>
  )
}

export default MemoShareField
