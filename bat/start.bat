@echo off

cd front
call yarn build

cd ..
call pipenv run start
