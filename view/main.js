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
        if(srcList.length==0){
            return []
        }
        const res=await translateText(srcList)
        return res.map(o=>{
            return o.translatedText
        })
    })
}