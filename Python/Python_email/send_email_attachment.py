import smtplib
from pathlib import Path
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.utils import COMMASPACE, formatdate
from email import encoders


def send_mail(send_from, send_to, subject, message, files=[],
              server="localhost", port=587, username='', password='',
              use_tls=True):
    """Compose and send email with provided info and attachments.

    Args:
        send_from (str): from name
        send_to (list[str]): to name(s)
        subject (str): message title
        message (str): message body
        files (list[str]): list of file paths to be attached to email
        server (str): mail server host name
        port (int): port number
        username (str): server auth username
        password (str): server auth password
        use_tls (bool): use TLS mode
    """
    msg = MIMEMultipart()
    msg['From'] = send_from
    msg['To'] = send_to
    msg['Date'] = formatdate(localtime=True)
    msg['Subject'] = subject

    msg.attach(MIMEText(message))

    for path in files:
        part = MIMEBase('application', "octet-stream")
        with open(path, 'rb') as file:
            part.set_payload(file.read())
        encoders.encode_base64(part)
        part.add_header('Content-Disposition','attachment; filename={}'.format(Path(path).name))
        msg.attach(part)

    smtp = smtplib.SMTP(server, port)
    if use_tls:
        smtp.starttls()
    smtp.login(username, password)
    smtp.sendmail(send_from, send_to, msg.as_string())
    smtp.quit()


sender = 'workwithpiyal@gmail.com'
receiver = 'piyal13133@gmail.com'
application_password = 'wrgp kqoh cqtq hagv'

mail_subject = "testing purpose"
mail_body = """
<h1>Mail send using python..</h1>
<p style="background:red;">this is a email using h1 HTML tag. I am testing if it really work. if it work? I am going to dance...
</p>
<img src="pic.jpg" alt="pic">
"""
file_path_list = ['E:\Photo\profile.png']
send_mail(
    send_from=sender,
    send_to=receiver,
    subject=mail_subject,
    files=file_path_list,
    message="",
    server='smtp.gmail.com',
    username=sender,
    password=application_password
    )