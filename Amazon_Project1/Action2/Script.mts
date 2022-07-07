SystemUtil.Run"chrome.exe","http://www.amazon.in/"
On Error Resume Next
DataTable.AddSheet"Test Data"
DataTable.ImportSheet "C:\Users\user245\Documents\AMAZON_PROJECT1\Amazon_Data\Test Data.xlsx","Amazon Data","Test Data"

rowCount = DataTable.GetSheet("Test Data").GetRowCount

For rows= 1 To rowCount
DataTable.SetCurrentRow rows

If DataTable.Value("Expected_flag","Test Data")= "Y" Then
executeTest(DataTable.Value("testCaseID","Test Data"))
'Environment.Value("Result")="Pass"
DataTable.Value("Result","Test Data") = Environment.Value("Result")
End If
    
Next
DataTable.ExportSheet "C:\Users\user245\Documents\AMAZON_PROJECT1\Amazon_Data\Test Data.xlsx","Test Data","Amazon Data"








