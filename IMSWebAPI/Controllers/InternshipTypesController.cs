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
    public class InternshipTypesController : ControllerBase
    {
        private readonly imsdbContext _context;

        public InternshipTypesController(imsdbContext context)
        {
            _context = context;
        }

        // GET: api/InternshipTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InternshipType>>> GetInternshipTypes()
        {
            return await _context.InternshipTypes.ToListAsync();
        }

        // GET: api/InternshipTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InternshipType>> GetInternshipType(short id)
        {
            var internshipType = await _context.InternshipTypes.FindAsync(id);

            if (internshipType == null)
            {
                return NotFound();
            }

            return internshipType;
        }

        // PUT: api/InternshipTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInternshipType(short id, InternshipType internshipType)
        {
            if (id != internshipType.Id)
            {
                return BadRequest();
            }

            _context.Entry(internshipType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InternshipTypeExists(id))
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

        // POST: api/InternshipTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InternshipType>> PostInternshipType(InternshipType internshipType)
        {
            _context.InternshipTypes.Add(internshipType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInternshipType", new { id = internshipType.Id }, internshipType);
        }

        // DELETE: api/InternshipTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInternshipType(short id)
        {
            var internshipType = await _context.InternshipTypes.FindAsync(id);
            if (internshipType == null)
            {
                return NotFound();
            }

            _context.InternshipTypes.Remove(internshipType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InternshipTypeExists(short id)
        {
            return _context.InternshipTypes.Any(e => e.Id == id);
        }
    }
}
