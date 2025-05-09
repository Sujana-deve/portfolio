from django.shortcuts import render
from django.http import HttpResponse

def home(request):

    fruits = [
        {'name':'apple','price':200},
        {'name':'banana','price':100},
        {'name':'kiwi','price':500},
        {'name':'apple','price':200},
        {'name':'banana','price':100},
        {'name':'kiwi','price':500},
    ]
    return render(request,'foldin/index.html',context={"fruits":fruits})

def about(request):
    return render(request,'foldin/about.html')

def contact(request):
    return render(request,'foldin/contact.html')
# Create your views here.
def sucess_page(request):
    return HttpResponse("<h1> hello now this is the sucess page for you website</h1>")