from rest_framework import viewsets
from .serializer import TareasSerializer
from .models import Tareas

# Create your views here.
class view(viewsets.ModelViewSet):
  serializer_class = TareasSerializer
  queryset = Tareas.objects.all()