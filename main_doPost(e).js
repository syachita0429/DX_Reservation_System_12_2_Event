// doPost(e) 関数
// 受け取ったLINEメッセージに合わせて処理を実行する関数

function doPost(e) {
  // LINE APIのアクセストークンを設定
  AIC.ACCESS_TOKEN = config.line_access_token;
  // 谷地田LINEテストアカウント

  // 受信したメッセージを解析
  const message_info = AIC.parse_events(e);

  // ユーザーIDと返信トークンを取得
  const line_id = message_info.user_id;
  const reply_token = message_info.reply_token;
  const messageText = message_info.message; 

  // logシートを取得
    const logSheet = spreadsheet.getSheetByName('log');
    logSheet.appendRow([new Date(), e.postData.contents]);
    let logData = JSON.parse(e.postData.contents); // LINE から来た json データを JavaScript のオブジェクトに変換する
    let events = logData.events;
    for(let i = 0; i < events.length; i++){ // すべてのイベントについて繰り返し処理をする
      let event = events[i];
      if(event.type == 'message'){ // メッセージ受信イベントであるか判定
        if(event.message.type == 'text'){ // 受信したのが普通のテキストメッセージであるか
        }
      }
    }
  
  // フォームのURLを作成
  const form_url = getFormUrl(line_id);

  // メッセージの内容に応じて処理を分岐
  if (messageText.includes("申し込みたい")) {
    // "申し込みたい"が含まれる場合、フォームのURLを返信
    const applicationFlexMessage = createApplicationMessage(form_url);
    AIC.reply_send_flex(reply_token, applicationFlexMessage);
  } else if (messageText.includes("削除")) {
    const result = clearFormData(line_id);
    AIC.reply_send_flex(reply_token, result.message);
    AIC.reply_send("申し込みをキャンセルしました。キャンセルした情報は上記の通りです。", reply_token);
  } else if (messageText.includes("修正")) {
    // 申し込み内容を修正
    const editUrl = updateFormData(line_id);
    if (editUrl) {
      const editFlexMessage = createEditMessage(editUrl);
      AIC.reply_send_flex(reply_token, editFlexMessage);
    } else {
      AIC.reply_send("申し訳ございませんが、編集用URLを取得できませんでした。", reply_token);
    }
  } else if (messageText.includes("確認")) {
    //　申し込み内容を確認
    const reservationContent = confirmReservation(line_id)
    const confirmationFlexMessage = createConfimationMessage(reservationContent);
    AIC.reply_send_flex(reply_token, confirmationFlexMessage);
  } else if (messageText.includes("受付")) {
    // 受付コードを表示
    const QRFlexMessage = sendQR(line_id);
    AIC.reply_send_flex(reply_token, QRFlexMessage,);
  } else {
    // その他のメッセージ
    AIC.reply_send("申し訳ございませんが、理解できませんでした。", reply_token);
  }

}