from flask import Flask, render_template
from datetime import datetime
import pytz

app = Flask(__name__)

timezones = [
    ("Asia/Thimphu", "Bhutan Time (BTT)"),
    ("Asia/Kolkata", "India Standard Time (IST)"),
    ("Asia/Dubai", "Gulf Standard Time (GST"),
    ("Europe/London", "Greenwich Mean Time (GMT)"),
    ("America/New_York", "Eastern Time (ET)"),
    ("America/Los_Angeles", "Pacific Time (PT)"),
    ("Asia/Tokyo", "Japan Standard Time (JST)"),
    ("Australia/Sydney", "Australian Eastern Time (AET)"),
]

@app.route("/")
def index():
    return render_template("index.html", timezones=timezones)

@app.route("/time/<tz>")
def get_time(tz):
    try:
        timezone = pytz.timezone(tz)
        now = datetime.now(timezone)
        return {
            "time": now.strftime("%H:%M:%S"),
            "date": now.strftime("%A, %B %d, %Y"),
            "full": now.strftime("%I:%M:%S %p"),
            "hour": now.strftime("%H"),
            "minute": now.strftime("%M"),
            "second": now.strftime("%S"),
            "am_pm": now.strftime("%p")
        }
    except:
        timezone = pytz.timezone("Asia/Thimphu")
        now = datetime.now(timezone)
        return {
            "time": now.strftime("%H:%M:%S"),
            "date": now.strftime("%A, %B %d, %Y"),
            "full": now.strftime("%I:%M:%S %p"),
            "hour": now.strftime("%H"),
            "minute": now.strftime("%M"),
            "second": now.strftime("%S"),
            "am_pm": now.strftime("%p")
        }

if __name__ == "__main__":
    app.run(debug=True)