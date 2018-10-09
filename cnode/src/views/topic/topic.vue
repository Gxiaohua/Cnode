
<template>
    <div class="layout">
        <Layout>
            <Header></Header>
            <Content :style="{padding: '0 250px'}">
                <Card>
                    <div style="min-height: 600px; text-algin:center;">
                        <div class="list-title">{{list.title}}</div>
                        <div>
                            <div href="javascript:;" v-if="list.author" class="filname">作者：{{list.author.loginname}}</div>
                            <img :src="list.author.avatar_url" alt="">
                        </div>
                        <div v-html="list.content">{{list.content}}</div>
                    </div>
                </Card>
            </Content>
            <Content :style="{padding: '0 250px'}">
                <Card>
                    <div style="min-height: 600px; text-algin:center;">
                        <!-- <div class="list-title">{{list.title}}</div>
                        <div>
                            <div href="javascript:;" v-if="list.author" class="filname">作者：{{list.author.loginname}}</div>
                            <img :src="list.author.avatar_url" alt="">
                        </div>
                        <div v-html="list.content">{{list.content}}</div> -->
                        gjitrhhrj5555555555555555555555555555555555555555555
                        55555555555555555555555555555555555555555555555555555555555
                        99999999999999999999999999999999999999999999999
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue'
    import {getTopicsId} from '@/server/index.js'
    import "./topic.css"
    export default {
        props:['id'],
        data(){
            return{
                list:{
                    author:{}
                }
            }
        },
        components:{
            Header
        },
        async created(){
            let id = this.id
            let {data} = await getTopicsId({id})
            this.list = data.data
            console.log(this.list)
        }
    }
</script>
