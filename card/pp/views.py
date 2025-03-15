from django.http import HttpResponse
from django.template import loader

def testing(request):
  template = loader.get_template('myfirst.html')
  context = {
    'fruits': ['Apple', 'Banana', 'Cherry'],   
  }
  return HttpResponse(template.render(context, request))   
