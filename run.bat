@ECHO OFF
ECHO %cd%
IF EXIST "C:\Program Files\IIS Express\iisexpress.exe" (
ECHO Open web-browser with page "http://localhost:5555/" after iisexpress started
"C:\Program Files\IIS Express\iisexpress.exe" /path:%cd% /port:5555
) ELSE (
 IF EXIST "C:\Program Files (x86)\IIS Express\iisexpress.exe" (
 ECHO Open web-browser with page "http://localhost:5555/" after iisexpress started
 "C:\Program Files (x86)\IIS Express\iisexpress.exe" /path:%cd% /port:5555
 ) ELSE (
	ECHO Server IIS Express not installed! Please Install IIS Express...
 )
)