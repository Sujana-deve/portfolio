from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactSerializer
from .models import ContactMessage

class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Save to DB
        msg = serializer.save()

        # Email yourself
        try:
            send_mail(
                subject=f"Portfolio contact from {msg.name}",
                message=(
                    f"Name: {msg.name}\n"
                    f"Email: {msg.email}\n\n"
                    f"Message:\n{msg.message}"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_RECEIVE_EMAIL],
                fail_silently=False,
            )
        except Exception as e:
            # Message was saved to DB even if email fails
            return Response(
                {"detail": "Message saved but email delivery failed. I'll still see it."},
                status=status.HTTP_200_OK,
            )

        return Response(
            {"detail": "Message sent successfully!"},
            status=status.HTTP_201_CREATED,
        )