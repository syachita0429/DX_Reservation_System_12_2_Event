function confirmReservation(line_id) {
  // line_idから申し込み内容を取得し、LINEのメッセージに合わせたフォーマット(文字列型)で返す関数
  
  // スプレッドシートのURL
  const spreadsheetUrl = config.spread_sheet_url;
  
  // スプレッドシートを取得
  const spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);

  // フォームの回答シートを取得
  const formResponsesSheet = spreadsheet.getSheetByName("1");
  // フォームのデータをスプレッドシートから全取得
  const values = formResponsesSheet.getDataRange().getValues();

  // スプレッドシートの1行目を取得
  const header = values.shift();

  try {
  // フォームのデータ(配列)を取得
  const formDataArr = getFormData(line_id)
  console.log("formDataArr:" + formDataArr)
  const formData = formDataArr.at(-1);
  console.log("formData:" + formData)
  // ヘッダーとデータの対応付けを行い、オブジェクトを作成
  const messageContents = header.reduce((obj, key, index) => {
    obj[key] = formData[index];
    return obj;
  }, {});

  // フォーマットを生成 (文字列連結)
  let message = "申し込み内容はこちらです。"+ "\n" + "\n";
  for (const key in messageContents) {
    if (key !== 'edit_url' && key !== 'qr_url' && key !== 'attend') { 
      message += `${key}: ${messageContents[key]}` + "\n" + "\n";
    }
  }
  console.log("message:" + message);

  return message


  } catch (error) {
    Logger.log('指定されたline_idに対応するform_idが見つかりません:', error);
    return null; // nullを返す
  }
};