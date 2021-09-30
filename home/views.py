from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User


def index(request):
    return render(request, 'index.html')


def login_request(request):
    if request.method == 'POST' and 'form1' in request.POST:    
        firstname = request.POST['first_name']
        lastname = request.POST['last_name']
        email = request.POST['email']
        username = request.POST['mobile_no']
        password = request.POST['password']
        user = User.objects.create_user(first_name=firstname, last_name=lastname, email=email, username=username, password=password)
        user.save()
        return redirect('/login/')

    if request.method == 'POST' and 'form2' in request.POST:
        username = request.POST['mobile_no1']
        password1 = request.POST['password1']
        user = authenticate(username=username, password=password1)
        if user is not None:
            login(request, user)
            return redirect('index')
    return render(request, 'login.html')

def logout_request(request):
    logout(request)
    return redirect("index")


    
    
   
