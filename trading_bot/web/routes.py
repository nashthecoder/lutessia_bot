# --- Trading Bot Control Endpoints ---


from fastapi import APIRouter, Form
from infra.utils import log_message
import LUTESSIA_FINAL_PRODUCTION_EXEC_REBUILT_WITH_IA_CONNECTED_FINAL_v2_20250805_164551 as bot
import os
from typing import List
router = APIRouter()


@router.post("/start")
async def start_bot():
    bot.bot_running = True
    log_message("Bot started via API")
    return {"status": "ok", "message": "Bot started"}


@router.post("/stop")
async def stop_bot():
    bot.bot_running = False
    log_message("Bot stopped via API")
    return {"status": "ok", "message": "Bot stopped"}

# --- Data/Log/Performance Endpoints (stubs) ---

@router.get("/log_Balance_Total")
async def log_Balance_Total():
    # Example: sum of all balances (simulate for now)
    try:
        usdc = bot.get_usdc_balance()
    except AttributeError:
        usdc = 0
    total = usdc
    return {"log_Balance_Total": str(total)}


@router.get("/log_usdc_balance")
async def log_usdc_balance():
    try:
        usdc = bot.get_usdc_balance()
    except AttributeError:
        usdc = 0
    return {"log_usdc_balance": str(usdc)}



@router.get("/log_eth2_balance")
async def log_eth2_balance():
    # ETH balance not implemented in bot, return dummy value
    return {"log_eth2_balance": "0.0"}


@router.get("/log_orders")
async def log_orders():
    # Return executed orders from bot
    try:
        orders = bot.executed_orders_global
    except AttributeError:
        orders = []
    return {"log_orders": orders}



@router.get("/logs")
async def logs():
    # Return last 50 lines from logs.txt if exists
    log_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../logs.txt')
    if os.path.exists(log_path):
        with open(log_path, 'r') as f:
            lines = f.readlines()[-50:]
        return {"logs": [line.strip() for line in lines]}
    else:
        return {"logs": ["No logs found."]}


@router.get("/get_performance")
async def get_performance():
    try:
        profit = bot.profit_cumul
    except AttributeError:
        profit = 0.0
    try:
        drawdown = bot.max_drawdown_pct
    except AttributeError:
        drawdown = -5.0
    return {"performance": {"profit_cumul": profit, "max_drawdown_pct": drawdown}}



@router.post("/update_settings")
async def update_settings(
    trade_frequency: int = Form(30),
    buy_percentage_of_capital: float = Form(...),
    sell_profit_target: float = Form(...),
    sell_stop_loss_target: float = Form(...),
    selected_crypto_pairs: List[str] = Form([]),
    ia: List[str] = Form([]),
):
    log_message(f"Settings updated: freq={trade_frequency}, buy%={buy_percentage_of_capital}, sell_profit={sell_profit_target}, sell_stop={sell_stop_loss_target}, pairs={selected_crypto_pairs}, ia={ia}")
    # Optionally update bot parameters here
    return {"status": "ok"}



