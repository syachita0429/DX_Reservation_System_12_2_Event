// 「修正」への返信flex message
function createEditMessage(editUrl) {
  return {
    "type": "bubble",
    "size": "deca",
    "header": {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "image",
              "url": "https://aic.keio.ac.jp/wps/wp-content/uploads/2024/07/0a22771c9ac00faf659b7be0a9b4b6a8.jpg",
              "size": "300px",
              "aspectMode": "cover",
              "aspectRatio": "1:1",
              "gravity": "center",
              "flex": 1
            }
          ]
        }
      ],
      "paddingAll": "0px"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "contents": [],
                  "size": "xl",
                  "wrap": true,
                  "text": "予約内容の修正",
                  "color": "#ffffff",
                  "weight": "bold"
                },
                {
                  "type": "text",
                  "text": "以下のリンクから申し込み内容を編集し、送信してください。",
                  "color": "#ffffffcc",
                  "size": "sm",
                  "wrap": true
                }
              ],
              "spacing": "sm"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "button",
                      "action": {
                        "type": "uri",
                        "label": "修正する",
                        "uri": editUrl
                      },
                      "style": "primary",
                      "color": "#3aacbd"
                    }
                  ]
                }
              ],
              "paddingAll": "13px",
              "backgroundColor": "#3abda6",
              "cornerRadius": "2px",
              "margin": "xl"
            }
          ]
        }
      ],
      "paddingAll": "20px",
      "backgroundColor": "#3abda6"
    }
  };
}
