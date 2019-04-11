var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var csv = require('fast-csv');
var ws = fs.createWriteStream('write3.csv')
var i=0;
var child1;
var res;
var res1;
js = new Array();
js1 = new Array();
var obj = {
   table: []
};

while (i<10000){

var url= 'https://www.indeed.fr/jobs?q=%28developpeur+or+informatique+or+web+or+data+or+java+or+php+or+python+or+R+or+ruby+or+css+or+html+or+xml+or+c%2B%2B+or+jee+or+j2e+or+symphony+or+laravel%29&l=Paris+%2875%29&radius=100&limit=50&fromage=last&start='+i+'';
console.log(url);
request(url, function (error, response, html) {
 if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var s= ".jobsearch-SerpJobCard";
    //var js = new Array();
    $(".jobsearch-SerpJobCard").each(function(){

     //var  child = $(this).children("a").attr("title");
   // var child =$(".jobsearch-SerpJobCard").find(".title").text();
     child1 =$(this).find(".location").text();
    var child2 =$(this).children(".salarySnippet").text();
    var child3 =$(this).children(".title").text();
    res=child3.replace(/^\s+|\s+$/gm,'');
    res1=child2.replace(/^\s+|\s+$/gm,'');
  
    
    
   
      //console.log(child1);
    //  console.log(child2);
     // console.log(child3);
     
    //console.log("-------------------------------------------------");
      js.push(child1 + ';' + res1  + ';' + res + ';');
      
      


    });
   
     csv.
      write([
          [child1 + ';' + res1  + ';' + res + ';' + 'cdi' + '\r']





        ],{headers:true})

      .pipe(ws);




   console.log(js);
   // console.log(html)

  }
  //console.log(js); 
  
//console.log(js1);
});
  i=i+50;
//console.log(js);               
//}

}


