import sqlite3
conn = sqlite3.connect('/storage/emulated/0/Study/Mydatabase.db')
cursor = conn.cursor()

user_input = input("Enter superhero name you like to find/-")
hero_quota = input("Enter your heros quota/-")
cursor.execute("SELECT * FROM superhero WHERE name = :name",{'name':user_input})
data = cursor.fetchone()
if data is not None and data[4] == hero_quota:
	print("Right")
else:
	print("Not so good")
conn.commit()
conn.close()