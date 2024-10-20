function getFormIds(line_id) {
  // 引数のline_idに対応するform_idを配列で返す関数
  // スプレッドシートのURL
  const spreadsheetUrl = config.spread_sheet_url;
  
  // スプレッドシートを取得
  const spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);
  // フォームの回答のシートを取得
  const formResponsesSheet = spreadsheet.getSheetByName("1");
  
  // フォームの回答シートのデータ範囲を取得
  const formResponsesData = formResponsesSheet.getDataRange().getValues();

  const formIdColumnIndexInResponses = formResponsesData[0].indexOf('Form_ID');

  if (formIdColumnIndexInResponses === -1) {
    Logger.log('「Form_ID」列が見つかりません');
    return { success: false, message: 'データが見つかりませんでした。' };
  }

  const formDataArr = getFormData(line_id);
  console.log(formDataArr);
 
  let form_idArr = [];
  for (let i = 0; i < formDataArr.length; i++) {
    form_idArr.push(formDataArr[i][formIdColumnIndexInResponses]);
  }

  return form_idArr; // form_ids配列を返す
}

function getFormIds_test(){
  console.log("getFormIdsテスト:"+ getFormIds("U6471460801f5027cfef392c876127cd1"));
};