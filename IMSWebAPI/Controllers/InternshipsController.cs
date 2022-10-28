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
    public class InternshipsController : ControllerBase
    {
        private readonly imsdbContext _context;

        public InternshipsController(imsdbContext context)
        {
            _context = context;
        }

        // GET: api/Internships
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Internship>>> GetInternships()
        {
            return await _context.Internships.ToListAsync();
        }

        // GET: api/Internships/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Internship>> GetInternship(long id)
        {
            var internship = await _context.Internships.FindAsync(id);

            if (internship == null)
            {
                return NotFound();
            }

            return internship;
        }

        // PUT: api/Internships/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInternship(long id, Internship internship)
        {
            if (id != internship.Id)
            {
                return BadRequest();
            }

            _context.Entry(internship).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InternshipExists(id))
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

        // POST: api/Internships
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Internship>> PostInternship(Internship internship)
        {
            _context.Internships.Add(internship);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInternship", new { id = internship.Id }, internship);
        }

        // DELETE: api/Internships/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInternship(long id)
        {
            var internship = await _context.Internships.FindAsync(id);
            if (internship == null)
            {
                return NotFound();
            }

            _context.Internships.Remove(internship);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InternshipExists(long id)
        {
            return _context.Internships.Any(e => e.Id == id);
        }
    }
}
