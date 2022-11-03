import Test from './components/Test/index'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import Loading from './components/Loading/index'
import FlyBox from './components/FlyBox/index'
import Container from './components/Container/index'
export default function(Vue){
    Vue.use(Test)
    Vue.use(Icon)
    Vue.use(SvgAnimation)
    Vue.use(Loading)
    Vue.use(FlyBox)
    Vue.use(Container)
}
