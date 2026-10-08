from flask  import Flask

app=Flask(__name__)

@app.route('/')
def index():
    return 'Hola al mundo y la gente que lo habita'