from django.contrib.auth.tokens import PasswordResetTokenGenerator
# from django.contrib.six import text_type
from six import text_type



class ApptokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self,user,timestamp):
        return text_type(user.is_active)+text_type(user.pk)+text_type(timestamp)
    
 
account_activation_token=ApptokenGenerator()
token_generator = PasswordResetTokenGenerator()