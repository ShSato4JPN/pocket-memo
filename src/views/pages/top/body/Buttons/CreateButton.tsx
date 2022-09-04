import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { BreakPoints } from '../../../../types/MuiTypes'

type Props = {
  width: BreakPoints
  height: BreakPoints
}

const CreateButton: React.FC<Props> = (props) => {
  return (
    <Button
      variant='outlined'
      sx={{
        ...props,
      }}
    >
      <Typography fontFamily='monospace'>
        メモを作成する
      </Typography>
    </Button>
  )
}

export default CreateButton
