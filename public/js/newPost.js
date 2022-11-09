const newPostHandler = async(event)=>{
    event.preventDefault();
    console.log("new Post")
    const title = document.querySelector("#inputTitle").value.trim();
    const content = document.querySelector("#inputContent").value.trim(); 
    if(title && content){
        const response = await fetch("/api/posts/signup", {
            method: "POST",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
          });

          if (response.ok) {
            document.location.replace("/dashboard");
          } else {
            alert("Failed to Create Post.");
          }
      
    }
};

document
  .querySelector(".createPost-form")
  .addEventListener("submit", newPostHandler);
