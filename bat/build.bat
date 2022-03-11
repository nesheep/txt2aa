@echo off

rd /s /q build
rd /s /q dist

cd front
call yarn build

cd ..
call pipenv run build
copy dll\fribidi.dll dist\txt2aa\fribidi.dll
