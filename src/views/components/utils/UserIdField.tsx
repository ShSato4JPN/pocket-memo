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
  id: string
}

const UserIdField: React.FC<Props> = (props) => {
  // 入力フォームのエラーチェック用
  const [isError, setIsError] = useState<boolean>(false)
  // 入力フォームのエラーチェック用
  const [isOk, setIsOk] = useState<boolean>(false)
  // 入力文字数カウント用
  const [count, setCount] = useState<number>(0)
  // InputLabel の表示/非表示
  const [visible, setVisible] = useState<boolean>(false)

  // 半角スペースだと最適化されるため、全角スペースで調整する
  const _limitFormat = `　　${count} / ${props.max}`
  // エラーメッセージ
  const _errorMessage = `半角英字(大文字と小文字)、数字、記号を組み合わせて ${props.min}〜${props.max} 文字以内で入力してください。`
  //　半角英小文字大文字数字をそれぞれ1種類以上含む min 文字以上 max 文字以下
  const _pattern = `^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\\d)(?=.*?[!-\\/:-@[-\`{-~])[!-~()]{${props.min},${props.max}}\$`
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
  // フォーカスイン
  const handleFocusIn = () => {
    setVisible(true)
  }
  //　フォーカスアウト
  const handleBlur = () => {
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

export default UserIdField
