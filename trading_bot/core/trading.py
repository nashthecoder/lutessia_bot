# Core trading logic and order management
from decimal import Decimal

MIN_PROFIT_THRESHOLDS = {
    'default': Decimal("0.015"),
    'high_volatility': Decimal("0.02"),
    'low_volatility': Decimal("0.01")
}
FEE_RATE = Decimal("0.001")

# Example: order placement, profit check, etc.
def is_trade_profitable(buy_price, tp_pct, selected_series):
    buy_price_dec = Decimal(str(buy_price))
    tp_pct_dec = Decimal(str(tp_pct))
    sell_price = buy_price_dec * (Decimal("1") + tp_pct_dec)
    gross_profit = sell_price - buy_price_dec
    fees = buy_price_dec * FEE_RATE * 2
    net_profit = gross_profit - fees
    net_pct = net_profit / buy_price_dec
    threshold = MIN_PROFIT_THRESHOLDS.get(selected_series, Decimal("0.015"))
    return net_pct >= threshold



