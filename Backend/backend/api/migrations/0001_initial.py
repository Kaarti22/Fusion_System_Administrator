# Generated by Django 4.2.16 on 2024-10-18 04:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AuthUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('is_superuser', models.BooleanField()),
                ('username', models.CharField(max_length=150, unique=True)),
                ('first_name', models.CharField(max_length=150)),
                ('last_name', models.CharField(max_length=150)),
                ('email', models.CharField(max_length=254)),
                ('is_staff', models.BooleanField()),
                ('is_active', models.BooleanField()),
                ('date_joined', models.DateTimeField()),
            ],
            options={
                'db_table': 'auth_user',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='GlobalsDepartmentinfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
            ],
            options={
                'db_table': 'globals_departmentinfo',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='GlobalsDesignation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('full_name', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'globals_designation',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='GlobalsExtrainfo',
            fields=[
                ('id', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=20)),
                ('sex', models.CharField(max_length=2)),
                ('date_of_birth', models.DateField()),
                ('user_status', models.CharField(max_length=50)),
                ('address', models.TextField()),
                ('phone_no', models.BigIntegerField(blank=True, null=True)),
                ('user_type', models.CharField(max_length=20)),
                ('profile_picture', models.CharField(blank=True, max_length=100, null=True)),
                ('about_me', models.TextField()),
                ('date_modified', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'globals_extrainfo',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='GlobalsHoldsdesignation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('held_at', models.DateTimeField()),
            ],
            options={
                'db_table': 'globals_holdsdesignation',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='GlobalsModuleaccess',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('designation', models.CharField(max_length=155)),
                ('program_and_curriculum', models.BooleanField()),
                ('course_registration', models.BooleanField()),
                ('course_management', models.BooleanField()),
                ('other_academics', models.BooleanField()),
                ('spacs', models.BooleanField()),
                ('department', models.BooleanField()),
                ('examinations', models.BooleanField()),
                ('hr', models.BooleanField()),
                ('iwd', models.BooleanField()),
                ('complaint_management', models.BooleanField()),
                ('fts', models.BooleanField()),
                ('purchase_and_store', models.BooleanField()),
                ('rspc', models.BooleanField()),
                ('hostel_management', models.BooleanField()),
                ('mess_management', models.BooleanField()),
                ('gymkhana', models.BooleanField()),
                ('placement_cell', models.BooleanField()),
                ('visitor_hostel', models.BooleanField()),
                ('phc', models.BooleanField()),
            ],
            options={
                'db_table': 'globals_moduleaccess',
                'managed': False,
            },
        ),
    ]