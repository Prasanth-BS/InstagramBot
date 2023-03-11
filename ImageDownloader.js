import fs from 'fs';
import download from 'image-downloader';

async function downloadImage(url, path, fileName) {
    
    console.log(`${path} is exist ?`)
    if(!fs.existsSync(path)) {
        console.log("No so made one")
        fs.mkdirSync(path, { recursive: true })
    }

    await download.image({ 
        url: url,
        dest: `${path}/${fileName}`
    })
    console.log(`after download returning ${path}/${fileName}`)
    return path+'/'+fileName
}

export {downloadImage}
