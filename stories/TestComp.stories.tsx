import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import AppTitle from '../src/components/AppTitle'

export default {
  title: 'Test/AppTitle',
  component: AppTitle,
} as ComponentMeta<typeof AppTitle>

const Template: ComponentStory<typeof AppTitle> = (
  args
) => <AppTitle {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'secondary',
}

export const Large = Template.bind({})
Large.args = {
  label: 'large',
}

export const Small = Template.bind({})
Small.args = {
  label: 'small',
}
