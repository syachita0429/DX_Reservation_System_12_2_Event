function sendFormData(e) {
  //sendFormSubmit関数
  //フォーム送信時に申し込み内容を返す関数
  // LINE APIのアクセストークンを設定
  AIC.ACCESS_TOKEN = config.line_access_token;
  // 谷地田LINEテストアカウント

  const form_id = e.namedValues['Form_ID'][0];
  const line_id = getLineId(form_id);

  // ヘッダー行を取得
  const headerRow = e.values[0];

  // スプレッドシートのURL
  const spreadsheetUrl = config.spread_sheet_url;

  // スプレッドシートを取得
  const spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);

  // フォームの回答シートを取得
  const formResponsesSheet = spreadsheet.getSheetByName("1");
  // フォームのデータをスプレッドシートから全取得
  const values = formResponsesSheet.getDataRange().getValues();

  // スプレッドシートの1行目を取得 (ヘッダー行)
  const header = values.shift();

  // e.valuesの要素数に合わせてheader配列を切り取る
  const questionKeys = header.slice(0, e.values.length);

  // 回答データを元にメッセージを作成
  const message = e.values.map((answer, index) => {
    const question = questionKeys[index] || '未回答';
    return `${question}: ${answer}`;
  }).join('\n '+ '\n');

    console.log("message:" + message)
    // 取得したline_idにAICライブラリのpushMessage_send関数を実行
    if (line_id) {
    // 別でflexmessageを返す関数をつくる→引数をmessageにする
    // AIC.pushMessage_sendではなく、AIC.pushMessage_send_flexを呼び出す
    // 引数のmessageには、flexmessageを返す関数で呼び出したflexmessageを入れる
      const flex_message = createConfimationMessage(message);
      return AIC.pushMessage_send_flex(line_id, flex_message);
    } else {
      // line_idが見つからなかった場合の処理
      console.error('line_idが見つかりませんでした。');
      return;
    }
}