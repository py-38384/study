from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request,"index.html")

def analyze(request):
    Text = request.POST.get('text', 'Null')
    removepunc = request.POST.get('removepunc', 'off')
    uppercase = request.POST.get('uppercase', 'off')
    lowercase = request.POST.get('lowercase', 'off')
    capitalize = request.POST.get('capitalize', 'off')
    newlineremover = request.POST.get('newlineremover', 'off')
    spaceremover = request.POST.get('spaceremover', 'off')
    charactercounter = request.POST.get('charectorcounter', 'off')
    removextraspace = request.POST.get('removextraspace', 'off')
    punctuations = '''!|()-[]{};:'"\,<>./?@#$%^&*_~'''
    analyzedText = ""
    purpose = ""

    if removepunc == "on":
        if len(purpose) <= 0:
            purpose += "Remove punctuation"
        else:
            purpose += ", " + "Remove punctuation"
        analyzedText = ""
        for char in Text:
            if char not in punctuations:
                analyzedText += char
        Text = analyzedText

    if uppercase == "on":
        if len(purpose) <= 0:
            purpose += "Change to UPPERCASE"
        else:
            purpose += ", " + "Change to UPPERCASE"
        analyzedText = ""
        for char in Text:
            analyzedText += char.upper()
        Text = analyzedText

    if lowercase == "on":
        if len(purpose) <= 0:
            purpose += "Change to lowercase"
        else:
            purpose += ", " + "Change to lowercase"
        analyzedText = ""
        for char in Text:
            analyzedText += char.lower()
        Text = analyzedText

    if capitalize == "on":
        if len(purpose) <= 0:
            purpose += "Make Capitalize"
        else:
            purpose += ", " + "Make Capitalize"
        analyzedText = ""
        isSpace = False
        analyzedText += Text[0].upper()
        for char in range(1,len(Text)):
            if isSpace:
                analyzedText += Text[char].upper()
                isSpace = False
                if Text[char] == " ":
                    isSpace = True
                continue    
            if Text[char] == " ":
                isSpace = True
                analyzedText += Text[char]
            else:
                analyzedText += Text[char]
        Text = analyzedText

    if newlineremover == "on":
        if len(purpose) <= 0:
            purpose += "Remove new line"
        else:
            purpose += ", " + "Remove new line"
        analyzedText = ""
        for char in Text:
            if char == "\n" or char == "\r":
                pass
            else:
                analyzedText += char
        Text = analyzedText

    if spaceremover == "on":
        if len(purpose) <= 0:
            purpose += "Remove Space"
        else:
            purpose += ", " + "Remove Space"
        analyzedText = ""
        for char in Text:
            if not char == " ":
                analyzedText += char
        Text = analyzedText

    if charactercounter == "on":
        analyzedText = Text
        if len(purpose) <= 0:
            purpose += "Character Counter"
        else:
            purpose += ", " + "Character Counter"
        num = 0
        for char in Text:
            if char == " " : continue
            num += 1
        analyzedText += " (Character counter : {0})".format(num)
        Text = analyzedText

    if removextraspace == "on":
        if len(purpose) <= 0:
            purpose += "Remove Extra Space"
        else:
            purpose += ", " + "Remove Extra Space"
        analyzedText = ""
        for index,char in enumerate(Text):
            if Text[index] == " " and Text[index-1] == " ":
                continue
            analyzedText += char
        Text = analyzedText

    if removepunc == "off" and uppercase == "off" and lowercase == "off" and capitalize == "off" and newlineremover == "off" and spaceremover == "off" and charactercounter == "off" and removextraspace == "off":
        purpose = "Nothing change"
        analyzedText = Text
    purpose += "."

    params = {"purpose": purpose, "analyzedText": analyzedText}
    return render(request,"analyze.html",params)
