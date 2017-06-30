$( document ).ready(() => {



function pageLoad() {
let cors = 'https://galvanize-cors-proxy.herokuapp.com/'
let newsAPI = $('.newsAPI');
let newsID = newsAPI.attr('id');

newsAPI.each(function(){

  let api = $(this).text();
  let id = $(this).attr('id');

  $.ajax({
    url:cors+api,
    type:"GET",
    success(returnedAPI){
      console.log("this is from ajax "+ returnedAPI.articles[0].title);
      // let title1 = $('.title1');

      //let title2 = $('.title2');
      let title2 = $(`#title2_${id}`);
      let title3 = $(`#title3_${id}`);
      let title4 = $(`#title4_${id}`);
      // let image1 = $(`#image1`);
      let image2 = $(`#image2_${id}`);
      let image3 = $(`#image3_${id}`);
      let image4 = $(`#image4_${id}`);

      let link2 = $(`#link2_${id}`);
      let link3 = $(`#link3_${id}`);
      let link4 = $(`#link4_${id}`);

      // title1.text(result.articles[0].title);
      title2.text(returnedAPI.articles[0].title);
      title3.text(returnedAPI.articles[1].title);
      title4.text(returnedAPI.articles[2].title);
      // image1.attr('src',returnedAPI.articles[0].urlToImage);
      image2.attr('src',returnedAPI.articles[0].urlToImage);
      image3.attr('src',returnedAPI.articles[1].urlToImage)
      image4.attr('src',returnedAPI.articles[2].urlToImage)

      link2.attr('href',returnedAPI.articles[0].url);
      link3.attr('href',returnedAPI.articles[1].url);
      link4.attr('href',returnedAPI.articles[2].url);

      console.log(returnedAPI.source);
      console.log(returnedAPI.sortBy);
      console.log(returnedAPI.articles[0].title);
    }
  })
})
  // $.ajax({
  //   url: '/news/api',
  //   type: 'GET',
  //   success(resultsFromNews) {
  //     resultsFromNews.forEach((data)=>{
  //       $.ajax({
  //         url:data.news_api,
  //         type:"GET",
  //         success(returnedAPI){
  //           console.log("this is from ajax "+ returnedAPI.articles[0].title);
  //           // let title1 = $('.title1');
  //           let title2 = $('.title2');
  //           let title3 = $('.title3');
  //           let title4 = $('.title4');
  //           // let image1 = $('.image1');
  //           let image2 = $('.image2');
  //           let image3 = $('.image3');
  //           let image4 = $('.image4');
  //
  //           let link2 = $('.link2');
  //           let link3 = $('.link3');
  //           let link4 = $('.link4');
  //
  //           // title1.text(result.articles[0].title);
  //           title2.text(returnedAPI.articles[1].title);
  //           title3.text(returnedAPI.articles[2].title);
  //           title4.text(returnedAPI.articles[3].title);
  //           // image1.attr('src',returnedAPI.articles[0].urlToImage);
  //           image2.attr('src',returnedAPI.articles[1].urlToImage);
  //           image3.attr('src',returnedAPI.articles[2].urlToImage)
  //           image4.attr('src',returnedAPI.articles[3].urlToImage)
  //
  //           link2.attr('href',returnedAPI.articles[1].url);
  //           link3.attr('href',returnedAPI.articles[2].url);
  //           link4.attr('href',returnedAPI.articles[3].url);
  //
  //           console.log(returnedAPI.source);
  //           console.log(returnedAPI.sortBy);
  //           console.log(returnedAPI.articles[0].title);
  //         }
  //       })
  //     })
  //     // window.location.replace('/myPage');
  //
  //   }
  // })
};
pageLoad();

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
$('#deletePost').click((a)=>{
  a.preventDefault();
  $.ajax({
    url: '/myPage/' + $(a.target).attr("action"),
    type: 'DELETE',
    success(result){
      console.log("Ajax delete blog results passed to routes");
    }
  })
})


//loggin out of profile
$('#logout').click(()=>{
  alert("User logged out")
  $.ajax({
    url: '/login',
    type: 'DELETE',
    // data: blogID,
    success(result){

      window.location.replace('/login');
      console.log("Ajax results passed to routes");
    }
  })
})
// getNews();

});
