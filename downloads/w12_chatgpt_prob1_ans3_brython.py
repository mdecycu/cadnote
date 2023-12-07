# Brython 代碼開始
file_content = open("https://mde.tw/cadnote/downloads/2b_w12_seat.txt").read()

# 創建一個字典來存儲學號和座位號的對應關係
seat_map = {}

# 逐行處理檔案內容
for line in file_content.splitlines():
    # 以 tab 分割每一行的內容
    elements = line.split("\t")

    # 如果該行包含座位信息
    if len(elements) == 2 and "(" in elements[1]:
        # 提取學號和座位號
        stud_num = elements[0].strip()
        seat_info = elements[1].strip()

        # 將學號和座位號添加到字典中
        seat_map[stud_num] = seat_info

# 將座位號按照列和行排序
sorted_seats = sorted(seat_map.items(), key=lambda x: (int(x[1][1]), int(x[1][3])))

# 顯示結果
for stud_num, seat_info in sorted_seats:
    print(f"座位號: {seat_info}, 學號: {stud_num}")
# Brython 代碼結束