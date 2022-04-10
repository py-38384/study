import sqlite3
conn = sqlite3.connect('/storage/emulated/0/Mydatabase.db')#write your database path here
cursor = conn.cursor()#create a cursor

cursor.execute("INSERT INTO supervillen SELECT * FROM superhero WHERE ID IN (SELECT ID FROM superhero) ;")#write your query here
conn.commit()
conn.close()