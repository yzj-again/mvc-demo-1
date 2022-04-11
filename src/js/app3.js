import '../css/app3.css'
import $ from 'jquery'
const $suqare=$('#app3 .square')
$suqare.on('click',()=>{
    $suqare.toggleClass('active')//如果没有就加上
})//不要用jquery操作样式