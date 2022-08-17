from django.db import models


# Create your models here.

class Type(models.Model):
    code = models.CharField('Codigo', max_length=60, blank=True)
    description = models.CharField('Descripcion', max_length=200, blank=True)
    deprecated = models.BooleanField()

    def __str__(self):
        return str(self.id) + ' ' + self.code + '-' + self.description + ' ' + str(self.deprecated)

class Cipher(models.Model):
    type = models.ForeignKey(Type, models.RESTRICT)
    code = models.CharField('Codigo', max_length=60, blank=True)
    description = models.CharField('Descripcion', max_length=200, blank=True)
    deprecated = models.BooleanField()

    def __str__(self):
        return str(self.id) + ' ' + self.code + '-' + self.description + ' ' + str(self.deprecated)

