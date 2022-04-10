try:
    is_file_open = True
    filedriver = open("/storage/emulated/0/Text.txt","r") #this statement should change if file location change or file name change
    print(filedriver.read())
except FileNotFoundError:
	is_file_open = False
	print("File not found.")
finally:
	if is_file_open:
		filedriver.close()	