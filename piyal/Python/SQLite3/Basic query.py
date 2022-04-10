import sqlite3
conn = sqlite3.connect('/storage/emulated/0/Study/Mydatabase.db')#write your database path here
cursor = conn.cursor()#create a cursor

cursor.execute("SELECT * FROM superhero")#write your query here
data = cursor.fetchall()
for i in data:
	print(i)
conn.commit()
conn.close()