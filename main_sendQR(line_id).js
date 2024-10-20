function sendQR(line_id) {
  // スプレッドシートからline_idに対応するデータのqrCodeUrlを取得し、createQRMessageを呼び出してQRコードflexmessageで表示する関数

  // LINE APIのアクセストークンを設定
  AIC.ACCESS_TOKEN = config.line_access_token;
  // 谷地田LINEテストアカウント

  // スプレッドシートのURL
  const spreadsheetUrl = config.spread_sheet_url;

  // スプレッドシートを開く
  const spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);
  const sheet = spreadsheet.getSheetByName("1");

  // データ範囲を取得
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  // ヘッダー行のインデックスを取得
  const headerRow = values[0];
  const formIdColumnIndex = headerRow.indexOf('Form_ID') + 1; // 1を足すのは、配列のインデックスが0から始まるため
  const qrUrlColumnIndex = headerRow.indexOf('qr_url') + 1;

  try {
  // form_idを取得
  const form_idArr = getFormIds(line_id)
  const form_id = form_idArr[0];

  // formIdに対応する行を探す
  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    if (row[formIdColumnIndex - 1] === form_id) {
      const qrCodeUrl = row[qrUrlColumnIndex - 1];
      console.log(qrCodeUrl);

      // flexmessageを準備
      const QRFlexMessage = createQRMessage(qrCodeUrl);

      return QRFlexMessage;
    }
  }
  // 見つからなかった場合
  Logger.log("qr_urlは見つかりませんでした");

  } catch (error) {
    Logger.log('指定されたline_idに対応するform_idが見つかりません:', error);
    return null; // nullを返す
  }
}