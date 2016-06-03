using System.Collections.Generic;
using System.Linq;
using AspNetCoreSpa.Server.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AspNetCoreSpa.Server.Controllers.api
{
    [Route("api/[controller]")]
    public class ProductController : BaseController
    {
        private static readonly string ProductCacheKey = nameof(ProductController);
        private readonly ApplicationDbContext _context;

        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpGet("")]
        public IEnumerable<Product> Get()
        {
            return _context.Products.OrderBy(n => n.Name).ToList();
        }

        [AllowAnonymous]
        [HttpGet("productsbysubcategoryid/{subCategoryId}")]
        public IEnumerable<Product> ProductsByCategory(int subCategoryId)
        {
            var result = _context.Products.Where(a => a.SubCategory.Id == subCategoryId).ToList();
            return result;
        }

        [AllowAnonymous]
        [HttpGet("gethomeproducts/{page}")]
        public object GetHomeProducts(int page)
        {
            //var key = "gethomeproducts";
            //var homeProducts = MemoryCache.Default[key];
            //if (homeProducts == null)
            //{
            int pageSize = 20;
            int skip = page == default(int) ? 0 : ((page - 1) * pageSize);
            var query = from product in _context.Products
                        join subCategory in _context.SubCategories on product.SubCategoryId equals subCategory.Id
                        where product.IsOnHomepage == true
                        select new
                        {
                            Id = product.Id,
                            Name = product.Name,
                            Description = product.Description,
                            Price = product.Price,
                            Images = product.Images.Where(i => i.ProductId == product.Id).Select(i => i.Id),
                            SubCategory = subCategory.Name
                        };

            return new
            {
                count = query.Count(),
                pageSize = pageSize,
                products = query
                 .OrderBy(p => p.Id)
                 .Skip(skip)
                 .Take(pageSize)
                 .ToList()
            };
            //MemoryCache.Default[key] = homeProducts;
            //}

            //return ((object)homeProducts);
        }

        [AllowAnonymous]
        [HttpGet("getStoreProducts")]
        public IEnumerable<object> GetStoreProducts()
        {
            var result = (from c in _context.Categories
                          select new
                          {
                              c.Id,
                              c.Description,
                              c.Name,
                              SubCategories = (from s in c.SubCategories
                                               select new
                                               {
                                                   Id = s.Id,
                                                   Name = s.Name,
                                                   Description = s.Description,
                                                   CategoryId = s.CategoryId,
                                                   Products = (from p in s.Products select p).ToList()
                                               }).ToList()
                          }).ToList();
            return result;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public object Get(int id)
        {

            var productKey = ProductCacheKey + id;

            var product = (from c in _context.Products
                           where c.Id == id
                           select new
                           {
                               Id = c.Id,
                               Name = c.Name,
                               Description = c.Description,
                               Quantity = c.Quantity,
                               Price = c.Price,
                               SubCategory = c.SubCategory.Name,
                               Images = c.Images.Select(x => x.Id).ToList()
                           }).FirstOrDefault();
            return product;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Product model)
        {
            if (ModelState.IsValid)
            {
                _context.Products.Add(model);
                _context.SaveChanges();
                return Ok(model);
            }
            return BadRequest("Invalid product sent");
        }

        [HttpPut("{id}")]
        public void Put([FromBody]Product model)
        {
            _context.Products.Add(model);
            _context.Entry(model).State = EntityState.Modified;
            _context.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var product = _context.Products.FirstOrDefault(c => c.Id == id);
            if (product != null)
            {
                _context.Products.Remove(product);
                _context.SaveChanges();
            }
        }

        [HttpPost("upload/{productId}")]
        public IActionResult Upload(int productId)
        {
            var imagesToRemove = _context.ProductImages.Where(x => x.ProductId == productId);
            _context.ProductImages.RemoveRange(imagesToRemove);
            _context.SaveChanges();
            return null;
            //if (!Request.Content.IsMimeMultipartContent())
            //{
            //    this.Request.CreateResponse(HttpStatusCode.UnsupportedMediaType);
            //}

            ////string root = HttpContext.Current.Server.MapPath("~/App_Data");

            //var streamProvider = new MultipartMemoryStreamProvider();
            //var task = Request.Content.ReadAsMultipartAsync(streamProvider).ContinueWith(async t =>
            //{
            //    foreach (var file in streamProvider.Contents)
            //    {
            //        byte[] documentData = await file.ReadAsByteArrayAsync();

            //        var image = new ProductImage()
            //        {
            //            ProductId = productId,
            //            FileName = file.Headers.ContentDisposition.FileName,
            //            MimeType = file.Headers.ContentDisposition.DispositionType,
            //            FileData = documentData
            //        };

            //        _context.ProductImages.Add(image);
            //        _context.SaveChanges();

            //    }


            //});
            //var result = task.Result;
            //return Ok(streamProvider.Contents.Count + " images have been uploaded for product id " + productId);

            //return BadRequest("Something went wrong");

        }

        //[AllowAnonymous]
        //[Route("image/{productId}/{imageId}")]
        //[HttpGet]
        //public System.Web.Mvc.FileContentResult ImageDownload(int productId, int imageId)
        //{
        //    var imageKey = ProductCacheKey + productId + imageId;

        //    var imageResult = (System.Web.Mvc.FileContentResult)MemoryCache.Default[imageKey];

        //    if (imageResult == null)
        //    {
        //        var image = _context.ProductImages.FirstOrDefault(i => i.Id == imageId && i.ProductId == productId);
        //        if (image != null)
        //        {
        //            var fileContent = image.FileData;
        //            var mimeType = image.MimeType;
        //            var fileName = image.FileName;
        //             imageResult = new System.Web.Mvc.FileContentResult(fileContent, mimeType);
        //            MemoryCache.Default[imageKey] = imageResult;
        //            Request.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
        //            {
        //                FileName = fileName
        //            };
        //            Request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");

        //        }
        //    }

        //    return imageResult;
        //}
    }

}
