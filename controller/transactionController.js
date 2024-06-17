const Transaction = require("../model/transaction");


exports.getTransactionPage=(req,res)=>{
    res.render('transaction',{title:'Transactions available',path:'/transaction'})
}

exports.postTransaction=(req,res)=>{
const customerName=req.body.customerName;
const quantity=req.body.quantity;
const totalAmount=req.body.totalAmount;
const receiptNo=req.body.receiptNo;
const transaction={customername:customerName,quantity:quantity,totalamount:totalAmount,receiptno:receiptNo}
Transaction.create(transaction,(err,result)=>{
    if(err) return console.log(err)
    console.log(result)
res.redirect('/transaction')
})
}