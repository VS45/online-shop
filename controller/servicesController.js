const { getAllServices } = require("../model/service")


exports.getServices=(req,res)=>{
  const services=getAllServices()
    res.render('services',{title:'Service Page',serviceList:services})
    }