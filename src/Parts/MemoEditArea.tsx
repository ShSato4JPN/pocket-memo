import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'

interface Props {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  id: string
}

const MemoEditArea: React.FC<Props> = (props) => {
  // 入力文字数カウント用
  const [textCount, setTextCount] = useState<number>(0)
  // InputLabel の表示/非表示
  const [visible, setVisible] = useState<boolean>(false)
  // 表示行数(初期状態は5行表示)

  // URL の最大文字数
  const _maxTextLength = 2048
  // 表示最大行数
  const _maxRowsCount = 10
  // 半角スペースだと最適化されるため、全角スペースで調整する
  const _limitFormat = `　　${textCount} / ${_maxTextLength}`
  // 表示行数のデフォルト値

  // テキスト入力イベント
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputText = event.target.value
    if (inputText.length <= _maxTextLength) {
      props.setText(inputText)
      setTextCount(inputText.length)
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
  // テキストに含まれている改行コードの数を取得
  const getNewLineCount = (text: string) => {
    return (props.text.match(/(\r\n|\n|\r)/g) || []).length
  }

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl sx={{ width: '100%' }} variant='standard'>
        <InputLabel>{'メモ' + (visible ? _limitFormat : '')}</InputLabel>
        <Input
          multiline={true}
          maxRows={_maxRowsCount}
          value={props.text}
          fullWidth
          onChange={handleChange}
          onFocus={handleFocusIn}
          onBlur={handleBlur}
          sx={{
            fontFamily: 'monospace',
            fontSize: 20,
          }}
        />
      </FormControl>
    </Box>
  )
}

export default MemoEditArea
