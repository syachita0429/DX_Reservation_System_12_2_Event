/*
function doPost(e) {
  if (!e) {
    // テスト用のダミーデータ
    e = {
      postData: {
        contents: JSON.stringify({
          events: [{
            replyToken: 'dummyToken',
            type: 'message',
            source: {
              userId: 'dummyUserId'
            },
            message: {
              text: '申し込みたい'
            }
          }]
        })
      }
    };
  }

  // 実際のPOSTリクエストでは getDataAsString を使い、ダミーデータの場合は contents を使用
  const jsonString = e.postData.getDataAsString ? e.postData.getDataAsString() : e.postData.contents;

  // JSONを解析
  const message_info = AIC.parse_events({ postData: { getDataAsString: () => jsonString } });
  
  Logger.log(message_info);

  // その他の処理を続行
}
*/