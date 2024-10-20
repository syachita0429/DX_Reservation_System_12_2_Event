function createQR(e) {
  // フォーム送信時にQRコードを作成する関数
  // LINE APIのアクセストークンを設定
  AIC.ACCESS_TOKEN = config.line_access_token;
  // 谷地田LINEテストアカウント

  // スプレッドシートを取得
  // スプレッドシートのURL
  const spreadsheetUrl = config.spread_sheet_url;
  
  // スプレッドシートを取得
  const spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);
  
  // フォームの回答シートを取得
  const answerSheet = spreadsheet.getSheetByName('1');
  
  // Form_ID を取得
  const form_id = e.namedValues["Form_ID"][0];

  // QRコード生成サービスのAPIを利用
  const qrCodeGeneratorUrl = config.code_generator;
  const qrCodeUrl = qrCodeGeneratorUrl + encodeURIComponent(createReceptionParameter(e));

  // form_idに対応する行を検索
  const dataRange = answerSheet.getDataRange();
  const data = dataRange.getValues();
  const form_idCol = data[0].indexOf('Form_ID'); // Form_IDの列番号を取得
  const qrUrlCol = data[0].indexOf('qr_url'); // qr_url列の列番号を取得
  let rowIndex = -1;
  for (let i = 1; i < data.length; i++) {
    if (data[i][form_idCol] === form_id) {
      rowIndex = i;
      break;
    }
  }

  // 見つかった行にQRコードのURLを書き込む
  if (rowIndex !== -1) { 
    try {
      answerSheet.getRange(rowIndex + 1, qrUrlCol + 1).setValue(qrCodeUrl);
      console.log("qr_urlが挿入されました");
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  } else {
    // 見つからない場合
    console.log("form_idが見つかりません");
  }

  return qrCodeUrl
}