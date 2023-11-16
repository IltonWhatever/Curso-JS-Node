@echo off
:: Verificar se o script está sendo executado com privilégios de administrador
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"

:: Verificar o código de saída para determinar se o script tem privilégios de administrador
if %errorlevel% neq 0 (
    echo.Elevando privilégios de administrador...
    powershell -Command "& { Start-Process cmd.exe -ArgumentList '/c %~0' -Verb RunAs }"
    exit /b
)

:: Se o script tiver privilégios de administrador, execute o comando desejado
echo Parando o serviço do MySQL...
net stop MySQL81

cd C:\Program Files\MySQL\MySQL Server 8.1\bin
echo Entrando na pasta MySQL...

echo Configurando...
mysqld --defaults-file="C:\\ProgramData\\MySQL\MySQL Server 8.1\\my.ini" --init-file-c:\\mysql-init.txt --console

echo Iniciando o serviço do MySQL...
net start MySQL81

start cmd /k "cd C:\Program Files\MySQL\MySQL Server 8.1\bin && mysql -u -root -p"
exit /b 0



