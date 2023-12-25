from flask import *
from flask_cors import CORS
from flask import make_response
import redis
from service.apiService import ApiService
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
app = Flask(__name__)
CORS(app, supports_credentials=True)
from settings.config import redis_db_url
base_path = "/api/"
redis_store = redis.StrictRedis(host='redis', port=6379, db=0)
limiter = Limiter(get_remote_address, app=app, default_limits=["200 per day", "50 per hour"],storage_uri=f'redis://redis:6379/0')

@app.route(base_path + "generate", methods=['POST'])
@limiter.limit("20 per minute")
def generate():
    try:
        re = request.get_json()
        print(re)
        generator_data = {
            'variable': re.get('variable'),
            'language': re.get('language'),
            'style': re.get('style'),
            'type': re.get('type'),
            'prefix': re.get('prefix'),
            'suffix': re.get('suffix'),
            'length': re.get('length'),
            'mount': re.get('mount', 4)  # Default to 4 if not provided
        }
        res=ApiService.create_completion(data=generator_data)
        if res and res['code']==0:
            return jsonify(code=0, mesg=res['mesg'],data=res['data'])
        else:
            return jsonify(code=-1,mesg=res['mesg'],data='')

    except Exception as e:
        print("生成变量失败", e)
        return jsonify(mesg=e, code=-1)
@app.errorhandler(429)
def ratelimit_handler(e):
    return "You have exceeded your request rate", 429
