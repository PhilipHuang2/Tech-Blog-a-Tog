const newCommentHandler = async(event)=>{
    event.preventDefault();
    const content = document.querySelector("#intputContent").value.trim();
    console.log(content);
    // if(content)
    // {
    //     const response = await fetch("/api/comments/", {
    //         method: "POST",
    //         body: JSON.stringify({ title, content }),
    //         headers: { "Content-Type": "application/json" },
    //       });
    // }
};




document
.querySelector('.createComment-form')
.addEventListener("submit", newCommentHandler)