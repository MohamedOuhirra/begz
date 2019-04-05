var request = require('request');
var cheerio = require('cheerio');
var i=10;
js = new Array();
var js1 = new Array();
while (i<2000){

var url= 'https://www.indeed.fr/emplois?q=developpeur+web&l=Paris+%2875%29&start='+i+'';
console.log(url);
request(url, function (error, response, html) {
 if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var s= ".salary no-wrap";
    //var js = new Array();
    $(".title").each(function(){

     var  child = $(this).children("a").attr("title");
    // var child1 =$(this).next().text();
      //console.log(child1);
    
      js.push(child);
      // $(this).attr("id","nx");


         //console.log(js); 
//Array.prototype.push.apply(js1, js);
      //var a = $("#nx  a").attr("title");
      
     // $(this).attr("id",idancien);

    });
   console.log(js); 

   //console.log(js);
   // console.log(html)

  }
  //console.log(js); 
  
//console.log(js1);
});
  i=i+10;
//console.log(js);               
//}
