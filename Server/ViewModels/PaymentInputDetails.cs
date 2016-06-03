namespace AspNetCoreSpa.Server.ViewModels
{
    public class PaymentInputDetails
    {
        public string Token { get; set; }
        public string Name { get; set; }
        public string Cvc { get; set; }
        public double Amount { get; set; }
        public string ExpiryMonth { get; set; }
        public string ExpiryYear { get; set; }
    }
}
