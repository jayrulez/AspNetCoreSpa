using System.Collections.Generic;
using System.Linq;
using AspNetCoreSpa.Server.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AspNetCoreSpa.Server.Controllers.api
{
    [Route("api/[controller]")]
    public class CategoryController : BaseController
    {
        private readonly ApplicationDbContext _context;

        public CategoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<object> Get(bool includeSubCategories = false)
        {
            if (includeSubCategories)
            {
                return _context.Categories
                    .Include(s => s.SubCategories)
                    .OrderBy(n => n.Name)
                    .ToList();
            }
            return _context.Categories.Select(c=> new 
            {
                Id = c.Id,
                Name = c.Name,
                Description = c.Description
            }).ToList();
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public Category Get(int id)
        {
            return _context.Categories.FirstOrDefault(c => c.Id == id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Category model)
        {
            if (ModelState.IsValid)
            {
                _context.Categories.Add(model);
                _context.SaveChanges();
                return Ok(model);
            }
            return BadRequest("Invalid category post request");
        }

        [HttpPut("{id}")]
        public void Put([FromBody]Category model)
        {
            _context.Categories.Add(model);
            _context.Entry(model).State = EntityState.Modified;
            _context.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var category = _context.Categories.FirstOrDefault(c => c.Id == id);
            if (category != null)
            {
                _context.Categories.Remove(category);
                _context.SaveChanges();
            }
        }
    }
}
