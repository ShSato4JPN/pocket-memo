import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import FormHelperText from '@mui/material/FormHelperText'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface Props {
  setPassword: React.Dispatch<React.SetStateAction<string>>
  label: string
  min: number
  max: number
}

const RegisterPasswordField: React.FC<Props> = (props) => {
  // 入力フォームのエラーチェック用
  const [isError, setIsError] = useState<boolean>(false)
  // 入力文字数カウント用
  const [count, setCount] = useState<number>(0)
  // InputLabel の表示/非表示
  const [isLabelVisible, setIsLabelVisible] = useState<boolean>(false)
  // input の text， passoword　を切り替える
  const [showText, setShowText] = useState<boolean>(false)
  // 入力文字
  const [text, setText] = useState<string>('')

  // 半角スペースだと最適化されるため、全角スペースで調整する
  const _limitFormat = `　　${count} / ${props.max}`
  // エラーメッセージ
  const _errorMessage = `半角英字、数字、記号を組み合わせて ${props.min}〜${props.max} 文字以内で入力してください。`
  //　半角英小文字大文字数字をそれぞれ1種類以上含む min 文字以上 max 文字以下
  const _pattern = `^(?=.*?[a-z])(?=.*?\\d)(?=.*?[!-\\/:-@[-\`{-~])[!-~()]{${props.min},${props.max}}\$`
  // 項目チェック OK メッセージ
  const _validOkMessage = '　　Good 👍'
  // 項目チェック NG メッセージ
  const _validNoMessage = '　　No 👎'

  // キー入力イベント
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputText = event.target.value
    // 入力制限チェック
    if (inputText.length <= props.max) {
      setText(inputText)
      setCount(inputText.length)
    }
    // OK メッセージ表示チェック
    if (isMatchWithPattern(inputText)) {
      setIsError(false)
    } else {
      setIsError(true)
    }
  }
  // 表示アイコンクリック（パスワード表示/非表示）
  const handleClickShowPassword = () => {
    setShowText(!showText)
  }
  // フォーカスイン
  const handleFocusIn = () => {
    setIsError(!isValidation())
    setIsLabelVisible(true)
  }
  //　フォーカスアウト
  const handleBlur = () => {
    setShowText(false)
    setIsLabelVisible(false)
    if (isValidation()) {
      props.setPassword(text)
      setIsError(false)
    } else {
      // エラーの場合は state　を初期化する
      props.setPassword('')
      setIsError(true)
    }
  }
  //　バリデーションチェック
  const isValidation = () => {
    // 入力文字チェック
    if (!isMatchWithPattern(text)) {
      return false
    }
    // 入力文字数チェック
    if (text.length < props.min) {
      return false
    }

    return true
  }

  //　パターンマッチ
  const isMatchWithPattern = (text: string) => {
    const regex = new RegExp(_pattern)
    return regex.test(text)
  }

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <FormControl sx={{ width: '100%' }} variant='standard'>
        <InputLabel>
          {props.label}
          {isLabelVisible
            ? _limitFormat +
              (isError ? _validNoMessage : _validOkMessage)
            : ''}
        </InputLabel>
        <Input
          type={showText ? 'text' : 'password'}
          value={text}
          onFocus={handleFocusIn}
          onBlur={handleBlur}
          onChange={handleChange}
          error={isError}
          sx={{
            fontFamily: 'monospace',
            fontSize: 20,
          }}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
              >
                {showText ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText error={isError}>
          {isError ? _errorMessage : ''}
        </FormHelperText>
      </FormControl>
    </Box>
  )
}

export default RegisterPasswordField
