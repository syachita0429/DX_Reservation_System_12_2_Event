function sendReservationConfirmation() {  
  //イベントが近くなったらリマインドメッセージを一斉送信する関数
   // LINE APIのアクセストークンを設定
  AIC.ACCESS_TOKEN = config.line_access_token;
  // 谷地田LINEテストアカウント

  AIC.broadcastMessage_send("間もなくイベント開催日となりましたので、イベントに申し込まれた方は申し込み内容の確認をお願いします。");
};