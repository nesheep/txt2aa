@echo off

rd /s /q build
rd /s /q dist

cd front
call yarn build

cd ..
call pipenv run build
