# Generated by Django 5.0.3 on 2024-04-08 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='address',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='company',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='description',
            field=models.TextField(default=''),
        ),
    ]