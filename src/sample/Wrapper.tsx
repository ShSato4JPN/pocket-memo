import React from 'react'
import UserIdField from '../components/utils/UserIdField'
import PasswordField from '../components/utils/PasswordField'
import MemoEditArea from '../components/utils/MemoEditArea'
import MemoTitleField from '../components/utils/MemoTitleField'
import AikotobaEditForm from '../components/utils/AikotobaEditForm'
import AikotobaEdit from '../components/utils/AikotobaEdit'
import Typography from '@mui/material/Typography'

const Wrapper = () => {
  const [text, setText] = React.useState<string>('')
  const [text2, setText2] = React.useState<string>('')
  const [text3, setText3] = React.useState<string>('')
  const [text4, setText4] = React.useState<string>('')
  const [text5, setText5] = React.useState<string>('')
  const [text6, setText6] = React.useState<string>('')
  const [isCheck, setIsCheck] = React.useState<boolean>(false)
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
        label={'パスワード(確認用)'}
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

      <AikotobaEdit
        id={'aikotoba'}
        min={8}
        max={10}
        label={'あいことば'}
        text={text}
        setText={setText4}
      />

      <AikotobaEditForm
        id={'sample'}
        aikotoba={text5}
        setAikotoba={setText5}
        checkAikotoba={text6}
        setCheckAikotoba={setText6}
        isShare={isCheck}
        setIsShare={setIsCheck}
      />
    </>
  )
}

export default Wrapper
