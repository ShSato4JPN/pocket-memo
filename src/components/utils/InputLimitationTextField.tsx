import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'

interface Props {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  label: string
  min: number
  max: number
  pattern: string
  id: string
}

const InputLimitationTextField: React.FC<Props> = (
  props
) => {
  // 入力フォームのエラーチェック用
  const [isError, setIsError] = useState<boolean>(false)
  // 入力文字数カウント用
  const [count, setCount] = useState<number>(0)
  // InputLabel の表示/非表示
  const [visible, setVisible] = useState<boolean>(false)

  // 半角スペースだと最適化されるため、全角スペースで調整する
  const _limitFormat = `　　${count} / ${props.max}`
  //　半角英小文字大文字数字をそれぞれ1種類以上含む min 文字以上 max 文字以下
  const _pattern = `^${props.pattern}{${props.min},${props.max}}\$`
  // エラーメッセージ
  const _errorMessage = `全角文字はNGです。半角英数字 (大文字/小文字) を最低１文字含め、${props.min}〜${props.max}文字以内で入力してください。`

  // キー入力イベント
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputText = event.target.value
    if (inputText.length <= props.max) {
      props.setText(inputText)
      setCount(inputText.length)
    }
    return
  }
  // フォーカスイン
  const handleFocusIn = () => {
    setVisible(true)
    return
  }
  //　フォーカスアウト
  const handleBlur = () => {
    setVisible(false)
    const regex = new RegExp(_pattern)
    setIsError(!regex.test(props.text))
    return
  }

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <FormControl
        sx={{ width: '100%' }}
        variant='standard'
      >
        <InputLabel htmlFor={props.id}>
          {props.label}
          {visible ? _limitFormat : ''}
        </InputLabel>
        <Input
          id={props.id}
          type='text'
          value={props.text}
          onChange={handleChange}
          onFocus={handleFocusIn}
          onBlur={handleBlur}
          error={isError}
          sx={{
            fontFamily: 'monospace',
            fontSize: 20,
          }}
        />
        <FormHelperText error={isError}>
          {isError ? _errorMessage : ''}
        </FormHelperText>
      </FormControl>
    </Box>
  )
}

export default InputLimitationTextField
