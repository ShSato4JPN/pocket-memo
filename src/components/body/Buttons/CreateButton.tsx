import React from 'react'
import Button from '@mui/material/Button'
import { BreakPoints } from '../../../types/MuiTypes'

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
      メモを作成する
    </Button>
  )
}

export default CreateButton
