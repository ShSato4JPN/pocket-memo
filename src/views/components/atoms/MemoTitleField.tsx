import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'

interface Props {
  setMemoTitle: React.Dispatch<React.SetStateAction<string>>
}

const MemoTitleField: React.FC<Props> = (props) => {
  // 入力文字
  const [text, setText] = useState<string>('')
  // 入力文字数カウント用
  const [count, setCount] = useState<number>(0)
  // InputLabel の表示/非表示
  const [visible, setVisible] = useState<boolean>(false)

  // URL の最大文字数
  const _maxTextLength = 20
  // 半角スペースだと最適化されるため、全角スペースで調整する
  const _limitFormat = `　　${count} / ${_maxTextLength}`

  // キー入力イベント
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputText = event.target.value
    if (inputText.length <= _maxTextLength) {
      setText(inputText)
      setCount(inputText.length)
    }
  }
  // フォーカスイン
  const handleFocusIn = () => {
    setVisible(true)
  }
  //　フォーカスアウト
  const handleBlur = () => {
    setVisible(false)
  }

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <FormControl sx={{ width: '100%' }} variant='standard'>
        <InputLabel>
          {'タイトル' + (visible ? _limitFormat : '')}
        </InputLabel>
        <Input
          type='text'
          value={text}
          onChange={handleChange}
          onFocus={handleFocusIn}
          onBlur={handleBlur}
          disableUnderline
          sx={{
            fontFamily: 'monospace',
            fontSize: 20,
          }}
        />
      </FormControl>
    </Box>
  )
}

export default MemoTitleField
