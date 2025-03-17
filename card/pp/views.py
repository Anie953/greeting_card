from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def myfirst(request):
  template = loader.get_template('myfirst.html')
 
  return HttpResponse(template.render({}, request))   
