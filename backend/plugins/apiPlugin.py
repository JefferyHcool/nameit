# !/usr/bin/env python
# -*- coding:utf-8 -*-
# @FileName  :apiPlugin.py
# @Time      :2023/11/19 15:20
# @Author    :JefferyH
import json

import requests

from settings.config import *

from settings.config import completion_url


class ApiPlugin:

    def __init__(self):
        self.index = 0
        self.api_key = OPENAI_API_KEY[self.index]
        self.header = {
            "Content-Type": "application/json",
            f"Authorization": f"Bearer {self.api_key}",
        }
        self.proxies = {
            "http": "http://127.0.0.1:7890",
            "https": "http://127.0.0.1:7890",
        }



    def create_completion(self, messages):
        data = {
            "model": model,
            "messages": messages,
        }

        print(data)
        data = json.dumps(data)

        # 发送请求
        response= requests.post(completion_url,headers=self.header, data=data)

        content = response.json().get('choices', [{}])[0].get('message', {}).get('content', '')
        if response.status_code==200:
            print(response.json())
        if response.status_code==400:
            print(response.json())
            return {'mesg':''}

        return content


        # json_data = response.json()
        #
        # for i in response.iter_content():
        #     decoded_data = i.decode('utf-8')
        #     yield decoded_data

            # print(chunk)
            # decoded_data = chunk.decode('utf-8')
            # json_str = decoded_data.split('data:')[1]
            # print(chunk)
            # json_data = json.loads(json_str)
            # content = json_data.get('choices', [{}])[0].get('delta', {}).get('content', '')
            # res = res + content
            # print(decoded_data)
            # yield decoded_data


        # return json_data