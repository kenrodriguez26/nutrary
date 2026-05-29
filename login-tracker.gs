
function doPost(e){

const sheet = SpreadsheetApp.openById("SHEET_ID").getSheetByName("Logins");

const data = JSON.parse(e.postData.contents);

sheet.appendRow([
new Date(),
data.email,
data.deviceId,
data.login
]);

return ContentService.createTextOutput("success");
}
