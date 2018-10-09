// 主地址   以下 api 路径均以 https://cnodejs.org/api/v1 为前缀
/*
    1.get /topics 主题首页（接收 get 参数）    /api/v1/topics

    2.get /topic/:id 主题详情（接收 get 参数）   /api/v1/topic/5433d5e4e737cbe96dcef312

    3.post /topics 新建主题（接收 post 参数）

    4.post /topics/update 编辑主题（接收 post 参数）

    5.post /topic_collect/collect 收藏主题（接收 post 参数）

    6.post /topic_collect/de_collect 取消主题

    7.get /topic_collect/:loginname 用户所收藏的主题（/api/v1/topic_collect/alsotang）

    8.post /topic/:topic_id/replies 新建评论 （接收 post 参数）

    9.post /reply/:reply_id/ups 为评论点赞（接受 post 参数）
    
    10.get /user/:loginname 用户详情  （/api/v1/user/alsotang）

    11.post /accesstoken 验证 accessToken 的正确性

    12.get /message/count 获取未读消息数

    13.get /messages 获取已读和未读消息

    14.post /message/mark_all 标记全部已读

    15.post /message/mark_one/:msg_id 标记单个消息为已读  （/message/mark_one/58ec7d39da8344a81eee0c14）

*/ 