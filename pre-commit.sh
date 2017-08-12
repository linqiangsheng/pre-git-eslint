#!/bin/bash

#提交的js文件
files=$(git diff --cached --name-only | grep '\.js$')

if [[ $files = "" ]] ; then
    exit 0
fi

#查询所有具备eslint的模块
eslintrcs=$(find . -path '.**/node_modules' -prune -o -type f -name .eslintrc -print)

failed=0
for eslintrc in ${eslintrcs}; do
    if [ ! -e $eslintrc ] ; then
        continue
    fi
    allLen=${#eslintrc}
    #10 = '/.eslintrc'.length
    dirLen=`expr $allLen - 10`
    modulePath=${eslintrc:0:dirLen}

    
    for file in ${files}; do
        if [ ! -e $file ] ; then
            continue
        fi
        $modulePath/node_modules/.bin/eslint --color -f stylish --max-warnings 0 $file
        if [[ $? != 0 ]] ; then
            failed=1
        fi
    done;

done;

#一旦失败，不给提交咯
if [[ $failed == 1 ]] ; then
    echo "❌  ESLint failed, git commit denied"
    exit $failed
fi