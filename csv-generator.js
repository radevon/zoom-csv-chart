const csvwriter=require("csv-writer").createObjectCsvWriter;

const dataA=[];
const count=60*24*3600;


Date.prototype.yyyymmdd = function() {
    let mm = this.getMonth() + 1; // getMonth() is zero-based
    let dd = this.getDate();
    let hh = this.getHours();
    let mi = this.getMinutes();
    let ss = this.getSeconds();

    return [this.getFullYear(),'-',
            (mm>9 ? '' : '0') + mm,'-',
            (dd>9 ? '' : '0') + dd,' ',
            (hh>9 ? '' : '0') + hh,':',
            (mi>9 ? '' : '0') + mi,':',
            (ss>9 ? '' : '0') + ss
           ].join('');
  };


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

let time = new Date();

for(let i=0;i<count;i++){
    dataA.push({DateTime:time.yyyymmdd(), Current:getRandomIntInclusive(40,76), Frequency:getRandomIntInclusive(10,15)});
    time.setSeconds(time.getSeconds() + 1);
}


const writer=csvwriter({
    path:'out.csv',
    header:[
        {id: 'DateTime', title: 'DateTime'}, 
        {id: 'Current', title: 'Current'}, 
        {id: 'Frequency', title: 'Frequency'}, 
    ]
});


writer.writeRecords(dataA)
.then(() => console.log('The CSV file was written successfully')); 
