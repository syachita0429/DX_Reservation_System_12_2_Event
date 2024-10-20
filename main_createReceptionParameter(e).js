function createReceptionParameter(e) {
  // qr_urlのパラメータ(form_id)部分を作成
  
  // form_id を取得
  const form_id = e.namedValues["Form_ID"][0]

  // receptionUrlを作成
  const receptionUrl = `${form_id}`
  
  return receptionUrl;  
}