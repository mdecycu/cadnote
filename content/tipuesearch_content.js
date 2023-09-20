var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://mde.tw/cadnote \n 這是國立虎尾科技大學 (National Formosa University, Taiwan) 機械設計工程系大二電腦輔助設計與實習課堂筆記網站，本課程承接大一的計算機程式，並為隨後協同産品設計課程提供必要的零組件設計繪圖與 Web-based 機電系統模擬基礎。 \n 課程內容將包含機電整合範例系統中 3D 零組件的電腦輔助設計繪圖，以及實體模型製作之前所需的機電控制系統設計與模擬。 \n 電腦輔助設計繪圖將採用可在 Windows 操作系統中可㩦運作的 Siemens Solid Edge 與 Solvespace，業界普遍採用的 Dassault Solidworks 與 Siemens NX，以及能直接在 PC Web Browser 及手機或平板 App 中使用的 Onshape。 \n 控制系統設計將採用最簡單的 PID 自動控制流程，並配合將 3D 零組件模型導入 Coppeliasim，以 Python ZeroMQ Remote API 程式跨網路進行控制後，再利用 Websocket 將機電系統控制與模擬結果，呈現於 PC 、平板或手機的 Web Browser 上，以便在之後的協同産品設計課程中進行應用。', 'tags': '', 'url': 'About.html'}, {'title': '上課內容', 'text': '112 學年度第一學期 (2023 Fall) 機械設計工程系 -  電腦輔助設計與實習 課程的上課內容與進度. \n \n 首先說明 課程評分方式 \n Teaching Methods (教學方法): \n \n lectures (講課) \n instruction (導引) \n projects (專案) \n self-study (自學) \n \n 第一階段任務: \n 手機建議安裝以下 Apps: \n ChatGPT, Github mobile, Replit, Authy, Teams, Onshape \n 各 Apps 的功能與目的: \n 本課程允許學員從 ChatGPT 以 GPT-3.5 preview 對話過程取出內容, 納入個人與作業網站中. \n 手機上的 Github mobile App 可用於 Github 帳號中的 2FA 流程, 幫助 Github 阻絕不當的 robot 濫用. \n Replit App 則可讓學員利用手機 Run 倉儲網站, 並以手機或平板瀏覽器管理較少量的網站編輯. \n Authy App 允許使用者利用手機或數位手錶取得 2FA 登入流程所需的 verification code. \n Teams App 可以讓學員利用手機參與 Microsoft 線上團隊課程. \n Onshape App 則可讓使用者利用手機或平面檢視或修改協同產品設計流程中的零組件. \n \n 完成本節中的各項任務後, 表示你將可以登入: \n \n 學校 email 帳號郵箱 \n 個人Gmail 帳號郵箱 \n Replit IDE 系統 (以 個人Gmail 帳號登入) \n 個人 Github 系統 \n 以學校 email 帳號設定的 Onedrive 系統 \n \n 登入學校 Email 郵箱: \n 學校 Webmail:  https://mail.nfu.edu.tw  (帳號為: 學號@nfu.edu.tw, 用來通知  http://s1511.cycu.org \xa0 主機上的帳號密碼與學期成績) \n 申請或登入 Gmail: \n 假如尚未擁有 Gmail 帳號, 請自行 申請一個 Gmail 帳號 , 可用來 登入 Replit  線上 IDE 系統. \n 使用 Replit 免費帳號管理 Github 倉儲網站時, 必須確認 Replit 所屬伺服器是在開啟狀態, 最佳使用流程是在任一 Web-based 流程儲存網頁內容時, 先將內容複製到近端電腦 (即將欲存檔的頁面 html 暫存至電腦緩衝區), 之後再執行網際存檔, 以避免丟失資料 (Replit 免費帳號可能在使用者編輯網頁過程重新啟動伺服器). \n 申請 Github 帳號: \n 已經有 Github 帳號者, 請以既有帳號登入, 並在 Github 全面要求使用 2FA (Two Factor Authentication) 之前, 完成設定. \n 尚未擁有 Github 帳號者, 請利用"學號@nfu.edu.tw"在 Github  註冊 一個帳號, 帳號名稱可以選擇 學號 , 或者用 英文姓名的三個字母縮寫加上學號 作為 Github 帳號. 帳號建立後必須進入  https://mail.nfu.edu.tw  回覆確認信件後, 才能開始使用 Github. \n 設定 Github 帳號的 2FA 認證: \n 由於 Github 要求所有用戶在 2023 年底之前要使用 2FA 認證方式登入, 使用者可以在手機中先安裝 Github Mobile App, 假如只希望利用手機取得 2FA token (六個阿拉伯數字) 則可以在手機中安裝 Google Authenticator App, 若也希望利用 Apple Watch 取得 2FA token, 則可以在手機中安裝 Authy App. \n 將 Github 帳號登入所需的 2FA 認證設定於手機的 Google Authenticator 或 Authy 的流程為: \n 1. 登入 Github 後, 進入帳號 Settings - Password and authentication - Two-factor authentication 下, 若此時手機已經安裝 Github Mobile App, 且以 Github 帳號登入, 則 Preferred 2FA methods 選項中將會顯示 Github Mobile, 表示此時啟動 2FA 認證流程, 則使用者登入 Github 時, 除了必須輸入帳號密碼外, 還需要在手機的 Github Mobile App 中確認同意該使用者登入 Github, 系統才會允許登入. \n 2. 接下來, 在 Two-factor methods 下點選 Authenticator app 右方的 Add (若要變更手機所使用的 2FA token 產生程式, 則點選 Edit), 視窗中將會出現一組二維條碼, 使用者可以利用手機開啟 Google Authenticator 或 Authy 中的 account add 功能開啟相機拍二維條碼後, 將 Github 帳號登錄至手機認證套件中. \n 3. 一旦上述 Github 帳號在手機中的 2FA 認證設定完成, 使用者可以將前述內建為 Github Mobile 的 Preferred 2FA methods 改為 Authenticator app, 之後再登入 Github, 除了必須輸入對應的帳號密碼之外, 還需要輸入在特定時段內輸入手機或手錶中對應帳號所顯示的六個數字 (即 2FA token), 才能登入 Github. \n 4. 至於手機中的 Authenticator 也可以再利用 Pin 密碼、指紋或人臉辨識流程加入安全保護, 一旦手機或手錶毀損, 就可以藉以登入 Github 帳號修改設定. \n Github 帳號在電腦輔助設計與實習課程中的用途: \n \n 領取  Github Classroom  系統所指定的作業 \n 建立個人網站:  https://github_帳號.github.io \n 將電腦輔助設計與實習課程中所編寫的程式與相關資料存入 Github 帳號下的 Gist \n \n 在 Github 中, 若需要將所建立的倉儲以 Github Pages 功能轉為網站, 可以在建立倉儲時, 以  https://github.com/mdecycu/cmsite  作為 template, 首先學習如何利用 Replit 維護網站內容, 隨後則可利用 s1511 伺服器中的帳號進行 Github 倉儲與網站內容的維護, 最後也可以在近端可攜程式環境中維護 Github 倉儲與網站內容. \n 利用 Github 建立個人網站 (透過  Github Pages ) 有以下目標: \n \n 可在網站中自我介紹 ( https://www.betterup.com/blog/how-to-introduce-yourself ) \n 可在網站中展示並介紹自己寫過的程式 \n 可在網站中簡介自己修過的課程內容 \n 可在網站中說明自己曾經參與過的專題 \n 可在網站中介紹自己未來的生涯規劃 \n \n 申請 onedrive 帳號: \n \n 登入學校郵箱 (用來收帳號建立確認信) \n 尚未建立 @nfu 對應教育版帳號者, 請至  https://www.microsoft.com/zh-tw/education/products/office , 以 學號@nfu.edu.tw 帳號申請 OneDrive 帳號. \n \n onedrive 帳號在電腦輔助設計與實習課程中的用途: \n \n 擁有線上 5TB 的儲存空間, 可用來儲存個人所建立的流程操作 mp4 影片, 並嵌入個人網頁或作業網站中 \n 擁有線上 5TB 的儲存空間, 可用來儲存與課程相關的 教育版授權軟體  (例如:  Windows 10 64位元 22H2.4 ,  Windows 11 64位元 22H2.6 ,  windows_kms.bat ) 或可攜程式系統檔案與 電子書 \n 登入後可參與電腦輔助設計與實習課程 Teams (CAD2023 MS Teams 代碼為: fnueb56) \n 登入後可下載電腦輔助設計與實習課程網站中的相關檔案 (下載連結將公布在 Teams) \n \n 可攜程式環境: \n basic_portable_python.7z  (下載 15MB, 解開後 55MB) \n 下載  Portable_2023_fall_1.3g_5g.7z  (需要下載密碼) \n 也可以直接使用電腦輔助設計室中 C:\\Portable_2023_fall 目錄中的檔案 \n 下載  se_portable_X_for_cad2023.7z  (需要下載密碼) \n 電腦輔助設計套件: \n 全雲端:  https://www.onshape.com/en/  (課程協同帳號: course At mde dot tw) \n AutoDesk (USA): Inventor and Fusion 360 \n Dassault Systems (France): SolidWorks and CATIA \n Siemens (Germany): Solid Edge and NX \n PTC (USA): Creo and Onshape \n Solvespace:  https://github.com/solvespace/solvespace ,  Forum \n 機電資模擬套件: \n CoppeliaSim:  https://www.coppeliarobotics.com/ ,  https://github.com/CoppeliaRobotics \n 下載  CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z  (需要下載密碼) \n CoppeliaSim 使用者手冊 ,  CoppeliaSim 4.3.0 使用手冊網站 \n Webots:  https://cyberbotics.com/ ,  https://webots.cloud/ \n Robotics: \n RoboDK:  https://robodk.com/ ,  robodk  and  robolink  (integrated into robodk),  https://www.parallemic.org/RoKiSim.html \xa0 \n References: \n http://wcm.cycu.org:88/github/  (只能在機械設計系 IPv6 網段連結)', 'tags': '', 'url': '上課內容.html'}, {'title': '任務一', 'text': '\n 2023.09.14 上午 2b 上課時段, 之所以沒有 IPv6 網路連線的原因是:  BGA-0810-S 網管集線器的 port 24 硬體故障 , 無法從工作站室取得機械設計系網路主幹訊號. \n 在 Replit Python 環境中就是內建 Python3, 因此安裝模組必須使用 pip 而非一般 Linux 環境中使用的 pip3: \n 以 import 將倉儲從 github 導入後, 必須使用 git submodule update --init 取下 cmsimde 子模組內容 (因為 Replit import 不會自動取下倉儲對應的子模組). \n 取下子模組之後, 以 Run 嘗試以 Python3 執行 main.py, 讓 Replit 自行調適所需的 Python3 環境, 結果會顯示缺少啟動 cmsimde 網站的模組, 再以下列指令在 Shell 頁面安裝所需模組: \n pip install flask flask_cors bs4 lxml markdown pelican gevent \n 其中 flask 為 Python 網際框架, flask_cors 則允許跨網域擷取資料的 flask 延伸模組, bs4 與 lxml 用於超文件分頁, markdown 與 pelican 則允許使用者採 Markdown 格式編寫網誌內容, 並且利用 Pelican 套件轉為 html 格式的網誌文章. 至於 gevent 則是 Replit 內建使用的同步網路程式庫. \n 手動載下倉儲子模組, 試以 Run 執行之後再安裝 cmsimde 編輯網站所需模組, 應該就可以利用 Run 啟動倉儲對應的動態網站. \n 最後, 為了保全網站登入的管理者密碼編碼, 還需要在 Secrets 頁面中建立 config 變數, 並將近端 config/config 所修改的管理者密碼編碼登錄至 config 變數. \n \n 請自選 CAD 套件, 依照下列圖示, 以能將此系統放在電腦桌上作為參考尺寸, 繪製所需的零組件, 並將各零組件檔案與畫面上傳至個人的 Onedrive, 或以 Onshape 上的公開連結展示所完成的資料. \n 最後在個人的 帳號.github.io 網站上呈現任務一所完成的結果 (請以 H1 且標題為任務一建立網頁). \n 有關電腦輔助設計繪圖套件: \n 機械設計工程系所提供的 SolidWorks 與 NX 都必須在啟動時, 透過網路至分別位於校本部與系上的認證主機進行登錄, 才能開啟. 其中 Siemens  NX2027.3401_lite_cad2022.7z  (需要下載密碼) 可以放入隨身碟, 在任一台 Windows 64 位元的電腦上, 連接網路取得認證後開啟. \n Siemens Solid Edge 則提供  Community 版本 , 安裝後無需上網即可使用, 在電腦輔助設計室則可以下載  se_portable_X_for_cad2023.7z  (需要下載密碼), 放入隨身碟後, 先執行所附的系統組態批次檔後, 直接以批次檔案開啟. \n Solvespace  則適合在初步設計階段, 提供尺寸規劃或外型較為簡單的零組件繪製. \n \n 零組件繪圖完成後, 請轉為 STL 格式轉入 CoppeliaSim 進行機電系統模擬. \n 下載  CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z  (需要下載密碼) \n CoppeliaSim 使用者手冊 ,  CoppeliaSim 4.3.0 使用手冊網站', 'tags': '', 'url': '任務一.html'}, {'title': '磁力吸引', 'text': '有關磁力吸引的鋼球循環運動系統, 請參考 這個影片 .  或者透過課程檔案下載密碼觀看 這個影片 . \n 根據 這個網站 宣稱是此一 Perpetual Motion Simulator 的原始創作者. \n 同時參考\xa0 A perpetual motion machine powered by electromagnetism.pdf  (需要下載密碼) \n 電腦輔助設計與實習課程的任務一即可根據此一裝置的設計, 先採用電腦輔助設計軟體, 繪製系統所需的 3D 零組件, 然後轉為 STL 格式, import 進入 CoppeliaSim, 接著根據影片說明, 利用近接感測器(例如:  電感式近接開關 ,  Inductive proximity sensor ) 控制電磁鐵開關, 設法透過磁力推動讓鋼球具有足夠動能返回圓形平台. \n 有關利用 Arduino 控制卡與相關電路設計產生電磁力控制的模擬, 請參考  PICSimLab  頁面中的說明. \n 一旦完成 CoppeliaSim 與 Arduino 電路設計等機電資系統整合模擬, 就可以進一步利用 3D printer 列印出所需零組件, 結合實體電路設計完成此一系統的虛實整合. \n 機電模擬系統: \n 下載  CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z  (需要下載密碼) \n CoppeliaSim 使用者手冊 ,  CoppeliaSim 4.3.0 使用手冊網站 \n 模擬磁力的 討論 ,  1 ,  2 \n Force Control Modeling \n simpleMagnetDemo.ttt \n 模擬原理: \n Perpetual Motion Simulator 電源開啟後, 將使右側軌道下方的電磁鐵致動, 產生一定大小的磁吸力, 當圓形鐵球循著軌道接近時, 將會被磁力吸引, 其磁力大小約略與其距離的平方成正比 ( Computational Electromagnetics ,  磁場模擬 ), 但當圓形鐵球接近電磁鐵前方的近接感測器 (Proximity sensor) 至一定距離時 (3mm-5mm), 控制程式將會隨即關閉電磁鐵的通電迴路, 瞬間切斷電磁吸力. \n 因此圓形鐵球除了從平台高度落下時, 將位能轉換為動能外, 與軌道滾動磨擦以及空氣阻力所損耗的運動能, 將額外由電磁鐵關閉之前所得到的磁力吸引能量進行加速, 以便取得足夠的動能在脫離軌道末端後, 重新回到圓形平台. \n \n (image from  here ) \n 磁力未啟動下的 perpetual motion simulator CoppeliaSim 場景模擬: \n', 'tags': '', 'url': '磁力吸引.html'}, {'title': '馬達推動', 'text': '除了利用磁力吸引, 讓鋼球在軌道運動時能具備足夠動能返回圓形平台外, 另外一種設計是在鋼球 (或其他非鐵材質的圓球) 離開圓形平台孔洞之後, 設法利用隱藏式的馬達帶動機構, 以滾動方式加速圓球, 以便讓圓球返回平台. \n 有關馬達推動設計, 請參考:  https://www.instructables.com/Marblevator-Perpetual/  或 這個影片 . \n 機電模擬系統: \n 下載  CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z  (需要下載密碼) \n CoppeliaSim 使用者手冊 ,  CoppeliaSim 4.3.0 使用手冊網站', 'tags': '', 'url': '馬達推動.html'}, {'title': 'Replit', 'text': '使用 Replit 維護 cmsimde 網站內容時, 可以利用  secrets 環境變數  Tool 保全免費 Replit 帳號 (只能建立完全公開的 Repls) 下的管理者密碼編碼字串. \n \n Replit Documentation:\xa0 https://docs.replit.com/ \xa0 \n Intro to Replit \n 從 Github 將倉儲導入 Replit 的手冊:\xa0 https://docs.replit.com/category/using-git-on-replit \xa0 \n \n 利用 Replit 維護 Github 倉儲網站的步驟: \n \n Connect Github to Replit  (目的在讓導入 Replit 的倉儲具有推回 (git push) Github 對應帳號的權限) \n Import repository to Replit  (選擇倉儲所使用的程式 Python 語言, 可以直接在 Replit 執行網頁編輯程式) \n 手動取下與倉儲對應的子模組: git submodule update --init --recursive (假如連主倉儲內容與子模組全部手動取下資料, 則可使用 git clone --recurse-submodules 然後接 https 或 SSH 倉儲網址) \n Run Github repository on Replit  (由於從 Github 導入 Replit, 並沒有倉儲子模組的內容必須手動導入, 且以 pip 安裝執行 cmsimde 網頁編輯程式所需的模組, 其中包括 flask flask_cors bs4 lxml markdown pelican gevent 等) \n 以 Run 執行動態網站, 以編輯表單中的 config 設定管理者密碼後, 將 config/config 編碼字串移至 secrets 工具中的 config 變數, 然後刪除倉儲中的 config/config 檔案, 以 Stop 關閉動態網站後, 重新以 Run 執行動態網站, 測試是否可以採新修改的管理者密碼登入動態網站. \n 利用 cmsimde 動態網站功能修改內容後, 以 Convert 將資料轉為靜態網頁後, 回到 Replit 以 Git 工具進行內容的新增、提交與推送至對應的 Github 倉儲. \n \n \n 2023.09.15 下午 2a 上課時所使用的  cmsite 版本 , 其中的 .replit 與 Replit.nix 必須移除才能使用最新版本的 Python, 因此若當時已經採用作為 Template 的倉儲必須進行修改或重新建立. \n 另外, 一個 Replit 免費帳號只能與一個 Github 帳號綁定. 以下說明將利用 scrum2 At mde dot tw 對應的 Gmail 登入 Replit 後, 其帳號設定為 scrum2, 並與 Github 帳號 scrum-2 進行綁定. \n \n Repl 為 Replit 網際服務系統中的專案, 一旦選定對應 Language, 當專案以 Run 執行時, 系統將會試著安裝所需模組, 只是 Replit import from Github 並不會取下子模組, 使用者必須自行以 git 指令取得子模組內容. \n Replit 專案的設定檔案位於 .replit 與 Replit.nix 等兩個檔案. \n 希望利用 Replit (Web-based IDE, Integrated Development Environment) 來維護個人網站. \n 將倉儲 Import 至 Replit, 在 Replit 啟動 cmsimde 網站進行內容編輯之後, 轉為靜態, git commit and git push. \n 導入畫面中選擇以 Python 作為專案程式語言, 如下圖所示, 導入 scrum-2/scrum-2.github.io 倉儲. \n \n 將 scrum-2.github.io 倉儲導入 Replit 之後, 必須手動取下倉儲對應的子模組 (因為 Replit 的 import 功能並不會自動將倉儲所屬的子模組導入). \n 在既有倉儲所處的電腦中導入子模組的指令為: \n git submodule update --init \n 假如所要取下的倉儲子模組其下還有子模組, 則使用: \n git submodule update --init --recursive \n 假如在 Windows 命令列或 Linux Shell 中直接利用 git clone 取下主倉儲與子模組資料, 則使用: \n git clone --recurse-submodules 然後接倉儲的 https 或 SSH 網址 (Github 已經從網站拿掉 SSH 協定語法). SSH 為 Secure SHell 的簡寫, 可在不安全的網路中為網路服務提供安全的傳輸環境. \n 使用倉儲的 https 網址進行 git clone, 隨後若要改版後 git push, 則需在 .git/config 中納入權限 token. 若使用倉儲的 SSH 網址進行 git clone, 在 Windows 可以利用 Putty 建立權限對應 session (必要條件為 GIT_SSH 環境變數必須指向 putty\\plink.exe), 其中包含連線網址 (也就是 github.com), 是否使用 Proxy server 設定 (因為牽涉 IPv4 與 IPv6 網路間的資料傳送), 以及 SSH 連線協定所使用的 private key 位置等. 若 SSH 協定 session 名稱為 my_session, 則利用 SSH 取下 Github 倉儲的指令為: \n git clone --recurse-submodules  git@my_session:帳號/倉儲.git \n 此一指令代表是採用 SSH 協定, 以 git 作為帳號, 遠端登入到 github.com 伺服器後, 指定要取下 Github 系統中, 對應"帳號"下的"倉儲". 而進行此一指令之前, 必須將 my_session 對應 private key (若使用 Putty, 則格式為 .ppk) 的 public key 送到 "Github SSH and GPG keys" 設定區 (必須使用 OpenSSH 格式). \n git submodule update 指令必須在 Replit 的 Shell tool 頁面中執行. 之後再以 pip install flask flask_cors bs4 lxml markdown pelican gevent 安裝所需模組. \n 當 .replit 中設定 run = "python3 main.py" 之後, 使用者就可以點擊 Run 按鈕執行 main.py \n', 'tags': '', 'url': 'Replit.html'}, {'title': '近端可攜', 'text': '下載可攜程式套件: \n basic_portable_python.7z  (下載 15MB, 解開後 55MB, 只有 CPython 官方基本的解譯系統) \n 下載  Portable_2023_fall_1.3g_5g.7z  (維護 Github 倉儲與解譯 Python 程式用, 需要下載密碼) \n 下載  msys64_20230718_cmake.7z  (編譯 Solvespace 與 CoppeliaSim 用, 需要下載密碼) \n 也可以直接使用電腦輔助設計室中 C:\\Portable_2023_fall 目錄中的檔案 \n 近端電腦、Replit、自架 Linux 伺服器與 Github 之間的關聯: \n 近端電腦: \n 啟動可攜程式系統執行 Python 程式, 編輯取自 Github 的動態與靜態網站內容 \n 可利用 CAD 套件的 API 延伸系統, 變更零組件的參數尺寸 \n 可操控 CoppeliaSim 模擬系統中的機電系統 \n Replit: \n 可執行 Python 程式, 編輯取自 Github 的動態與靜態網站內容 \n 自架 Linux 伺服器: \n 可執行 Python 程式, 編輯取自 Github 的動態與靜態網站內容 \n Github: \n 利用倉儲建立個人網站與課程作業網站 \n 將程式碼與文字檔案儲存在個人帳號下的 Gist 區域 \n', 'tags': '', 'url': '近端可攜.html'}, {'title': 'Git', 'text': 'Git 電子書: \n https://git-scm.com/book/en/v2 \n 簡體字版的  Git 教程 \n 整理下列資料: \n Git 基礎介紹 \n Git 實用攻略 \n Git 版本控制 \n \n \n', 'tags': '', 'url': 'Git.html'}, {'title': '課程評分', 'text': '課程評分: \n 線上測驗、期中網站與簡報、期末網站與簡報. \n 線上測驗: \n 建立帳號後 ( 請將密碼寫入手機的備忘錄 ), 每週不定時進行. \n 期中網站評分與簡報: \n 期中考前兩週開始進行. \n 期末網站評分與簡報: \n 期末考前兩週開始進行. \n 期中成績計算: \n 期中考與之前各週線上測驗成績平均 \n 學期成績計算: \n (期中成績與之後各週線上測驗成績平均)*60%+(期中網站與簡報成績)*20%+(期末網站與簡報成績)*20%', 'tags': '', 'url': '課程評分.html'}, {'title': '課程主題', 'text': '\n 設計繪圖 \n 系統模擬 \n 課程總結 \n \n 設計繪圖 \n 套件選擇與轉檔 \n STL \n Part split \n SolidWorks \n Solid Edge (可攜) \n NX (可攜) \n Onshape (線上) \n Solvespace (可攜) \n 系統模擬 \n 控制系統設計與模擬 \n PID 控制 \n Coppeliasim \n Lua \n Python ZeroMQ remote API \n Webots \n VRML and X3D \n C++ \n Python \n 課程總結流程 \n mp4 簡報 \n pdf 報告 \n', 'tags': '', 'url': '課程主題.html'}, {'title': '設計繪圖', 'text': 'Loop the loop \n 循環繞圈運動系統: \n 設計一組機電模擬系統, 可以讓鋼球在以下圖示的圓盤孔洞落下後, 沿著軌道運動並回到圓盤上, 以進行重複循環繞圈運動. \n \n Ball balancing \n 鋼球平衡台模擬系統: \n 設計一組如下圖所示之機電整合模擬系統, 可以讓鋼球停在平台上使用者所指定的位置. \n \n ( above image file source ) -  download courseware.zip  (or from  @nfu onedrive ) \n Virtual pinball \n 虛實整合彈珠台機電系統: \n 設計一組如下圖所示的虛實整合彈珠台, 使用實體按鈕 (電腦鍵盤按鈕或 Arduino based 硬體) 結合網際 Coppeliasim 模擬環境建立. \n \n ( above image file source ) \n', 'tags': '', 'url': '設計繪圖.html'}, {'title': '系統模擬', 'text': 'Loop the loop \n 循環繞圈運動系統: \n 設計一組機電模擬系統, 可以讓鋼球在以下圖示的圓盤孔洞落下後, 沿著軌道運動並回到圓盤上, 以進行重複循環繞圈運動. \n \n \n ( file source ) \n References: \n https://physics.stackexchange.com/questions/708154/fake-perpetual-motion-device-using-an-electromagnet \n https://www.researchgate.net/publication/360529167_A_%27perpetual_motion_machine%27_powered_by_electromagnetism \n https://physics.stackexchange.com/questions/188208/why-doesnt-this-magnetic-perpetual-motion-machine-work \n homework and exercises - Tricky conceptual question: ball sliding and rolling down incline - Physics Stack Exchange \xa0 \n classical mechanics - Will a ball slide down a lumpy hill over the same path it rolls down the hill? - Physics Stack Exchange \n https://youtu.be/V70w3cxDJIM \n https://youtu.be/KzUVJiyzQwg \n Ball balancing \n 鋼球平衡台模擬系統: \n 設計一組如下圖所示之機電整合模擬系統, 可以讓鋼球停在平台上使用者所指定的位置. \n \n ( above image file source ) -  download courseware.zip  (or from  @nfu onedrive ) \n 後續協同應用: 虛實整合網際 Tilt Maze Game，\xa0 https://craigpickard.com/tilt-2014 ，Tilt Maze App， https://youtube.com/shorts/HiWKgF6PBco ，Reinforcement learning Tilt Maze platform system \n Virtual pinball \n 虛實整合彈珠台機電系統: \n 設計一組如下圖所示的虛實整合彈珠台, 使用實體按鈕 (電腦鍵盤按鈕或 Arduino based 硬體) 結合網際 Coppeliasim 模擬環境建立. \n \n ( above image file source ) \n', 'tags': '', 'url': '系統模擬.html'}, {'title': '課程總結', 'text': '3. 課程總結 \n 錄製簡報影片 \n mp4 \n 編寫總結報告 \n pdf \n 將課程摘要納入個人領英 \n https://www.linkedin.com/ \n', 'tags': '', 'url': '課程總結.html'}, {'title': 'QandA', 'text': '\n', 'tags': '', 'url': 'QandA.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};