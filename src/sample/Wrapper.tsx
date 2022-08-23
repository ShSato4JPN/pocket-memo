import React from 'react'
import InputLimitationTextField from '../components/utils/InputLimitationTextField'
import Typography from '@mui/material/Typography'

const Wrapper = () => {
  const [text, setText] = React.useState<string>('')
  const [count, setCount] = React.useState<number>(0)
  return (
    <>
      <InputLimitationTextField
        text={text}
        setText={setText}
        setCount={setCount}
        label={'sample'}
        limit={10}
        valid={true}
      />
      <Typography sx={{ backgroundColor: 'pink' }}>
        {count} / 10
      </Typography>
    </>
  )
}

export default Wrapper
