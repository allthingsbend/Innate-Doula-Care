// Paste this into the Google Sheet "Innate Doula Care - Questionnaire Answers":
// Extensions > Apps Script, replace everything, then Deploy > New deployment > Web app.
// Each questionnaire submission becomes one row. The header row writes itself.

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var answers = data.answers || [];
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    if (sheet.getLastRow() === 0) {
      var header = ['Submitted (Pacific)'].concat(answers.map(function (x) { return x.q; }));
      sheet.appendRow(header);
      sheet.getRange(1, 1, 1, header.length).setFontWeight('bold').setWrap(true);
      sheet.setFrozenRows(1);
    }

    var when = Utilities.formatDate(new Date(data.at || new Date()), 'America/Los_Angeles', 'yyyy-MM-dd h:mm a');
    // A leading apostrophe keeps Sheets from turning an answer into a formula or a date.
    var row = [when].concat(answers.map(function (x) { return x.a ? "'" + x.a : ''; }));
    sheet.appendRow(row);
    sheet.getRange(sheet.getLastRow(), 1, 1, row.length).setWrap(true).setVerticalAlignment('top');

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}
