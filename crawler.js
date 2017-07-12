const scrapeIt = require("scrape-it");

// Promise interface
scrapeIt("http://ionicabizau.net", {
    title: ".header h1"
  , desc: ".header h2"
  , avatar: {
        selector: ".header img"
      , attr: "src"
    }
}).then(page => {
    console.log(page);
});

// Callback interface
scrapeIt("http://ionicabizau.net", {
    // Fetch the articles
    articles: {
        listItem: ".article"
      , data: {

            // Get the article date and convert it into a Date object
            createdAt: {
                selector: ".date"
              , convert: x => new Date(x)
            }

            // Get the title
          , title: "a.article-title"

            // Nested list
          , tags: {
                listItem: ".tags > span"
            }

            // Get the content
          , content: {
                selector: ".article-content"
              , how: "html"
            }
        }
    }

    // Fetch the blog pages
  , pages: {
        listItem: "li.page"
      , name: "pages"
      , data: {
            title: "a"
          , url: {
                selector: "a"
              , attr: "href"
            }
        }
    }

    // Fetch some other data from the page
  , title: ".header h1"
  , desc: ".header h2"
  , avatar: {
        selector: ".header img"
      , attr: "src"
    }
}, (err, page) => {
    console.log(err || page);
});

/*
var request = require('request');
// var jquery = require('jquery');
var cheerio = require('cheerio');
var URL = require('url-parse');

var pageToVisit = "http://www.arstechnica.com";
console.log("visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body){
	if (error){
		console.log("FUCK! " + error);
	}
	//check status code (200 is HTTP OK)
	console.log("status code: " + response.statusCode);
	if (response.statusCode === 200) {
		// parse the doc.body
		var $ = cheerio.load(body);
		console.log("Page title: " + ('title').textContent);
	}
})

http://www.netinstructions.com/how-to-make-a-simple-web-crawler-in-javascript-and-node-js/

https://stackoverflow.com/questions/40486107/uncaught-typeerror-this-text-is-not-a-function

https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent


*/