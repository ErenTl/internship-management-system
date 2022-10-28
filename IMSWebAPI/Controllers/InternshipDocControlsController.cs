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
    public class InternshipDocControlsController : ControllerBase
    {
        private readonly imsdbContext _context;

        public InternshipDocControlsController(imsdbContext context)
        {
            _context = context;
        }

        // GET: api/InternshipDocControls
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InternshipDocControl>>> GetInternshipDocControls()
        {
            return await _context.InternshipDocControls.ToListAsync();
        }

        // GET: api/InternshipDocControls/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InternshipDocControl>> GetInternshipDocControl(int id)
        {
            var internshipDocControl = await _context.InternshipDocControls.FindAsync(id);

            if (internshipDocControl == null)
            {
                return NotFound();
            }

            return internshipDocControl;
        }

        // PUT: api/InternshipDocControls/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInternshipDocControl(int id, InternshipDocControl internshipDocControl)
        {
            if (id != internshipDocControl.Id)
            {
                return BadRequest();
            }

            _context.Entry(internshipDocControl).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InternshipDocControlExists(id))
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

        // POST: api/InternshipDocControls
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InternshipDocControl>> PostInternshipDocControl(InternshipDocControl internshipDocControl)
        {
            _context.InternshipDocControls.Add(internshipDocControl);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInternshipDocControl", new { id = internshipDocControl.Id }, internshipDocControl);
        }

        // DELETE: api/InternshipDocControls/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInternshipDocControl(int id)
        {
            var internshipDocControl = await _context.InternshipDocControls.FindAsync(id);
            if (internshipDocControl == null)
            {
                return NotFound();
            }

            _context.InternshipDocControls.Remove(internshipDocControl);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InternshipDocControlExists(int id)
        {
            return _context.InternshipDocControls.Any(e => e.Id == id);
        }
    }
}
