import {createStore} from 'vuex'
import post from "@/components/Post";

export default createStore({
    state: {
        //postsList: []
        postsList: [
            {   id: 1,
                createTime: "Sep 29, 2022",
                post: "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.",
                likes: 0
            },

            {
                id: 2,
                createTime: "29 Sep, 2022",
                image: "https://ichef.bbci.co.uk/news/400/cpsprodpb/BEC3/production/_122953884_photo24-01-2022113902.jpg",
                post: "Muchas gracias afici??n, esto es para vosotros Siuuuuuuuuu!",
                likes: 0
            },
            {   id: 3,
                createTime: "29 Sep, 2022",
                post: "Please no more foot ball.",
                likes: 0
            },
            {   id: 4,
                createTime: "29 Sep, 2022",
                post: "guyzz noo !! i liek foot bol !!!!",
                likes: 0
            },
            {   id: 5,
                createTime: "29 Sep, 2022",
                post: "You are literally Hitler. Everyone I don't like is literally Hitler",
                likes: 0
            },
            {   id: 6,
                createTime: "29 Sep, 2022",
                post: "MattHDGAMer is a good youtuber - A:P",
                likes: 0
            },
            {   id: 7,
                createTime: "29 Sep, 2022",
                post: "You are literally Hitler. Everyone I don't like is literally Hitler",
                likes: 0
            },
            {   id: 8,
                createTime: "29 Sep, 2022",
                post: "hello wolrd",
                likes: 0
            },
            {   id: 9,
                createTime: "9 Aug, 1945",
                post: "\"Jou taevas tundub kahtlane veic\" - Ho Lee Fuk",
                likes: 0
            },
            {   id: 10,
                createTime: "9 Aug, 1945",
                post: "come to brasiiiii! mundial el favela",
                likes: 0
            }
        ]
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
                    createTime: post.createTime,
                    likes: post.likes
                }
            }
        )
        },
        resetLikes: state => {
            state.postsList.forEach(post => {
                post.likes = 0;
            })
        },
        increaseLike: (state, givenId) => {
            state.postsList.forEach(post => {
                if (post.id == givenId){
                    post.likes +=1;
                }
            })
        }
    },
    /*actions: {
        fetchPosts({commit}) {
            let postsList = []
            fetch("http://myjson.dit.upm.es/api/bins/7ydi")
                .then(response => response.json())
                .then(data => commit("setPostsData", data));
            return postsList
        }
    },*/
    modules: {}
})
