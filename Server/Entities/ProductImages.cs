using System.ComponentModel.DataAnnotations;

namespace AspNetCoreSpa.Server.Entities
{
    public class ProductImage : IEntityBase
    {
        [Key]
        public int Id { get; set; }
        public string MimeType { get; set; }
        public string FileName { get; set; }
        public byte[] FileData { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }    
    }
}
