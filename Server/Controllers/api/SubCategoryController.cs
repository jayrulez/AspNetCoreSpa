using System.Collections.Generic;
using System.Linq;
using AspNetCoreSpa.Server.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNetCoreSpa.Server.Controllers.api
{
    // [Authorize("Bearer")]
    [Route("api/[controller]")]
    public class SubCategoryController : BaseController
    {
        private readonly ApplicationDbContext _context;

        public SubCategoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<SubCategory> Get()
        {
            return _context.SubCategories.ToList();
        }

        [AllowAnonymous]
        [Route("getByCategory")]
        [HttpGet]
        public IEnumerable<SubCategory> GetByCategory(int categoryId)
        {
            return _context.SubCategories.Where(s => s.CategoryId == categoryId).ToList();
        }

        [AllowAnonymous]
        [Route("{id}")]
        [HttpGet]
        public SubCategory Get(int id)
        {
            return _context.SubCategories.FirstOrDefault(c => c.Id == id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]SubCategory model)
        {
            if (ModelState.IsValid)
            {
                _context.SubCategories.Add(model);
                _context.SaveChanges();
                return Ok(model);
            }
            return BadRequest("Invalid sub category post request");
        }
        
        [Route("{id}")]
        [HttpPut]
        public void Put([FromBody]SubCategory model)
        {
            _context.SubCategories.Add(model);
            _context.Entry(model).State = EntityState.Modified;
            _context.SaveChanges();
        }

        [Route("{id}")]
        [HttpDelete]
        public void Delete(int id)
        {
            var subCategory = _context.SubCategories.FirstOrDefault(c => c.Id == id);
            if (subCategory != null)
            {
                _context.SubCategories.Remove(subCategory);
                _context.SaveChanges();
            }

        }
    }
}
