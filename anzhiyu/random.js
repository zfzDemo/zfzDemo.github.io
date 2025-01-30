var posts=["2024/08/14/hello-world/","2024/08/14/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };