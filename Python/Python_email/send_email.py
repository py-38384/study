import smtplib
from email.mime.text import MIMEText
from email.message import Message

file = open('emails/email_body.html','rb') #importing email body which content HTML,CSS AND Javascript

sender = 'workwithpiyal@gmail.com'
receiver = 'piyal13131@gmail.com'
application_password = 'wrgp kqoh cqtq hagv' # this password is given by Google

mail_subject = "testing purpose"
mail_body = file.read()


message = Message()
message["Subject"] = mail_subject
message["From"] = sender
message["To"] = receiver
message.add_header('Content-Type','text/html')
message.set_payload(mail_body)

server = smtplib.SMTP('smtp.gmail.com',587)
server.starttls()
server.login(sender, application_password)
try:
    server.sendmail(sender,receiver,message.as_string())
    print('Email Successfully send')
except:
    print('Email not send. ERORR!!!')