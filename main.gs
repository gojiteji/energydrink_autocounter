function main(){
  var date = new Date() ;
  var now = Math.round(date.getTime()/1000) ;
  after="after:"+(now-900).toString()//unix時間で15分前までを取得
  var threads = GmailApp.search("from:no-reply@pay.rakuten.co.jp  202円");//"from:info@mail.rakuten-card.co.jp 速報版 ")//+after);
  if(threads.length>0){
   var payload =
   {
     "message" : threads.length
   };

   var options =
   {
     "method" : "post",
     "payload" : payload
   };
   UrlFetchApp.fetch("serverURL", options);
    }

}
