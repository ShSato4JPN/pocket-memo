import React from 'react'
import CustomInputField from '../components/utils/CustomInputField'
import CustomPasswordField from '../components/utils/CustomPasswordField'
import Typography from '@mui/material/Typography'

const Wrapper = () => {
  const [text, setText] = React.useState<string>('')
  const [text2, setText2] = React.useState<string>('')
  return (
    <>
      <CustomInputField
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

      <CustomPasswordField
        id={'custom-input-form'}
        text={text2}
        setText={setText2}
        label={'パスワード'}
        min={8}
        max={20}
      />
      <Typography sx={{ backgroundColor: 'lightgrey' }}>
        {text2}
      </Typography>
    </>
  )
}

export default Wrapper
