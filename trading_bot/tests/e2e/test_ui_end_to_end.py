# Playwright E2E test for trading bot UI and backend
# To run: pip install pytest playwright && playwright install && pytest tests/e2e/

import pytest
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:8000"  # Change if your FastAPI server runs elsewhere

@pytest.fixture(scope="session")
def browser():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        yield browser
        browser.close()

@pytest.fixture(scope="function")
def page(browser):
    context = browser.new_context()
    page = context.new_page()
    yield page
    context.close()

def test_start_stop_bot(page):
    page.goto(BASE_URL)
    # Click the start button (update selector as needed)
    page.click('button#start-bot')
    # Wait for confirmation (update selector/text as needed)
    assert page.locator('text=Bot started').is_visible(timeout=3000)
    # Click the stop button
    page.click('button#stop-bot')
    assert page.locator('text=Bot stopped').is_visible(timeout=3000)

def test_update_settings(page):
    page.goto(BASE_URL)
    # Fill out and submit the settings form (update selectors as needed)
    page.fill('input[name="trade_frequency"]', '15')
    page.fill('input[name="buy_percentage_of_capital"]', '5')
    page.fill('input[name="sell_profit_target"]', '2')
    page.fill('input[name="sell_stop_loss_target"]', '1')
    page.click('button#update-settings')
    assert page.locator('text=Settings updated').is_visible(timeout=3000)

def test_balances_and_logs(page):
    page.goto(BASE_URL)
    # Check balances
    page.click('button#refresh-balances')
    assert page.locator('#usdc-balance').inner_text() != ''
    # Check logs
    page.click('button#refresh-logs')
    assert page.locator('#logs').inner_text() != ''

def test_orders_and_performance(page):
    page.goto(BASE_URL)
    # Check orders
    page.click('button#refresh-orders')
    assert page.locator('#orders').inner_text() != ''
    # Check performance
    page.click('button#refresh-performance')
    assert page.locator('#performance').inner_text() != ''
