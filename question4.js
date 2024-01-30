let api = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    try{
        let res = await axios.get(api);
        return(res.data);
    } catch(e) {
        throw new Error("Failed to fetch posts from the API");
    }
}

async function logFirstFiveTitles() {
    try {
        const posts = await getPosts();
        for (let i = 0; i < 5; i++) {
            console.log(posts[i].title);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

console.log(logFirstFiveTitles());