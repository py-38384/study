import pygame

screen_size = [360,600]
screen = pygame.display.set_mode(screen_size)
background = pygame.image.load('C:\Users\SKIT-1\Desktop\piyal\Python\ani\iAm.jpg')
C = pygame.image.load('arro.jpg')
dre = "Right"
position1 = 0
position2 = 0
pase = 1
count = 0
while True:
	if pase == 1:
		 if dre == "Right":
     		position1 += 1
			 if position1 == 660:
				 count+=1
				 dre = "Left"
     	else:
			 position1 -= 1
			 if position1 == 0:
				 dre = "Right"
				 count+=1
    if count == 10:
     	pase = 2
    if pase == 2:
		if dre == "Right":
     		position2 += 1
     		if position2 == 1000:
     			count -=1
     			dre = "Left"
     	else:
     		position2 -= 1
     		if position2 == 0:
     			count -= 1
     			dre = "Right"
     if count == 0:
     	pase = 1
     screen.blit(background,[0, 0])
     screen.blit(C,[position1, position2])
     pygame.display.update()