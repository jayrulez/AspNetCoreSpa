using AspNetCoreSpa.Server.Entities;
using AspNetCoreSpa.Server.Services.Abstract;
using AspNetCoreSpa.Server.ViewModels;
using Stripe;

namespace AspNetCoreSpa.Server.Services
{
    public class PaymentService : IPaymentService
    {
        private readonly ApplicationDbContext _context;
        //private IMailService _mailService;

        //public PaymentService(spa.Server.ApplicationDbContext context, IMailService mailService)
        public PaymentService(ApplicationDbContext context)
        {
            _context = context;
            //_mailService = mailService;
        }
        public string CreateStripePayment(PaymentInputDetails model, string email)
        {
            var stripeChargeCreateOptions = new StripeChargeCreateOptions
            {
                Amount = (int)model.Amount,
                Currency = "GBP",
                Source = new StripeSourceOptions()
                {
                    // set this property if using a token
                    TokenId = model.Token,
                }
            };

            var chargeService = new StripeChargeService(Startup.Configuration["stripePaymentConfig:api_key"]);
            var stripeCharge = chargeService.Create(stripeChargeCreateOptions);
            if (stripeCharge.Status == "succeeded")
            {
                var transaction = new PaymentTransaction
                {
                    TransactionId = stripeCharge.BalanceTransactionId,
                    UserEmail = email
                };
                _context.Payments.Add(transaction);
                _context.SaveChanges();
                //_mailService.SendEmailAsync(MailType.PaymentConfirmation, email, "", "", $"<p>Your transaction reference number: {transaction.TransactionId}</p>");
            }
            return stripeCharge.BalanceTransactionId;
        }

  }
}
