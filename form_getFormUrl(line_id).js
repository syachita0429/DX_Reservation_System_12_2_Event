function getFormUrl(line_id) {
  // form_idを生成してid_listに記録し、createPrefilledFormUrl(form_url, form_id)を呼び出してprefilledUrlを返す関数
  // スプレッドシートのURL
  const spreadsheetUrl = config.spread_sheet_url;

  // スプレッドシートを取得
  const spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);

  // form_idを生成
  const form_id = Utilities.getUuid();

  // id_listシートにデータを書き込み
  const idListSheet = spreadsheet.getSheetByName('id_list');
  idListSheet.appendRow([line_id, form_id]);

  // configからform_urlを取得
  const form_url = config.form_url;

  // form_urlが見つからなかった場合
  if (!form_url) {
    console.error('form_urlが見つかりません');
    return null;
  }

  // createPrefilledFormUrl 関数を使って、初期値を設定したURLを取得
  const prefilledUrl = createPrefilledFormUrl(form_url, form_id);

  return prefilledUrl;
}