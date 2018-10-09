
<template>
<div>
    <Header class="header"></Header>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                <!--    @on-select 重点   @on-select="selectMenu" -->
                <Menu 
                     active-name = classActive
                     theme="dark" 
                     width="auto" 
                     :class="menuitemClasses"
                      @on-select="selectMenu" 
                >
                    <MenuItem :name="item.name" 
                              v-for="item in menusData"
                              :key="item.name"
                    >
                          <Icon type="ios-navigate"></Icon>
                        <span>{{item.title}}</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Content :style="{padding: '0 16px 16px'}">
                    <div >
                        <ul>
                            <router-link
                                class="itemLI"
                                tag="li"
                                v-for="item in list"
                                :key="item.id"
                                :to="{name:'Topic',params:{id:item.id}}"
                            >
                                <img  class="imgsize" :src="item.author.avatar_url" alt="">    
                                <span class="Itemnum">{{item.reply_count}}/{{item.visit_count}}</span>     
                                <span class="Itemtab">{{item.tab}}</span>
                                <a href="javascript:;" class="ItemTitle">{{Titlenum(item)}}</a>
                            </router-link>
                        </ul>
                    </div>
                     <Page :current = 'page' @on-change = "changepage" :total="500" />
                </Content>
            </Layout>
        </Layout>
    </div>
    </div>
</template>
<script>
   import Header from '@/components/Header.vue'
    import {getTopics} from '@/server/index'
    import {menusData} from './data'
    import Topic from '@/views/topic/topic.vue'
    export default {
        data () {
            return {
                isCollapsed: false,
                menusData,   //存引入的数据
                classActive:'all',  //用来存储tab类型
                list:[],     //用来储存后端拿到的数据
                page:1       //默认为第一页
                
            };
        },
         components:{
            Header,
            Topic
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
          //监测
        watch:{
            // $route(){
            //     this.getTopicsfn()
            // }
            $route:{
              handler: 'getTopicsfn',
              immediate: true
          }
        },
        methods:{
            //监测选中的是哪个
            selectMenu(name){
               this.$router.push({
                  query:{
                      tab:name
                  }
               })
               this.$emit('id')
            },
             //当切换页面时触发的事件
            changepage(page){
                this.$router.push({
                    query:{
                        ...this.$route.query,
                        page
                    }
                })
                this.getTopicsfn({page:page})
            }, 
            //从后端拿数据
            async getTopicsfn(params = {page:1}){
                let page = params.page || this.$route.query.page || 1
                this.page = parseInt(page)
                let tab = this.$route.query.tab || 'all';
                this.classActive = tab;
                let {data} = await getTopics({
                    page:page,
                    tab,
                    limit:10
                })
                this.list = data.data
            },
            //title
            Titlenum(item){
                return  item.title.length > 45 ? item.title.slice(0,40) + '...' : item.title 
            }
        }   
    }
</script>
