from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'sent_at']
    readonly_fields = ['name', 'email', 'message', 'sent_at']
