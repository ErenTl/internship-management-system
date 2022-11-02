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
    public class StudentInternshipsController : ControllerBase
    {
        private readonly imsdbContext _context;

        public StudentInternshipsController(imsdbContext context)
        {
            _context = context;
        }

        // GET: api/StudentInternships
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentInternship>>> GetStudentInternships()
        {
            return await _context.StudentInternships.ToListAsync();
        }

        // GET: api/StudentInternships/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentInternship>> GetStudentInternship(long id)
        {
            var studentInternship = await _context.StudentInternships.FindAsync(id);

            if (studentInternship == null)
            {
                return NotFound();
            }

            return studentInternship;
        }

        // GET: api/StudentInterships/getbyuserid/5
        [HttpGet("getbyuserid/{id}")]
        public async Task<ActionResult<IEnumerable<StudentInternship>>> GetStudentInternshipByUserId(long id)
        {
            var studentInternship = await _context.StudentInternships.Where(si => si.StudentId == id).ToListAsync();

            if (studentInternship == null)
            {
                return NotFound();
            }

            return studentInternship;
        }

        // PUT: api/StudentInternships/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentInternship(long id, StudentInternship studentInternship)
        {
            if (id != studentInternship.Id)
            {
                return BadRequest();
            }

            _context.Entry(studentInternship).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentInternshipExists(id))
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

        // POST: api/StudentInternships
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StudentInternship>> PostStudentInternship(StudentInternship studentInternship)
        {
            _context.StudentInternships.Add(studentInternship);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentInternship", new { id = studentInternship.Id }, studentInternship);
        }

        // DELETE: api/StudentInternships/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentInternship(long id)
        {
            var studentInternship = await _context.StudentInternships.FindAsync(id);
            if (studentInternship == null)
            {
                return NotFound();
            }

            _context.StudentInternships.Remove(studentInternship);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StudentInternshipExists(long id)
        {
            return _context.StudentInternships.Any(e => e.Id == id);
        }
    }
}
