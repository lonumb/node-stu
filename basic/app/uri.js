

const { URL, URLSearchParams } = require('url');

const qs = require('querystring');

module.exports = function(req,res){
    // let myURL = url.parse('https://a:b@example.org/foo/ln/a?type=1&id=5#m/hello/abc');

    // console.log(url.domainToUnicode('xn--espaol-zwa.com'));

    // let link = req.url;
    // let myURL = new URL(link,"http://localhost:8888");
    // let search = new URLSearchParams(myURL.searchParams);


    // myURL.hash = "124";
    // myURL.pathname = "/home/index";
    // myURL.search = "?m=1&n=1";


    // myURL.hash = 'foo';
    // myURL.host = 'abc/123';
    // myURL.hostname = 'www.sina.com';
    // myURL.href = 'http://www.sina.com/foo';
    
    // myURL.searchParams.set('aa','1234');
    // let t = myURL.searchParams.get('id');

    // console.log( myURL.searchParams );
    
    // let myFile = url.fileURLToPath('file:///你好.txt'); 

    // let format = url.format(myURL, { fragment: false, unicode: true, auth: true, search: true });

    // let myURL = new URL(request.url);
    // console.log(qs);
    // console.log(myURL);

    res.sendContent( 2 +'');
    

}

