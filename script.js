// Function to fetch posts from social media APIs
function fetchPosts() {
    // Simulated data for demonstration
    const posts = [
        { platform: "Facebook", content: "This is a Facebook post." },
        { platform: "Twitter", content: "This is a tweet." },
        { platform: "Instagram", content: "This is an Instagram post." }
    ];

    displayPosts(posts);
}

// Function to display posts
function displayPosts(posts) {
    const dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = "";

    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `
            <h2>${post.platform}</h2>
            <p>${post.content}</p>
        `;
        dashboard.appendChild(postDiv);
    });
}

// Event listener for login button
document.getElementById("loginBtn").addEventListener("click", () => {
    // Simulated login process
    alert("You have been logged in!");
    // Fetch posts after login
    fetchPosts();
});
