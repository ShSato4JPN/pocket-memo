import React from 'react'
import Grid from '@mui/material/Grid'
import HowToItem from './HowToItem'

const howToItems = [
  {
    title: 'メモる！',
    path: '/assets/images/sample.png',
    message:
      'スマホ や PC から手軽にメモを作成する事ができます！',
  },
  {
    title: '保存する！',
    path: '/assets/images/sample.png',
    message: '無料でメモをサーバ上に保存します！',
  },
  {
    title: 'どこからでも確認！',
    path: '/assets/images/sample.png',
    message:
      '世界中のどこからでも保存したメモを参照する事が可能です！',
  },
]

const HowToForm: React.FC = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent='center'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      {howToItems.map((item, index) => (
        <Grid item key={index}>
          <HowToItem
            title={item.title}
            path={item.path}
            message={item.message}
            no={index}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default HowToForm
