const jsonserver=require('json-server')
const rbserver=jsonserver.create()
const router=jsonserver.router('db.json')
const middleware=jsonserver.defaults()

const PORT=3000

rbserver.use(middleware)
rbserver.use(router)

rbserver.listen(PORT,()=>{
    console.log(`RB-server started running at PORT:${PORT} succesfully.....`)
})