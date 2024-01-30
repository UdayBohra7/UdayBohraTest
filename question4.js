let api = "https://jsonplaceholder.typicode.com/posts"; // storing api link in a string for json format.

// function for fetching data from the api.
async function getPosts() {
    try{
        let res = await axios.get(api);
        return(res.data);
    } catch(e) {
        throw new Error("Failed to fetch posts from the API");  // throw an error if api will not respond.
    }
}

// function for returning an array of first five titles.
async function logFirstFiveTitles() {
    try {
        var arr = [];
        const posts = await getPosts();           
        for (let i = 0; i < 5; i++) {
            // console.log(posts[i].title);
            arr.push(posts[i].title);
        }
        console.log(arr);
        return arr;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

console.log(logFirstFiveTitles());