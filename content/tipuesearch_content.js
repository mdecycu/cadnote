var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://mde.tw/cadnote \n 這是國立虎尾科技大學 (National Formosa University, Taiwan) 機械設計工程系大二電腦輔助設計與實習課堂筆記網站，本課程承接大一的計算機程式，並為隨後協同産品設計課程提供必要的零組件設計繪圖與 Web-based 機電系統模擬基礎。 \n 課程內容將包含機電整合範例系統中 3D 零組件的電腦輔助設計繪圖，以及實體模型製作之前所需的機電控制系統設計與模擬。 \n 電腦輔助設計繪圖將採用可在 Windows 操作系統中可㩦運作的 Siemens Solid Edge 與 Solvespace，業界普遍採用的 Dassault Solidworks 與 Siemens NX，以及能直接在 PC Web Browser 及手機或平板 App 中使用的 Onshape。 \n 控制系統設計將採用最簡單的 PID 自動控制流程，並配合將 3D 零組件模型導入 Coppeliasim，以 Python ZeroMQ Remote API 程式跨網路進行控制後，再利用 Websocket 將機電系統控制與模擬結果，呈現於 PC 、平板或手機的 Web Browser 上，以便在之後的協同産品設計課程中進行應用。', 'tags': '', 'url': 'About.html'}, {'title': '上課內容', 'text': '112 學年度第一學期 (2023 Fall) 機械設計工程系 -  電腦輔助設計與實習 課程的上課內容與進度. \n \n 首先說明 課程評分方式 \n Teaching Methods (教學方法): \n \n lectures (講課) \n instruction (導引) \n projects (專案) \n self-study (自學) \n \n 第一階段任務: \n 手機建議安裝以下 Apps: \n ChatGPT, Github mobile, Replit, Authy, Teams, Onshape \n 各 Apps 的功能與目的: \n 本課程允許學員從 ChatGPT 以 GPT-3.5 preview 對話過程取出內容, 納入個人與作業網站中. \n 手機上的 Github mobile App 可用於 Github 帳號中的 2FA 流程, 幫助 Github 阻絕不當的 robot 濫用. \n Replit App 則可讓學員利用手機 Run 倉儲網站, 並以手機或平板瀏覽器管理較少量的網站編輯. \n Authy App 允許使用者利用手機或數位手錶取得 2FA 登入流程所需的 verification code. \n Teams App 可以讓學員利用手機參與 Microsoft 線上團隊課程. \n Onshape App 則可讓使用者利用手機或平面檢視或修改協同產品設計流程中的零組件. \n \n 完成本節中的各項任務後, 表示你將可以登入: \n \n 學校 email 帳號郵箱 \n 個人Gmail 帳號郵箱 \n Replit IDE 系統 (以 個人Gmail 帳號登入) \n 個人 Github 系統 \n 以學校 email 帳號設定的 Onedrive 系統 \n \n 登入學校 Email 郵箱: \n 學校 Webmail:  https://mail.nfu.edu.tw  (帳號為: 學號@nfu.edu.tw, 用來通知  http://s1511.cycu.org \xa0 主機上的帳號密碼與學期成績) \n 申請或登入 Gmail: \n 假如尚未擁有 Gmail 帳號, 請自行 申請一個 Gmail 帳號 , 可用來 登入 Replit  線上 IDE 系統. \n 使用 Replit 免費帳號管理 Github 倉儲網站時, 必須確認 Replit 所屬伺服器是在開啟狀態, 最佳使用流程是在任一 Web-based 流程儲存網頁內容時, 先將內容複製到近端電腦 (即將欲存檔的頁面 html 暫存至電腦緩衝區), 之後再執行網際存檔, 以避免丟失資料 (Replit 免費帳號可能在使用者編輯網頁過程重新啟動伺服器). \n 申請 Github 帳號: \n 已經有 Github 帳號者, 請以既有帳號登入, 並在 Github 全面要求使用 2FA (Two Factor Authentication) 之前, 完成設定. \n 尚未擁有 Github 帳號者, 請利用"學號@nfu.edu.tw"在 Github  註冊 一個帳號, 帳號名稱可以選擇 學號 , 或者用 英文姓名的三個字母縮寫加上學號 作為 Github 帳號. 帳號建立後必須進入  https://mail.nfu.edu.tw  回覆確認信件後, 才能開始使用 Github. \n 設定 Github 帳號的 2FA 認證: \n 由於 Github 要求所有用戶在 2023 年底之前要使用 2FA 認證方式登入, 使用者可以在手機中先安裝 Github Mobile App, 假如只希望利用手機取得 2FA token (六個阿拉伯數字) 則可以在手機中安裝 Google Authenticator App, 若也希望利用 Apple Watch 取得 2FA token, 則可以在手機中安裝 Authy App. \n 將 Github 帳號登入所需的 2FA 認證設定於手機的 Google Authenticator 或 Authy 的流程為: \n 1. 登入 Github 後, 進入帳號 Settings - Password and authentication - Two-factor authentication 下, 若此時手機已經安裝 Github Mobile App, 且以 Github 帳號登入, 則 Preferred 2FA methods 選項中將會顯示 Github Mobile, 表示此時啟動 2FA 認證流程, 則使用者登入 Github 時, 除了必須輸入帳號密碼外, 還需要在手機的 Github Mobile App 中確認同意該使用者登入 Github, 系統才會允許登入. \n 2. 接下來, 在 Two-factor methods 下點選 Authenticator app 右方的 Add (若要變更手機所使用的 2FA token 產生程式, 則點選 Edit), 視窗中將會出現一組二維條碼, 使用者可以利用手機開啟 Google Authenticator 或 Authy 中的 account add 功能開啟相機拍二維條碼後, 將 Github 帳號登錄至手機認證套件中. \n 3. 一旦上述 Github 帳號在手機中的 2FA 認證設定完成, 使用者可以將前述內建為 Github Mobile 的 Preferred 2FA methods 改為 Authenticator app, 之後再登入 Github, 除了必須輸入對應的帳號密碼之外, 還需要輸入在特定時段內輸入手機或手錶中對應帳號所顯示的六個數字 (即 2FA token), 才能登入 Github. \n 4. 至於手機中的 Authenticator 也可以再利用 Pin 密碼、指紋或人臉辨識流程加入安全保護, 一旦手機或手錶毀損, 就可以藉以登入 Github 帳號修改設定. \n Github 帳號在電腦輔助設計與實習課程中的用途: \n \n 領取  Github Classroom  系統所指定的作業 \n 建立個人網站:  https://github_帳號.github.io \n 將電腦輔助設計與實習課程中所編寫的程式與相關資料存入 Github 帳號下的 Gist \n \n 在 Github 中, 若需要將所建立的倉儲以 Github Pages 功能轉為網站, 可以在建立倉儲時, 以  https://github.com/mdecycu/cmsite  作為 template, 首先學習如何利用 Replit 維護網站內容, 隨後則可利用 s1511 伺服器中的帳號進行 Github 倉儲與網站內容的維護, 最後也可以在近端可攜程式環境中維護 Github 倉儲與網站內容. \n 利用 Github 建立個人網站 (透過  Github Pages ) 有以下目標: \n \n 可在網站中自我介紹 ( https://www.betterup.com/blog/how-to-introduce-yourself ) \n 可在網站中展示並介紹自己寫過的程式 \n 可在網站中簡介自己修過的課程內容 \n 可在網站中說明自己曾經參與過的專題 \n 可在網站中介紹自己未來的生涯規劃 \n \n 申請 onedrive 帳號: \n \n 登入學校郵箱 (用來收帳號建立確認信) \n 尚未建立 @nfu 對應教育版帳號者, 請至  https://www.microsoft.com/zh-tw/education/products/office , 以 學號@nfu.edu.tw 帳號申請 OneDrive 帳號. \n \n onedrive 帳號在電腦輔助設計與實習課程中的用途: \n \n 擁有線上 5TB 的儲存空間, 可用來儲存個人所建立的流程操作 mp4 影片, 並嵌入個人網頁或作業網站中 \n 擁有線上 5TB 的儲存空間, 可用來儲存與課程相關的 教育版授權軟體  (例如:  Windows 10 64位元 22H2.4 ,  Windows 11 64位元 22H2.6 ,  windows_kms.bat ) 或可攜程式系統檔案與 電子書 \n 登入後可參與電腦輔助設計與實習課程 Teams (CAD2023 MS Teams 代碼為: fnueb56) \n 登入後可下載電腦輔助設計與實習課程網站中的相關檔案 (下載連結將公布在 Teams) \n \n 可攜程式環境: \n basic_portable_python.7z  (下載 15MB, 解開後 55MB) \n 下載  Portable_2023_fall_1.3g_5g.7z  (需要下載密碼) \n 也可以直接使用電腦輔助設計室中 C:\\Portable_2023_fall 目錄中的檔案 \n 下載  se_portable_X_for_cad2023.7z  (需要下載密碼) \n 電腦輔助設計套件: \n 全雲端:  https://www.onshape.com/en/  (課程協同帳號: course At mde dot tw) \n AutoDesk (USA): Inventor and Fusion 360 \n Dassault Systems (France): SolidWorks and CATIA \n Siemens (Germany): Solid Edge and NX \n PTC (USA): Creo and Onshape \n Solvespace:  https://github.com/solvespace/solvespace ,  Forum \n 機電資模擬套件: \n CoppeliaSim:  https://www.coppeliarobotics.com/ ,  https://github.com/CoppeliaRobotics \n 下載  CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z  (需要下載密碼) \n CoppeliaSim 使用者手冊 ,  CoppeliaSim 4.3.0 使用手冊網站 \n Webots:  https://cyberbotics.com/ ,  https://webots.cloud/ \n Robotics: \n RoboDK:  https://robodk.com/ ,  robodk  and  robolink  (integrated into robodk),  https://www.parallemic.org/RoKiSim.html \xa0 \n References: \n http://wcm.cycu.org:88/github/  (只能在機械設計系 IPv6 網段連結)', 'tags': '', 'url': '上課內容.html'}, {'title': 'w4', 'text': '第四週任務: \n 建立線上考試帳號 \n 自行建立 Github 帳號下的 cad2023 倉儲, 並設定 Github Pages \n 利用 Replit 啟動 Github 帳號下的 cad2023 內容編輯網站, 並設法將改版內容推向 Github \n 利用自選 CAD 套件完成任務一的零組件設計繪圖 \n 參考  pjcopsim  與  resources , 將任務一所完成的零組件轉入 CoppeliaSim, 並進行系統模擬設計', 'tags': '', 'url': 'w4.html'}, {'title': '網路設定', 'text': '由於電腦輔助設計室某部分套件, 在 IPv4 網路環境下會被防毒軟體偵測到封包異常而封閉網路, 因此以下將 IPv4 網路關閉, 僅使用 IPv6, 並透過雙網路協定支援的代理主機設定, 以便與僅支援 IPv4 的網路主機連線. \n 利用隨身碟上的批次檔案進行電腦輔助設計室網路環境設定 ( 設定影片 ): \n 1_cadlab_network_setup.bat \n echo "disable ipv4 and setup proxy for ipv6"\nSET CurrentDir=%~dp0\n%windir%\\system32\\reg.exe import %CurrentDir%1_2023_cadlab_network_setup.reg\npowershell -executionpolicy bypass -File %CurrentDir%1_disable_ipv4.ps1\nexit \n 1_2023_cadlab_network_setup.reg \n 關閉自動搜尋代理主機, 自行設定代理主機外, 對近端與 NAT 內部 IPv4 網址不使用 proxy server, 若 proxy server 採 domain name 設定則當 IPv4 網路協定啟動時, 亦可透過代理主機連線. \n Windows Registry Editor Version 5.00\n\n [HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings]\n ; disable AutoDetect\n"AutoDetect"=dword:00000000\n"MigrateProxy"=dword:00000001\n; enable Proxy\n"ProxyEnable"=dword:00000001 \n"ProxyHttp1.1"=dword:00000000 \n"ProxyServer"="http://p4.cycu.org:3128"\n"ProxyOverride"="localhost;192.168.1.0/24;<local>" \n 1_disable_ipv4.ps1 \n 僅啟動 IPv6 網路協定, 且將 dns server 指向 hinet. \n Disable-NetAdapterBinding -Name "*" -ComponentID ms_tcpip\nEnable-NetAdapterBinding -Name "*" -ComponentID ms_tcpip6\nSet-DnsClientServerAddress -InterfaceAlias "*" -ServerAddresses "2001:b000:168::1,2001:b000:168::2"\n \n 下載  cad2023_network_setup.7z  (需要下載密碼), 必須以管理者身分執行批次檔案, 因為要藉此身分關閉 IPv4 網路協定.', 'tags': '', 'url': '網路設定.html'}, {'title': 'exam', 'text': '在系上 IPv6 網段時, 可以在線上考試主機  https://exam.cycu.org  帳號註冊時段 進行註冊 : \n \n 其中: \n username 請填入學號 \n email 請使用學號@nfu.edu.tw \n 選定密碼之前, 請將密碼存入個人手機的備忘錄 \n password 輸入兩次, 至少包含八個數字與英文字母的組合字串 \n name 請輸入中文姓名的名字 \n surname 請輸入中文姓名的姓 \n groups: \n 二甲: cad2023a \n 二乙: cad2023b \n 一甲: cp 2023a \n 一乙: cp2023b \n', 'tags': '', 'url': 'exam.html'}, {'title': '任務一', 'text': '\n 2023.09.14 上午 2b 上課時段, 之所以沒有 IPv6 網路連線的原因是:  BGA-0810-S 網管集線器的 port 24 硬體故障 , 無法從工作站室取得機械設計系網路主幹訊號. \n 在 Replit Python 環境中就是內建 Python3, 因此安裝模組必須使用 pip 而非一般 Linux 環境中使用的 pip3: \n 以 import 將倉儲從 github 導入後, 必須使用 git submodule update --init 取下 cmsimde 子模組內容 (因為 Replit import 不會自動取下倉儲對應的子模組). \n 取下子模組之後, 以 Run 嘗試以 Python3 執行 main.py, 讓 Replit 自行調適所需的 Python3 環境, 結果會顯示缺少啟動 cmsimde 網站的模組, 再以下列指令在 Shell 頁面安裝所需模組: \n pip install flask flask_cors bs4 lxml markdown pelican gevent \n 其中 flask 為 Python 網際框架, flask_cors 則允許跨網域擷取資料的 flask 延伸模組, bs4 與 lxml 用於超文件分頁, markdown 與 pelican 則允許使用者採 Markdown 格式編寫網誌內容, 並且利用 Pelican 套件轉為 html 格式的網誌文章. 至於 gevent 則是 Replit 內建使用的同步網路程式庫. \n 手動載下倉儲子模組, 試以 Run 執行之後再安裝 cmsimde 編輯網站所需模組, 應該就可以利用 Run 啟動倉儲對應的動態網站. \n 最後, 為了保全網站登入的管理者密碼編碼, 還需要在 Secrets 頁面中建立 config 變數, 並將近端 config/config 所修改的管理者密碼編碼登錄至 config 變數. \n \n 請自選 CAD 套件, 依照下列圖示, 以能將此系統放在電腦桌上作為參考尺寸, 繪製所需的零組件, 並將各零組件檔案與畫面上傳至個人的 Onedrive, 或以 Onshape 上的公開連結展示所完成的資料. \n 最後在個人的 帳號.github.io 網站上呈現任務一所完成的結果 (請以 H1 且標題為任務一建立網頁). \n 有關電腦輔助設計繪圖套件: \n 機械設計工程系所提供的 SolidWorks 與 NX 都必須在啟動時, 透過網路至分別位於校本部與系上的認證主機進行登錄, 才能開啟. 其中 Siemens  NX2027.3401_lite_cad2022.7z  (需要下載密碼) 可以放入隨身碟, 在任一台 Windows 64 位元的電腦上, 連接網路取得認證後開啟. \n Siemens Solid Edge 則提供  Community 版本 , 安裝後無需上網即可使用, 在電腦輔助設計室則可以下載  se_portable_X_for_cad2023.7z  (需要下載密碼), 放入隨身碟後, 先執行所附的系統組態批次檔後, 直接以批次檔案開啟. \n Solvespace  則適合在初步設計階段, 提供尺寸規劃或外型較為簡單的零組件繪製. \n \n 零組件繪圖完成後, 請轉為 STL 格式轉入 CoppeliaSim 進行機電系統模擬. \n 下載  CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z  (需要下載密碼) \n CoppeliaSim 使用者手冊 ,  CoppeliaSim 4.3.0 使用手冊網站', 'tags': '', 'url': '任務一.html'}, {'title': '磁力吸引', 'text': '有關磁力吸引的鋼球循環運動系統, 請參考 這個影片 .  或者透過課程檔案下載密碼觀看 這個影片 . \n 根據 這個網站 宣稱是此一 Perpetual Motion Simulator 的原始創作者. \n 同時參考\xa0 A perpetual motion machine powered by electromagnetism.pdf  (需要下載密碼) \n 電腦輔助設計與實習課程的任務一即可根據此一裝置的設計, 先採用電腦輔助設計軟體, 繪製系統所需的 3D 零組件, 然後轉為 STL 格式, import 進入 CoppeliaSim, 接著根據影片說明, 利用近接感測器(例如:  電感式近接開關 ,  Inductive proximity sensor ) 控制電磁鐵開關, 設法透過磁力吸引讓鋼球具有足夠動能返回圓形平台. \n 有關利用 Arduino 控制卡與相關電路設計產生電磁力控制的模擬, 請參考  PICSimLab  頁面中的說明. \n 一旦完成 CoppeliaSim 與 Arduino 電路設計等機電資系統整合模擬, 就可以進一步利用 3D printer 列印出所需零組件, 結合實體電路設計完成此一系統的虛實整合. \n 機電模擬系統: \n 下載支援 IPv6 網路協定版本  CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z  (需要下載密碼) \n CoppeliaSim 使用者手冊 ,  CoppeliaSim 4.3.0 使用手冊網站 \n 模擬磁力的 討論 ,  1 ,  2 \n Force Control Modeling \n simpleMagnetDemo.ttt \n 模擬原理: \n Perpetual Motion Simulator 主要的電路設計包含右側軌道下方的電磁鐵, 通電後可產生一定大小的磁吸力, 當圓形鐵球循著軌道由平台孔洞往下滾動, 經過軌道下方近接感測器 (Proximity sensor) 時 (距離 3mm-5mm), 透過感應, 控制電路將會短暫啟動電磁鐵 (10 miliseconds), 促使圓形鐵球加速滾動, 其磁力大小約略與圓形鐵球距離的平方成反比 ( Computational Electromagnetics ,  磁場模擬 ). \n 因此圓形鐵球除了從平台高度落下時, 將位能轉換為動能外, 與軌道滾動磨擦以及空氣阻力所損耗的運動能, 將額外由電磁鐵開關間所得到的磁力吸引能量進行加速, 以便取得足夠的動能在脫離軌道末端後, 重新回到圓形平台. \n \n (image from  here ) \n 電磁力未啟動下的 perpetual motion simulator CoppeliaSim 場景模擬: \n \n Images and part files in Onshape  (STL file import into CoppeliaSim 尺寸由 mm 放大10 倍至 cm, 且 z 軸向上, 場景中圓球直徑為 12.825 cm, 平台圓孔直徑為 20 cm) \n \n Perpetual Motion Simulator in Onshape , 轉入 CoppeliaSim 後放大 10 倍, 且 z 軸向上之模擬場景, 下載 perpetual motion simulator stage2.7z  (需要下載密碼) \n 有關如何在 Onshape 繪製零組件, 轉出 STL 檔案, 轉入 CoppeliaSim 並進行組件 divide and group, 請參考這個 教學影片 . \n 以下 Python 程式可在 CoppeliaSim 場景檔案中建立所需的模擬組件: \n 啟動  CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z  (支援 IPv6 網路協定版本, 需要下載密碼), 然後在  Portable_2023_fall_1.3g_5g.7z  (需要下載密碼) 可攜環境啟動後, 以 pip install pyzmq cbor keyboard 安裝所需模組, 然後執行下列 zmqRemoteAPI IPv6 程式, 將滑鼠在場景中點擊後, 按下 q 鍵即可終止場景模擬: \n # zmqRemoteApi_IPv6 為將 zmq 通訊協定修改為 IPv4 與 IPv6 相容\n# pip install pyzmq cbor keyboard\nfrom zmqRemoteApi_IPv6 import RemoteAPIClient\nimport time\nimport math\nimport keyboard\n\n# 利用 zmqRemoteAPI 以 23000 對場景伺服器進行連線\nclient = RemoteAPIClient(\'localhost\', 23000)\n# 以 getObject 方法取得場景物件\nsim = client.getObject(\'sim\')\nbox = sim.getObject(\'/box\')\n\n# 啟動模擬\nsim.startSimulation()\n# 建立尺寸數列, 分別定義 x, y, z 方向尺寸\nx = 0.2\ny = 0.2\nz = 0.1\nsize = [x, y, z]\n\n# 利用 size 數列, 建立圓柱物件, 2 代表 cylinder\n# 8 表示 respondable, 1 為 質量\ndigit1_handle = sim.createPureShape(2, 8, size, 1, None)\n# 將圓柱物件命名為 digit1, 若用於機械計分可做為個位數轉盤\n# 之後可再導入帶有數字組立的外型零件\nsim.setObjectAlias(digit1_handle, \'digit1\')\n# 轉角單位為徑度\nsim.setObjectOrientation(digit1_handle, -1, [0, math.pi/2, 0])\n# 起始物件中心位於 [0, 0, 0], 為了位於地板, 往 z 提升一個半徑高度\nsim.setObjectPosition(digit1_handle, -1, [0, 0, x/2])\n\n# 建立 revolute joint 命名為 joint, 且將 joint mode 設為 dynamic, control mode 設為 velocity\njoint1_handle = sim.createJoint(sim.joint_revolute_subtype, sim.jointmode_dynamic, 0, None)\nsim.setObjectInt32Param(joint1_handle, sim.jointintparam_dynctrlmode, sim.jointdynctrl_velocity)\nsim.setObjectAlias(joint1_handle, \'joint1\')\n\n# 取得 cylinder 的位置座標\ndigit1_pos = sim.getObjectPosition(digit1_handle, -1)\njoint1_pos = [digit1_pos[0], digit1_pos[1], digit1_pos[2]]\n\n# 將 joint1 至於 cylinder 中心\nsim.setObjectPosition(joint1_handle, -1, joint1_pos)\n# 取得 digit1_handle 的方位\ndigit1_ori = sim.getObjectOrientation(digit1_handle, -1)\n# 將 joint1_handle 方位與 digit1 對齊\nsim.setObjectOrientation(joint1_handle, -1, digit1_ori)\n\n# 將 joint1 置於 box 上\nsim.setObjectParent(joint1_handle, box, True)\n# 將 cylinder 置於 joint1 上\nsim.setObjectParent(digit1_handle, joint1_handle, True)\n\n# 鎖定 joint1\nsim.setJointForce(joint1_handle, float(\'inf\'))\n\nprint("基本場景建立完成!")\n\n# 設定主迴圈\nwhile True:\n    # 設定 joint1 目標速度\n    sim.setJointTargetVelocity(joint1_handle, 10)\n    # 讓 coppeliasim 有時間按照設定讓 joint1 旋轉\n    time.sleep(0.01) \n\n    if keyboard.is_pressed(\'q\'):\n        # 可以按下 q 鍵跳出重複執行迴圈\n        break\n\n# 終止模擬\nsim.stopSimulation() \n 下載  zmqRemoteAPI Python for cad2023.7z  (需要下載密碼) \n 在  simpleMagnetDemo.ttt  中利用 Lua 以 proximity sensor 感測與物體的距離後, 產生電磁吸引力的範例程式: \n function sysCall_init()\n     -- 初始化 callback 函數，在模擬開始時執行\n     sensor = sim.getObject(\'./sensor\')\n     -- 取得命名為 \'sensor\' 的物件 handle。 此處使用 proximity 感測器，用於檢測物體之間的距離\n     shape = sim.getObject(\'.\')\n     -- 取得目前 script 所依附的物件 handle，即包含此 script 的物件 handle\n     sim.setObjectInt32Param(shape, sim.shapeintparam_static, 0)\n     -- 將物體設定為非靜態，讓其在模擬中發生動態運動\n     nominalForce = 0.001\n     -- 設定電磁吸引力的標準值\n     enabled = true\n     -- 啟用電磁吸引力\n     previousPos = sim.getObjectPosition(shape, sim.handle_world)\n     -- 取得物體的初始位置並儲存在 previousPos 變數中，用於偵測物體是否移動\nend\n\nfunction sysCall_actuation()\n     -- 驅動 callback 函數，在每個模擬步驟中執行\n     if enabled then\n         -- 如果啟用電磁吸引力，執行下列程式碼\n         local r, dist, pt, obj = sim.handleProximitySensor(sensor)\n         -- 使用 proximity 感測器偵測物體是否接近\n         if r > 0 then\n             -- 如果偵測到物體\n             dist = dist + 0.02\n             -- 增加一個 offset，以避免物體接觸時產生無限大的吸引力\n             local force = nominalForce / (dist * dist)\n             -- 計算吸引力的大小，與距離的平方成反比\n             local m = sim.getObjectMatrix(shape, sim.handle_world)\n             m[4] = 0\n             m[8] = 0\n             m[12] = 0\n             -- 取得物體的轉換矩陣，不考慮平移部分\n             local forceVector = sim.multiplyVector(m, {0, 0, force})\n             -- 將力向量從局部座標系轉換為絕對座標系\n             sim.addForceAndTorque(shape, forceVector, {0, 0, 0})\n             -- 將計算得到的力應用於物體的質心，持續一個 time step\n             if notFirstPass then\n                 local p = sim.getObjectPosition(shape, sim.handle_world)\n                 local dx = {p[1] - previousPos[1], p[2] - previousPos[2], p[3] - previousPos[3]}\n                 local d = math.sqrt(dx[1] * dx[1] + dx[2] * dx[2] + dx[3] * dx[3])\n                 -- 計算物體是否移動\n                 if d < 0.0001 then\n                     sim.setObjectInt32Param(shape, sim.shapeintparam_static, 1)\n                     sim.resetDynamicObject(shape)\n                     enabled = false\n                     -- 如果物體沒有移動，將其設為靜態\n                 end\n                 previousPos = p\n             end\n         end\n     end\n     notFirstPass = true\nend \n', 'tags': '', 'url': '磁力吸引.html'}, {'title': 'magnet', 'text': '利用 Lua 模擬磁力的程式碼: \n function sysCall_init()\n\n-- This line defines the beginning of a function called sysCall_init(). This function is a special callback function in CoppeliaSim that gets called once when the simulation starts.\n\n    sensor = sim.getObject(\'./sensor\')\n\n-- In this line, the script is getting a reference to an object named "sensor" in the simulation scene. This object is expected to exist within the same hierarchy as the script.\n\n    shape = sim.getObject(\'.\')\n\n-- Here, the script is getting a reference to the object where the script is attached. The dot . represents the current object.\n\n    sim.setObjectInt32Param(shape, sim.shapeintparam_static, 0)\n\n-- This line is setting an integer parameter for the "shape" object. Specifically, it\'s setting the sim.shapeintparam_static parameter to 0. This means that the "shape" object is initially not considered as a static object.\n\n    nominalForce = 0.001\n\n-- This line sets a variable nominalForce to a value of 0.001. It appears to represent a constant force value used in the script.\n\n    enabled = true\n\n-- This line initializes a boolean variable enabled to true. This variable seems to control whether the script should apply forces or not.\n\n    previousPos = sim.getObjectPosition(shape, sim.handle_world)\n\n-- Here, the script is getting the initial position of the "shape" object in the world coordinate system and storing it in the previousPos variable. This will be used later for checking if the object has moved.\n\n-- The sysCall_init function sets up initial parameters and conditions for the script. It\'s executed once at the beginning of the simulation.\n\n-- Now, let\'s move on to the sysCall_actuation function:\n\nfunction sysCall_actuation()\n\n-- This line defines the beginning of another special callback function in CoppeliaSim called sysCall_actuation(). This function gets called repeatedly during the simulation to perform actions in each time step.\n\n    if enabled then\n\n-- This line checks if the enabled variable is true. If it\'s true, it means the script should apply forces. If it\'s false, the script won\'t apply any forces.\n\n        local r, dist, pt, obj = sim.handleProximitySensor(sensor)\n\n-- Here, the script is using the sim.handleProximitySensor function to check if the proximity sensor (defined earlier as "sensor") is detecting any objects nearby. It returns information about the detected object.\n\n        if r > 0 then\n\n-- This line checks if r (the return value of the proximity sensor function) is greater than 0. If it is, it means the sensor has detected an object nearby.\n\n            dist = dist + 0.02\n\n-- This line adds an offset of 0.02 to the dist variable. This offset is added to prevent an infinite force when objects are in direct contact. It\'s a safety measure.\n\n            local force = nominalForce / (dist * dist)\n\n-- Here, the script calculates the force to be applied based on the nominalForce and the squared distance (dist) between the object and the detected object. This seems to be a simple inverse square law force calculation.\n\n            local m = sim.getObjectMatrix(shape, sim.handle_world)\n            m[4] = 0\n            m[8] = 0\n            m[12] = 0\n\n-- These lines retrieve the transformation matrix (m) of the "shape" object with respect to the world coordinate system and set its translational components to 0. This effectively extracts the rotational part of the transformation matrix.\n\n            local forceVector = sim.multiplyVector(m, {0, 0, force})\n\n-- This line multiplies the modified transformation matrix m by a force vector {0, 0, force} to obtain a force vector in absolute world coordinates.\n\n            sim.addForceAndTorque(shape, forceVector, {0, 0, 0})\n\n-- Here, the script applies the computed forceVector to the "shape" object using sim.addForceAndTorque. This function applies the force to the center of mass of the object for one simulation time step.\n\n            if notFirstPass then\n\n-- This line checks if the notFirstPass variable is true. It\'s used to ensure that this part of the script is executed after the first simulation step.\n\n                local p = sim.getObjectPosition(shape, sim.handle_world)\n\n-- Here, the script is getting the current position of the "shape" object in the world coordinate system.\n\n                local dx = {p[1] - previousPos[1], p[2] - previousPos[2], p[3] - previousPos[3]}\n\n-- This line calculates the difference in position (dx) between the current position (p) and the previous position (previousPos) of the object in world coordinates.\n\n                local d = math.sqrt(dx[1] * dx[1] + dx[2] * dx[2] + dx[3] * dx[3])\n\n-- The script calculates the Euclidean distance d based on the differences in position components dx. This distance is used to check if the object has moved significantly.\n\n                if d < 0.0001 then\n\n-- This line checks if the object has moved by comparing d to a small threshold value (0.0001). If d is less than the threshold, it means the object hasn\'t moved significantly.\n\n                    sim.setObjectInt32Param(shape, sim.shapeintparam_static, 1)\n\n-- If the object hasn\'t moved significantly, this line sets the sim.shapeintparam_static parameter to 1, making the object static in the simulation.\n\n                    sim.resetDynamicObject(shape)\n\n-- This line resets the dynamics of the object. It might be necessary to reset the object\'s dynamics after making it static to avoid any issues.\n\n                    enabled = false\n\n-- Finally, this line sets the enabled variable to false, which will prevent the script from applying further forces since the object is now considered static and not moving.\n\n                end\n\n-- The if block is closed.\n\n                previousPos = p\n\n-- Regardless of whether the object has become static or not, the previousPos variable is updated with the current position for use in the next iteration of the sysCall_actuation function.\n\n            end\n\n-- The if notFirstPass block is closed.\n\n        end\n\n-- The if r > 0 block is closed.\n\n    end\n\n-- The if enabled block is closed.\n\n    notFirstPass = true\n\n-- This line sets the notFirstPass variable to `true \n', 'tags': '', 'url': 'magnet.html'}, {'title': '馬達推動', 'text': '除了利用磁力吸引, 讓鋼球在軌道運動時能具備足夠動能返回圓形平台外, 另外一種設計是在鋼球 (或其他非鐵材質的圓球) 離開圓形平台孔洞之後, 設法利用隱藏式的馬達帶動機構, 以滾動方式加速圓球, 以便讓圓球返回平台. \n 有關馬達推動設計, 請參考:  https://www.instructables.com/Marblevator-Perpetual/  或 這個影片 . \n 機電模擬系統: \n 下載  CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z  (需要下載密碼) \n CoppeliaSim 使用者手冊 ,  CoppeliaSim 4.3.0 使用手冊網站', 'tags': '', 'url': '馬達推動.html'}, {'title': 'Replit', 'text': '使用 Replit 維護 cmsimde 網站內容時, 可以利用  secrets 環境變數  Tool 保全免費 Replit 帳號 (只能建立完全公開的 Repls) 下的管理者密碼編碼字串. \n \n Replit Documentation:\xa0 https://docs.replit.com/ \xa0 \n Intro to Replit \n 從 Github 將倉儲導入 Replit 的手冊:\xa0 https://docs.replit.com/category/using-git-on-replit \xa0 \n \n 利用 Replit 維護 Github 倉儲網站的步驟 ( 操作說明 ): \n \n Connect Github to Replit  (目的在讓導入 Replit 的倉儲具有推回 (git push) Github 對應帳號的權限) \n Import repository to Replit  (選擇倉儲所使用的程式 Python 語言, 可以直接在 Replit 執行網頁編輯程式) \n 手動取下與倉儲對應的子模組: git submodule update --init --recursive (假如連主倉儲內容與子模組全部手動取下資料, 則可使用 git clone --recurse-submodules 然後接 https 或 SSH 倉儲網址) \n Run Github repository on Replit  (由於從 Github 導入 Replit, 並沒有倉儲子模組的內容必須手動導入, 且以 pip 安裝執行 cmsimde 網頁編輯程式所需的模組, 其中包括 flask flask_cors bs4 lxml markdown pelican gevent 等) \n 以 Run 執行動態網站, 以編輯表單中的 config 設定管理者密碼後, 將 config/config 編碼字串移至 secrets 工具中的 config 變數, 然後刪除倉儲中的 config/config 檔案, 以 Stop 關閉動態網站後, 重新以 Run 執行動態網站, 測試是否可以採新修改的管理者密碼登入動態網站. \n 利用 cmsimde 動態網站功能修改內容後, 以 Convert 將資料轉為靜態網頁後, 回到 Replit 以 Git 工具進行內容的新增、提交與推送至對應的 Github 倉儲. \n \n \n 2023.09.15 下午 2a 上課時所使用的  cmsite 版本 , 其中的 .replit 與 Replit.nix 必須移除才能使用最新版本的 Python, 因此若當時已經採用作為 Template 的倉儲必須進行修改或重新建立. \n 另外, 一個 Replit 免費帳號只能與一個 Github 帳號綁定. 以下說明將利用 scrum2 At mde dot tw 對應的 Gmail 登入 Replit 後, 其帳號設定為 scrum2, 並與 Github 帳號 scrum-2 進行綁定. \n \n Repl 為 Replit 網際服務系統中的專案, 一旦選定對應 Language, 當專案以 Run 執行時, 系統將會試著安裝所需模組, 只是 Replit import from Github 並不會取下子模組, 使用者必須自行以 git 指令取得子模組內容. \n Replit 專案的設定檔案位於 .replit 與 Replit.nix 等兩個檔案. \n 希望利用 Replit (Web-based IDE, Integrated Development Environment) 來維護個人網站. \n 將倉儲 Import 至 Replit, 在 Replit 啟動 cmsimde 網站進行內容編輯之後, 轉為靜態, git commit and git push. \n 導入畫面中選擇以 Python 作為專案程式語言, 如下圖所示, 導入 scrum-2/scrum-2.github.io 倉儲. \n \n 將 scrum-2.github.io 倉儲導入 Replit 之後, 必須手動取下倉儲對應的子模組 (因為 Replit 的 import 功能並不會自動將倉儲所屬的子模組導入). \n 在既有倉儲所處的電腦中導入子模組的指令為: \n git submodule update --init \n 假如所要取下的倉儲子模組其下還有子模組, 則使用: \n git submodule update --init --recursive \n 假如在 Windows 命令列或 Linux Shell 中直接利用 git clone 取下主倉儲與子模組資料, 則使用: \n git clone --recurse-submodules 然後接倉儲的 https 或 SSH 網址 (Github 已經從網站拿掉 SSH 協定語法). SSH 為 Secure SHell 的簡寫, 可在不安全的網路中為網路服務提供安全的傳輸環境. \n 使用倉儲的 https 網址進行 git clone, 隨後若要改版後 git push, 則需在 .git/config 中納入權限 token. 若使用倉儲的 SSH 網址進行 git clone, 在 Windows 可以利用 Putty 建立權限對應 session (必要條件為 GIT_SSH 環境變數必須指向 putty\\plink.exe), 其中包含連線網址 (也就是 github.com), 是否使用 Proxy server 設定 (因為牽涉 IPv4 與 IPv6 網路間的資料傳送), 以及 SSH 連線協定所使用的 private key 位置等. 若 SSH 協定 session 名稱為 my_session, 則利用 SSH 取下 Github 倉儲的指令為: \n git clone --recurse-submodules  git@my_session:帳號/倉儲.git \n 此一指令代表是採用 SSH 協定, 以 git 作為帳號, 遠端登入到 github.com 伺服器後, 指定要取下 Github 系統中, 對應"帳號"下的"倉儲". 而進行此一指令之前, 必須將 my_session 對應 private key (若使用 Putty, 則格式為 .ppk) 的 public key 送到 "Github SSH and GPG keys" 設定區 (必須使用 OpenSSH 格式). \n git submodule update 指令必須在 Replit 的 Shell tool 頁面中執行. 之後再以 pip install flask flask_cors bs4 lxml markdown pelican gevent 安裝所需模組. \n 當 .replit 中設定 run = "python3 main.py" 之後, 使用者就可以點擊 Run 按鈕執行 main.py \n', 'tags': '', 'url': 'Replit.html'}, {'title': '近端可攜', 'text': '下載可攜程式套件: \n basic_portable_python.7z  (下載 15MB, 解開後 55MB, 只有 CPython 官方基本的解譯系統) \n 下載  Portable_2023_fall_1.3g_5g.7z  (維護 Github 倉儲與解譯 Python 程式用, 需要下載密碼) \n 下載  msys64_20230718_cmake.7z  (編譯 Solvespace 與 CoppeliaSim 用, 需要下載密碼) \n 也可以直接使用電腦輔助設計室中 C:\\Portable_2023_fall 目錄中的檔案 \n 近端電腦、Replit、自架 Linux 伺服器與 Github 之間的關聯: \n 近端電腦: \n 啟動可攜程式系統執行 Python 程式, 編輯取自 Github 的動態與靜態網站內容 \n 可利用 CAD 套件的 API 延伸系統, 變更零組件的參數尺寸 \n 可操控 CoppeliaSim 模擬系統中的機電系統 \n Replit: \n 可執行 Python 程式, 編輯取自 Github 的動態與靜態網站內容 \n 自架 Linux 伺服器: \n 可執行 Python 程式, 編輯取自 Github 的動態與靜態網站內容 \n Github: \n 利用倉儲建立個人網站與課程作業網站 \n 將程式碼與文字檔案儲存在個人帳號下的 Gist 區域 \n', 'tags': '', 'url': '近端可攜.html'}, {'title': 'Git', 'text': 'Git 電子書: \n https://git-scm.com/book/en/v2 \n 簡體字版的  Git 教程 \n 整理下列資料: \n Git 基礎介紹 \n Git 實用攻略 \n Git 版本控制 \n \n \n', 'tags': '', 'url': 'Git.html'}, {'title': 'Copsim', 'text': "CoppeliaSim 4.5.1 for IPv6: \n 下載  CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z  (需要下載密碼) \n 下載  zmqRemoteAPI Python for cad2023.7z  (需要下載密碼) \n addOns\\simAddOnZMQ remote API server.lua 對原版的修改: \n 讓 zmqRemoteApi server 開啟 CoppeliaSim 時即啟動. \n function zmqRemoteApi.verbose()\n    -- return sim.getNamedInt32Param('zmqRemoteApi.verbose') or 0\n\t-- autoStart\n\treturn sim.getNamedInt32Param('zmqRemoteApi.verbose') or 1\nend \n 讓 zmqRemoteApi server 支援 IPv6. \n function sysCall_init()\n    if not simZMQ then\n        sim.addLog(sim.verbosity_errors,'zmqRemoteApi: the ZMQ plugin is not available')\n        return {cmd='cleanup'}\n    end\n    simZMQ.__raiseErrors(true) -- so we don't need to check retval with every call\n    rpcPort=sim.getNamedInt32Param('zmqRemoteApi.rpcPort') or 23000\n    cntPort=sim.getNamedInt32Param('zmqRemoteApi.cntPort') or (rpcPort+1)\n    maxTimeSlot=sim.getNamedFloatParam('zmqRemoteApi.maxTimeSlot') or 0.005\n    if zmqRemoteApi.verbose()>0 then\n        sim.addLog(sim.verbosity_scriptinfos,string.format('ZeroMQ Remote API server starting (rpcPort=%d, cntPort=%d)...',rpcPort,cntPort))\n    end\n    -- cbor=require 'cbor' -- encodes strings as buffers, always. DO NOT USE!!\n    cbor=require'org.conman.cbor'\n    context=simZMQ.ctx_new()\n    rpcSocket=simZMQ.socket(context,simZMQ.REP)\n\t-- enable IPv6 for ZMQ, default is false to IPv6\n\tsimZMQ.setsockopt(rpcSocket,simZMQ.IPV6,sim.packUInt32Table{1})\n\t-- ZMQ IPv4ONLY default is true: http://api.zeromq.org/4-2:zmq-setsockopt\n\tsimZMQ.setsockopt(rpcSocket,simZMQ.IPV4ONLY,sim.packUInt32Table{0})\n\t--simZMQ.bind(rpcSocket,string.format('tcp://[%s]:%d', '*', rpcPort))\n\t-- original IPv4 setup\n    simZMQ.bind(rpcSocket,string.format('tcp://*:%d',rpcPort))\n    cntSocket=simZMQ.socket(context,simZMQ.PUB)\n    simZMQ.setsockopt(cntSocket,simZMQ.CONFLATE,sim.packUInt32Table{1})\n    simZMQ.bind(cntSocket,string.format('tcp://*:%d',cntPort))\n    if zmqRemoteApi.verbose()>0 then\n        sim.addLog(sim.verbosity_scriptinfos,'ZeroMQ Remote API server started')\n    end\n    simulationTimeStepCount=0\n    steppingClients={}\n    steppedClients={}\nend \n addOns\\simAddOnWS remote API server.lua 檔案的修改: \n 讓 WebSocket server 在 CoppeliaSim 開啟時即啟動. \n function wsRemoteApi.verbose()\n    -- return sim.getNamedInt32Param('wsRemoteApi.verbose') or 0\n\t-- autoStart\n\treturn sim.getNamedInt32Param('wsRemoteApi.verbose') or 1\nend \n addOns\\simAddOnVisualization stream.lua 檔案的修改: \n 讓 Virtualization Stream server 在 CoppeliaSim 開啟時即啟動: \n function sysCall_info()\n    autoStart=sim.getNamedBoolParam('visualizationStream.autoStart')\n    if autoStart==nil then autoStart=true end\n    return {autoStart=autoStart,menu='Connectivity\\nVisualization stream'}\nend \n", 'tags': '', 'url': 'Copsim.html'}, {'title': '課程評分', 'text': '課程評分: \n 線上測驗、期中網站與簡報、期末網站與簡報. \n 線上測驗: \n 建立帳號後 ( 請將密碼寫入手機的備忘錄 ), 每週不定時進行. \n 期中網站評分與簡報: \n 期中考前兩週開始進行. \n 期末網站評分與簡報: \n 期末考前兩週開始進行. \n 期中成績計算: \n 期中考與之前各週線上測驗成績平均 \n 學期成績計算: \n (期中成績與之後各週線上測驗成績平均)*60%+(期中網站與簡報成績)*20%+(期末網站與簡報成績)*20%', 'tags': '', 'url': '課程評分.html'}, {'title': '課程主題', 'text': '\n 設計繪圖 \n 系統模擬 \n 課程總結 \n \n 設計繪圖 \n 套件選擇與轉檔 \n STL \n Part split \n SolidWorks \n Solid Edge (可攜) \n NX (可攜) \n Onshape (線上) \n Solvespace (可攜) \n 系統模擬 \n 控制系統設計與模擬 \n PID 控制 \n Coppeliasim \n Lua \n Python ZeroMQ remote API \n Webots \n VRML and X3D \n C++ \n Python \n 課程總結流程 \n mp4 簡報 \n pdf 報告 \n', 'tags': '', 'url': '課程主題.html'}, {'title': '設計繪圖', 'text': 'Loop the loop \n 循環繞圈運動系統: \n 設計一組機電模擬系統, 可以讓鋼球在以下圖示的圓盤孔洞落下後, 沿著軌道運動並回到圓盤上, 以進行重複循環繞圈運動. \n \n Ball balancing \n 鋼球平衡台模擬系統: \n 設計一組如下圖所示之機電整合模擬系統, 可以讓鋼球停在平台上使用者所指定的位置. \n \n ( above image file source ) -  download courseware.zip  (or from  @nfu onedrive ) \n Virtual pinball \n 虛實整合彈珠台機電系統: \n 設計一組如下圖所示的虛實整合彈珠台, 使用實體按鈕 (電腦鍵盤按鈕或 Arduino based 硬體) 結合網際 Coppeliasim 模擬環境建立. \n \n ( above image file source ) \n', 'tags': '', 'url': '設計繪圖.html'}, {'title': '系統模擬', 'text': 'Loop the loop \n 循環繞圈運動系統: \n 設計一組機電模擬系統, 可以讓鋼球在以下圖示的圓盤孔洞落下後, 沿著軌道運動並回到圓盤上, 以進行重複循環繞圈運動. \n \n \n ( file source ) \n References: \n https://physics.stackexchange.com/questions/708154/fake-perpetual-motion-device-using-an-electromagnet \n https://www.researchgate.net/publication/360529167_A_%27perpetual_motion_machine%27_powered_by_electromagnetism \n https://physics.stackexchange.com/questions/188208/why-doesnt-this-magnetic-perpetual-motion-machine-work \n homework and exercises - Tricky conceptual question: ball sliding and rolling down incline - Physics Stack Exchange \xa0 \n classical mechanics - Will a ball slide down a lumpy hill over the same path it rolls down the hill? - Physics Stack Exchange \n https://youtu.be/V70w3cxDJIM \n https://youtu.be/KzUVJiyzQwg \n Ball balancing \n 鋼球平衡台模擬系統: \n 設計一組如下圖所示之機電整合模擬系統, 可以讓鋼球停在平台上使用者所指定的位置. \n \n ( above image file source ) -  download courseware.zip  (or from  @nfu onedrive ) \n 後續協同應用: 虛實整合網際 Tilt Maze Game，\xa0 https://craigpickard.com/tilt-2014 ，Tilt Maze App， https://youtube.com/shorts/HiWKgF6PBco ，Reinforcement learning Tilt Maze platform system \n Virtual pinball \n 虛實整合彈珠台機電系統: \n 設計一組如下圖所示的虛實整合彈珠台, 使用實體按鈕 (電腦鍵盤按鈕或 Arduino based 硬體) 結合網際 Coppeliasim 模擬環境建立. \n \n ( above image file source ) \n', 'tags': '', 'url': '系統模擬.html'}, {'title': '課程總結', 'text': '3. 課程總結 \n 錄製簡報影片 \n mp4 \n 編寫總結報告 \n pdf \n 將課程摘要納入個人領英 \n https://www.linkedin.com/ \n', 'tags': '', 'url': '課程總結.html'}, {'title': 'QandA', 'text': '\n', 'tags': '', 'url': 'QandA.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};