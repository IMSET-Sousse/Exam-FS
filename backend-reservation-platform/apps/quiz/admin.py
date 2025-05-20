from django.contrib import admin
from .models import Quiz, Question, Option

class OptionInline(admin.TabularInline):
    model = Option
    extra = 1

class QuestionAdmin(admin.ModelAdmin):
    inlines = [OptionInline]

class QuizAdmin(admin.ModelAdmin):
    inlines = [QuestionAdmin]

admin.site.register(Quiz, QuizAdmin)