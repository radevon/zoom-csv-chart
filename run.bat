@ECHO OFF
ECHO %cd%
IF EXIST "C:\Program Files\IIS Express\iisexpress.exe" (
"C:\Program Files\IIS Express\iisexpress.exe" /path:%cd% /port:5555
ECHO Open web-browser with page "http://localhost:5555/zm.html"
) ELSE (
 IF EXIST "C:\Program Files (x86)\IIS Express\iisexpress.exe" (
 "C:\Program Files (x86)\IIS Express\iisexpress.exe" /path:%cd% /port:5555
 ECHO Open web-browser with page "http://localhost:5555/zm.html"
 ) ELSE (
	ECHO Server IIS Express not installed! Please Install IIS Express...
 )
)