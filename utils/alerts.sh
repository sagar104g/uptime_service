#!/bin/bash
TOKEN=xxxxxxxxxxx
CHAT_ID="xxxxxxxx"
URL="https://api.telegram.org/bot$TOKEN/sendMessage"

if [ $# -eq 0 ]
  then
    MESSAGE="Some Alert!!"
else
    MESSAGE=$1
fi

curl -s -X POST $URL -d chat_id=$CHAT_ID -d text="$MESSAGE"
