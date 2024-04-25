from django.db import models

# Create your models here.
class Tareas(models.Model):
  title = models.CharField(max_length=1000)
  finish = models.BooleanField(default=False)

  def __str__(self) -> str:
    return f'title: {self.title}, finish: {self.finish}'