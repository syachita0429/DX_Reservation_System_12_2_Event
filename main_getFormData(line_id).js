// line_idに関連するフォームデータを取得する関数
function getFormData(line_id) {
  // スプレッドシートのURL
  const spreadsheetUrl = config.spread_sheet_url;

  // スプレッドシートを取得
  const spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);
  
  // id_listシートを取得
  const idListSheet = spreadsheet.getSheetByName('id_list');
  if (!idListSheet) {
    Logger.log('シート「id_list」が見つかりません');
    return null;
  }

  // id_listシートからline_idに対応するform_idを取得
  const dataRange = idListSheet.getDataRange();
  const values = dataRange.getValues();
  const formIds = values.filter(row => row[0] === line_id).map(row => row[1]);
  // formIdが見つからなかった場合
  if (!formIds.length) {
    Logger.log('対応するform_idが見つかりません');
    return null;
  }

  // フォームの回答シートを取得
  const formResponsesSheet = spreadsheet.getSheetByName("1");
  if (!formResponsesSheet) {
    Logger.log(`シート1が見つかりません`);
    return null;
  }

  // formResponsesSheetからformIdに対応する行を取得
  const formResponsesData = formResponsesSheet.getDataRange().getValues();
  const formIdColumnIndex = formResponsesSheet.getDataRange().getValues()[0].indexOf('Form_ID') + 1; // ヘッダー行を含むため、+1

  const foundRows = formResponsesData.filter(row => formIds.includes(row[formIdColumnIndex - 1]));
 
  return foundRows
};