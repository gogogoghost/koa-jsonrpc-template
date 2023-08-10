const {TranslationServiceClient} = require('@google-cloud/translate');

const projectId = 'stone-airfoil-394515';

const transalte = new TranslationServiceClient()

async function translateText(srcList) {

    // Run request
    const res = await transalte.translateText({
        parent:`projects/${projectId}/locations/global`,
        contents:srcList,
        mimeType:'text/plain',
        sourceLanguageCode:'en',
        targetLanguageCode:'zh-CN'
    })
    /**
     [{"translations":[{"translatedText":"你好世界！","model":"","glossaryConfig":null,"detectedLanguageCode":""},{"translatedText":"自托管","model":"","glossaryConfig":null,"detectedLanguageCode":""}],"glossaryTranslations":[]},null,null]
     */
    return res[0].translations
}

module.exports={
    translateText
}