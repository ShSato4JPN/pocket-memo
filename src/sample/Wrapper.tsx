import React from 'react'
import InputLimitationTextField from '../components/utils/InputLimitationTextField'
import Typography from '@mui/material/Typography'

const Wrapper = () => {
  const [text, setText] = React.useState<string>('')
  return (
    <>
      <InputLimitationTextField
        id={'custom-input-form'}
        text={text}
        setText={setText}
        label={'ユーザーID'}
        min={8}
        max={15}
        pattern={
          '(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\\d)[a-zA-Z\\d]'
        }
      />
      <Typography sx={{ backgroundColor: 'lightgrey' }}>
        {text}
      </Typography>
    </>
  )
}

export default Wrapper
