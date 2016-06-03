using System;

namespace AspNetCoreSpa.Server.ViewModels.Stock
{
    public class ProductVm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public bool IsOnHomepage { get; set; }
        public int HomepageSequence { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;

    }
}