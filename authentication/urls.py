from .views import RegistrationView,UsernameValidationView,EmailValidationView,VerificationView,LoginView,LogoutView,RequestPasswordResetEmail,CompletePasswordReset
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

urlpatterns=[
       
    
       path('register',RegistrationView.as_view(),name="register"),
       path('validate_username',csrf_exempt(UsernameValidationView.as_view()),name="validate_username"),
       path('validate_email',csrf_exempt(EmailValidationView.as_view()), name="validate_email"),
       path('activate/<uidb64>/<token>',csrf_exempt(VerificationView.as_view()),name="activate"),
       path('login',LoginView.as_view(),name="login"),
       path('logout',LogoutView.as_view(),name='logout'),
       path('request-reset-link',RequestPasswordResetEmail.as_view(),name="request-password"),
       path('set-new-password/<uidb64>/<token>',CompletePasswordReset.as_view(),name="user-reset-password")
       
]

