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
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  label: string
  min: number
  max: number
  id: string
}

const CustomPasswordField: React.FC<Props> = (props) => {
  // 入力フォームのエラーチェック用
  const [isError, setIsError] = useState<boolean>(false)
  // 入力フォームのエラーチェック用
  const [isOk, setIsOk] = useState<boolean>(false)
  // 入力文字数カウント用
  const [count, setCount] = useState<number>(0)
  // InputLabel の表示/非表示
  const [visible, setVisible] = useState<boolean>(false)
  // input の text， passoword　を切り替える
  const [showText, setShowText] = useState<boolean>(false)

  // 半角スペースだと最適化されるため、全角スペースで調整する
  const _limitFormat = `　　${count} / ${props.max}`
  // エラーメッセージ
  const _errorMessage = `半角英字、数字、記号を組み合わせて ${props.min}〜${props.max} 文字以内で入力してください。`
  //　半角英小文字大文字数字をそれぞれ1種類以上含む min 文字以上 max 文字以下
  const _pattern = `^(?=.*?[a-z])(?=.*?\\d)(?=.*?[!-\\/:-@[-\`{-~])[!-~()]{${props.min},${props.max}}\$`
  // 項目チェック OK メッセージ
  const _validOkMessage = '　　問題ありません👍'
  // 項目チェック NG メッセージ
  const _validNoMessage = '　　入力条件を満たしていません🥺'

  // キー入力イベント
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputText = event.target.value
    // 入力制限チェック
    if (inputText.length <= props.max) {
      props.setText(inputText)
      setCount(inputText.length)
    }
    // OK メッセージ表示チェック
    if (
      props.min <= props.text.length &&
      isMatchWithPattern(inputText)
    ) {
      setIsOk(true)
    } else {
      setIsOk(false)
    }
  }
  // 表示アイコンクリック（パスワード表示/非表示）
  const handleClickShowPassword = () => {
    setShowText(!showText)
  }
  // フォーム送信処理キャンセル
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
  // フォーカスイン
  const handleFocusIn = () => {
    setVisible(true)
  }
  //　フォーカスアウト
  const handleBlur = () => {
    setShowText(false)
    setVisible(false)
    setIsError(!isMatchWithPattern(props.text))
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
        <InputLabel htmlFor={props.id}>
          {props.label}
          {visible
            ? _limitFormat + (isOk ? _validOkMessage : _validNoMessage)
            : ''}
        </InputLabel>
        <Input
          id={props.id}
          type={showText ? 'text' : 'password'}
          value={props.text}
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
                onMouseDown={handleMouseDownPassword}
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

export default CustomPasswordField
