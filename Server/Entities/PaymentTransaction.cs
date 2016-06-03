using System.ComponentModel.DataAnnotations;

namespace AspNetCoreSpa.Server.Entities
{
    public class PaymentTransaction :IEntityBase
    {
        [Key]
        public int Id { get; set; }
        public string CardType { get; set; }
        public string TransactionId { get; set; }
        public string UserEmail { get; set; }
    }
}
