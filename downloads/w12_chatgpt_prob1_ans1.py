# 指定檔案路徑
file_path = "2b_w12_seat.txt"

# 打開檔案
with open(file_path, "r", encoding="utf-8") as file:
    # 逐行讀取檔案內容
    lines = file.readlines()

# 創建一個字典來存儲學號和座位號的對應關係
seat_map = {}

# 迭代每一行
for line in lines:
    # 以 tab 分割每一行的內容
    elements = line.split("\t")

    # 如果該行包含座位信息
    if len(elements) == 2 and "(" in elements[1]:
        # 提取學號和座位號
        stud_num = elements[0].strip()
        seat_info = elements[1].strip()

        # 將學號和座位號添加到字典中
        seat_map[stud_num] = seat_info

# 顯示結果
for stud_num, seat_info in seat_map.items():
    print(f"學號: {stud_num}, 座位號: {seat_info}")
