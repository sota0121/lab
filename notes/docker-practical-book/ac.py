from flask import Flask
from redis import Redis

app = Flask(__name__)
redis = Redis(host='redis', port=6379)

@app.route('/')
def hello():
    c = redis.incr('hits')
    return 'Hello Docker! Access Count: {}\n'.format(c)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8081, debug=True)
