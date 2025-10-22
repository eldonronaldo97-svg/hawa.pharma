const SHEET_ID = '1DUfCnB84eI3tikhx7nFI944QkfEBIr8Z4YCQwhG68B8';
const SHEET_NAME = 'Sheet1';
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    sheet.appendRow([data.name, data.phone, data.city, data.address, data.offer, data.date]);
    return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
