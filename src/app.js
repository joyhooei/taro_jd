import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.styl'

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      "pages/logs/logs",
      "pages/my/my"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '商城',
      navigationBarTextStyle: 'black'
    },
    tabBar: {  
      "color": "#a9b7b7",  
      "selectedColor": "#11cd6e",  
      "borderStyle": "black" ,
      "list": [{  
        "selectedIconPath": "images/index2.png",  
        "iconPath": "images/index1.png",  
        "pagePath": "pages/index/index",  
        "text": "首页"  
      }, {  
        "selectedIconPath": "images/classify2.png",  
        "iconPath": "images/classify1.png",  
        "pagePath": "pages/logs/logs",  
        "text": "分类"  
      },{  
        "selectedIconPath": "images/buycar2.png",  
        "iconPath": "images/buycar1.png",  
        "pagePath": "pages/my/my",  
        "text": "购物车"  
      },{  
        "selectedIconPath": "images/my2.png",  
        "iconPath": "images/my1.png",  
        "pagePath": "pages/my/my",  
        "text": "我的"  
      }
      ]  
    } 
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
