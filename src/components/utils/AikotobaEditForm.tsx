import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import Fade from '@mui/material/Fade'
import FormControlLabel from '@mui/material/FormControlLabel'
import AikotobaEdit from './AikotobaEdit'

interface Props {
  isShare: boolean
  setIsShare: React.Dispatch<React.SetStateAction<boolean>>
  aikotoba: string
  setAikotoba: React.Dispatch<React.SetStateAction<string>>
  checkAikotoba: string
  setCheckAikotoba: React.Dispatch<React.SetStateAction<string>>
}

const AikotobaEditForm: React.FC<Props> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setIsShare(event.target.checked)
  }

  return (
    <Box component={'div'}>
      <Box component={'div'} sx={{ marginBottom: 2 }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox value={props.isShare} onChange={handleChange} />}
            label='許可する'
          />
        </FormGroup>
      </Box>
      {props.isShare ? (
        <Box component={'div'}>
          <Fade in={props.isShare}>
            {
              <Box component={'div'}>
                <Typography sx={{ marginBottom: 2 }}>
                  他の人にメモを共有する際に使用するあいことば（パスワード）を入力してください。
                </Typography>
                <Typography variant='h6' gutterBottom>
                  あいことば *
                </Typography>
                <AikotobaEdit
                  id={'aikotoba'}
                  text={props.aikotoba}
                  setText={props.setAikotoba}
                  label={'あいことば'}
                  min={8}
                  max={20}
                />
                <Typography variant='h6' gutterBottom>
                  あいことば（確認用） *
                </Typography>
                <AikotobaEdit
                  id={'check-aikotobae'}
                  text={props.checkAikotoba}
                  setText={props.setCheckAikotoba}
                  label={'あいことば (確認用)'}
                  min={8}
                  max={20}
                />
              </Box>
            }
          </Fade>
        </Box>
      ) : (
        ''
      )}
    </Box>
  )
}

export default AikotobaEditForm
