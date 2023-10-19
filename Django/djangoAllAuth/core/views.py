from django.shortcuts import render
from allauth.socialaccount.models import SocialAccount

def is_social(request):
    is_social = False
    try:
        is_social = SocialAccount.objects.filter(user=request.user).exists()
    except Exception as e:
        print(e)
    return is_social


def index(request):
    user_profile_pic = ''
    if is_social(request):
        user_profile_pic = request.user.socialaccount_set.filter(provider='google')[0].extra_data['picture']
    context = {'user_profile_pic':user_profile_pic}
    return render(request,'core/index.html',context)