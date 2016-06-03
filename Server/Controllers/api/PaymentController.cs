using AspNetCoreSpa.Server.Services.Abstract;
using AspNetCoreSpa.Server.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSpa.Server.Controllers.api
{
    [Route("api/[controller]")]
    public class PaymentController : BaseController
    {
        private readonly IPaymentService _paymentService;

        public PaymentController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }

        [Route("stripe")]
        [HttpPost]
        public IActionResult Stripe([FromBody]PaymentInputDetails model)
        {
            if (ModelState.IsValid)
            {
                var result = _paymentService.CreateStripePayment(model, User.Identity.Name);
                return Ok(result);

            }
            return BadRequest("Invalid stripe payment request");

        }
    }
}
