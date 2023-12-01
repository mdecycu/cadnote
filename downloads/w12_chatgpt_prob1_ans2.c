#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// 定義檔案路徑
#define FILE_PATH "2a_w12_seat.txt"
#define MAX_LINE_LENGTH 256

// 學號和座位號的結構
typedef struct {
    char stud_num[10];
    char seat_info[10];
} SeatRecord;

// 比較函數，用於排序座位號
int compareSeats(const void *a, const void *b) {
    const SeatRecord *seatA = (const SeatRecord *)a;
    const SeatRecord *seatB = (const SeatRecord *)b;

    // 先按照列排序，再按照行排序
    int colA = atoi(&seatA->seat_info[1]);
    int colB = atoi(&seatB->seat_info[1]);

    if (colA != colB) {
        return colA - colB;
    }

    int rowA = atoi(&seatA->seat_info[3]);
    int rowB = atoi(&seatB->seat_info[3]);

    return rowA - rowB;
}

int main() {
    // 打開檔案
    FILE *file = fopen(FILE_PATH, "r");
    if (file == NULL) {
        perror("Error opening file");
        return 1;
    }

    // 讀取檔案內容
    char line[MAX_LINE_LENGTH];
    SeatRecord seatRecords[100];  // 假設最多有 100 筆座位紀錄

    int recordCount = 0;
    while (fgets(line, sizeof(line), file) != NULL) {
        // 以 tab 分割每一行的內容
        char *token = strtok(line, "\t");
        if (token != NULL) {
            // 提取學號和座位號
            strcpy(seatRecords[recordCount].stud_num, token);

            token = strtok(NULL, "\t");
            if (token != NULL && strstr(token, "(") != NULL) {
                strcpy(seatRecords[recordCount].seat_info, token);
                recordCount++;
            }
        }
    }

    // 關閉檔案
    fclose(file);

    // 排序座位號
    qsort(seatRecords, recordCount, sizeof(SeatRecord), compareSeats);

    // 顯示結果
    for (int i = 0; i < recordCount; i++) {
        printf("座位號: %s, 學號: %s\n", seatRecords[i].seat_info, seatRecords[i].stud_num);
    }

    return 0;
}
