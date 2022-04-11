import '../css/app2.css'
import $ from 'jquery'

const $tabBar=$('#app2 .tab-bar')
const $tabContent =$('#app2 .tab-content')
$tabBar.on('click','li',(e)=>{//监听li
    const $li=$(e.currentTarget)//e.target  用jQuery方法
    $li.addClass("selected").siblings().removeClass("selected")
    const index =$li.index()
    $tabContent.children().eq(index).addClass('active')
        .siblings().removeClass('active')
    //永远不要用css()/show()/hide()这三个api
    //样式与行为分离
    //css的变化只由css决定，js只管功能
})
//默认事件
$tabBar.children().eq(0).trigger('click')