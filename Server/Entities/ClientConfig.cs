namespace AspNetCoreSpa.Server.Entities
{
    public class ClientConfig
    {
        public string PaypalBusiness { get; set; }
        public string PaypalCurrencyCode { get; set; }
        public string PaypalItemName { get; set; }
        public string PaypalItemNumber { get; set; }
        public int PaypalNoNote { get; set; }
    }
}