import React from 'react'
import CustomInputField from '../components/utils/CustomInputField'
import CustomPasswordField from '../components/utils/CustomPasswordField'
import CustomTextArea from '../components/utils/MemoEditArea'
import Typography from '@mui/material/Typography'

const Wrapper = () => {
  const [text, setText] = React.useState<string>('')
  const [text2, setText2] = React.useState<string>('')
  const [text3, setText3] = React.useState<string>('')
  return (
    <>
      <CustomInputField
        id={'custom-input-form'}
        text={text}
        setText={setText}
        label={'ユーザーID'}
        min={8}
        max={15}
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
      <CustomTextArea
        id={'custom-input-form'}
        text={text3}
        setText={setText3}
      />
      <Typography sx={{ backgroundColor: 'lightgrey' }}>
        {text3}
      </Typography>
    </>
  )
}

export default Wrapper
