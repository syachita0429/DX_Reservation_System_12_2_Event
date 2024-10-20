function sendMaterials() {
  //イベントが近くなったらファイルを一斉送信する関数
   // LINE APIのアクセストークンを設定
  AIC.ACCESS_TOKEN = config.line_access_token;
  // 谷地田LINEテストアカウント

  //ファイルの画像URLを格納
  const imageFile = config.sample_image_file

  //ファイルのPDFURLを格納
  const pdfFile = config.sample_pdf_file

  // flexmessageを呼び出し
  const flex_message = createSendMaterials(imageFile, pdfFile);

  AIC.broadcastMessage_send_flex(flex_message)
};