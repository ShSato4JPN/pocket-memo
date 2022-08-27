import React from 'react'
import UserIdField from '../components/utils/UserIdField'
import PasswordField from '../components/utils/PasswordField'
import MemoEditArea from '../components/utils/MemoEditArea'
import MemoTitleField from '../components/utils/MemoTitleField'
import MemoShareField from '../components/utils/MemoShareField'
import Typography from '@mui/material/Typography'

const Wrapper = () => {
  const [text, setText] = React.useState<string>('')
  const [text2, setText2] = React.useState<string>('')
  const [text3, setText3] = React.useState<string>('')
  const [text4, setText4] = React.useState<string>('')
  return (
    <>
      <UserIdField
        id={'custom-input-form'}
        text={text}
        setText={setText}
        label={'ユーザーID'}
        min={8}
        max={15}
      />
      <Typography sx={{ backgroundColor: 'lightgrey' }}>{text}</Typography>

      <PasswordField
        id={'custom-input-form'}
        text={text2}
        setText={setText2}
        label={'パスワード'}
        min={8}
        max={20}
      />
      <Typography sx={{ backgroundColor: 'lightgrey' }}>{text2}</Typography>

      <MemoTitleField
        id={'custom-input-form'}
        text={text3}
        setText={setText3}
      />
      <Typography sx={{ backgroundColor: 'lightgrey' }}>{text3}</Typography>

      <MemoEditArea id={'custom-input-form'} text={text4} setText={setText4} />
      <Typography sx={{ backgroundColor: 'lightgrey' }}>{text4}</Typography>

      <MemoShareField />
    </>
  )
}

export default Wrapper
