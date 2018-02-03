using Microsoft.Extensions.Options;
using PyeongchangKampen.Models;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;

namespace PyeongchangKampen.Services
{
    public class EmailService: IEmailService
    {
        private EmailSettings _Settings;

        public EmailService(IOptions<EmailSettings> settings)
        {
            _Settings = settings.Value;
        }

        public Task SendEmailAsync(string email, string subject, string message)
        {
            return Execute(_Settings.Password, subject, message, email);
        }

        private Task Execute(string apiKey, string subject, string message, string email)
        {
            var client = new SendGridClient(apiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(_Settings.SenderEmail, _Settings.SenderName),
                Subject = subject,
                PlainTextContent = message,
                HtmlContent = message
            };
            msg.AddTo(new EmailAddress(email));
            return client.SendEmailAsync(msg);
        }
    }
}
