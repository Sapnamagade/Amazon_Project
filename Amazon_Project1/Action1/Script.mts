'SystemUtil.Run"chrome.exe","http://www.amazon.in/"
'signin()                    ' tc1  
'validcredential()             ' tc2
'InvalidCredential()           'tc3
'validate_OTP()                 ' tc4
'new_account()                  'tc5
'inval_pass()                      ' tc6
'accnotfound()                    'tc7
' resendotp()                       'tc8 @@ script infofile_;_ZIP::ssf130.xml_;_
 'NeEmail()                           'tc9
' enterpass()                         'tc10
 'forgot()                                'tc11

 
'-------resend otp---------------
'Browser("Browser_2").Navigate 'https://www.amazon.in/' @@ hightlight id_;_8651942_;_script infofile_;_ZIP::ssf219.xml_;_
'Browser("Online Shopping site in").Page("Online Shopping site in").WebElement("leadup").Click @@ script infofile_;_ZIP::ssf211.xml_;_
'Browser("Browser").Page("Amazon.in | Prime Day").Link("Sign in").Click @@ script infofile_;_ZIP::ssf212.xml_;_
'Browser("Browser").Page("Amazon Sign In").WebEdit("email").Set "1998magade@gmail.com" @@ script infofile_;_ZIP::ssf213.xml_;_
'Browser("Browser").Page("Amazon Sign In").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf214.xml_;_
'Browser("Browser").Page("Amazon Sign In").Link("Forgot Password").Click @@ script infofile_;_ZIP::ssf215.xml_;_
'Browser("Browser").Page("Amazon Password Assistance_2").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf216.xml_;_
'Browser("Browser").Page("Authentication required").Link("Resend OTP").Click @@ script infofile_;_ZIP::ssf217.xml_;_
'Browser("Browser").Page("Authentication required_2").WebElement("A new OTP has been sent").Check CheckPoint("A new OTP has been sent to your email.") @@ script infofile_;_ZIP::ssf218.xml_;_
 
 
'Browser("Online Shopping site in").Page("Amazon.com. Spend less.").Link("Sign in").Click @@ script infofile_;_ZIP::ssf220.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf221.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").WebElement("Enter your email or mobile").Check CheckPoint("Enter your email or mobile phone number") @@ script infofile_;_ZIP::ssf222.xml_;_


'Browser("Online Shopping site in").Page("Amazon.com. Spend less.").Link("Sign in_2").Click @@ script infofile_;_ZIP::ssf223.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").WebEdit("email").Set "1998magade@gmail.com" @@ script infofile_;_ZIP::ssf224.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf225.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").Link("Forgot your password?").Click @@ script infofile_;_ZIP::ssf226.xml_;_
'Browser("Online Shopping site in").Page("Amazon Password Assistance_2").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf227.xml_;_
 @@ script infofile_;_ZIP::ssf210.xml_;_
'Browser("Browser").Page("Authentication required_3").WebElement("We've sent a One Time").Check CheckPoint("We've sent a One Time Password (OTP) to the email 1998magade@gmail.com.") @@ script infofile_;_ZIP::ssf236.xml_;_
 @@ script infofile_;_ZIP::ssf201.xml_;_
'Browser("Online Shopping site in").Page("Amazon.com. Spend less.").Link("Sign in_2").Click @@ script infofile_;_ZIP::ssf228.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").WebEdit("email").Set "1998magade@gmail.com" @@ script infofile_;_ZIP::ssf229.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf230.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").Link("Change").Click @@ script infofile_;_ZIP::ssf231.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").WebEdit("email").Set "sapnamagade31m@gmail.com" @@ script infofile_;_ZIP::ssf232.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf233.xml_;_
'Browser("Online Shopping site in").Page("Page_2").WebButton("Send OTP").Click @@ script infofile_;_ZIP::ssf234.xml_;_
'Browser("Online Shopping site in").Page("Authentication required_2").WebElement("One Time Password (OTP)").Check CheckPoint("One Time Password (OTP) sent to s*************m@gmail.com.") @@ script infofile_;_ZIP::ssf235.xml_;_


'Browser("Online Shopping site in").Navigate "https://www.amazon.in/"
'Browser("Browser").Page("Amazon.com. Spend less.").Link("Hello, Sign in Account").Click @@ script infofile_;_ZIP::ssf249.xml_;_
'Browser("Browser").Page("Amazon Sign-In").WebEdit("email").Set "1998magade@gmail.com" @@ script infofile_;_ZIP::ssf250.xml_;_
'Browser("Browser").Page("Amazon Sign-In").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf251.xml_;_
'Browser("Browser").Page("Amazon Sign-In").WebEdit("password").SetSecure "62c631b460fa8d0fa3ca8f8a81eed2d5d8e9d130929b557f09efae231f916cfac465e480" @@ script infofile_;_ZIP::ssf252.xml_;_
'Browser("Browser").Page("Amazon Sign-In").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf253.xml_;_


'Browser("Online Shopping site in").Page("Amazon.com. Spend less.").Link("Sign in_2").Click @@ script infofile_;_ZIP::ssf261.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign-In").Link("Create your Amazon account").Click @@ script infofile_;_ZIP::ssf262.xml_;_
'Browser("Online Shopping site in").Page("Amazon Registration").WebEdit("customerName").Set "urvashi" @@ script infofile_;_ZIP::ssf263.xml_;_
'Browser("Online Shopping site in").Page("Amazon Registration").WebEdit("email").Set "magade786@gmail.com" @@ script infofile_;_ZIP::ssf264.xml_;_
'Browser("Online Shopping site in").Page("Amazon Registration").WebEdit("password").SetSecure "62c6aa3461a8b5180082b3ed22529e4ed41400c018566206856c9179" @@ script infofile_;_ZIP::ssf265.xml_;_
'Browser("Online Shopping site in").Page("Amazon Registration").WebEdit("password").SetSecure "62c6aa4e00fbe365c83b24793295709f9359" @@ script infofile_;_ZIP::ssf266.xml_;_
'Browser("Online Shopping site in").Page("Amazon Registration").WebEdit("passwordCheck").SetSecure "62c6aa53c53389f9b11a79c38b63102f0e6e" @@ script infofile_;_ZIP::ssf267.xml_;_
'Browser("Online Shopping site in").Page("Amazon Registration").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf268.xml_;_


'Browser("Online Shopping site in").Navigate "https://www.amazon.in/" @@ hightlight id_;_22086990_;_script infofile_;_ZIP::ssf269.xml_;_
'Browser("Online Shopping site in").Page("Online Shopping site in").Link("Sign in").Click @@ script infofile_;_ZIP::ssf270.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign In").WebEdit("email").Set "1998magade@gmail.com" @@ script infofile_;_ZIP::ssf271.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign In").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf272.xml_;_
'Browser("Online Shopping site in").Page("Amazon Sign In").Link("Forgot Password").Click @@ script infofile_;_ZIP::ssf273.xml_;_
'Browser("Online Shopping site in").Page("Amazon Password Assistance").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf274.xml_;_
'Browser("Online Shopping site in").Page("Authentication required").Link("Resend OTP").Click @@ script infofile_;_ZIP::ssf275.xml_;_
'Browser("Online Shopping site in").Page("Authentication required_4").WebElement("A new OTP has been sent").Check CheckPoint("A new OTP has been sent to your email._2") @@ script infofile_;_ZIP::ssf276.xml_;_
