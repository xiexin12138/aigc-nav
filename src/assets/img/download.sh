#!/bin/bash

# 读取URL和文件名列表文件
input_file="../urls_and_filenames.txt"

# 逐行读取URL和文件名列表文件
while IFS=, read -r url custom_filename
do
  # 检查文件是否存在
  if [ ! -f "$custom_filename" ]; then
    # 使用wget下载图片并重命名为自定义文件名
    wget -O "$custom_filename" "$url"
  fi
done < "$input_file"