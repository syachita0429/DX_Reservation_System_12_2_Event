function createSendMaterials(imageFile, pdfFile) {
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
            "size": "75%",
            "url": imageFile,
            "size": "full",
            "aspectMode": "cover",
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
                "text": "イベント資料",
                "color": "#ffffff",
                "weight": "bold"
              },
              {
                "type": "text",
                "text": "イベントに関する資料をご確認ください。",
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
                      "label": "資料を見る",
                      "uri": pdfFile
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
}
}
