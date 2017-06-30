$( document ).ready(() => {



function pageLoad() {

};

function getNews() {

    $.ajax({
      url: 'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=14a1bd095a374037825240a99606a730',
      type: 'GET',
      dataType: "json",
      success:(result) => {

      let title1 = $('.title1');
      let title2 = $('.title2');
      let title3 = $('.title3');
      let image1 = $('.image1');
      let image2 = $('.image2');
      let image3 = $('.image3');

      title1.text(result.articles[0].title);
      title2.text(result.articles[1].title);
      title3.text(result.articles[2].title);
      image1.attr('src',result.articles[0].urlToImage);
      image2.attr('src',result.articles[1].urlToImage);
      image3.attr('src',result.articles[2].urlToImage)

        console.log(result.source);
        console.log(result.sortBy);
        console.log(result.articles[0].title);
      }
    })
  }
//Editing a blogID

$('#editBlog').click((a)=>{
  a.preventDefault();
  let editedBlog = {
    "blogPost": $('#textArea').val()
  }
  $.ajax({
    url: '/editBlog/'+ $(a.target).attr('action'),
    type: 'PATCH',
    data: editedBlog,
    success(result) {

      window.location.replace('/myPage');

    }
  })
})
//Deleting a post
$('.deletePost').click((a)=>{
  a.preventDefault();
  $.ajax({
    url: '/myPage/' + $(a.target).attr("action"),
    type: 'DELETE',
    success(result){
      console.log("Ajax delete blog results passed to routes");
    }
  })
})

$('#logout').click(()=>{
  alert("User logged out")
  $.ajax({
    url: '/login',
    type: 'DELETE',
    data: blogID,
    success(result){
      console.log("Ajax results passed to routes");
    }
  })
})
// getNews();

});
