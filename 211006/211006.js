const axios = require('axios');
const cheerio = require('cheerio');
axios.get('http://github.com/pricing')
    .then(res=> {
        const $ = cheerio.load(res.data);

        $('.js-computed-value').each(function(){
            console.log($(this).text());
        });
    })