// 「申し込みたい」への返信flex message
function createApplicationMessage(form_url) {
  return {
    "type": "bubble",
    "size": "deca",
    "hero": {
      "type": "image",
      "url": "https://aic.keio.ac.jp/wps/wp-content/uploads/2024/07/0a22771c9ac00faf659b7be0a9b4b6a8.jpg",
      "size": "300px",
      "aspectRatio": "1:1",
      "aspectMode": "fit"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "[AICイベントに参加する]",
          "weight": "bold",
          "size": "lg",
          "wrap": true,
          "align": "center"
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "contents": [
        {
          "type": "button",
          "style": "primary",
          "height": "sm",
          "action": {
            "type": "uri",
            "label": "申し込む",
            "uri": form_url
          },
          "color": "#00bfff"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [],
          "margin": "sm"
        }
      ],
      "flex": 0
    }
  };
}
