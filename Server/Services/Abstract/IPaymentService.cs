using AspNetCoreSpa.Server.ViewModels;

namespace AspNetCoreSpa.Server.Services.Abstract
{
    public interface IPaymentService
    {
        //{"name":"Asad stripe","cvc":124,"expiry":"11/2017","token":"tok_17oseKJoWV4momWkCP60SW1k","amount":12}

        string CreateStripePayment(PaymentInputDetails model, string email);

    }
}
