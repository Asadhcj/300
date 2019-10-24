import Vue from 'vue'
// 引入自定义组件
import ButtonTabs from './button-tabs'
import BgLine from './bg-line'
import BgLineBlue from './bg-line-blue'
import BgLineShort from './bg-line-short'
import TitleMore from './tittle-more'
import VideoPlayer from './video-player'

// element组件按需引入
import {
  Carousel,
  CarouselItem,
  Row,
  Col,
  Button,
  RadioGroup,
  RadioButton,
  Dialog
} from 'element-ui'

// 注册自定义组件
Vue.component('button-tabs', ButtonTabs)
Vue.component('bg-line', BgLine)
Vue.component('bg-line-blue', BgLineBlue)
Vue.component('bg-line-short', BgLineShort)
Vue.component('title-more', TitleMore)
Vue.component('video-player', VideoPlayer)

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Dialog)
