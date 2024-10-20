function createPrefilledFormUrl(form_url, form_id) {
  // 引数のform_urlとform_idから、「Form_ID」フィールドにform_idの初期値が入ったprefilledUrlを返す関数
  const form = FormApp.openByUrl(form_url);
  const items = form.getItems();

  // "Form_ID"というタイトルの項目を探す
  const item = items.find(item => {
    return item.getTitle() === 'Form_ID';
  });

  if (!item) {
    console.error('「Form_ID」というタイトルの項目が見つかりません');
    return null;
  }

  // 質問の種別によってasTextItem()などを使い分ける
  const itemResponse = item.asTextItem().createResponse(form_id);
  const formResponse = form.createResponse().withItemResponse(itemResponse);

  // 生成されたURLを格納する変数
  const prefilledUrl = formResponse.toPrefilledUrl();
  return prefilledUrl;
};

// const form_url = config.form_url;
// console.log("createPrefilledFormUrlテスト:"+ createPrefilledFormUrl(form_url, "3cbf2603-3f47-451d-bde7-30d31531dd94"));