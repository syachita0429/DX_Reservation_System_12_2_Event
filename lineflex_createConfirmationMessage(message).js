function createConfimationMessage(message) {
  return{
    "type": "bubble",
    "size": "giga",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "申し込み内容",
          "weight": "bold",
          "color": "#1DB446",
          "size": "sm"
        },
        {
          "type": "text",
          "text": "2024 AIインサイトサミット",
          "weight": "regular",
          "margin": "none",
          "size": "xxl",
            "wrap": true
        },
        {
          "type": "text",
          "text": "12月2日（月）17:00～19:40",
          "size": "lg",
          "wrap": true
        },
        {
          "type": "separator",
          "margin": "xxl"
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "xxl",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": message,
                  "size": "sm",
                  "color": "#555555",
                  "flex": 0,
                  "wrap": true
                }
              ]
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": []
            },
            {
              "type": "separator"
            }
          ]
        }
      ]
    },
    "styles": {
      "footer": {
        "separator": true
      }
    }
  };
}
