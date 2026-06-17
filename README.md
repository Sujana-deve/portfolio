# Sujana Sharma — Portfolio

React frontend + Django backend contact form.

## Structure
```
portfolio/
  frontend/   → Vite + React (deploy to Netlify)
  backend/    → Django (deploy to PythonAnywhere)
```

---

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev       # runs on http://localhost:5173
```

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env          # fill in your values
python manage.py migrate
python manage.py runserver    # runs on http://127.0.0.1:8000
```

---

## Deploy: Backend → PythonAnywhere (Free)

1. Sign up at https://www.pythonanywhere.com (free account)
2. Go to **Consoles** → Bash console
3. Run:
```bash
git clone https://github.com/Sujana-deve/your-portfolio-repo.git
cd your-portfolio-repo/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
4. Go to **Web** tab → Add new web app → Manual config → Python 3.10
5. Set **Source code**: `/home/yourusername/your-repo/backend`
6. Set **Virtualenv**: `/home/yourusername/your-repo/backend/venv`
7. Edit **WSGI file** — replace contents with:
```python
import os, sys
path = '/home/yourusername/your-repo/backend'
if path not in sys.path:
    sys.path.append(path)
os.environ['DJANGO_SETTINGS_MODULE'] = 'config.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```
8. Go to **Files** → create `/home/yourusername/your-repo/backend/.env`:
```
SECRET_KEY=your-random-secret-key
DEBUG=False
ALLOWED_HOST=yourusername.pythonanywhere.com
FRONTEND_URL=https://sujanasharma.com.np
EMAIL_HOST_USER=sharmasujana420@gmail.com
EMAIL_HOST_PASSWORD=your-gmail-app-password
CONTACT_RECEIVE_EMAIL=sharmasujana420@gmail.com
```
9. In bash console: `python manage.py collectstatic --noinput`
10. Reload web app → test: `https://yourusername.pythonanywhere.com/api/contact/`

### Gmail App Password (required)
- Go to https://myaccount.google.com/security
- Enable 2-Step Verification
- Search "App passwords" → create one for Mail
- Paste that 16-char password as EMAIL_HOST_PASSWORD

---

## Deploy: Frontend → Netlify (Free)

1. Push repo to GitHub
2. Go to https://netlify.com → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Root directory: `frontend`
6. Add environment variable:
   `VITE_API_URL` = `https://yourusername.pythonanywhere.com`
7. Deploy

### Connect your .com.np domain
- In Netlify: Site settings → Domain management → Add custom domain → `sujanasharma.com.np`
- In your domain registrar (Mercantile/NTC): set nameservers to Netlify's OR add CNAME record pointing to your Netlify URL

---

## Adding your photo
Drop your photo as `frontend/public/profile.jpg` — it will appear in the hero section.
