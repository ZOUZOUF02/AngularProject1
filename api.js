const express = require('express')
const app = express()
const ExcelJS = require('exceljs');
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(cors())
const excelToJson = require('convert-excel-to-json');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const result = excelToJson({
    sourceFile: 'CARINFOS.xlsx'
});
app.get('/GetCar', function (req, res) {
  res.send(result)
})
app.post('/AddCar',async function(req,res){
  console.log(req.body);
  var workbook = new ExcelJS.Workbook();   
  await workbook.xlsx.readFile('./CARINFOS.xlsx')
    .then(async function() {
        var worksheet = workbook.getWorksheet('sheet1');
        data = [];
        data.push(req.body.A);        
        data.push(req.body.B);
        data.push(req.body.C);
        await worksheet.insertRow(1, data);
        await workbook.xlsx.writeFile('./CARINFOS.xlsx') 
        //console.log(req.body.B)       
    });  
  res.send(result)
})
app.listen(3000)