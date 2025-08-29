# LUTESSIA Trading Bot

An advanced AI-powered cryptocurrency trading bot with real-time web interface and Coinbase integration.

## 🚀 Features

### 🤖 AI-Powered Trading
- **Machine Learning Models**: LSTM and GRU neural networks for price prediction
- **Advanced Scoring System**: Multi-factor analysis using LUTE, ATR, and volatility indicators
- **Adaptive Decision Making**: AI validation for buy/sell decisions with configurable thresholds
- **Risk Assessment**: Intelligent profit/loss calculations and trade validation

### 📊 Technical Analysis
- **ATR (Average True Range)** indicators for volatility measurement
- **Multi-timeframe analysis** for comprehensive market assessment
- **Volatility scoring** for risk management
- **Price trend analysis** with multiple crypto pairs

### 💰 Trading Features
- **DCA (Dollar Cost Averaging)** strategies
- **Stop Loss & Take Profit** mechanisms
- **Portfolio Management** with real-time tracking
- **Risk Management** with adaptive thresholds
- **Multiple Order Types**: Market and limit orders
- **Fee Optimization**: Configurable maker/taker fee handling

### 🌐 Web Interface
- **Real-time Dashboard** built with Flask + SocketIO
- **Live Monitoring** of trades, profits, and AI predictions
- **Interactive Controls** for starting/stopping the bot
- **Authentication System** with 2FA email verification
- **Responsive Design** using Bootstrap 5

### 🔗 Exchange Integration
- **Coinbase Advanced API** for real trading
- **Secure Authentication** using API keys and private keys
- **Portfolio Management** across multiple accounts
- **Real-time Market Data** fetching

## 📋 Prerequisites

- Python 3.8 or higher
- Coinbase Advanced/Pro account with API access
- Email account for 2FA notifications
- Sufficient capital for trading (minimum recommended: $100+)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mamatechafrica/tradingbot.git
   cd tradingbot
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Coinbase API Configuration
   COINBASE_API_KEY=your_api_key_here
   COINBASE_API_SECRET=your_api_secret_here
   COINBASE_PORTFOLIO_ID=your_portfolio_id_here
   COINBASE_PROFIT_PORTFOLIO_ID=your_profit_portfolio_id_here
   
   # Email Configuration (for 2FA)
   MAIL_SERVER=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USERNAME=your_email@gmail.com
   MAIL_PASSWORD=your_app_password
   
   # Trading Configuration
   INITIAL_CAPITAL=1000.00
   MAX_POSITIONS=5
   ```

4. **Add Coinbase private key**
   Place your Coinbase private key file as `coinbase_private_key.pem` in the root directory.

## ⚙️ Configuration

### Trading Parameters
The bot includes several configurable parameters:

- **Fee Rates**: 
  - Taker: 0.6% (market orders)
  - Maker: 0.3% (limit orders)
- **Profit Targets**: 
  - Default Take Profit: 2.5%
  - Default Stop Loss: 1.2%
- **AI Thresholds**:
  - Minimum score for buy: 0.6
  - Minimum expected gain: 1.5%

### Supported Cryptocurrency Pairs
- BTC-USDC, ETH-USDC, ADA-USDC
- AAVE-USDC, ALGO-USDC, ARB-USDC
- AVAX-USDC, CRV-USDC, DOGE-USDC
- DOT-USDC, ETC-USDC, FET-USDC
- FIL-USDC, GRT-USDC, HBAR-USDC
- ICP-USDC, IDEX-USDC, LINK-USDC
- LTC-USDC, and more...

## 🚀 Usage

### Running the Bot

1. **Start the trading bot**
   ```bash
   python LUTESSIA_FINAL_PRODUCTION_EXEC_REBUILT_WITH_IA_CONNECTED_FINAL_v2_20250805_164551.py
   ```

2. **Access the web interface**
   Open your browser to `http://localhost:5000`

3. **Authenticate**
   - Use the 2FA email system for secure access
   - Monitor real-time trading activity

### Web Interface Features

- **Dashboard**: Real-time overview of portfolio, active trades, and performance
- **Logs**: Live trading logs and AI decision making process
- **Controls**: Start/stop trading, adjust parameters
- **Charts**: Price movements and technical indicators
- **Alerts**: Email notifications for significant events

## 📊 How It Works

### AI Decision Process
1. **Data Collection**: Fetches real-time price data from Coinbase
2. **Technical Analysis**: Calculates ATR, volatility, and other indicators
3. **AI Prediction**: Uses LSTM/GRU models to predict price movements
4. **Scoring**: Combines multiple factors into a final trading score
5. **Validation**: Checks thresholds and risk parameters
6. **Execution**: Places trades via Coinbase API if all conditions are met

### Risk Management
- **Position Sizing**: Adaptive capital allocation based on volatility
- **Stop Losses**: Automatic exit on adverse price movements
- **Profit Taking**: Systematic profit realization at target levels
- **Portfolio Limits**: Maximum number of concurrent positions
- **AI Validation**: Multiple checks before trade execution

## ⚠️ Important Disclaimers

### Financial Risk Warning
- **High Risk**: Cryptocurrency trading involves substantial risk of loss
- **No Guarantees**: Past performance does not guarantee future results
- **Capital Risk**: Only invest money you can afford to lose completely
- **Market Volatility**: Crypto markets are highly volatile and unpredictable

### Technical Considerations
- **Beta Software**: This is experimental software - use at your own risk
- **API Limits**: Respect Coinbase API rate limits and terms of service
- **Security**: Keep your API keys and private keys secure
- **Monitoring**: Always monitor the bot's activity and be prepared to intervene

### Legal Compliance
- **Regulations**: Ensure compliance with local financial regulations
- **Taxes**: Keep records for tax reporting purposes
- **Jurisdictions**: Some features may not be available in all regions

## 📁 Code Structure

```
tradingbot/
├── LUTESSIA_FINAL_PRODUCTION_EXEC_REBUILT_WITH_IA_CONNECTED_FINAL_v2_20250805_164551.py  # Main bot logic
├── index.html              # Web interface template
├── requirements.txt        # Python dependencies
├── logs.txt               # Trading activity logs
├── .env                   # Environment configuration (create this)
└── coinbase_private_key.pem  # Coinbase private key (add this)
```

### Key Components
- **AI Engine**: Machine learning models and prediction logic
- **Trading Engine**: Order placement and portfolio management
- **Risk Manager**: Stop loss, take profit, and position sizing
- **Web Interface**: Flask app with SocketIO for real-time updates
- **Data Manager**: Market data fetching and processing
- **Logger**: Comprehensive logging system

## 🔧 Development

### Dependencies Overview
- **AI/ML**: TensorFlow, Keras, scikit-learn, numpy, pandas
- **Web**: Flask, Flask-SocketIO, Bootstrap 5
- **Trading**: coinbase-advanced-py, requests
- **Technical Analysis**: pandas-ta, ta
- **Utilities**: python-dotenv, pyotp (2FA)

### Extending the Bot
The codebase is modular and can be extended with:
- Additional AI models
- New technical indicators
- Different exchanges
- Custom trading strategies
- Enhanced risk management

## 📞 Support

For issues, questions, or contributions, please:
1. Check the logs for error details
2. Verify your configuration and API credentials
3. Review the Coinbase API documentation
4. Create an issue in the repository

## 📜 License

This project is provided as-is for educational and research purposes. Users are responsible for compliance with all applicable laws and regulations.

---

**Remember**: Cryptocurrency trading is inherently risky. This bot is a tool to assist with trading decisions, but it cannot guarantee profits. Always do your own research and consider consulting with financial professionals before making investment decisions.