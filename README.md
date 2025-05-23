# 🌤️ 天氣預報網站

一個現代化的天氣網站，使用 **React + TypeScript** 開發，整合 OpenWeatherMap API，可即時取得使用者所在位置的天氣資訊與未來幾小時的氣溫預測。具備快取功能與本地儲存收藏紀錄，並採用自訂 Hook 實現模組化開發。

> 🔍 自動偵測地理位置，顯示當地天氣  
> 📈 支援即時刷新與溫度趨勢圖表  
> 💾 收藏與搜尋紀錄皆保存在 localStorage 中

---

## 🔗 線上體驗

👉(https://weather-app-andrew.web.app/)

---

## ✅ 功能特色

- 📍 自動偵測使用者位置（Geolocation API）
- 🌤️ 顯示目前天氣（溫度、氣象圖示、天氣描述）
- 📊 小時氣溫預測圖表（當日未來幾小時）
- 🗺️ 透過座標反查地名（Reverse Geocoding）
- 🔄 一鍵重新整理天氣資料
- 💾 收藏地點與搜尋紀錄儲存在 LocalStorage
- ⚡ React Query 快取與異步資料處理
- ✅ 錯誤處理與 loading 狀態提示

---

## 🧱 技術架構

| 技術               | 用途說明                   |
| ------------------ | -------------------------- |
| React + TypeScript | 網站主體與型別安全         |
| React Query        | API 快取與狀態管理         |
| Tailwind CSS       | UI 樣式與響應式排版        |
| OpenWeatherMap API | 天氣資料來源               |
| Geolocation API    | 取得使用者目前位置         |
| LocalStorage       | 收藏與歷史搜尋資料本地儲存 |

---

## 📂 專案結構

src/
├── api/ # 封裝天氣與位置 API
├── hooks/ # 自訂 hooks（如 useGeolocation）
├── components/ # UI 元件
├── lib/ # 公用方法與 constants
├── pages/ # 頁面主體
├── types/ # TypeScript 類型定義
