try:
	filedriver = open("/storage/emulated/0/Text.txt","w")
	text = ""
	while True:
		 text = input()
		 if text == "save" or text == "Save":
		 	break
		 filedriver.write(text+"\n")
	print("----------")
	print("File saved")
	print("----------")
except:
		 print("File creation error!")
finally:
		 filedriver.close()