var mongoose= require('mongoose')	

//mongoose.connect('mongodb://localhost/test1');



var db = mongoose.createConnection('localhost','test');

db.on('error',console.error.bind(console,'连接错误:'));
    db.once('open',function(){
      //一次打开记录
});

var UsrSchema = new mongoose.Schema({
	usr:'String',
	pwd:'String'
});


var UsrModel = db.model('Usr',UsrSchema);

UsrModel.find(function(err,Usr){
	console.log("a")
});
console.log("success");
