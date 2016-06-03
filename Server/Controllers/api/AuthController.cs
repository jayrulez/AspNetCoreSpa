using System;
using System.Net;
using System.Threading.Tasks;
using AspNetCoreSpa.Server.Core;
using AspNetCoreSpa.Server.Entities;
using AspNetCoreSpa.Server.Extensions;
using AspNetCoreSpa.Server.Repositories.Abstract;
using AspNetCoreSpa.Server.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNetCoreSpa.Server.Controllers.api
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly ILoggingRepository _loggingRepository;
        private SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        //private readonly IMailService _mailService;

        public AuthController(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            //IMailService mailService,
            ILoggingRepository errorRepository)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            //_mailService = mailService;
            _loggingRepository = errorRepository;
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
            GenericResult authenticationResult = null;

            try
            {
                if (ModelState.IsValid)
                {
                    // This doesn't count login failures towards account lockout
                    // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                    var user = await _userManager.FindByEmailAsync(model.Email);
                    var result = await _userManager.CheckPasswordAsync(user, model.Password);
                    //var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe,
                    //            lockoutOnFailure: false);
                    if (user != null && result && !user.EmailConfirmed)
                    {
                        Response.StatusCode = (int)HttpStatusCode.BadRequest;
                        return Json(new[] { "You have not confirmed your email." });
                    }

                    //if (result)
                    //{
                    //    return await SignIn(model.Email);
                    //}

                    Response.StatusCode = (int)HttpStatusCode.BadRequest;
                    return Json(new[] { "Invalid login attempt" });
                }
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(ModelState.GetModelErrors());

            }
            catch (Exception ex)
            {
                authenticationResult = new GenericResult()
                {
                    Succeeded = false,
                    Message = ex.Message
                };

                _loggingRepository.Add(new Error()
                {
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    DateCreated = DateTime.Now
                });
                _loggingRepository.Commit();
            }

            IActionResult _result = new ObjectResult(authenticationResult);
            return _result;
        }

        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegistrationViewModel model)
        {
            GenericResult registrationResult = null;

            try
            {
                if (ModelState.IsValid)
                {
                    var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
                    var created = await _userManager.CreateAsync(user, model.Password);
                    if (created.Succeeded)
                    {
                        var currentUser = await _userManager.FindByEmailAsync(model.Email);
                        var rolesResult = await _userManager.AddToRoleAsync(currentUser, "User");
                        if (rolesResult.Succeeded)
                        {
                            var code = await _userManager.GenerateEmailConfirmationTokenAsync(currentUser);

                            //var uri = Request.Path;
                            //var host = Request.Scheme + Uri.SchemeDelimiter + Request.Host;
                            var host = Request.Scheme + "://" + Request.Host;
                            var callbackUrl = host + "?userId=" + currentUser.Id + "&emailConfirmCode=" + code;
                            var confirmationLink = "<a class='btn-primary' href=\"" + callbackUrl + "\">Confirm email address</a>";
                            // TODO when email ready
                            //await _mailService.SendEmailAsync(MailType.Register, new EmailModel { To = model.Email }, confirmationLink);
                            Response.StatusCode = (int)HttpStatusCode.OK;
                            return Json(new { });
                        }
                    }
                }

                // If we got this far, something failed, redisplay form
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(ModelState.GetModelErrors());
            }
            catch (Exception ex)
            {
                registrationResult = new GenericResult()
                {
                    Succeeded = false,
                    Message = ex.Message
                };

                _loggingRepository.Add(new Error() { Message = ex.Message, StackTrace = ex.StackTrace, DateCreated = DateTime.Now });
                _loggingRepository.Commit();
            }

            IActionResult result = new ObjectResult(registrationResult);
            return result;
        }

    }
}
