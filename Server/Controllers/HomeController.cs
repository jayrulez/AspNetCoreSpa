// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

using System.Linq;
using System.Threading.Tasks;
using AspNetCoreSpa.Server.Controllers.api;
using AspNetCoreSpa.Server.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AspNetCoreSpa.Server.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHostingEnvironment _env;
        private readonly UserManager<ApplicationUser> _userManager;

        public HomeController(IHostingEnvironment env, UserManager<ApplicationUser> userManager)
        {
            _env = env;
            _userManager = userManager;
        }

        public async Task<IActionResult> Index()
        {
            if (Request.Query.ContainsKey("emailConfirmCode") &&
                Request.Query.ContainsKey("userId"))
            {
                var userId = Request.Query["userId"].ToString();
                var code = Request.Query["emailConfirmCode"].ToString();
                code = code.Replace(" ", "+");

                var applicationUser = await _userManager.FindByIdAsync(userId);
                if (applicationUser != null && !applicationUser.EmailConfirmed)
                {
                    var valid = await _userManager.ConfirmEmailAsync(applicationUser, code);
                    if (valid.Succeeded)
                    {
                        ViewBag.emailConfirmed = true;
                    }
                }
            }
            else if (User.Identity != null && !string.IsNullOrEmpty(User.Identity.Name))
            {
                var user = await _userManager.FindByNameAsync(User.Identity.Name);
                var roles = await _userManager.GetRolesAsync(user);
                var userResult = new { User = new { DisplayName = user.UserName, Roles = roles.ToList() } };
                ViewBag.user = userResult;
            }

            ViewBag.stripeClientKey = Startup.Configuration["stripeClientKey"];

            //var viewToRender = _env.IsDevelopment() ? "/Views/Home/index.cshtml" : "/Views/Home/index.cshtml";
            return View();
        }

    }
}
