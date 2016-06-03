using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace AspNetCoreSpa.Server.Middlewares
{
    public class AdminUserHandler : AuthorizationHandler<AdminEmailRequirement>
    {
        protected override void Handle(AuthorizationContext context, AdminEmailRequirement requirement)
        {
            if (requirement.Email.Any(email => context.User.Identity.Name == email))
            {
                context.Succeed(requirement);
            }
        }
    }

    public class AdminEmailRequirement : IAuthorizationRequirement
    {
        public AdminEmailRequirement(string[] email)
        {
            Email = email;
        }

        public string[] Email { get; set; }
    }
}
