# Butter & Sugar 烘焙課程影音平台(專題成果發表會： 2025/07/13)

## 啟動方式

1. 安裝相依套件

```
npm ci
```

2. 設定環境變數

使用 Docker 開發：

```
POSTGRES_USER=testHexschool
POSTGRES_PASSWORD=pgStartkit4test
POSTGRES_DB=test
DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=testHexschool
DB_PASSWORD=pgStartkit4test
DB_DATABASE=test
DB_SYNCHRONIZE=true
DB_ENABLE_SSL=false
PORT=8080
LOG_LEVEL=debug
JWT_EXPIRES_DAY=30d
JWT_SECRET=hexschool666
```

使用 localhost 開發伺服器（資料庫仍使用 Docker）：

```
POSTGRES_USER=testHexschool
POSTGRES_PASSWORD=pgStartkit4test
POSTGRES_DB=test
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=testHexschool
DB_PASSWORD=pgStartkit4test
DB_DATABASE=test
DB_SYNCHRONIZE=true
DB_ENABLE_SSL=false
PORT=8080
LOG_LEVEL=debug
JWT_EXPIRES_DAY=30d
JWT_SECRET=hexschool666
```

## 開發指令

- `npm run dev` - 啟動開發伺服器
- `npm run start` - 正式端啟動伺服器與資料庫
- `npm run start:prod` - 本地端啟動伺服器與資料庫
- `npm run restart` - 重新啟動伺服器與資料庫
- `npm run stop` - 關閉啟動伺服器與資料庫
- `npm run clean` - 關閉伺服器與資料庫並清除所有資料
- `npm run db:truncate ` - 清空所有資料表資料
- `npm run db:drop ` - 刪除所有資料表

## 開發建立環境順序

- `npm i`
- `.env 載入環境變數`
- `npm run start:prod`
- `npm run dev`

### 前端網址
- `https://buttersuger-frontend.zeabur.app/Home`

### swagger 文件
- `https://sugerbutter-test.zeabur.app/api-docs/`

### 前端專案
- `https://github.com/HatchiX8/Butter-Sugar-Frontend`

### 後端專案
- `https://github.com/qaz326978547/Butter-Suger-Back`

### 登入, 使用者, 教師功能後端 demo 影片連結
- `https://drive.google.com/file/d/1HxU4b5Q51YNF7uEhhoEZ91Rpdb8P2QNS/view?usp=sharing`

### 新增課程功能後端 demo 影片連結
- `https://drive.google.com/file/d/1gIadSsDq8v1HU8_89W-6Zu3Q9y4CaSVU/view?usp=sharing`

### 課程問答功能後端 demo 影片連結
- `https://drive.google.com/file/d/1vqTEXs-5gGpvtu1HaZzoSI_9-gjiwMvD/view?usp=sharing`

### 評價課程功能後端 demo 影片連結
- `https://drive.google.com/file/d/1XNd-UGF6I4z7CqLKDkq2II2TvWKjca_p/view?usp=drive_link`

### 購物車、訂單、更新我的課程功能後端 demo 影片連結
- `https://drive.google.com/file/d/1Db9N3J2xpsdVhdTZGfoDP4yI5pzrLSfQ/view?usp=sharing`

### 跨境電商結帳(銀聯卡、支付寶、微信，要先在 ezpay 註冊，新增測試用跨境商店，然後取得跨境商店的商店代號、HashKey、HashIV，再回到 newebpay 測試後台，啟用銀聯卡、支付寶、微信時，填寫 ezpay 跨境商店資料的商店代號、HashKey、HashIV)
- `https://drive.google.com/file/d/1UQ0Oi93KFiPPqHCPN6Ub_fp5e8syxOpr/view?usp=sharing`

### 藍新金流回傳資料
- `Web ATM、信用卡一次付清、google pay、華南銀行 ATM 轉帳、臺灣銀行 ATM 轉帳、台灣 pay、信用卡分期付款、支付寶、玉山 wallet、微信支付、銀聯卡`
- `https://hackmd.io/@neueZGI2ToWGjj4TJTCWIA/Hkm8gVPGlg`

