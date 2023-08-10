const {JSONRPCServer,JSONRPCErrorException} = require('json-rpc-2.0')
// const db = require('../db')
const {translateText} = require('../translate')

module.exports = (s) => {
    // s.addMethod("main.fail",()=>{
    //     throw new JSONRPCErrorException("I am custom error",100,{
    //         detail:"I am detail"
    //     })
    // })
    
    s.addMethod("main.translate",async({srcList})=>{
        if(!srcList||srcList.length==0){
            return []
        }
        const res=await translateText(srcList)
        return res.map(o=>{
            return o.translatedText
        })
    })

    s.addMethod("main.lookupDic",async({word})=>{
        const res=(await (await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word)).json())
        for(const item of res){
            if(item.word==word){
                return item
            }
        }
        return null
    })
}