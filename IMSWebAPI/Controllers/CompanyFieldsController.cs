using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IMSWebAPI.Models;

namespace IMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyFieldsController : ControllerBase
    {
        private readonly imsdbContext _context;

        public CompanyFieldsController(imsdbContext context)
        {
            _context = context;
        }

        // GET: api/CompanyFields
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompanyField>>> GetCompanyFields()
        {
            return await _context.CompanyFields.ToListAsync();
        }

        // GET: api/CompanyFields/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CompanyField>> GetCompanyField(long id)
        {
            var companyField = await _context.CompanyFields.FindAsync(id);

            if (companyField == null)
            {
                return NotFound();
            }

            return companyField;
        }

        // PUT: api/CompanyFields/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanyField(long id, CompanyField companyField)
        {
            if (id != companyField.Id)
            {
                return BadRequest();
            }

            _context.Entry(companyField).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyFieldExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CompanyFields
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CompanyField>> PostCompanyField(CompanyField companyField)
        {
            _context.CompanyFields.Add(companyField);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompanyField", new { id = companyField.Id }, companyField);
        }

        // DELETE: api/CompanyFields/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompanyField(long id)
        {
            var companyField = await _context.CompanyFields.FindAsync(id);
            if (companyField == null)
            {
                return NotFound();
            }

            _context.CompanyFields.Remove(companyField);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CompanyFieldExists(long id)
        {
            return _context.CompanyFields.Any(e => e.Id == id);
        }
    }
}
