import axios from 'axios'

let cn = axios.create({
    //根路径  以下 api 路径均以 https://cnodejs.org/api/v1 为前缀
    baseURL:'https://cnodejs.org/api/v1'
})

//后端接口

// 主题
// get /topics 主题首页
// 接收 get 参数

/*后端需要接收的参数*/ 
// page Number 页数
// tab String 主题分类。目前有 ask share job good
// limit Number 每一页的主题数量
// mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
// 示例：/api/v1/topics

export function getTopics(params = {page:1,tab:'',limit:10}){
    return cn.get('/topics',{
                params
            })
} 


// get /topic/:id 主题详情
// 接收 get 参数

// params: Object
//     id String

export function getTopicsId(params){
    return cn.get('/topic/'+ params.id)
}
