using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSpa.Server.Controllers.api
{
    //[RoutePrefix("product/image")]
    public class ImageController : BaseController
    {

        public ImageController()
        {
        }

        [AllowAnonymous]
        //[Route("{productId}/{imageId}")]
        [HttpGet]
        public FileResult Index(int productId, int imageId)
        {
            var imageKey = "ImageController" + productId + imageId;
            return null;

            //var imageResult = (FileContentResult)MemoryCache.Default[imageKey];

            //if (imageResult == null)
            //{
            //    var _context = new ApplicationDbContext();
            //    var image = _context.ProductImages.FirstOrDefault(i => i.Id == imageId && i.ProductId == productId);
            //    if (image != null)
            //    {
            //        var fileContent = image.FileData;
            //        var mimeType = image.MimeType;
            //        var fileName = image.FileName;
            //        imageResult = new FileContentResult(fileContent, mimeType);
            //    }
            //    else
            //    {
            //        imageResult = new FileContentResult(new byte[0], "application/jpeg");
            //    }
            //}
            //return imageResult;
        }
    }
}