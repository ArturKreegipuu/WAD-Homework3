import {createStore} from 'vuex'

export default createStore({
    state: {
        postsList: []
    },
    getters: {

    },
    mutations: {
        setPostsData(state, postsData) {
            state.postsList = postsData.map(post => {
                return {
                    userId: post.userId,
                    userName: post.userName,
                    postId: post.id,
                    post: post.post,
                    image: post.image,
                    createTime: post.createTime
                }
            }
        )
        }
    },
    actions: {
        fetchPosts({commit}) {
            let postsList = []
            fetch("http://myjson.dit.upm.es/api/bins/7ydi")
                .then(response => response.json())
                .then(data => commit("setPostsData", data));
            return postsList
        }
    },
    modules: {}
})
