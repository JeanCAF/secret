import uuid
import os

from django.db import models
from model_utils.models import TimeStampedModel
from cipher.models import Cipher


# Create your models here.

def product_image_file_path(instance, filename):
    """Generate file path for new product image."""
    ext = os.path.splitext(filename)[1]
    filename = f'{uuid.uuid4()}{ext}'

    return os.path.join('uploads', 'product', filename)


class Product(TimeStampedModel):
    cipher_code = models.ForeignKey(Cipher, models.RESTRICT)
    date_register = models.DateTimeField('Fecha Registro',)
    user_register = models.CharField('Usuario Registro', max_length=30, blank=True, null=True)
    code = models.CharField('Codigo', max_length=60, blank=True, null=True)
    name = models.CharField('Nombre', max_length=100, blank=True, null=True)
    description = models.CharField('Descripcion', max_length=200, blank=True, null=True)
    image = models.ImageField('Foto', null=True, upload_to=product_image_file_path)
    amount = models.PositiveIntegerField('Cantidad')
    price = models. PositiveIntegerField('Precio')
    deprecated = models.BooleanField()

