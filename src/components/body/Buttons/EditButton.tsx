import React from 'react'
import Button from '@mui/material/Button'
import { BreakPoints } from '../../../types/MuiTypes'

type Props = {
  width: BreakPoints
  height: BreakPoints
}

const EditButton: React.FC<Props> = (props) => {
  return (
    <Button
      variant='outlined'
      sx={{
        ...props,
      }}
    >
      メモを見る
    </Button>
  )
}

export default EditButton
