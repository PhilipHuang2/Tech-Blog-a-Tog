const newCommentHandler = async(event)=>{
    event.preventDefault();
    const content = document.querySelector("#inputContent").value.trim();
    console.log(content);
    const url = window.location.href.split('/');
    const post_id = url.at(url.length-1)
    console.log(post_id);

    if(content)
    {
        const response = await fetch("/api/comments/", {
            method: "POST",
            body: JSON.stringify({ content, post_id }),
            headers: { "Content-Type": "application/json" },
          });

          if (response.ok) {
            document.location.replace("/comment/" + post_id);
          } else {
            alert("Failed to Create Post.");
          }
    }
};




document
.querySelector('.createComment-form')
.addEventListener("submit", newCommentHandler);