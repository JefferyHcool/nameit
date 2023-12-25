#!/usr/bin/env python
# -*- coding:utf-8 -*-

import json
from plugins.apiPlugin import ApiPlugin
from prompt.main import prompt

api = ApiPlugin()


class ApiService:

    @staticmethod
    def create_completion(data):
        messages=[{'role': 'system', 'content': prompt},{'role': 'user', 'content': json.dumps(data)}]

        response = api.create_completion( messages)

        if isinstance(response, dict):
            return {'res': False, 'mesg': 'openai服务出错'}
        data=json.loads(response)
        code=data.get('code',None)
        if  code:
            return {'code':code,'mesg':'输入格式错误，请输入正确的格式'}

        return {'code':0,'mesg':'生成成功','data':data}
