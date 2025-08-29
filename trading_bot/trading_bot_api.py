
# FastAPI entrypoint for the modularized trading bot backend
from fastapi import FastAPI
from web.routes import router as web_router

app = FastAPI()

# Register routers
app.include_router(web_router)

# The main logic and routes are now modularized in core, data, ai, infra, and web packages.
