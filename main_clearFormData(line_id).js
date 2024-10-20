// line_idを取得し，該当ユーザーのフォームデータをarchive_listに移動する関数
// 「削除」メッセージに反応し，doPostで呼び出される関数

function clearFormData(line_id) {
  // スプレッドシートのURL
  const spreadsheetUrl = config.spread_sheet_url;

  // スプレッドシートを取得
  const spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);

  // フォームの回答のシートを取得
  const formResponsesSheet = spreadsheet.getSheetByName("1");

  // アーカイブ用シートを取得または作成
  let archiveSheet = spreadsheet.getSheetByName('archive_list');
  if (!archiveSheet) {
    // archive_listシートがない場合は新しく作成
    archiveSheet = spreadsheet.insertSheet('archive_list');
  }

  // フォームの回答シートのデータ範囲を取得
  const formResponsesData = formResponsesSheet.getDataRange().getValues();
  
  const formIdColumnIndexInResponses = formResponsesData[0].indexOf('Form_ID');

  //　form_idの配列を取得、無い場合は空の配列を返す 
  try {
  const form_idArr = getFormIds(line_id);
  
  const form_id = form_idArr[0];

  // form_idに対応する行を探す
  const foundRowIndex = formResponsesData.findIndex(row => row[formIdColumnIndexInResponses] === form_id);

  if (foundRowIndex !== -1) {
    // 行をアーカイブシートに追加
    archiveSheet.appendRow(formResponsesData[foundRowIndex]);

    // 元の行を削除
    formResponsesSheet.deleteRow(foundRowIndex + 1); // シートは1ベースのため+1

    // フォームの回答のデータをスプレッドシートから全取得
    const values = formResponsesSheet.getDataRange().getValues();

    // フォームの回答のスプレッドシートの1行目を取得
    const header = values.shift();

    // 削除するフォームのデータ(配列)を取得
    const formData = formResponsesData[foundRowIndex];

    // ヘッダーとデータの対応付けを行い、オブジェクトを作成
    const messageContents = header.reduce((obj, key, index) => {
      obj[key] = formData[index];
      return obj;
    }, {});

    // フォーマットを生成 (文字列連結)
    let message = "";
    for (const key in messageContents) {
      if (key !== 'edit_url' && key !== 'qr_url' && key !== 'attend') { // edit_url, qr_url, attend は除外
        messageFormat += `${key}: ${messageContents[key]}` + "\n" + "\n";
      }
    }

    const flex_message = createConfimationMessage(message);

    Logger.log('削除完了');
    return { success: true, message: flex_message };
  } else {
    Logger.log('対応するデータが見つかりませんでした。');
    return { success: false, message: '対応するデータが見つかりませんでした。申し訳ございませんが、キャンセルに失敗しました。' };
  }

} catch (error) {
    Logger.log('指定されたline_idに対応するform_idが見つかりません:', error);
    return null; // nullを返す
  }
}