import smtplib
from email.mime.text import MIMEText
from email.message import Message
from email.message import EmailMessage
from email.utils import make_msgid
import mimetypes

file = open('email_body.html','rb') #importing email body which content HTML,CSS AND Javascript

sender = 'workwithpiyal@gmail.com'
receiver = 'piyal13133@gmail.com'
application_password = 'wrgp kqoh cqtq hagv' # this password is given by Google

mail_subject = "testing purpose"
mail_body = file.read()


message = EmailMessage()
message["Subject"] = mail_subject
message["From"] = sender
message["To"] = receiver
message.add_header('Content-Type','text/html')

message.set_content('This is a plain text body.')
image_cid = make_msgid(domain='')

message.set_payload(mail_body)

message.add_alternative("""\
<html>
    <body>
        <p>This is an HTML body.<br>
           It also has an image.
        </p>
        <img src="cid:{image_cid}">
    </body>
</html>
""".format(image_cid=image_cid[1:-1]), subtype='html')

with open('profile.png', 'rb') as img:

    # know the Content-Type of the image
    maintype, subtype = mimetypes.guess_type(img.name)[0].split('/')

    # attach it
    message.get_payload()[1].add_related(img.read(), 
                                         maintype=maintype, 
                                         subtype=subtype, 
                                         cid=image_cid)

server = smtplib.SMTP('smtp.gmail.com',587)
server.starttls()
server.login(sender, application_password)
try:
    server.sendmail(sender,receiver,message.as_string())
    print('Email Successfully send')
except:
    print('Email not send. ERORR!!!')