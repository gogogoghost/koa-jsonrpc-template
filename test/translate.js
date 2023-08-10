const {TranslationServiceClient} = require('@google-cloud/translate');

const projectId = 'stone-airfoil-394515';

const transalte = new TranslationServiceClient()

async function translateText() {

    // Run request
    const res = await transalte.translateText({
        parent:`projects/${projectId}/locations/global`,
        contents:['Hello, world!','self-host'],
        mimeType:'text/plain',
        sourceLanguageCode:'en',
        'targetLanguageCode':'zh-CN'
    })
    console.log(JSON.stringify(res))
}

translateText()