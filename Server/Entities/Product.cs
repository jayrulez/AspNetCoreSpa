using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AspNetCoreSpa.Server.Entities
{
    public class Product : IEntityBase
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public bool IsOnHomepage { get; set; }
        public int HomepageSequence { get; set; }
        public virtual ICollection<ProductImage> Images { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public int SubCategoryId { get; set; }
        public virtual SubCategory SubCategory{ get; set; }
    }
}
