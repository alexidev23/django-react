from rest_framework import serializers
from .models import Tareas

class TareasSerializer(serializers.ModelSerializer):
  class Meta:
    # Con esta forma vamos eligiendo a mano los datos que queremos en json
    # fields = ('id', 'title', 'description', 'finish')
    # Con esta forma seleccionamos todos
    model = Tareas
    fields = '__all__'