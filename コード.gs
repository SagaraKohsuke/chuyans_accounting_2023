function groupData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = ss.getSheetByName("Chuyans_expenditure_2023");
  var equipmentSheet = ss.getSheetByName("equipment");
  var groundFeeSheet = ss.getSheetByName("groundFee");
  var freshmanPartySheet = ss.getSheetByName("freshmanParty");
  var tournamentFeeSheet = ss.getSheetByName("tournamentFee");
  var campFeeSheet = ss.getSheetByName("campFee");
  var partySheet = ss.getSheetByName("party");
  var clothesSheet = ss.getSheetByName("clothes");
  var othersSheet = ss.getSheetByName("others");
  
  sheets = [equipmentSheet, groundFeeSheet, freshmanPartySheet, tournamentFeeSheet, campFeeSheet, partySheet, clothesSheet, othersSheet]

  //二次元配列を取得
  var values = sourceSheet.getRange('D2:F200').getValues();
  console.log(values);

  //nullの二次元配列を定義
  var equipment = [];
  var groundFee = [];
  var freshmanParty = [];
  var tournamentFee = [];
  var campFee = [];
  var party = [];
  var clothes = [];
  var others = [];

  var items = [equipment, groundFee, freshmanParty, tournamentFee, campFee, party, clothes, others];


  //keywordが含まれている一次元配列をpopし、そのkeywordの二次元配列へとpushしていく
  var itemStrings = ["備品（ボール、除菌シートなど）","グラウンド代（審判代を含む）","新歓費","大会参加費","合宿費","交際費（打ち上げなど）","ユニフォーム・パーカ代","その他"]
  for (var i = 0; i < values.length; i++){
    for ( var j = 0; j < itemStrings.length; j++)
    if(values[i][0].indexOf(itemStrings[j]) != -1){
      items[j].push(values[i]);
    }
    
  }

  
  //それぞれ二次元配列を各々のシートで表示する
  //勘定のリストをあらかじめ準備しておいて繰り返しを行う
  for(var k = 0; k < items.length; k++){
    sheets[k].getRange(2, 1, items[k].length, 3).setValues(items[k]);
  }
}

function createMap() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = "clubBudget_partyFee_2023"
  var sheet = ss.getSheetByName(sheetName);
  var range = sheet.getDataRange();
  var values = range.getValues();

  var map = new Map();
  console.log(values);
  for (var i = 2; i < values.length; i++) {
    var key = values[i][6]; // G列の値をキーとする
    var value = values[i][5]; // F列の値を値とする
    map.set(key, value);
  }

  Logger.log(map);
}


