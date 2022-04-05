@echo off

rd /s /q build
rd /s /q dist\txt2aa

cd front
call yarn build

cd ..
call pipenv run build
