```javascript
const axios = require('axios');
const cheerio = require('cheerio');

const webScraping = async (url) => {
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        let scrapedData = [];

        $('body').each((index, element) => {
            const data = $(element).text();
            scrapedData.push(data);
        });

        return scrapedData;
    } catch (error) {
        console.error(`Error in web scraping: ${error}`);
    }
};

module.exports = webScraping;
```