import React from 'react'
import InputLimitationTextField from '../components/utils/InputLimitationTextField'

const Wrapper = () => {
  const [text, setText] = React.useState<string>('')
  return (
    <InputLimitationTextField
      text={text}
      setText={setText}
      label={'sample'}
      limit={10}
    />
  )
}

export default Wrapper
