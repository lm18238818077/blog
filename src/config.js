import React from 'react'
import { Icon } from 'antd'
import SvgIcon from '@/components/SvgIcon'

import MyInfo from '@/views/web/about/MyInfo'

// API_BASE_URL
export const API_BASE_URL = process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:6060' : 'http://127.0.0.1:6060'

// project config
export const HEADER_BLOG_NAME = '小明的博客' // header title 显示的名字

// === sidebar
export const SIDEBAR = {
  avatar: require('@/assets/images/avatar.jpeg'), // 侧边栏头像
  title: '小明', // 标题
  subTitle: '前端专业搬砖', // 子标题
  // 个人主页
  homepages: {
    github: {
      link: 'https://github.com/lm18238818077/blog',
      icon: <Icon type='github' theme='filled' className='homepage-icon' />
    },
    juejin: {
      link: 'https://juejin.im/user/5c6522c96fb9a049a97a3766',
      icon: <SvgIcon type='iconjuejin' className='homepage-icon' />
    }
  }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

/**
 * github config
 */
export const GITHUB = {
  enable: true, // github 第三方授权开关
  client_id: 'ef5dcc92c5754a20dd86', // Setting > Developer setting > OAuth applications => client_id
  url: 'https://github.com/login/oauth/authorize' // 跳转的登录的地址
}

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true, // 关于页面是否开启讨论
  renderMyInfo: <MyInfo /> // 我的介绍 自定义组件 => src/views/web/about/MyInfo.jsx
}
