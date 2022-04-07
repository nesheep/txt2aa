@echo off

cd py
rd /s /q build
rd /s /q dist\pytxt2aa
call pipenv run build

cd ..
call yarn electron:build
