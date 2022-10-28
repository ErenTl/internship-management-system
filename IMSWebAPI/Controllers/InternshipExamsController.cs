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
    public class InternshipExamsController : ControllerBase
    {
        private readonly imsdbContext _context;

        public InternshipExamsController(imsdbContext context)
        {
            _context = context;
        }

        // GET: api/InternshipExams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InternshipExam>>> GetInternshipExams()
        {
            return await _context.InternshipExams.ToListAsync();
        }

        // GET: api/InternshipExams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InternshipExam>> GetInternshipExam(int id)
        {
            var internshipExam = await _context.InternshipExams.FindAsync(id);

            if (internshipExam == null)
            {
                return NotFound();
            }

            return internshipExam;
        }

        // PUT: api/InternshipExams/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInternshipExam(int id, InternshipExam internshipExam)
        {
            if (id != internshipExam.Id)
            {
                return BadRequest();
            }

            _context.Entry(internshipExam).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InternshipExamExists(id))
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

        // POST: api/InternshipExams
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InternshipExam>> PostInternshipExam(InternshipExam internshipExam)
        {
            _context.InternshipExams.Add(internshipExam);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInternshipExam", new { id = internshipExam.Id }, internshipExam);
        }

        // DELETE: api/InternshipExams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInternshipExam(int id)
        {
            var internshipExam = await _context.InternshipExams.FindAsync(id);
            if (internshipExam == null)
            {
                return NotFound();
            }

            _context.InternshipExams.Remove(internshipExam);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InternshipExamExists(int id)
        {
            return _context.InternshipExams.Any(e => e.Id == id);
        }
    }
}
