import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth'
import { downloadImage } from './ImageDownloader.js'
import fs from 'fs'
import * as dotenv from 'dotenv'
// import path from 'path';
dotenv.config()


puppeteer.use(stealthPlugin())

/*export default */async function getData(noOfElements) {
    const browser = await puppeteer.launch({
        executablePath: process.env.CHROME_PATH,
        headless: false
        // defaultViewport: null 
    });

    
    const page = await browser.newPage();
    
    await page.setViewport({
        width: 1920,
        height: 1080
    })
    await page.goto('https://www.artstation.com/channels/cover_art?sort_by=trending&dimension=all'); // Change the link according to the content u need
        
    // if(await page.waitForSelector('button.close'))

    const artData = [];
    //! Start of loop
    for(let i = 1; i <= noOfElements; i ++){
        try {

            const selector = 'projects-list-item'
            await page.waitForSelector(selector)
            const artTag = await page.$(`projects-list-item:nth-child(${i})`)
            // await artTag.click() 
            
            await page.click(`projects-list-item:nth-child(${i})`)
        
            console.log(`Went through ${i} element `);
            console.log('waiting for project asset')

            await page.waitForSelector('project-asset') // Changed from picture.d-block to project-asset since picture.d-block may not be present
            console.log('Couldnt got project asset')

            console.log('Waiting for Picture block')
            await page.waitForSelector('picture.d-block')
            console.log('Got The picture d block')
            const imageTags = await page.$$('picture.d-block') // scraping imageTags
            
            if(imageTags.length == 0) {
                noOfElements += 1;
                continue;
            }      // if the art has no image links then it will skip to next art        

            const imageLinks__artStation = await page.$$eval('picture.d-block > img', elements => {
                return elements.map(ele => ele.src)
            })
            // console.log(imageLinks__artStation)

            let j = 0;
            const imageLinks__promise = imageLinks__artStation.map(async (imageLink) => {
                return downloadImage(imageLink, `D:/Git-repos/InstaBot/images/post${i}`, `img${j++}.png`);
            })

            const imageLinks__fs = await Promise.all(imageLinks__promise)
            console.log(imageLinks__fs)

            const title = await page.$eval('h1', ele => ele.innerText) // scraping title
            const artistName = await page.$eval('h3.project-author-name > a', ele => ele.innerText) // scraping artistName
            const tags = await page.$$eval('ul.project-tags > li > a', tagElements => {
                return tagElements.map(tagElement => tagElement.innerText)
            }) // scraping tags
            
            artData.push({title, artistName, tags, imageLinks__artStation})
            
            await page.goBack(); // Using await solved a closed browser error
            //? await page.screenshot({ path: `./screenshot/ex${i}.png`, fullPage: true })
        } catch(err) {
            //Catch for any popup boxes appears
            // console.error();
            await page.waitForSelector("div.modal-dialog");
            await page.click("div.modal-dialog button.close");
            i--;
        }
    }
    //!End of loop
    //?console.log(artistData) 
    await browser.close();
    return artData;
} 


//! For test purposes
const dataJSON = await getData(5); //Call of the puppeteer function
// console.log(dataJSON)
fs.writeFile('ArtData.json', JSON.stringify(dataJSON), (err) => {
    if(err)
    console.log('Unable to write');
})

// export default getData
